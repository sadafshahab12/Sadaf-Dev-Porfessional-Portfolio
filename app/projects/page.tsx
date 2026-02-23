"use client";

import { useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useProjectStore } from "../store/useProjectStore";
import { urlFor } from "@/sanity/lib/image";



const Projects = () => {
  const {
    filteredProjects,
    activeCategory,
    setCategory,
    fetchProjects,
    isLoading,
  } = useProjectStore();
  const categories: string[] = ["All", "Web", "AI", "Marketing"];
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      {/* Top Header Section - Enhanced Responsiveness */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 md:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            Projects
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
          Explore my latest work showcasing web development, AI solutions, and
          digital marketing strategies.
        </p>
      </motion.div>

      {/* Filters - Scrollable on mobile if they overflow */}
      <div className="flex justify-start sm:justify-center gap-2 sm:gap-4 mb-10 md:mb-12 overflow-x-auto pb-4 sm:pb-0 no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setCategory(category)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeCategory === category
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid - Standardized spacing */}
      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-500"></div>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project._id}
                className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={urlFor(project.mainImage).url()}
                    alt={project.title}
                    width={700}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.demoLink && (
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        className="p-3 rounded-full bg-white text-slate-900 hover:bg-indigo-50 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors border border-slate-700"
                      >
                        <BsGithub className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col grow">
                  <div className="mb-4">
                    <span className="text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs md:text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 text-[10px] md:text-xs font-medium border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
