import { LucideIcon } from "lucide-react";

export interface Service {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  iconName: "Database" | "Layout" | "Bot" | "TrendingUp" | "Share2" | "Target";
  benefits: string[];
  order: number;
}

export interface FormattedService extends Omit<Service, "iconName"> {
  icon: LucideIcon;
}
