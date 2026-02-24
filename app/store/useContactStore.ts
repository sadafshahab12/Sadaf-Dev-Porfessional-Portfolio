import { create } from "zustand";
import { useToastStore } from "./useToastStore";
import { usePricingStore } from "./usePricingStore";

interface FormFields {
  name: string;
  email: string;
  message: string;
  projectType: string;
  budget: string;
  timeline: string;
  socialHandle: string;
}

interface ContactState {
  formState: FormFields;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  setFormValue: (field: keyof FormFields, value: string) => void;
  submitForm: () => Promise<void>;
  resetForm: () => void;
  setServiceMessage: (serviceTitle: string) => void;
}

const initialFormState: FormFields = {
  name: "",
  email: "",
  message: "",
  projectType: "fullstack",
  budget: "500-1500",
  timeline: "standard",
  socialHandle: "",
};

export const useContactStore = create<ContactState>((set, get) => ({
  formState: initialFormState,
  isSubmitting: false,
  isSuccess: false,
  error: null,
  setServiceMessage: (serviceTitle: string) => {
    const customMessage = `Hi! I'm interested in your "${serviceTitle}" service. I'd love to learn more about how we can work together.`;
    set((state) => ({
      formState: { ...state.formState, message: customMessage },
    }));
  },
  setFormValue: (field, value) =>
    set((state) => ({
      formState: { ...state.formState, [field]: value },
    })),

  resetForm: () =>
    set({
      formState: initialFormState,
      isSuccess: false,
      error: null,
    }),

  submitForm: async () => {
    const { formState } = get();
    const showToast = useToastStore.getState().showToast;

    if (!formState.name || !formState.email || !formState.message) {
      const errorMsg = "Please fill in all required fields.";
      set({ error: errorMsg });
      showToast(errorMsg, "error");
      return;
    }

    set({ isSubmitting: true, error: null, isSuccess: false });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      set({ isSuccess: true, isSubmitting: false });
      showToast("Message sent successfully! 🚀", "success");
      usePricingStore.getState().clearSelectedAddOns();
      setTimeout(() => {
        get().resetForm();
      }, 5000);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";

      set({
        error: errorMessage,
        isSubmitting: false,
      });

      showToast(errorMessage, "error");
    }
  },
}));
