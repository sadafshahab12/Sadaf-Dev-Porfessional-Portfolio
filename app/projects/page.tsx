
import ProjectsPage from "../components/ProjectPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sadaf.Dev - Portfolio of Modern Web & AI Solutions",
  description:
    "Explore a showcase of my latest work, featuring full-stack MERN applications, Next.js websites, and AI-powered integrations. See how I turn complex ideas into functional digital products.",
  keywords: [
    "Software Engineering Portfolio",
    "React Projects",
    "Next.js Portfolio",
    "MERN Stack Applications",
    "AI Integration Examples",
    "Web Development Case Studies",
  ],
  openGraph: {
    title: "Project Showcase | Sadaf.Dev",
    description:
      "A showcase of technical expertise across frontend, backend, and AI domains.",
    images: [
      {
        url: "/projects-og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Sadaf.Dev Project Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Sadaf.Dev",
    description:
      "Exploring the intersection of clean code and intelligent AI solutions.",
    images: ["/projects-og-image.jpg"],
  },
};
const page = () => {
  return <ProjectsPage />;
};

export default page;
