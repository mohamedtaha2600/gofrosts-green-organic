import React, { useState, useEffect, useRef } from 'react';
import { Language, LeadInquiry } from '../types';
import { COMPANY_CONTACT_INFO } from '../data/initialData';
import { getTranslation } from '../i18n';
import { Icon } from './ui/Icon';

interface LeadCaptureChatbotProps {
  lang: Language;
  isOpen: boolean;
  onToggle: () => void;
  onSubmitLead: (lead: Omit<LeadInquiry, 'id' | 'date' | 'status'>) => void;
  onOpenRfq?: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickOptions?: { label: string; action: string }[];
}

export const LeadCaptureChatbot: React.FC<LeadCaptureChatbotProps> = ({
  lang,
  isOpen,
  onToggle,
  onOpenRfq,
}) => {
  const t = getTranslation(lang);
  const isArabic = lang === 'ar';
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [inputVal, setInputVal] = useState('');

  const initialOptions = isArabic ? [
    { label: 'طلب عرض أسعار للحاويات (تسعير رسمي)', action: 'quote' },
    { label: 'شهادات الجودة والمطابقة الدولية', action: 'certs' },
    { label: 'الحد الأدنى للطلب والشحن (MOQ)', action: 'moq' },
    { label: 'التعبئة بعلامتك التجارية (Private Label)', action: 'private_label' },
  ] : [
    { label: 'Request Container Quote (Official RFQ)', action: 'quote' },
    { label: 'Quality Standards & Food Safety', action: 'certs' },
    { label: 'Minimum Order Quantity (MOQ)', action: 'moq' },
    { label: 'Private Label OEM Supply', action: 'private_label' },
  ];

  const initialGreeting = isArabic
    ? 'أهلاً بك في جو فروستس - جرين أورجانيك، الصرح المصري الرائد لإنتاج وتصدير الفواكه المجففة الفاخرة والمحاصيل الزراعية المجمدة. كيف يمكنني مساعدة أعمالك اليوم؟'
    : 'Welcome to GoFrosts - Green Organic, Egypt leading producer and exporter of premium dried fruits and IQF frozen crops. How may I assist your business today?';

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'bot',
      text: initialGreeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickOptions: initialOptions,
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const addBotMessage = (text: string, quickOptions?: { label: string; action: string }[]) => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          quickOptions,
        },
      ]);
    }, 300);
  };

  const handleAction = (action: string) => {
    if (action === 'quote') {
      if (onOpenRfq) onOpenRfq();
      addBotMessage(
        isArabic
          ? 'تم فتح نموذج طلب عرض الأسعار والعينات لك الآن. يمكنك تسجيل بيانات الشحنة وسنتواصل معك فوراً.'
          : 'Opening the official Request for Quotation (RFQ) builder dialog for you now.'
      );
    } else if (action === 'certs') {
      addBotMessage(
        isArabic
          ? 'تطبق منشأتنا أحدث اشتراطات سلامة الغذاء العالمية (ISO 22000، نظام الهاسب HACCP، تسجيل هيئة الغذاء والدواء الأمريكية US FDA، ومعايير BRCGS) مع رقابة مخبرية يومية صارمة.'
          : 'Our production facility is engineered to comply with ISO 22000, HACCP, US FDA registration, and BRCGS global food safety benchmarks.'
      );
    } else if (action === 'moq') {
      addBotMessage(
        isArabic
          ? 'الحد الأدنى للتصدير البحري القياسي هو حاوية 40 قدم مبردة أو جافة (24 إلى 27 طناً مترياً). كما نوفر شحن عينات جوية سريعة للفحص والاختبار التجاري.'
          : 'Our standard minimum export order is 1 x 40ft container (approx. 24 - 27 metric tons). Airfreight commercial samples are available for quality evaluation.'
      );
    } else if (action === 'private_label') {
      addBotMessage(
        isArabic
          ? 'نوفر خدمة التعبئة والتغليف الكاملة بعلامتكم التجارية (Private Label OEM) لسلاسل السوبرماركت ومحلات التجزئة (أكياس 400 جم، 1 كجم) وعبوات الجملة والمصانع (10 كجم، 20 كجم).'
          : 'We offer full Private Label OEM packaging for international retail chains (400g, 1kg) and bulk industrial foodservice boxes (10kg, 20kg).'
      );
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    setInputVal('');

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: userText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);

    if (
      userText.toLowerCase().includes('rfq') ||
      userText.toLowerCase().includes('quote') ||
      userText.includes('تسعير') ||
      userText.includes('سعر') ||
      userText.includes('عينات')
    ) {
      if (onOpenRfq) onOpenRfq();
      addBotMessage(
        isArabic
          ? 'تم فتح نموذج طلب التسعير الرسمي. يمكنك تحديد المنتجات والكميات المطلوبة مباشرة.'
          : 'I have opened the official RFQ Builder for you. You can specify all shipment parameters.'
      );
    } else {
      addBotMessage(
        isArabic
          ? `شكراً لرسالتك الكريمة. يمكنك التواصل مباشرة مع مكتب التصدير عبر البريد ${COMPANY_CONTACT_INFO.email} أو تقديم طلب تسعير رسمي.`
          : `Thank you for your inquiry. You can reach our export team at ${COMPANY_CONTACT_INFO.email} or submit an official RFQ.`,
        [{ label: isArabic ? 'فتح نموذج طلب التسعير' : 'Open RFQ Builder', action: 'quote' }]
      );
    }
  };

  return (
    <>
      {/* Floating Action Bubble */}
      <button
        id="floating-ai-btn"
        onClick={onToggle}
        className="fixed bottom-6 end-6 z-40 p-3.5 rounded-2xl bg-emerald-950 text-white shadow-2xl hover:bg-emerald-800 transition-all active:scale-95 border border-emerald-500/40 flex items-center gap-2 cursor-pointer select-none"
        aria-label="Open AI Assistant"
      >
        <div className="relative">
          <Icon name="Bot" size={20} className="text-emerald-400" />
          <span className="absolute -top-1 -end-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <span className="text-xs font-bold hidden sm:inline">{t.nav.aiAssistant}</span>
      </button>

      {/* Embedded Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-20 end-4 sm:end-8 z-50 w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[520px] animate-in slide-in-from-bottom-4 duration-150 select-none">
          {/* Header */}
          <div className="p-4 bg-emerald-950 text-white flex items-center justify-between border-b border-emerald-900">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Icon name="Bot" size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-100">{t.nav.aiAssistant}</h4>
                <span className="text-[10px] text-emerald-300 font-medium">
                  {isArabic ? 'خدمة المستوردين والتصدير الدولي' : 'B2B Export Customer Service'}
                </span>
              </div>
            </div>
            <button
              onClick={onToggle}
              className="p-1 rounded-lg text-emerald-300/70 hover:text-white cursor-pointer"
              aria-label="Close assistant"
            >
              <Icon name="X" size={18} />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-xs'
                      : 'bg-white text-slate-800 border border-slate-200/90 shadow-2xs rounded-bl-xs'
                  }`}
                >
                  <p>{m.text}</p>
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">{m.timestamp}</span>

                {m.quickOptions && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {m.quickOptions.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAction(opt.action)}
                        className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-[11px] font-semibold transition-all cursor-pointer shadow-2xs"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={isArabic ? 'استفسر عن الفواكه المجففة، الحاويات، أو التسعير...' : 'Ask about products, MOQ, reefer shipping...'}
              className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer transition-colors shadow-xs"
              aria-label="Send message"
            >
              <Icon name="Send" size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
