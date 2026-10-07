import React from 'react';
import { Icon } from '../ui/Icon';

interface RfqModalHeaderProps {
  title: string;
  onClose: () => void;
  closeLabel?: string;
}

export const RfqModalHeader: React.FC<RfqModalHeaderProps> = ({
  title,
  onClose,
  closeLabel = 'إغلاق',
}) => {
  return (
    <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100/80 flex items-center justify-between">
      {/* Title & Export Icon */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/60 shadow-xs transition-transform duration-300 hover:rotate-6">
          <Icon name="FileText" size={20} />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
            {title}
          </h2>
        </div>
      </div>

      {/* Close Button with hover bounce & rotate */}
      <button
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 hover:rotate-90 flex items-center justify-center transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-rose-200 shadow-xs cursor-pointer"
      >
        <Icon name="X" size={18} />
      </button>
    </div>
  );
};
