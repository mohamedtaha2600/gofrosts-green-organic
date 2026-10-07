import { useState, useEffect, useMemo, useCallback } from 'react';
import { Product } from '../types';
import { TimelineStationItem } from '../types/timeline';
import { CHROMA_PRODUCE_SPECS } from '../data/chromaGuide';

const TIMELINE_CUSTOM_IMAGES_KEY = 'gofrosts_timeline_station_images_v1';

export function useTimelineStations(products: Product[]) {
  const [customStationImages, setCustomStationImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(TIMELINE_CUSTOM_IMAGES_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(TIMELINE_CUSTOM_IMAGES_KEY, JSON.stringify(customStationImages));
    } catch {
      // storage limit handle
    }
  }, [customStationImages]);

  const updateStationImage = useCallback((stationId: string, dataUrl: string) => {
    setCustomStationImages((prev) => ({ ...prev, [stationId]: dataUrl }));
  }, []);

  const clearStationImage = useCallback((stationId: string) => {
    setCustomStationImages((prev) => {
      const next = { ...prev };
      delete next[stationId];
      return next;
    });
  }, []);

  const resetAllStationImages = useCallback(() => {
    setCustomStationImages({});
  }, []);

  // Map products to Timeline Stations
  const stations: TimelineStationItem[] = useMemo(() => {
    return products.slice(0, 10).map((product, index) => {
      // Match with chroma spec or fallback
      const spec = CHROMA_PRODUCE_SPECS.find((s) => s.id === product.id) || {
        id: product.id,
        produceNameAr: product.nameAr,
        produceNameEn: product.nameEn,
        produceType: product.category === 'fruits' ? 'iqf_frozen' : 'vegetable',
        itemCount: index % 3 === 0 ? 'single' : index % 3 === 1 ? 'pair' : 'trio',
        chromaNameAr: product.category === 'fruits' ? 'أزرق كروما ملكي (#0044FF)' : 'ماجنتا كروما (#FF00FF)',
        chromaNameEn: product.category === 'fruits' ? 'Cobalt Blue (#0044FF)' : 'Magenta (#FF00FF)',
        chromaHex: product.category === 'fruits' ? '#0044FF' : '#FF00FF',
        chromaRgb: (product.category === 'fruits' ? [0, 68, 255] : [255, 0, 255]) as [number, number, number],
        colorReasonAr: product.category === 'fruits' ? 'عزل كامل عن أحمر الفاكهة وعنقها الأخضر' : 'عزل كامل عن خضرة المحصول الأخضر الطبيعي',
        colorReasonEn: 'Maximum color separation against natural produce pigmentation',
        promptDescription: `Ultra-realistic 3D IQF ${product.nameEn} with frost crystals, floating isolated on solid chroma background.`,
        aspectRatio: '1:1',
      };

      const countLabels = {
        single: { ar: 'حبة مفردة 1x', en: 'Single 1x' },
        pair: { ar: 'ثنائي متناسق 2x', en: 'Pair 2x' },
        trio: { ar: 'ثلاثي مميز 3x', en: 'Trio 3x' },
      };

      return {
        id: product.id,
        stationNumber: index + 1,
        product,
        produceNameAr: spec.produceNameAr,
        produceNameEn: spec.produceNameEn,
        countBadge: spec.itemCount as 'single' | 'pair' | 'trio',
        itemCountLabelAr: countLabels[spec.itemCount as keyof typeof countLabels]?.ar || 'حبة مفردة 1x',
        itemCountLabelEn: countLabels[spec.itemCount as keyof typeof countLabels]?.en || 'Single 1x',
        chromaColorName: spec.chromaNameAr,
        chromaHex: spec.chromaHex,
        chromaRgb: spec.chromaRgb,
        reasonWhyColor: spec.colorReasonAr,
        colorReasonAr: spec.colorReasonAr,
        colorReasonEn: spec.colorReasonEn,
        prompt3D: spec.promptDescription,
        customImageDataUrl: customStationImages[product.id],
        branchSide: index % 2 === 0 ? 'right' : 'left',
        highlightTagAr: product.brix ? `${product.brix}` : 'IQF Grade A',
        highlightTagEn: product.brix ? `${product.brix}` : 'IQF Grade A',
      };
    });
  }, [products, customStationImages]);

  return {
    stations,
    customStationImages,
    updateStationImage,
    clearStationImage,
    resetAllStationImages,
  };
}
