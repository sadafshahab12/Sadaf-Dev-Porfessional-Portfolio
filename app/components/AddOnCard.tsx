"use client";
import React from "react";
import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react"; // Import Check
import { usePricingStore } from "../store/usePricingStore";
import { AddOn } from "../types/plan";
import { useRouter } from "next/navigation";

interface AddOnCardProps {
  addon: AddOn;
  index: number;
}

export const AddOnCard: React.FC<AddOnCardProps> = ({ addon }) => {
  const { selectedAddOns, toggleAddOn } = usePricingStore();
  const isSelected = selectedAddOns.some((item) => item._id === addon._id);
  const router = useRouter();
  const handleSelect = () => {
    toggleAddOn(addon);

    if (!isSelected) {
      setTimeout(() => {
        router.push("/contact");
      }, 500);
    }
  };
  return (
    <motion.div
      onClick={handleSelect}
      className={`cursor-pointer bg-slate-900/50 border rounded-2xl p-6 transition-all duration-300 group ${
        isSelected
          ? "border-indigo-500 bg-indigo-500/5 shadow-lg shadow-indigo-500/10"
          : "border-slate-800 hover:border-indigo-500/30"
      }`}
    >
      <div className="flex justify-between items-start mb-3 gap-4">
        <h4
          className={`font-bold text-lg transition-colors ${isSelected ? "text-indigo-400" : "text-white group-hover:text-indigo-400"}`}
        >
          {addon.title}
        </h4>
        <div className="bg-indigo-500/10 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/20">
          {addon.price}
        </div>
      </div>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {addon.description}
      </p>
      <button
        className={`text-sm font-semibold flex items-center gap-2 transition-all ${
          isSelected ? "text-emerald-400" : "text-indigo-400"
        }`}
      >
        {isSelected ? (
          <>
            <Check className="w-4 h-4" /> Added! Redirecting...
          </>
        ) : (
          <>
            <Plus className="w-4 h-4" /> Add to Plan
          </>
        )}
      </button>
    </motion.div>
  );
};
