import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toast } from "./components/Toast";
const inter = Inter({
  weight: ["400", "800"],
  display: "swap",
  style: "normal",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Sadaf Developer | Fullstack Developer & UI Designer",
    template: "%s | Sadaf Developer",
  },
  description:
    "Creative Fullstack Developer specializing in modern UI/UX, Next.js, and scalable web applications. Explore my projects and digital experiences.",
  keywords: [
    "Fullstack Developer",
    "Next.js Expert",
    "UI/UX Designer",
    "React Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sadaf Shahab" }],
  creator: "Sadaf Shahab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sadafdeveloper.vercel.app/",
    title: "Sadaf Developer | Fullstack Portfolio",
    description: "Building the next generation of digital experiences.",
    siteName: "Sadaf Developer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sadaf Developer Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.style} antialiased`}>
        <Navbar />
        <Toast />
        {children}
        <Footer />
      </body>
    </html>
  );
}
