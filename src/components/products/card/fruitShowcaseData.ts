import { Language } from '../../../types';

export interface FruitShowcaseItem {
  originTitle: string;
  originSub: string;
  originDesc: string;
  nutritionTitle: string;
  nutritionSub: string;
  nutritionDesc: string;
  tasteTitle: string;
  tasteSub: string;
  tasteDesc: string;
  processTitle: string;
  processSub: string;
  processDesc: string;
}

export interface FruitSpecsItem {
  gradesTitle: string;
  grades: { name: string; detail: string }[];
  brixLabel: string;
  brixValue: string;
  moisture: string;
  so2: string;
  preservatives: string;
  storageTemp: string;
  packagingTypes: string[];
  certifications: string[];
}

export function getFruitShowcaseData(productId: string, lang: Language): FruitShowcaseItem {
  const isAr = lang === 'ar';
  
  if (productId === 'dried-apricots') {
    return {
      originTitle: isAr ? 'المنشأ وموسم الحصاد' : 'Origin & Harvest Season',
      originSub: isAr ? 'واحات سيوة والفرافرة النقية' : 'Pristine Siwa & Farafra Oases',
      originDesc: isAr
        ? 'مشمش واحاتي طبيعي ينتقى يدوياً من واحات الصحراء الغربية عند قمة النضج، مشمس ومروي بمياه الآبار العذبة.'
        : 'Naturally sun-ripened apricots hand-picked from Egyptian Western Desert oases at optimal sweetness.',
      nutritionTitle: isAr ? 'القيمة الغذائية والفوائد' : 'Nutritional Value & Benefits',
      nutritionSub: isAr ? 'غني بالبيتاكاروتين والبوتاسيوم' : 'Rich in Beta-Carotene & Potassium',
      nutritionDesc: isAr
        ? 'مصدر استثنائي لفيتامين A ومضادات الأكسدة الداعمة لصحة النظر والمناعة، ومحلى طبيعياً 100% بدون دهون.'
        : 'High in Vitamin A, dietary fiber and antioxidants promoting eyesight and immunity with zero added sugar.',
      tasteTitle: isAr ? 'القوام والنكهة الأصيلة' : 'Texture & Authentic Flavor',
      tasteSub: isAr ? 'مذاق حلو مائل للحموضة المنعشة' : 'Tender, Plump & Naturally Tangy',
      tasteDesc: isAr
        ? 'قوام لحمي طري وممتلئ مع توازن رائع بين الحلاوة الطبيعية والحموضة اللطيفة المنعشة.'
        : 'Plump and succulent bite with a balanced harmony of natural sweetness and delicate tang.',
      processTitle: isAr ? 'طريقة التجفيف الطبيعي' : 'Natural Dehydration Process',
      processSub: isAr ? 'تجفيف شمسي نظيف ومعقم' : 'Sanitary Controlled Sun-Drying',
      processDesc: isAr
        ? 'يجفف تحت أشعة الشمس في مناشر معقمة ومحمية من الأتربة لضمان الحفاظ على اللون الزاهي والليونة الفائقة.'
        : 'Dried in dust-proof sanitary chambers under solar radiation preserving vibrant hue and softness.',
    };
  }

  if (productId === 'dried-mango') {
    return {
      originTitle: isAr ? 'المنشأ وموسم الحصاد' : 'Origin & Harvest Season',
      originSub: isAr ? 'مزارع الإسماعيلية وأسوان الذهبية' : 'Golden Ismailia & Aswan Orchards',
      originDesc: isAr
        ? 'أصناف كيت ونعومي استوائية فاخرة من مزارع مصر المشمسة، تقطف بعناية لضمان أعلى درجات السكر الطبيعي.'
        : 'Finest Keitt & Naomi tropical cultivars harvested from sun-drenched Egyptian orchards.',
      nutritionTitle: isAr ? 'القيمة الغذائية والفوائد' : 'Nutritional Value & Benefits',
      nutritionSub: isAr ? 'طاقة طبيعية وفيتامين C نقي' : 'Clean Energy & Vitamin C Boost',
      nutritionDesc: isAr
        ? 'غني بفيتامين C والألياف الحيوية والإنزيمات الهاضمة، سناكس صحي مثالي بدون أي سكر مضاف أو إضافات صناعية.'
        : 'Loaded with Vitamin C, bioactive enzymes and fiber. Clean label superfood with 0% added sugar.',
      tasteTitle: isAr ? 'القوام والنكهة الأصيلة' : 'Texture & Authentic Flavor',
      tasteSub: isAr ? 'شرائح استوائية مرنة وطرية' : 'Soft, Chewy Tropical Slices',
      tasteDesc: isAr
        ? 'نكهة استوائية طاغية وعبق مانجو فواح، قوام مرن ومرضي للمضغ دون جفاف أو قساوة.'
        : 'Intense aromatic tropical aroma with tender, flexible chewiness and pure mango bliss.',
      processTitle: isAr ? 'طريقة التجفيف الحراري المنضبط' : 'Precision Low-Temp Dehydration',
      processSub: isAr ? 'تجفيف هوائي لطيف يحفظ الفيتامين' : 'Gentle Air-Drying Preserving Nutrients',
      processDesc: isAr
        ? 'تقنية تجفيف حراري منخفض في غرف معقمة تحافظ على لون الشرائح الذهبي وقيمتها الغذائية ورطوبتها المثالية.'
        : 'Precision low-temperature air convection maintaining rich golden glow, aroma and moisture balance.',
    };
  }

  // Default: Signature Dried Figs
  return {
    originTitle: isAr ? 'المنشأ وموسم الحصاد' : 'Origin & Harvest Season',
    originSub: isAr ? 'مزارع الساحل الشمالي النقية' : 'Pristine North Coast Egyptian Orchards',
    originDesc: isAr
      ? 'ثمار تين طبيعية منتقاة من أشجار التين العريقة في واحات ومزارع الساحل الشمالي، قطاف يدوي بعناية عند ذروة النضج.'
      : 'Natural mountain figs hand-harvested across historical Mediterranean North Coast oases at peak sweetness.',
    nutritionTitle: isAr ? 'القيمة الغذائية والفوائد الصحية' : 'Nutritional Value & Health Profile',
    nutritionSub: isAr ? 'طاقة حيوية نقية 100%' : '100% Pure Vital Bio-Energy',
    nutritionDesc: isAr
      ? 'كنز غذائي غني بمضادات الأكسدة القوية، الألياف الغذائية الذائبة، البوتاسيوم والمغنيسيوم والكالسيوم لتعزيز طاقة الجسم.'
      : 'Nutrient-dense superfood high in soluble dietary fiber, potassium, calcium and polyphenols with no added sugar.',
    tasteTitle: isAr ? 'القوام والنكهة الأصيلة' : 'Taste Profile & Authentic Texture',
    tasteSub: isAr ? 'حلاوة عسلية ونعومة فائقة' : 'Honey Sweetness & Tender Softness',
    tasteDesc: isAr
      ? 'قوام طري، غض ومرن من الداخل مع حبيبات مقرمشة مميزة، ومذاق حلاوة عسلية غنية تحافظ على النكهة التراثية الأصلية.'
      : 'Tender succulent interior with pleasant seed crunch and rich honeyed finish honoring ancestral heritage.',
    processTitle: isAr ? 'طريقة التجفيف الطبيعي' : 'Traditional Natural Drying Process',
    processSub: isAr ? 'تجفيف شمسي نظيف ومعقم' : 'Dust-Free Solar Dehydration',
    processDesc: isAr
      ? 'يجفف تحت أشعة الشمس المباشرة في غرف معقمة تحمي الثمار وتكثف السكريات الطبيعية لتحتفظ بليونتها وقيمتها طوال العام.'
      : 'Naturally dehydrated in hygienic solar tunnels concentrating native brix while preserving tender elasticity.',
  };
}

