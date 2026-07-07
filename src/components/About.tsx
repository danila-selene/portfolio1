"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Briefcase, Users, Trophy, BookOpen } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { icon: Code2, label: "Projects Completed", value: "6+" },
  { icon: Briefcase, label: "Internships", value: "2" },
  { icon: Users, label: "Freelance Clients", value: "1+" },
  { icon: Trophy, label: "Hackathons", value: "3" },
  { icon: BookOpen, label: "Years Learning", value: "3+" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left - Content */}
        <div>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting Digital Experiences with{" "}
            <span className="gradient-text">Purpose</span>
          </h2>
          <div
            className="space-y-5 text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              I am a passionate frontend-focused full-stack developer who enjoys
              solving real-world problems through clean architecture and
              intuitive interfaces. Currently in my third year of Electronics and
              Communication Engineering at Sri Eshwar College of Engineering, I
              channel my engineering mindset into building software that matters.
            </p>
            <p>
              My journey spans across the Java Full Stack and MERN Stack
              ecosystems. From building hospital management systems to e-book
              stores, I focus on creating solutions that are not just functional
              but delightful to use.
            </p>
            <p>
              Through internships at companies like Dyashin Technosoft and
              AlgoTutor, along with freelance work, I have gained hands-on
              experience with professional development workflows, agile
              practices, and scalable architecture patterns.
            </p>
          </div>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {[
              "ECE Student",
              "Frontend Passion",
              "Java Full Stack",
              "MERN Stack",
              "Problem Solver",
              "Continuous Learner",
            ].map((tag) => (
              <span key={tag} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="card p-6 text-center group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300 group-hover:bg-primary/20"
                style={{ background: "rgba(37, 99, 235, 0.1)" }}
              >
                <Icon
                  size={22}
                  style={{ color: "var(--color-primary-light)" }}
                />
              </div>
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: "var(--text)" }}
              >
                {value}
              </div>
              <div
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--text-secondary)" }}
              >
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
