import React from 'react';
import { Icon } from '../../ui/Icon';
import { FruitTheme } from './fruitThemes';

interface FruitCardSpecGridProps {
  storageTemp: string;
  shelfLife: string;
  category: string;
  isArabic: boolean;
  theme: FruitTheme;
}

export const FruitCardSpecGrid: React.FC<FruitCardSpecGridProps> = ({
  storageTemp,
  shelfLife,
  category,
  isArabic,
}) => {
  const processText = category === 'dried'
    ? (isArabic ? 'تجفيف طبيعي 100%' : '100% Sun-Dried')
    : (isArabic ? 'تجميد فائق IQF' : 'IQF Quick Freeze');

  return (
    <section className="grid grid-cols-3 gap-2 mb-3">
      {/* Storage */}
      <div className="crisp-spec-box rounded-2xl p-2 text-center flex flex-col justify-between items-center min-h-[72px] cursor-pointer bg-white border border-slate-200 shadow-xs hover:-translate-y-1 hover:scale-[1.03] transition-all">
        <span className="spec-label text-[11px] font-bold text-stone-600">
          {isArabic ? 'التخزين' : 'Storage'}
        </span>
        <div className="flex items-center justify-center gap-1 text-stone-900 text-xs font-extrabold mt-0.5 dir-ltr truncate max-w-full">
          <Icon name="Thermometer" size={13} className="text-[#00a86b] shrink-0" />
          <span className="font-black truncate">{storageTemp}</span>
        </div>
      </div>

      {/* Shelf Life */}
      <div className="crisp-spec-box rounded-2xl p-2 text-center flex flex-col justify-between items-center min-h-[72px] cursor-pointer bg-white border border-slate-200 shadow-xs hover:-translate-y-1 hover:scale-[1.03] transition-all">
        <span className="spec-label text-[11px] font-bold text-stone-600">
          {isArabic ? 'الصلاحية' : 'Shelf Life'}
        </span>
        <div className="flex items-center justify-center gap-1 text-stone-900 text-xs font-extrabold mt-0.5 truncate max-w-full">
          <Icon name="Clock" size={13} className="text-[#00a86b] shrink-0" />
          <span className="font-black truncate">{shelfLife}</span>
        </div>
      </div>

      {/* Processing */}
      <div className="crisp-spec-box rounded-2xl p-2 text-center flex flex-col justify-between items-center min-h-[72px] cursor-pointer bg-white border border-slate-200 shadow-xs hover:-translate-y-1 hover:scale-[1.03] transition-all">
        <span className="spec-label text-[11px] font-bold text-stone-600">
          {isArabic ? 'التجهيز' : 'Process'}
        </span>
        <div className="flex items-center justify-center gap-1 text-[#00a86b] text-xs font-black mt-0.5 truncate max-w-full">
          <Icon name="CheckCircle" size={13} className="text-[#00a86b] shrink-0" />
          <span className="font-black truncate">{processText}</span>
        </div>
      </div>
    </section>
  );
};
