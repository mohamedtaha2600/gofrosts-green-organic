import React, { useMemo } from 'react';
import { Product, Language } from '../../../types';
import { getProductLocalized } from '../../../i18n/products';
import { getFruitTheme } from './fruitThemes';
import { useFruitCardState } from './useFruitCardState';
import { FruitCardMainView } from './FruitCardMainView';
import { FruitCardShowcaseModal } from './FruitCardShowcaseModal';

interface MasterFruitCardProps {
  product: Product;
  lang: Language;
  onSelectForRfq: (p: Product) => void;
  className?: string;
  side?: 'left' | 'right';
}

export const MasterFruitCard: React.FC<MasterFruitCardProps> = ({
  product,
  lang,
  onSelectForRfq,
  className = '',
  side = 'right',
}) => {
  const isArabic = lang === 'ar';
  const loc = useMemo(() => getProductLocalized(product, lang), [product, lang]);
  const theme = useMemo(() => getFruitTheme(product.id), [product.id]);

  const {
    activeView,
    openView,
    closeView,
    isPlaneAnimating,
    isQuoteSuccess,
    triggerQuote,
  } = useFruitCardState(() => onSelectForRfq(product));

  const tiltClass = side === 'left' ? 'card-tilt-right' : 'card-tilt-left';

  return (
    <div className={`card-perspective-container relative z-10 w-full max-w-[480px] xl:max-w-[520px] mx-auto ${className}`}>
      <article
        className={`${tiltClass} relative overflow-hidden w-full h-[640px] sm:h-[660px] rounded-[24px] sm:rounded-[28px] border border-white/25 transition-all duration-500 shadow-2xl hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)] select-none`}
        style={{
          background: theme.bgGradient,
          boxShadow: `0 25px 60px -15px ${theme.shadowColor}, 0 0 0 1px rgba(255,255,255,0.18) inset`,
        }}
      >
        {/* VIEW 1: Main Card View */}
        <div className={`w-full h-full transition-opacity duration-300 ${activeView !== 'main' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <FruitCardMainView
            loc={loc}
            category={product.category}
            isArabic={isArabic}
            theme={theme}
            isPlaneAnimating={isPlaneAnimating}
            isQuoteSuccess={isQuoteSuccess}
            onTriggerQuote={triggerQuote}
            onOpenShowcase={() => openView('showcase')}
          />
        </div>

        {/* VIEW 2: Showcase Modal View */}
        <FruitCardShowcaseModal
          productId={product.id}
          productName={loc.name}
          isOpen={activeView === 'showcase'}
          onClose={closeView}
          lang={lang}
          theme={theme}
        />
      </article>
    </div>
  );
};
