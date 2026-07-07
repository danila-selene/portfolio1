"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    company: "Dyashin Technosoft Pvt. Ltd.",
    role: "Java Full Stack Intern",
    location: "Bangalore",
    duration: "4 Months (Ongoing)",
    type: "Internship",
    current: true,
    responsibilities: [
      "Develop Java Full Stack applications using industry-standard practices",
      "Build scalable backend services with Spring Boot and RESTful APIs",
      "Collaborate in a professional development environment with agile methodology",
      "Work on database design and optimization with MySQL and Hibernate",
    ],
  },
  {
    company: "AlgoTutor",
    role: "MERN Stack Intern",
    location: "Coimbatore",
    duration: "1 Month",
    type: "Internship",
    current: false,
    responsibilities: [
      "Built the E-Book Store project from design to deployment",
      "Worked with React, Express.js, MongoDB, and Node.js",
      "Implemented JWT authentication and secure REST APIs",
      "Delivered responsive UI with modern design patterns",
    ],
  },
  {
    company: "DannDave Pvt. Ltd.",
    role: "Freelance Web Developer",
    location: "Remote",
    duration: "Project-Based",
    type: "Freelance",
    current: false,
    responsibilities: [
      "Designed and developed a portfolio website using Wix for a client",
      "Delivered a responsive and visually appealing web presence",
      "Managed client communication and project timeline independently",
    ],
  },
];

const timelineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <span className="section-label">Experience</span>
        <h2 className="section-title">
          Professional{" "}
          <span className="gradient-text">Journey</span>
        </h2>
        <p className="section-description mx-auto">
          Building real-world experience through internships and freelance work,
          one project at a time.
        </p>
      </div>

      <motion.div
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Timeline line */}
        <div
          className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
          style={{ background: "var(--border-color)" }}
          aria-hidden="true"
        />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            variants={itemVariants}
            className="relative pl-16 md:pl-20 pb-12 last:pb-0"
          >
            {/* Timeline dot */}
            <div
              className="absolute left-4 md:left-6 w-4 h-4 rounded-full border-2 mt-1.5"
              style={{
                borderColor: "var(--color-primary)",
                background: exp.current ? "var(--color-primary)" : "var(--bg)",
              }}
              aria-hidden="true"
            >
              {exp.current && (
                <span className="absolute inset-0 rounded-full animate-ping bg-primary/40" />
              )}
            </div>

            <div className="card p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span
                        className="px-2 py-0.5 text-xs font-medium rounded-full"
                        style={{
                          background: "rgba(34, 197, 94, 0.1)",
                          color: "#22C55E",
                          border: "1px solid rgba(34, 197, 94, 0.2)",
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2" style={{ color: "var(--color-primary-light)" }}>
                    <Building2 size={14} />
                    <span className="text-sm font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: "var(--color-primary)" }}
                    />
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <span className="tech-badge">{exp.type}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
