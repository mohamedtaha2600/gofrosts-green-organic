import React from 'react';
import { Language } from '../../types';
import { getTranslation } from '../../i18n';
import { SUPPORTED_LANGUAGES } from '../../i18n/languages';
import { Icon } from '../ui/Icon';

interface MobileDrawerProps {
  lang: Language;
  setLang: (l: Language) => void;
  onNavigate: (sectionId: string) => void;
  onOpenChat: () => void;
  onOpenAdmin: () => void;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  lang,
  setLang,
  onNavigate,
  onOpenChat,
  onOpenAdmin,
  onClose,
}) => {
  const t = getTranslation(lang);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'products', label: t.nav.products },
    { id: 'certificates', label: t.nav.certificates },
    { id: 'process', label: t.nav.process },
    { id: 'harvest', label: t.nav.harvest },
    { id: 'logistics', label: t.nav.logistics },
  ];

  return (
    <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2">
      {/* Mobile Multilingual Switcher */}
      <div className="pb-3 border-b border-slate-100">
        <div className="text-[11px] font-semibold text-slate-500 mb-2">
          {t.nav.language}:
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-1">
          {SUPPORTED_LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
              }}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                lang === l.code
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span className="text-[11px] font-mono">{l.shortLabel}</span>
              <span className="text-[10px] font-normal truncate max-w-full">{l.nativeName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Nav Links */}
      <div className="space-y-1">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              onNavigate(link.id);
              onClose();
            }}
            className="block w-full text-start px-4 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Quick Action Buttons */}
      <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
        <button
          onClick={() => {
            onClose();
            onOpenChat();
          }}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-200 cursor-pointer"
        >
          <Icon name="Bot" size={15} className="text-emerald-600" />
          <span>{t.nav.aiAssistant}</span>
        </button>

        <button
          onClick={() => {
            onClose();
            onOpenAdmin();
          }}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 cursor-pointer"
        >
          <Icon name="Lock" size={14} className="text-slate-500" />
          <span>{t.nav.admin}</span>
        </button>
      </div>
    </div>
  );
};
