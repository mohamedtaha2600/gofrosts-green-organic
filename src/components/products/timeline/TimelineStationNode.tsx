import React, { useState, useCallback, useRef } from 'react';
import { TimelineStationItem } from '../../../types/timeline';
import { getProductVideoUrl, getProductPosterUrl } from '../../../data/productVideoMap';

interface TimelineStationNodeProps {
  station: TimelineStationItem;
  onOpenChromaForStation?: (stationId: string) => void;
  className?: string;
}

/**
 * Fruit Motion Video / Photo Display with Pure Floating Integration.
 * Seamless white background with ZERO dark borders or bottom gradients.
 * Calibrated 1:1 turntable video with identical first-frame poster.
 * Features an interactive rounded-square magnifying lens on hover.
 */
export const TimelineStationNode: React.FC<TimelineStationNodeProps> = ({
  station,
  className = '',
}) => {
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const LENS_SIZE = 150;
  const ZOOM = 2.4;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLensPos({ x, y });
  }, []);

  const videoUrl = station.customImageDataUrl?.endsWith('.mp4')
    ? station.customImageDataUrl
    : getProductVideoUrl(station.product.id);
  const posterUrl = getProductPosterUrl(station.product.id) || station.customImageDataUrl || station.product.image;
  const productName = station.produceNameAr || station.product.nameAr || station.product.nameEn;

  /* Lens boundary clamped so it stays gracefully inside the container */
  const halfLens = LENS_SIZE / 2;
  const containerW = containerRef.current?.offsetWidth || 440;
  const containerH = containerRef.current?.offsetHeight || 440;
  const clampedX = Math.max(halfLens, Math.min(lensPos.x, containerW - halfLens));
  const clampedY = Math.max(halfLens, Math.min(lensPos.y, containerH - halfLens));

  /* Background-position for zoomed image inside the lens */
  const bgX = -(clampedX * ZOOM - halfLens);
  const bgY = -(clampedY * ZOOM - halfLens);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center group select-none w-[280px] h-[280px] max-w-[calc(100vw-32px)] max-h-[calc(100vw-32px)] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] xl:w-[480px] xl:h-[480px] overflow-hidden rounded-3xl bg-transparent ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* ── Main Fruit Display: 360° Motion Video or Photographic Cutout ── */}
      {videoUrl ? (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
          preload="auto"
          className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <img
          src={posterUrl}
          alt={productName}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
      )}

      {/* ── Magnifier Lens Overlay (Rounded-Square Glass) - Desktop only ── */}
      {isHovering && (
        <div
          className="hidden md:block pointer-events-none absolute z-30 rounded-2xl border-2 border-emerald-500/80 shadow-[0_8px_32px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.6)] overflow-hidden bg-white"
          style={{
            width: LENS_SIZE,
            height: LENS_SIZE,
            left: clampedX - halfLens,
            top: clampedY - halfLens,
          }}
        >
          {videoUrl ? (
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              poster={posterUrl}
              preload="auto"
              className="absolute pointer-events-none object-cover object-center"
              style={{
                width: containerW * ZOOM,
                height: containerH * ZOOM,
                left: -(clampedX * ZOOM - halfLens),
                top: -(clampedY * ZOOM - halfLens),
                maxWidth: 'none',
                maxHeight: 'none',
              }}
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background: `url(${posterUrl}) no-repeat`,
                backgroundSize: `${containerW * ZOOM}px ${containerH * ZOOM}px`,
                backgroundPosition: `${bgX}px ${bgY}px`,
              }}
            />
          )}

          {/* Clean glossy shimmer reflection */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/25 via-transparent to-black/5 pointer-events-none" />
          {/* Subtle pointer drop arrow below lens */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[7px] border-r-[7px] border-t-[9px] border-l-transparent border-r-transparent border-t-emerald-600/90" />
        </div>
      )}
    </div>
  );
};
