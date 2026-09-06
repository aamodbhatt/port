import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
