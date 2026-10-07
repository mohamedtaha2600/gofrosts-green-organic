import React from 'react';
import { FruitModalHeader } from './FruitModalHeader';
import { SpecsGradesTable } from './SpecsGradesTable';
import { SpecsChemicalList } from './SpecsChemicalList';
import { getFruitSpecsData } from './fruitShowcaseData';
import { FruitTheme } from './fruitThemes';
import { Language } from '../../../types';

interface FruitCardSpecsModalProps {
  productId: string;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme: FruitTheme;
}

export const FruitCardSpecsModal: React.FC<FruitCardSpecsModalProps> = ({
  productId,
  isOpen,
  onClose,
  lang,
  theme,
}) => {
  const isArabic = lang === 'ar';
  const data = getFruitSpecsData(productId, lang);

  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 w-full h-full p-4 sm:p-5 flex flex-col justify-between overflow-hidden rounded-[28px] z-20 animate-in fade-in zoom-in-95 duration-200"
      style={{ backgroundColor: theme.modalBg }}
    >
      <FruitModalHeader
        title={isArabic ? 'المواصفات القياسية للتصدير' : 'Export Standard Specifications'}
        dotColor="#00a86b"
        onClose={onClose}
        closeLabel={isArabic ? 'إغلاق والعودة' : 'Close and return'}
      />

      <div className="space-y-2.5 my-2.5 flex-1 overflow-y-auto px-1 custom-scrollbar">
        <SpecsGradesTable
          gradesTitle={data.gradesTitle}
          grades={data.grades}
          brixLabel={data.brixLabel}
          brixValue={data.brixValue}
        />

        <SpecsChemicalList
          moisture={data.moisture}
          so2={data.so2}
          preservatives={data.preservatives}
          storageTemp={data.storageTemp}
          isArabic={isArabic}
        />

        {/* Packaging & Quality Accreditations */}
        <div className="rounded-2xl p-3 bg-white/95 border border-white/70 shadow-xs hover:bg-white transition-all text-start">
          <h4 className="text-xs font-bold text-stone-900 mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-600" />
            <span>{isArabic ? 'التعبئة والتراخيص الدولية' : 'Packaging & Global Certifications'}</span>
          </h4>
          <div className="flex flex-wrap gap-1.5 text-[10.5px] font-bold">
            {data.packagingTypes.map((pkg, idx) => (
              <span key={`pkg-${idx}`} className="px-2 py-0.5 bg-stone-100 text-stone-800 rounded-lg border border-stone-200">
                {pkg}
              </span>
            ))}
            {data.certifications.map((cert, idx) => (
              <span key={`cert-${idx}`} className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-300">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

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
