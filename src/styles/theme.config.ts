/**
 * Enterprise Design Tokens & Theme Configuration
 * GoFrosts (Green Organic) IQF Processing Factory
 * 
 * Strict Brand Rules:
 * 1. Dominant Dark Tone: Pure Jet Black (#000000 / bg-black / neutral-950)
 * 2. Primary Brand Logo Colors:
 *    - Brand Crimson / Strawberry Red: #DC2626 (primary), #EF4444 (accent), #991B1B (deep)
 *    - Brand Emerald / Natural Green: #059669 (primary), #10B981 (accent), #065F46 (deep)
 * 3. Light Surfaces: Pure Porcelain / Clean White (#FFFFFF / slate-50) for high contrast
 * 4. Zero pill discipline: Clean typographic badges & sharp borders
 */

export const BRAND_THEME = {
  colors: {
    black: '#000000',
    pureDark: '#0a0a0a',
    cardDark: '#121212',
    borderDark: '#262626',
    
    // Brand Strawberry Crimson
    red: {
      light: '#F87171',
      brand: '#DC2626',
      vibrant: '#EF4444',
      dark: '#991B1B',
      glow: 'rgba(220, 38, 38, 0.25)',
    },
    
    // Brand Organic Emerald
    green: {
      light: '#34D399',
      brand: '#059669',
      vibrant: '#10B981',
      dark: '#065F46',
      glow: 'rgba(5, 150, 105, 0.25)',
    },
    
    // Clean light backgrounds
    surfaceLight: '#FFFFFF',
    surfaceSubtle: '#F8FAFC',
    borderLight: '#E2E8F0',
    textDark: '#0F172A',
    textMuted: '#64748B',
  },
  
  reeferSpecs: {
    setpointCelsius: '-18°C to -22°C',
    capacity40ftMT: '24 - 27 Metric Tons',
    fobPorts: ['Alexandria', 'Damietta', 'Port Said'],
    factoryLocation: 'Samanoud, Gharbia Governorate, Egypt',
    originHarvestLeadHours: 4,
  },
} as const;

export type BrandTheme = typeof BRAND_THEME;
