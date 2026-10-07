import { Language } from '../types';

export const CERTIFICATE_RU_TRANSLATIONS: Record<string, {
  titleRu: string;
  scopeRu: string;
  statusRu: string;
}> = {
  'brcgs': {
    titleRu: 'Глобальный стандарт пищевой безопасности BRCGS (Food Safety)',
    scopeRu: 'Проектирование и эксплуатация производственных линий IQF в соответствии с высшими требованиями европейских розничных сетей и импортеров.',
    statusRu: 'Новый завод — подготовка к сертификационному аудиту BRCGS',
  },
  'iso22000': {
    titleRu: 'Система безопасности пищевой продукции ISO 22000:2018 & HACCP',
    scopeRu: 'Комплексный контроль критических точек (ККТ), детекция металлов, оптическая сортировка и полная микробиологическая безопасность.',
    statusRu: 'Новый завод — внедренная система НАССР и контроль ККТ',
  },
  'fda-reg': {
    titleRu: 'Регистрация пищевого предприятия в US FDA (Экспорт в США)',
    scopeRu: 'Соответствие нормам FSMA, предварительное уведомление Prior Notice и прямые контейнерные поставки замороженных продуктов в порты США.',
    statusRu: 'Новый завод — процедура регистрации US FDA',
  },
  'global-gap': {
    titleRu: 'Прослеживаемость сырья от поля до заморозки GlobalG.A.P.',
    scopeRu: 'Прямые контракты с сертифицированными египетскими фермами дельты Нила с нулевым уровнем вредных пестицидов.',
    statusRu: 'Новый завод — полная система прослеживаемости урожая',
  },
  'halal-cert': {
    titleRu: 'Международный стандарт Халяль (Halal Food Compliance)',
    scopeRu: 'Стерильные линии переработки 100% натуральных овощей и фруктов, отвечающие требованиям рынков стран Залива и исламского мира.',
    statusRu: 'Новый завод — 100% соответствие стандартам Халяль',
  },
  'kosher-cert': {
    titleRu: 'Международная сертификация Кошер (Kosher Parve)',
    scopeRu: 'Оборудование сортировки, мойки и заморозки сертифицировано по стандарту Kosher Parve для рынков Северной Америки и Европы.',
    statusRu: 'Новый завод — процедура подтверждения Кошер',
  },
  'organic-eu-usda': {
    titleRu: 'Органические стандарты (EU & USDA Organic Principles)',
    scopeRu: 'Выделенные технологические протоколы переработки экологически чистой продукции без ГМО и химических добавок для линейки Green Organic.',
    statusRu: 'Новый завод — выделенные линии органической переработки',
  },
  'iso9001': {
    titleRu: 'Система менеджмента качества ISO 9001:2015',
    scopeRu: 'Собственная аналитическая лаборатория контроля качества (Brix, дефекты, плотность, температура -18°C и микробиология).',
    statusRu: 'Новый завод — оснащенная лаборатория контроля качества',
  },
};

export function getCertificateLocalized(cert: any, lang: Language) {
  const isAr = lang === 'ar';
  const isRu = lang === 'ru';
  const ruData = CERTIFICATE_RU_TRANSLATIONS[cert.id];
  return {
    title: isAr 
      ? cert.titleAr 
      : isRu 
      ? (cert.titleRu || ruData?.titleRu || cert.titleEn) 
      : cert.titleEn,
    scope: isAr 
      ? cert.scopeAr 
      : isRu 
      ? (cert.scopeRu || ruData?.scopeRu || cert.scopeEn) 
      : cert.scopeEn,
    status: isAr 
      ? (cert.statusAr || 'مطابق للمعايير') 
      : isRu 
      ? (cert.statusRu || ruData?.statusRu || cert.statusEn || 'Соответствует стандартам') 
      : (cert.statusEn || 'Compliant Standard'),
  };
}
