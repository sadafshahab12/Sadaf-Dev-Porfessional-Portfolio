import React from "react";
import { Mail } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { personalInfo } from "../data";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Sadaf<span className="text-indigo-400">.Dev</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building digital experiences with modern technologies.
              Specializing in MERN Stack, Next.js, and AI solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Services", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                      className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-300"
              >
                <BsGithub className="w-5 h-5" />
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                <BsLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-red-500 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Sadaf Shahab. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-2 md:mt-0">
            Designed & Built with Sadaf.dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
