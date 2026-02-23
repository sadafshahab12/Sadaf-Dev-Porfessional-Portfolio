import { client } from "@/sanity/lib/client";
import { create } from "zustand";
import { resumeQuery } from "../queries/resumeQuery";

interface GeneralState {
  resumeUrl: string | null;
  fetchResume: () => Promise<void>;
}

export const useGeneralStore = create<GeneralState>((set, get) => ({
  resumeUrl: null,
  fetchResume: async () => {
    if (get().resumeUrl) return;
    try {
      const data = await client.fetch(resumeQuery);
      set({ resumeUrl: data?.url || null });
    } catch (error) {
      console.error("Error fetching CV:", error);
    }
  },
}));
