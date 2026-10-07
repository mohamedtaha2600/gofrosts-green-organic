import React, { useState, useEffect, memo, useCallback } from 'react';
import { NavbarProps } from './types';
import { BrandLogo } from '../BrandLogo';
import { NavLinks } from './NavLinks';
import { LanguageDropdown } from './LanguageDropdown';
import { MobileDrawer } from './MobileDrawer';
import { Icon } from '../ui/Icon';
import { getTranslation } from '../../i18n';
import { COMPANY_CONTACT_INFO } from '../../data/initialData';

export const Navbar: React.FC<NavbarProps> = memo(({
  lang,
  setLang,
  onOpenAdmin,
  onOpenRfq,
  onOpenChat,
  activeSection,
  setActiveSection,
  inquiryCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = getTranslation(lang);
  const isArabic = lang === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (id === 'harvest') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    }
  }, [setActiveSection]);

  return (
    <header className="sticky top-0 z-40">
      {/* ─── Single Unified Glassmorphism Bar (Light Theme) ─── */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-xs shadow-slate-200/80 border-b border-slate-200/90'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-2xs'
        }`}
      >
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* ── Single row that holds everything ── */}
          <div className="flex items-center justify-between h-16 gap-3 sm:gap-4">

            {/* ── Right side in RTL (Logo + Phone) ── */}
            <div className="flex items-center gap-3 shrink-0">
              <div
                className="cursor-pointer select-none"
                onClick={() => scrollToSection('home')}
                role="button"
                tabIndex={0}
                aria-label="GoFrosts Home"
              >
                <BrandLogo size="sm" variant="full" />
              </div>

              {/* Sleek phone badge on larger screens */}
              <div className="hidden 2xl:flex items-center gap-2 ps-3 border-s border-slate-200 text-xs">
                <a
                  href={`tel:${COMPANY_CONTACT_INFO.phoneClean}`}
                  dir="ltr"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 font-mono transition-colors"
                >
                  <Icon name="Phone" size={11} className="text-emerald-600 shrink-0" />
                  <span>{COMPANY_CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* ── Centre: Nav Links ── */}
            <NavLinks
              lang={lang}
              activeSection={activeSection}
              onNavigate={scrollToSection}
            />

            {/* ── Left side in RTL: Actions + Lang + Admin ── */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">

              {/* AI Chatbot */}
              <button
                id="nav-open-chatbot-btn"
                onClick={onOpenChat}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all cursor-pointer shadow-2xs"
              >
                <Icon name="Bot" size={14} className="text-emerald-600" />
                <span className="hidden lg:inline">{isArabic ? 'المستشار الذكي' : 'AI Assistant'}</span>
              </button>

              {/* RFQ Primary CTA */}
              <button
                id="nav-open-rfq-btn"
                onClick={onOpenRfq}
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all shadow-sm shadow-emerald-700/20 active:scale-95 cursor-pointer border border-emerald-500/30 whitespace-nowrap"
              >
                <Icon name="FileText" size={14} />
                <span>{isArabic ? 'طلب تسعير' : 'Get Quote'}</span>
              </button>

              {/* Glass divider */}
              <span className="h-5 w-px bg-slate-200" />

              {/* Language Dropdown */}
              <LanguageDropdown currentLang={lang} onSelectLang={setLang} />

              {/* Admin button */}
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 transition-all text-[11px] font-semibold border border-slate-200 cursor-pointer"
                title={isArabic ? 'بوابة إدارة المصنع' : 'Factory Admin Portal'}
              >
                <Icon name="Lock" size={12} className="text-emerald-600" />
                <span className="hidden lg:inline">{isArabic ? 'الإدارة' : 'Admin'}</span>
                {inquiryCount > 0 && (
                  <span className="bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded-full text-[9px] leading-none">
                    {inquiryCount}
                  </span>
                )}
              </button>
            </div>

            {/* ── Mobile/Tablet (< lg): Hamburger Menu ── */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <button
                onClick={onOpenRfq}
                className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all rounded-lg shadow-sm cursor-pointer"
              >
                {isArabic ? 'طلب تسعير' : 'RFQ'}
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <MobileDrawer
          lang={lang}
          setLang={setLang}
          onNavigate={scrollToSection}
          onOpenChat={onOpenChat}
          onOpenAdmin={onOpenAdmin}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
});

Navbar.displayName = 'Navbar';
