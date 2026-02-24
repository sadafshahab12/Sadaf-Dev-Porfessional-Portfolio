"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Plan } from "../store/usePricingStore";

interface PricingCardProps {
  plan: Plan;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative rounded-3xl bg-slate-900/50 border backdrop-blur-sm ${
        plan.popular
          ? "border-indigo-500 shadow-2xl shadow-indigo-500/20"
          : "border-slate-800"
      } p-8 flex flex-col h-full hover:border-indigo-500/50 transition-all duration-300`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <div
          className={`w-12 h-12 rounded-xl bg-linear-to-br ${plan.gradient} p-0.5 mb-4 inline-flex items-center justify-center`}
        >
          <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white">
            <Icon className="w-6 h-6" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {plan.description}
        </p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-bold text-white">{plan.price}</span>
        {plan.price !== "Custom" && (
          <span className="text-slate-500 ml-2 text-sm">/ project</span>
        )}
      </div>

      <div className="grow space-y-4 mb-10">
        {plan.features.map((feature, i) => (
          <div
            key={i}
            className="flex items-start gap-3 text-sm text-slate-300"
          >
            <Check className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
        {plan.notIncluded &&
          plan.notIncluded.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-3 text-sm text-slate-600"
            >
              <X className="w-5 h-5 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
      </div>

      <Link
        href="/contact"
        className={`w-full py-4 rounded-2xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 ${
          plan.popular
            ? "bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white shadow-lg shadow-indigo-500/25"
            : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
        }`}
      >
        {plan.cta} <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};

export default PricingCard;
