import { Language } from '../types';

export interface McpToolParameter {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'array';
  description: string;
  required: boolean;
  enum?: string[];
}

export interface McpToolDefinition {
  name: string;
  description: string;
  parameters: McpToolParameter[];
}

export const MCP_TOOL_CATALOG: McpToolDefinition[] = [
  {
    name: 'set_language',
    description: 'Change the application display language and direction (RTL/LTR)',
    parameters: [
      {
        name: 'lang',
        type: 'string',
        description: 'Supported language code',
        required: true,
        enum: ['ar', 'en', 'ru', 'de', 'fr', 'it', 'es'],
      },
    ],
  },
  {
    name: 'navigate_to_section',
    description: 'Scroll smoothly to any page section',
    parameters: [
      {
        name: 'sectionId',
        type: 'string',
        description: 'Target section ID',
        required: true,
        enum: ['home', 'products', 'certificates', 'process', 'harvest', 'logistics'],
      },
    ],
  },
  {
    name: 'open_rfq_modal',
    description: 'Open the Request for Quotation (RFQ) and sample ordering dialog',
    parameters: [
      {
        name: 'productId',
        type: 'string',
        description: 'Optional product ID to preselect in the RFQ',
        required: false,
      },
    ],
  },
  {
    name: 'open_admin_modal',
    description: 'Open the factory management and product administration console',
    parameters: [],
  },
  {
    name: 'open_godaddy_guide',
    description: 'Open the GoDaddy DNS configuration and domain linking modal',
    parameters: [],
  },
  {
    name: 'open_seo_modal',
    description: 'Open the global SEO strategy and multilingual keyword explorer',
    parameters: [],
  },
  {
    name: 'open_media_studio',
    description: 'Open the produce media studio to upload custom isolated strawberry PNGs and hero motion video',
    parameters: [],
  },
  {
    name: 'search_catalog',
    description: 'Search for frozen agricultural products in the factory catalog',
    parameters: [
      {
        name: 'query',
        type: 'string',
        description: 'Search query keyword (e.g. strawberry, mango, okra)',
        required: true,
      },
      {
        name: 'category',
        type: 'string',
        description: 'Optional category filter',
        required: false,
        enum: ['all', 'vegetables', 'fruits', 'gourmet', 'organic'],
      },
    ],
  },
  {
    name: 'get_reefer_estimate',
    description: 'Calculate container payload and carton count for export shipments',
    parameters: [
      {
        name: 'containerType',
        type: 'string',
        description: 'Container size',
        required: true,
        enum: ['40hc', '20reefer'],
      },
      {
        name: 'packFormat',
        type: 'string',
        description: 'Packaging type',
        required: true,
        enum: ['retail_400g', 'bulk_10kg', 'bulk_20kg'],
      },
    ],
  },
];
