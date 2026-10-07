import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Globe, 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Server, 
  Mail, 
  HelpCircle, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

interface GoDaddyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const GoDaddyGuideModal: React.FC<GoDaddyGuideModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const dnsRecords = [
    {
      type: 'A Record',
      name: '@ (أو اتركها فارغة)',
      nameEn: '@ (Root Domain)',
      value: '216.239.32.21', // Example Google Cloud Anycast IP
      value2: '216.239.34.21',
      ttl: '1 Hour (3600s)',
      purposeAr: 'توجيه الدومين الرئيسي gofrosts.com إلى سيرفر الاستضافة السحابي',
      purposeEn: 'Directs root domain gofrosts.com to Cloud Run / Hosting server'
    },
    {
      type: 'CNAME Record',
      name: 'www',
      nameEn: 'www',
      value: 'ghs.googlehosted.com',
      ttl: '1 Hour (3600s)',
      purposeAr: 'توجيه النطاق الفرعي www.gofrosts.com ليعمل مع النطاق الرئيسي تلقائياً',
      purposeEn: 'Points www.gofrosts.com to root canonical hosting'
    },
    {
      type: 'MX Record (إيميل)',
      name: '@',
      nameEn: '@',
      value: '10 mail.gofrosts.com (أو Google / Zoho)',
      ttl: '1 Hour',
      purposeAr: 'تشغيل واستقبال رسائل البريد الرسمي info@gofrosts.com',
      purposeEn: 'Enables official email delivery for info@gofrosts.com'
    },
    {
      type: 'TXT Record (SPF)',
      name: '@',
      nameEn: '@',
      value: 'v=spf1 include:_spf.google.com ~all',
      ttl: '1 Hour',
      purposeAr: 'حماية إيميل الشركة من السبام وضمان وصول الرسائل للإنبوكس',
      purposeEn: 'Prevents email spoofing and ensures delivery to client inbox'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 border-b border-slate-100 pb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isAr ? 'دليل ربط دومين GoDaddy' : 'GoDaddy Custom Domain Setup'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isAr ? 'كيفية ربط دومين gofrosts.com بموقعك وسيرفر الاستضافة' : 'How to Link gofrosts.com Domain from GoDaddy'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            {isAr 
              ? 'خطوات عملية وبسيطة جداً لتوجيه الدومين الذي اشتريته من GoDaddy وتفعيل الإيميل الرسمي info@gofrosts.com وشهادة الأمان SSL.'
              : 'Practical step-by-step guide to configure your GoDaddy DNS records, SSL certificate, and official email routing.'}
          </p>
        </div>

        {/* 4-Step Visual Roadmap */}
        <div className="py-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              {
                step: '01',
                titleAr: 'سجل دخول GoDaddy',
                titleEn: 'Log in to GoDaddy',
                descAr: 'ادخل على حسابك ثم اختر "My Products" واضغط على الدومين gofrosts.com ثم اختر "Manage DNS".',
                descEn: 'Go to My Products > gofrosts.com > Manage DNS.'
              },
              {
                step: '02',
                titleAr: 'إضافة سجلات DNS',
                titleEn: 'Add DNS Records',
                descAr: 'أضف سجل A وسجل CNAME الموضحين في الجدول بالأسفل للربط مع السيرفر.',
                descEn: 'Add the A record and CNAME record specified below.'
              },
              {
                step: '03',
                titleAr: 'تفعيل SSL المجاني',
                titleEn: 'Enable SSL Security',
                descAr: 'يتم إصدار شهادة الأمان HTTPS المشفرة تلقائياً وتفعيل علامة القفل الأخضر.',
                descEn: 'Automatic HTTPS / SSL encryption certificate generation.'
              },
              {
                step: '04',
                titleAr: 'ربط إيميل info',
                titleEn: 'Connect info@ Email',
                descAr: 'ربط سجلات MX لتشغيل إيميل info@gofrosts.com على Google Workspace أو Zoho.',
                descEn: 'Configure MX records for info@gofrosts.com on Google/Zoho.'
              }
            ].map((s, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                <span className="text-xs font-black font-mono text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">
                  {s.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900">{isAr ? s.titleAr : s.titleEn}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{isAr ? s.descAr : s.descEn}</p>
              </div>
            ))}
          </div>

          {/* DNS Records Table for GoDaddy */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Server className="w-4 h-4 text-emerald-600" />
                <span>{isAr ? 'جدول سجلات DNS المطلوب إدخالها في GoDaddy:' : 'Required DNS Records in GoDaddy Manager:'}</span>
              </h4>
              <span className="text-[11px] text-slate-500">
                {isAr ? 'اضغط على زر النسخ لنسخ القيمة مباشرة' : 'Click copy button for fast entry'}
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-start text-xs divide-y divide-slate-200">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    <th className="py-3 px-3 text-start">{isAr ? 'نوع السجل (Type)' : 'Type'}</th>
                    <th className="py-3 px-3 text-start">{isAr ? 'الاسم / المضيف (Name / Host)' : 'Name / Host'}</th>
                    <th className="py-3 px-3 text-start">{isAr ? 'القيمة / الهدف (Value / Points to)' : 'Value / Points to'}</th>
                    <th className="py-3 px-3 text-start">{isAr ? 'الغرض والفائدة' : 'Purpose'}</th>
                    <th className="py-3 px-3 text-center">{isAr ? 'نسخ' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {dnsRecords.map((rec, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-bold text-emerald-700 font-mono">{rec.type}</td>
                      <td className="py-3 px-3 font-mono font-semibold text-slate-800">{isAr ? rec.name : rec.nameEn}</td>
                      <td className="py-3 px-3 font-mono text-slate-700 break-all max-w-[200px]">
                        <div>{rec.value}</div>
                        {rec.value2 && <div>{rec.value2}</div>}
                      </td>
                      <td className="py-3 px-3 text-slate-600 text-[11px]">{isAr ? rec.purposeAr : rec.purposeEn}</td>
                      <td className="py-3 px-3 text-center">
                        <button
                          onClick={() => copyToClipboard(rec.value, `rec-${i}`)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] transition-colors"
                        >
                          {copiedKey === `rec-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedKey === `rec-${i}` ? (isAr ? 'تم!' : 'Copied!') : (isAr ? 'نسخ' : 'Copy')}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Email Setup Guide */}
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
            <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-700" />
              <span>{isAr ? 'كيف تستقبل الإيميلات على info@gofrosts.com؟' : 'How to receive emails on info@gofrosts.com'}</span>
            </h4>
            <p className="text-xs text-emerald-900 leading-relaxed">
              {isAr ? (
                <>
                  بما أنك تمتلك الدومين على GoDaddy، يمكنك تفعيل البريد بطريقتين:
                  <br />
                  <strong>1. خيار مجاني أو اقتصادي:</strong> استخدام خدمة مثل <strong>Zoho Mail</strong> (تتيح حتى 5 إيميلات عمل مجاناً) أو تفعيل <strong>Email Forwarding</strong> في GoDaddy لتحويل أي رسالة تصل إلى <code>info@gofrosts.com</code> مباشرة إلى بريدك الشخصي (مثل Gmail).
                  <br />
                  <strong>2. خيار احترافي للشركات:</strong> الاشتراك في <strong>Google Workspace</strong> أو <strong>Microsoft 365</strong>، وسيتم تزويدك بسجلات MX لإضافتها في DNS ليتم استقبال كل الإيميلات في صندوق بريد Gmail رسمي باسم شركتك.
                </>
              ) : (
                <>
                  Since you own gofrosts.com on GoDaddy, you have two flexible options:
                  <br />
                  <strong>1. Free / Cost-effective:</strong> Use Zoho Mail (free for up to 5 business mailboxes) or GoDaddy Free Email Forwarding to forward incoming messages from <code>info@gofrosts.com</code> directly to your personal Gmail.
                  <br />
                  <strong>2. Enterprise Google Workspace:</strong> Connect Google Workspace MX records to manage <code>info@gofrosts.com</code> inside standard Google Gmail with full team collaboration.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <a
            href="https://dcc.godaddy.com/manage-dns"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
          >
            <span>{isAr ? 'الانتقال لصفحة إدارة DNS في GoDaddy' : 'Go to GoDaddy DNS Manager'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
          >
            {isAr ? 'إغلاق الدليل' : 'Close Guide'}
          </button>
        </div>

      </div>
    </div>
  );
};
