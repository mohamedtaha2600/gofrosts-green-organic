import React from 'react';
import { RfqInteractiveField } from './RfqInteractiveField';
import { RfqInteractiveTextarea } from './RfqInteractiveTextarea';
import { RfqFormData } from './useRfqValidation';
import { Language } from '../../types';

interface RfqFieldsContainerProps {
  formData: RfqFormData;
  onChangeField: (key: keyof RfqFormData, value: string) => void;
  onBlurField: (key: keyof RfqFormData) => void;
  shouldShowError: (key: keyof RfqFormData) => boolean;
  lang: Language;
}

export const RfqFieldsContainer: React.FC<RfqFieldsContainerProps> = ({
  formData,
  onChangeField,
  onBlurField,
  shouldShowError,
  lang,
}) => {
  const isAr = lang === 'ar';

  return (
    <div
      className="p-5 sm:p-7 rounded-2xl border border-emerald-300/40 shadow-xs relative space-y-4"
      style={{
        background: 'linear-gradient(145deg, rgba(236, 253, 245, 0.6) 0%, rgba(209, 250, 229, 0.35) 100%)',
      }}
    >
      {/* Header inside the card */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-200/60">
        <div className="flex items-center gap-2 text-slate-800 font-bold text-xs sm:text-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shadow-xs" />
          <span>{isAr ? 'بيانات جهة الاستيراد والمواصفات التصديرية' : 'Importer & Technical Specifications Profile'}</span>
        </div>
      </div>

      {/* Grid of Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
        <RfqInteractiveField
          id="fullName"
          label={isAr ? 'الاسم الكامل' : 'Full Name'}
          placeholder={isAr ? 'اسم المسؤول أو المشتري الدولي' : 'Contact person or buyer name'}
          value={formData.fullName}
          onChange={(v) => onChangeField('fullName', v)}
          onBlur={() => onBlurField('fullName')}
          required
          hasError={shouldShowError('fullName')}
          errorMessage={isAr ? 'يرجى إدخال الاسم الكامل للتواصل الرسمي' : 'Please enter contact full name'}
        />

        <RfqInteractiveField
          id="companyName"
          label={isAr ? 'اسم الشركة أو المؤسسة المستوردة' : 'Importing Company Name'}
          placeholder={isAr ? 'اسم الشركة التجارية / المستورد' : 'Commercial company name'}
          value={formData.companyName}
          onChange={(v) => onChangeField('companyName', v)}
          onBlur={() => onBlurField('companyName')}
          required
          hasError={shouldShowError('companyName')}
          errorMessage={isAr ? 'يرجى إدخال اسم الشركة لإصدار عرض السعر' : 'Please enter company name'}
        />

        <RfqInteractiveField
          id="workEmail"
          label={isAr ? 'البريد الإلكتروني للعمل' : 'Business Email'}
          placeholder="business@company.com"
          type="email"
          dir="ltr"
          value={formData.workEmail}
          onChange={(v) => onChangeField('workEmail', v)}
          onBlur={() => onBlurField('workEmail')}
          required
          hasError={shouldShowError('workEmail')}
          errorMessage={isAr ? 'يرجى إدخال بريد إلكتروني صحيح للعمل' : 'Please enter a valid business email'}
        />

        <RfqInteractiveField
          id="intlPhone"
          label={isAr ? 'رقم الهاتف / الواتساب الدولي' : 'Phone / WhatsApp with Country Code'}
          placeholder="+20... / +966..."
          type="tel"
          dir="ltr"
          value={formData.intlPhone}
          onChange={(v) => onChangeField('intlPhone', v)}
          onBlur={() => onBlurField('intlPhone')}
          required
          hasError={shouldShowError('intlPhone')}
          errorMessage={isAr ? 'يرجى كتابة رمز الدولة متبوعاً بالرقم' : 'Please enter country code and phone number'}
        />

        <RfqInteractiveField
          id="estimatedQuantity"
          label={isAr ? 'الكمية التقديرية المطلوبة' : 'Target Quantity'}
          helperSub={isAr ? '(أطنان / حاويات)' : '(Tons / 40ft Reefer)'}
          placeholder={isAr ? 'مثال: حاوية 40 قدم، 10 أطنان، أو بالكراتين...' : 'e.g., 1 x 40ft Reefer, 10 Metric Tons...'}
          value={formData.estimatedQuantity}
          onChange={(v) => onChangeField('estimatedQuantity', v)}
          onBlur={() => onBlurField('estimatedQuantity')}
          required
          hasError={shouldShowError('estimatedQuantity')}
          errorMessage={isAr ? 'يرجى تحديد الكمية التقديرية المطلوبة للشحنة' : 'Please specify requested quantity'}
        />

        <RfqInteractiveField
          id="targetCountry"
          label={isAr ? 'دولة العميل / الاستيراد' : 'Destination Country'}
          helperSub={isAr ? '(اختياري)' : '(Optional)'}
          placeholder={isAr ? 'مثال: السعودية، ألمانيا، هولندا...' : 'e.g., Germany, Saudi Arabia, USA...'}
          value={formData.targetCountry}
          onChange={(v) => onChangeField('targetCountry', v)}
        />

        <RfqInteractiveTextarea
          id="specsAndPackaging"
          label={isAr ? 'الملاحظات أو المواصفات الفنية وشروط التعبئة' : 'Packaging Requirements, Private Label & Delivery Terms'}
          placeholder={isAr ? 'المواصفات الفنية، متطلبات التعبئة بعلامتك التجارية، أو مواعيد التسليم...' : 'Custom private label specs, caliber requirements, delivery port...'}
          value={formData.specsAndPackaging}
          onChange={(v) => onChangeField('specsAndPackaging', v)}
        />
      </div>
    </div>
  );
};
