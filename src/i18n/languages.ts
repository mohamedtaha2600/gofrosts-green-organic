import { Language, LanguageInfo } from '../types';

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    shortLabel: 'AR',
    dir: 'rtl',
    localeCode: 'ar-EG',
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    shortLabel: 'EN',
    dir: 'ltr',
    localeCode: 'en-US',
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    shortLabel: 'RU',
    dir: 'ltr',
    localeCode: 'ru-RU',
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    shortLabel: 'DE',
    dir: 'ltr',
    localeCode: 'de-DE',
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    shortLabel: 'FR',
    dir: 'ltr',
    localeCode: 'fr-FR',
  },
  {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    shortLabel: 'IT',
    dir: 'ltr',
    localeCode: 'it-IT',
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    shortLabel: 'ES',
    dir: 'ltr',
    localeCode: 'es-ES',
  },
];

export const DEFAULT_LANGUAGE: Language = 'ar';

export function getLanguageInfo(code: Language): LanguageInfo {
  return (
    SUPPORTED_LANGUAGES.find((l) => l.code === code) ||
    SUPPORTED_LANGUAGES[0]
  );
}
