import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../../types';
import { SUPPORTED_LANGUAGES, getLanguageInfo } from '../../i18n/languages';
import { Icon } from '../ui/Icon';

interface LanguageDropdownProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  variant?: 'compact' | 'expanded' | 'glass';
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  currentLang,
  onSelectLang,
  variant = 'compact',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentInfo = getLanguageInfo(currentLang);
  const isGlass = variant === 'glass';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all text-xs font-bold cursor-pointer bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-2xs"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Select Language / تغيير اللغة"
      >
        <Icon name="Globe" size={13} className="text-emerald-600" />
        <span className="tracking-wide font-extrabold">{currentInfo.shortLabel}</span>
        <span className="hidden 2xl:inline font-normal text-slate-500 text-[11px]">
          ({currentInfo.nativeName})
        </span>
        <Icon
          name="ChevronDown"
          size={12}
          className={`transition-transform text-slate-500 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1.5 end-0 z-50 w-48 bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-xl py-1.5 animate-in fade-in zoom-in-95 duration-100 select-none">
          <div className="px-3 py-1 text-[10px] font-bold text-emerald-700 uppercase tracking-wider border-b border-slate-100">
            Languages / اللغات
          </div>
          {SUPPORTED_LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                onSelectLang(l.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer text-start ${
                currentLang === l.code
                  ? 'bg-emerald-50 text-emerald-800 font-bold'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-5 text-[10px] font-mono font-bold text-emerald-600">{l.shortLabel}</span>
                <span>{l.nativeName}</span>
              </div>
              {currentLang === l.code && <Icon name="Check" size={13} className="text-emerald-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
