"use client";

import { motion } from "framer-motion";
import { Mail, Send, ExternalLink } from "lucide-react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { useGeneralStore } from "../store/useGeneralStore";
import { useContactStore } from "../store/useContactStore";

const Contact = () => {
  const { info } = useGeneralStore();
  const {
    formState,
    setFormValue,
    submitForm,
    isSubmitting,
    isSuccess,
    error,
  } = useContactStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            Touch
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
          {`  Have a project in mind or want to collaborate? I'd love to hear from
          you.`}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Contact Info - Spans 5 columns on large screens */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 space-y-6 md:space-y-8"
        >
          <div className="bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
              Contact Information
            </h3>
            <div className="space-y-5 md:space-y-6">
              {/* Email Link */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-slate-200 text-sm md:text-base mb-1">
                    Email
                  </h4>
                  <Link
                    href={`mailto:${info?.email}`}
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-xs md:text-sm truncate block"
                  >
                    {info?.email}
                  </Link>
                </div>
              </div>

              {/* LinkedIn Link */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <BsLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-200 text-sm md:text-base mb-1">
                    LinkedIn
                  </h4>
                  <a
                    href={info?.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-xs md:text-sm flex items-center gap-1"
                  >
                    Connect professionally <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-slate-500/10 text-slate-300 shrink-0">
                  <BsGithub className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-200 text-sm md:text-base mb-1">
                    GitHub
                  </h4>
                  {info?.github && (
                    <Link
                      href={info?.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-indigo-400 transition-colors text-xs md:text-sm flex items-center gap-1"
                    >
                      Explore my code <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-indigo-900/20 to-purple-900/20 p-6 md:p-8 rounded-2xl border border-indigo-500/20">
            <h3 className="text-lg md:text-xl font-bold mb-3 text-indigo-300">
              {`Let's collaborate`}
            </h3>
            <p className="text-slate-400 italic text-sm md:text-base leading-relaxed">
              {`  "Let's collaborate and turn ideas into impactful digital
              experiences."`}
            </p>
          </div>
        </motion.div>

        {/* Contact Form - Spans 7 columns on large screens */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-7 bg-slate-900 p-6 md:p-10 rounded-2xl border border-slate-800 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormValue("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm md:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormValue("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm md:text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormValue("message", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none text-sm md:text-base"
                placeholder="Tell me about your project or vision..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                isSubmitting
                  ? "bg-indigo-600/50 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/25"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  Sending...
                </span>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 text-sm text-center border border-emerald-500/20 font-medium"
              >
                {`✓ Message sent successfully! I'll get back to you soon.`}
              </motion.div>
            )}
            {error && <p className="text-red-400">{error}</p>}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
