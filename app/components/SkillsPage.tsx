"use client";
import { motion } from "framer-motion";
import { SkillBar } from "../components/SkillBar";
import { useSkillStore } from "../store/useSkillStore";
import { useEffect } from "react";

const SkillsPage = () => {
  const { skillCategories, isLoading, fetchSkills } = useSkillStore();

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-indigo-400 font-medium tracking-widest uppercase">
          Loading Skills...
        </div>
      </div>
    );
  }

  const firstCategory = skillCategories[0];
  const otherCategories = skillCategories.slice(1);

  const getIndicatorColor = (color: string) => {
    const colors: Record<string, string> = {
      indigo: "bg-indigo-500 shadow-indigo-500/50",
      cyan: "bg-cyan-500 shadow-cyan-500/50",
      purple: "bg-purple-500 shadow-purple-500/50",
      emerald: "bg-emerald-500 shadow-emerald-500/50",
      blue: "bg-blue-500 shadow-blue-500/50",
    };
    return colors[color] || "bg-slate-500";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            Skills
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          A showcase of my technical expertise across various domains, from
          frontend aesthetics to AI integrations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
        {firstCategory && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-slate-800 backdrop-blur-sm h-fit"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-10 flex items-center gap-4">
              <span
                className={`w-1.5 h-8 rounded-full shadow-[0_0_15px] ${getIndicatorColor(firstCategory.color)}`}
              />
              {firstCategory.category}
            </h2>
            <div className="space-y-6">
              {firstCategory.skillsList.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={firstCategory.color}
                />
              ))}
            </div>
          </motion.div>
        )}

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
          {otherCategories.map((cat, idx) => (
            <motion.div
              key={cat._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold mb-8 flex items-center gap-3">
                <span
                  className={`w-1 h-6 rounded-full ${getIndicatorColor(cat.color)}`}
                />
                {cat.category}
              </h2>
              <div className="space-y-5">
                {cat.skillsList.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
