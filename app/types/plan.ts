export interface PricingPlan {
_id: string;
  name: string;
  price: string;
  description: string;
  iconName: string;
  features: string[];
  notIncluded: string[];
  cta: string;
  popular: boolean;
  gradient: string;
}

export interface AddOn {
  _id: string;
  title: string;
  description: string;
  price: string;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
}