import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Icon } from '../ui/Icon';

// Total frames extracted and chroma-keyed from Blender animation
const TOTAL_FRAMES = 30;

const FRAME_PATHS = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const num = i < 10 ? `0${i}` : `${i}`;
  return `/animations/roll_frames/frame_${num}.webp`;
});

// Preload frames in memory once for instant 60fps scrubbing
if (typeof window !== 'undefined') {
  FRAME_PATHS.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Fruit-specific color palettes using hue-rotate & saturation
const FRUIT_PALETTES: Record<string, string> = {
  'freeze-dried-strawberries': 'hue-rotate(0deg) saturate(1.2)',
  'frozen-strawberries':       'hue-rotate(0deg) saturate(1.2)',
  'dried-mango':               'hue-rotate(45deg) saturate(1.4) brightness(1.05)',
  'frozen-mango':              'hue-rotate(45deg) saturate(1.4) brightness(1.05)',
  'dried-apricots':            'hue-rotate(32deg) saturate(1.3)',
  'medjool-dates':             'hue-rotate(335deg) brightness(0.85) saturate(0.9)',
  'medjool-dates-siwi':        'hue-rotate(335deg) brightness(0.85) saturate(0.9)',
  'dried-figs':                'hue-rotate(275deg) saturate(1.15) brightness(0.95)',
  'golden-raisins':            'hue-rotate(50deg) saturate(1.35) brightness(1.1)',
  'pomegranate-seeds':         'hue-rotate(350deg) saturate(1.3)',
  'guava':                     'hue-rotate(85deg) saturate(1.15)',
  'frozen-peas':               'hue-rotate(115deg) saturate(1.3) brightness(0.95)',
  'frozen-corn':               'hue-rotate(55deg) saturate(1.5) brightness(1.1)',
  'default':                   'hue-rotate(100deg) saturate(1.2)',
};

interface BlenderRollCardProps {
  productId: string;
  trigger?: 'scroll' | 'hover' | 'both';
  children: React.ReactNode;
  className?: string;
  cardIndex?: number;
}

export const BlenderRollCard: React.FC<BlenderRollCardProps> = ({
  productId,
  trigger = 'both',
  children,
  className = '',
  cardIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);
  const rafRef = useRef<number>(0);
  const currentFrameRef = useRef(0);

  const fruitFilter = useMemo(
    () => FRUIT_PALETTES[productId] ?? FRUIT_PALETTES['default'],
    [productId]
  );

  // Smooth frame animator
  const animateToFrame = useCallback((targetFrame: number, durationMs: number = 700) => {
    cancelAnimationFrame(rafRef.current);
    const startFrame = currentFrameRef.current;
    const frameDiff = targetFrame - startFrame;
    if (frameDiff === 0) return;

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      const nextFrame = Math.round(startFrame + frameDiff * eased);
      const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, nextFrame));

      currentFrameRef.current = clamped;
      setFrameIndex(clamped);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setIsOpen(targetFrame === TOTAL_FRAMES - 1);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, []);

  // Open: Roll UP (0 -> 29) to reveal the card underneath
  const openRoll = useCallback(() => {
    animateToFrame(TOTAL_FRAMES - 1, 800);
  }, [animateToFrame]);

  // Close: Roll DOWN (29 -> 0) to cover the card
  const closeRoll = useCallback(() => {
    animateToFrame(0, 600);
  }, [animateToFrame]);

  const toggleRoll = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentFrameRef.current >= TOTAL_FRAMES - 2) {
      closeRoll();
    } else {
      openRoll();
    }
  }, [openRoll, closeRoll]);

  // Viewport scroll trigger
  useEffect(() => {
    if (trigger === 'hover') return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedOnce) {
          setHasAnimatedOnce(true);
          // Stagger slightly by cardIndex for organic cascade
          const delay = Math.min(cardIndex * 120, 600);
          const t = setTimeout(() => {
            openRoll();
          }, delay);
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, hasAnimatedOnce, cardIndex, openRoll]);

  // Cleanup RAF
  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseEnter = () => {
    if (trigger === 'hover' || trigger === 'both') {
      if (currentFrameRef.current < TOTAL_FRAMES - 1) {
        openRoll();
      }
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      closeRoll();
    }
  };

  // Is roll partially or fully covering the card?
  const isRolledDown = frameIndex < TOTAL_FRAMES - 1;

  return (
    <div
      ref={containerRef}
      className={`relative select-none group/roll ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Underlying Real Product Card Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* 2. 3D Blender Roll Curtain Overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden"
        style={{
          opacity: 1,
          transition: 'opacity 0.2s ease',
        }}
      >
        <img
          src={FRAME_PATHS[frameIndex]}
          alt="3D Roll"
          className="w-full h-full object-cover select-none pointer-events-none"
          style={{
            filter: fruitFilter,
            transform: 'translateZ(0)',
          }}
          draggable={false}
        />
      </div>

      {/* 3. Interactive Chic Roll Control Toggle (Top-End corner) */}
      <div className="absolute top-2.5 end-2.5 z-30 opacity-90 group-hover/roll:opacity-100 transition-opacity">
        <button
          onClick={toggleRoll}
          title={isRolledDown ? 'فتح الرول ثلاثي الأبعاد' : 'إغلاق الرول'}
          aria-label="Toggle 3D Roll"
          className="flex items-center gap-1 px-2 py-1 rounded-lg bg-black/40 hover:bg-black/70 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-md cursor-pointer transition-all hover:scale-105"
        >
          <Icon name={isRolledDown ? 'Eye' : 'RotateCcw'} size={11} className="text-emerald-300" />
          <span className="hidden sm:inline">
            {isRolledDown ? 'فتح الرول' : 'إعادة الرول'}
          </span>
        </button>
      </div>

      {/* 4. Click overlay when fully rolled down to unroll on click */}
      {frameIndex === 0 && (
        <div
          onClick={openRoll}
          className="absolute inset-0 z-25 cursor-pointer flex items-end justify-center pb-8 bg-black/5 hover:bg-black/10 transition-colors rounded-2xl"
        >
          <div className="px-3 py-1.5 rounded-full bg-white/95 text-slate-800 text-xs font-bold shadow-lg border border-slate-200 flex items-center gap-1.5 animate-bounce">
            <Icon name="Sparkles" size={13} className="text-emerald-600" />
            <span>اضغط لفتح الرول</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlenderRollCard;
