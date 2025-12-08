"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Palette, Database, FileCode, GitBranch, Globe, Smartphone } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600", icon: Code2 },
    { name: "Django", level: 80, color: "from-green-400 to-green-600", icon: Database },
    { name: "HTML", level: 90, color: "from-orange-400 to-orange-600", icon: FileCode },
    { name: "CSS", level: 85, color: "from-blue-400 to-blue-600", icon: Palette },
    { name: "PHP", level: 75, color: "from-indigo-400 to-indigo-600", icon: Layout },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Code2 size={48} className="text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="gradient-text">Skills</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-8"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass rounded-xl p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-20`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <span className="text-xl font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
          );
          })}
        </motion.div>

        {/* Additional skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "JavaScript", icon: Code2 },
              { name: "Git", icon: GitBranch },
              { name: "SQL", icon: Database },
              { name: "Responsive Design", icon: Smartphone },
            ].map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="glass rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-2"
                >
                  <IconComponent size={32} className="text-purple-400" />
                  <span className="text-gray-300 text-sm">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
