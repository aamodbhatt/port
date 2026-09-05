"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeToMotion(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export default function Atmosphere({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribeToMotion, () => window.matchMedia(motionQuery).matches, () => true);
  const root = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const enabled = !paused && !reduced;

  useEffect(() => {
    if (!enabled || !root.current) return;
    const scope = root.current;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("has-entered");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12 });
    scope.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));

    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (!pointerQuery.matches || event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (glow.current) {
          glow.current.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
          glow.current.style.opacity = "1";
        }
      });
    };
    const leave = () => { if (glow.current) glow.current.style.opacity = "0"; };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
    };
  }, [enabled]);

  return (
    <div ref={root} className={`atmosphere ${enabled ? "motion-enabled" : "motion-paused"}`}>
      <div className="shooting-stars" aria-hidden="true"><i /><i /><i /></div>
      <div ref={glow} className="pointer-glow" aria-hidden="true" />
      {children}
      <button className="motion-toggle" type="button" onClick={() => setPaused(value => !value)} disabled={reduced} aria-pressed={!enabled} aria-label={reduced ? "Animations disabled by your reduced motion preference" : enabled ? "Pause animations" : "Resume animations"}>
        <span className="motion-indicator" aria-hidden="true"><i /><i /><i /></span>
        {reduced ? "Reduced motion" : enabled ? "Pause motion" : "Resume motion"}
      </button>
    </div>
  );
}
