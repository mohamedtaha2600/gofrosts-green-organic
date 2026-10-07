import React from 'react';
import { Icon } from '../../ui/Icon';

interface FruitModalHeaderProps {
  title: string;
  dotColor?: string;
  onClose: () => void;
  closeLabel?: string;
}

export const FruitModalHeader: React.FC<FruitModalHeaderProps> = ({
  title,
  dotColor = '#f59e0b',
  onClose,
  closeLabel = 'إغلاق والعودة',
}) => {
  return (
    <div className="flex items-center justify-between pb-3 border-b border-white/15 shrink-0">
      <div className="flex items-center gap-2">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: dotColor }}
        />
        <h3 className="text-base sm:text-lg font-black text-white tracking-tight truncate">
          {title}
        </h3>
      </div>
      <button
        type="button"
        onClick={onClose}
        title={closeLabel}
        className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 active:scale-90 text-white flex items-center justify-center transition-all shadow-xs focus:outline-hidden cursor-pointer"
      >
        <Icon name="X" size={16} />
      </button>
    </div>
  );
};
