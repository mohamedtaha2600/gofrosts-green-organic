import React from 'react';

interface IqfStrawberryAssetProps {
  size?: number | string;
  className?: string;
  variant?: 'whole' | 'frosty' | 'sliced';
  rotation?: number;
}

export const IqfStrawberryAsset: React.FC<IqfStrawberryAssetProps> = ({
  size = 120,
  className = '',
  variant = 'frosty',
  rotation = 0,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
      className={`relative inline-flex items-center justify-center select-none filter drop-shadow-[0_16px_32px_rgba(225,29,72,0.4)] ${className}`}
    >
      <svg
        viewBox="0 0 160 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Rich Egyptian Strawberry 3D Gradient */}
          <radialGradient
            id="berryGrad"
            cx="40%"
            cy="35%"
            r="65%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="35%" stopColor="#E11D48" />
            <stop offset="70%" stopColor="#BE123C" />
            <stop offset="100%" stopColor="#881337" />
          </radialGradient>

          {/* Calyx Green Leaves Gradient */}
          <linearGradient id="calyxGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>

          {/* Ice Frost Specular Highlights */}
          <linearGradient id="iceFrostGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* 1. Main Strawberry Heart Body */}
        <path
          d="M80 168 C35 135 15 95 22 52 C26 26 62 20 80 32 C98 20 134 26 138 52 C145 95 125 135 80 168 Z"
          fill="url(#berryGrad)"
        />

        {/* 2. Highlight Specular Volume Rim */}
        <path
          d="M32 55 C28 85 45 120 78 152 C48 118 36 86 38 60 C40 45 52 36 65 32 C45 35 34 42 32 55 Z"
          fill="#FFFFFF"
          opacity="0.35"
        />

        {/* 3. Golden Natural Achene Seeds */}
        <g fill="#FDE047" opacity="0.95">
          <ellipse cx="60" cy="55" rx="1.8" ry="3.2" transform="rotate(-10 60 55)" />
          <ellipse cx="85" cy="50" rx="1.8" ry="3.2" transform="rotate(5 85 50)" />
          <ellipse cx="108" cy="58" rx="1.8" ry="3.2" transform="rotate(15 108 58)" />
          
          <ellipse cx="48" cy="78" rx="1.8" ry="3.2" transform="rotate(-15 48 78)" />
          <ellipse cx="74" cy="74" rx="1.8" ry="3.2" transform="rotate(-2 74 74)" />
          <ellipse cx="98" cy="76" rx="1.8" ry="3.2" transform="rotate(12 98 76)" />
          <ellipse cx="120" cy="85" rx="1.8" ry="3.2" transform="rotate(22 120 85)" />

          <ellipse cx="62" cy="102" rx="1.8" ry="3.2" transform="rotate(-8 62 102)" />
          <ellipse cx="86" cy="100" rx="1.8" ry="3.2" transform="rotate(4 86 100)" />
          <ellipse cx="106" cy="108" rx="1.8" ry="3.2" transform="rotate(18 106 108)" />

          <ellipse cx="72" cy="128" rx="1.6" ry="2.8" transform="rotate(-4 72 128)" />
          <ellipse cx="92" cy="126" rx="1.6" ry="2.8" transform="rotate(8 92 126)" />

          <ellipse cx="80" cy="148" rx="1.4" ry="2.4" />
        </g>

        {/* 4. Natural Green Calyx Leaves */}
        <g fill="url(#calyxGrad)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))">
          {/* Central Stem */}
          <path d="M78 30 C76 14 82 8 85 4 C83 12 85 20 84 30 Z" fill="#047857" />
          {/* Leaves Spreading */}
          <path d="M80 34 C72 16 52 10 44 20 C54 24 64 30 72 36 Z" />
          <path d="M80 34 C60 30 42 34 38 44 C50 44 62 40 74 38 Z" />
          <path d="M80 34 C88 16 108 10 116 20 C106 24 96 30 88 36 Z" />
          <path d="M80 34 C100 30 118 34 122 44 C110 44 98 40 86 38 Z" />
          <path d="M76 34 C74 44 78 48 80 50 C82 48 86 44 84 34 Z" fill="#10B981" />
        </g>

        {/* 5. Crystalline IQF Frost Glistening & Ice Drops */}
        {variant === 'frosty' && (
          <g>
            {/* Frost crystal star 1 */}
            <path
              d="M48 64 L50 56 L52 64 L60 66 L52 68 L50 76 L48 68 L40 66 Z"
              fill="url(#iceFrostGrad)"
            />
            {/* Frost crystal star 2 */}
            <path
              d="M102 88 L103.5 82 L105 88 L111 89.5 L105 91 L103.5 97 L102 91 L96 89.5 Z"
              fill="url(#iceFrostGrad)"
            />
            {/* Ice glaze rim */}
            <path
              d="M34 50 Q48 38 72 35"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M110 45 Q125 58 128 78"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.65"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
