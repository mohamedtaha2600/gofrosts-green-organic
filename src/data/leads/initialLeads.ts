import { LeadInquiry } from '../../types';

export const INITIAL_LEADS: LeadInquiry[] = [
  {
    id: 'lead-101',
    date: '2026-08-28 14:32',
    fullName: 'Marco Rossi',
    companyName: 'ItalFood Distribution SpA',
    country: 'Italy',
    email: 'm.rossi@italfood-milano.it',
    phone: '+39 02 8934 7712',
    inquiryType: 'quote',
    productsOfInterest: ['IQF Artichoke (Bottoms 5-7cm)', 'IQF Strawberries Grade A'],
    targetQuantity: '2 x 40ft Reefer Containers (approx 48 MT)',
    incoterm: 'CIF Port of Genoa',
    destinationPort: 'Genoa, Italy',
    message: 'We are looking for regular monthly shipments of calibrated artichoke bottoms 5-7cm and Sensation strawberries. Please provide COA, BRC cert, and FOB Alexandria quote.',
    status: 'new'
  },
  {
    id: 'lead-102',
    date: '2026-08-27 09:15',
    fullName: 'Tariq Al-Mansoor',
    companyName: 'Gulf Hypermarkets Group',
    country: 'Saudi Arabia / UAE',
    email: 't.mansoor@gulfhyper.com',
    phone: '+966 50 492 8831',
    inquiryType: 'private_label',
    productsOfInterest: ['IQF Okra Zero', 'IQF Minced Molokhia', 'IQF Mixed Vegetables'],
    targetQuantity: '5 x 40ft Containers per quarter (Retail 400g packs)',
    incoterm: 'CIF Jeddah Islamic Port',
    destinationPort: 'Jeddah / Dammam',
    message: 'We want to produce under our private supermarket label (400g printed bags). Need Halal, ISO 22000 certificates and packaging samples sent to Riyadh office.',
    status: 'contacted'
  }
];
