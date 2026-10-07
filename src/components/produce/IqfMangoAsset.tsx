import React from 'react';

interface IqfMangoAssetProps {
  size?: number | string;
  className?: string;
  rotation?: number;
}

export const IqfMangoAsset: React.FC<IqfMangoAssetProps> = ({
  size = 110,
  className = '',
  rotation = 20,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
      className={`relative inline-flex items-center justify-center select-none filter drop-shadow-[0_14px_28px_rgba(245,158,11,0.35)] ${className}`}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="mangoTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="60%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <linearGradient id="mangoSide" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          <linearGradient id="mangoFront" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>

        {/* 3D Frozen Mango Dice Facets */}
        {/* Top Facet */}
        <polygon points="25,45 65,22 105,42 62,65" fill="url(#mangoTop)" />
        {/* Right Facet */}
        <polygon points="105,42 62,65 62,105 102,82" fill="url(#mangoSide)" />
        {/* Left Facet */}
        <polygon points="25,45 62,65 62,105 22,85" fill="url(#mangoFront)" />

        {/* Crystalline Frost Line Accents */}
        <path d="M25 45 L65 22 L105 42" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <path d="M62 65 L62 105" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
        <path d="M65 22 L62 65" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.7" />

        {/* Ice Frost Droplet */}
        <circle cx="65" cy="22" r="2.5" fill="#FFFFFF" />
        <circle cx="45" cy="55" r="1.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="85" cy="52" r="1.5" fill="#FFFFFF" opacity="0.9" />
      </svg>
    </div>
  );
};
