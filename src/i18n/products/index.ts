import { Product, Language } from '../../types';
import { PRODUCT_RU_TRANSLATIONS } from '../../data/productTranslationsRu';

export interface LocalizedProductInfo {
  name: string;
  description: string;
  cuts: string[];
  grades: string[];
  origin: string;
  storageTemp: string;
  shelfLife: string;
  brix?: string;
  packaging?: {
    retail: string[];
    bulk: string[];
    privateLabel: boolean;
  };
}

/**
 * Technical grade localization dictionary for Arabic
 */
const ARABIC_GRADE_MAP: Record<string, string> = {
  'Calibrated (15 - 25 mm)': 'معيرة نخب أول (15 - 25 مم)',
  'Calibrated (25 - 35 mm)': 'معيرة كبرى (25 - 35 مم)',
  'Uncalibrated Whole': 'حبات كاملة غير معيرة',
  'Halves & Slices': 'أنصاف وشرائح متناسقة',
  'Dices 10x10 mm': 'مكعبات دايس (10×10 مم)',
  'Grade A Chunks (15x15mm / 20x20mm)': 'مكعبات نخب أول (15×15 مم / 20×20 مم)',
  'Dices (10x10mm)': 'مكعبات دايس متناسقة (10×10 مم)',
  'Slices / Cheeks': 'شرائح طولية / أنصاف خدود',
  'Aseptic Frozen Puree': 'لب طبيعي معقم 100%',
  'Extra Fine (<6.5 mm)': 'فائقة النعومة (< 6.5 مم)',
  'Fine (6.5 - 8 mm)': 'ناعمة ممتازة (6.5 - 8 مم)',
  'Medium (8 - 10 mm)': 'متوسطة قياسية (8 - 10 مم)',
  'Okra Extra (1.5 - 2.5 cm)': 'بامية إكسترا (1.5 - 2.5 سم)',
  'Okra Zero (2.5 - 3.5 cm)': 'بامية زيرو (2.5 - 3.5 سم)',
  'Okra Excellent (3.5 - 4.5 cm)': 'بامية ممتاز (3.5 - 4.5 سم)',
  'Okra One (4.5 - 5.5 cm)': 'بامية نمرة 1 (4.5 - 5.5 سم)',
  'Bottoms (3 - 5 cm)': 'قيعان خرشوف (3 - 5 سم)',
  'Bottoms (5 - 7 cm)': 'قيعان خرشوف (5 - 7 سم)',
  'Bottoms (7 - 9 cm)': 'قيعان خرشوف (7 - 9 سم)',
  'Hearts (Quarters)': 'قلوب وأرباع فاخرة',
  'Whole Arils (Ruby Red)': 'حبات ياقوتية كاملة 100%',
  'Arils for Industrial Juice': 'حبات مخصصة للعصائر والمصانع',
  'Calibrated Florets (20 - 40 mm)': 'زهرات معيرة (20 - 40 مم)',
  'Calibrated Florets (40 - 60 mm)': 'زهرات معيرة (40 - 60 مم)',
  'Uncalibrated / Minced': 'قطع ومفروم للتصنيع',
  'Grade A Sweet Golden Kernels': 'حبوب ذرة ذهبية نخب أول',
  'Foodservice Grade': 'عبوات قطاع المطاعم والفنادق',
  'Super Jumbo (>24g)': 'سوبر جامبو ملكي (> 24 جم)',
  'Jumbo (20 - 24g)': 'جامبو فاخر (20 - 24 جم)',
  'Large (16 - 20g)': 'حجم كبير (16 - 20 جم)',
  'Medium (12 - 16g)': 'حجم متوسط (12 - 16 جم)',
  '3-Way Blend (Peas, Carrots, Beans)': 'خليط ثلاثي (بسلة، جزر، فاصوليا)',
  '4-Way Blend (+ Sweet Corn)': 'خليط رباعي (+ ذرة حلوة)',
  'Double-Peeled Skinless (Habba)': 'حبة مقشرة من القشرتين (حبة زبدية)',
  'Whole Peeled Pods': 'قرون مقشرة كاملة',
  'Minced Leaf Blocks / Cubes': 'مكعبات وقوالب مفرومة مجمدة',
  'Loose Chopped Leaves': 'أوراق مقطعة مفرودة',
  'Grade A Pitted Halves': 'أنصاف مشمش منزوع النوى نخب أول',
  'Processing Grade': 'درجة تصنيع للمربيات والعصائر',
};

const ARABIC_ORIGIN_MAP: Record<string, string> = {
  'Egypt (Ismailia & Qalyubia)': 'مصر (مزارع الإسماعيلية والقليوبية)',
  'Egypt (Ismailia & Upper Egypt)': 'مصر (مزارع الإسماعيلية وصعيد مصر)',
  'Egypt (Nile Delta & Beheira)': 'مصر (أراضي دلتا النيل ومحافظة البحيرة)',
  'Egypt (Nile Delta Farms)': 'مصر (مزارع دلتا النيل الخصبة)',
  'Egypt (Alexandria & Beheira Coast)': 'مصر (سواحل الإسكندرية والبحيرة)',
  'Egypt (North Coast & Nile Delta)': 'مصر (الساحل الشمالي ودلتا النيل)',
  'Egypt (Bahariya & Toshka)': 'مصر (مزارع الواحات البحرية وتوشكى)',
  'Egypt (Nile Delta)': 'مصر (دلتا النيل)',
  'Egypt': 'جمهورية مصر العربية',
};

