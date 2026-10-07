import React from 'react';

interface IqfArtichokeAssetProps {
  size?: number | string;
  className?: string;
  rotation?: number;
}

export const IqfArtichokeAsset: React.FC<IqfArtichokeAssetProps> = ({
  size = 110,
  className = '',
  rotation = 15,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
      className={`relative inline-flex items-center justify-center select-none filter drop-shadow-[0_12px_26px_rgba(4,120,87,0.35)] ${className}`}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="artBottom" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="45%" stopColor="#34D399" />
            <stop offset="85%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064E3B" />
          </radialGradient>
        </defs>

        {/* Circular Trimmed Artichoke Bottom Cup */}
        <ellipse cx="60" cy="62" rx="46" ry="38" fill="url(#artBottom)" />
        {/* Inner Heart Depression */}
        <ellipse cx="60" cy="58" rx="26" ry="18" fill="#047857" opacity="0.4" />
        <ellipse cx="60" cy="56" rx="22" ry="14" fill="#064E3B" opacity="0.3" />

        {/* Outer Bract Leaves Trim */}
        <path d="M22 55 C28 35 48 25 60 25 C72 25 92 35 98 55" stroke="#6EE7B7" strokeWidth="2.5" fill="none" opacity="0.6" />
        <path d="M30 65 C35 78 50 86 60 86 C70 86 85 78 90 65" stroke="#065F46" strokeWidth="2" fill="none" opacity="0.4" />

        {/* Frost Crystalline Dust */}
        <circle cx="60" cy="25" r="2" fill="#FFFFFF" />
        <circle cx="38" cy="42" r="1.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="82" cy="44" r="1.5" fill="#FFFFFF" opacity="0.9" />
      </svg>
    </div>
  );
};
