import React, { useState, useEffect, useCallback } from 'react';
import { Product, Language, LeadInquiry } from '../../types';
import { getProductLocalized } from '../../i18n/products';
import { useRfq3DTilt } from './useRfq3DTilt';
import { useRfqValidation, RfqFormData } from './useRfqValidation';
import { RfqAmbientBackdrop } from './RfqAmbientBackdrop';
import { RfqModalHeader } from './RfqModalHeader';
import { RfqProductSelector } from './RfqProductSelector';
import { RfqFieldsContainer } from './RfqFieldsContainer';
import { RfqActionFooter } from './RfqActionFooter';
import { RfqSuccessOverlay } from './RfqSuccessOverlay';

interface MasterRfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  preSelectedProduct?: Product | null;
  lang: Language;
  onSubmitInquiry: (lead: Omit<LeadInquiry, 'id' | 'date' | 'status'>) => void;
}

const INITIAL_FORM: RfqFormData = {
  fullName: '',
  companyName: '',
  workEmail: '',
  intlPhone: '',
  estimatedQuantity: '',
  targetCountry: '',
  specsAndPackaging: '',
};

export const MasterRfqModal: React.FC<MasterRfqModalProps> = ({
  isOpen,
  onClose,
  products,
  preSelectedProduct,
  lang,
  onSubmitInquiry,
}) => {
  const isArabic = lang === 'ar';
  const modalRef = useRfq3DTilt();

  const [formData, setFormData] = useState<RfqFormData>(INITIAL_FORM);
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const {
    isValid,
    shouldShowError,
    markTouched,
    markAllTouched,
    resetTouched,
  } = useRfqValidation(formData);

  // Sync preSelectedProduct or default
  useEffect(() => {
    if (preSelectedProduct) {
      setSelectedProductIds([preSelectedProduct.id]);
    } else if (products.length > 0 && selectedProductIds.length === 0) {
      setSelectedProductIds([products[0].id]);
    }
  }, [preSelectedProduct, products]);

  // Load draft from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gofrosts_rfq_draft');
      if (saved) {
        const d = JSON.parse(saved);
        setFormData((prev) => ({ ...prev, ...d }));
      }
    } catch {
      // ignore
    }
  }, []);

  // Keyboard close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleChangeField = (key: keyof RfqFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleToggleProduct = (id: string) => {
    setSelectedProductIds((prev) => {
      if (prev.includes(id)) {
        return prev.length > 1 ? prev.filter((p) => p !== id) : prev;
      }
      return [...prev, id];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    markAllTouched();

    if (!isValid) return;

    setIsSubmitting(true);

    const productNames = products
      .filter((p) => selectedProductIds.includes(p.id))
      .map((p) => getProductLocalized(p, lang).name);

    setTimeout(() => {
      onSubmitInquiry({
        fullName: formData.fullName,
        companyName: formData.companyName,
        country: formData.targetCountry || (isArabic ? 'غير محدد' : 'Unspecified'),
        email: formData.workEmail,
        phone: formData.intlPhone,
        inquiryType: 'quote',
        productsOfInterest: productNames,
        targetQuantity: formData.estimatedQuantity,
        message: formData.specsAndPackaging || (isArabic ? 'طلب تسعير ومواصفات تصديرية رسمية' : 'Official Export Quotation Request'),
      });

      try {
        localStorage.setItem(
          'gofrosts_rfq_draft',
          JSON.stringify({
            fullName: formData.fullName,
            companyName: formData.companyName,
            workEmail: formData.workEmail,
            intlPhone: formData.intlPhone,
            targetCountry: formData.targetCountry,
          })
        );
      } catch {
        // ignore
      }

      setIsSubmitting(false);
      setIsSuccessOpen(true);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
      <RfqAmbientBackdrop />

      <div
        ref={modalRef}
        id="rfqModal"
        className="animate-modal-entrance w-full max-w-4xl bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-2xl relative overflow-hidden transition-all duration-300 my-auto"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 250, 252, 0.94) 50%, rgba(246, 254, 250, 0.96) 100%)',
          boxShadow: '0 25px 60px -15px rgba(88, 28, 56, 0.12), 0 12px 32px -8px rgba(5, 150, 105, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.9) inset',
        }}
      >
        {/* Top Decorative Gradient Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-[#381020]" />

        <RfqModalHeader
          title={isArabic ? 'طلب عرض أسعار وعينات تصديرية' : 'Request Export Quote & Samples'}
          onClose={onClose}
          closeLabel={isArabic ? 'إغلاق' : 'Close'}
        />

        <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-7 space-y-5">
          <RfqProductSelector
            products={products}
            selectedIds={selectedProductIds}
            onToggleProduct={handleToggleProduct}
            lang={lang}
          />

          <RfqFieldsContainer
            formData={formData}
            onChangeField={handleChangeField}
            onBlurField={(field) => markTouched(field)}
            shouldShowError={(field) => shouldShowError(field as any)}
            lang={lang}
          />

          <RfqActionFooter
            isValid={isValid}
            isSubmitting={isSubmitting}
            onClose={onClose}
            isArabic={isArabic}
          />
        </form>

        <RfqSuccessOverlay
          isOpen={isSuccessOpen}
          onReturn={() => {
            setIsSuccessOpen(false);
            onClose();
          }}
          isArabic={isArabic}
        />
      </div>
    </div>
  );
};
