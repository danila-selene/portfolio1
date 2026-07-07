"use client";

import React from "react";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/danila-selene", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/danila-selene-025179330/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:danilaselene@gmail.com", label: "Email" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border-color)", background: "var(--surface)" }}
      role="contentinfo"
    >
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
              className="flex items-center gap-2 text-lg font-bold tracking-tight mb-3"
              style={{ color: "var(--text)", textDecoration: "none" }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "linear-gradient(135deg, #2563EB, #60A5FA)" }}
              >
                DS
              </span>
              Danila Selene
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Frontend Developer & Java Full Stack Developer.
              Building scalable web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--text)" }}
            >
              Quick Links
            </h4>
            <nav className="space-y-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="block text-sm transition-colors duration-200 hover:text-primary-light"
                  style={{ color: "var(--text-secondary)", textDecoration: "none" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--text)" }}
            >
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-xl transition-all duration-200 hover:scale-110"
                  style={{
                    border: "1px solid var(--border-color)",
                    color: "var(--text-secondary)",
                  }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
        >
          <p>© {new Date().getFullYear()} Danila Selene S. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed & Developed with{" "}
            <Heart size={12} className="text-red-500" fill="currentColor" /> by
            Danila Selene
          </p>
        </div>
      </div>
    </footer>
  );
}
