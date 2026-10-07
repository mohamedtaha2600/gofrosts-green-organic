import React from 'react';
import { TimelineStationItem } from '../../../types/timeline';
import { Language, Product } from '../../../types';
import { TimelineStationNode } from './TimelineStationNode';
import { TimelineProductCard } from './TimelineProductCard';

interface TimelineStationRowProps {
  station: TimelineStationItem;
  index: number;
  lang: Language;
  onOpenChromaForStation: (stationId: string) => void;
  onSelectForRfq: (product: Product) => void;
  onViewSpecs: (product: Product) => void;
}

/**
 * One station row:
 * - One side → Fruit image with magnifier lens
 * - Center → Numbered milestone node on vertical spine (01, 02...)
 * - Other side → Master fruit card
 */
export const TimelineStationRow: React.FC<TimelineStationRowProps> = ({
  station,
  index,
  lang,
  onOpenChromaForStation,
  onSelectForRfq,
  onViewSpecs,
}) => {
  const isRightCard = station.branchSide === 'right';

  const fruitEl = (
    <TimelineStationNode
      station={station}
      onOpenChromaForStation={onOpenChromaForStation}
    />
  );

  const isRtl = lang === 'ar';
  const cardVisualSide: 'left' | 'right' = isRtl
    ? (isRightCard ? 'left' : 'right')
    : (isRightCard ? 'right' : 'left');

  const cardEl = (
    <TimelineProductCard
      station={station}
      lang={lang}
      onSelectForRfq={onSelectForRfq}
      onViewSpecs={onViewSpecs}
      onOpenChromaForStation={onOpenChromaForStation}
      side={cardVisualSide}
    />
  );

  return (
    <div className="relative py-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 w-full group/row">

      {/* ── Mobile Milestone Badge (< lg) ── */}
      <div className="lg:hidden flex items-center justify-center mb-1">
        <span className="px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-black shadow-xs tracking-wider">
          محصول {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* ── Center Milestone Circle on Desktop Spine (01, 02, 03...) ── */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white font-black text-sm border-4 border-white shadow-[0_4px_22px_rgba(5,150,105,0.45)] ring-2 ring-emerald-500/50 transition-transform duration-300 group-hover/row:scale-110 group-hover/row:bg-emerald-700">
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Fruit Column: order-1 on mobile, responsive alternating on desktop */}
      <div
        className={`w-full lg:w-1/2 flex items-center justify-center order-1 ${
          isRightCard
            ? 'lg:order-1 lg:justify-end lg:pe-8 xl:pe-16'
            : 'lg:order-2 lg:justify-start lg:ps-8 xl:ps-16'
        }`}
      >
        {fruitEl}
      </div>

      {/* Card Column: order-2 on mobile, responsive alternating on desktop */}
      <div
        className={`w-full lg:w-1/2 flex items-center justify-center order-2 ${
          isRightCard
            ? 'lg:order-2 lg:justify-start lg:ps-8 xl:ps-16'
            : 'lg:order-1 lg:justify-end lg:pe-8 xl:pe-16'
        }`}
      >
        {cardEl}
      </div>
    </div>
  );
};
