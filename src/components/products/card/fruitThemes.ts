export interface FruitTheme {
  bgGradient: string;
  modalBg: string;
  badgeAccent: string;
  hoverSpecBg: string;
  hoverSpecBorder: string;
  hoverSpecLabel: string;
  shadowColor: string;
  ctaGradient: string;
}

export const DEFAULT_FRUIT_THEME: FruitTheme = {
  bgGradient: 'radial-gradient(120% 95% at 50% 0%, rgb(16, 120, 85) 0%, rgb(6, 78, 59) 55%, rgb(2, 44, 34) 100%)',
  modalBg: '#064e3b',
  badgeAccent: '#10b981',
  hoverSpecBg: '#ecfdf5',
  hoverSpecBorder: 'rgba(16, 185, 129, 0.3)',
  hoverSpecLabel: '#065f46',
  shadowColor: 'rgba(6, 78, 59, 0.6)',
  ctaGradient: 'linear-gradient(135deg, #00935f 0%, #00b377 100%)',
};

export const FRUIT_THEMES: Record<string, FruitTheme> = {
  'dried-figs': {
    bgGradient: 'radial-gradient(120% 95% at 50% 0%, rgb(126, 36, 68) 0%, rgb(74, 21, 37) 55%, rgb(35, 8, 18) 100%)',
    modalBg: '#36111e',
    badgeAccent: '#f59e0b',
    hoverSpecBg: '#fff1f4',
    hoverSpecBorder: 'rgba(190, 24, 93, 0.25)',
    hoverSpecLabel: '#701a35',
    shadowColor: 'rgba(46, 16, 27, 0.65)',
    ctaGradient: 'linear-gradient(135deg, #00935f 0%, #00b377 100%)',
  },
  'dried-apricots': {
    bgGradient: 'radial-gradient(120% 95% at 50% 0%, rgb(234, 88, 12) 0%, rgb(194, 65, 12) 55%, rgb(124, 45, 18) 100%)',
    modalBg: '#431407',
    badgeAccent: '#fde047',
    hoverSpecBg: '#fff7ed',
    hoverSpecBorder: 'rgba(234, 88, 12, 0.25)',
    hoverSpecLabel: '#9a3412',
    shadowColor: 'rgba(67, 20, 7, 0.65)',
    ctaGradient: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
  },
  'dried-mango': {
    bgGradient: 'radial-gradient(120% 95% at 50% 0%, rgb(217, 119, 6) 0%, rgb(180, 83, 9) 55%, rgb(113, 63, 18) 100%)',
    modalBg: '#451a03',
    badgeAccent: '#fef08a',
    hoverSpecBg: '#fefce8',
    hoverSpecBorder: 'rgba(202, 138, 4, 0.25)',
    hoverSpecLabel: '#854d0e',
    shadowColor: 'rgba(69, 26, 3, 0.65)',
    ctaGradient: 'linear-gradient(135deg, #00935f 0%, #00b377 100%)',
  },
  'medjool-dates': {
    bgGradient: 'radial-gradient(120% 95% at 50% 0%, rgb(146, 64, 14) 0%, rgb(120, 53, 15) 55%, rgb(69, 26, 3) 100%)',
    modalBg: '#3d1604',
    badgeAccent: '#fde68a',
    hoverSpecBg: '#fef3c7',
    hoverSpecBorder: 'rgba(180, 83, 9, 0.25)',
    hoverSpecLabel: '#78350f',
    shadowColor: 'rgba(69, 26, 3, 0.7)',
    ctaGradient: 'linear-gradient(135deg, #00935f 0%, #00b377 100%)',
  },
  'strawberry-iqf': {
    bgGradient: 'radial-gradient(120% 95% at 50% 0%, rgb(225, 29, 72) 0%, rgb(190, 18, 60) 55%, rgb(136, 19, 55) 100%)',
    modalBg: '#4c0519',
    badgeAccent: '#fecdd3',
    hoverSpecBg: '#fff1f2',
    hoverSpecBorder: 'rgba(225, 29, 72, 0.25)',
    hoverSpecLabel: '#9f1239',
    shadowColor: 'rgba(76, 5, 25, 0.65)',
    ctaGradient: 'linear-gradient(135deg, #00935f 0%, #00b377 100%)',
  },
  'pomegranate-iqf': {
    bgGradient: 'radial-gradient(120% 95% at 50% 0%, rgb(190, 24, 93) 0%, rgb(157, 23, 77) 55%, rgb(112, 26, 117) 100%)',
    modalBg: '#4a044e',
    badgeAccent: '#fbcfe8',
    hoverSpecBg: '#fdf2f8',
    hoverSpecBorder: 'rgba(190, 24, 93, 0.25)',
    hoverSpecLabel: '#831843',
    shadowColor: 'rgba(74, 4, 78, 0.65)',
    ctaGradient: 'linear-gradient(135deg, #00935f 0%, #00b377 100%)',
  },
};

export function getFruitTheme(productId: string): FruitTheme {
  return FRUIT_THEMES[productId] || DEFAULT_FRUIT_THEME;
}
