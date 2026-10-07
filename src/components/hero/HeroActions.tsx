import React from 'react';
import { Language } from '../../types';
import { getTranslation } from '../../i18n';
import { Icon } from '../ui/Icon';

interface HeroActionsProps {
  lang: Language;
  onExploreProducts: () => void;
  onOpenRfq: () => void;
  onOpenCertificates: () => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  lang,
  onExploreProducts,
  onOpenRfq,
  onOpenCertificates,
}) => {
  const t = getTranslation(lang);
  const arrowIconName = lang === 'ar' ? 'ArrowLeft' : 'ArrowRight';

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 select-none">
      <button
        id="hero-explore-products-btn"
        onClick={onExploreProducts}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/25 active:scale-98 cursor-pointer"
      >
        <span>{t.hero.exploreCatalog}</span>
        <Icon name={arrowIconName} size={18} />
      </button>

      <button
        id="hero-request-quote-btn"
        onClick={onOpenRfq}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base text-emerald-900 bg-white hover:bg-emerald-50 border-2 border-emerald-600/40 transition-all shadow-xs active:scale-98 cursor-pointer"
      >
        <Icon name="Send" size={18} className="text-emerald-600" />
        <span>{t.hero.requestQuote}</span>
      </button>

      <button
        id="hero-view-certs-btn"
        onClick={onOpenCertificates}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-slate-100/80 hover:bg-slate-200 border border-slate-200/80 transition-all active:scale-98 cursor-pointer"
      >
        <Icon name="ShieldCheck" size={16} className="text-emerald-600" />
        <span>{t.hero.qualityCertifications}</span>
      </button>
    </div>
  );
};
