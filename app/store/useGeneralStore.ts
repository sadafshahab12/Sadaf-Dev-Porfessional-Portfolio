import { client } from "@/sanity/lib/client";
import { create } from "zustand";
import { resumeQuery } from "../queries/resumeQuery";
import { personalInfoQuery } from "../queries/personalInfoQuery";
import { featuredProjectsQuery } from "../queries/featuredProjectsQuery";
import { Project } from "../types/project";

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  bio: string;
  about: string;
  linkedin: string;
  github: string;
  imageUrl: string | null;
}
interface GeneralState {
  info: PersonalInfo | null;
  featuredProjects: Project[];
  resumeUrl: string | null;
  isLoading: boolean;
  fetchAllData: () => Promise<void>;
}

export const useGeneralStore = create<GeneralState>((set, get) => ({
  featuredProjects: [],
  info: null,
  resumeUrl: null,
  isLoading: false,
  fetchAllData: async () => {
    if (get().info && get().resumeUrl) return;
    set({ isLoading: true });
    try {
      const [info, resume, featured] = await Promise.all([
        client.fetch<PersonalInfo>(personalInfoQuery),
        client.fetch<{ downloadUrl: string | null }>(resumeQuery),
        client.fetch<{ projects: Project[] }>(featuredProjectsQuery),
      ]);
      set({
        info,
        resumeUrl: resume?.downloadUrl || null,
        featuredProjects: featured?.projects || [],
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching CV:", error);
      set({ isLoading: false });
    }
  },
}));
