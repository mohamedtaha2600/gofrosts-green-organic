import { useState, useEffect, useCallback } from 'react';
import { Product, Certificate, LeadInquiry } from '../types';
import { 
  INITIAL_PRODUCTS, 
  INITIAL_CERTIFICATES, 
  INITIAL_LEADS 
} from '../data/initialData';

const DATA_VERSION = 'v6_23_harvest_crops_timeline';

export function useAppData() {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedVersion = localStorage.getItem('gofrosts_data_version');
    if (savedVersion !== DATA_VERSION) {
      localStorage.setItem('gofrosts_data_version', DATA_VERSION);
      localStorage.setItem('gofrosts_products', JSON.stringify(INITIAL_PRODUCTS));
      localStorage.setItem('gofrosts_certificates', JSON.stringify(INITIAL_CERTIFICATES));
      return INITIAL_PRODUCTS;
    }
    const saved = localStorage.getItem('gofrosts_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [certificates, setCertificates] = useState<Certificate[]>(() => {
    const saved = localStorage.getItem('gofrosts_certificates');
    return saved ? JSON.parse(saved) : INITIAL_CERTIFICATES;
  });

  const [leads, setLeads] = useState<LeadInquiry[]>(() => {
    const saved = localStorage.getItem('gofrosts_leads');
    return saved ? JSON.parse(saved) : INITIAL_LEADS;
  });

  useEffect(() => {
    localStorage.setItem('gofrosts_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('gofrosts_certificates', JSON.stringify(certificates));
  }, [certificates]);

  useEffect(() => {
    localStorage.setItem('gofrosts_leads', JSON.stringify(leads));
  }, [leads]);

  const handleLeadSubmit = useCallback((leadData: Omit<LeadInquiry, 'id' | 'date' | 'status'>) => {
    const newLead: LeadInquiry = {
      ...leadData,
      id: `lead-${Date.now()}`,
      date: new Date().toLocaleString(),
      status: 'new',
    };
    setLeads((prev) => [newLead, ...prev]);
  }, []);

  const addProduct = useCallback((p: Product) => {
    setProducts((prev) => [p, ...prev]);
  }, []);

  const updateProduct = useCallback((u: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === u.id ? u : p)));
  }, []);

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const addCertificate = useCallback((c: Certificate) => {
    setCertificates((prev) => [c, ...prev]);
  }, []);

  const deleteCertificate = useCallback((id: string) => {
    setCertificates((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const updateLeadStatus = useCallback((id: string, s: LeadInquiry['status']) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: s } : l)));
  }, []);

  const clearLeads = useCallback(() => {
    setLeads([]);
  }, []);

  return {
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
    clearLeads,
  };
}
