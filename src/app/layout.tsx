import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Danila Selene S | Frontend Developer & Java Full Stack Developer",
  description:
    "Portfolio of Danila Selene S — Frontend Developer and Java Full Stack Developer specializing in React, Spring Boot, and MERN Stack. Building scalable web applications with modern technologies.",
  keywords: [
    "Frontend Developer",
    "Java Full Stack Developer",
    "React Developer",
    "Spring Boot Developer",
    "MERN Stack Developer",
    "Software Engineer Portfolio",
    "Danila Selene",
    "Web Developer",
  ],
  authors: [{ name: "Danila Selene S" }],
  creator: "Danila Selene S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danilaselene.dev",
    title: "Danila Selene S | Frontend Developer & Java Full Stack Developer",
    description:
      "Building scalable web applications with modern technologies while crafting intuitive and engaging user experiences.",
    siteName: "Danila Selene S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danila Selene S | Frontend Developer & Java Full Stack Developer",
    description:
      "Building scalable web applications with modern technologies while crafting intuitive and engaging user experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
