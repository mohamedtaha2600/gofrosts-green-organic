import { useEffect, useMemo } from 'react';
import { Product, Language } from '../types';
import { McpEngine } from '../mcp/engine';

interface UseAppMcpProps {
  lang: Language;
  setLang: (l: Language) => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
  openRfq: (p?: Product | null) => void;
  openAdmin: () => void;
  openGoDaddy: () => void;
  openSeo: () => void;
  openMediaStudio: () => void;
  products: Product[];
}

export function useAppMcp({
  lang,
  setLang,
  activeSection,
  setActiveSection,
  openRfq,
  openAdmin,
  openGoDaddy,
  openSeo,
  openMediaStudio,
  products,
}: UseAppMcpProps) {
  const mcpEngine = useMemo(() => {
    return new McpEngine({
      currentLang: lang,
      setLang,
      activeSection,
      setActiveSection,
      openRfq,
      openAdmin,
      openGoDaddy,
      openSeo,
      openMediaStudio,
      products,
    });
  }, [lang, setLang, activeSection, setActiveSection, openRfq, openAdmin, openGoDaddy, openSeo, openMediaStudio, products]);

  useEffect(() => {
    (window as unknown as Record<string, unknown>).__GOFROSTS_MCP__ = mcpEngine;
  }, [mcpEngine]);

  return mcpEngine;
}
