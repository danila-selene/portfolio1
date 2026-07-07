"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive web application that streamlines hospital operations including patient registration, doctor scheduling, and medical record management. Focused on improving accessibility and reducing manual workflows.",
    tech: ["React", "Spring Boot", "MySQL", "Hibernate", "Spring Security"],
    features: [
      "Patient registration & records",
      "Doctor scheduling system",
      "Role-based access control",
      "Responsive dashboard UI",
    ],
    color: "#2563EB",
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%)",
  },
  {
    title: "Lost and Found System",
    description:
      "A centralized web platform for managing lost and found items. Users can post item details with images, search by category and location, and communicate efficiently.",
    tech: ["Django", "PostgreSQL", "Python", "HTML/CSS"],
    features: [
      "Image upload for items",
      "Category & location search",
      "User communication system",
      "Admin moderation panel",
    ],
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #8B5CF6 100%)",
  },
  {
    title: "E-Book Store",
    description:
      "A scalable MERN stack application enabling users to browse, manage, and access digital books. Features JWT authentication, secure REST APIs, and responsive UI.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "JWT authentication",
      "Secure REST APIs",
      "Context API state management",
      "Responsive book catalog",
    ],
    color: "#059669",
    gradient: "linear-gradient(135deg, #064E3B 0%, #059669 50%, #10B981 100%)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <span className="section-label">Projects</span>
        <h2 className="section-title">
          Featured{" "}
          <span className="gradient-text">Work</span>
        </h2>
        <p className="section-description mx-auto">
          Each project is a journey in solving real-world problems with clean
          code and thoughtful design.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-8"
      >
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            className="card overflow-hidden group"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Preview Area */}
              <div
                className="relative h-64 lg:h-auto min-h-[280px] flex items-center justify-center overflow-hidden"
                style={{ background: project.gradient }}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute top-8 left-8 w-32 h-32 rounded-2xl border-2 border-white/30 rotate-12"
                    style={{ transform: "rotate(12deg)" }}
                  />
                  <div
                    className="absolute bottom-8 right-8 w-24 h-24 rounded-full border-2 border-white/20"
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-3xl border border-white/10 rotate-45"
                  />
                </div>
                <div className="relative z-10 p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <span className="text-2xl font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-5">
                    <h4
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-1.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: project.color }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:gap-2.5"
                    style={{
                      background: "rgba(37, 99, 235, 0.1)",
                      color: "var(--color-primary-light)",
                      border: "1px solid rgba(37, 99, 235, 0.2)",
                    }}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon size={15} />
                    Source Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:gap-2.5"
                    style={{
                      background: "var(--surface-elevated)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-color)",
                    }}
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
