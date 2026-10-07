export interface ChromaProduceSpec {
  id: string;
  produceNameAr: string;
  produceNameEn: string;
  produceType: 'iqf_frozen' | 'freeze_dried' | 'vegetable';
  itemCount: 'single' | 'pair' | 'trio';
  chromaNameAr: string;
  chromaNameEn: string;
  chromaHex: string;
  chromaRgb: [number, number, number];
  colorReasonAr: string;
  colorReasonEn: string;
  promptDescription: string;
  aspectRatio: '1:1';
}

export const CHROMA_PRODUCE_SPECS: ChromaProduceSpec[] = [
  {
    id: 'strawberry-iqf',
    produceNameAr: 'فراولة مصرية مجمدة IQF',
    produceNameEn: 'IQF Egyptian Strawberries',
    produceType: 'iqf_frozen',
    itemCount: 'pair',
    chromaNameAr: 'أزرق ملكي كروما (Cobalt Blue)',
    chromaNameEn: 'Solid Cobalt Royal Blue',
    chromaHex: '#0044FF',
    chromaRgb: [0, 68, 255],
    colorReasonAr: 'الفراولة حمراء ولها عنق أخضر؛ لذا يُحظر الأخضر تماماً. اللون الأزرق الملكي هو الأبعد ضوئياً عن الأحمر والأخضر معاً.',
    colorReasonEn: 'Strawberries are red with green calyx leaves. Pure Cobalt Blue provides 100% optical separation without clipping leaves or berries.',
    promptDescription: 'A dynamic pair of ultra-realistic 3D IQF quick-frozen ripe Egyptian strawberries, deep ruby red skin with glistening frost sugar glaze and micro ice crystals, vibrant emerald green calyx stem, natural condensation droplets, floating suspended at a 3D perspective angle, sharp commercial studio lighting, soft rim highlights, completely isolated on a solid uniform flat cobalt blue background (#0044FF), strictly no shadows on the background, 8k resolution, Octane render.',
    aspectRatio: '1:1',
  },
  {
    id: 'strawberry-freeze-dried',
    produceNameAr: 'فراولة مجففة بالتجميد (Freeze-Dried)',
    produceNameEn: 'Freeze-Dried Strawberries',
    produceType: 'freeze_dried',
    itemCount: 'trio',
    chromaNameAr: 'أزرق كروما ساطع (Electric Blue)',
    chromaNameEn: 'Vivid Electric Blue',
    chromaHex: '#0055FF',
    chromaRgb: [0, 85, 255],
    colorReasonAr: 'الفاكهة المجففة تمتلك قواماً هشاً مسامياً؛ الأزرق المشبع يمنح خوارزمية التفريغ تفكيكاً دقيقاً للحواف المسامية.',
    colorReasonEn: 'Porous freeze-dried fruit edges require a high-frequency solid blue backdrop for pristine alpha isolation without edge artifacts.',
    promptDescription: 'A floating trio of freeze-dried Egyptian strawberry crunchy slices and whole crispy dried berry, porous airy cellular texture, crisp fracture edges, rich intense natural red color, floating weightlessly in mid-air, sharp rim illumination, completely isolated on a flat solid uniform pure electric blue background (#0055FF), no cast shadows on background, 8k.',
    aspectRatio: '1:1',
  },
  {
    id: 'mango-iqf',
    produceNameAr: 'مانجو كيت وزبدة مصرية IQF',
    produceNameEn: 'IQF Egyptian Mango Chunks & Cheek',
    produceType: 'iqf_frozen',
    itemCount: 'trio',
    chromaNameAr: 'أزرق كوبالت كروما (Cobalt Blue)',
    chromaNameEn: 'Solid Cobalt Blue',
    chromaHex: '#0033EE',
    chromaRgb: [0, 51, 238],
    colorReasonAr: 'لب المانجو أصفر ذهبي برتقالي؛ الأزرق الكوبالت يقع في أقصى التضاد اللوني (Complementary) مع الأصفر.',
    colorReasonEn: 'Golden yellow mango pulp has zero blue channel information. Cobalt blue yields mathematically perfect separation.',
    promptDescription: 'A floating trio of 3D IQF Egyptian Keitt mango golden cubes and a sliced cheek, rich velvety orange pulp with delicate surface ice frost crystals, suspended in zero gravity with dynamic lighting, isolated on solid uniform flat pure cobalt blue background (#0033EE), strictly zero background shadow, 8k commercial packshot.',
    aspectRatio: '1:1',
  },
  {
    id: 'pomegranate-iqf',
    produceNameAr: 'حبوب رمان وندرفول IQF',
    produceNameEn: 'IQF Pomegranate Arils',
    produceType: 'iqf_frozen',
    itemCount: 'trio',
    chromaNameAr: 'أزرق نيلي كروما (Deep Indigo Blue)',
    chromaNameEn: 'Deep Indigo Blue',
    chromaHex: '#0022DD',
    chromaRgb: [0, 34, 221],
    colorReasonAr: 'حبات الرمان ياقوتية شفافة عاكسة؛ الأزرق النيلي يمنع اختراق وانعكاس الألوان المحيطة على الحبات اللامعة.',
    colorReasonEn: 'Translucent ruby pomegranate seeds reflect ambient light; deep indigo creates zero optical color bleeding into the red arils.',
    promptDescription: 'A floating cluster and individual airborne 3D IQF ruby red pomegranate aril seeds, glistening crystalline frost texture, gemstone transparency, isolated on flat solid uniform indigo blue background (#0022DD), no shadows, commercial 8k.',
    aspectRatio: '1:1',
  },
  {
    id: 'okra-iqf',
    produceNameAr: 'بامية خضراء مصرية زيرو وإكسترا IQF',
    produceNameEn: 'IQF Egyptian Okra Zero & Extra',
    produceType: 'vegetable',
    itemCount: 'pair',
    chromaNameAr: 'ماجنتا فوشيا كروما (Pure Magenta)',
    chromaNameEn: 'Solid Pure Magenta / Fuchsia',
    chromaHex: '#FF00FF',
    chromaRgb: [255, 0, 255],
    colorReasonAr: 'البامية خضراء تماماً؛ يُحظر استخدام خلفية خضراء نهائياً. الماجنتا (R=255, B=255, G=0) تعطي تفريغاً فورياً بنقاء 100%.',
    colorReasonEn: 'Okra is purely green, so green chroma is impossible. Pure Magenta (R:255, G:0, B:255) gives instant, zero-bleed background removal.',
    promptDescription: 'A pair of tender Egyptian Okra Zero calibrated pods, hand-capped, vibrant crisp emerald green ridges with subtle frost glaze, floating at an angle, studio rim lighting, completely isolated on a flat solid uniform pure magenta background (#FF00FF), no background shadows, 8k.',
    aspectRatio: '1:1',
  },
  {
    id: 'artichoke-iqf',
    produceNameAr: 'قيعان وقلوب خرشوف مصري IQF',
    produceNameEn: 'IQF Egyptian Artichoke Bottoms',
    produceType: 'vegetable',
    itemCount: 'single',
    chromaNameAr: 'ماجنتا فوشيا كروما (Pure Magenta)',
    chromaNameEn: 'Solid Pure Magenta',
    chromaHex: '#FF00FF',
    chromaRgb: [255, 0, 255],
    colorReasonAr: 'الخرشوف نبات عشبي أخضر شاحب؛ الماجنتا المشبعة تمنع تفريغ أي جزء من حواف القرص النباتي الطبيعي.',
    colorReasonEn: 'Artichoke pale herbal green tones contrast 100% against magenta, guaranteeing sharp calyx cup borders.',
    promptDescription: 'A pristine 3D IQF calibrated Egyptian artichoke bottom cup with faint frost beads, pale green and ivory heart, floating levitated with studio spotlighting, isolated on flat solid uniform magenta background (#FF00FF), no ground shadow, 8k.',
    aspectRatio: '1:1',
  },
  {
    id: 'green-beans-iqf',
    produceNameAr: 'فاصوليا خضراء مصرية هارفست IQF',
    produceNameEn: 'IQF Egyptian Green Beans',
    produceType: 'vegetable',
    itemCount: 'pair',
    chromaNameAr: 'ماجنتا كروما (Solid Magenta)',
    chromaNameEn: 'Solid Magenta',
    chromaHex: '#FF00FF',
    chromaRgb: [255, 0, 255],
    colorReasonAr: 'القرون خضراء ناصعة؛ الماجنتا توفر حداً فاصلاً قاطعاً مع إتاحة الحفاظ على الشعيرات الدقيقة على قرن الفاصوليا.',
    colorReasonEn: 'Vibrant green haricot pods require pure magenta backdrop to preserve tiny pod hairs and delicate natural cut tips.',
    promptDescription: 'A pair of crisp whole snapped Egyptian green beans (Haricots Verts), delicate natural green curvature with micro ice frost droplets, floating in mid-air, studio rim lighting, isolated on solid uniform flat pure magenta background (#FF00FF), no shadow, 8k.',
    aspectRatio: '1:1',
  },
];
