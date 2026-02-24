"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ as FAQType } from "../store/usePricingStore";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span
          className={`font-medium text-lg transition-colors ${isOpen ? "text-indigo-400" : "text-slate-200 group-hover:text-white"}`}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-400" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQProps {
  items: FAQType[]; 
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <div className="bg-slate-900/30 rounded-3xl border border-slate-800 p-6 md:p-10 backdrop-blur-sm">
      {items.length > 0 ? (
        items.map((item) => (
          <FAQItem
            key={item._id}
            question={item.question}
            answer={item.answer}
          />
        ))
      ) : (
        <p className="text-center text-slate-500 py-4">No questions found.</p>
      )}
    </div>
  );
};

export default FAQ;
