import React from "react";
import HomePage from "./components/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sadaf.Dev | Full-Stack Developer & AI Specialist",
  description:
    "Welcome to the official portfolio of Sadaf.Dev. I am a Full-Stack Developer specializing in the MERN stack, Next.js, and Python-driven AI solutions. Building high-performance, scalable, and intelligent digital experiences.",
  keywords: [
    "Sadaf Dev",
    "Full-Stack Developer Portfolio",
    "Next.js Expert",
    "MERN Stack Developer",
    "AI Solution Architect",
    "React Developer",
    "Software Engineer",
    "Web Development Pakistan", 
  ],
  alternates: {
    canonical: "https://sadaf.dev", 
  },
  openGraph: {
    title: "Sadaf.Dev - Portfolio | Modern Web & AI Solutions",
    description:
      "Transforming complex ideas into seamless digital products. Explore my work in Next.js, MERN, and AI.",
    url: "https://sadaf.dev",
    siteName: "Sadaf.Dev Portfolio",
    images: [
      {
        url: "/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Sadaf.Dev Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadaf.Dev | Full-Stack Developer",
    description: "Specializing in Next.js, MERN, and AI integration.",
    images: ["/og-main.jpg"],
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
const page = () => {
  return <HomePage />;
};

export default page;
