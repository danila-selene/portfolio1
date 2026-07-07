"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl border-b"
            : ""
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(var(--bg-rgb, 15, 23, 42), 0.8)" : "transparent",
          borderColor: scrolled ? "var(--border-color)" : "transparent",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-2 text-lg font-bold tracking-tight"
              style={{ color: "var(--text)" }}
              aria-label="Danila Selene - Home"
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "linear-gradient(135deg, #2563EB, #60A5FA)" }}
              >
                DS
              </span>
              <span className="hidden sm:inline">Danila<span className="text-primary">.</span></span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" role="menubar">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                  style={{
                    color: activeSection === link.href.slice(1) ? "var(--color-primary-light)" : "var(--text-secondary)",
                  }}
                  role="menuitem"
                  aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ background: "rgba(37, 99, 235, 0.1)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-secondary)",
                }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl transition-all duration-200"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-secondary)",
                }}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ top: "64px" }}
          >
            <div
              className="absolute inset-0 backdrop-blur-xl"
              style={{ background: "rgba(var(--bg-rgb, 15, 23, 42), 0.95)" }}
            />
            <nav className="relative p-6 flex flex-col gap-2" role="menu">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block px-4 py-3 text-base font-medium rounded-xl transition-colors"
                  style={{
                    color: activeSection === link.href.slice(1) ? "var(--color-primary-light)" : "var(--text-secondary)",
                    background: activeSection === link.href.slice(1) ? "rgba(37, 99, 235, 0.1)" : "transparent",
                  }}
                  role="menuitem"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
