import React from 'react';

interface SpecsChemicalListProps {
  moisture: string;
  so2: string;
  preservatives: string;
  storageTemp: string;
  isArabic: boolean;
}

export const SpecsChemicalList: React.FC<SpecsChemicalListProps> = ({
  moisture,
  so2,
  preservatives,
  storageTemp,
  isArabic,
}) => {
  return (
    <div className="rounded-2xl p-3 bg-white/95 border border-white/70 shadow-xs hover:bg-white transition-all text-start">
      <h4 className="text-xs font-bold text-stone-900 mb-2 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#b45309]" />
        <span>{isArabic ? 'الخواص الفيزيائية والكيميائية' : 'Physical & Chemical Specifications'}</span>
      </h4>
      <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
        <li className="flex items-center justify-between border-b border-stone-100 pb-1">
          <span>{isArabic ? 'نسبة الرطوبة (Moisture):' : 'Moisture Ratio:'}</span>
          <span className="font-bold text-stone-900 dir-ltr">{moisture}</span>
        </li>
        <li className="flex items-center justify-between border-b border-stone-100 pb-1">
          <span>{isArabic ? 'ثاني أكسيد الكبريت (SO2):' : 'Sulphur Dioxide (SO2):'}</span>
          <span className="font-bold text-[#00a86b]">{so2}</span>
        </li>
        <li className="flex items-center justify-between border-b border-stone-100 pb-1">
          <span>{isArabic ? 'المواد الحافظة والألوان:' : 'Preservatives & Colors:'}</span>
          <span className="font-bold text-[#00a86b]">{preservatives}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>{isArabic ? 'درجة حرارة التخزين:' : 'Storage Temperature:'}</span>
          <span className="font-bold text-stone-900 dir-ltr">{storageTemp}</span>
        </li>
      </ul>
    </div>
  );
};
