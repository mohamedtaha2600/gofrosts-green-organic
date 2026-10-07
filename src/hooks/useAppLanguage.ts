import { useState, useEffect, useCallback } from 'react';
import { Language } from '../types';
import { detectInitialLanguage, saveUserLanguage } from '../services/languageDetector';

export function useAppLanguage() {
  const [lang, setLangState] = useState<Language>(() => {
    const res = detectInitialLanguage();
    return res.detectedLanguage;
  });

  const [showAutoDetectBanner, setShowAutoDetectBanner] = useState<boolean>(() => {
    const res = detectInitialLanguage();
    return res.isFirstVisit && res.source !== 'stored';
  });

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    saveUserLanguage(newLang);
    setShowAutoDetectBanner(false);
  }, []);

  const dismissAutoDetectBanner = useCallback(() => {
    setShowAutoDetectBanner(false);
  }, []);

  const confirmAutoDetectBanner = useCallback(() => {
    saveUserLanguage(lang);
    setShowAutoDetectBanner(false);
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return {
    lang,
    setLang,
    showAutoDetectBanner,
    dismissAutoDetectBanner,
    confirmAutoDetectBanner,
  };
}
