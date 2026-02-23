"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Code2,
  Bot,
  TrendingUp,
} from "lucide-react";

import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";

import { useGeneralStore } from "./store/useGeneralStore";
import { urlFor } from "@/sanity/lib/image";

const TypingEffect = ({
  text,
  speed = 100,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {displayedText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

const Home = () => {
  const { resumeUrl, fetchAllData, isLoading, info, featuredProjects } =
    useGeneralStore();
  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-500"></div>
      </div>
    );
  }
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}

      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-linear(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-indigo-400 font-medium tracking-widest uppercase text-[10px] md:text-sm mb-4">
              Welcome to my portfolio
            </h2>

            {/* Fixed: Line height and responsive font size */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1] md:leading-tight">
              {` Hi, I'm`}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
                {info?.name}
              </span>
            </h1>

            {/* Fixed: Min-height allows text to wrap without overlapping buttons */}
            <div className="text-lg md:text-2xl text-slate-400 mb-8 min-h-20 md:min-h-16 flex items-center justify-center">
              <TypingEffect text={info?.title || ""} speed={50} />
            </div>

            <p className="max-w-2xl mx-auto text-slate-400 mb-10 text-sm md:text-lg leading-relaxed">
              {info?.bio}
            </p>

            {/* Fixed: Better button stacking and width */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs mx-auto sm:max-w-none">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all border border-slate-800 flex items-center justify-center gap-2"
              >
                Hire Me
              </Link>
              <Link
                href={resumeUrl ? `${resumeUrl}?dl=sadaf_shahab.pdf` : "#"}
                className={`w-full sm:w-auto px-8 py-4 rounded-full border border-indigo-500/30 text-indigo-400 font-bold transition-all flex items-center justify-center gap-2 ${
                  !resumeUrl
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-indigo-500/10"
                }`}
              >
                <Download className="w-4 h-4" />{" "}
                {resumeUrl ? "Download CV" : "Loading CV..."}
              </Link>
            </div>

            {/* Fixed: Increased margin top to separate from buttons */}
            <div className="mt-16 flex items-center justify-center gap-8">
              {info?.linkedin && (
                <Link href={info.linkedin} target="_blank" className="...">
                  <BsLinkedin className="w-6 h-6" />
                </Link>
              )}

              {info?.github && (
                <Link href={info.github} target="_blank" className="...">
                  <BsGithub className="w-6 h-6" />
                </Link>
              )}

              {info?.email && (
                <Link href={`mailto:${info.email}`} className="...">
                  <Mail className="w-6 h-6" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">{info?.about}</p>
            <div className="space-y-4">
              {[
                {
                  icon: Code2,
                  text: "Full-Stack Development (MERN & Next.js)",
                },
                { icon: Bot, text: "AI Chatbot Solutions & Automation" },
                {
                  icon: TrendingUp,
                  text: "Digital Marketing & Brand Strategy",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-2 group"
              >
                {`Let's work together`}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                  <h3 className="text-3xl font-bold text-indigo-400 mb-1">
                    3+
                  </h3>
                  <p className="text-sm text-slate-400">Years Experience</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                  <h3 className="text-3xl font-bold text-cyan-400 mb-1">20+</h3>
                  <p className="text-sm text-slate-400">Projects Completed</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                  <h3 className="text-3xl font-bold text-purple-400 mb-1">
                    10+
                  </h3>
                  <p className="text-sm text-slate-400">Happy Clients</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                  <h3 className="text-3xl font-bold text-emerald-400 mb-1">
                    24/7
                  </h3>
                  <p className="text-sm text-slate-400">Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400">
            {`A glimpse of what I've built recently`}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-indigo-400 mb-2 block uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-linear-to-r from-indigo-900/50 to-purple-900/50 rounded-3xl p-12 border border-indigo-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[20px_20px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {`Let's Build Something Amazing Together`}
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              {` Whether you need a full-stack application, an AI chatbot, or a
              digital marketing strategy, I'm here to help you achieve your
              goals.`}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
