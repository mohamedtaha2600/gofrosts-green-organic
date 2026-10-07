/**
 * Public API Facade for Global Initial Data
 * Re-exports modularized data structures organized by domain:
 * - Products: Dried produce, frozen fruits, vegetables, and specialties
 * - Certificates: Quality, organic, BRCGS, ISO, and export credentials
 * - SEO: Keywords and metadata targets
 * - Leads: B2B sample leads
 * - Company: Official enterprise contact details
 */

export * from './products';
export * from './certificates/initialCertificates';
export * from './seo/initialKeywords';
export * from './leads/initialLeads';
export * from './company/contactInfo';
