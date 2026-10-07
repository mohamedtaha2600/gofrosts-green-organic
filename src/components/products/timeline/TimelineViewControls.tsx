import React from 'react';
import { TimelineViewMode } from '../../../types/timeline';
import { Language } from '../../../types';
import { Icon } from '../../ui/Icon';

interface TimelineViewControlsProps {
  viewMode: TimelineViewMode;
  onViewModeChange: (mode: TimelineViewMode) => void;
  onOpenChromaStudio?: () => void;
  stationsCount: number;
  lang: Language;
}

export const TimelineViewControls: React.FC<TimelineViewControlsProps> = ({
  viewMode,
  onViewModeChange,
  stationsCount,
  lang,
}) => {
  const isArabic = lang === 'ar';

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 px-5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs mb-8 backdrop-blur-md select-none">
      {/* Left: View Mode Toggle */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
          {isArabic ? 'طريقة العرض:' : 'View Mode:'}
        </span>
        <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/80">
          <button
            onClick={() => onViewModeChange('timeline')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'timeline'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Icon name="GitCommit" size={14} className={viewMode === 'timeline' ? 'text-emerald-600' : ''} />
            <span>{isArabic ? 'المسار التفاعلي 3D' : '3D Timeline'}</span>
          </button>

          <button
            onClick={() => onViewModeChange('grid')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Icon name="Grid" size={14} className={viewMode === 'grid' ? 'text-emerald-600' : ''} />
            <span>{isArabic ? 'شبكة المنتجات' : 'Grid View'}</span>
          </button>
        </div>
      </div>

      {/* Right: Station Count */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-sans font-medium">
          <Icon name="CheckCircle2" size={14} className="text-emerald-600" />
          <span>
            {stationsCount} {isArabic ? 'أصناف معروضة' : 'Active Products'}
          </span>
        </div>
      </div>
    </div>
  );
};
