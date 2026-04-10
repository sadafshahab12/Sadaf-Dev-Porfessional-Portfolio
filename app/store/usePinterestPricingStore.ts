import { create } from "zustand";

// Form data ke liye interface define karein
export interface InquiryFormData {
  name: string;
  email: string;
  niche: string;
  message?: string; // Optional because textarea may be empty
}

interface PinterestPricingState {
  isFormOpen: boolean;
  selectedPlan: string;
  isLoading: boolean;
  openForm: (planName: string) => void;
  closeForm: () => void;
  // FormData ke bajaye InquiryFormData interface use karein
  submitForm: (formData: InquiryFormData) => Promise<boolean>;
}

export const usePinterestPricingStore = create<PinterestPricingState>(
  (set, get) => ({
    isFormOpen: false,
    selectedPlan: "",
    isLoading: false,

    openForm: (planName: string) =>
      set({ isFormOpen: true, selectedPlan: planName }),

    closeForm: () =>
      set({ isFormOpen: false, selectedPlan: "", isLoading: false }),

    submitForm: async (formData: InquiryFormData) => {
      set({ isLoading: true });
      try {
        const response = await fetch("/api/pinterest-inquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            plan: get().selectedPlan,
          }),
        });

        if (response.ok) {
          // Success case mein form band aur loading stop
          set({ isFormOpen: false, selectedPlan: "", isLoading: false });
          return true;
        }

        set({ isLoading: false });
        return false;
      } catch (error) {
        // Error handling with better logging
        console.error("Store Error [submitForm]:", error);
        set({ isLoading: false });
        return false;
      }
    },
  }),
);
