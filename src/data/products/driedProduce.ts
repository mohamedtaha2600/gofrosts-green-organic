import { Product } from '../../types';

/**
 * المجموعة الأولى: الفواكه المجففة والتمور الفاخرة
 * تمور المجدول، التين المجفف، المشمش المجفف، شرائح المانجو، الفراولة المجففة بالتجميد، والزبيب
 */
export const DRIED_PRODUCE: Product[] = [
  // 1. تين مجفف طبيعي فاخر
  {
    id: 'dried-figs',
    nameAr: 'تين مجفف طبيعي فاخر (درجة أولى جامبو)',
    nameEn: 'Premium Natural Sun-Dried Figs (Jumbo Grade A)',
    category: 'dried',
    descriptionAr: 'تين جبلي مصري طبيعي مجفف بعناية فائقة، غني بالألياف والمعادن ومحلى طبيعياً بنسبة 100% دون أي سكر مضاف أو كبريت، معبأ بأعلى معايير السلامة الغذائية للأسواق الدولية.',
    descriptionEn: 'Organically sun-ripened and dehydrated Egyptian mountain figs. 100% naturally sweet, preservative-free, sulphur-free, rich in potassium and fiber for global health food markets.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    grades: ['Jumbo Grade A (Size 1-2)', 'Standard Extra (Size 3-4)', 'Diced Figs (5-8 mm)', 'Industrial Paste'],
    gradesAr: ['جامبو نخب أول (حجم 1-2)', 'ممتاز قياسي (حجم 3-4)', 'مكعبات تين مجفف (5-8 مم)', 'معجون تين صناعي'],
    cutsAr: ['حبات كاملة مسطحة (Lerida)', 'حبات على شكل إكليل (Protoben)', 'مكعبات مجففة دايس', 'معجون تين نقي'],
    cutsEn: ['Whole Lerida Style', 'Garland Protoben Style', 'Diced 5-8mm', 'Pure Fig Paste'],
    packaging: {
      retail: ['250g x 24 packs (6kg Master)', '500g x 12 packs (6kg Master)', '1kg x 10 bags (10kg Carton)'],
      bulk: ['5kg Wood Box / Export Master Carton', '10kg Poly-lined Carton'],
      privateLabel: true
    },
    packagingAr: {
      retail: ['عبوة 250 جم × 24 (كرتون 6 كجم)', 'عبوة 500 جم × 12 (كرتون 6 كجم)', 'أكياس سحاب 1 كجم × 10 (كرتون 10 كجم)'],
      bulk: ['كرتون تصدير 5 كجم مبطن بولي إيثيلين', 'كرتون جامبو 10 كجم للصناعات الغذائية'],
      privateLabel: true
    },
    seasonMonths: [8, 9, 10, 11, 12],
    storageTemp: '+4°C to +18°C (Ambient Dry Warehouse)',
    storageTempAr: '+4° إلى +18° مئوية (مستودع جاف وجيد التهوية)',
    shelfLife: '18 Months',
    shelfLifeAr: '18 شهراً',
    origin: 'Egypt (North Coast & Sinai)',
    originAr: 'مصر (مزارع الساحل الشمالي وسيناء)',
    brix: '55 - 65° Brix Natural',
    brixAr: '55 - 65° بركس طبيعي',
    featured: true
  },

  // 2. مشمش مجفف طبيعي جامبو
  {
    id: 'dried-apricots',
    nameAr: 'مشمش مجفف طبيعي جامبو (بدون كبريت / كبريتي عضوي)',
    nameEn: 'Natural & Sulphured Dried Jumbo Apricots',
    category: 'dried',
    descriptionAr: 'مشمش واحاتي طبيعي مجفف حبة بحبة، متوفر باللون البني العضوي الخالي من الكبريت واللون الذهبي التقليدي. قوام طري وناعم مع نكهة فاكهية مكثفة وغني بمضادات الأكسدة.',
    descriptionEn: 'Hand-sorted sun-dried apricots from Egyptian oases. Offered in organic unsulphured dark style and golden traditional grade. Plump texture, bursting with sweet-tart natural flavor.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    grades: ['Jumbo Size 1 (60-80 pcs/kg)', 'Size 2 (81-100 pcs/kg)', 'Diced Apricots (5x5 mm)', 'Industrial Halves'],
    gradesAr: ['جامبو حجم 1 (60-80 حبة/كجم)', 'حجم 2 (81-100 حبة/كجم)', 'مكعبات مشمش (5×5 مم)', 'أنصاف للصناعات الغذائية'],
    cutsAr: ['حبات كاملة منزوعة النواة', 'أنصاف مشمش مجففة', 'مكعبات دايس للمخبوزات والجرانولا'],
    cutsEn: ['Whole Pitted Fruits', 'Dehydrated Halves', 'Uniform Dices for Granola & Bakery'],
    packaging: {
      retail: ['200g x 24 bags (4.8kg Carton)', '400g x 15 bags (6kg Carton)', '1kg x 10 bags (10kg Carton)'],
      bulk: ['5kg Standup Export Carton', '12.5kg Master Industrial Case'],
      privateLabel: true
    },
    packagingAr: {
      retail: ['أكياس ستاند آب 200 جم × 24 (4.8 كجم)', 'أكياس 400 جم × 15 (كرتون 6 كجم)', 'أكياس 1 كجم × 10 (كرتون 10 كجم)'],
      bulk: ['كرتون تصدير فاخر 5 كجم', 'كرتون جامبو صناعي 12.5 كجم'],
      privateLabel: true
    },
    seasonMonths: [6, 7, 8, 9, 10],
    storageTemp: '+5°C to +15°C (Cool Dry Place)',
    storageTempAr: '+5° إلى +15° مئوية (مكان جاف وبارد)',
    shelfLife: '18 Months',
    shelfLifeAr: '18 شهراً',
    origin: 'Egypt (Siwa & Farafra Oases)',
    originAr: 'مصر (واحات سيوة والفرافرة)',
    brix: '60 - 68° Brix Natural',
    brixAr: '60 - 68° بركس طبيعي',
    featured: true
  },

  // 3. شرائح مانجو مجففة طبيعية
  {
    id: 'dried-mango',
    nameAr: 'شرائح مانجو مجففة طبيعية (بدون سكر مضاف)',
    nameEn: 'All-Natural Dehydrated Mango Strips (No Added Sugar)',
    category: 'dried',
    descriptionAr: 'شرائح مانجو مصرية استوائية طبيعية 100% مجففة بتقنية التجفيف الحراري المنضبط. بدون سكر مضاف، بدون مواد حافظة، محتفظة بكامل عبير المانجو الطازجة ولونها الذهبي الشهي.',
    descriptionEn: 'Tropical Egyptian mango strips (Keitt & Naomi) gently dehydrated under precision low-temperature air drying. 100% clean label, no added sugars, no preservatives.',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80',
    grades: ['Grade A Premium Strips (8-12 cm)', 'Short Strips (4-7 cm)', 'Mango Bits & Dices (6x6 mm)'],
    gradesAr: ['شرائح طويلة فاخرة نخب أول (8-12 سم)', 'شرائح متوسطة (4-7 سم)', 'قطع ومكعبات مانجو مجففة (6×6 مم)'],
    cutsAr: ['شرائح طولية مرنة', 'مكعبات للسناكس والجرانولا', 'مسحوق مانجو نقي 100%'],
    cutsEn: ['Chewy Tender Strips', 'Bite-sized Dices', 'Pure Mango Powder'],
    packaging: {
      retail: ['100g x 30 pouches (3kg Carton)', '250g x 20 pouches (5kg Carton)', '500g x 10 pouches (5kg Carton)'],
      bulk: ['5kg Nitrogen-flushed Bag in Carton', '10kg Export Master Box'],
      privateLabel: true
    },
    packagingAr: {
      retail: ['أكياس سحاب 100 جم × 30 (كرتون 3 كجم)', 'أكياس 250 جم × 20 (كرتون 5 كجم)', 'أكياس 500 جم × 10 (كرتون 5 كجم)'],
      bulk: ['أكياس محكمة معالجة بالنيتروجين 5 كجم', 'كرتون تصدير 10 كجم'],
      privateLabel: true
    },
    seasonMonths: [7, 8, 9, 10, 11],
    storageTemp: '+10°C to +20°C (Dry & Cool)',
    storageTempAr: '+10° إلى +20° مئوية (مكان جاف وبارد)',
    shelfLife: '14 Months',
    shelfLifeAr: '14 شهراً',
    origin: 'Egypt (Ismailia & Aswan)',
    originAr: 'مصر (مزارع الإسماعيلية وأسوان)',
    brix: '70 - 78° Brix Natural',
    brixAr: '70 - 78° بركس طبيعي',
    featured: true
  },

  // 4. تمور المجدول الملكية الفاخرة
  {
    id: 'medjool-dates',
    nameAr: 'تمور المجدول الملكية الفاخرة (سوبر جامبو وجامبو وميديم)',
    nameEn: 'Royal Egyptian Medjool Dates (Super Jumbo / Jumbo / Large)',
    category: 'dried',
    descriptionAr: 'درة التمور المصرية من مزارع توشكى والواحات البحرية. حبات عملاقة بلون كهرماني ساحر وملمس حريري ناعم، نسبة رطوبة مثالية 18-24% مع نسبة جلد مفصول أقل من 5% للدرجة الممتازة.',
    descriptionEn: 'The king of dates cultivated in Egypt’s pristine Toshka and Bahariya valleys. Succulent caramel sweetness, plump flesh, minimal skin separation (<5%), calibrated across 4 luxury sizes.',
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80',
    grades: ['Super Jumbo (>27g per date)', 'Jumbo (23-26g per date)', 'Large (19-22g per date)', 'Medium (15-18g per date)'],
    gradesAr: ['سوبر جامبو (>27 جم للحبة)', 'جامبو (23-26 جم للحبة)', 'كبير لارج (19-22 جم للحبة)', 'متوسط ميديم (15-18 جم للحبة)'],
    cutsAr: ['حبات كاملة طازجة بنواة', 'حبات منزوعة النوى محشوة بالمكسرات', 'معجون تمر مجدول ناعم'],
    cutsEn: ['Whole Pit-in Selected', 'Pitted & Gourmet Stuffed', 'Ultra-Smooth Medjool Paste'],
    packaging: {
      retail: ['500g Luxury Gift Box x 12 (6kg Master)', '1kg Window Box x 8 (8kg Master)', '2kg Gourmet Carton'],
      bulk: ['5kg Standard Export Carton', '10kg Bulk Air-tight Crate'],
      privateLabel: true
    },
    packagingAr: {
      retail: ['علب هدايا فاخرة 500 جم × 12 (كرتون 6 كجم)', 'علب بنافذة شفافة 1 كجم × 8 (كرتون 8 كجم)', 'كرتون فاخر 2 كجم'],
      bulk: ['كرتون تصدير قياسي 5 كجم', 'صناديق شحن بحري 10 كجم'],
      privateLabel: true
    },
    seasonMonths: [9, 10, 11, 12, 1, 2],
    storageTemp: '-18°C Frozen / 0°C to +4°C Chilled',
    storageTempAr: '-18° مئوية مجمد / 0° إلى +4° مئوية مبرد',
    shelfLife: '24 Months (Chilled)',
    shelfLifeAr: '24 شهراً (في التبريد المعتمد)',
    origin: 'Egypt (Toshka Oasis & New Valley)',
    originAr: 'مصر (مزارع توشكى والوادي الجديد)',
    brix: '68 - 75° Brix Natural',
    brixAr: '68 - 75° بركس طبيعي',
    featured: true
  },

  // 5. فراولة مجففة بالتجميد (Freeze-Dried)
  {
    id: 'freeze-dried-strawberries',
    nameAr: 'فراولة مجففة بالتجميد (Freeze-Dried كاملة وشرائح ومسحوق)',
    nameEn: 'Freeze-Dried Strawberries (Whole / Slices / Powder)',
    category: 'dried',
    descriptionAr: 'فراولة طبيعية مجففة بأحدث تقنيات التجفيف بالتجميد (ليوفيليزاسيون) للحفاظ على 98% من العناصر الغذائية والشكل والقرمشة الخفيفة الفريدة. مثالية للحبوب والشوكولاتة والحلويات الفاخرة.',
    descriptionEn: 'Crispy 100% natural Egyptian strawberries preserved via state-of-the-art sublimation freeze-drying. Retains 98% fresh fruit nutrients, brilliant red color, and cellular structure.',
    image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80',
    grades: ['Whole Calibrated (15-25 mm)', 'Sliced 5-7 mm', 'Dices 6x6 mm', 'Fine Fruit Powder (100% Mesh 60)'],
    gradesAr: ['حبات كاملة معيرة (15-25 مم)', 'شرائح 5-7 مم', 'مكعبات 6×6 مم', 'مسحوق فاكهة ناعم 100%'],
    cutsAr: ['حبات مقرمشة كاملة', 'شرائح خفيفة مقرمشة', 'بودرة فراولة نقية للتلوين والنكهة الطبيعية'],
    cutsEn: ['Crunchy Whole Berries', 'Uniform Crisp Slices', '100% Pure Strawberry Powder'],
    packaging: {
      retail: ['30g / 50g Foil Bags x 30', '100g Resealable Standup Pouch x 20'],
      bulk: ['5kg Moisture-barrier Bag in Carton', '10kg Nitrogen-sealed Drum'],
      privateLabel: true
    },
    packagingAr: {
      retail: ['أكياس ألومنيوم معتمة 30 جم / 50 جم × 30', 'أكياس سحاب ستاند آب 100 جم × 20'],
      bulk: ['أكياس بولي إيثيلين مزدوجة عازلة للرطوبة 5 كجم', 'براميل محكمة الإغلاق معالجة بالنيتروجين 10 كجم'],
      privateLabel: true
    },
    seasonMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    storageTemp: 'Ambient Dry Room (<25°C, <50% RH)',
    storageTempAr: 'درجة حرارة الغرفة (<25° مئوية، رطوبة نسبية <50%)',
    shelfLife: '24 Months',
    shelfLifeAr: '24 شهراً',
    origin: 'Egypt (Ismailia & Beheira)',
    originAr: 'مصر (مزارع الإسماعيلية والبحيرة)',
    brix: 'Concentrated 100% Pure',
    brixAr: 'تركيز طبيعي 100% بدون سكر',
    featured: true
  },

  // 6. زبيب مصري ذهبي وأسود فاخر
  {
    id: 'golden-raisins',
    nameAr: 'زبيب مصري ذهبي وأسود فاخر (بناتي وكشميشي)',
    nameEn: 'Egyptian Golden & Dark Seedless Raisins (Thomson / Flame)',
    category: 'dried',
    descriptionAr: 'عنب مصري عديم البذور مجفف بعناية بأشعة الشمس والهواء النقي، حبات ممتلئة بلون ذهبي متجانس أو أسود ياقوتي، مفروزة ليزرياً ومغسولة ومزيتة خفيفاً بزيت نباتي غذائي معتمد.',
    descriptionEn: 'Sun-dried seedless Egyptian grapes, laser-sorted for uniform size and color. Soft, chewy texture with optimal moisture content, ideal for bakery, confectionery, and retail snacks.',
    image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=800&q=80',
    grades: ['Golden Jumbo (Size A)', 'Golden Standard (Size B)', 'Dark Seedless Thompson', 'Flame Crimson Raisins'],
    gradesAr: ['ذهبي جامبو نخب أول (حجم A)', 'ذهبي قياسي (حجم B)', 'أسود طومسون عديم البذور', 'فليم ياقوتي مميز'],
    cutsAr: ['حبات كاملة عديمة البذور منزوعة العنق'],
    cutsEn: ['Whole Stemless Seedless Berries'],
    packaging: {
      retail: ['250g x 24 bags (6kg Carton)', '500g x 12 bags (6kg Carton)', '1kg x 10 bags (10kg Carton)'],
      bulk: ['10kg Corrugated Carton with Poly Liner', '12.5kg Industrial Box'],
      privateLabel: true
    },
    packagingAr: {
      retail: ['أكياس 250 جم × 24 (كرتون 6 كجم)', 'أكياس 500 جم × 12 (كرتون 6 كجم)', 'أكياس 1 كجم × 10 (كرتون 10 كجم)'],
      bulk: ['كرتون مضلع 10 كجم مبطن ببولي إيثيلين غذائي', 'صندوق تصدير صناعي 12.5 كجم'],
      privateLabel: true
    },
    seasonMonths: [8, 9, 10, 11, 12],
    storageTemp: '+5°C to +15°C (Cool & Dry)',
    storageTempAr: '+5° إلى +15° مئوية (مكان جاف وبارد)',
    shelfLife: '18 Months',
    shelfLifeAr: '18 شهراً',
    origin: 'Egypt (Minya & Menoufia)',
    originAr: 'مصر (مزارع المنيا والمنوفية)',
    brix: '65 - 72° Brix Natural',
    brixAr: '65 - 72° بركس طبيعي',
    featured: true
  }
];
