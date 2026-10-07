import React from 'react';
import { Product, Language } from '../../types';
import { MasterFruitCard } from './card';

interface ProductCardProps {
  product: Product;
  lang: Language;
  onSelectForRfq: (p: Product) => void;
  onViewSpecs?: (p: Product) => void;
  cardIndex?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  lang,
  onSelectForRfq,
  cardIndex,
}) => {
  const isRtl = lang === 'ar';
  const isEven = (cardIndex ?? 0) % 2 === 0;
  const side: 'left' | 'right' = isRtl
    ? (isEven ? 'right' : 'left')
    : (isEven ? 'left' : 'right');

  return (
    <MasterFruitCard
      product={product}
      lang={lang}
      onSelectForRfq={onSelectForRfq}
      side={side}
    />
  );
};
