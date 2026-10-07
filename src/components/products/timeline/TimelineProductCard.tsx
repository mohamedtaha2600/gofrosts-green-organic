import React from 'react';
import { TimelineStationItem } from '../../../types/timeline';
import { Product, Language } from '../../../types';
import { MasterFruitCard } from '../card';

interface TimelineProductCardProps {
  station: TimelineStationItem;
  lang: Language;
  onSelectForRfq: (product: Product) => void;
  onViewSpecs?: (product: Product) => void;
  onOpenChromaForStation?: (stationId: string) => void;
  className?: string;
  side?: 'left' | 'right';
}

/**
 * Interactive Fruit Card for 3D Harvest Timeline
 * Powered by MasterFruitCard with dynamic themes and inner showcase modals.
 */
export const TimelineProductCard: React.FC<TimelineProductCardProps> = ({
  station,
  lang,
  onSelectForRfq,
  className = '',
  side,
}) => {
  const isRtl = lang === 'ar';
  const isRightCard = station.branchSide === 'right';
  const defaultSide: 'left' | 'right' = isRtl
    ? (isRightCard ? 'left' : 'right')
    : (isRightCard ? 'right' : 'left');

  return (
    <div className={`w-full max-w-[480px] xl:max-w-[520px] ${className}`}>
      <MasterFruitCard
        product={station.product}
        lang={lang}
        onSelectForRfq={onSelectForRfq}
        side={side || defaultSide}
      />
    </div>
  );
};
