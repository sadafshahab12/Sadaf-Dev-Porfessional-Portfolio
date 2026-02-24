"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { useNewsletterStore } from "../store/useNewsletterStore";

export const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const { subscribe, isLoading, isSuccess, content, fetchContent } =
    useNewsletterStore();

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const typeToSend = content?.subscriptionType || "newsletter";
    await subscribe(email, typeToSend);
    if (!isLoading) setEmail("");
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        useNewsletterStore.getState().resetStatus();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const displayContent = {
    headline: content?.headline || "Level up your Workflow",
    description:
      content?.description ||
      "Join 500+ developers and founders getting weekly insights.",
    buttonText: content?.buttonText || "Join",
    successMessage: content?.successMessage || "You're on the list!",
  };

  return (
    <section className="py-12 md:py-24 px-4 relative overflow-hidden">
      {/* Dynamic Background Glow - Mobile friendly size */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-125 md:h-125 bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-slate-900/50 border border-slate-800 p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              {displayContent.headline}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
              {displayContent.description}
            </p>

            {isSuccess ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-3 text-emerald-400 py-4"
              >
                <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" />
                <span className="font-bold text-lg md:text-xl">
                  {displayContent.successMessage}
                </span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="relative max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-white px-6 py-4 rounded-full sm:rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600 text-sm md:text-base"
                />

                {/* Mobile: Standard Button | Tablet/Desktop: Absolute Button */}
                <button
                  disabled={isLoading}
                  className="sm:absolute sm:right-2 sm:top-2 sm:bottom-2 px-8 py-4 sm:py-0 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-sm md:text-base shadow-lg shadow-indigo-600/20"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      {displayContent.buttonText} <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            <p className="mt-6 text-[10px] md:text-xs text-slate-500 italic">
              *I respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
