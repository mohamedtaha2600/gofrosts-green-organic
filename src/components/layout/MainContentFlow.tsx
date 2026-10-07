import React, { memo } from 'react';
import { Product, Certificate, Language } from '../../types';
import { Hero } from '../Hero';
import { ProductsSection } from '../ProductsSection';
import { CertificatesSection } from '../CertificatesSection';
import { ProcessSection } from '../ProcessSection';
import { HarvestCalendarSection } from '../HarvestCalendarSection';
import { ExportLogisticsSection } from '../ExportLogisticsSection';

interface MainContentFlowProps {
  activeSection: string;
  setActiveSection: (s: string) => void;
  lang: Language;
  products: Product[];
  certificates: Certificate[];
  onOpenRfq: (p?: Product | null) => void;
  onOpenAdminLogin: () => void;
  onOpenMediaStudio: () => void;
  onOpenChromaStudio: (stationId?: string) => void;
}

export const MainContentFlow: React.FC<MainContentFlowProps> = memo(({
  activeSection,
  setActiveSection,
  lang,
  products,
  certificates,
  onOpenRfq,
  onOpenAdminLogin,
  onOpenMediaStudio,
  onOpenChromaStudio,
}) => {
  if (activeSection === 'harvest') {
    return (
      <main className="flex-1 w-full">
        <HarvestCalendarSection
          products={products}
          lang={lang}
          onBackToHome={() => {
            setActiveSection('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </main>
    );
  }

  return (
    <main className="flex-1 w-full">
      <Hero
        lang={lang}
        onExploreProducts={() => {
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenRfq={() => onOpenRfq(null)}
        onOpenCertificates={() => {
          const el = document.getElementById('certificates');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenMediaStudio={onOpenMediaStudio}
      />

      <ProductsSection
        products={products}
        lang={lang}
        onSelectProductForRfq={(p) => onOpenRfq(p)}
        onOpenChromaStudio={onOpenChromaStudio}
      />

      <CertificatesSection
        certificates={certificates}
        lang={lang}
        onOpenAddCertificateModal={onOpenAdminLogin}
        onRequestSpecFile={() => {}}
      />

      <ProcessSection lang={lang} />

      <ExportLogisticsSection
        products={products}
        lang={lang}
        onOpenRfq={() => onOpenRfq(null)}
      />
    </main>
  );
});

MainContentFlow.displayName = 'MainContentFlow';
