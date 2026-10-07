import React from 'react';
import { Icon } from '../../ui/Icon';

interface FruitCardQualitySealProps {
  isArabic: boolean;
}

export const FruitCardQualitySeal: React.FC<FruitCardQualitySealProps> = ({
  isArabic,
}) => {
  return (
    <section className="rounded-2xl p-2.5 mb-3 bg-white/95 border border-white/60 shadow-sm transition-all hover:bg-white hover:shadow-md">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00a86b] shrink-0 shadow-xs">
          <Icon name="ShieldCheck" size={15} />
        </div>
        <p className="text-xs font-bold text-stone-800 leading-snug">
          {isArabic
            ? 'إنتاج مصري 100% طبيعي بدون سكر مضاف أو مواد حافظة، معبأ بأعلى اشتراطات سلامة الغذاء.'
            : '100% natural Egyptian harvest, no added sugar or preservatives, certified global food safety.'}
        </p>
      </div>
    </section>
  );
};
