"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Code2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavStore } from "../store/useNavStore";
import { useGeneralStore } from "../store/useGeneralStore";

interface SubLink {
  name: string;
  path: string;
}

interface NavLink {
  name: string;
  path: string;
  subLinks?: SubLink[];
}

const Navbar: React.FC = () => {
  // Zustand Store
  const { isOpen, toggleMenu, closeMenu, mobileProjectOpen, toggleProjects } =
    useNavStore();
  const { resumeUrl, fetchAllData } = useGeneralStore();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    {
      name: "Projects",
      path: "/projects",
      subLinks: [
        { name: "All Projects", path: "/projects" },
        { name: "Pinterest Automation", path: "/projects/pinterest-automation" },
        { name: "UI/UX Design", path: "/projects/ui-ux-design" },
      ],
    },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
              <Code2 className="w-6 h-6 text-indigo-400" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-100">
              Sadaf<span className="text-indigo-400">.Dev</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-4">
                {link.subLinks ? (
                  <>
                    <button className="flex items-center space-x-1 text-sm font-medium text-slate-400 group-hover:text-indigo-400 transition-colors">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    {/* Desktop Dropdown */}
                    <div className="absolute left-0 top-full hidden group-hover:block pt-2 w-48">
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className="block px-4 py-2 text-sm text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-all"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.path}
                    className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                      pathname === link.path
                        ? "text-indigo-400"
                        : "text-slate-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              <Link
                href={resumeUrl ? `${resumeUrl}?dl=sadaf_shahab_cv.pdf` : "#"}
                className="px-4 py-2 rounded-full border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 text-sm font-medium transition-colors"
              >
                Download CV
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20"
              >
                Hire Me
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <div className="flex flex-col">
                      <button
                        onClick={toggleProjects}
                        className="flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${mobileProjectOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileProjectOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 space-y-1 bg-slate-900/50 rounded-lg mb-2"
                          >
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.path}
                                className="block px-3 py-3 text-sm text-slate-400 hover:text-indigo-400"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className={`block px-3 py-3 rounded-md text-base font-medium ${
                        pathname === link.path
                          ? "bg-indigo-500/10 text-indigo-400"
                          : "text-slate-400 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-3 px-3">
                <Link
                  href="/contact"
                  className="block text-center w-full py-3 rounded-xl bg-indigo-600 text-white font-medium"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
