import { Language } from '../types';
import { TranslationDictionary } from './types';
import { arLocale } from './locales/ar';
import { enLocale } from './locales/en';
import { ruLocale } from './locales/ru';
import { deLocale } from './locales/de';
import { frLocale } from './locales/fr';
import { itLocale } from './locales/it';
import { esLocale } from './locales/es';

export * from './types';
export * from './languages';
export * from './products/index';

const LOCALES: Record<Language, TranslationDictionary> = {
  ar: arLocale,
  en: enLocale,
  ru: ruLocale,
  de: deLocale,
  fr: frLocale,
  it: itLocale,
  es: esLocale,
};

export function getTranslation(lang: Language): TranslationDictionary {
  return LOCALES[lang] || LOCALES.ar;
}
