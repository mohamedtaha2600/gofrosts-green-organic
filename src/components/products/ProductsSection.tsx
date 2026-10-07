import React, { useState, useMemo } from 'react';
import { Product, Language } from '../../types';
import { ProductCategory, ProductFilterBar } from './ProductFilterBar';
import { ProductsWavyTimeline } from './timeline/ProductsWavyTimeline';
import { ProductCard } from './ProductCard';
import { TimelineViewControls } from './timeline/TimelineViewControls';
import { ProductDetailModal } from './ProductDetailModal';
import { useTimelineStations } from '../../hooks/useTimelineStations';
import { TimelineViewMode } from '../../types/timeline';

interface ProductsSectionProps {
  products: Product[];
  lang: Language;
  onSelectProductForRfq: (product: Product) => void;
  onOpenChromaStudio?: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  lang,
  onSelectProductForRfq,
  onOpenChromaStudio = () => {},
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<TimelineViewMode>('timeline');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  const isArabic = lang === 'ar';

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (p.category !== selectedCategory) return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName =
          (p.nameEn && p.nameEn.toLowerCase().includes(q)) ||
          (p.nameAr && p.nameAr.includes(q)) ||
          (p.descriptionEn && p.descriptionEn.toLowerCase().includes(q)) ||
          (p.descriptionAr && p.descriptionAr.includes(q));
        const matchesOrigin = p.origin?.toLowerCase().includes(q);
        return matchesName || matchesOrigin;
      }
      return true;
    });
  }, [products, selectedCategory, searchQuery]);

  const { stations } = useTimelineStations(filteredProducts);

  return (
    <section id="products" className="py-16 relative bg-white select-none overflow-hidden">
      {/* Ambient Volumetric Lighting */}
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-emerald-100/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 start-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-teal-50/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header - Commercial, Premium Agro-Export Focus */}
        <div className="max-w-4xl mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {isArabic ? 'تشكيلة الفواكه المجففة والمحاصيل الزراعية المجمدة' : 'Premium Dried Fruits & IQF Frozen Produce'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isArabic
              ? 'محاصيل مصرية طبيعية 100% منتقاة بعناية، معيرة بأدق المقاسات التصديرية، خالية من أي سكر مضاف أو مواد حافظة، مع توفير خيارات تعبئة التجزئة والجملة المخصصة بعلامتك التجارية.'
              : '100% natural Egyptian harvest, calibrated to precise export specifications, free from added sugar and preservatives, available in customized retail and bulk private label packaging.'}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <ProductFilterBar
          lang={lang}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* View Mode Controls Bar */}
        <TimelineViewControls
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onOpenChromaStudio={onOpenChromaStudio}
          stationsCount={stations.length}
          lang={lang}
        />
      </div>

      {/* Main Products Display */}
      {viewMode === 'timeline' ? (
        <ProductsWavyTimeline
          stations={stations}
          lang={lang}
          onOpenChromaForStation={onOpenChromaStudio}
          onSelectForRfq={onSelectProductForRfq}
          onViewSpecs={(product) => setSelectedProductForModal(product)}
        />
      ) : (
        <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              cardIndex={idx}
              onSelectForRfq={onSelectProductForRfq}
              onViewSpecs={(p) => setSelectedProductForModal(p)}
            />
          ))}
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProductForModal && (
        <ProductDetailModal
          product={selectedProductForModal}
          lang={lang}
          onClose={() => setSelectedProductForModal(null)}
          onSelectForRfq={(p) => {
            setSelectedProductForModal(null);
            onSelectProductForRfq(p);
          }}
        />
      )}
    </section>
  );
};
