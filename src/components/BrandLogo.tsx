import React from 'react';
import originalLogoImg from '../assets/images/regenerated_image_1788111862634.png';

interface BrandLogoProps {
  variant?: 'full' | 'icon-only' | 'compact' | 'light' | 'original';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'vertical';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  layout = 'horizontal',
}) => {
  // Dimension scales
  const sizeMap = {
    sm: {
      vertW: 140,
      horizH: 36,
      iconH: 28,
    },
    md: {
      vertW: 210,
      horizH: 48,
      iconH: 38,
    },
    lg: {
      vertW: 300,
      horizH: 64,
      iconH: 52,
    },
    xl: {
      vertW: 420,
      horizH: 90,
      iconH: 74,
    },
  };

  const dims = sizeMap[size] || sizeMap.md;

  // Vertical stacked lockup using the exact user-provided image
  if (layout === 'vertical' || variant === 'original') {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center select-none ${className}`}
        style={{ width: dims.vertW, maxWidth: '100%' }}
      >
        <img
          src={originalLogoImg}
          alt="Green Organic Food Investments"
          className="w-full h-auto object-contain pointer-events-none drop-shadow-xs"
          draggable={false}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Icon only
  if (variant === 'icon-only') {
    return (
      <div
        className={`inline-flex items-center justify-center select-none overflow-hidden ${className}`}
        style={{ height: dims.iconH, width: dims.iconH * 1.3 }}
      >
        <img
          src={originalLogoImg}
          alt="Green Organic"
          className="w-[180%] max-w-none -mt-1 pointer-events-none object-top"
          draggable={false}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Horizontal lockup (Navbar, Headers, compact areas) - Uses the exact uploaded logo image
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={originalLogoImg}
        alt="Green Organic Food Investments"
        style={{ height: dims.horizH }}
        className="w-auto object-contain pointer-events-none"
        draggable={false}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
