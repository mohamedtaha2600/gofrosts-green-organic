/**
 * Maps product IDs to their corresponding 3D GLB model paths in public/models/
 */
export const PRODUCT_GLB_MAP: Record<string, string> = {
  'strawberry-iqf': '/models/strawberry.glb',
  'mango-iqf': '/models/mango.glb',
  'green-beans-iqf': '/models/greenbeans.glb',
  'okra-iqf': '/models/okra.glb',
  'artichoke-iqf': '/models/artichoke.glb',
  'pomegranate-iqf': '/models/pomegranate.glb',
  'broccoli-iqf': '/models/broccoli.glb',
  // Corn fallback for mixed veggies / sweet corn
  'sweet-corn-iqf': '/models/corn.glb',
};

/**
 * Returns GLB model URL for a product ID, or null if no 3D model available.
 */
export function getProductGlbUrl(productId: string): string | null {
  return PRODUCT_GLB_MAP[productId] || null;
}

/**
 * Fallback accent colors per product family for when 3D model loading
 */
export const PRODUCT_GLB_FALLBACK_COLOR: Record<string, string> = {
  'strawberry-iqf': '#e11d48',
  'mango-iqf': '#f59e0b',
  'green-beans-iqf': '#16a34a',
  'okra-iqf': '#15803d',
  'artichoke-iqf': '#84cc16',
  'pomegranate-iqf': '#be123c',
  'broccoli-iqf': '#16a34a',
  'sweet-corn-iqf': '#eab308',
};