export function getFruitSpecsData(productId: string, lang: Language): FruitSpecsItem {
  const isAr = lang === 'ar';
  return {
    gradesTitle: isAr ? 'تصنيف الأحجام والعيارات (Grades & Sizes)' : 'Standard Grades & Caliber Calibration',
    grades: [
      { name: isAr ? 'جامبو نخب أول' : 'Jumbo Grade 1', detail: isAr ? 'عيار 1-2 • 40-55 حبة/كغ' : 'Size 1-2 • 40-55 pcs/kg' },
      { name: isAr ? 'ممتاز قياسي' : 'Standard Extra', detail: isAr ? 'عيار 3-4 • 56-70 حبة/كغ' : 'Size 3-4 • 56-70 pcs/kg' },
      { name: isAr ? 'مكعبات تجهيز غذائي' : 'Industrial Dices', detail: isAr ? 'تقطيع متساوي 5 - 8 مم' : 'Calibrated 5 - 8 mm Dices' },
    ],
    brixLabel: isAr ? 'نسبة السكر (بركس)' : 'Natural Sugar (Brix)',
    brixValue: isAr ? '55° - 65° بركس طبيعي' : '55° - 65° Natural Brix',
    moisture: '18% - 22%',
    so2: isAr ? 'خالٍ تماماً (0 ppm)' : '0 ppm (100% Sulphur Free)',
    preservatives: isAr ? 'بدون أي إضافات' : 'Zero Additives or Preservatives',
    storageTemp: '+4°C to +18°C',
    packagingTypes: [
      isAr ? 'كرتون تصدير 5 كغ / 10 كغ' : 'Export Master Carton 5kg / 10kg',
      isAr ? 'أكياس مفرغة من الهواء Vacuum' : 'Vacuum Sealed Pouches',
      isAr ? 'تعبئة بعلامتك التجارية' : 'Custom Private Label Packaging',
    ],
    certifications: ['ISO 22000', 'HACCP', 'GLOBAL G.A.P.', 'HALAL 100%'],
  };
}
