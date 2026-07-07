"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GraduationCap, Award, Medal, Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const certifications = [
  {
    title: "Oracle Java Certification",
    issuer: "Oracle",
    icon: Award,
  },
  {
    title: "Java Full Stack",
    issuer: "Udemy",
    icon: Award,
  },
  {
    title: "Design Thinking",
    issuer: "NPTEL",
    icon: Star,
  },
  {
    title: "Design and Implementation of Human Computer Interfaces",
    issuer: "NPTEL",
    icon: Star,
  },
];

const achievements = [
  {
    title: "Hackverse GenAI Hackathon",
    description: "Participated and built innovative AI-powered solutions",
    icon: Medal,
  },
  {
    title: "Creatathon @ SECE",
    description: "Competed in college-level innovation challenge",
    icon: Medal,
  },
  {
    title: "SIH Shortlisted (Round 1)",
    description: "Shortlisted in Smart India Hackathon",
    icon: Medal,
  },
  {
    title: "Student Mentor",
    description: "Guiding peers in programming and web development",
    icon: Star,
  },
  {
    title: "Mentoring Club Member",
    description: "Active contributor to the mentoring community",
    icon: Star,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <SectionWrapper id="education">
      {/* Education */}
      <div className="text-center mb-16">
        <span className="section-label">Education & More</span>
        <h2 className="section-title">
          Academic{" "}
          <span className="gradient-text">Background</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-8 flex items-start gap-5"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(37, 99, 235, 0.1)" }}
          >
            <GraduationCap size={26} style={{ color: "var(--color-primary-light)" }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--text)" }}>
              Sri Eshwar College of Engineering
            </h3>
            <p className="text-sm font-medium mb-1" style={{ color: "var(--color-primary-light)" }}>
              Bachelor of Engineering — Electronics and Communication Engineering
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              2024 – 2028
            </p>
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <div className="mb-20">
        <h3
          className="text-xl font-bold text-center mb-8"
          style={{ color: "var(--text)" }}
        >
          Certifications
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {certifications.map(({ title, issuer, icon: Icon }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="card p-5 flex items-center gap-4 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20"
                style={{ background: "rgba(37, 99, 235, 0.1)" }}
              >
                <Icon size={18} style={{ color: "var(--color-primary-light)" }} />
              </div>
              <div>
                <h4 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  {title}
                </h4>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Achievements */}
      <div>
        <h3
          className="text-xl font-bold text-center mb-8"
          style={{ color: "var(--text)" }}
        >
          Achievements
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {achievements.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="card p-5 group text-center"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors group-hover:bg-primary/20"
                style={{ background: "rgba(37, 99, 235, 0.1)" }}
              >
                <Icon size={18} style={{ color: "var(--color-primary-light)" }} />
              </div>
              <h4 className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>
                {title}
              </h4>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
