import React from 'react';
import { Icon, IconName } from '../../ui/Icon';

interface ShowcaseDetailCardProps {
  iconName: IconName;
  iconBgClass: string;
  iconTextClass: string;
  title: string;
  subtitle: string;
  description: string;
}

export const ShowcaseDetailCard: React.FC<ShowcaseDetailCardProps> = ({
  iconName,
  iconBgClass,
  iconTextClass,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="rounded-2xl p-3 bg-white/95 border border-white/60 shadow-xs text-start transition-all hover:bg-white hover:shadow-md">
      <div className="flex items-center gap-2 mb-1.5">
        <div
          className={`w-6 h-6 rounded-lg ${iconBgClass} ${iconTextClass} flex items-center justify-center shrink-0 shadow-2xs`}
        >
          <Icon name={iconName} size={14} />
        </div>
        <div>
          <h4 className="text-xs font-bold text-stone-900 leading-snug">
            {title}
          </h4>
          <p className="text-[10px] text-stone-500 font-semibold">
            {subtitle}
          </p>
        </div>
      </div>
      <p className="text-[11.5px] text-stone-700 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};
