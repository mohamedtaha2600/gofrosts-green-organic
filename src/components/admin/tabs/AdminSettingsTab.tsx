import React, { useState } from 'react';
import { COMPANY_CONTACT_INFO, SEO_KEYWORDS_LIST } from '../../../data/initialData';
import { Icon } from '../../ui/Icon';

export const AdminSettingsTab: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* 1. GoDaddy Domain Linking Guide */}
      <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div>
            <h4 className="text-sm font-extrabold text-neutral-900 flex items-center gap-2">
              <Icon name="Globe" size={16} className="text-emerald-600" />
              <span>إعدادات ربط الدومين الرسمي (GoDaddy DNS Setup)</span>
            </h4>
            <p className="text-xs text-neutral-500">
              الدومين المسجل: <strong className="text-black font-mono">{COMPANY_CONTACT_INFO.domain}</strong>
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-mono">
            DNS Ready
          </span>
        </div>

        <div className="space-y-3 text-xs">
          <p className="text-neutral-600 leading-relaxed">
            لربط الدومين الخاص بشركة Green Organic بموقع المصنع على Google Cloud / AI Studio، قم بإضافة السجلات التالية في لوحة تحكم GoDaddy DNS Management:
          </p>

          <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50">
            <table className="w-full text-start text-xs font-mono">
              <thead className="bg-neutral-900 text-white text-[11px]">
                <tr>
                  <th className="py-2.5 px-3 text-start">النوع (Type)</th>
                  <th className="py-2.5 px-3 text-start">الاسم (Name)</th>
                  <th className="py-2.5 px-3 text-start">القيمة (Value / Target)</th>
                  <th className="py-2.5 px-3 text-start">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-800">
                <tr>
                  <td className="py-2 px-3 font-bold text-emerald-700">CNAME</td>
                  <td className="py-2 px-3">www</td>
                  <td className="py-2 px-3 truncate max-w-xs font-sans text-neutral-600">
                    ghs.googlehosted.com
                  </td>
                  <td className="py-2 px-3">
                    <button
                      onClick={() => copyText('cname', 'ghs.googlehosted.com')}
                      className="px-2 py-1 rounded bg-neutral-200 hover:bg-neutral-300 text-[10px] font-bold cursor-pointer"
                    >
                      {copiedKey === 'cname' ? 'تم النسخ!' : 'نسخ'}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-rose-700">A Record</td>
                  <td className="py-2 px-3">@</td>
                  <td className="py-2 px-3 text-neutral-600">216.239.32.21</td>
                  <td className="py-2 px-3">
                    <button
                      onClick={() => copyText('a-rec', '216.239.32.21')}
                      className="px-2 py-1 rounded bg-neutral-200 hover:bg-neutral-300 text-[10px] font-bold cursor-pointer"
                    >
                      {copiedKey === 'a-rec' ? 'تم النسخ!' : 'نسخ'}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2. SEO & Keyword Management */}
      <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div>
            <h4 className="text-sm font-extrabold text-neutral-900 flex items-center gap-2">
              <Icon name="Search" size={16} className="text-rose-600" />
              <span>الكلمات المفتاحية التصديرية لمحركات البحث (SEO Matrix)</span>
            </h4>
            <p className="text-xs text-neutral-500">
              مفهرسة لاستهداف مستوردي الأغذية في أوروبا، أمريكا، والشرق الأوسط
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-neutral-400">
            {SEO_KEYWORDS_LIST.length} كلمات مفتاحية نشطة
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SEO_KEYWORDS_LIST.map((kw) => (
            <div key={kw.keyword} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs flex items-center justify-between">
              <div>
                <span className="font-extrabold text-neutral-900 block font-mono">{kw.keyword}</span>
                <span className="text-[11px] text-neutral-500">{kw.keywordAr}</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-neutral-200 text-neutral-800">
                {kw.intent}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
