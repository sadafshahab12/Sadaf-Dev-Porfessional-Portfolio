"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useServiceStore } from "../store/useServiceStore";

const Services = () => {
  const { services, isLoading, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            Services
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
          Comprehensive solutions tailored to your business needs. From
          development to marketing, I've got you covered.
        </p>
      </motion.div>

      {/* Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }} // Subtle lift on hover (desktop)
            className="group p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col backdrop-blur-sm"
          >
            {/* Icon Container */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
              <service.icon className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">
              {service.title}
            </h3>

            <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed grow">
              {service.description}
            </p>

            <ul className="space-y-3 mb-8">
              {service.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start text-xs md:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-3 mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-slate-800/50">
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors group/btn"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
