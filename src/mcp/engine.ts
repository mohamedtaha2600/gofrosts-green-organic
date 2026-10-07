import { Language, Product } from '../types';
import { MCP_TOOL_CATALOG, McpToolDefinition } from './catalog';

export interface McpCallRequest {
  tool: string;
  arguments: Record<string, unknown>;
}

export interface McpCallResponse {
  success: boolean;
  tool: string;
  result?: Record<string, unknown>;
  error?: string;
}

export interface McpRuntimeContext {
  currentLang: Language;
  setLang: (l: Language) => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
  openRfq: (p?: Product | null) => void;
  openAdmin: () => void;
  openGoDaddy: () => void;
  openSeo: () => void;
  openMediaStudio?: () => void;
  products: Product[];
}

/**
 * Internal MCP Engine implementing Rule 61-75
 */
export class McpEngine {
  private context: McpRuntimeContext;
  private callHistory: { tool: string; timestamp: number }[] = [];

  constructor(context: McpRuntimeContext) {
    this.context = context;
  }

  public updateContext(context: McpRuntimeContext): void {
    this.context = context;
  }

  public getCatalog(): McpToolDefinition[] {
    return MCP_TOOL_CATALOG;
  }

  public execute(request: McpCallRequest): McpCallResponse {
    const { tool, arguments: args } = request;

    // Loop Protection (Rule 75)
    const now = Date.now();
    this.callHistory = this.callHistory.filter((item) => now - item.timestamp < 3000);
    const recentIdentical = this.callHistory.filter((item) => item.tool === tool);
    if (recentIdentical.length >= 4) {
      return {
        success: false,
        tool,
        error: 'Loop Protection: Tool invoked too frequently in short duration.',
      };
    }
    this.callHistory.push({ tool, timestamp: now });

    switch (tool) {
      case 'set_language': {
        const lang = args.lang as Language;
        if (['ar', 'en', 'ru', 'de', 'fr', 'it', 'es'].includes(lang)) {
          this.context.setLang(lang);
          return { success: true, tool, result: { activeLanguage: lang, dir: lang === 'ar' ? 'rtl' : 'ltr' } };
        }
        return { success: false, tool, error: `Invalid language code: ${lang}` };
      }

      case 'navigate_to_section': {
        const sectionId = String(args.sectionId || 'home');
        this.context.setActiveSection(sectionId);
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return { success: true, tool, result: { navigatedTo: sectionId } };
      }

      case 'open_rfq_modal': {
        const productId = args.productId as string | undefined;
        let p: Product | null = null;
        if (productId) {
          p = this.context.products.find((prod) => prod.id === productId) || null;
        }
        this.context.openRfq(p);
        return { success: true, tool, result: { modalOpened: true, preselectedProduct: p?.id || null } };
      }

      case 'open_admin_modal': {
        this.context.openAdmin();
        return { success: true, tool, result: { adminOpened: true } };
      }

      case 'open_godaddy_guide': {
        this.context.openGoDaddy();
        return { success: true, tool, result: { goDaddyOpened: true } };
      }

      case 'open_seo_modal': {
        this.context.openSeo();
        return { success: true, tool, result: { seoOpened: true } };
      }

      case 'open_media_studio': {
        if (this.context.openMediaStudio) {
          this.context.openMediaStudio();
          return { success: true, tool, result: { mediaStudioOpened: true } };
        }
        return { success: false, tool, error: 'Media Studio handler not registered.' };
      }

      case 'search_catalog': {
        const query = String(args.query || '').toLowerCase();
        const results = this.context.products.filter(
          (p) =>
            p.nameAr.toLowerCase().includes(query) ||
            p.nameEn.toLowerCase().includes(query) ||
            p.descriptionEn.toLowerCase().includes(query)
        );
        return {
          success: true,
          tool,
          result: {
            matchesCount: results.length,
            productIds: results.map((r) => r.id),
          },
        };
      }

      default:
        return { success: false, tool, error: `Unknown tool: ${tool}` };
    }
  }
}
