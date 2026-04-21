import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aamod Bhatt — AI/ML Engineer",
  description:
    "Portfolio of Aamod Bhatt. AI/ML engineer building production systems, automating workflows, and shipping research into code.",
  keywords: [
    "Aamod Bhatt",
    "AI Engineer",
    "ML Engineer",
    "Machine Learning",
    "Portfolio",
    "Full Stack Developer",
    "PyTorch",
    "LangChain",
    "React",
  ],
  authors: [{ name: "Aamod Bhatt" }],
  openGraph: {
    title: "Aamod Bhatt — AI/ML Engineer",
    description:
      "I build things that think — and occasionally things that work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aamod Bhatt — AI/ML Engineer",
    description:
      "I build things that think — and occasionally things that work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full antialiased noise-overlay">{children}</body>
    </html>
  );
}
