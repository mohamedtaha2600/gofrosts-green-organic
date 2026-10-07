import { Product } from '../../types';

/**
 * المجموعة الثانية: الفواكه المجمدة IQF (تجميد فردي سريع)
 * فراولة، مانجو، حبوب رمان، مشمش، وتين
 */
export const FROZEN_FRUITS: Product[] = [
  // 7. فراولة مصرية مجمدة
  {
    id: 'strawberry-iqf',
    nameAr: 'فراولة مصرية مجمدة (كاملة / أنصاف / شرائح / مكعبات)',
    nameEn: 'IQF Egyptian Strawberries (Whole / Halves / Slices / Dices)',
    category: 'fruits',
    descriptionAr: 'فراولة مصرية فاخرة أصناف فورتونا وفستيفال وسينسيشن، معيرة بأقطار متجانسة أو غير معيرة، حمراء بالكامل بنسبة سكر طبيعية عالية (بريكس 8.5-11°)، مجمدة بتقنية التجميد الفردي السريع للتصدير.',
    descriptionEn: 'Premium Egyptian Strawberries (Fortuna / Festival / Sensation varieties). Uncalibrated or calibrated whole, halves, slices, and dices. Rich red color and high brix.',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80',
    grades: ['Calibrated (15 - 25 mm)', 'Calibrated (25 - 35 mm)', 'Uncalibrated Whole', 'Halves & Slices', 'Dices 10x10 mm'],
    gradesAr: ['معيرة (15 - 25 مم)', 'معيرة (25 - 35 مم)', 'حبات كاملة غير معيرة', 'أنصاف وشرائح طولية', 'مكعبات 10×10 مم'],
    cutsAr: ['حبات كاملة منزوعة الكأس', 'أنصاف فراولة متساوية', 'شرائح طولية', 'مكعبات دايس'],
    cutsEn: ['Whole Calyx-off', 'Calibrated Halves', 'Uniform Slices', 'Diced 10x10mm'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Bulk (Polyethylene bag inside Carton)', '25kg Foodservice Mesh Bag'],
      privateLabel: true
    },
    packagingAr: {
      retail: ['أكياس 400 جم × 20 (كرتون 8 كجم)', 'أكياس 1 كجم × 10 (كرتون 10 كجم)', 'أكياس 2.5 كجم × 4 (كرتون 10 كجم)'],
      bulk: ['كرتون 10 كجم (كيس بولي إيثيلين أزرق)', 'شوال شبكي 25 كجم للفود سيرفيس'],
      privateLabel: true
    },
    seasonMonths: [1, 2, 3, 4],
    storageTemp: '-18°C or below',
    storageTempAr: '-18° مئوية أو أقل',
    shelfLife: '24 Months',
    shelfLifeAr: '24 شهراً',
    origin: 'Egypt (Ismailia & Qalyubia)',
    originAr: 'مصر (الإسماعيلية والقليوبية)',
    brix: '8.5 - 11° Brix',
    brixAr: '8.5 - 11° بركس',
    featured: true
  },

  // 8. مانجو مصرية مجمدة IQF
  {
    id: 'mango-iqf',
    nameAr: 'مانجو مصرية مجمدة IQF (قطع ومكعبات وشرائح)',
    nameEn: 'IQF Egyptian Mango Chunks, Slices & Dices (Zebda / Keitt)',
    category: 'fruits',
    descriptionAr: 'مانجو مصرية استوائية فائقة الحلاوة خالية من الألياف، مكعبات متناسقة وشرائح ولب نقي 100%. مجمدة فورياً بتقنية IQF وBlast لصناعات العصائر والحلويات والتعبئة للمستهلك.',
    descriptionEn: 'Aromatic Egyptian Mango (Zebda / Keitt). Fiber-free luscious golden pulp, uniform 10x10mm or 15x15mm cubes, slices, and whole cheeks flash-frozen at peak season.',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
    grades: ['Grade A Chunks (15x15mm / 20x20mm)', 'Dices (10x10mm)', 'Slices / Cheeks', 'Aseptic Frozen Puree'],
    cutsAr: ['مكعبات متساوية 15×15 مم', 'شرائح طولية', 'لب طبيعي 100%'],
    cutsEn: ['15x15mm Chunks', 'Uniform Slices', 'Natural Pulp Puree'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Carton with Blue Poly Liner', '25kg Mesh / Industrial Drums'],
      privateLabel: true
    },
    seasonMonths: [7, 8, 9],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt (Ismailia & Upper Egypt)',
    brix: '14 - 17° Brix',
    featured: true
  },

  // 9. حبوب رمان مصري مجمد IQF
  {
    id: 'pomegranate-iqf',
    nameAr: 'حبوب رمان مصري مجمد IQF (صنف وندرفول ومنفلوطي)',
    nameEn: 'IQF Pomegranate Arils / Seeds (Wonderful / Manfalouti)',
    category: 'fruits',
    descriptionAr: 'حبوب رمان أحمر ياقوتي مقشرة آلياً ومفرزة بنسبة نقاء 100% خالية من الأغشية البيضاء والشوائب، مجمدة IQF ببريكس عالي 15-18° للاستخدام المباشر في العصائر والحلويات والسلطات.',
    descriptionEn: 'Ruby red Egyptian pomegranate arils extracted mechanically, 100% clean of membranes and foreign matter, flash frozen for beverages, desserts, and bakery toppings.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    grades: ['Premium Deep Red Arils (Wonderful)', 'Standard Pink/Red Arils'],
    cutsAr: ['حبوب كاملة نقية 100%'],
    cutsEn: ['100% Pure Aril Seeds'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Bulk (Polyethylene inside Carton)', '20kg Bulk Bag'],
      privateLabel: true
    },
    seasonMonths: [8, 9, 10],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt (Asyut & Desert Road)',
    brix: '15 - 18° Brix',
    featured: true
  },

  // 10. مشمش مصري مجمد IQF
  {
    id: 'apricot-iqf',
    nameAr: 'مشمش مصري مجمد IQF (أنصاف)',
    nameEn: 'IQF Egyptian Apricot Halves (Canino / Hamawi)',
    category: 'fruits',
    descriptionAr: 'أنصاف مشمش مصري منزوع النواة، برتقالي ذهبي بقوام متماسك وطعم سكري متوازن، مجمد IQF للتصنيع والمربى والعصائر.',
    descriptionEn: 'Selected Egyptian Apricot halves, pitted, vibrant orange golden color, flash-frozen for bakery, jam processing, and fruit cocktails.',
    image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80',
    grades: ['Grade A Pitted Halves', 'Processing Grade'],
    cutsAr: ['أنصاف مشمش منزوع النوى'],
    cutsEn: ['Pitted Clean Halves'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Bulk (Polyethylene in Carton)', '20kg Master Box'],
      privateLabel: true
    },
    seasonMonths: [5, 6],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt',
    brix: '11 - 14° Brix',
    featured: false
  },

  // 11. تين مصري مجمد IQF
  {
    id: 'fig-iqf',
    nameAr: 'تين مصري مجمد IQF (حبات كاملة)',
    nameEn: 'IQF Egyptian Whole Figs (Black Mission / Sultani)',
    category: 'fruits',
    descriptionAr: 'حبات تين مصري كاملة ناضجة وحلوة المذاق، مجمدة فورياً للحفاظ على القوام الداخلي العصيري والسكريات الطبيعية.',
    descriptionEn: 'Whole selected sweet Egyptian Sultani & Black Mission Figs, flash-frozen at optimal ripeness for pastry and premium fruit retail.',
    image: 'https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?auto=format&fit=crop&w=800&q=80',
    grades: ['Premium Whole Selected (30 - 45mm)', 'Standard Whole'],
    cutsAr: ['حبات كاملة منتقاة'],
    cutsEn: ['Whole Calibrated Figs'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Master Carton with Blue Poly Liner', '12kg Export Box'],
      privateLabel: true
    },
    seasonMonths: [7, 8, 9],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt (North Coast & Nile Delta)',
    brix: '16 - 20° Brix',
    featured: false
  }
];
