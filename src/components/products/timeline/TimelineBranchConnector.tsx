import React from 'react';

interface TimelineBranchConnectorProps {
  side: 'left' | 'right';
  stationNumber: number;
  className?: string;
}

/**
 * 3D Cryogenic Conduit Connector Beam
 * Visually bridges the 3D pipeline station node to the alternating product card
 * with glowing laser pulse, metallic anchor ring, and directional flow.
 */
export const TimelineBranchConnector: React.FC<TimelineBranchConnectorProps> = ({
  side,
  stationNumber,
  className = '',
}) => {
  const isLeft = side === 'left';

  return (
    <div
      aria-hidden="true"
      className={`hidden lg:flex items-center absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none ${
        isLeft
          ? 'end-[50%] me-12 w-28 sm:w-36 flex-row-reverse'
          : 'start-[50%] ms-12 w-28 sm:w-36 flex-row'
      } ${className}`}
    >
      {/* 3D Magnetic Docking Anchor */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 animate-ping absolute" />
        <div className="w-3.5 h-3.5 rounded-full bg-black border-2 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,1)]" />
      </div>

      {/* 3D Cylindrical Laser Conduit Beam */}
      <div className="flex-1 h-[3px] bg-gradient-to-r from-emerald-400 via-rose-500 to-emerald-400 relative overflow-hidden rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]">
        {/* Fast-flowing photon light pulse */}
        <div className="absolute inset-0 bg-white w-12 h-full rounded-full animate-[shimmer_1.8s_infinite] shadow-[0_0_8px_#ffffff]" />
      </div>

      {/* Directional Docking Terminal Cap */}
      <div
        className={`w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white shadow-[0_0_8px_rgba(16,185,129,0.9)] flex-shrink-0`}
      />
    </div>
  );
};
