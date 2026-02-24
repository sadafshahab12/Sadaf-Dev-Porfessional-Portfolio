import { create } from "zustand";
import { useToastStore } from "./useToastStore";
import { sanityClient } from "@/app/lib/sanityClient";
import { NewsletterContent, NewsletterState } from "../types/subscriber";

export const useNewsletterStore = create<NewsletterState>((set) => ({
  isLoading: false,
  isSuccess: false,
  content: null,

  fetchContent: async () => {
    try {
      const query = `*[_type == "newsletterContent"][0]`;
      const data = await sanityClient.fetch<NewsletterContent>(query);
      set({ content: data });
    } catch (err) {
      console.error("Sanity Fetch Error:", err);
    }
  },

  subscribe: async (email: string, subscriptionType: string) => {
    const showToast = useToastStore.getState().showToast;
    set({ isLoading: true });

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subscriptionType }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Subscription failed");

      set({ isSuccess: true, isLoading: false });
      showToast("Thanks for joining! 📧", "success");
    } catch (err) {
      set({ isLoading: false });
      // Yahan 'any' hatakar Error check lagaya hai
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong!";
      showToast(errorMessage, "error");
    }
  },

  resetStatus: () => set({ isSuccess: false, isLoading: false }),
}));
