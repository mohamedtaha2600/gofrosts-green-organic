/**
 * RollRevealCard — Premium Scroll-Up / Roll-Down 3D Reveal Effect
 * Powered by Framer Motion (motion library already in project)
 *
 * Concept:
 *   - A colored "roll" (cylinder-shaped strip) sits ON TOP of the card
 *   - On hover (or auto): roll scrolls UP revealing the card info beneath
 *   - Each fruit gets its signature color
 *   - Pure CSS 3D transforms + motion for silky 60fps animation
 */

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';

// ─── Fruit Color Palette (matches each product id) ────────────────────────────
export const FRUIT_ROLL_COLORS: Record<string, { from: string; to: string; shadow: string }> = {
  'dried-figs':               { from: '#7C3AED', to: '#4C1D95', shadow: 'rgba(124,58,237,0.45)' },
  'dried-apricots':           { from: '#F97316', to: '#C2410C', shadow: 'rgba(249,115,22,0.45)' },
  'dried-mango':              { from: '#EAB308', to: '#A16207', shadow: 'rgba(234,179,8,0.45)'  },
  'medjool-dates':            { from: '#92400E', to: '#451A03', shadow: 'rgba(146,64,14,0.45)'  },
  'freeze-dried-strawberries':{ from: '#E11D48', to: '#881337', shadow: 'rgba(225,29,72,0.45)'  },
  'golden-raisins':           { from: '#D97706', to: '#92400E', shadow: 'rgba(217,119,6,0.45)'  },
  'pomegranate-seeds':        { from: '#BE123C', to: '#881337', shadow: 'rgba(190,18,60,0.45)'  },
  'guava':                    { from: '#16A34A', to: '#14532D', shadow: 'rgba(22,163,74,0.45)'  },
  'frozen-strawberries':      { from: '#F43F5E', to: '#BE123C', shadow: 'rgba(244,63,94,0.45)'  },
  'frozen-mango':             { from: '#FB923C', to: '#C2410C', shadow: 'rgba(251,146,60,0.45)' },
  'frozen-peas':              { from: '#4ADE80', to: '#15803D', shadow: 'rgba(74,222,128,0.45)' },
  'frozen-corn':              { from: '#FACC15', to: '#A16207', shadow: 'rgba(250,204,21,0.45)' },
  'default':                  { from: '#059669', to: '#065F46', shadow: 'rgba(5,150,105,0.45)'  },
};

function getFruitColor(productId: string) {
  return FRUIT_ROLL_COLORS[productId] ?? FRUIT_ROLL_COLORS['default'];
}

// ─── Main Component Props ─────────────────────────────────────────────────────
interface RollRevealCardProps {
  /** The product id — determines roll color */
  productId: string;
  /** Card width in px (default 280) */
  width?: number;
  /** Card height in px (default 380) */
  height?: number;
  /** Trigger mode: 'hover' (default) | 'auto' (loops continuously) */
  trigger?: 'hover' | 'auto';
  /** Content to reveal underneath the roll */
  children: React.ReactNode;
  /** Optional className for outer wrapper */
  className?: string;
}

const STRIP_SEGMENTS = 14;

