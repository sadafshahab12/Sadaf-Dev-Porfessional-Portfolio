"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  Bot,
  Zap,
  Search,
  Settings,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Image as ImageIcon,
  Share2,
  X,
} from "lucide-react";
import { pricingData } from "@/app/pinterestPricingData";
import {
  InquiryFormData,
  usePinterestPricingStore,
} from "@/app/store/usePinterestPricingStore";
import Link from "next/link";

export default function PinterestAutomationPage() {
  const {
    isFormOpen,
    selectedPlan,
    closeForm,
    submitForm,
    isLoading,
    openForm,
  } = usePinterestPricingStore();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const payload = Object.fromEntries(
      fd.entries(),
    ) as unknown as InquiryFormData;

    const success = await submitForm(payload);

    if (success) {
      alert("System Initializing... Check your email soon!");
      closeForm();
    } else {
      alert("Submission failed. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* form modal  */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-2 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeForm}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-y-auto max-h-[95vh] sm:max-h-none"
            >
              {/* Top Decorative Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-indigo-500 to-transparent"></div>

              {/* Close Button - Slightly smaller on mobile */}
              <button
                onClick={closeForm}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-500 hover:text-white transition-colors p-2"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="mb-6 sm:mb-8">
                <div className="text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">
                  Secure Checkout
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Scale with {selectedPlan}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 mt-2">
                  Our team will initialize your AI system within 24 hours.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                {/* Grid: 1 col on mobile, 2 cols on tablet/desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-slate-500 ml-1 uppercase">
                      NAME
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-slate-500 ml-1 uppercase">
                      EMAIL
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@agency.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-slate-500 ml-1 uppercase">
                    PINTEREST URL / NICHE
                  </label>
                  <input
                    name="niche"
                    type="text"
                    required
                    placeholder="e.g. fashion-trends-2024"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 ml-1 uppercase">
                    YOUR MESSAGE / GOALS
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Tell us about your traffic goals..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base text-white focus:border-indigo-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl mt-2 shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isLoading ? "Processing..." : "Activate System"}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <p className="text-center text-[9px] sm:text-[10px] text-slate-600 uppercase tracking-tighter mt-4">
                  By clicking activate, you agree to our AI automation service
                  terms.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <header className="pt-24 pb-16 px-6 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-linear(circle_at_top,var(--tw-linear-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-medium tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            System Active
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            AI-DRIVEN PINTEREST <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-200 to-indigo-500">
              OPERATIONAL SYSTEM
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
            Seamless Python & Gemini AI Integration.
          </p>
        </motion.div>
      </header>

      {/* Main Content - 3 Column Layout */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Core Logic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 h-full backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
                Core Logic
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-slate-800 text-indigo-400 group-hover:bg-indigo-400/10 transition-colors">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      FastAPI / Python
                    </h4>
                    <p className="text-sm text-slate-400">
                      High-speed logic & backend execution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-slate-800 text-indigo-400 group-hover:bg-indigo-400/10 transition-colors">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Gemini AI</h4>
                    <p className="text-sm text-slate-400">
                      Viral SEO content generation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-slate-800 text-indigo-400 group-hover:bg-indigo-400/10 transition-colors">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">SEO Engine</h4>
                    <p className="text-sm text-slate-400">
                      Deep niche research & keyword targeting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-slate-800 text-indigo-400 group-hover:bg-indigo-400/10 transition-colors">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Automation</h4>
                    <p className="text-sm text-slate-400">
                      24/7 hands-free execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Flowchart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4 lg:col-span-1"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 h-full backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-b from-indigo-500/5 to-transparent"></div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-12 w-full text-left z-10">
                The Journey
              </h3>

              <div className="flex flex-col items-center w-full max-w-xs z-10 relative">
                <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-slate-700 via-indigo-500/50 to-slate-700"></div>

                <div className="flex flex-col items-center gap-2 mb-8 bg-slate-950 p-4 rounded-2xl border border-slate-800 w-full relative z-10 shadow-xl">
                  <ImageIcon className="w-6 h-6 text-slate-400 mb-2" />
                  <span className="text-sm font-medium text-white">
                    Input (Image/Link)
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 mb-8 bg-slate-950 p-4 rounded-2xl border border-indigo-500/30 w-full relative z-10 shadow-[0_0_30px_-10px_rgba(251,191,36,0.3)]">
                  <Bot className="w-6 h-6 text-indigo-400 mb-2" />
                  <span className="text-sm font-medium text-indigo-400">
                    AI Analysis
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 mb-8 bg-slate-950 p-4 rounded-2xl border border-slate-800 w-full relative z-10 shadow-xl">
                  <Search className="w-6 h-6 text-slate-400 mb-2" />
                  <span className="text-sm font-medium text-white">
                    SEO Optimization
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 bg-slate-950 p-4 rounded-2xl border border-slate-800 w-full relative z-10 shadow-xl">
                  <Share2 className="w-6 h-6 text-slate-400 mb-2" />
                  <span className="text-sm font-medium text-white">
                    Live on Pinterest
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 h-full backdrop-blur-sm flex flex-col">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
                Results
              </h3>

              <div className="flex-1 flex flex-col justify-center items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
                  <div className="relative bg-slate-950 border border-slate-800 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-2xl">
                    <TrendingUp className="w-8 h-8 text-indigo-400 mb-2" />
                    <span className="text-4xl font-bold text-white">+999%</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                      Growth
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h4 className="text-white font-medium mb-4">
                    Before vs After
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">Before</span>
                        <span className="text-slate-500">1.2k views</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600 w-[10%] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-indigo-400 font-medium">
                          After
                        </span>
                        <span className="text-indigo-400">1.2M+ views</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "10%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="h-full bg-linear-to-r from-indigo-500 to-indigo-300 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mt-8 italic">
                  {` "Real-world impact on client accounts."`}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
          <p className="text-slate-400">
            Scale your automation as your brand grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={` rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-10 flex flex-col relative transition-all duration-500 hover:scale-[1.02] ${
                plan.isPopular
                  ? "bg-slate-800 border-2 border-indigo-500/50 md:-translate-y-6 shadow-2xl shadow-indigo-500/10"
                  : "bg-slate-900/40 border border-slate-800"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Recommended
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">
                  {typeof plan.price === "number" && "$"}
                  {plan.price}
                </span>
                <span className="text-slate-500 font-medium">
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openForm(plan.name)}
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.isPopular
                    ? "bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/25"
                    : "border-2 border-slate-700 text-white hover:bg-slate-800"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
            Ready to dominate Pinterest?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            {`Let's scale your Pinterest traffic to 1M+ views.`}
          </p>
          <Link href={"/contact"}>
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-indigo-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">
                Book Your Free Strategy Call
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} AI-Driven Pinterest OS. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
