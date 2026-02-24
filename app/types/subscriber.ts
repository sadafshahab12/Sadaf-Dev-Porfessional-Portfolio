// 1. Jo data Sanity se fetch hoga (CMS Content)
export interface NewsletterContent {
  headline: string;
  description: string;
  subscriptionType: string; 
  buttonText: string;
  successMessage: string;
}


export interface SubscriberData {
  email: string;
  subscriptionType: string;
  subscribedAt?: string; 
}


export interface NewsletterState {
  isLoading: boolean;
  isSuccess: boolean;
  content: NewsletterContent | null;
  fetchContent: () => Promise<void>;
  subscribe: (email: string, type: string) => Promise<void>;
  resetStatus: () => void;
}