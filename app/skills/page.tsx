import React from "react";
import SkillsPage from "../components/SkillsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Skills | Sadaf.Dev - Full-Stack Developer Expertise",
  description:
    "A comprehensive showcase of my technical expertise, ranging from Frontend (Next.js, React) and Backend (Node.js, MongoDB) to AI Chatbot development and State Management.",
  keywords: [
    "Software Engineer Skills",
    "MERN Stack Proficiency",
    "Next.js Developer Expertise",
    "Tailwind CSS Specialist",
    "Python AI Development",
    "Zustand State Management",
    "Sadaf Dev Technical Skills",
  ],
  openGraph: {
    title: "Technical Expertise | Sadaf.Dev",
    description:
      "Deep dive into my stack: Next.js, MERN, and AI-driven solutions.",
    images: [
      {
        url: "/skills-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sadaf.Dev Technical Skills Showcase",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Expertise | Sadaf.Dev",
    description:
      "Explore my technical domain expertise across the modern web and AI landscape.",
    images: ["/skills-og-image.jpg"],
  },
};
const page = () => {
  return <SkillsPage />;
};

export default page;
