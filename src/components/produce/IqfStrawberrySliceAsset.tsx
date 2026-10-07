import React from 'react';

interface IqfStrawberrySliceAssetProps {
  size?: number | string;
  className?: string;
  rotation?: number;
}

export const IqfStrawberrySliceAsset: React.FC<IqfStrawberrySliceAssetProps> = ({
  size = 110,
  className = '',
  rotation = -15,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
      className={`relative inline-flex items-center justify-center select-none filter drop-shadow-[0_12px_28px_rgba(225,29,72,0.35)] ${className}`}
    >
      <svg
        viewBox="0 0 140 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="sliceOuterGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="60%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#9F1239" />
          </linearGradient>

          <radialGradient id="slicePithGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF1F2" />
            <stop offset="40%" stopColor="#FFE4E6" />
            <stop offset="85%" stopColor="#FDA4AF" />
            <stop offset="100%" stopColor="#F43F5E" />
          </radialGradient>
        </defs>

        {/* Outer Red Rind */}
        <path
          d="M70 148 C35 120 18 85 24 45 C28 20 55 15 70 26 C85 15 112 20 116 45 C122 85 105 120 70 148 Z"
          fill="url(#sliceOuterGrad)"
        />

        {/* Inner Flesh Pith */}
        <path
          d="M70 138 C40 112 28 80 32 48 C36 28 58 24 70 34 C82 24 104 28 108 48 C112 80 100 112 70 138 Z"
          fill="url(#slicePithGrad)"
        />

        {/* Central Core Rays */}
        <g stroke="#FFF1F2" strokeWidth="1.8" opacity="0.8">
          <path d="M70 65 L50 48" />
          <path d="M70 65 L45 68" />
          <path d="M70 65 L52 90" />
          <path d="M70 65 L68 115" />
          <path d="M70 65 L88 92" />
          <path d="M70 65 L95 68" />
          <path d="M70 65 L90 48" />
        </g>

        {/* Central Bright Star Core */}
        <ellipse cx="70" cy="65" rx="8" ry="12" fill="#FFFFFF" opacity="0.9" />

        {/* Frost Crystalline Dusting */}
        <circle cx="50" cy="50" r="1.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="88" cy="55" r="1.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="60" cy="95" r="1.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="80" cy="100" r="1.5" fill="#FFFFFF" opacity="0.9" />
      </svg>
    </div>
  );
};
