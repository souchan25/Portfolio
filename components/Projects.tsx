"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "VirtualHealthAssistant",
      description:
        "An AI-powered health chatbot that provides medical information and health advice. Built with Python and AI technologies to assist users with their health-related queries.",
      technologies: ["Python", "AI/ML", "Natural Language Processing"],
      github: "https://github.com/souchan25/AI_Health_Chatbot",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
    {
      title: "Meal Planner",
      description:
        "A comprehensive meal planning application that helps users organize their meals efficiently. Features meal scheduling, recipe management, and nutritional tracking.",
      technologies: ["PHP", "HTML", "CSS", "MySQL"],
      github: "https://github.com/souchan25/MealPlanner",
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
    },
    {
      title: "Fish Marketplace",
      description:
        "An e-commerce platform for buying and selling fish products. Includes user authentication, product listings, shopping cart, and payment integration.",
      technologies: ["Python", "Django", "HTML", "CSS"],
      github: "https://github.com/souchan25/FishOceanConnect",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`glass rounded-xl p-6 border ${project.borderColor} hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
