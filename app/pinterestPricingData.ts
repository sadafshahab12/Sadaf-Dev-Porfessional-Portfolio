import { PricingPlan } from "./types/pinterest-pricing";

export const pricingData: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Automation",
    price: 99,
    period: "/mo",
    features: [
      "1 Pinterest Account Management",
      "30 Single Image Pins (Full Month)",
      "Instant 30-Day Bulk Scheduling",
      "AI-Generated Titles & Descriptions",
      "Custom SEO Alt-Text for Every Pin",
      "Goal: Complete hands-free consistency",
    ],
    buttonText: "Select Plan",
    isPopular: false,
  },
  {
    id: "growth-pro",
    name: "Growth Pro",
    price: 199,
    period: "/mo",
    features: [
      "1 Pinterest Account Management",
      "60-90 Pins Scheduled in One Go",
      "Advanced Gemini AI SEO Optimization",
      "Strategic Time & Date Scheduling",
      "Deep Niche Keyword Research",
      "Goal: Rapid traffic & engagement boost",
    ],
    buttonText: "Select Plan",
    isPopular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise AI",
    price: "Custom",
    period: "",
    features: [
      "Multi-Account Management (Custom)",
      "High-Volume Bulk Automation (150+ Pins)",
      "Full Automation System Integration",
      "Dedicated Strategy & Monthly Audit",
      "Priority Tech Support",
      "Goal: Brand authority & maximum sales",
    ],
    buttonText: "Contact for Pricing",
    isPopular: false,
    isCustom: true,
  },
];
