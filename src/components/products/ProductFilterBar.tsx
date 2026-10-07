import React from 'react';
import { Language } from '../../types';
import { getTranslation } from '../../i18n';
import { Icon } from '../ui/Icon';

export type ProductCategory = 'all' | 'dried' | 'fruits' | 'vegetables' | 'gourmet' | 'organic';

interface ProductFilterBarProps {
  lang: Language;
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const ProductFilterBar: React.FC<ProductFilterBarProps> = ({
  lang,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const t = getTranslation(lang);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: t.products.allCategories },
    { id: 'dried', label: t.products.catDried },
    { id: 'fruits', label: t.products.catFruits },
    { id: 'vegetables', label: t.products.catVegetables },
    { id: 'gourmet', label: t.products.catGourmet },
    { id: 'organic', label: t.products.catOrganic },
  ];

  return (
    <div className="space-y-4 mb-8 select-none">
      {/* Search Input Bar */}
      <div className="relative max-w-2xl">
        <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-slate-400">
          <Icon name="Search" size={18} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.products.searchPlaceholder}
          className="w-full ps-10 pe-10 py-3 rounded-2xl border border-slate-200/90 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-xs transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 end-0 pe-3.5 flex items-center text-slate-400 hover:text-slate-700 cursor-pointer"
            aria-label="Clear search"
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>

      {/* Category Tabs (Segmented controls) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 shadow-2xs'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};
