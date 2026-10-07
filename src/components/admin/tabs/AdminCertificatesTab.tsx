import React, { useState } from 'react';
import { Certificate } from '../../../types';
import { Icon } from '../../ui/Icon';

interface AdminCertificatesTabProps {
  certificates: Certificate[];
  onAddCertificate: (cert: Certificate) => void;
  onDeleteCertificate: (id: string) => void;
}

export const AdminCertificatesTab: React.FC<AdminCertificatesTabProps> = ({
  certificates,
  onAddCertificate,
  onDeleteCertificate,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<Certificate>>({
    titleAr: '',
    titleEn: '',
    certNumber: '',
    issuer: 'TÜV Rheinland / Intertek / SGS',
    scopeAr: 'تجميد وتصنيع وتعبئة الحاصلات الزراعية IQF',
    scopeEn: 'IQF Freezing & Export of Agricultural Produce',
    validUntil: '2027',
    badgeColor: 'emerald',
    iconType: 'shield',
    statusAr: 'معتمد نشط',
    statusEn: 'Active Certified',
    auditStage: 'Annual Third-Party Audit',
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newCert: Certificate = {
      id: `cert-${Date.now()}`,
      titleAr: formData.titleAr || 'شهادة جودة جديدة',
      titleEn: formData.titleEn || 'New Quality Certificate',
      certNumber: formData.certNumber || 'ISO-NEW',
      issuer: formData.issuer || 'TÜV Rheinland / SGS',
      scopeAr: formData.scopeAr || 'تجميد وتصدير الحاصلات الزراعية',
      scopeEn: formData.scopeEn || 'IQF Freezing & Export Processing',
      validUntil: formData.validUntil || '2027',
      badgeColor: 'emerald',
      iconType: 'shield',
      statusAr: 'معتمد نشط',
      statusEn: 'Active',
      auditStage: formData.auditStage || 'Annual Audit',
    };
    onAddCertificate(newCert);
    setIsAdding(false);
    setFormData({ titleAr: '', titleEn: '', certNumber: '' });
  };

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs">
        <div>
          <h4 className="text-sm font-bold text-neutral-900">شهادات الجودة والاعتمادات الدولية المصنعية</h4>
          <p className="text-xs text-neutral-500">سجلات التدقيق المعملي والمطابقة لمواصفات الاتحاد الأوروبي والـ FDA</p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="px-4 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <Icon name="Plus" size={14} className="text-emerald-400" />
          <span>إضافة شهادة جديدة</span>
        </button>
      </div>

      {/* Add Form */}
      {isAdding && (
        <form onSubmit={handleAdd} className="p-6 rounded-2xl bg-neutral-900 text-white border border-neutral-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <h5 className="text-sm font-bold text-emerald-400">إضافة شهادة اعتماد جديدة</h5>
            <button type="button" onClick={() => setIsAdding(false)} className="text-neutral-400 hover:text-white cursor-pointer">
              <Icon name="X" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-neutral-400 mb-1">رقم/كود الشهادة (مثل ISO 22000):</label>
              <input
                type="text"
                required
                value={formData.certNumber}
                onChange={(e) => setFormData({ ...formData, certNumber: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-neutral-800 text-white border border-neutral-700 font-mono"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1">اسم الشهادة بالعربية:</label>
              <input
                type="text"
                required
                value={formData.titleAr}
                onChange={(e) => setFormData({ ...formData, titleAr: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-neutral-800 text-white border border-neutral-700"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1">اسم الشهادة بالإنجليزية:</label>
              <input
                type="text"
                required
                value={formData.titleEn}
                onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-neutral-800 text-white border border-neutral-700 font-mono"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button type="submit" className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer">
              حفظ الشهادة
            </button>
          </div>
        </form>
      )}

      {/* Certificates Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert) => (
          <div key={cert.id} className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between space-y-3">
            <div className="flex items-start justify-between">
              <span className="px-2.5 py-1 rounded-lg bg-black text-emerald-400 font-mono font-bold text-xs">
                {cert.certNumber || 'CERT'}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">
                {cert.statusAr || 'معتمد نشط'}
              </span>
            </div>

            <div>
              <h5 className="font-extrabold text-sm text-neutral-900">{cert.titleAr}</h5>
              <p className="text-[11px] text-neutral-500 font-mono line-clamp-1">{cert.titleEn}</p>
            </div>

            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-[10px] text-neutral-400 font-mono">{cert.auditStage || 'Annual Audit'}</span>
              <button
                onClick={() => {
                  if (confirm(`حذف شهادة ${cert.titleAr}؟`)) onDeleteCertificate(cert.id);
                }}
                className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 cursor-pointer"
              >
                <Icon name="Trash2" size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
