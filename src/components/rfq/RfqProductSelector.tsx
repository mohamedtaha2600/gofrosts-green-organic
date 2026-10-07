import React, { useState } from 'react';
import { Product, Language } from '../../types';
import { getProductLocalized } from '../../i18n/products';
import { getFruitTheme } from '../products/card/fruitThemes';
import { RfqProductBadge } from './RfqProductBadge';
import { RfqMultiSelectDropdown } from './RfqMultiSelectDropdown';
import { Icon } from '../ui/Icon';

interface RfqProductSelectorProps {
  products: Product[];
  selectedIds: string[];
  onToggleProduct: (id: string) => void;
  lang: Language;
}

export const RfqProductSelector: React.FC<RfqProductSelectorProps> = ({
  products,
  selectedIds,
  onToggleProduct,
  lang,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isArabic = lang === 'ar';

  const countText = isArabic
    ? `${selectedIds.length} ${selectedIds.length === 1 ? 'صنف' : selectedIds.length === 2 ? 'صنفان' : 'أصناف'}`
    : `${selectedIds.length} ${selectedIds.length === 1 ? 'Product' : 'Products'}`;

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2">
          <span>{isArabic ? 'الأصناف المطلوبة' : 'Requested Produce'}</span>
          <span className="text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full text-xs font-bold border border-emerald-200 shadow-xs">
            {countText}
          </span>
        </label>
      </div>

      {/* Selected Products Bar */}
      <div className="flex flex-wrap gap-2.5 p-3 bg-white/70 border border-slate-200/90 rounded-2xl min-h-[52px] items-center shadow-xs">
        {selectedIds.map((id, idx) => {
          const product = products.find((p) => p.id === id);
          if (!product) return null;
          const loc = getProductLocalized(product, lang);
          const theme = getFruitTheme(product.id);

          return (
            <RfqProductBadge
              key={id}
              id={id}
              name={loc.name.split('(')[0].trim()}
              detail={loc.grades?.[0] || (isArabic ? 'درجة أولى' : 'Grade A')}
              gradient={theme.ctaGradient}
              borderColor={theme.badgeAccent}
              isMain={idx === 0}
              onRemove={onToggleProduct}
              removeLabel={isArabic ? 'إزالة الصنف' : 'Remove product'}
              mainLabel={isArabic ? 'رئيسي' : 'Primary'}
            />
          );
        })}

        {/* Multi-select Trigger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          title={isArabic ? 'إضافة صنف إضافي' : 'Add another item'}
          className="w-8 h-8 rounded-full border border-dashed border-emerald-500 hover:border-emerald-600 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-600 flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
        >
          <Icon name="Plus" size={16} />
        </button>
      </div>

      <div className="relative">
        <RfqMultiSelectDropdown
          products={products}
          selectedIds={selectedIds}
          isOpen={isMenuOpen}
          onToggleProduct={onToggleProduct}
          onClose={() => setIsMenuOpen(false)}
          lang={lang}
        />
      </div>
    </section>
  );
};
