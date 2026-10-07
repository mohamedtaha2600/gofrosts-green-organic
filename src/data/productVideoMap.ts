/**
 * Product Motion Video Map
 * Maps product IDs to exact turntable 360-degree rotation motion videos.
 * Videos were verified visually and named accurately according to the produce shown.
 */

export const PRODUCT_VIDEO_MAP: Record<string, string> = {
  // 1. الفواكه المجففة والتمور
  'dried-figs': '/videos/fruits/dried_figs.mp4',
  'dried-apricots': '/videos/fruits/dried_apricots.mp4',
  'dried-mango': '/videos/fruits/dried_mango.mp4',
  'medjool-dates': '/videos/fruits/medjool_dates.mp4',
  'freeze-dried-strawberries': '/videos/fruits/strawberry.mp4',
  'golden-raisins': '/videos/fruits/raisins.mp4',

  // 2. الفواكه المجمدة IQF
  'strawberry-iqf': '/videos/fruits/strawberry.mp4',
  'mango-iqf': '/videos/fruits/frozen_mango.mp4',
  'pomegranate-iqf': '/videos/fruits/pomegranate.mp4',
  'apricot-iqf': '/videos/fruits/frozen_apricots.mp4',
  'fig-iqf': '/videos/fruits/frozen_figs.mp4',

  // 3. الخضروات والمحاصيل المجمدة والتخصصية
  'green-beans-iqf': '/videos/fruits/green_beans.mp4',
  'okra-iqf': '/videos/fruits/okra.mp4',
  'artichoke-iqf': '/videos/fruits/artichoke.mp4',
  'molokhia-iqf': '/videos/fruits/molokhia.mp4',
  'taro-cubes-iqf': '/videos/fruits/taro_cubes.mp4',
  'peas-carrots-iqf': '/videos/fruits/peas_carrots.mp4',
  'mixed-vegetables-iqf': '/videos/fruits/mixed_vegetables.mp4',
  'broccoli-iqf': '/videos/fruits/broccoli.mp4',
  'cauliflower-iqf': '/videos/fruits/cauliflower.mp4',
  'sweet-corn-iqf': '/videos/fruits/sweet_corn.mp4',
  'spinach-iqf': '/videos/fruits/spinach.mp4',
  'broad-beans-iqf': '/videos/fruits/broad_beans.mp4',
};

export function getProductVideoUrl(productId: string): string | undefined {
  return PRODUCT_VIDEO_MAP[productId];
}

export function getProductPosterUrl(productId: string): string | undefined {
  const videoUrl = PRODUCT_VIDEO_MAP[productId];
  if (!videoUrl) return undefined;
  const fileName = videoUrl.split('/').pop()?.replace('.mp4', '');
  return fileName ? `/videos/fruits/posters/${fileName}.webp` : undefined;
}
