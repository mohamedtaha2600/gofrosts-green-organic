import { Product } from '../../types';
import { DRIED_PRODUCE } from './driedProduce';
import { FROZEN_FRUITS } from './frozenFruits';
import { FROZEN_VEGETABLES } from './frozenVegetables';
import { FROZEN_SPECIALTIES } from './frozenSpecialties';

import { getProductPosterUrl } from '../productVideoMap';

/**
 * الكتالوج الشامل لجميع المحاصيل الزراعية (23 محصولاً رئيسياً)
 * مرتبة حسب المجموعات الرئيسية الثلاث:
 * 1. الفواكه المجففة والتمور (6 أصناف)
 * 2. الفواكه المجمدة IQF (5 أصناف)
 * 3. الخضروات والمحاصيل المجمدة والتخصصية (12 صنفاً)
 */
export const INITIAL_PRODUCTS: Product[] = [
  ...DRIED_PRODUCE,
  ...FROZEN_FRUITS,
  ...FROZEN_VEGETABLES,
  ...FROZEN_SPECIALTIES
].map((p) => {
  const poster = getProductPosterUrl(p.id);
  return poster ? { ...p, image: poster } : p;
});

export * from './driedProduce';
export * from './frozenFruits';
export * from './frozenVegetables';
export * from './frozenSpecialties';
