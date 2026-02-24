import React from "react";
import ServicesPage from "../components/ServicesPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Sadaf.Dev - Full-Stack Web & AI Development",
  description:
    "Comprehensive digital solutions including custom MERN stack applications, high-performance Next.js websites, AI chatbot development, and UI/UX design. Transforming ideas into scalable products.",
  keywords: [
    "Web Development Services",
    "Custom AI Solutions",
    "Next.js Optimization",
    "MERN Stack Development",
    "Responsive Web Design",
    "Full-Stack Engineering",
    "Sadaf Dev Services",
  ],
  openGraph: {
    title: "Professional Web & AI Services | Sadaf.Dev",
    description:
      "Modern, scalable, and intelligent web solutions tailored to your business needs.",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sadaf.Dev Service Offerings",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Sadaf.Dev",
    description:
      "From MERN stack apps to AI integrations, explore my full range of development services.",
    images: ["/services-og-image.jpg"],
  },
};
const page = () => {
  return <ServicesPage />;
};

export default page;
