import React from 'react';
import { FruitTheme } from './fruitThemes';

interface FruitCardHeaderBadgesProps {
  origin: string;
  brix?: string;
  isArabic: boolean;
  theme: FruitTheme;
}

export const FruitCardHeaderBadges: React.FC<FruitCardHeaderBadgesProps> = ({
  origin,
  brix,
  isArabic,
}) => {
  return (
    <section className="flex items-center justify-between gap-2 mb-3">
      {/* Origin Badge */}
      <div className="px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-white/95 shadow-xs border border-white/70 hover:bg-white transition-all max-w-[62%]">
        <span className="w-2 h-2 rounded-full bg-[#00a86b] shrink-0" />
        <span className="truncate font-bold">{origin}</span>
      </div>

      {/* Brix Badge */}
      {brix && (
        <div className="px-2.5 py-1.5 rounded-full flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-100/95 border border-amber-300/80 shadow-xs shrink-0 hover:bg-amber-100 transition-all">
          <span className="font-medium text-[#b45309] text-[11px]">
            {isArabic ? 'البركس:' : 'Brix:'}
          </span>
          <span className="font-black text-[#92400e] text-[11.5px]">{brix}</span>
        </div>
      )}
    </section>
  );
};
