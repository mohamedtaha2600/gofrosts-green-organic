import React from 'react';
import { TimelineStationItem } from '../../../types/timeline';
import { Language, Product } from '../../../types';
import { TimelineStationRow } from './TimelineStationRow';

interface ProductsWavyTimelineProps {
  stations: TimelineStationItem[];
  lang: Language;
  onOpenChromaForStation: (stationId: string) => void;
  onSelectForRfq: (product: Product) => void;
  onViewSpecs: (product: Product) => void;
}

export const ProductsWavyTimeline: React.FC<ProductsWavyTimelineProps> = ({
  stations,
  lang,
  onOpenChromaForStation,
  onSelectForRfq,
  onViewSpecs,
}) => {
  return (
    <div className="relative w-full py-8">
      <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Continuous Center Timeline Spine Line */}
        <div className="hidden lg:block absolute top-16 bottom-16 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-200 via-emerald-500 to-emerald-200 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.3)] pointer-events-none z-0" />

        {stations.map((station, idx) => (
          <TimelineStationRow
            key={station.id}
            station={station}
            index={idx}
            lang={lang}
            onOpenChromaForStation={onOpenChromaForStation}
            onSelectForRfq={onSelectForRfq}
            onViewSpecs={onViewSpecs}
          />
        ))}
      </div>
    </div>
  );
};
