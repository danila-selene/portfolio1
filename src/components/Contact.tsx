"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionWrapper from "./SectionWrapper";

const contactLinks = [
  {
    label: "Email",
    value: "danilaselene@gmail.com",
    href: "mailto:danilaselene@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Danila Selene",
    href: "https://www.linkedin.com/in/danila-selene-025179330/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "danila-selene",
    href: "https://github.com/danila-selene",
    icon: GithubIcon,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Thank you for your message! I will get back to you soon.");
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "var(--surface-elevated)",
    border: "1px solid var(--border-color)",
    borderRadius: "12px",
    color: "var(--text)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <span className="section-label">Contact</span>
        <h2 className="section-title">
          Let&apos;s{" "}
          <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-description mx-auto">
          Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-4">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-5 flex items-center gap-4 group cursor-pointer block"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20"
                style={{ background: "rgba(37, 99, 235, 0.1)" }}
              >
                <Icon size={20} style={{ color: "var(--color-primary-light)" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-xs font-medium uppercase tracking-wider mb-0.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {label}
                </p>
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: "var(--text)" }}
                >
                  {value}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--color-primary-light)" }}
              />
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-5 flex items-center gap-4"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(37, 99, 235, 0.1)" }}
            >
              <MapPin size={20} style={{ color: "var(--color-primary-light)" }} />
            </div>
            <div>
              <p
                className="text-xs font-medium uppercase tracking-wider mb-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                Location
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                  placeholder="Your name"
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                  placeholder="your@email.com"
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-medium uppercase tracking-wider mb-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Subject
              </label>
              <input
                type="text"
                id="contact-subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={inputStyle}
                placeholder="What is this about?"
                onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-medium uppercase tracking-wider mb-2"
                style={{ color: "var(--text-secondary)" }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" as const }}
                placeholder="Tell me about your project or opportunity..."
                onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-primary w-full justify-center"
              id="contact-submit-btn"
              style={{ opacity: sending ? 0.7 : 1 }}
            >
              <Send size={18} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
