import React from 'react';
import { Icon } from '../ui/Icon';

interface RfqSuccessOverlayProps {
  isOpen: boolean;
  onReturn: () => void;
  isArabic: boolean;
}

export const RfqSuccessOverlay: React.FC<RfqSuccessOverlayProps> = ({
  isOpen,
  onReturn,
  isArabic,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-white/98 backdrop-blur-md z-40 p-8 flex flex-col items-center justify-center text-center transition-all duration-300 animate-in fade-in">
      <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30 animate-bounce">
        <Icon name="CheckCircle2" size={32} />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
        {isArabic ? 'تم استلام طلب التسعير بنجاح!' : 'Export Quotation Request Received!'}
      </h3>

      <p className="text-xs sm:text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
        {isArabic
          ? 'شكرًا لتواصلكم. تم تسجيل متطلبات الشحنة وجارٍ إعداد كشف الأسعار الرسمي والمواصفات الفنية المعتمدة من قِبل إدارة التصدير، وسيتواصل معكم مسؤول الحساب الدولي خلال 24 ساعة.'
          : 'Thank you for reaching out. Your export shipment specs have been registered. Our international sales desk is preparing the proforma quote and official specifications, and will contact you within 24 hours.'}
      </p>

      <button
        type="button"
        onClick={onReturn}
        className="px-7 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 active:scale-95 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
      >
        {isArabic ? 'العودة إلى النموذج' : 'Back to Form'}
      </button>
    </div>
  );
};
