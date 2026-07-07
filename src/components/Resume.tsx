"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Resume() {
  return (
    <SectionWrapper id="resume">
      <div className="text-center mb-12">
        <span className="section-label">Resume</span>
        <h2 className="section-title">
          My{" "}
          <span className="gradient-text">Resume</span>
        </h2>
        <p className="section-description mx-auto">
          Download or view my full resume to learn more about my qualifications and experience.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="card p-10 text-center">
          {/* Resume icon */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(96,165,250,0.15) 100%)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
            }}
          >
            <FileText size={36} style={{ color: "var(--color-primary-light)" }} />
          </div>

          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
            Danila Selene S
          </h3>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            Frontend Developer & Java Full Stack Developer
          </p>

          {/* Resume preview placeholder */}
          <div
            className="rounded-xl p-8 mb-8"
            style={{
              background: "var(--surface-elevated)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div className="space-y-3 max-w-sm mx-auto">
              {[80, 100, 60, 90, 75, 100, 55, 85].map((width, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full"
                  style={{
                    background: "var(--border-color)",
                    width: `${width}%`,
                    marginLeft: i % 3 === 0 ? "0" : "auto",
                    marginRight: i % 3 === 0 ? "auto" : "0",
                  }}
                />
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: "var(--text-secondary)" }}>
              Resume preview placeholder — Upload your resume PDF to enable preview
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="btn-primary"
              id="resume-download-btn"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="resume-open-btn"
            >
              <ExternalLink size={18} />
              Open Resume
            </a>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
