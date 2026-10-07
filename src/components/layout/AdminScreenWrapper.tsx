import React, { lazy, Suspense, memo } from 'react';
import { Product, Certificate, LeadInquiry, Language } from '../../types';
import { TimelineStationItem } from '../../types/timeline';
import { GlobalErrorBoundary } from '../common/GlobalErrorBoundary';

const AdminDashboardScreen = lazy(() => import('../admin/AdminDashboardScreen').then((m) => ({ default: m.AdminDashboardScreen })));

interface AdminScreenWrapperProps {
  lang: Language;
  setLang: (l: Language) => void;
  onExitAdmin: () => void;
  products: Product[];
  certificates: Certificate[];
  leads: LeadInquiry[];
  timelineStations: TimelineStationItem[];
  onAddProduct: (p: Product) => void;
  onUpdateProduct: (u: Product) => void;
  onDeleteProduct: (id: string) => void;
  onAddCertificate: (c: Certificate) => void;
  onDeleteCertificate: (id: string) => void;
  onUpdateLeadStatus: (id: string, s: LeadInquiry['status']) => void;
  onClearLeads: () => void;
  onApplyStationImage: (stationId: string, dataUrl: string) => void;
}

export const AdminScreenWrapper: React.FC<AdminScreenWrapperProps> = memo((props) => {
  return (
    <GlobalErrorBoundary>
      <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-emerald-400 font-bold">Loading Admin...</div>}>
        <AdminDashboardScreen {...props} />
      </Suspense>
    </GlobalErrorBoundary>
  );
});

AdminScreenWrapper.displayName = 'AdminScreenWrapper';
