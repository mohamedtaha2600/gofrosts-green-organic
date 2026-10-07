import React from 'react';
import { Icon } from '../../ui/Icon';

interface FruitCardQuoteButtonProps {
  isArabic: boolean;
  isPlaneAnimating: boolean;
  isQuoteSuccess: boolean;
  onTriggerQuote: () => void;
}

export const FruitCardQuoteButton: React.FC<FruitCardQuoteButtonProps> = ({
  isArabic,
  isPlaneAnimating,
  isQuoteSuccess,
  onTriggerQuote,
}) => {
  return (
    <button
      type="button"
      onClick={onTriggerQuote}
      className={`w-full py-3 px-4 rounded-2xl text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 select-none shadow-md ${
        isQuoteSuccess
          ? 'bg-gradient-to-r from-emerald-700 to-emerald-500 shadow-emerald-500/40 ring-2 ring-emerald-300'
          : 'bg-gradient-to-r from-[#00935f] to-[#00b377] hover:from-[#008253] hover:to-[#00a46d] shadow-emerald-900/30 hover:-translate-y-0.5 active:translate-y-0'
      }`}
    >
      {isQuoteSuccess ? (
        <>
          <Icon name="Check" size={18} className="text-white shrink-0 scale-110" />
          <span className="font-bold">
            {isArabic ? 'تم إرسال طلبك بنجاح' : 'Quote Request Sent!'}
          </span>
        </>
      ) : (
        <>
          <span
            className={`inline-block transition-transform duration-500 ${
              isPlaneAnimating ? 'translate-x-12 -translate-y-6 scale-50 opacity-0' : isArabic ? 'rotate-180' : ''
            }`}
          >
            <Icon name="Send" size={16} className="text-white shrink-0" />
          </span>
          <span className={isPlaneAnimating ? 'opacity-0' : 'opacity-100'}>
            {isArabic ? 'طلب عرض سعر' : 'Request Official Quote'}
          </span>
        </>
      )}
    </button>
  );
};
