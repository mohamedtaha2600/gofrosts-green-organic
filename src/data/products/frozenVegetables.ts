import { Product } from '../../types';

/**
 * المجموعة الثالثة (الجزء الأول): الخضروات والمحاصيل المجمدة IQF الأساسية
 * فاصوليا، بامية، خرشوف، ملوخية، قلقاس، بسلة وجزر، وخضار مشكل
 */
export const FROZEN_VEGETABLES: Product[] = [
  // 12. فاصوليا خضراء مصرية IQF
  {
    id: 'green-beans-iqf',
    nameAr: 'فاصوليا خضراء مصرية IQF (كاملة هارفست ومقطعة)',
    nameEn: 'IQF Egyptian Green Beans (Whole Snapped & Cut Extra Fine)',
    category: 'vegetables',
    descriptionAr: 'فاصوليا خضراء مصرية طازجة منتقاة بعناية وخالية من الخيوط، مسلوقة بالبخار (Blanched) ومجمدة بتقنية IQF للحفاظ على اللون الأخضر الناصع والقوام الهش المقرمش. موسمان للإنتاج.',
    descriptionEn: 'Selected crisp Egyptian Green Beans, stringless, steam-blanched, and flash-frozen. Available in whole pods (Haricot Verts) and uniform 2-4cm cross-cuts across two annual harvest cycles.',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80',
    grades: ['Extra Fine (<6.5 mm)', 'Fine (6.5 - 8 mm)', 'Medium (8 - 10 mm)'],
    cutsAr: ['مقطعة كروس-كت (2 - 4 سم)', 'كاملة بدون أطراف (Whole Haricots)'],
    cutsEn: ['Cross-cut (2 - 4 cm)', 'Whole Snapped Pods (Haricots Verts)'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Master Carton (Blue Poly Liner)', '25kg Mesh Bulk Bag'],
      privateLabel: true
    },
    seasonMonths: [5, 6, 7, 10, 11, 12],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt (Nile Delta & Beheira)',
    featured: true
  },

  // 13. بامية مصرية مجمدة IQF
  {
    id: 'okra-iqf',
    nameAr: 'بامية مصرية مجمدة IQF (إكسترا / زيرو / ممتاز / نمرة 1)',
    nameEn: 'IQF Egyptian Okra (Extra / Zero / Excellent / Grade 1)',
    category: 'vegetables',
    descriptionAr: 'بامية خضراء مصرية مقمعة يدوياً حبة بحبة، خالية من الألياف، مقسمة بدقة حسب الأطوال: إكسترا (1.5-2.5 سم)، زيرو (2.5-3.5 سم)، ممتاز (3.5-4.5 سم)، نمرة 1 (4.5-5.5 سم).',
    descriptionEn: 'Signature Egyptian Okra hand-capped pod by pod, tender and fiber-free. Calibrated into 4 classic export grades: Extra (1.5-2.5cm), Zero (2.5-3.5cm), Excellent (3.5-4.5cm), Grade 1 (4.5-5.5cm).',
    image: 'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&w=800&q=80',
    grades: ['Okra Extra (1.5 - 2.5 cm)', 'Okra Zero (2.5 - 3.5 cm)', 'Okra Excellent (3.5 - 4.5 cm)', 'Okra One (4.5 - 5.5 cm)'],
    cutsAr: ['قرون كاملة مقمعة يدوياً', 'حلقات مقطعة للطبخ السريع'],
    cutsEn: ['Whole Hand-capped Pods', 'Sliced Rings'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Master Carton (Blue Polyethylene Bag)', '20kg Foodservice Bag'],
      privateLabel: true
    },
    seasonMonths: [5, 6, 7, 8, 9],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt (Nile Delta Farms)',
    featured: true
  },

  // 14. خرشوف مصري مجمد IQF
  {
    id: 'artichoke-iqf',
    nameAr: 'خرشوف مصري مجمد IQF (قيعان / قلوب / أرباع)',
    nameEn: 'IQF Egyptian Artichoke (Bottoms / Hearts / Quarters)',
    category: 'gourmet',
    descriptionAr: 'قيعان وقلوب خرشوف مصري منتقاة بعناية من مزارع البحيرة والإسكندرية، معالجة بحمض الستريك الطبيعي لمنع الأكسدة، مجمدة فردياً بمقاسات معايرة للأغذية الفاخرة والمطاعم الأوروبية.',
    descriptionEn: 'Selected Egyptian Artichoke Bottoms (3-5cm, 5-7cm, 7-9cm), Hearts, and Quarters. Naturally blanched to prevent browning, individually quick frozen to export specifications.',
    image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80',
    grades: ['Bottoms (3 - 5 cm)', 'Bottoms (5 - 7 cm)', 'Bottoms (7 - 9 cm)', 'Hearts & Quarters'],
    cutsAr: ['قيعان كاملة معيرة', 'قلوب مقطعة أرباع', 'شرائح للبيتزا والمقبلات'],
    cutsEn: ['Whole Calibrated Bottoms', 'Quartered Hearts', 'Sliced Artichoke'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Bulk Carton (5 x 2kg or Poly Liner)', '12kg Export Master Box'],
      privateLabel: true
    },
    seasonMonths: [1, 2, 3, 4, 5],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt (Beheira & Alexandria Coast)',
    featured: true
  },

  // 15. ملوخية خضراء مصرية
  {
    id: 'molokhia-iqf',
    nameAr: 'ملوخية خضراء مصرية (مفرومة وأوراق طازجة مجمدة)',
    nameEn: 'IQF Minced Molokhia & Fresh Whole Leaves (Jute Mallow)',
    category: 'vegetables',
    descriptionAr: 'ملوخية خضراء مصرية طازجة، مغسولة ومصفاة بفلترة ثلاثية المراحل، مفرومة ناعم أو أوراق كاملة بدون عروق، تجمد في أقل من ساعتين للحفاظ على القوام اللزج واللون الأخضر الزاهي.',
    descriptionEn: 'Carefully harvested fresh Molokhia leaves, triple-washed, finely minced or preserved as whole leaves, flash-frozen to retain authentic aroma, texture, and deep green pigment.',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
    grades: ['100% Pure Minced Molokhia Block', 'Whole Selected Leaves (Zero Stems)'],
    cutsAr: ['مفرومة ناعم للتصدير', 'أوراق كاملة منتقاة'],
    cutsEn: ['Finely Minced Puree Block', 'Whole Leaf Selection'],
    packaging: {
      retail: ['400g x 20 packs (8kg Carton)', '1kg x 10 packs (10kg Carton)'],
      bulk: ['10kg Master Carton (25 x 400g or 10 x 1kg)', '25kg Mesh / Foodservice'],
      privateLabel: true
    },
    seasonMonths: [5, 6, 7, 8, 9],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt (Gharbia & Nile Delta)',
    featured: true
  },

  // 16. قلقاس مصري مكعبات مع كيس السلق
  {
    id: 'taro-cubes-iqf',
    nameAr: 'قلقاس مصري مكعبات مع كيس السلق والكزبرة الخضراء',
    nameEn: 'IQF Egyptian Taro Cubes (Colocasia with Chard & Greenery Bag)',
    category: 'gourmet',
    descriptionAr: 'مكعبات قلقاس مصري منتقاة ومقشرة ومقطعة بدقة 1سم × 1سم، بيضاء نقية مع كيس سلق أخضر وكزبرة طازجة مجهزة للطهي الفوري.',
    descriptionEn: 'Hand-picked Egyptian Colocasia (Taro) diced into uniform 1x1cm cubes, packed with a signature sachet of fresh blended chard and coriander greenery sauce.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    grades: ['Uniform Dices (1x1 cm)', 'Premium Nile Delta Origin'],
    cutsAr: ['مكعبات 1×1 سم + كيس خضرة مفرومة'],
    cutsEn: ['1x1cm Dices + Assorted Greenery Sachet'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Master Carton with Liner', '20kg Foodservice'],
      privateLabel: true
    },
    seasonMonths: [11],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt (Gharbia & Menoufia)',
    featured: false
  },

  // 17. بسلة وجزر مجمد IQF
  {
    id: 'peas-carrots-iqf',
    nameAr: 'بسلة وجزر مجمد IQF (مكعبات متجانسة)',
    nameEn: 'IQF Peas & Carrots Blend (50/50 Uniform Dice)',
    category: 'vegetables',
    descriptionAr: 'مزيج شهي من البسلة الخضراء الطازجة مع مكعبات الجزر البرتقالي المسلوقة بالبخار، خالية من العيوب ومتناسقة الحجم 10×10 مم.',
    descriptionEn: 'Harmonious blend of sweet green peas and diced orange carrots, steam-blanched and individually frozen to preserve sweetness and bright natural pigments.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    grades: ['50/50 Standard Export Ratio', '60/40 Custom Importer Blend'],
    cutsAr: ['مكعبات متساوية 10×10 مم'],
    cutsEn: ['Uniform 10x10mm Dices'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Blue Liner Master Carton', '20kg Polybag'],
      privateLabel: true
    },
    seasonMonths: [1, 2, 3, 4],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt',
    featured: false
  },

  // 18. خضار مشكل مجمد IQF
  {
    id: 'mixed-vegetables-iqf',
    nameAr: 'خضار مشكل مجمد IQF (3 أصناف و4 أصناف)',
    nameEn: 'IQF Mixed Vegetables (3-Way & 4-Way Gourmet Blend)',
    category: 'vegetables',
    descriptionAr: 'مزيج غني من البسلة الخضراء والجزر المكعب والفاصوليا الخضراء والذرة الحلوة، مجهز حسب طلب المستورد للريتيل والفود سيرفيس.',
    descriptionEn: 'Nutritious blend of tender green peas, diced carrots, cut green beans, and sweet corn. Customized according to customer requirements.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    grades: ['3-Way Blend (Peas, Carrots, Beans)', '4-Way Blend (+ Sweet Corn)'],
    cutsAr: ['مكعبات وقطع متناسقة 10×10 مم'],
    cutsEn: ['Uniform 10x10mm Blend'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Master Carton (Blue Poly Liner)', '20kg Bulk Bag'],
      privateLabel: true
    },
    seasonMonths: [1, 2, 3, 4, 5, 10, 11, 12],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt',
    featured: false
  }
];
