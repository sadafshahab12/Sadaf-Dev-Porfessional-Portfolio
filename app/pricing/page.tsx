import { Metadata } from "next";
import Pricing from "../components/Pricing";

export const metadata: Metadata = {
  title: "Pricing | Sadaf.Dev - Modern Web & AI Solutions",
  description:
    "Explore transparent pricing plans for professional web development, MERN stack applications, Next.js projects, and AI chatbot integrations. Choose a plan that fits your business needs.",
  keywords: [
    "Web Development Pricing",
    "Next.js Developer",
    "MERN Stack Specialist",
    "AI Chatbot Integration",
    "Freelance Developer Rates",
    "Sadaf Dev",
  ],
  openGraph: {
    title: "Simple & Transparent Pricing | Sadaf.Dev",
    description:
      "Quality code delivered on time. Flexible plans designed for business growth.",
    images: [
      {
        url: "/pricing-og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Sadaf.Dev Pricing Plans",
      },
    ],
    type: "website",
  },
};
const page = () => {
  return <Pricing />;
};

export default page;
