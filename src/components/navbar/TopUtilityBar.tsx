import React from 'react';
import { Language } from '../../types';
import { COMPANY_CONTACT_INFO } from '../../data/initialData';
import { getTranslation } from '../../i18n';
import { LanguageDropdown } from './LanguageDropdown';
import { Icon } from '../ui/Icon';

interface TopUtilityBarProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenAdmin: () => void;
  inquiryCount: number;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({
  lang,
  setLang,
  onOpenAdmin,
  inquiryCount,
}) => {
  const t = getTranslation(lang);
  const isArabic = lang === 'ar';

  return (
    <div className="bg-emerald-950 text-emerald-100/90 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/70 select-none">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-3">
        {/* Left B2B Tagline and Contact */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-emerald-300 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.nav.tagline}</span>
          </span>
          <span className="hidden md:inline text-emerald-800">|</span>
          <a
            href={`tel:${COMPANY_CONTACT_INFO.phoneClean}`}
            dir="ltr"
            className="hidden md:inline-flex items-center gap-1.5 text-emerald-100 hover:text-white font-mono transition-colors"
          >
            <Icon name="Phone" size={12} className="text-emerald-400 shrink-0" />
            <span>{COMPANY_CONTACT_INFO.phone}</span>
          </a>
          <span className="hidden lg:inline text-emerald-800">|</span>
          <span className="hidden lg:inline text-emerald-300/80 font-mono">
            {COMPANY_CONTACT_INFO.domain}
          </span>
        </div>

        {/* Right Multilingual Selector & Discrete Admin Key */}
        <div className="flex items-center gap-2.5">
          {/* Subtle Admin Entrance */}
          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-900/60 hover:bg-emerald-800/80 text-emerald-200 hover:text-white transition-colors text-[11px] font-medium border border-emerald-800/60 cursor-pointer"
            title={isArabic ? 'بوابة إدارة المصنع' : 'Factory Admin Portal'}
          >
            <Icon name="Lock" size={11} className="text-emerald-400" />
            <span>{isArabic ? 'بوابة الإدارة' : 'Admin'}</span>
            {inquiryCount > 0 && (
              <span className="bg-emerald-500 text-white font-bold px-1.5 py-0.2 rounded-full text-[10px]">
                {inquiryCount}
              </span>
            )}
          </button>

          {/* Multilingual Selector */}
          <LanguageDropdown currentLang={lang} onSelectLang={setLang} />
        </div>
      </div>
    </div>
  );
};
