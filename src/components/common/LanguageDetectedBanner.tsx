import React from 'react';
import { Language } from '../../types';
import { getLanguageInfo, SUPPORTED_LANGUAGES } from '../../i18n/languages';
import { getTranslation } from '../../i18n';
import { Icon } from '../ui/Icon';

interface LanguageDetectedBannerProps {
  currentLang: Language;
  onConfirm: () => void;
  onSelectLang: (lang: Language) => void;
  onDismiss: () => void;
}

export const LanguageDetectedBanner: React.FC<LanguageDetectedBannerProps> = ({
  currentLang,
  onConfirm,
  onSelectLang,
  onDismiss,
}) => {
  const [showPicker, setShowPicker] = React.useState(false);
  const t = getTranslation(currentLang);
  const currentInfo = getLanguageInfo(currentLang);

  return (
    <div
      role="status"
      className="bg-black text-slate-100 border-b border-emerald-500/40 px-4 py-2.5 text-xs animate-in slide-in-from-top-2 relative z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Icon name="Globe" size={13} />
          </div>
          <span className="text-slate-200">
            {t.autoDetect.detectedNotice} ({currentInfo.nativeName})
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={onConfirm}
            className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors cursor-pointer"
          >
            {t.autoDetect.confirmLanguage}
          </button>

          <button
            onClick={() => setShowPicker(!showPicker)}
            className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition-colors cursor-pointer"
          >
            {t.autoDetect.changeLanguage}
          </button>

          <button
            onClick={onDismiss}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <Icon name="X" size={14} />
          </button>
        </div>
      </div>

      {showPicker && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-slate-800 flex items-center gap-2 flex-wrap">
          <span className="text-[11px] text-slate-400 font-medium">Select Language:</span>
          {SUPPORTED_LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                onSelectLang(l.code);
                setShowPicker(false);
              }}
              className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                currentLang === l.code
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {l.shortLabel} - {l.nativeName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
