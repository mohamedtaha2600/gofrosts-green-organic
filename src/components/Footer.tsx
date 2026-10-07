import React, { memo } from 'react';
import { Language } from '../types';
import { BrandLogo } from './BrandLogo';
import { COMPANY_CONTACT_INFO } from '../data/initialData';
import { getTranslation } from '../i18n';
import { SUPPORTED_LANGUAGES } from '../i18n/languages';
import { Icon } from './ui/Icon';

interface FooterProps {
  lang: Language;
  setLang?: (l: Language) => void;
  onOpenGoDaddyGuide?: () => void;
  onOpenSeoModal?: () => void;
  onOpenRfq: () => void;
  onOpenAdmin: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = memo(({
  lang,
  setLang,
  onOpenRfq,
  onOpenAdmin,
  onNavigate,
}) => {
  const t = getTranslation(lang);
  const isArabic = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLinks = isArabic ? [
    'الفواكه المجففة الفاخرة (تين، مشمش، مانجو)',
    'الفراولة المجمدة والمجففة نخب أول',
    'قطع ومكعبات المانجو الاستوائية',
    'تمور المجدول الملكية الكبيرة',
    'قيعان وقلوب الخرشوف المصري',
    'البامية الخضراء المقمعة يدوياً',
  ] : [
    'Premium Dried Fruits (Figs, Apricots, Mango)',
    'IQF & Dried Strawberries Grade A',
    'Tropical Mango Chunks & Dices',
    'Royal Egyptian Medjool Dates',
    'Artichoke Bottoms & Tender Hearts',
    'Hand-Capped Egyptian Okra (Zero / Extra)',
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12 select-none">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-900/80">
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block p-2.5 rounded-xl bg-white text-slate-900 shadow-md">
              <BrandLogo size="md" layout="horizontal" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-3 pt-1 flex-wrap">
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400">
                {COMPANY_CONTACT_INFO.domain}
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-300">
                {COMPANY_CONTACT_INFO.email}
              </div>
            </div>
          </div>

          {/* Col 3: Export Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">
              {t.nav.products}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {productLinks.map((name, i) => (
                <li key={i}>
                  <a href="#products" className="hover:text-emerald-400 transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Importer Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenRfq}
                  className="hover:text-emerald-400 transition-colors text-start cursor-pointer font-semibold text-emerald-300"
                >
                  {t.nav.rfq}
                </button>
              </li>
              <li>
                <a href="#certificates" className="hover:text-emerald-400 transition-colors">
                  {t.nav.certificates}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-emerald-400 transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('harvest');
                    } else {
                      window.location.hash = '#harvest';
                    }
                  }}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-start"
                >
                  {t.nav.harvest}
                </button>
              </li>
              <li>
                <a href="#logistics" className="hover:text-emerald-400 transition-colors">
                  {t.nav.logistics}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="hover:text-slate-200 transition-colors text-start cursor-pointer text-slate-500"
                >
                  {t.nav.admin}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">
              {t.footer.contactUs}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Icon name="Mail" size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Phone" size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_CONTACT_INFO.phoneClean}`} dir="ltr" className="hover:text-white transition-colors font-mono">
                  {COMPANY_CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {t.footer.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Languages, Copyright, Back to top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          {/* Languages List */}
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span className="text-slate-400 font-medium">{t.nav.language}:</span>
            {SUPPORTED_LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang && setLang(l.code)}
                className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
                  lang === l.code
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {l.nativeName}
              </button>
            ))}
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-4 text-center md:text-end">
            <span>{t.footer.rightsReserved}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer shrink-0"
              title={isArabic ? 'العودة لأعلى الصفحة' : 'Back to top'}
              aria-label="Back to top"
            >
              <Icon name="ArrowUp" size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
