import React from 'react';
import { FruitModalHeader } from './FruitModalHeader';
import { ShowcaseDetailCard } from './ShowcaseDetailCard';
import { getFruitShowcaseData } from './fruitShowcaseData';
import { FruitTheme } from './fruitThemes';
import { Language } from '../../../types';

interface FruitCardShowcaseModalProps {
  productId: string;
  productName: string;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme: FruitTheme;
}

export const FruitCardShowcaseModal: React.FC<FruitCardShowcaseModalProps> = ({
  productId,
  productName,
  isOpen,
  onClose,
  lang,
  theme,
}) => {
  const isArabic = lang === 'ar';
  const data = getFruitShowcaseData(productId, lang);

  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 w-full h-full p-4 sm:p-5 flex flex-col justify-between overflow-hidden rounded-[28px] z-20 animate-in fade-in zoom-in-95 duration-200"
      style={{ backgroundColor: theme.modalBg }}
    >
      <FruitModalHeader
        title={isArabic ? `استكشاف ثمرة ${productName.split('(')[0].trim()}` : `Explore ${productName.split('(')[0].trim()}`}
        dotColor="#f59e0b"
        onClose={onClose}
        closeLabel={isArabic ? 'إغلاق والعودة' : 'Close and return'}
      />

      {/* Scrollable details */}
      <div className="space-y-2.5 my-2.5 flex-1 overflow-y-auto px-1 custom-scrollbar">
        <ShowcaseDetailCard
          iconName="MapPin"
          iconBgClass="bg-amber-100"
          iconTextClass="text-amber-800"
          title={data.originTitle}
          subtitle={data.originSub}
          description={data.originDesc}
        />
        <ShowcaseDetailCard
          iconName="Leaf"
          iconBgClass="bg-emerald-100"
          iconTextClass="text-emerald-800"
          title={data.nutritionTitle}
          subtitle={data.nutritionSub}
          description={data.nutritionDesc}
        />
        <ShowcaseDetailCard
          iconName="Sparkles"
          iconBgClass="bg-rose-100"
          iconTextClass="text-rose-800"
          title={data.tasteTitle}
          subtitle={data.tasteSub}
          description={data.tasteDesc}
        />
        <ShowcaseDetailCard
          iconName="Sun"
          iconBgClass="bg-amber-100"
          iconTextClass="text-amber-800"
          title={data.processTitle}
          subtitle={data.processSub}
          description={data.processDesc}
        />
      </div>

      {/* Return Button */}
      <button
        type="button"
        onClick={onClose}
        className="w-full py-2.5 px-4 rounded-xl text-stone-900 font-bold text-xs bg-white/95 hover:bg-white shadow-xs transition-all active:scale-[0.98] shrink-0 cursor-pointer"
      >
        {isArabic ? 'الرجوع للبطاقة الرئيسية' : 'Return to Main Card'}
      </button>
    </div>
  );
};