export const PRODUCT_MULTILINGUAL: Record<string, Partial<Record<Language, LocalizedProductInfo>>> = {
  'strawberry-iqf': {
    de: {
      name: 'Ägyptische IQF-Erdbeeren (Ganze / Hälften / Scheiben / Würfel)',
      description: 'Erstklassige ägyptische Erdbeeren (Sorten Fortuna, Festival, Sensation). Schockgefrostet mit leuchtend roter Farbe und natürlichem Zuckergehalt (8,5-11° Brix).',
      cuts: ['Ganze Früchte ohne Kelch', 'Kalibrierte Hälften', 'Gleichmäßige Scheiben', '10x10 mm Würfel'],
      grades: ['Kalibriert (15 - 25 mm)', 'Kalibriert (25 - 35 mm)', 'Unkalibriert', 'Hälften & Scheiben'],
      origin: 'Ägypten (Ismailia & Qalyubia)',
      storageTemp: '-18°C oder kälter',
      shelfLife: '24 Monate',
    },
    fr: {
      name: 'Fraises égyptiennes IQF (Entières / Demi / Tranches / Dés)',
      description: 'Fraises égyptiennes sélectionnées (variétés Fortuna, Festival, Sensation). Surgélation rapide IQF, couleur rouge rubis et brix naturel élevé (8,5-11°).',
      cuts: ['Entières équeutées', 'Demi-fraises calibrées', 'Tranches régulières', 'Dés 10x10 mm'],
      grades: ['Calibrées (15 - 25 mm)', 'Calibrées (25 - 35 mm)', 'Entières non calibrées'],
      origin: 'Égypte (Ismailia & Qalyubia)',
      storageTemp: '-18°C ou moins',
      shelfLife: '24 Mois',
    },
  },
};

export function getProductLocalized(product: Product, lang: Language): LocalizedProductInfo {
  if (lang === 'ar') {
    // Pure Arabic translation for all properties
    const localizedGrades = (product.gradesAr && product.gradesAr.length > 0)
      ? product.gradesAr
      : product.grades.map((g) => ARABIC_GRADE_MAP[g] || g);

    const localizedOrigin = product.originAr || ARABIC_ORIGIN_MAP[product.origin] || product.origin || 'جمهورية مصر العربية';

    const localizedStorage = product.storageTempAr || (
      product.category === 'dried'
        ? 'يحفظ في مكان جاف وبارد (حرارة 15-20° مئوية)'
        : 'حفظ مجمد بدرجة -18° مئوية أو أقل'
    );

    const localizedShelfLife = product.shelfLifeAr || (
      product.shelfLife?.includes('24')
        ? '24 شهراً من تاريخ الإنتاج والتعبئة'
        : '18 شهراً من تاريخ التعبئة'
    );

    const localizedBrix = product.brixAr || (
      product.brix ? product.brix.replace('Brix', 'درجة بركس').replace('°', '°') : undefined
    );

    return {
      name: product.nameAr,
      description: product.descriptionAr,
      cuts: product.cutsAr || [],
      grades: localizedGrades,
      origin: localizedOrigin,
      storageTemp: localizedStorage,
      shelfLife: localizedShelfLife,
      brix: localizedBrix,
      packaging: product.packagingAr || {
        retail: ['أكياس مطبوعة فاخرة 400 جم (كرتونة 8 كجم)', 'أكياس 1 كجم (كرتونة 10 كجم)'],
        bulk: ['كرتونة تصدير معتمدة 10 كجم ببطانة عازلة', 'شكائر صناعية 20 - 25 كجم'],
        privateLabel: true,
      },
    };
  }

  if (lang === 'ru') {
    const ru = PRODUCT_RU_TRANSLATIONS[product.id];
    return {
      name: product.nameRu || ru?.nameRu || product.nameEn,
      description: product.descriptionRu || ru?.descriptionRu || product.descriptionEn,
      cuts: product.cutsRu || ru?.cutsRu || product.cutsEn || [],
      grades: product.grades,
      origin: product.origin,
      storageTemp: product.storageTemp,
      shelfLife: product.shelfLife,
      brix: product.brix,
    };
  }

  // Check language-specific translations
  const langMatch = PRODUCT_MULTILINGUAL[product.id]?.[lang];
  if (langMatch) {
    return {
      name: langMatch.name,
      description: langMatch.description,
      cuts: langMatch.cuts,
      grades: langMatch.grades || product.grades,
      origin: langMatch.origin || product.origin,
      storageTemp: langMatch.storageTemp || product.storageTemp,
      shelfLife: langMatch.shelfLife || product.shelfLife,
      brix: langMatch.brix || product.brix,
    };
  }

  // Pure English fallback
  return {
    name: product.nameEn,
    description: product.descriptionEn,
    cuts: product.cutsEn || [],
    grades: product.grades,
    origin: product.origin,
    storageTemp: product.storageTemp,
    shelfLife: product.shelfLife,
    brix: product.brix,
  };
}
