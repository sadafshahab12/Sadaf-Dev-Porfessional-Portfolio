import { create } from "zustand";
import { FormattedService, Service } from "../types/service";
import { client } from "@/sanity/lib/client";
import { servicesQuery } from "../queries/serviceQuery";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface ServiceState {
  services: FormattedService[];
  isLoading: boolean;
  fetchServices: () => Promise<void>;
}

export const useServiceStore = create<ServiceState>((set, get) => ({
  services: [],
  isLoading: false,
  fetchServices: async () => {
    if (get().services.length > 0) return;
    set({ isLoading: true });
    try {
      const data: Service[] = await client.fetch(servicesQuery);
      const iconLibrary = Icons as unknown as Record<string, LucideIcon>;
      const formatted: FormattedService[] = data.map((service) => ({
        ...service,
        icon: iconLibrary[service.iconName] || Icons.Helicopter,
      }));
      set({ services: formatted, isLoading: false });
    } catch (error) {
      console.error("Error fetching Services:", error);
      set({ isLoading: false });
    }
  },
}));
