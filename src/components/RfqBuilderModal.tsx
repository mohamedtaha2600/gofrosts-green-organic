import React from 'react';
import { Product, Language, LeadInquiry } from '../types';
import { MasterRfqModal } from './rfq';

interface RfqBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  preSelectedProduct?: Product | null;
  lang: Language;
  onSubmitInquiry: (lead: Omit<LeadInquiry, 'id' | 'date' | 'status'>) => void;
}

export const RfqBuilderModal: React.FC<RfqBuilderModalProps> = (props) => {
  return <MasterRfqModal {...props} />;
};
