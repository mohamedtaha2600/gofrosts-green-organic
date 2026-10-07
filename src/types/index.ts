export type Language = 'ar' | 'en' | 'ru' | 'de' | 'fr' | 'it' | 'es';

export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  nameRu?: string;
  nameDe?: string;
  nameFr?: string;
  nameIt?: string;
  nameEs?: string;
  category: 'fruits' | 'vegetables' | 'dried' | 'gourmet' | 'organic';
  descriptionAr: string;
  descriptionEn: string;
  descriptionRu?: string;
  descriptionDe?: string;
  descriptionFr?: string;
  descriptionIt?: string;
  descriptionEs?: string;
  image: string;
  grades: string[];
  gradesAr?: string[];
  gradesEn?: string[];
  cutsAr: string[];
  cutsEn: string[];
  cutsRu?: string[];
  cutsDe?: string[];
  cutsFr?: string[];
  cutsIt?: string[];
  cutsEs?: string[];
  packaging: {
    retail: string[];
    bulk: string[];
    privateLabel: boolean;
  };
  packagingAr?: {
    retail: string[];
    bulk: string[];
    privateLabel: boolean;
  };
  seasonMonths: number[]; // 1-12
  storageTemp: string;
  storageTempAr?: string;
  storageTempEn?: string;
  shelfLife: string;
  shelfLifeAr?: string;
  shelfLifeEn?: string;
  origin: string;
  originAr?: string;
  originEn?: string;
  brix?: string;
  brixAr?: string;
  featured?: boolean;
}

export interface Certificate {
  id: string;
  titleAr: string;
  titleEn: string;
  titleRu?: string;
  titleDe?: string;
  titleFr?: string;
  titleIt?: string;
  titleEs?: string;
  issuer: string;
  certNumber: string;
  scopeAr: string;
  scopeEn: string;
  scopeRu?: string;
  scopeDe?: string;
  scopeFr?: string;
  scopeIt?: string;
  scopeEs?: string;
  validUntil: string;
  badgeColor: string;
  iconType: 'shield' | 'check' | 'award' | 'leaf' | 'globe';
  logoPlaceholder?: string;
  statusAr?: string;
  statusEn?: string;
  statusRu?: string;
  auditStage?: string;
}

export interface LeadInquiry {
  id: string;
  date: string;
  fullName: string;
  companyName: string;
  country: string;
  email: string;
  phone: string;
  inquiryType: 'quote' | 'sample' | 'private_label' | 'general';
  productsOfInterest: string[];
  targetQuantity?: string;
  incoterm?: string;
  destinationPort?: string;
  message: string;
  status: 'new' | 'contacted' | 'sample_sent' | 'deal_closed';
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  textAr: string;
  textEn: string;
  textRu?: string;
  textDe?: string;
  textFr?: string;
  textIt?: string;
  textEs?: string;
  timestamp: string;
  quickOptions?: { labelAr: string; labelEn: string; action: string }[];
}

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  shortLabel: string;
  dir: 'ltr' | 'rtl';
  localeCode: string;
}

export interface SeoKeyword {
  keyword: string;
  keywordAr?: string;
  targetMarket?: string;
  searchVolume: 'high' | 'medium' | 'niche' | string;
  difficulty?: 'low' | 'medium' | 'high' | string;
  rankStatus?: 'top3' | 'page1' | 'optimizing' | string;
  cpcValue?: string;
  intent?: string;
  recommendedPage?: string;
}
