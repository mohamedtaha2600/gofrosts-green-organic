import React from 'react';
import { Product, Language } from '../../types';
import { getProductLocalized } from '../../i18n/products';
import { getTranslation } from '../../i18n';
import { Modal } from '../ui/Modal';
import { SafeImage } from '../ui/SafeImage';
import { Icon } from '../ui/Icon';

interface ProductDetailModalProps {
  product: Product | null;
  lang: Language;
  onClose: () => void;
  onSelectForRfq: (p: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  lang,
  onClose,
  onSelectForRfq,
}) => {
  if (!product) return null;

  const t = getTranslation(lang);
  const localized = getProductLocalized(product, lang);
  const isArabic = lang === 'ar';

  return (
    <Modal
      isOpen={Boolean(product)}
      onClose={onClose}
      title={localized.name}
      maxWidth="2xl"
    >
      <div className="space-y-5 select-none">
        {/* Top Image & Description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs">
            <SafeImage
              src={product.image}
              alt={localized.name}
              fallbackTitle={localized.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between space-y-3">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {localized.description}
            </p>
            <div className="space-y-2 text-xs text-slate-700 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/70">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-slate-900">{t.products.storageTemp}:</span>
                <span className="text-emerald-800 font-semibold">{localized.storageTemp}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-slate-900">{t.products.shelfLife}:</span>
                <span className="text-emerald-800 font-semibold">{localized.shelfLife}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-slate-900">{t.products.origin}:</span>
                <span className="text-slate-800 font-semibold">{localized.origin}</span>
              </div>
              {localized.brix && (
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-slate-900">{t.products.brix}:</span>
                  <span className="text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80">
                    {localized.brix}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Grades & Cuts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
            <h4 className="text-xs font-bold text-slate-900 mb-2.5 flex items-center gap-1.5">
              <Icon name="Layers" size={15} className="text-emerald-600" />
              <span>{t.products.grades}</span>
            </h4>
            <ul className="text-xs text-slate-700 space-y-1.5 list-disc ps-4">
              {localized.grades.map((grade, idx) => (
                <li key={idx} className="leading-relaxed">{grade}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
            <h4 className="text-xs font-bold text-slate-900 mb-2.5 flex items-center gap-1.5">
              <Icon name="Scissors" size={15} className="text-emerald-600" />
              <span>{t.products.cuts}</span>
            </h4>
            <ul className="text-xs text-slate-700 space-y-1.5 list-disc ps-4">
              {(localized.cuts || []).map((cut, idx) => (
                <li key={idx} className="leading-relaxed">{cut}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Packaging Information */}
        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
          <h4 className="text-xs font-bold text-emerald-950 mb-2.5 flex items-center gap-1.5">
            <Icon name="Package" size={15} className="text-emerald-700" />
            <span>{isArabic ? 'خيارات التعبئة والتغليف والعلامات التجارية الخاصة' : 'Packaging & Private Label Specifications'}</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="bg-white/80 p-2.5 rounded-xl border border-emerald-200/50">
              <span className="font-bold text-emerald-900 block mb-1">{t.products.retailPackaging}:</span>
              <span className="leading-relaxed">
                {localized.packaging?.retail ? localized.packaging.retail.join(' · ') : product.packaging.retail.join(', ')}
              </span>
            </div>
            <div className="bg-white/80 p-2.5 rounded-xl border border-emerald-200/50">
              <span className="font-bold text-emerald-900 block mb-1">{t.products.bulkPackaging}:</span>
              <span className="leading-relaxed">
                {localized.packaging?.bulk ? localized.packaging.bulk.join(' · ') : product.packaging.bulk.join(', ')}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200/80">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
          >
            {t.products.close}
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectForRfq(product);
            }}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs font-bold rounded-xl transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Icon name="Send" size={13} />
            <span>{t.products.requestRfq}</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};
