import React from 'react';
import { FruitCardHeaderBadges } from './FruitCardHeaderBadges';
import { FruitCardHeadline } from './FruitCardHeadline';
import { FruitCardPackagingBanner } from './FruitCardPackagingBanner';
import { FruitCardSpecGrid } from './FruitCardSpecGrid';
import { FruitCardQualitySeal } from './FruitCardQualitySeal';
import { FruitCardVariationsPills } from './FruitCardVariationsPills';
import { FruitCardQuoteButton } from './FruitCardQuoteButton';
import { FruitCardActionRow } from './FruitCardActionRow';
import { FruitTheme } from './fruitThemes';
import { LocalizedProductInfo } from '../../../i18n/products';

interface FruitCardMainViewProps {
  loc: LocalizedProductInfo;
  category: string;
  isArabic: boolean;
  theme: FruitTheme;
  isPlaneAnimating: boolean;
  isQuoteSuccess: boolean;
  onTriggerQuote: () => void;
  onOpenShowcase: () => void;
}

export const FruitCardMainView: React.FC<FruitCardMainViewProps> = ({
  loc,
  category,
  isArabic,
  theme,
  isPlaneAnimating,
  isQuoteSuccess,
  onTriggerQuote,
  onOpenShowcase,
}) => {
  return (
    <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between transition-all duration-300">
      <div className="flex-1 overflow-y-auto custom-scrollbar pe-0.5 space-y-0.5">
        <FruitCardHeaderBadges
          origin={loc.origin}
          brix={loc.brix}
          isArabic={isArabic}
          theme={theme}
        />

        <FruitCardHeadline
          name={loc.name}
          description={loc.description}
        />

        <FruitCardPackagingBanner
          packagingText={loc.packaging?.bulk?.[0]}
          isArabic={isArabic}
        />

        <FruitCardSpecGrid
          storageTemp={loc.storageTemp}
          shelfLife={loc.shelfLife}
          category={category}
          isArabic={isArabic}
          theme={theme}
        />

        <FruitCardQualitySeal isArabic={isArabic} />

        <FruitCardVariationsPills
          grades={loc.grades}
          isArabic={isArabic}
        />
      </div>

      <footer className="pt-2 border-t border-white/20 flex flex-col gap-1.5 shrink-0">
        <FruitCardQuoteButton
          isArabic={isArabic}
          isPlaneAnimating={isPlaneAnimating}
          isQuoteSuccess={isQuoteSuccess}
          onTriggerQuote={onTriggerQuote}
        />

        <FruitCardActionRow
          onOpenShowcase={onOpenShowcase}
          isArabic={isArabic}
        />
      </footer>
    </div>
  );
};
