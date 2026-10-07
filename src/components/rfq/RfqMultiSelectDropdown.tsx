import React from 'react';
import { Product, Language } from '../../types';
import { getProductLocalized } from '../../i18n/products';

interface RfqMultiSelectDropdownProps {
  products: Product[];
  selectedIds: string[];
  isOpen: boolean;
  onToggleProduct: (id: string) => void;
  onClose: () => void;
  lang: Language;
}

export const RfqMultiSelectDropdown: React.FC<RfqMultiSelectDropdownProps> = ({
  products,
  selectedIds,
  isOpen,
  onToggleProduct,
  onClose,
  lang,
}) => {
  const isArabic = lang === 'ar';

  if (!isOpen) return null;

  return (
    <div
      className="absolute end-0 top-full mt-2 w-full sm:w-[420px] bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-2xl shadow-2xl z-30 p-3.5 space-y-1.5 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
    >
      <div className="text-[11px] font-bold text-slate-500 px-2 pb-2 border-b border-slate-100 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>{isArabic ? 'اختر الأصناف التصديرية للإضافة الفورية:' : 'Select export produce to add:'}</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 text-xs px-1.5 py-0.5 rounded hover:bg-slate-100 transition-colors cursor-pointer"
        >
          {isArabic ? '✕ إغلاق' : '✕ Close'}
        </button>
      </div>

      <div className="max-h-60 overflow-y-auto space-y-1 pt-1 custom-scrollbar">
        {products.map((p) => {
          const loc = getProductLocalized(p, lang);
          const isSelected = selectedIds.includes(p.id);
          const categoryName = p.category === 'dried'
            ? (isArabic ? 'فاكهة مجففة' : 'Dried Fruit')
            : (isArabic ? 'محصول IQF' : 'IQF Frozen');

          return (
            <label
              key={p.id}
              className="flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl hover:bg-emerald-50/60 cursor-pointer text-xs font-semibold text-slate-700 transition-colors border border-transparent hover:border-emerald-200/60"
            >
              <div className="flex items-center gap-2.5 truncate">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onToggleProduct(p.id)}
                  className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer"
                />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 shadow-xs" />
                <span className="truncate">{loc.name.split('(')[0].trim()}</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold shrink-0">
                {categoryName}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
