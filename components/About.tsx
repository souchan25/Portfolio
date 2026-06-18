"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, User, Lightbulb, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <User size={48} className="text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6 gap-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                <GraduationCap size={48} className="text-purple-400" />
              </div>
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                <Lightbulb size={48} className="text-blue-400" />
              </div>
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                <Target size={48} className="text-pink-400" />
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Hello! I'm <span className="text-white font-semibold">Eugene D. Pausa</span>, a
              fresh graduate with a{" "}
              <span className="text-white font-semibold">
                Bachelor of Science in Information Technology
              </span>
              . I'm passionate about creating innovative web applications and solutions that make a
              difference.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              As a fresh graduate, I'm excited to apply my knowledge in{" "}
              <span className="gradient-text font-semibold">Python, Django, HTML, CSS,</span> and{" "}
              <span className="gradient-text font-semibold">PHP</span> to real-world projects. I
              enjoy building user-friendly interfaces and robust backend systems that solve complex
              problems.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm always eager to learn new technologies, collaborate with others, and contribute to
              meaningful projects. When I'm not coding, you'll find me exploring the latest tech
              trends or working on personal projects that challenge my skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
