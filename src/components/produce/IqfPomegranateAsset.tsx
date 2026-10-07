import React from 'react';

interface IqfPomegranateAssetProps {
  size?: number | string;
  className?: string;
  rotation?: number;
}

export const IqfPomegranateAsset: React.FC<IqfPomegranateAssetProps> = ({
  size = 90,
  className = '',
  rotation = 10,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
      className={`relative inline-flex items-center justify-center select-none filter drop-shadow-[0_12px_24px_rgba(190,18,60,0.4)] ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="pomRuby" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FDA4AF" />
            <stop offset="25%" stopColor="#E11D48" />
            <stop offset="70%" stopColor="#9F1239" />
            <stop offset="100%" stopColor="#4C0519" />
          </radialGradient>
        </defs>

        {/* Ruby Jewel Faceted Aril */}
        <polygon
          points="50,15 80,30 88,65 62,88 32,82 18,52 28,25"
          fill="url(#pomRuby)"
        />

        {/* Inner Seed Hard Core */}
        <ellipse cx="50" cy="55" rx="14" ry="18" fill="#FFE4E6" opacity="0.3" transform="rotate(-15 50 55)" />

        {/* Gem Facet Highlight */}
        <polygon points="50,15 80,30 65,48 40,35" fill="#FFFFFF" opacity="0.4" />
        <polygon points="28,25 50,15 40,35 22,45" fill="#FFFFFF" opacity="0.25" />

        {/* Frost Sparkle */}
        <circle cx="45" cy="28" r="2" fill="#FFFFFF" />
        <circle cx="75" cy="40" r="1.5" fill="#FFFFFF" opacity="0.8" />
      </svg>
    </div>
  );
};
