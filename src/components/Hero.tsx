"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download, Eye } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}

function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      <GridPattern />
      <FloatingOrb className="w-96 h-96 bg-primary top-20 -left-48" />
      <FloatingOrb className="w-72 h-72 bg-accent bottom-32 -right-36" delay={3} />
      <FloatingOrb className="w-64 h-64 bg-primary-light top-1/2 left-1/3" delay={5} />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
            style={{
              background: "rgba(37, 99, 235, 0.1)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              color: "var(--color-primary-light)",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Open to Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
            style={{ color: "var(--text)" }}
          >
            Danila Selene
            <span className="gradient-text"> S</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-xl sm:text-2xl font-medium mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Frontend Developer{" "}
            <span style={{ color: "var(--color-primary)" }}>·</span>{" "}
            Java Full Stack Developer
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Building scalable web applications with modern technologies while
            crafting intuitive and engaging user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
              id="hero-view-projects"
            >
              <Eye size={18} />
              View Projects
            </a>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary"
              id="hero-download-resume"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary"
              id="hero-contact"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: GithubIcon, href: "https://github.com/danila-selene", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/danila-selene-025179330/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:danilaselene@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-3 rounded-xl transition-all duration-200 hover:scale-110"
                style={{
                  border: "1px solid var(--border-color)",
                  color: "var(--text-secondary)",
                }}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown
              size={20}
              style={{ color: "var(--text-secondary)", opacity: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
