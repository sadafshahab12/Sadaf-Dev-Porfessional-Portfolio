import { create } from "zustand";
import { client } from "@/sanity/lib/client";
import { Zap, Star, Crown, LucideIcon } from "lucide-react";
import { AddOn, FAQ, PricingPlan } from "../types/plan";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Star,
  Crown,
};

interface PricingFetchResponse {
  plans: PricingPlan[];
  addOns: AddOn[];
  faqs: FAQ[];
}

export interface Plan extends Omit<PricingPlan, "iconName"> {
  iconName: string;
  icon: LucideIcon;
}

interface PricingState {
  plans: Plan[];
  addOns: AddOn[];
  faqs: FAQ[];
  selectedAddOns: AddOn[];
  clearSelectedAddOns: () => void;
  toggleAddOn: (addon: AddOn) => void;
  isLoading: boolean;
  error: string | null;
  fetchAllPricingData: () => Promise<void>;
}

export const usePricingStore = create<PricingState>((set) => ({
  plans: [],
  addOns: [],
  faqs: [],
  isLoading: false,
  error: null,
  selectedAddOns: [],

  toggleAddOn: (addon) =>
    set((state) => {
      const isSelected = state.selectedAddOns.find(
        (item) => item._id === addon._id,
      );
      if (isSelected) {
        return {
          selectedAddOns: state.selectedAddOns.filter(
            (item) => item._id !== addon._id,
          ),
        };
      }
      return { selectedAddOns: [...state.selectedAddOns, addon] };
    }),
  clearSelectedAddOns: () => set({ selectedAddOns: [] }),
  fetchAllPricingData: async () => {
    set({ isLoading: true, error: null });
    try {
      const query = `{
        "plans": *[_type == "plan"] | order(price asc) {
           _id, name, price, description, "iconName": icon, features, notIncluded, cta, popular, gradient
        },
        "addOns": *[_type == "addOn"] | order(_createdAt asc),
        "faqs": *[_type == "faq"] | order(order asc)
      }`;

      // Casting the response to our specific interface instead of any
      const { plans, addOns, faqs } =
        await client.fetch<PricingFetchResponse>(query);

      const formattedPlans: Plan[] = plans.map((plan) => ({
        ...plan,
        icon: iconMap[plan.iconName] || Zap,
      }));

      set({ plans: formattedPlans, addOns, faqs, isLoading: false });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load pricing data";
      set({ error: message, isLoading: false });
    }
  },
}));
