import { create } from "zustand";
import { Project } from "../types/project";
import { client } from "@/sanity/lib/client";
import { projectQuery } from "../queries/projectQuery";

interface ProjectState {
  projects: Project[];
  filteredProjects: Project[];
  activeCategory: string;
  isLoading: boolean;
  fetchProjects: () => Promise<void>;
  setCategory: (category: string) => void;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  filteredProjects: [],
  activeCategory: "All",
  isLoading: false,
  fetchProjects: async () => {
    if (get().projects.length > 0) return;
    set({ isLoading: true });
    try {
      const data = await client.fetch(projectQuery);
      set({ projects: data, filteredProjects: data, isLoading: false });
    } catch (error) {
      console.error("Fetch projects failed", error);
      set({ isLoading: false });
    }
  },
  setCategory: (category: string) => {
    const { projects } = get();
    const filtered =
      category === "All"
        ? projects
        : projects.filter((p) => p.category === category);
    set({ activeCategory: category, filteredProjects: filtered });
  },
}));
