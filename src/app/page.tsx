"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Outfit, Playfair_Display } from "next/font/google";
import { GithubLogo, LinkedinLogo, ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const outfit = Outfit({ subsets: ["latin"], display: "swap", weight: ["300", "400", "500", "600"] });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], display: "swap" });

type Star = { top: number; left: number; delay: number; duration: number; scale: number };

const ShootingStars = () => {
  const [stars, setStars] = useState<Star[] | null>(null);

  useEffect(() => {
    setStars(
      Array.from({ length: 10 }, () => ({
        top: Math.random() * -10,
        left: 10 + Math.random() * 150,
        delay: Math.random() * 15,
        duration: 3 + Math.random() * 4,
        scale: 0.4 + Math.random() * 0.6,
      })),
    );
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen">
      <style>{`
        .star-container { position: absolute; transform: rotate(135deg); }
        .shooting-star {
          width: 200px; height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.8), transparent);
          border-radius: 999px;
          filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
          animation: shoot 4s ease-out infinite; opacity: 0;
        }
        @keyframes shoot {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          60% { opacity: 0; }
          100% { transform: translateX(1800px); opacity: 0; }
        }
      `}</style>
      {stars?.map((s, i) => (
        <div key={i} className="star-container" style={{ top: `${s.top}%`, left: `${s.left}%` }}>
          <div
            className="shooting-star"
            style={{
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              transform: `scale(${s.scale})`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

const OpticalPane = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative group overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl pointer-events-none transition-all duration-500 group-hover:bg-black/70" />
    <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-white/20" />
    <div className="absolute top-0 left-0 w-4 h-[1px] bg-white/60 group-hover:w-8 transition-all duration-500" />
    <div className="absolute top-0 left-0 w-[1px] h-4 bg-white/60 group-hover:h-8 transition-all duration-500" />
    <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#FF4500]/90 group-hover:w-8 transition-all duration-500" />
    <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-[#FF4500]/90 group-hover:h-8 transition-all duration-500" />
    <div className="relative z-10 w-full h-full p-6 sm:p-8 lg:p-9 flex flex-col">{children}</div>
  </div>
);

const capabilities = [
  { label: "Core ML", items: "PyTorch · Diffusion · LoRA · RLHF" },
  { label: "LLM Stack", items: "Transformers · RAG · LangChain · vLLM" },
  { label: "Infra", items: "AWS · Docker · FastAPI · Vercel" },
  { label: "Data & Ops", items: "Postgres · DuckDB · Pandas · Airflow" },
];

const projects = [
  { t: "FTunePrompt", desc: "experiments comparing LoRA fine-tuning vs prompting.", link: "https://github.com/aamodbhatt/ftuneprompt" },
  { t: "Model Arena", desc: "LLM evaluation platform for side-by-side comparison.", link: "https://github.com/aamodbhatt/model-arena" },
  { t: "TLDRUN", desc: "Research paper-to-code framework for automated pipelines.", link: "https://tldrun.vercel.app/" },
  { t: "Recursive KE", desc: "Recursive retrieval pipeline for multi-hop reasoning.", link: "https://github.com/aamodbhatt/recursive-knowledge-engine" },
];

export default function SoothingPortfolio() {
  return (
    <div
      className={`relative min-h-screen w-full text-neutral-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12 lg:h-screen lg:overflow-hidden ${outfit.className}`}
    >
      {/* Background image — local, optimized */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg-himalayas-night.jpg"
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Gradients for text legibility */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 lg:to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 lg:h-1/2 z-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

      <ShootingStars />

      {/* Main content */}
      <main className="relative z-10 w-full max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-6 xl:gap-8 lg:h-full">
        {/* Left: Identity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:w-[35%] flex flex-col lg:justify-between py-4 lg:py-10 gap-10 lg:gap-0"
        >
          <div className="relative">
            <div className="text-white/60 uppercase tracking-[0.4em] text-[10px] font-medium mb-8 lg:mb-12 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse" />
                System.Active
              </span>
              <span className="text-white/30">·</span>
              <span className="text-white/50">Hyderabad, IN</span>
            </div>

            <h1
              className={`${playfair.className} text-5xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium tracking-tight mb-2 drop-shadow-lg text-white`}
            >
              Aamod<br />
              <span className="text-white/90 italic font-light">Bhatt</span>
            </h1>
            <h2 className="text-lg sm:text-xl xl:text-2xl font-light text-[#FF4500] mb-6 tracking-widest drop-shadow">
              AI / ML ENGINEER
            </h2>

            <div className="h-px w-24 bg-gradient-to-r from-white/30 to-transparent mb-6" />

            <p className="text-white/90 text-base lg:text-base xl:text-lg leading-relaxed font-light max-w-sm drop-shadow">
              I build things that think... and occasionally things that work.
              My focus is on <strong className="font-normal text-white">AI Research</strong>, creating production-ready systems, and automating workflows.
            </p>

            {/* Currently Building */}
            <a
              href="https://github.com/aamodbhatt/cycleflow"
              target="_blank"
              rel="noreferrer"
              className="group mt-6 flex items-start gap-3 max-w-sm"
            >
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#FF4500] shadow-[0_0_10px_#FF4500] animate-pulse shrink-0" />
              <div>
                <div className="text-white/50 uppercase tracking-[0.3em] text-[9px] mb-2 flex items-center gap-2">
                  Currently Building
                  <span className="inline-flex items-center gap-1 text-[#FF4500] tracking-[0.2em] normal-case font-medium text-[11px]">
                    Cycleflow
                    <ArrowUpRight size={11} className="text-[#FF4500]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
                <div className="text-white/75 group-hover:text-white/90 text-sm font-light leading-snug transition-colors">
                  Flow-guided video inpainting with cycle-consistent temporal coherence.
                </div>
              </div>
            </a>
          </div>

          <div className="flex gap-8 items-center border-t border-white/20 pt-6 w-max">
            <a href="https://github.com/aamodbhatt" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/60 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <GithubLogo size={26} weight="light" />
            </a>
            <a href="https://linkedin.com/in/aamodbhatt" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <LinkedinLogo size={26} weight="light" />
            </a>
            <a href="mailto:bhatt.aamod@gmail.com" aria-label="Email" className="text-white/60 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <EnvelopeSimple size={26} weight="light" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download="Aamod-Bhatt-Resume.pdf"
              className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-[#FF4500] transition-colors border-l border-white/20 pl-5 font-medium"
            >
              Résumé ↗
            </a>
          </div>
        </motion.div>

        {/* Right: Info grid */}
        <div className="lg:w-[65%] flex flex-col gap-5 xl:gap-7 lg:min-h-0 lg:pl-10 lg:border-l border-white/20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex-1 flex flex-col sm:flex-row gap-5 xl:gap-7 lg:min-h-0"
          >
            {/* Experience */}
            <OpticalPane className="flex-[3]">
              <div className="text-white/60 text-[10px] tracking-[0.3em] uppercase mb-6 lg:mb-8">Recent Experience</div>

              <a
                href="https://vitalcep.com"
                target="_blank"
                rel="noreferrer"
                className="block mb-6 lg:mb-8 group/logo w-max"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-[#FF4500]/20 blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                  <Image
                    src="/vitalcep-logo.png"
                    alt="Vitalcep"
                    width={220}
                    height={88}
                    priority
                    className="relative h-14 sm:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_4px_20px_rgba(255,69,0,0.25)] transition-transform duration-500 group-hover/logo:scale-[1.03]"
                  />
                </div>
              </a>

              <div className="text-[#FF4500] font-medium tracking-wide text-xs sm:text-sm uppercase mb-3">Growth &amp; Automation Lead</div>
              <p className="text-white/80 font-light leading-relaxed text-sm max-w-sm">
                Built an end-to-end Meta Ads automation pipeline managing 10k+ events daily.
                Drastically cut manual setup time and improved ROAS metrics by 2.3x.
              </p>
            </OpticalPane>

            {/* Capabilities */}
            <OpticalPane className="flex-[2]">
              <div className="text-white/60 text-[10px] tracking-[0.3em] uppercase mb-6 lg:mb-8">Capabilities</div>

              <div className="flex flex-col justify-between flex-1 gap-3">
                {capabilities.map((c, i) => (
                  <div key={c.label}>
                    <div className="group/item">
                      <div className="text-[#FF4500]/80 uppercase text-[9px] tracking-widest mb-1 group-hover/item:text-[#FF4500] transition-colors">
                        {c.label}
                      </div>
                      <div className="text-white/90 font-light text-[13px] xl:text-sm leading-snug">{c.items}</div>
                    </div>
                    {i < capabilities.length - 1 && <div className="h-px w-8 bg-white/20 mt-3" />}
                  </div>
                ))}
              </div>
            </OpticalPane>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex-1 lg:min-h-0"
          >
            <OpticalPane>
              <div className="flex justify-between items-end mb-6 lg:mb-8">
                <div className="text-white/60 text-[10px] tracking-[0.3em] uppercase">Selected Works</div>
                <div className="text-white/40 text-[10px] tracking-widest">/04</div>
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 lg:gap-y-6 lg:overflow-y-auto pr-2 no-scrollbar">
                {projects.map((p, i) => (
                  <a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex flex-col items-start border-l border-white/20 pl-4 hover:border-[#FF4500] transition-colors py-1"
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <h4 className="text-base font-medium text-white group-hover:text-[#FF4500] transition-colors">{p.t}</h4>
                      <ArrowUpRight
                        size={14}
                        className="text-white/0 group-hover:text-[#FF4500] transition-all -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"
                      />
                    </div>
                    <p className="text-white/70 font-light text-xs leading-relaxed line-clamp-2">{p.desc}</p>
                  </a>
                ))}
              </div>
            </OpticalPane>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
