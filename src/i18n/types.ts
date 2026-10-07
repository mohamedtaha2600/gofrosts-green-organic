export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    tagline: string;
    home: string;
    products: string;
    certificates: string;
    process: string;
    harvest: string;
    logistics: string;
    admin: string;
    godaddy?: string;
    seo?: string;
    rfq: string;
    aiAssistant: string;
    language: string;
    switchLanguage: string;
  };
  hero: {
    facilityBadge: string;
    standardsBadge: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    exploreCatalog: string;
    requestQuote: string;
    qualityCertifications: string;
    statIqfTitle: string;
    statIqfDesc: string;
    statStandardsTitle: string;
    statStandardsDesc: string;
    statPrivateLabelTitle: string;
    statPrivateLabelDesc: string;
    statReeferTitle: string;
    statReeferDesc: string;
  };
  products: {
    badge: string;
    title: string;
    description: string;
    searchPlaceholder: string;
    allCategories: string;
    catDried: string;
    catFruits: string;
    catVegetables: string;
    catGourmet: string;
    catOrganic: string;
    viewSpecs: string;
    requestRfq: string;
    shelfLife: string;
    storageTemp: string;
    origin: string;
    grades: string;
    cuts: string;
    retailPackaging: string;
    bulkPackaging: string;
    privateLabelAvailable: string;
    brix: string;
    season: string;
    close: string;
    noResults: string;
  };
  certificates: {
    badge: string;
    title: string;
    description: string;
    auditStage: string;
    scope: string;
    validity: string;
    issuer: string;
    downloadSpec: string;
  };
  process: {
    badge: string;
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  harvest: {
    badge: string;
    title: string;
    description: string;
    months: string[];
    crop: string;
    statusPeak: string;
    statusOff: string;
  };
  logistics: {
    badge: string;
    title: string;
    description: string;
    reeferSpecs: string;
    payloadCapacity: string;
    portsTitle: string;
    alexandriaPort: string;
    damiettaPort: string;
    incotermsTitle: string;
  };
  rfq: {
    title: string;
    subtitle: string;
    fullName: string;
    companyName: string;
    country: string;
    email: string;
    phone: string;
    inquiryType: string;
    typeQuote: string;
    typeSample: string;
    typePrivateLabel: string;
    typeGeneral: string;
    productsOfInterest: string;
    targetQuantity: string;
    incoterm: string;
    destinationPort: string;
    message: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    directContact: string;
  };
  footer: {
    tagline: string;
    location: string;
    quickLinks: string;
    compliance: string;
    contactUs: string;
    rightsReserved: string;
  };
  autoDetect: {
    detectedNotice: string;
    confirmLanguage: string;
    changeLanguage: string;
  };
}
