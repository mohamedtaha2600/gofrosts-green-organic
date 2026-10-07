import React from 'react';
import { Language } from '../../types';
import { getTranslation } from '../../i18n';

interface HeroHeadlineProps {
  lang: Language;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({ lang }) => {
  const t = getTranslation(lang);

  return (
    <div className="text-center max-w-4xl mx-auto space-y-4 pt-0 mb-4 sm:mb-6">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-normal sm:leading-[1.4] text-slate-900 text-balance animate-hero-headline">
        {t.hero.titleStart}{' '}
        <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent inline-block hero-glow-text">
          {t.hero.titleHighlight}
        </span>
      </h1>

      <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
        {t.hero.description}
      </p>
    </div>
  );
};
