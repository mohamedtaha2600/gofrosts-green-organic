import React from 'react';
import { Language } from '../../types';
import { getTranslation } from '../../i18n';
import { Icon } from '../ui/Icon';

interface NavActionsProps {
  lang: Language;
  onOpenChat: () => void;
  onOpenRfq: () => void;
}

export const NavActions: React.FC<NavActionsProps> = ({
  lang,
  onOpenChat,
  onOpenRfq,
}) => {
  const t = getTranslation(lang);

  return (
    <div className="hidden sm:flex items-center gap-3">
      {/* AI Assistant Launcher */}
      <button
        id="nav-open-chatbot-btn"
        onClick={onOpenChat}
        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200 shadow-xs cursor-pointer"
      >
        <Icon name="Bot" size={16} className="text-emerald-600" />
        <span>{t.nav.aiAssistant}</span>
      </button>

      {/* Request Quote Button */}
      <button
        id="nav-open-rfq-btn"
        onClick={onOpenRfq}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 transition-all shadow-md shadow-emerald-700/20 active:scale-98 cursor-pointer"
      >
        <Icon name="FileText" size={16} />
        <span>{t.nav.rfq}</span>
      </button>
    </div>
  );
};
