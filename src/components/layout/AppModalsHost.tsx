import React, { lazy, Suspense, memo } from 'react';
import { Product, Language, LeadInquiry } from '../../types';
import { TimelineStationItem } from '../../types/timeline';

const RfqBuilderModal = lazy(() => import('../RfqBuilderModal').then((m) => ({ default: m.RfqBuilderModal })));
const AdminLoginModal = lazy(() => import('../admin/AdminLoginModal').then((m) => ({ default: m.AdminLoginModal })));
const ChromaDesignStudioModal = lazy(() => import('../admin/ChromaDesignStudioModal').then((m) => ({ default: m.ChromaDesignStudioModal })));

interface AppModalsHostProps {
  lang: Language;
  products: Product[];
  isRfqOpen: boolean;
  preSelectedProduct: Product | null;
  onCloseRfq: () => void;
  onSubmitLead: (lead: Omit<LeadInquiry, 'id' | 'date' | 'status'>) => void;
  isAdminLoginOpen: boolean;
  onCloseAdminLogin: () => void;
  onSuccessAdminLogin: () => void;
  isChromaStudioOpen: boolean;
  onCloseChromaStudio: () => void;
  timelineStations: TimelineStationItem[];
  selectedChromaStationId?: string;
  onApplyStationImage: (stationId: string, dataUrl: string) => void;
  onClearStationImage: (stationId: string) => void;
}

export const AppModalsHost: React.FC<AppModalsHostProps> = memo(({
  lang,
  products,
  isRfqOpen,
  preSelectedProduct,
  onCloseRfq,
  onSubmitLead,
  isAdminLoginOpen,
  onCloseAdminLogin,
  onSuccessAdminLogin,
  isChromaStudioOpen,
  onCloseChromaStudio,
  timelineStations,
  selectedChromaStationId,
  onApplyStationImage,
  onClearStationImage,
}) => {
  return (
    <Suspense fallback={null}>
      {/* RFQ & Sample Request Modal */}
      {isRfqOpen && (
        <RfqBuilderModal
          isOpen={isRfqOpen}
          onClose={onCloseRfq}
          products={products}
          preSelectedProduct={preSelectedProduct}
          lang={lang}
          onSubmitInquiry={onSubmitLead}
        />
      )}

      {/* Admin Login Modal (Authorized Entry) */}
      {isAdminLoginOpen && (
        <AdminLoginModal
          isOpen={isAdminLoginOpen}
          onClose={onCloseAdminLogin}
          onSuccessLogin={onSuccessAdminLogin}
          lang={lang}
        />
      )}

      {/* 3D Design, Chroma Guide & Auto-Remover Studio Modal */}
      {isChromaStudioOpen && (
        <ChromaDesignStudioModal
          isOpen={isChromaStudioOpen}
          onClose={onCloseChromaStudio}
          stations={timelineStations}
          preSelectedStationId={selectedChromaStationId}
          onApplyStationImage={onApplyStationImage}
          onClearStationImage={onClearStationImage}
        />
      )}
    </Suspense>
  );
});

AppModalsHost.displayName = 'AppModalsHost';
