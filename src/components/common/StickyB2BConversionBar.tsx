import React, { useState, useEffect } from 'react';
import { Language } from '../../types';
import { COMPANY_CONTACT_INFO } from '../../data/initialData';
import { getTranslation } from '../../i18n';
import { Icon } from '../ui/Icon';

interface StickyB2BConversionBarProps {
  lang: Language;
  onOpenRfq: () => void;
}

export const StickyB2BConversionBar: React.FC<StickyB2BConversionBarProps> = ({
  lang,
  onOpenRfq,
}) => {
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const t = getTranslation(lang);
  const isArabic = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-6 start-6 z-40 px-3.5 py-2.5 rounded-2xl bg-emerald-950 text-white border border-emerald-500/60 shadow-2xl flex items-center gap-2 text-xs font-bold hover:bg-emerald-900 transition-all cursor-pointer select-none"
      >
        <Icon name="Ship" size={16} className="text-emerald-400" />
        <span>{isArabic ? 'طلب تسعير سريع' : 'Quick Export RFQ'}</span>
      </button>
    );
  }

  return (
    <div
      role="region"
      aria-label="Export quick actions"
      className="fixed bottom-0 inset-x-0 z-40 bg-emerald-950/95 text-white border-t border-emerald-500/50 backdrop-blur-md px-4 py-2.5 shadow-2xl animate-in slide-in-from-bottom-2 select-none"
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-3">
        {/* Left B2B Highlights */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <Icon name="Ship" size={18} />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-100 flex items-center gap-2">
              <span>{isArabic ? 'مكتب التصدير الدولي المباشر بمصنع جو فروستس' : 'GoFrosts Direct Factory Export Desk'}</span>
              <span className="text-[10px] text-emerald-300 font-medium bg-emerald-900/80 px-2 py-0.5 rounded-md border border-emerald-500/30">
                {isArabic ? 'فواكه مجففة ومجمدة نخب أول' : 'Grade A Dried & IQF Produce'}
              </span>
            </div>
            <div className="text-[11px] text-emerald-200/80">
              {isArabic
                ? 'حمولة الحاوية: 24 - 27 طناً مترياً | شحن بحري وجوي سريع لجميع موانئ العالم'
                : 'Container Capacity: 24 - 27 MT | Direct Ocean & Air Freight to Global Ports'}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Direct WhatsApp Export Line */}
          <a
            href={COMPANY_CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs border border-emerald-600/40"
          >
            <Icon name="MessageSquare" size={14} className="text-emerald-300" />
            <span>{isArabic ? 'واتساب إدارة التصدير' : 'WhatsApp Export Desk'}</span>
          </a>

          {/* Direct RFQ Button */}
          <button
            onClick={onOpenRfq}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <Icon name="Send" size={14} />
            <span>{t.hero.requestQuote}</span>
          </button>

          {/* Minimize Button */}
          <button
            onClick={() => setMinimized(true)}
            className="text-emerald-300/70 hover:text-white p-1 rounded transition-colors cursor-pointer"
            aria-label="Minimize bar"
            title={isArabic ? 'تصغير الشريط' : 'Minimize'}
          >
            <Icon name="ChevronDown" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
