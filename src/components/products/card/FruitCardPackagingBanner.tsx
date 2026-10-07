import React from 'react';
import { Icon } from '../../ui/Icon';

interface FruitCardPackagingBannerProps {
  packagingText?: string;
  isArabic: boolean;
}

export const FruitCardPackagingBanner: React.FC<FruitCardPackagingBannerProps> = ({
  packagingText,
  isArabic,
}) => {
  const defaultText = isArabic
    ? '1 كجم • كرتونة 10 كجم للتصدير'
    : '1 kg pack • 10 kg Export Master';

  return (
    <section className="rounded-xl px-3 py-2 mb-3 bg-white/10 border border-white/20 flex items-center justify-between text-xs text-pink-100 hover:bg-white/15 transition-all">
      <div className="flex items-center gap-1.5">
        <Icon name="Package" size={15} className="text-amber-300 shrink-0" />
        <span className="font-bold text-white">
          {isArabic ? 'العبوة والوزن' : 'Packaging & Weight'}
        </span>
      </div>
      <span className="font-black text-amber-200 truncate max-w-[55%] text-end">
        {packagingText || defaultText}
      </span>
    </section>
  );
};
