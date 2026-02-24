import React from "react";
import ContactPage from "../components/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sadaf.Dev - Hire a Full-Stack Developer",
  description:
    "Have a project in mind? Reach out to Sadaf.Dev for expert web development, MERN stack solutions, and AI integrations. Let's collaborate to build something powerful.",
  keywords: [
    "Contact Web Developer",
    "Hire MERN Stack Developer",
    "Freelance Next.js Developer",
    "Business Collaboration",
    "Tech Consultation",
    "Sadaf Dev Contact",
  ],
  openGraph: {
    title: "Get in Touch | Sadaf.Dev",
    description:
      "Let's turn your ideas into impactful digital experiences. Contact me today.",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sadaf.Dev",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Sadaf.Dev",
    description: "Ready to start your next digital project? Let's talk.",
    images: ["/contact-og-image.jpg"],
  },
};
const page = () => {
  return <ContactPage />;
};

export default page;
