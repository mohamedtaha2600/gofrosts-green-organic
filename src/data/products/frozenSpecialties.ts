import { Product } from '../../types';

/**
 * المجموعة الثالثة (الجزء الثاني): الخضروات والمحاصيل التخصصية المجمدة IQF
 * بروكلي، قرنبيط، ذرة حلوة، سبانخ، وفول حراتي
 */
export const FROZEN_SPECIALTIES: Product[] = [
  // 19. بروكلي زهرات مجمدة IQF
  {
    id: 'broccoli-iqf',
    nameAr: 'بروكلي زهرات مجمدة IQF (يدوي 20-40 مم / 40-60 مم)',
    nameEn: 'IQF Broccoli Florets (Hand-Cut 20-40mm / 40-60mm)',
    category: 'vegetables',
    descriptionAr: 'زهرات بروكلي طازجة مقطوعة يدوياً بأحجام متناسقة، مسلوقة ومجمدة IQF للحفاظ على اللون الأخضر الداكن والقوام المتماسك.',
    descriptionEn: 'Hand-cut broccoli florets, calibrated (20-40mm or 40-60mm), free from excess stalks, flash-frozen for optimal crunch and vitamin retention.',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80',
    grades: ['Calibrated Florets (20 - 40 mm)', 'Calibrated Florets (40 - 60 mm)', 'Uncalibrated / Minced'],
    cutsAr: ['زهرات متناسقة 20-40 مم', 'زهرات 40-60 مم', 'مفروم'],
    cutsEn: ['Florets 20-40mm', 'Florets 40-60mm', 'Minced / Stalks'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Master Carton', '15kg Export Box'],
      privateLabel: true
    },
    seasonMonths: [12, 1, 2, 3],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt',
    featured: false
  },

  // 20. قرنبيط زهرات مجمدة IQF
  {
    id: 'cauliflower-iqf',
    nameAr: 'قرنبيط زهرات مجمدة IQF (أبيض ناصع 40-60 مم)',
    nameEn: 'IQF Cauliflower Florets (Pure White 40-60mm)',
    category: 'vegetables',
    descriptionAr: 'زهرات قرنبيط بيضاء ناصعة مقطوعة يدوياً، معالجة بالبلانشينج لمنع التغير اللوني ومجمدة IQF.',
    descriptionEn: 'Pure white hand-cut cauliflower florets (40-60mm), blanched to prevent discoloration and individually quick-frozen.',
    image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80',
    grades: ['Florets 40 - 60 mm', 'Florets 20 - 40 mm', 'Minced Cauliflower Rice'],
    cutsAr: ['زهرات 40-60 مم', 'أرز قرنبيط مفروم'],
    cutsEn: ['Florets 40-60mm', 'Minced / Riced'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Carton with Blue Poly Liner', '15kg Bag'],
      privateLabel: true
    },
    seasonMonths: [11, 12, 1, 2, 3],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt',
    featured: false
  },

  // 21. ذرة حلوة حبوب مجمدة IQF
  {
    id: 'sweet-corn-iqf',
    nameAr: 'ذرة حلوة حبوب مجمدة IQF (أصناف قناة السويس وأمريكي)',
    nameEn: 'IQF Sweet Corn Kernels (Suez Canal / American Variety)',
    category: 'vegetables',
    descriptionAr: 'حبوب ذرة صفراء ذهبية حلوة المذاق ومقرمشة، منزوعة الكوز آلياً ومجمدة بتقنية IQF فور الحصاد.',
    descriptionEn: 'Golden yellow sweet corn kernels, crispy and naturally sweet. Mechanically cut and flash-frozen within hours of field harvest.',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    grades: ['Grade A Sweet Golden Kernels', 'Foodservice Grade'],
    cutsAr: ['حبوب كاملة نقية 100%'],
    cutsEn: ['100% Whole Clean Kernels'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Master Carton (Blue Poly Liner)', '20kg Bulk Bag'],
      privateLabel: true
    },
    seasonMonths: [7, 8, 9, 10, 11],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt',
    featured: false
  },

  // 22. سبانخ خضراء مجمدة IQF
  {
    id: 'spinach-iqf',
    nameAr: 'سبانخ خضراء مجمدة IQF (أوراق مفرومة وقوالب)',
    nameEn: 'IQF Chopped Spinach & Leaf Cubes',
    category: 'vegetables',
    descriptionAr: 'سبانخ مصرية طازجة غنية بالفيتامينات، مغسولة ومعالجة، متوفرة مفرومة أو في مكعبات وقوالب سهلة الاستخدام.',
    descriptionEn: 'Fresh iron-rich Egyptian spinach, washed, chopped, and portioned into convenient frozen cubes or loose leaves without clumping.',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
    grades: ['Minced Leaf Blocks / Cubes', 'Loose Chopped Leaves'],
    cutsAr: ['مفرومة قوالب سهلة الاستخدام', 'أوراق كاملة مفرودة'],
    cutsEn: ['Chopped Portions / Cubes', 'Loose Leaves'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Carton with Blue Poly Liner', '25kg Mesh Bag'],
      privateLabel: true
    },
    seasonMonths: [8, 9, 10, 11],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt (Nile Delta)',
    featured: false
  },

  // 23. فول أخضر حراتي مقشر وبقشرته IQF
  {
    id: 'broad-beans-iqf',
    nameAr: 'فول أخضر حراتي مقشر وبقشرته IQF',
    nameEn: 'IQF Green Broad Beans (Peeled Habba & Non-Peeled Fava)',
    category: 'gourmet',
    descriptionAr: 'فول أخضر حراتي مصري طازج، متوفر مقشر من القشرتين (Skinless Habba) بطعم زبدي حلو، أو بحباته الخضراء الطازجة.',
    descriptionEn: 'Tender Egyptian green fava broad beans, available double-peeled (skinless habba) or whole peeled pods with buttery sweet Mediterranean taste.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    grades: ['Double-Peeled Skinless (Habba)', 'Whole Peeled Pods'],
    cutsAr: ['حبوب مقشرة من القشرة الرقيقة (Skinless)', 'حبوب كاملة'],
    cutsEn: ['Double Peeled Skinless', 'Single Peeled Pods'],
    packaging: {
      retail: ['400g x 20 bags (8kg Carton)', '1kg x 10 bags (10kg Carton)', '2.5kg x 4 bags (10kg Carton)'],
      bulk: ['10kg Master Carton (Blue Poly Liner)', '20kg Bulk Bag'],
      privateLabel: true
    },
    seasonMonths: [1, 2, 3],
    storageTemp: '-18°C or below',
    shelfLife: '24 Months',
    origin: 'Egypt',
    featured: false
  }
];
