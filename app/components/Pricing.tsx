"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PricingCard from "./PricingCard";
import { AddOnCard } from "./AddOnCard";
import { usePricingStore } from "../store/usePricingStore";
import FAQ from "./FAQ";

const Pricing = () => {
  const { plans, addOns, faqs, isLoading, error, fetchAllPricingData } =
    usePricingStore();

  useEffect(() => {
    fetchAllPricingData();
  }, [fetchAllPricingData]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
          <p className="text-slate-400 animate-pulse tracking-widest text-sm uppercase">
            Loading Services...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 text-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-slate-400 mb-6">{error}</p>
          <button
            onClick={() => fetchAllPricingData()}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white py-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Flexible plans designed to help your business grow with modern web
              & AI solutions. Quality code, delivered on time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 active:scale-95"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan._id} plan={plan} index={index} />
          ))}
        </div>
      </section>

      {/* Add-Ons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Additional Services
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Enhance your project with these powerful add-ons tailored to your
            business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addon, index) => (
            <AddOnCard key={addon._id} addon={addon} index={index} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">
            Everything you need to know about our process and services
          </p>
        </div>
        <FAQ items={faqs} />
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-linear-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] p-8 md:p-16 border border-indigo-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Something Powerful?
            </h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              {`Let's turn your vision into a reality. Reach out today for a
              consultation and let's discuss your custom requirements.`}
            </p>
            <Link
              href="/contact"
              className="inline-flex px-10 py-5 rounded-full bg-white text-indigo-950 font-extrabold hover:bg-indigo-50 transition-all shadow-xl hover:shadow-indigo-500/10 active:scale-95"
            >
              {`Let's Work Together`}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
