import React, { memo } from 'react';
import { Language } from '../types';
import { getTranslation } from '../i18n';
import { Icon } from './ui/Icon';

interface ProcessSectionProps {
  lang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = memo(({ lang }) => {
  const t = getTranslation(lang);

  const stepIcons = [
    'Sprout' as const,
    'Truck' as const,
    'Waves' as const,
    'Flame' as const,
    'Snowflake' as const,
  ];

  return (
    <section id="process" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t.process.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.process.description}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.process.steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Icon name={stepIcons[idx % stepIcons.length]} size={24} />
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-200 group-hover:text-emerald-500/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="text-emerald-700 font-bold">
                  {lang === 'ar' ? 'معايير أيزو وسلامة الغذاء' : 'Standard ISO / BRC'}
                </span>
                <span>
                  {lang === 'ar' ? `المرحلة ${step.number}` : `Stage ${step.number}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ProcessSection.displayName = 'ProcessSection';
