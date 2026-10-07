import { Language } from '../types';

export interface DetectionResult {
  detectedLanguage: Language;
  source: 'stored' | 'timezone' | 'browser' | 'geo' | 'default';
  countryCode?: string;
  isFirstVisit: boolean;
}

const STORAGE_KEY = 'gofrosts_user_lang';
const HAS_VISITED_KEY = 'gofrosts_has_visited';

export function getStoredLanguage(): Language | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && ['ar', 'en', 'ru', 'de', 'fr', 'it', 'es'].includes(saved)) {
      return saved as Language;
    }
  } catch {
    // LocalStorage might be disabled in private mode
  }
  return null;
}

export function saveUserLanguage(lang: Language): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
    localStorage.setItem(HAS_VISITED_KEY, 'true');
  } catch {
    // Ignore error
  }
}

export function hasUserVisitedBefore(): boolean {
  try {
    return localStorage.getItem(HAS_VISITED_KEY) === 'true';
  } catch {
    return false;
  }
}

/**
 * Intelligent client-side timezone-to-language matching
 */
function detectFromTimezone(): Language | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return null;

    // Arab World Timezones
    const arabTimezones = [
      'Africa/Cairo',
      'Asia/Riyadh',
      'Asia/Dubai',
      'Asia/Kuwait',
      'Asia/Qatar',
      'Asia/Bahrain',
      'Asia/Muscat',
      'Asia/Amman',
      'Asia/Beirut',
      'Asia/Baghdad',
      'Asia/Damascus',
      'Asia/Gaza',
      'Asia/Hebron',
      'Africa/Tripoli',
      'Africa/Tunis',
      'Africa/Algiers',
      'Africa/Casablanca',
      'Africa/Khartoum',
    ];
    if (arabTimezones.some((z) => tz.includes(z))) return 'ar';

    // Russian & CIS Timezones
    const cisTimezones = [
      'Europe/Moscow',
      'Europe/Samara',
      'Europe/Kaliningrad',
      'Asia/Yekaterinburg',
      'Asia/Omsk',
      'Asia/Novosibirsk',
      'Asia/Krasnoyarsk',
      'Asia/Irkutsk',
      'Asia/Yakutsk',
      'Asia/Vladivostok',
      'Europe/Minsk',
      'Asia/Almaty',
      'Asia/Tashkent',
      'Asia/Bishkek',
    ];
    if (cisTimezones.some((z) => tz.includes(z))) return 'ru';

    // German Timezones (DACH)
    const germanTimezones = ['Europe/Berlin', 'Europe/Vienna', 'Europe/Zurich'];
    if (germanTimezones.some((z) => tz.includes(z))) return 'de';

    // French Timezones
    const frenchTimezones = ['Europe/Paris', 'Europe/Brussels', 'Europe/Monaco'];
    if (frenchTimezones.some((z) => tz.includes(z))) return 'fr';

    // Italian Timezones
    const italianTimezones = ['Europe/Rome'];
    if (italianTimezones.some((z) => tz.includes(z))) return 'it';

    // Spanish & Latin American Timezones
    const spanishTimezones = [
      'Europe/Madrid',
      'America/Mexico_City',
      'America/Bogota',
      'America/Buenos_Aires',
      'America/Santiago',
      'America/Lima',
      'America/Caracas',
    ];
    if (spanishTimezones.some((z) => tz.includes(z))) return 'es';
  } catch {
    // Timezone resolution failed
  }
  return null;
}

/**
 * Browser languages priority detection
 */
function detectFromBrowser(): Language | null {
  try {
    const langs = navigator.languages || [navigator.language];
    for (const l of langs) {
      if (!l) continue;
      const clean = l.toLowerCase();
      if (clean.startsWith('ar')) return 'ar';
      if (clean.startsWith('ru') || clean.startsWith('be') || clean.startsWith('kk')) return 'ru';
      if (clean.startsWith('de')) return 'de';
      if (clean.startsWith('fr')) return 'fr';
      if (clean.startsWith('it')) return 'it';
      if (clean.startsWith('es')) return 'es';
      if (clean.startsWith('en')) return 'en';
    }
  } catch {
    // Navigator language access failed
  }
  return null;
}

/**
 * Master language detection runner
 */
export function detectInitialLanguage(): DetectionResult {
  const stored = getStoredLanguage();
  if (stored) {
    return {
      detectedLanguage: stored,
      source: 'stored',
      isFirstVisit: false,
    };
  }

  const isFirstVisit = !hasUserVisitedBefore();

  // 1. Timezone detection
  const fromTz = detectFromTimezone();
  if (fromTz) {
    return {
      detectedLanguage: fromTz,
      source: 'timezone',
      isFirstVisit,
    };
  }

  // 2. Browser language detection
  const fromBrowser = detectFromBrowser();
  if (fromBrowser) {
    return {
      detectedLanguage: fromBrowser,
      source: 'browser',
      isFirstVisit,
    };
  }

  // 3. Fallback: English for global trade
  return {
    detectedLanguage: 'en',
    source: 'default',
    isFirstVisit,
  };
}
