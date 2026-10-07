import React, { useState } from 'react';
import { Language, SeoKeyword } from '../types';
import { 
  Search, 
  X, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  Copy, 
  Check, 
  Code, 
  Globe2, 
  FileText, 
  Sparkles,
  Award
} from 'lucide-react';

interface SeoOptimizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  keywords: SeoKeyword[];
}

export const SeoOptimizerModal: React.FC<SeoOptimizerModalProps> = ({
  isOpen,
  onClose,
  lang,
  keywords,
}) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';

  const [copiedMeta, setCopiedMeta] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);

  const sampleMetaTags = `<!-- SEO Meta Tags for GoFrosts (Green Organic) -->
<title>GoFrosts | Premium IQF Frozen Fruits & Vegetables Exporter Egypt</title>
<meta name="description" content="GoFrosts (Green Organic) is Egypt's certified processor and exporter of IQF frozen vegetables (Okra, Molokhia, Artichoke, Green Beans) and fruits (Strawberries, Mango). BRCGS, ISO 22000, US FDA, Halal, Kosher certified. Worldwide cold-chain delivery." />
<meta name="keywords" content="IQF Frozen Vegetables Egypt, Frozen Fruits Exporter, Egyptian Okra Zero, Minced Molokhia IQF, Frozen Strawberries Egypt, Private Label Frozen Foods, BRCGS Frozen Food Exporter" />
<link rel="canonical" href="https://gofrosts.com/" />
<meta property="og:title" content="GoFrosts - Egyptian IQF Frozen Fruits & Vegetables Export" />
<meta property="og:description" content="Certified IQF Frozen produce from Nile Delta farms to worldwide markets. Explore products, specs & container dispatches." />
<meta property="og:url" content="https://gofrosts.com/" />
<meta property="og:type" content="business.business" />`;

  const sampleSchemaJsonLd = `{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "GoFrosts - Green Organic",
  "url": "https://gofrosts.com",
  "logo": "https://gofrosts.com/logo.png",
  "description": "Processor and global exporter of IQF frozen vegetables, fruits, and organic produce from Egypt.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Egypt",
    "addressRegion": "Cairo / Alexandria Industrial Zone"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@gofrosts.com",
    "contactType": "sales",
    "areaServed": ["Europe", "North America", "Middle East", "Worldwide"]
  },
  "hasCredential": [
    "BRCGS Global Standard for Food Safety",
    "ISO 22000:2018",
    "US FDA Food Facility Registration",
    "GLOBAL G.A.P.",
    "Halal Certification",
    "EU Organic & USDA Organic"
  ]
}`;

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase">
            <Search className="w-3.5 h-3.5 text-amber-600" />
            <span>{isAr ? 'استراتيجية السيو وتصدر نتائج جوجل' : 'SEO & B2B Ranking Strategy'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isAr ? 'الكلمات المفتاحية وخطة تحسين الموقع لمحركات البحث' : 'High-Impact Keywords & Search Engine Optimization'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            {isAr 
              ? 'خطة متكاملة لظهور اسم GoFrosts و Green Organic في أولى نتائج جوجل عند بحث المستوردين الدوليين عن الخضار والفاكهة المجمدة المصرية.'
              : 'Targeted keyword blueprint to position GoFrosts on Google First Page for international importers searching for Egyptian frozen produce.'}
          </p>
        </div>

        <div className="py-6 space-y-6">
          
          {/* Top 4 SEO Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-[11px] font-bold text-emerald-600 uppercase">1. B2B Search Intent</span>
              <h4 className="text-xs font-bold text-slate-900">{isAr ? 'استهداف المستوردين' : 'Importer Search Queries'}</h4>
              <p className="text-[11px] text-slate-600">{isAr ? 'التركيز على كلمات مثل Exporter, Supplier, Bulk, IQF, Container.' : 'Target words: Exporter, Supplier, Bulk, IQF, BRC.'}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-[11px] font-bold text-sky-600 uppercase">2. On-Page Metadata</span>
              <h4 className="text-xs font-bold text-slate-900">{isAr ? 'العناوين والأوصاف المجهزة' : 'Optimized Meta Tags'}</h4>
              <p className="text-[11px] text-slate-600">{isAr ? 'تضمين أسماء المنتجات (بامية زيرو، ملوخية، فراولة) والشهادات.' : 'Structured titles with varieties & certificates.'}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-[11px] font-bold text-amber-600 uppercase">3. Schema.org Rich Data</span>
              <h4 className="text-xs font-bold text-slate-900">{isAr ? 'بيانات مهيكلة لمحركات البحث' : 'JSON-LD Structured Data'}</h4>
              <p className="text-[11px] text-slate-600">{isAr ? 'تغذية جوجل ببيانات الشركة واللوجو وشهادات الجودة.' : 'Feeds Google algorithms with verified business entity.'}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-[11px] font-bold text-teal-600 uppercase">4. Google Search Console</span>
              <h4 className="text-xs font-bold text-slate-900">{isAr ? 'فهرسة وتتبع الزوار' : 'Indexing & Analytics'}</h4>
              <p className="text-[11px] text-slate-600">{isAr ? 'ربط الموقع بـ Search Console لسرعة أرشفة الصفحات.' : 'Direct sitemap submission for fast indexing.'}</p>
            </div>
          </div>

          {/* Keywords Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-600" />
              <span>{isAr ? 'أهم الكلمات المفتاحية المقترحة لموقع GoFrosts:' : 'Targeted High-Converting Keywords:'}</span>
            </h4>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-start text-xs divide-y divide-slate-200">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    <th className="py-3 px-3 text-start">{isAr ? 'الكلمة المفتاحية (الإنجليزية)' : 'Target Keyword (EN)'}</th>
                    <th className="py-3 px-3 text-start">{isAr ? 'المرادف (بالعربية)' : 'Arabic Search Term'}</th>
                    <th className="py-3 px-3 text-center">{isAr ? 'قصد البحث' : 'Intent'}</th>
                    <th className="py-3 px-3 text-center">{isAr ? 'حجم البحث الشهري' : 'Search Volume'}</th>
                    <th className="py-3 px-3 text-start">{isAr ? 'الصفحة المستهدفة' : 'Target Page'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {keywords.map((kw, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-bold text-slate-900">{kw.keyword}</td>
                      <td className="py-3 px-3 text-slate-700">{kw.keywordAr}</td>
                      <td className="py-3 px-3 text-center">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {kw.intent}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center font-mono font-bold text-slate-700">{kw.searchVolume}</td>
                      <td className="py-3 px-3 text-slate-600 text-[11px]">{kw.recommendedPage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Copyable Meta Tags */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-sky-600" />
                <span>{isAr ? 'كود الميتا تاغز المجهز (Meta Tags):' : 'Pre-configured Meta Tags Code:'}</span>
              </h4>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(sampleMetaTags);
                  setCopiedMeta(true);
                  setTimeout(() => setCopiedMeta(false), 2000);
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold"
              >
                {copiedMeta ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedMeta ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ الكود' : 'Copy HTML')}</span>
              </button>
            </div>
            <pre className="p-4 bg-slate-900 text-emerald-300 rounded-2xl text-[11px] font-mono overflow-x-auto leading-relaxed">
              {sampleMetaTags}
            </pre>
          </div>

          {/* Structured Schema.org */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{isAr ? 'كود بيانات المنظمة المهيكلة (Schema.org JSON-LD):' : 'Organization Schema.org JSON-LD:'}</span>
              </h4>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(sampleSchemaJsonLd);
                  setCopiedSchema(true);
                  setTimeout(() => setCopiedSchema(false), 2000);
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold"
              >
                {copiedSchema ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSchema ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ الـ Schema' : 'Copy JSON-LD')}</span>
              </button>
            </div>
            <pre className="p-4 bg-slate-900 text-sky-300 rounded-2xl text-[11px] font-mono overflow-x-auto leading-relaxed">
              {sampleSchemaJsonLd}
            </pre>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end pt-4 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
          >
            {isAr ? 'إغلاق نافذة السيو' : 'Close SEO Blueprint'}
          </button>
        </div>

      </div>
    </div>
  );
};
