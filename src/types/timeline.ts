import { Product } from '../types';

export interface TimelineStationItem {
  id: string;
  stationNumber: number;
  product: Product;
  produceNameAr: string;
  produceNameEn: string;
  countBadge: 'single' | 'pair' | 'trio';
  itemCountLabelAr: string;
  itemCountLabelEn: string;
  chromaColorName: string;
  chromaHex: string;
  chromaRgb: [number, number, number];
  reasonWhyColor: string;
  colorReasonAr: string;
  colorReasonEn: string;
  prompt3D: string;
  customImageDataUrl?: string;
  branchSide: 'left' | 'right';
  highlightTagAr: string;
  highlightTagEn: string;
}

export type TimelineViewMode = 'timeline' | 'grid';
