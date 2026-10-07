import React from 'react';

interface FruitCardHeadlineProps {
  name: string;
  description: string;
}

export const FruitCardHeadline: React.FC<FruitCardHeadlineProps> = ({
  name,
  description,
}) => {
  return (
    <header className="mb-3 text-start">
      <h3 className="text-xl sm:text-[22px] font-black text-white leading-snug tracking-tight mb-1.5 transition-transform duration-300 ease-out origin-start hover:scale-[1.01] cursor-default line-clamp-1">
        {name}
      </h3>
      <p className="text-xs sm:text-[13px] text-pink-100/90 leading-relaxed font-medium transition-transform duration-300 ease-out origin-start hover:scale-[1.005] cursor-default line-clamp-2">
        {description}
      </p>
    </header>
  );
};
