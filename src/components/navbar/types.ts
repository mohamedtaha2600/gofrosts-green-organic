import { Language } from '../../types';

export interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenAdmin: () => void;
  onOpenGoDaddyGuide?: () => void;
  onOpenSeoModal?: () => void;
  onOpenMediaStudio?: () => void;
  onOpenRfq: () => void;
  onOpenChat: () => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
  inquiryCount: number;
}
