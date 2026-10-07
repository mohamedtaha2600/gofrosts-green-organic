import React from 'react';

interface FruitCardVariationsPillsProps {
  grades: string[];
  isArabic: boolean;
}

export const FruitCardVariationsPills: React.FC<FruitCardVariationsPillsProps> = ({
  grades,
  isArabic,
}) => {
  const displayPills = grades.length > 0 ? grades.slice(0, 3) : [
    isArabic ? 'جامبو نخب أول' : 'Jumbo Grade 1',
    isArabic ? 'ممتاز قياسي' : 'Standard Extra',
  ];

  return (
    <section className="flex flex-wrap items-center justify-center gap-1.5 mb-2">
      {displayPills.map((pill, idx) => (
        <span
          key={idx}
          className="px-2.5 py-1 rounded-full text-[11px] font-bold text-stone-800 bg-white border border-slate-200 shadow-xs hover:-translate-y-0.5 hover:shadow-sm transition-all cursor-pointer"
        >
          {pill}
        </span>
      ))}
      <span className="px-2.5 py-1 rounded-full text-[11px] font-black text-[#00a86b] border border-emerald-300 bg-emerald-50 shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer">
        {isArabic ? 'أحجام خاصة للتصنيع' : 'Custom Specs'}
      </span>
    </section>
  );
};
