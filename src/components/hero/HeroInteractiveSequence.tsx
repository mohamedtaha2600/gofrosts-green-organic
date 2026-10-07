import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Language } from '../../types';
import { Icon } from '../ui/Icon';

interface HeroInteractiveSequenceProps {
  lang: Language;
}

// 107 clean frames starting immediately after the light glare pass
const TOTAL_FRAMES = 107;

export const HeroInteractiveSequence: React.FC<HeroInteractiveSequenceProps> = ({ lang }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isArabic = lang === 'ar';

  const renderFrame = useCallback((frameNum: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameNum - 1];
    if (img && img.complete) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Preload frame 1 immediately, followed by remaining frames progressively
  useEffect(() => {
    const firstImg = new Image();
    firstImg.src = '/videos/hero_frames/frame_001.webp';
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      renderFrame(1);
    };

    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const numStr = String(i).padStart(3, '0');
      img.src = `/videos/hero_frames/frame_${numStr}.webp`;
      img.onload = () => {
        imagesRef.current[i - 1] = img;
      };
    }
  }, [renderFrame]);

  // Autoplay loop timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        const next = prev >= TOTAL_FRAMES ? 1 : prev + 1;
        renderFrame(next);
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [isPlaying, renderFrame]);

  // Pure scroll-driven frame scrubbing: Locked in viewport until sequence finishes
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isPlaying) return;
      if (!ticking) {
        requestAnimationFrame(() => {
          const el = containerRef.current;
          if (!el) {
            ticking = false;
            return;
          }
          
          const rect = el.getBoundingClientRect();
          const totalScrollable = rect.height - window.innerHeight;
          if (totalScrollable <= 0) {
            ticking = false;
            return;
          }

          const scrolled = -rect.top;
          if (scrolled > 20 && !hasScrolled) {
            setHasScrolled(true);
          }

          // Progress from 0 (top of section) to 1.0 (bottom of scroll track)
          const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
          
          // Map progress smoothly: reaches the final scattered fruits right before exit
          const targetFrame = Math.max(1, Math.min(TOTAL_FRAMES, Math.floor(progress * (TOTAL_FRAMES - 1)) + 1));
          
          setCurrentFrame(targetFrame);
          renderFrame(targetFrame);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying, hasScrolled, renderFrame]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentFrame(1);
    renderFrame(1);
    const el = containerRef.current;
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320vh] sm:h-[360vh] lg:h-[400vh] bg-white select-none"
    >
      {/* Sticky Fullscreen Stage: Pinned while user scrolls through the sequence */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
        {/* Full-width seamless canvas: edge-to-edge coverage without lateral white margins */}
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className="w-full h-full object-cover bg-white block"
        />

        {/* Minimal Floating Action Controls (Play/Pause & Reset ONLY) */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md transition-all duration-300 max-w-[92vw]">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            className="p-1.5 sm:p-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors cursor-pointer shadow-2xs"
            title={isPlaying ? (isArabic ? 'إيقاف مؤقت' : 'Pause') : (isArabic ? 'تشغيل تلقائي' : 'Play')}
          >
            <Icon name={isPlaying ? 'Pause' : 'Play'} size={15} />
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer shadow-2xs"
            title={isArabic ? 'إعادة للشعار' : 'Reset to Logo'}
          >
            <Icon name="RotateCcw" size={15} />
          </button>

          {!hasScrolled && !isPlaying && (
            <div className="hidden sm:flex items-center gap-1.5 pe-2 text-[11px] font-semibold text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{isArabic ? 'مرّر لأسفل لتفجير الشعار' : 'Scroll down to explode logo'}</span>
              <Icon name="ChevronDown" size={12} className="animate-bounce text-emerald-600" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