export const RollRevealCard: React.FC<RollRevealCardProps> = ({
  productId,
  width = 280,
  height = 380,
  trigger = 'hover',
  children,
  className = '',
}) => {
  const colors = getFruitColor(productId);
  const controls = useAnimation();
  const [isRevealed, setIsRevealed] = useState(false);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The roll cylinder visual thickness
  const rollH = 40;
  // When fully rolled up, roll top is above the card
  const rolledUpY = -(height + rollH + 12);

  // ─── Roll Up animation ────────────────────────────────────────────────────
  const rollUp = useCallback(async () => {
    if (isRevealed) return;
    setIsRevealed(true);
    await controls.start({
      y: rolledUpY,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    });
  }, [isRevealed, controls, rolledUpY]);

  // ─── Roll Down animation ──────────────────────────────────────────────────
  const rollDown = useCallback(async () => {
    if (!isRevealed) return;
    setIsRevealed(false);
    await controls.start({
      y: 0,
      transition: {
        duration: 0.72,
        ease: [0.55, 0, 1, 0.45],
      },
    });
  }, [isRevealed, controls]);

  // ─── Auto-loop ────────────────────────────────────────────────────────────
  const startAutoLoop = useCallback(async () => {
    const loop = async () => {
      await new Promise<void>(r => { autoTimerRef.current = setTimeout(r, 900); });
      setIsRevealed(true);
      await controls.start({ y: rolledUpY, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } });
      await new Promise<void>(r => { autoTimerRef.current = setTimeout(r, 2400); });
      setIsRevealed(false);
      await controls.start({ y: 0, transition: { duration: 0.72, ease: [0.55, 0, 1, 0.45] } });
      await new Promise<void>(r => { autoTimerRef.current = setTimeout(r, 700); });
      loop();
    };
    loop();
  }, [controls, rolledUpY]);

  useEffect(() => {
    if (trigger === 'auto') {
      startAutoLoop();
    }
    return () => { if (autoTimerRef.current) clearTimeout(autoTimerRef.current); };
  }, [trigger, startAutoLoop]);

  const handleMouseEnter = () => { if (trigger === 'hover') rollUp(); };
  const handleMouseLeave = () => { if (trigger === 'hover') rollDown(); };
  const handleTouchStart  = () => { if (trigger === 'hover' && !isRevealed) rollUp(); };
  const handleTouchEnd    = () => { if (trigger === 'hover' && isRevealed) rollDown(); };

  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      style={{ width, height, borderRadius: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Layer 1: Card content (always underneath) ────────────────── */}
      <div className="absolute inset-0 z-10 overflow-hidden" style={{ borderRadius: 20 }}>
        {children}
      </div>

      {/* ── Layer 2: Dynamic shadow cast by roll ─────────────────────── */}
      <motion.div
        animate={{ opacity: isRevealed ? 0 : 0.5, scaleY: isRevealed ? 0.2 : 1 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 56,
          background: `linear-gradient(to bottom, ${colors.shadow}, transparent)`,
          zIndex: 15,
          pointerEvents: 'none',
          borderRadius: '20px 20px 0 0',
          transformOrigin: 'top',
        }}
      />

      {/* ── Layer 3: The Roll body (covers card, animates upward) ─────── */}
      <motion.div
        animate={controls}
        initial={{ y: 0 }}
        className="absolute inset-x-0 z-20"
        style={{
          top: 0,
          height: height + rollH + 4,
          background: `linear-gradient(165deg, ${colors.from} 0%, ${colors.to} 100%)`,
          borderRadius: '20px 20px 0 0',
          willChange: 'transform',
        }}
      >
        {/* Horizontal shading bands (papyrus / scroll texture) */}
        {Array.from({ length: STRIP_SEGMENTS }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: 0, right: 0,
              top: `${(i / STRIP_SEGMENTS) * 100}%`,
              height: 1,
              background: i % 2 === 0
                ? 'rgba(255,255,255,0.06)'
                : 'rgba(0,0,0,0.06)',
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Diagonal grain for premium material feel */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(52deg, transparent, transparent 8px, rgba(255,255,255,0.035) 8px, rgba(255,255,255,0.035) 9px)',
            pointerEvents: 'none',
            borderRadius: 'inherit',
          }}
        />

        {/* Vignette on sides */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.22) 100%)',
          pointerEvents: 'none',
        }} />

        {/* ── Cylinder Bottom Edge (the physical roll tube) ────────────── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: rollH,
            borderRadius: '0 0 50% 50% / 0 0 100% 100%',
            background: `linear-gradient(180deg, ${colors.from} 0%, ${colors.to} 55%, rgba(0,0,0,0.40) 100%)`,
            boxShadow: `0 8px 32px 0 ${colors.shadow}, inset 0 2px 0 0 rgba(255,255,255,0.22)`,
            overflow: 'hidden',
          }}
        >
          {/* Light reflection highlight on cylinder top */}
          <div style={{
            position: 'absolute',
            top: 7, left: '12%', right: '12%',
            height: 7,
            borderRadius: 999,
            background: 'rgba(255,255,255,0.32)',
            filter: 'blur(2.5px)',
          }} />
          {/* Secondary subtle reflection */}
          <div style={{
            position: 'absolute',
            top: 18, left: '32%', right: '32%',
            height: 3,
            borderRadius: 999,
            background: 'rgba(255,255,255,0.14)',
          }} />
          {/* Bottom shadow on cylinder edge */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: 10,
            background: 'rgba(0,0,0,0.28)',
          }} />
        </div>

        {/* Depth shadow just above cylinder edge */}
        <div style={{
          position: 'absolute',
          bottom: rollH - 2, left: 0, right: 0,
          height: 28,
          background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.20))',
          pointerEvents: 'none',
        }} />
      </motion.div>
    </div>
  );
};

export default RollRevealCard;
