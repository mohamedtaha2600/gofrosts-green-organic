import React from 'react';
import { Language } from '../../types';
import { getTranslation } from '../../i18n';
import { Icon } from '../ui/Icon';

interface HeroBentoGridProps {
  lang: Language;
}

export const HeroBentoGrid: React.FC<HeroBentoGridProps> = ({ lang }) => {
  const t = getTranslation(lang);

  const items = [
    {
      icon: 'Sun' as const,
      bgColor: 'bg-amber-50 border-amber-200 text-amber-700',
      title: t.hero.statIqfTitle,
      description: t.hero.statIqfDesc,
    },
    {
      icon: 'ShieldCheck' as const,
      bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      title: t.hero.statStandardsTitle,
      description: t.hero.statStandardsDesc,
    },
    {
      icon: 'Layers' as const,
      bgColor: 'bg-teal-50 border-teal-200 text-teal-700',
      title: t.hero.statPrivateLabelTitle,
      description: t.hero.statPrivateLabelDesc,
    },
    {
      icon: 'Truck' as const,
      bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      title: t.hero.statReeferTitle,
      description: t.hero.statReeferDesc,
    },
  ];

  return (
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1500px] mx-auto select-none">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="p-5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all text-center sm:text-start backdrop-blur-sm group"
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 mx-auto sm:mx-0 border shadow-2xs group-hover:scale-105 transition-transform ${item.bgColor}`}
          >
            <Icon name={item.icon} size={20} />
          </div>
          <div className="text-base sm:text-lg font-black text-slate-900 leading-snug">
            {item.title}
          </div>
          <div className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};
