import React from 'react';

interface WavyTimelinePathProps {
  totalStations: number;
  containerHeight: number;
  className?: string;
}

/**
 * Big Organic Flowing Spline Spine for Light Mode
 * Replaces the dark industrial pipe with a continuous luminous organic ribbon:
 * - Wide soft ambient glow track
 * - Glassy fluid core gradient
 * - Continuous wave connecting all stations gracefully
 * - Crystal anchor nodes at curve apexes
 */
export const WavyTimelinePath: React.FC<WavyTimelinePathProps> = ({
  totalStations,
  containerHeight,
  className = '',
}) => {
  if (totalStations <= 0 || containerHeight <= 0) return null;

  const width = 1200;
  const height = containerHeight;
  const stationInterval = height / Math.max(1, totalStations);

  // Calculate smooth oscillating bezier spline points
  const points: { x: number; y: number; sway: number }[] = [];
  const waveAmplitude = 120; // wide graceful curve sway
  const centerX = width / 2;

  for (let i = 0; i < totalStations; i++) {
    const y = i * stationInterval + stationInterval * 0.5;
    // Alternating wave sway
    const sway = i % 2 === 0 ? waveAmplitude : -waveAmplitude;
    const x = centerX + sway;
    points.push({ x, y, sway });
  }

  // Construct smooth cubic bezier path for the organic spine
  let pathD = `M ${centerX} 0`;
  if (points.length > 0) {
    pathD += ` C ${centerX} ${points[0].y * 0.45}, ${points[0].x} ${points[0].y * 0.55}, ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const midY = (p1.y + p2.y) / 2;
      pathD += ` C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
    }

    const lastP = points[points.length - 1];
    pathD += ` C ${lastP.x} ${(lastP.y + height) / 2}, ${centerX} ${(lastP.y + height) / 2}, ${centerX} ${height}`;
  }

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {/* Soft ambient glow filter */}
          <filter id="lightGlow" x="-20%" y="-10%" width="140%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          <linearGradient id="ambientPathGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.18" />
          </linearGradient>

          <linearGradient id="glassRibbonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#10b981" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#10b981" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="coreEmeraldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#047857" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* 1. Wide Ambient Glow Aura */}
        <path
          d={pathD}
          stroke="url(#ambientPathGlow)"
          strokeWidth="38"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#lightGlow)"
        />

        {/* 2. Glass Translucent Ribbon Layer */}
        <path
          d={pathD}
          stroke="url(#glassRibbonGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />

        {/* 3. Core Emerald Stream Line */}
        <path
          d={pathD}
          stroke="url(#coreEmeraldGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 4. Dynamic Flowing Dashed Energy Particles */}
        <path
          d={pathD}
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeDasharray="14 26"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* 5. Crystal Station Connection Nodes */}
        {points.map((pt, idx) => (
          <g key={idx} transform={`translate(${pt.x}, ${pt.y})`}>
            {/* Outer halo */}
            <circle r="22" fill="#10b981" fillOpacity="0.12" />
            {/* White disc */}
            <circle r="12" fill="#ffffff" stroke="#10b981" strokeWidth="2.5" />
            {/* Inner jewel core */}
            <circle r="5" fill="#059669" />
          </g>
        ))}
      </svg>
    </div>
  );
};
