"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "Python", "C"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Express.js", "Node.js", "Django"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Wix"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <span className="section-label">Skills</span>
        <h2 className="section-title">
          Technologies I{" "}
          <span className="gradient-text">Work With</span>
        </h2>
        <p className="section-description mx-auto">
          A curated toolkit of modern technologies that I use to build robust,
          scalable, and user-friendly applications.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map(({ title, icon: Icon, skills }) => (
          <motion.div
            key={title}
            variants={cardVariants}
            className="card p-7 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-primary/20"
                style={{ background: "rgba(37, 99, 235, 0.1)" }}
              >
                <Icon size={20} style={{ color: "var(--color-primary-light)" }} />
              </div>
              <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
                {title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: "var(--surface-elevated)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
