import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeadCaptureChatbot } from './components/LeadCaptureChatbot';
import { LanguageDetectedBanner } from './components/common/LanguageDetectedBanner';
import { GlobalErrorBoundary } from './components/common/GlobalErrorBoundary';
import { FloatingProduceParallax } from './components/common/FloatingProduceParallax';
import { StickyB2BConversionBar } from './components/common/StickyB2BConversionBar';
import { useTimelineStations } from './hooks/useTimelineStations';
import { useAppLanguage } from './hooks/useAppLanguage';
import { useAppData } from './hooks/useAppData';
import { useAppModals } from './hooks/useAppModals';
import { useAppMcp } from './hooks/useAppMcp';
import { MainContentFlow, AppModalsHost, AdminScreenWrapper } from './components/layout';

export default function App() {
  const { 
    lang, 
    setLang, 
    showAutoDetectBanner, 
    confirmAutoDetectBanner, 
    dismissAutoDetectBanner 
  } = useAppLanguage();

  const { 
    products, 
    certificates, 
    leads, 
    handleLeadSubmit, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    addCertificate, 
    deleteCertificate, 
    updateLeadStatus, 
    clearLeads 
  } = useAppData();

  const modals = useAppModals();
  const { stations: timelineStations, updateStationImage, clearStationImage } = useTimelineStations(products);

  // Initialize MCP Engine & expose to global window
  useAppMcp({
    lang,
    setLang,
    activeSection: modals.activeSection,
    setActiveSection: modals.setActiveSection,
    openRfq: modals.handleOpenRfq,
    openAdmin: modals.openAdminScreen,
    openGoDaddy: () => modals.setIsGoDaddyGuideOpen(true),
    openSeo: () => modals.setIsSeoModalOpen(true),
    openMediaStudio: () => modals.setIsMediaStudioOpen(true),
    products,
  });

  const handleApplyStationImage = useCallback((stationId: string, dataUrl: string) => {
    updateStationImage(stationId, dataUrl);
  }, [updateStationImage]);

  // Full-Screen Dedicated Admin Dashboard Screen
  if (modals.isAdminScreenActive) {
    return (
      <AdminScreenWrapper
        lang={lang}
        setLang={setLang}
        onExitAdmin={modals.exitAdminScreen}
        products={products}
        certificates={certificates}
        leads={leads}
        timelineStations={timelineStations}
        onAddProduct={addProduct}
        onUpdateProduct={updateProduct}
        onDeleteProduct={deleteProduct}
        onAddCertificate={addCertificate}
        onDeleteCertificate={deleteCertificate}
        onUpdateLeadStatus={updateLeadStatus}
        onClearLeads={clearLeads}
        onApplyStationImage={handleApplyStationImage}
      />
    );
  }

  const unreadLeadsCount = leads.filter((l) => l.status === 'new').length;

  return (
    <GlobalErrorBoundary>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white relative w-full">
        {/* Floating IQF Produce Multi-Layer Parallax Physics */}
        <FloatingProduceParallax />

        {/* Language Auto-Detect Notice Banner */}
        {showAutoDetectBanner && (
          <LanguageDetectedBanner
            currentLang={lang}
            onConfirm={confirmAutoDetectBanner}
            onSelectLang={setLang}
            onDismiss={dismissAutoDetectBanner}
          />
        )}

        {/* Main Navigation */}
        <Navbar
          lang={lang}
          setLang={setLang}
          onOpenAdmin={modals.openAdminLogin}
          onOpenRfq={() => modals.handleOpenRfq(null)}
          onOpenChat={() => modals.setIsChatbotOpen(true)}
          activeSection={modals.activeSection}
          setActiveSection={modals.setActiveSection}
          inquiryCount={unreadLeadsCount}
        />

        {/* Main Page Content Flow */}
        <MainContentFlow
          activeSection={modals.activeSection}
          setActiveSection={modals.setActiveSection}
          lang={lang}
          products={products}
          certificates={certificates}
          onOpenRfq={modals.handleOpenRfq}
          onOpenAdminLogin={modals.openAdminLogin}
          onOpenMediaStudio={() => modals.setIsMediaStudioOpen(true)}
          onOpenChromaStudio={modals.handleOpenChromaStudio}
        />

        {/* Footer */}
        <Footer
          lang={lang}
          setLang={setLang}
          onOpenRfq={() => modals.handleOpenRfq(null)}
          onOpenAdmin={modals.openAdminLogin}
          onNavigate={(id) => {
            modals.setActiveSection(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Lead Capture AI Assistant */}
        <LeadCaptureChatbot
          lang={lang}
          isOpen={modals.isChatbotOpen}
          onToggle={modals.toggleChatbot}
          onSubmitLead={handleLeadSubmit}
          onOpenRfq={() => modals.handleOpenRfq(null)}
        />

        {/* Lazy Modals Host */}
        <AppModalsHost
          lang={lang}
          products={products}
          isRfqOpen={modals.isRfqOpen}
          preSelectedProduct={modals.preSelectedProduct}
          onCloseRfq={modals.closeRfq}
          onSubmitLead={handleLeadSubmit}
          isAdminLoginOpen={modals.isAdminLoginOpen}
          onCloseAdminLogin={modals.closeAdminLogin}
          onSuccessAdminLogin={modals.openAdminScreen}
          isChromaStudioOpen={modals.isChromaStudioOpen}
          onCloseChromaStudio={modals.closeChromaStudio}
          timelineStations={timelineStations}
          selectedChromaStationId={modals.selectedChromaStationId}
          onApplyStationImage={handleApplyStationImage}
          onClearStationImage={clearStationImage}
        />

        {/* High-Converting Sticky 40ft Reefer B2B Bar */}
        <StickyB2BConversionBar
          lang={lang}
          onOpenRfq={() => modals.handleOpenRfq(null)}
        />
      </div>
    </GlobalErrorBoundary>
  );
}
