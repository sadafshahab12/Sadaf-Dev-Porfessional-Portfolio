import { create } from "zustand";
import { SkillCategory } from "../types/skills";
import { client } from "@/sanity/lib/client";
import { skillsQuery } from "../queries/skillsQuery";

export interface SkillState {
  skillCategories: SkillCategory[];
  isLoading: boolean;
  fetchSkills: () => Promise<void>;
}

export const useSkillStore = create<SkillState>((set, get) => ({
  skillCategories: [],
  isLoading: false,
  fetchSkills: async () => {
    if (get().skillCategories.length > 0) return;
    set({ isLoading: true });
    try {
      const data: SkillCategory[] = await client.fetch(skillsQuery);
      set({ skillCategories: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching skills:", error);
      set({ isLoading: false });
    }
  },
}));
