import { useState, useEffect, useCallback } from 'react';

export interface CustomFruitSlot {
  id: string;
  name: string;
  category: 'strawberry' | 'mango' | 'pomegranate' | 'vegetable';
  dataUrl?: string; // base64 or URL
  customScale?: number;
  rotationSpeed?: number;
}

export interface ProduceMediaConfig {
  motionEnabled: boolean;
  motionSpeed: number; // 0.5 to 2.0
  activeProduceFocus: 'all' | 'strawberry' | 'mango' | 'vegetables';
  heroVideoUrl: string; // custom MP4 or motion reel
  heroVideoPoster: string;
  customSlots: CustomFruitSlot[];
}

const DEFAULT_SLOTS: CustomFruitSlot[] = [
  {
    id: 'straw-1',
    name: 'Egyptian Festival Strawberry (Whole IQF)',
    category: 'strawberry',
    customScale: 1.0,
    rotationSpeed: 1.0,
  },
  {
    id: 'straw-2',
    name: 'Egyptian Fortuna Strawberry (Select A)',
    category: 'strawberry',
    customScale: 0.9,
    rotationSpeed: -1.2,
  },
  {
    id: 'straw-3',
    name: 'Frozen Strawberry Halved / Slice',
    category: 'strawberry',
    customScale: 0.85,
    rotationSpeed: 0.8,
  },
  {
    id: 'straw-4',
    name: 'Calibrated IQF Strawberry (Grade 25-35mm)',
    category: 'strawberry',
    customScale: 1.1,
    rotationSpeed: -0.9,
  },
  {
    id: 'straw-5',
    name: 'Handpicked Stemless Berry (Bulk Pack)',
    category: 'strawberry',
    customScale: 0.95,
    rotationSpeed: 1.1,
  },
];

const STORAGE_KEY = 'gofrosts_produce_media_v6';

export function useProduceMedia() {
  const [config, setConfig] = useState<ProduceMediaConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return {
      motionEnabled: true,
      motionSpeed: 1.0,
      activeProduceFocus: 'all',
      heroVideoUrl: '',
      heroVideoPoster: '',
      customSlots: DEFAULT_SLOTS,
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // storage limit handle
    }
  }, [config]);

  const toggleMotion = useCallback(() => {
    setConfig((prev) => ({ ...prev, motionEnabled: !prev.motionEnabled }));
  }, []);

  const setMotionSpeed = useCallback((speed: number) => {
    setConfig((prev) => ({ ...prev, motionSpeed: Math.max(0.2, Math.min(3, speed)) }));
  }, []);

  const setProduceFocus = useCallback((focus: ProduceMediaConfig['activeProduceFocus']) => {
    setConfig((prev) => ({ ...prev, activeProduceFocus: focus }));
  }, []);

  const setHeroVideoUrl = useCallback((url: string) => {
    setConfig((prev) => ({ ...prev, heroVideoUrl: url }));
  }, []);

  const updateFruitSlotImage = useCallback((slotId: string, dataUrl: string) => {
    setConfig((prev) => ({
      ...prev,
      customSlots: prev.customSlots.map((slot) =>
        slot.id === slotId ? { ...slot, dataUrl } : slot
      ),
    }));
  }, []);

  const clearSlotImage = useCallback((slotId: string) => {
    setConfig((prev) => ({
      ...prev,
      customSlots: prev.customSlots.map((slot) =>
        slot.id === slotId ? { ...slot, dataUrl: undefined } : slot
      ),
    }));
  }, []);

  const resetAllMedia = useCallback(() => {
    setConfig({
      motionEnabled: true,
      motionSpeed: 1.0,
      activeProduceFocus: 'all',
      heroVideoUrl: '',
      heroVideoPoster: '',
      customSlots: DEFAULT_SLOTS,
    });
  }, []);

  return {
    config,
    toggleMotion,
    setMotionSpeed,
    setProduceFocus,
    setHeroVideoUrl,
    updateFruitSlotImage,
    clearSlotImage,
    resetAllMedia,
  };
}
