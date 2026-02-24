"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useToastStore } from "../store/useToastStore";
import { CheckCircle, AlertCircle, X } from "lucide-react";

export const Toast = () => {
  const { isVisible, message, type, hideToast } = useToastStore();

  return (
    <AnimatePresence>
      {isVisible && (
        /* z-[9999] ensure karega ke ye hamesha sabse upar rahe chahe scroll karein ya nahi */
        <div className="fixed top-10 left-0 right-0 z-9999 flex justify-center pointer-events-none px-4">
          <motion.div
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`
              pointer-events-auto flex items-center gap-3 px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border backdrop-blur-xl
              ${
                type === "success"
                  ? "bg-slate-900/90 border-emerald-500/50 text-emerald-400"
                  : "bg-slate-900/90 border-red-500/50 text-red-400"
              }
            `}
          >
            {type === "success" ? (
              <CheckCircle className="w-5 h-5 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0" />
            )}

            <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
              {message}
            </span>

            <button
              onClick={hideToast}
              className="ml-4 p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
