import React, { memo } from 'react';
import { Product, Language } from '../types';
import { getProductLocalized } from '../i18n/products';
import { getTranslation } from '../i18n';
import { Icon } from './ui/Icon';
import { SafeImage } from './ui/SafeImage';

interface HarvestCalendarSectionProps {
  products: Product[];
  lang: Language;
  onBackToHome?: () => void;
}

export const HarvestCalendarSection: React.FC<HarvestCalendarSectionProps> = memo(({ products, lang, onBackToHome }) => {
  const t = getTranslation(lang);
  const isArabic = lang === 'ar';
  const months = t.harvest.months;

  const getCategoryLabel = (category: string) => {
    if (!isArabic) {
      switch (category) {
        case 'dried': return 'Dried Fruits';
        case 'fruits': return 'IQF Fruits';
        case 'vegetables': return 'IQF Vegetables';
        case 'gourmet': return 'Gourmet';
        default: return 'Organic';
      }
    }
    switch (category) {
      case 'dried': return 'فواكه مجففة';
      case 'fruits': return 'فواكه مجمدة';
      case 'vegetables': return 'خضروات مجمدة';
      case 'gourmet': return 'تمور وتخصصي';
      default: return 'عضوي فاخر';
    }
  };

  return (
    <section id="harvest" className="py-20 bg-slate-50 border-b border-slate-200/80 select-none min-h-[70vh]">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Standalone Back to Home Navigation */}
        {onBackToHome && (
          <div className="mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 border border-emerald-200 shadow-2xs hover:bg-emerald-50 hover:border-emerald-400 font-bold text-sm transition-all cursor-pointer"
            >
              <Icon name={isArabic ? 'ArrowRight' : 'ArrowLeft'} size={18} />
              <span>{isArabic ? 'العودة إلى الصفحة الرئيسية' : 'Back to Home'}</span>
            </button>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Icon name="Calendar" size={14} className="text-emerald-700" />
              <span>{t.harvest.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.harvest.title}
            </h2>
            <p className="text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed">
              {t.harvest.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 bg-white px-4 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-600 shadow-2xs" />
                <span>{t.harvest.statusPeak}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span>{t.harvest.statusOff}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-emerald-950 text-emerald-100 font-bold border-b border-emerald-900">
                  <th className="py-4 px-4 text-start min-w-[220px]">
                    {t.harvest.crop}
                  </th>
                  <th className="py-4 px-3 text-center min-w-[110px]">
                    {isArabic ? 'التصنيف' : 'Category'}
                  </th>
                  {months.map((m, idx) => (
                    <th key={idx} className="py-4 px-2 text-center text-[11px] font-semibold min-w-[50px]">
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((product, pIdx) => {
                  const loc = getProductLocalized(product, lang);
                  return (
                    <tr
                      key={product.id}
                      className={pIdx % 2 === 0 ? 'bg-white hover:bg-slate-50/80' : 'bg-slate-50/50 hover:bg-slate-100/70'}
                    >
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        <div className="flex items-center gap-2.5">
                          <SafeImage
                            src={product.image}
                            alt={loc.name}
                            fallbackTitle={loc.name}
                            className="w-8 h-8 rounded-lg object-cover border border-slate-200 shrink-0"
                          />
                          <span className="truncate">{loc.name.split('(')[0].trim()}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/60 whitespace-nowrap">
                          {getCategoryLabel(product.category)}
                        </span>
                      </td>
                      {Array.from({ length: 12 }, (_, idx) => {
                        const monthNum = idx + 1;
                        const isPeak = product.seasonMonths.includes(monthNum);
                        return (
                          <td key={idx} className="py-3.5 px-2 text-center">
                            {isPeak ? (
                              <span
                                className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-600 text-white text-[11px] font-black shadow-2xs mx-auto"
                                title={t.harvest.statusPeak}
                              >
                                ✓
                              </span>
                            ) : (
                              <span
                                className="inline-block w-2 h-2 rounded-full bg-slate-200 mx-auto"
                                title={t.harvest.statusOff}
                              />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
});

HarvestCalendarSection.displayName = 'HarvestCalendarSection';
