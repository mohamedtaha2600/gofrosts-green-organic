import React from 'react';
import { Language } from '../../types';
import { BrandLogo } from '../BrandLogo';
import { Icon } from '../ui/Icon';

interface AdminHeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  onExitAdmin: () => void;
  productsCount: number;
  newLeadsCount: number;
  certsCount: number;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  lang,
  setLang,
  onExitAdmin,
  productsCount,
  newLeadsCount,
  certsCount,
}) => {
  const isAr = lang === 'ar';

  return (
    <header className="sticky top-0 z-40 bg-black text-white border-b border-neutral-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Left: Brand + Plant System Title */}
        <div className="flex items-center gap-4">
          <div className="bg-white p-1.5 rounded-xl shadow-xs">
            <BrandLogo size="md" layout="horizontal" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold tracking-tight text-white">
                {isAr ? 'مركز قيادة المصنع والإدارة' : 'Plant Command & Export Admin'}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30">
                PROD v6.0
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-mono">
              {isAr ? 'مصنع سمنود للتجميد السريع IQF والتصدير الدولي' : 'Samanoud IQF Processing & Global Export Hub'}
            </p>
          </div>
        </div>

        {/* Center: Live KPI Badges */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs flex items-center gap-2">
            <Icon name="Package" size={14} className="text-emerald-400" />
            <span className="text-neutral-400">{isAr ? 'المنتجات:' : 'Products:'}</span>
            <strong className="text-white font-mono">{productsCount}</strong>
          </div>

          <div className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs flex items-center gap-2">
            <Icon name="Users" size={14} className="text-rose-400" />
            <span className="text-neutral-400">{isAr ? 'طلبات التسعير:' : 'RFQs:'}</span>
            <strong className="text-rose-400 font-mono">{newLeadsCount} جديدة</strong>
          </div>

          <div className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs flex items-center gap-2">
            <Icon name="ShieldCheck" size={14} className="text-amber-400" />
            <span className="text-neutral-400">{isAr ? 'الشهادات:' : 'Certificates:'}</span>
            <strong className="text-white font-mono">{certsCount}</strong>
          </div>
        </div>

        {/* Right: Language switch & Exit to Public Site */}
        <div className="flex items-center gap-3">
          <div className="flex rounded-lg bg-neutral-900 border border-neutral-800 p-0.5 text-xs font-bold font-mono">
            <button
              onClick={() => setLang('ar')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                lang === 'ar' ? 'bg-emerald-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              عربي
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                lang === 'en' ? 'bg-emerald-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={onExitAdmin}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            <Icon name="ExternalLink" size={14} />
            <span>{isAr ? 'العودة للموقع كزائر' : 'Return to Website'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
