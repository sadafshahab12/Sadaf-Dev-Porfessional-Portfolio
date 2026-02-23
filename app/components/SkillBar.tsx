import React from "react";
import { motion } from "framer-motion";

export const SkillBar: React.FC<{
  name: string;
  level: number;
  color: string;
}> = ({ name, level, color }) => {
  const barColors: Record<string, string> = {
    indigo: "from-indigo-500 to-blue-500",
    cyan: "from-cyan-500 to-blue-500",
    purple: "from-purple-500 to-indigo-500",
  };
  return (
    <div className="mb-5 md:mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-slate-200 text-sm md:text-base">
          {name}
        </span>
        <span className="text-slate-400 text-xs md:text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full bg-linear-to-r ${barColors[color] || barColors.indigo} rounded-full`}
        />
      </div>
    </div>
  );
};
