"use client";
import { motion } from "framer-motion";
import { SkillBar } from "../components/SkillBar";
import { useSkillStore } from "../store/useSkillStore";
import { useEffect } from "react";

const Skills = () => {
  const { skillCategories, isLoading, fetchSkills } = useSkillStore();

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);
  if (isLoading) {
    return (
      <div className="py-28 text-center text-slate-400">Loading Skills...</div>
    );
  }
  const firstCategory = skillCategories[0];
  const otherCategories = skillCategories.slice(1);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            Skills
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 leading-relaxed">
          A showcase of my technical expertise across various domains.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Column (Dynamically fetched) */}
        {firstCategory && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/40 p-6 md:p-10 rounded-3xl border border-slate-800 backdrop-blur-sm h-full"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3">
              <span
                className={`w-2 h-8 rounded-full bg-${firstCategory.color}-500 shadow-[0_0_15px_rgba(var(--color-rgb),0.5)]`}
              />
              {firstCategory.category}
            </h2>
            <div className="space-y-1">
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

        {/* Right Column (All other categories) */}
        <div className="space-y-8">
          {otherCategories.map((cat, idx) => (
            <motion.div
              key={cat._id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 p-6 md:p-10 rounded-3xl border border-slate-800 backdrop-blur-sm"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3">
                <span className={`w-2 h-8 rounded-full bg-${cat.color}-500`} />
                {cat.category}
              </h2>
              <div className="space-y-1">
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

export default Skills;
