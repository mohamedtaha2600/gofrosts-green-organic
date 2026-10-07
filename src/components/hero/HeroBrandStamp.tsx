import React from 'react';
import { Language } from '../../types';
import { useProduceMedia } from '../../hooks/useProduceMedia';
import { Icon } from '../ui/Icon';

interface HeroBrandStampProps {
  lang: Language;
  onOpenMediaStudio?: () => void;
}

export const HeroBrandStamp: React.FC<HeroBrandStampProps> = ({
  lang,
  onOpenMediaStudio = () => {},
}) => {
  const { config } = useProduceMedia();
  const isArabic = lang === 'ar';

  if (config.heroVideoUrl) {
    return (
      <div className="relative w-full max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden border border-emerald-200/80 shadow-[0_12px_40px_rgba(5,150,105,0.14)] aspect-video group select-none">
        <video
          src={config.heroVideoUrl}
          poster={config.heroVideoPoster}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>GoFrosts - Green Organic</span>
        </div>

        <button
          onClick={onOpenMediaStudio}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-black/60 border border-white/20 text-white cursor-pointer backdrop-blur-md"
          title={isArabic ? 'إعدادات الوسائط' : 'Media Settings'}
        >
          <Icon name="Settings" size={14} />
        </button>
      </div>
    );
  }

  /* Photorealistic Production Showcase: Premium Dried & Frozen Harvest */
  return (
    <div className="relative w-full max-w-4xl mx-auto mb-10 rounded-3xl overflow-hidden border border-emerald-200/90 shadow-[0_16px_50px_rgba(5,150,105,0.12)] bg-gradient-to-b from-white via-emerald-50/30 to-white select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left / Main text highlight */}
        <div className="space-y-3 text-center md:text-start flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isArabic ? 'إنتاج مصري بمواصفات تصدير عالمية' : 'Egyptian Grade A Export Quality'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            {isArabic ? (
              <>
                فواكه مجففة فاخرة ومحاصيل مجمدة{' '}
                <span className="text-emerald-700">طبيعية 100%</span>
              </>
            ) : (
              <>
                Premium Dried Fruits & IQF Frozen{' '}
                <span className="text-emerald-700">100% Natural</span>
              </>
            )}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
            {isArabic
              ? 'نجمع بين أحدث تقنيات التجفيف الهوائي المتقدم للحفاظ على السكريات والفيتامينات الطبيعية، وتكنولوجيا التجميد السريع IQF للمحاصيل الزراعية الطازجة من مزارعنا مباشرة.'
              : 'Combining state-of-the-art natural dehydration to preserve vitamins and natural sugars, with instant IQF quick freezing straight from fertile Egyptian fields.'}
          </p>

          <div className="flex items-center gap-3 pt-2 justify-center md:justify-start flex-wrap">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <Icon name="CheckCircle" size={12} className="text-emerald-600" />
              <span>{isArabic ? 'خالٍ من السكر المضاف' : 'No Added Sugar'}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <Icon name="CheckCircle" size={12} className="text-emerald-600" />
              <span>{isArabic ? 'بدون مواد حافظة' : 'Preservative-Free'}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
              <Icon name="CheckCircle" size={12} className="text-emerald-600" />
              <span>{isArabic ? 'تعبئة بعلامتك التجارية' : 'Private Label Ready'}</span>
            </span>
          </div>
        </div>

        {/* Right / Visual Cards Matrix */}
        <div className="grid grid-cols-2 gap-3 w-full md:w-auto shrink-0">
          <div className="relative group overflow-hidden rounded-2xl border border-emerald-100 shadow-sm w-36 sm:w-44 h-32 sm:h-36 bg-white">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80"
              alt="Egyptian Dates & Dried Fruits"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-2.5">
              <span className="text-[11px] font-black text-white leading-tight">
                {isArabic ? 'الفواكه المجففة والتمور' : 'Dried Fruits & Dates'}
              </span>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-emerald-100 shadow-sm w-36 sm:w-44 h-32 sm:h-36 bg-white">
            <img
              src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80"
              alt="IQF Frozen Strawberries"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-2.5">
              <span className="text-[11px] font-black text-white leading-tight">
                {isArabic ? 'الفواكه والخضار المجمدة' : 'IQF Frozen Harvest'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
