import { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';

export function useAppModals() {
  const [activeSection, setActiveSection] = useState('home');

  // Modals state
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [preSelectedProduct, setPreSelectedProduct] = useState<Product | null>(null);
  const [isGoDaddyGuideOpen, setIsGoDaddyGuideOpen] = useState(false);
  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);

  // Admin state
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminScreenActive, setIsAdminScreenActive] = useState(false);
  const [isMediaStudioOpen, setIsMediaStudioOpen] = useState(false);
  const [isChromaStudioOpen, setIsChromaStudioOpen] = useState(false);
  const [selectedChromaStationId, setSelectedChromaStationId] = useState<string | undefined>(undefined);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Admin secret shortcut (Alt+A or Ctrl+Shift+A)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.altKey && e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        setIsAdminScreenActive((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleOpenRfq = useCallback((p?: Product | null) => {
    setPreSelectedProduct(p || null);
    setIsRfqOpen(true);
  }, []);

  const closeRfq = useCallback(() => {
    setIsRfqOpen(false);
  }, []);

  const handleOpenChromaStudio = useCallback((stationId?: string) => {
    setSelectedChromaStationId(stationId);
    setIsChromaStudioOpen(true);
  }, []);

  const closeChromaStudio = useCallback(() => {
    setIsChromaStudioOpen(false);
  }, []);

  const openAdminLogin = useCallback(() => {
    setIsAdminLoginOpen(true);
  }, []);

  const closeAdminLogin = useCallback(() => {
    setIsAdminLoginOpen(false);
  }, []);

  const openAdminScreen = useCallback(() => {
    setIsAdminLoginOpen(false);
    setIsAdminScreenActive(true);
  }, []);

  const exitAdminScreen = useCallback(() => {
    setIsAdminScreenActive(false);
  }, []);

  const toggleChatbot = useCallback(() => {
    setIsChatbotOpen((prev) => !prev);
  }, []);

  return {
    activeSection,
    setActiveSection,
    isRfqOpen,
    preSelectedProduct,
    handleOpenRfq,
    closeRfq,
    isGoDaddyGuideOpen,
    setIsGoDaddyGuideOpen,
    isSeoModalOpen,
    setIsSeoModalOpen,
    isAdminLoginOpen,
    openAdminLogin,
    closeAdminLogin,
    isAdminScreenActive,
    openAdminScreen,
    exitAdminScreen,
    isMediaStudioOpen,
    setIsMediaStudioOpen,
    isChromaStudioOpen,
    selectedChromaStationId,
    handleOpenChromaStudio,
    closeChromaStudio,
    isChatbotOpen,
    setIsChatbotOpen,
    toggleChatbot,
  };
}
