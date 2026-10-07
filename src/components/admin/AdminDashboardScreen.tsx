import React, { useState } from 'react';
import { Product, Certificate, LeadInquiry, Language } from '../../types';
import { TimelineStationItem } from '../../types/timeline';
import { AdminHeader } from './AdminHeader';
import { AdminLeadsTab } from './tabs/AdminLeadsTab';
import { AdminProductsTab } from './tabs/AdminProductsTab';
import { AdminMediaStudioTab } from './tabs/AdminMediaStudioTab';
import { AdminCertificatesTab } from './tabs/AdminCertificatesTab';
import { AdminSettingsTab } from './tabs/AdminSettingsTab';
import { Icon } from '../ui/Icon';

interface AdminDashboardScreenProps {
  lang: Language;
  setLang: (l: Language) => void;
  onExitAdmin: () => void;
  products: Product[];
  certificates: Certificate[];
  leads: LeadInquiry[];
  timelineStations: TimelineStationItem[];
  onAddProduct: (product: Product) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
  onAddCertificate: (cert: Certificate) => void;
  onDeleteCertificate: (id: string) => void;
  onUpdateLeadStatus: (id: string, status: LeadInquiry['status']) => void;
  onClearLeads: () => void;
  onApplyStationImage: (stationId: string, dataUrl: string) => void;
}

export type AdminTab = 'leads' | 'products' | 'media' | 'certificates' | 'settings';

export const AdminDashboardScreen: React.FC<AdminDashboardScreenProps> = ({
  lang,
  setLang,
  onExitAdmin,
  products,
  certificates,
  leads,
  timelineStations,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onAddCertificate,
  onDeleteCertificate,
  onUpdateLeadStatus,
  onClearLeads,
  onApplyStationImage,
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('leads');
  const isAr = lang === 'ar';

  const newLeadsCount = leads.filter((l) => l.status === 'new').length;

  const tabs: { id: AdminTab; labelAr: string; labelEn: string; icon: keyof typeof import('lucide-react'); badge?: number }[] = [
    { id: 'leads', labelAr: 'طلبات التسعير والمستوردين', labelEn: 'RFQ Leads Pipeline', icon: 'Users', badge: newLeadsCount },
    { id: 'products', labelAr: 'كتالوج المنتجات التصديرية', labelEn: 'Products Catalog', icon: 'Package' },
    { id: 'media', labelAr: 'استوديو الميديا والفواكه والكروما 3D', labelEn: 'Produce Media & 3D Studio', icon: 'Sparkles' },
    { id: 'certificates', labelAr: 'شهادات الجودة والاعتمادات', labelEn: 'Certificates & Audits', icon: 'ShieldCheck' },
    { id: 'settings', labelAr: 'إعدادات الدومين والـ SEO', labelEn: 'Domain & SEO', icon: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 flex flex-col font-sans">
      {/* Top Admin Command Header */}
      <AdminHeader
        lang={lang}
        setLang={setLang}
        onExitAdmin={onExitAdmin}
        productsCount={products.length}
        newLeadsCount={newLeadsCount}
        certsCount={certificates.length}
      />

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-neutral-200 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white hover:bg-neutral-50 text-neutral-600 border border-neutral-200/80'
                }`}
              >
                <Icon name={tab.icon} size={15} className={isActive ? 'text-emerald-400' : 'text-neutral-400'} />
                <span>{isAr ? tab.labelAr : tab.labelEn}</span>
                {typeof tab.badge === 'number' && tab.badge > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-mono font-bold">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        <main className="transition-all duration-200">
          {activeTab === 'leads' && (
            <AdminLeadsTab
              leads={leads}
              onUpdateStatus={onUpdateLeadStatus}
              onClearLeads={onClearLeads}
            />
          )}

          {activeTab === 'products' && (
            <AdminProductsTab
              products={products}
              onAddProduct={onAddProduct}
              onUpdateProduct={onUpdateProduct}
              onDeleteProduct={onDeleteProduct}
            />
          )}

          {activeTab === 'media' && (
            <AdminMediaStudioTab
              stations={timelineStations}
              onApplyStationImage={onApplyStationImage}
            />
          )}

          {activeTab === 'certificates' && (
            <AdminCertificatesTab
              certificates={certificates}
              onAddCertificate={onAddCertificate}
              onDeleteCertificate={onDeleteCertificate}
            />
          )}

          {activeTab === 'settings' && <AdminSettingsTab />}
        </main>
      </div>
    </div>
  );
};
