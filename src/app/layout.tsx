import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aamod Bhatt — Machine Learning Engineer",
  description:
    "Machine learning engineer working on video generation, language models, and production ML systems. Explore research, open-source contributions, and selected projects.",
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
    title: "Aamod Bhatt — Machine Learning Engineer",
    description:
      "Machine learning research, open-source contributions, and working systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aamod Bhatt — Machine Learning Engineer",
    description:
      "Machine learning research, open-source contributions, and working systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
