export type ActivePage = 'home' | 'features' | 'providers' | 'why' | 'docs' | 'faq';

export interface Provider {
  id: string;
  name: string;
  badge: string;
  badgeClass: string;
  company: string;
  envVar: string;
  keyUrl: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
