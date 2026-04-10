export interface PricingPlan {
  id: string;
  name: string;
  price: string | number;
  period: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  isCustom?: boolean;
}
