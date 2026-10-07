import React from 'react';
import { Language } from '../../types';
import { getTranslation } from '../../i18n';

interface NavLinksProps {
  lang: Language;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  variant?: 'default' | 'glass';
}

export const NavLinks: React.FC<NavLinksProps> = ({
  lang,
  activeSection,
  onNavigate,
  variant = 'default',
}) => {
  const t = getTranslation(lang);

  const isAr = lang === 'ar';
  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'products', label: isAr ? 'المنتجات' : 'Products' },
    { id: 'certificates', label: isAr ? 'شهادات الجودة' : 'Certificates' },
    { id: 'process', label: isAr ? 'طريقة المعالجة' : 'Process' },
    { id: 'harvest', label: isAr ? 'مواسم الحصاد' : 'Harvest' },
    { id: 'logistics', label: isAr ? 'الشحن والتصدير' : 'Logistics' },
  ];

  const isGlass = variant === 'glass';

  return (
    <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main Navigation">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => onNavigate(link.id)}
          className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm transition-all cursor-pointer whitespace-nowrap ${
            activeSection === link.id
              ? 'text-emerald-800 bg-emerald-50 font-bold border border-emerald-200/90 shadow-2xs'
              : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-100/80 font-medium'
          }`}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
};
