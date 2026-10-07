import React from 'react';
import { Icon } from '../../ui/Icon';

interface FruitCardActionRowProps {
  onOpenShowcase: () => void;
  isArabic: boolean;
}

export const FruitCardActionRow: React.FC<FruitCardActionRowProps> = ({
  onOpenShowcase,
  isArabic,
}) => {
  return (
    <div className="mt-1">
      {/* Explore Fruit Button – full width, single action */}
      <button
        type="button"
        onClick={onOpenShowcase}
        className="w-full py-2.5 px-3 rounded-2xl text-stone-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer bg-white/95 border border-white/80 shadow-md hover:bg-white hover:shadow-lg active:scale-[0.97] transition-all group"
      >
        <Icon name="Compass" size={15} className="text-amber-500 group-hover:scale-110 transition-transform shrink-0" />
        <span>{isArabic ? 'استكشف الفاكهة' : 'Explore Fruit'}</span>
      </button>
    </div>
  );
};
