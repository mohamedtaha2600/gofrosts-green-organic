import React, { memo } from 'react';
import { Language } from '../../types';
import { HeroInteractiveSequence } from './HeroInteractiveSequence';
import { HeroHeadline } from './HeroHeadline';
import { HeroActions } from './HeroActions';
import { HeroBentoGrid } from './HeroBentoGrid';

interface HeroProps {
  lang: Language;
  onExploreProducts: () => void;
  onOpenRfq: () => void;
  onOpenCertificates: () => void;
  onOpenMediaStudio?: () => void;
}

export const Hero: React.FC<HeroProps> = memo(({
  lang,
  onExploreProducts,
  onOpenRfq,
  onOpenCertificates,
}) => {
  return (
    <div id="home" className="relative w-full bg-white text-slate-900">
      {/* Full-screen Sticky Scroll Sequence: Pure White background, zero green tint */}
      <HeroInteractiveSequence lang={lang} />

      <div className="relative max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 pt-2 pb-12 lg:pb-16 -mt-10 sm:-mt-14 z-10">
        {/* Main Headline & Description */}
        <HeroHeadline lang={lang} />

        {/* Action Buttons (CTAs) */}
        <HeroActions
          lang={lang}
          onExploreProducts={onExploreProducts}
          onOpenRfq={onOpenRfq}
          onOpenCertificates={onOpenCertificates}
        />

        {/* 4 B2B Value Highlights */}
        <HeroBentoGrid lang={lang} />
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';
