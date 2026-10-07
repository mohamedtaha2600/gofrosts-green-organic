import React, { useState, memo } from 'react';
import { Certificate, Language } from '../types';
import { getTranslation } from '../i18n';
import { Icon } from './ui/Icon';
import { Modal } from './ui/Modal';

interface CertificatesSectionProps {
  certificates: Certificate[];
  lang: Language;
  onOpenAddCertificateModal: () => void;
  onRequestSpecFile?: (certTitle: string) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = memo(({
  certificates,
  lang,
  onOpenAddCertificateModal,
  onRequestSpecFile,
}) => {
  const t = getTranslation(lang);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const getLocalizedCert = (cert: Certificate) => {
    switch (lang) {
      case 'ar':
        return { title: cert.titleAr, scope: cert.scopeAr, status: cert.statusAr || 'قيد التدقيق والاعتماد' };
      case 'ru':
        return { title: cert.titleRu || cert.titleEn, scope: cert.scopeRu || cert.scopeEn, status: cert.statusRu || 'В процессе аудита' };
      default:
        return { title: cert.titleEn, scope: cert.scopeEn, status: cert.statusEn || 'In Pipeline' };
    }
  };

  const getCertIcon = (type: string) => {
    switch (type) {
      case 'shield': return 'Shield' as const;
      case 'award': return 'Award' as const;
      case 'leaf': return 'Leaf' as const;
      case 'globe': return 'Globe' as const;
      default: return 'CheckCircle2' as const;
    }
  };

  return (
    <section id="certificates" className="py-20 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.certificates.title}
            </h2>
            <p className="text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
              {t.certificates.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              id="add-cert-btn"
              onClick={onOpenAddCertificateModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-bold text-sm shadow-md transition-all border border-neutral-800 active:scale-95 cursor-pointer"
            >
              <Icon name="Plus" size={16} className="text-emerald-400" />
              <span>{lang === 'ar' ? 'إضافة مواصفة / اعتماد' : 'Add Standard / Certificate'}</span>
            </button>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert) => {
            const loc = getLocalizedCert(cert);
            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform text-emerald-600">
                      <Icon name={getCertIcon(cert.iconType)} size={22} />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800">
                      <Icon name="Clock" size={12} className="text-amber-600" />
                      <span>{loc.status}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {loc.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      <Icon name="Building2" size={13} className="text-slate-400 shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {loc.scope}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Icon name="CheckCircle2" size={14} className="text-emerald-600" />
                    <span>{lang === 'ar' ? 'معتمد ومطابق' : 'Compliant'}</span>
                  </span>
                  <span className="font-bold text-emerald-600 group-hover:underline flex items-center gap-0.5">
                    {lang === 'ar' ? 'التفاصيل' : 'Details'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Inspection Modal */}
        {selectedCert && (() => {
          const loc = getLocalizedCert(selectedCert);
          return (
            <Modal
              isOpen={Boolean(selectedCert)}
              onClose={() => setSelectedCert(null)}
              title={loc.title}
              subtitle={selectedCert.issuer}
              maxWidth="xl"
            >
              <div className="space-y-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-xs font-bold text-slate-900">{t.certificates.scope}:</span>
                  <p className="text-xs text-slate-700 leading-relaxed">{loc.scope}</p>
                </div>

                <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200/80 space-y-1">
                  <span className="text-xs font-bold text-emerald-900">
                    {lang === 'ar' ? 'جاهزية المصنع والامتثال الهندسي والصحي:' : 'Plant Readiness & Engineering Compliance:'}
                  </span>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {lang === 'ar'
                      ? 'خطوط إنتاج مطابقة لمعايير الفولاذ الغذائي المقاوم للصدأ SS316، فلاتر هواء HEPA معقمة، غرف تعبئة بنظام الضغط الإيجابي وتطبيق صارم لممارسات الهاسب (HACCP).'
                      : 'Engineered with food-grade SS316 processing lines, automated HEPA air filtration, positive-pressure cleanroom packaging, and strict HACCP workflow.'}
                  </p>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200 text-xs font-semibold">
                  <span>{t.certificates.auditStage}:</span>
                  <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-900 font-bold border border-amber-300">
                    {loc.status}
                  </span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 cursor-pointer"
                  >
                    {lang === 'ar' ? 'إغلاق' : 'Close'}
                  </button>
                  <button
                    onClick={() => {
                      if (onRequestSpecFile) onRequestSpecFile(loc.title);
                      setSelectedCert(null);
                    }}
                    className="px-4 py-2 rounded-xl bg-black hover:bg-neutral-900 border border-neutral-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <Icon name="FileCheck" size={14} className="text-emerald-400" />
                    <span>{t.certificates.downloadSpec}</span>
                  </button>
                </div>
              </div>
            </Modal>
          );
        })()}
      </div>
    </section>
  );
});

CertificatesSection.displayName = 'CertificatesSection';
