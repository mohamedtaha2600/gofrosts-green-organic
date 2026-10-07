import React from 'react';
import { Icon } from '../ui/Icon';

interface RfqActionFooterProps {
  isValid: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  isArabic: boolean;
}

export const RfqActionFooter: React.FC<RfqActionFooterProps> = ({
  isValid,
  isSubmitting,
  onClose,
  isArabic,
}) => {
  return (
    <footer className="pt-2 flex flex-col sm:flex-row-reverse items-center justify-start gap-3">
      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={`group relative w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 overflow-hidden border select-none ${
          isValid && !isSubmitting
            ? 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-700 hover:shadow-xl active:scale-[0.98] border-emerald-400/40 cursor-pointer shadow-lg shadow-emerald-500/25'
            : 'bg-emerald-900/40 border-slate-300/40 opacity-60 cursor-not-allowed filter grayscale-40'
        }`}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        <span
          className={`transition-all duration-300 shrink-0 ${
            isSubmitting
              ? '-translate-y-4 -translate-x-4 scale-125 opacity-0'
              : isArabic
              ? 'rotate-180 group-hover:-translate-x-1'
              : 'group-hover:translate-x-1'
          }`}
        >
          <Icon name="Send" size={17} />
        </span>

        <span className="font-bold">
          {isSubmitting
            ? (isArabic ? 'جاري إرسال الطلب...' : 'Transmitting Inquiry...')
            : (isArabic ? 'إرسال طلب التسعير' : 'Submit Export RFQ')}
        </span>
      </button>

      {/* Cancel Button */}
      <button
        type="button"
        onClick={onClose}
        className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-100/90 hover:bg-slate-200 active:scale-95 text-slate-700 font-bold text-sm transition-all duration-200 border border-slate-200/80 shadow-xs cursor-pointer"
      >
        {isArabic ? 'إغلاق' : 'Cancel'}
      </button>
    </footer>
  );
};
