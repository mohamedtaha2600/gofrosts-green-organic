import React from 'react';
import { Icon } from '../ui/Icon';

interface RfqProductBadgeProps {
  id: string;
  name: string;
  detail: string;
  gradient: string;
  borderColor: string;
  isMain?: boolean;
  onRemove: (id: string) => void;
  removeLabel?: string;
  mainLabel?: string;
}

export const RfqProductBadge: React.FC<RfqProductBadgeProps> = ({
  id,
  name,
  detail,
  gradient,
  borderColor,
  isMain = false,
  onRemove,
  removeLabel = 'حذف الصنف',
  mainLabel = 'رئيسي',
}) => {
  return (
    <div
      className="group relative inline-flex items-center max-w-[145px] hover:max-w-[340px] transition-all duration-300 ease-out overflow-hidden py-1.5 px-3 rounded-full text-xs font-semibold text-white shadow-md cursor-pointer select-none"
      style={{
        background: gradient,
        borderColor: borderColor,
        borderWidth: '1px',
      }}
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 me-1.5 shadow-[0_0_8px_#34d399] animate-pulse" />
      <span className="truncate transition-all duration-300 font-bold whitespace-nowrap">
        {name}
      </span>

      {/* Expanded details reveal smoothly on hover */}
      <span className="max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ms-1.5 transition-all duration-300 overflow-hidden whitespace-nowrap text-[11px] font-normal text-rose-100">
        - {detail}
      </span>

      {isMain && (
        <span className="max-w-0 opacity-0 group-hover:max-w-[70px] group-hover:opacity-100 ms-1.5 bg-white/20 text-[10px] px-1.5 py-0.5 rounded font-normal transition-all duration-300 overflow-hidden whitespace-nowrap text-white">
          {mainLabel}
        </span>
      )}

      <button
        type="button"
        aria-label={removeLabel}
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
        className="ms-1 text-white/70 hover:text-white hover:bg-white/20 rounded-full w-4 h-4 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
      >
        <Icon name="X" size={11} />
      </button>
    </div>
  );
};
