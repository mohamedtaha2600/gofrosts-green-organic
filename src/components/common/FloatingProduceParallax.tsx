import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useProduceMedia } from '../../hooks/useProduceMedia';

interface FloatingProduceParallaxProps {
  className?: string;
}

export const FloatingProduceParallax: React.FC<FloatingProduceParallaxProps> = ({
  className = '',
}) => {
  const { config } = useProduceMedia();
  const { scrollY } = useScroll();

  // Mouse offset tracking for 3D spatial depth
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Check if user has uploaded any custom 3D fruit images
  const uploadedSlots = config.customSlots.filter((s) => Boolean(s.dataUrl));
  const hasUploadedFruits = uploadedSlots.length > 0;

  useEffect(() => {
    if (!config.motionEnabled || !hasUploadedFruits) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [config.motionEnabled, hasUploadedFruits]);

  // Physics springs adjusted by user speed multiplier
  const smoothY = useSpring(scrollY, {
    stiffness: 55 * config.motionSpeed,
    damping: 24,
  });

  const y1 = useTransform(smoothY, [0, 2000], [0, -420 * config.motionSpeed]);
  const y2 = useTransform(smoothY, [0, 2000], [0, -320 * config.motionSpeed]);
  const y3 = useTransform(smoothY, [0, 2000], [0, -220 * config.motionSpeed]);
  const rot1 = useTransform(smoothY, [0, 2000], [0, 60]);
  const rot2 = useTransform(smoothY, [0, 2000], [0, -75]);

  // If motion is disabled OR user hasn't uploaded custom fruit designs yet, stay completely clean!
  if (!config.motionEnabled || !hasUploadedFruits) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-30 overflow-hidden select-none ${className}`}
    >
      {uploadedSlots.map((slot, index) => {
        const yDepths = [y1, y2, y3];
        const rotDepths = [rot1, rot2, rot1];
        const positions = [
          'top-[18%] end-6 sm:end-12 lg:end-20 w-24 sm:w-32 lg:w-40',
          'top-[35%] start-6 sm:start-12 lg:start-16 w-20 sm:w-28 lg:w-36',
          'top-[55%] end-8 sm:end-16 lg:end-24 w-20 sm:w-26 lg:w-32',
          'top-[72%] start-8 sm:start-14 lg:start-20 w-18 sm:w-24 lg:w-30',
          'top-[88%] end-6 sm:end-12 lg:end-18 w-22 sm:w-28 lg:w-34',
        ];

        return (
          <motion.div
            key={slot.id}
            style={{
              y: yDepths[index % yDepths.length],
              rotate: rotDepths[index % rotDepths.length],
              x: mousePos.x * (index % 2 === 0 ? -1 : 1) * 0.8,
            }}
            animate={{
              y: [0, index % 2 === 0 ? -15 : 15, 0],
              rotate: [0, index % 2 === 0 ? 6 : -6, 0],
            }}
            transition={{
              duration: (7 + index) / config.motionSpeed,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.4,
            }}
            className={`absolute ${positions[index % positions.length]} z-30 filter drop-shadow-[0_16px_32px_rgba(220,38,38,0.35)]`}
          >
            <img
              src={slot.dataUrl}
              alt={slot.name}
              className="w-full h-auto object-contain pointer-events-none select-none"
            />
          </motion.div>
        );
      })}
    </div>
  );
};
