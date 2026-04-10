import PinterestAutomationPage from "@/app/components/PinterestAutomationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Driven Pinterest OS | Automate Your Pinterest Growth",
  description:
    "Scale your Pinterest traffic to 1M+ views using our AI-driven automation system. Seamless Python & Gemini AI integration for viral SEO content.",
  keywords: [
    "Pinterest Automation",
    "AI Marketing Tool",
    "Pinterest SEO",
    "Python Automation",
    "Gemini AI Pinterest",
    "E-commerce Growth",
    "Social Media Automation Karachi",
  ],
  openGraph: {
    title: "AI-Driven Pinterest OS | Scalable Automation",
    description: "Hands-free Pinterest growth powered by Python and Gemini AI.",
    url: "https://your-domain.com/pinterest-automation", // Apna actual URL yahan dalein
    siteName: "AI-Driven Pinterest OS",
    images: [
      {
        url: "/og-image.png", // Public folder mein ek image rakhein branding ke liye
        width: 1200,
        height: 630,
        alt: "Pinterest Automation System Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Driven Pinterest OS",
    description: "Automate your Pinterest content and SEO with Gemini AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
const PinterestAutomation = () => {
  return <PinterestAutomationPage />;
};

export default PinterestAutomation;
