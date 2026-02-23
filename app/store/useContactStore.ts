import { create } from "zustand";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface ContactState {
  formState: FormFields;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  setFormValue: (field: keyof FormFields, value: string) => void;
  submitForm: () => Promise<void>;
  resetForm: () => void;
}

export const useContactStore = create<ContactState>((set, get) => ({
  formState: { name: "", email: "", message: "" },
  isSubmitting: false,
  isSuccess: false,
  error: null,

  setFormValue: (field, value) =>
    set((state) => ({
      formState: { ...state.formState, [field]: value },
    })),

  resetForm: () =>
    set({
      formState: { name: "", email: "", message: "" },
      isSuccess: false,
      error: null,
    }),

  submitForm: async () => {
    const { formState } = get();
    set({ isSubmitting: true, error: null, isSuccess: false });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      set({ isSuccess: true, isSubmitting: false });
      get().resetForm();

      setTimeout(() => set({ isSuccess: false }), 5000);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";

      set({
        error: errorMessage,
        isSubmitting: false,
      });
    }
  },
}));
