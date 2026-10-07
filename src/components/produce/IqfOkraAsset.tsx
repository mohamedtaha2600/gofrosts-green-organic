import React from 'react';

interface IqfOkraAssetProps {
  size?: number | string;
  className?: string;
  rotation?: number;
}

export const IqfOkraAsset: React.FC<IqfOkraAssetProps> = ({
  size = 100,
  className = '',
  rotation = -25,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
      className={`relative inline-flex items-center justify-center select-none filter drop-shadow-[0_12px_24px_rgba(5,150,105,0.35)] ${className}`}
    >
      <svg
        viewBox="0 0 100 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="okraGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>
        </defs>

        {/* Slender Pointed Pod */}
        <path
          d="M50 12 C44 20 40 40 42 75 C44 105 49 130 50 134 C51 130 56 105 58 75 C60 40 56 20 50 12 Z"
          fill="url(#okraGrad)"
        />

        {/* Stem Cap */}
        <path d="M40 22 C45 12 55 12 60 22 L58 30 L42 30 Z" fill="#047857" />
        <path d="M50 12 L50 4" stroke="#065F46" strokeWidth="2.5" strokeLinecap="round" />

        {/* Longitudinal Ridges */}
        <path d="M50 20 L50 128" stroke="#6EE7B7" strokeWidth="1.6" opacity="0.7" />
        <path d="M45 25 C46 55 46 95 48 120" stroke="#A7F3D0" strokeWidth="1.2" opacity="0.5" />

        {/* Frozen Frost Sparkle */}
        <circle cx="50" cy="45" r="1.5" fill="#FFFFFF" />
        <circle cx="48" cy="75" r="1.2" fill="#FFFFFF" opacity="0.8" />
      </svg>
    </div>
  );
};
