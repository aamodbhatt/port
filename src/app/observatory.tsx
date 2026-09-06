"use client";

import { useState, useSyncExternalStore, type CSSProperties } from "react";
import { projects, skills } from "./portfolio-data";

const destinations = [
  { id: "work", name: "Projects", note: "Things taking shape", x: 75, y: 26 },
  { id: "research", name: "Research", note: "Questions worth chasing", x: 23, y: 28 },
  { id: "about", name: "Experience", note: "Out in the real world", x: 24, y: 75 },
  { id: "skills", name: "Toolkit", note: "Familiar instruments", x: 75, y: 72 },
] as const;

function subscribeHash(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}
function navigate(id: string) {
  window.history.pushState(null, "", `#${id}`);
  window.dispatchEvent(new Event("hashchange"));
}
function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-link observatory-link" href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

export default function Observatory() {
  const hash = useSyncExternalStore(subscribeHash, () => window.location.hash.slice(1), () => "work");
  const active = destinations.find(destination => destination.id === hash) ?? destinations[0];
  const [projectIndex, setProjectIndex] = useState(0);
  const [researchIndex, setResearchIndex] = useState(0);
  const selectedProject = hash === "small-frame" ? 0 : projectIndex;
  const project = projects[selectedProject];
  const chooseProject = (index: number) => {
    setProjectIndex((index + projects.length) % projects.length);
    if (hash === "small-frame") navigate("work");
  };

  return (
    <section className="observatory" aria-labelledby="observatory-title">
      {destinations.map(destination => <span className="orbit-anchor" id={destination.id} key={destination.id} />)}
      <span className="orbit-anchor" id="small-frame" />
      <div className="observatory-heading">
        <div><p className="eyebrow">The observatory</p><h2 id="observatory-title">A few things in my orbit.</h2></div>
        <p>Pick a destination.<br /><span>Curiosity can take it from here.</span></p>
      </div>
      <div className="exploration-layout">
        <div className="orbital-map" role="group" aria-label="Choose a portfolio destination">
          <svg className="orbit-lines" viewBox="0 0 400 400" fill="none" aria-hidden="true">
            <circle cx="200" cy="200" r="136" />
            <circle cx="200" cy="200" r="92" strokeDasharray="2 7" />
            <ellipse cx="200" cy="200" rx="173" ry="66" transform="rotate(-35 200 200)" />
            <path className="orbit-connection" d={`M200 200 L${active.x * 4} ${active.y * 4}`} />
          </svg>
          <div className="orbit-traveler" aria-hidden="true"><i /></div>
          <div className="map-center" aria-hidden="true"><span>ab.</span><small>Always exploring</small></div>
          {destinations.map((destination, i) => (
            <button type="button" key={destination.id} className={`destination destination-${destination.id}`} style={{ "--node-x": `${destination.x}%`, "--node-y": `${destination.y}%` } as CSSProperties} aria-pressed={active.id === destination.id} aria-controls="exploration-panel" onClick={() => navigate(destination.id)}>
              <span className="destination-dot" aria-hidden="true"><i /></span><span className="destination-label">{destination.name}<small>0{i + 1}</small></span>
            </button>
          ))}
          <p className="map-caption"><span className="status-dot" />{active.note}</p>
        </div>

        <div className="exploration-panel" id="exploration-panel" role="region" aria-label={active.name}>
          <p className="sr-only" role="status">{active.name} selected.</p>
          <div hidden={active.id !== "work"}>
            <div className="panel-topline"><p className="eyebrow">Projects / {String(selectedProject + 1).padStart(2, "0")} of 06</p><div className="step-controls"><button type="button" aria-label="Previous project" onClick={() => chooseProject(selectedProject - 1)}>←</button><button type="button" aria-label="Next project" onClick={() => chooseProject(selectedProject + 1)}>→</button></div></div>
            <div key={project.name} className="panel-arrival project-focus">
              <p className="eyebrow accent">{project.category}</p>
              <h3>{project.name}</h3>
              {project.status && <p className="project-status"><span className="status-dot" />{project.status}</p>}
              <p className="panel-copy">{project.description}</p>
              <ul className="skill-chips" aria-label="Project technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              {project.href ? <ExternalLink href={project.href}>{project.name === "TLDRUN" ? "Visit project" : "View on GitHub"}</ExternalLink> : <p className="quiet-note">{project.name === "Small Frame" ? "Still taking shape. More soon." : "Reasoning-chain diagnostics."}</p>}
            </div>
            <div className="project-picker" role="group" aria-label="Choose a project">{projects.map((item, index) => <button type="button" key={item.name} aria-pressed={selectedProject === index} onClick={() => chooseProject(index)}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{item.name === "Recursive Knowledge Engine" ? "Recursive KE" : item.name}</button>)}</div>
          </div>

          <div hidden={active.id !== "research"} className="panel-arrival">
            <div className="panel-topline"><p className="eyebrow">Research / A closer look</p><span className="panel-count">0{researchIndex + 1} / 02</span></div>
            <div className="research-picker" role="group" aria-label="Choose research"><button type="button" aria-pressed={researchIndex === 0} onClick={() => setResearchIndex(0)}>Parameter Golf</button><button type="button" aria-pressed={researchIndex === 1} onClick={() => setResearchIndex(1)}>Video inpainting</button></div>
            {researchIndex === 0 ? <article className="research-focus"><p className="eyebrow accent">Merged open-source contribution</p><h3 className="big-number">1.1179<span>bits per byte</span></h3><p className="panel-copy">Set a benchmark leaderboard record using the Muon optimizer for test-time training. Earlier contributions earned OpenAI compute support for further experiments on 8 NVIDIA H100s.</p><ExternalLink href="https://github.com/openai/parameter-golf/pull/1148">View merged contribution</ExternalLink></article> : <article className="research-focus"><p className="eyebrow accent">IEEE CONECCT 2026 · Accepted</p><h3>Making missing frames feel like they belong.</h3><p className="panel-copy">Co-authored a flow-guided latent diffusion model for real-time video inpainting, with temporally consistent reconstruction across frames.</p><p className="quiet-note">Camera-ready version submitted</p></article>}
          </div>

          <article hidden={active.id !== "about"} className="panel-arrival experience-focus">
            <div className="panel-topline"><p className="eyebrow">Experience / In the field</p></div>
            <p className="eyebrow accent">Dec 2024 — Jan 2026</p><h3>Vitalcep</h3><p className="role">Growth &amp; Automation Engineer <span>· Part-time</span></p><p className="panel-copy">Built an end-to-end Meta Ads automation pipeline with n8n on AWS EC2. Connected creative, campaign, and optimization workflows, handling 10,000+ events a day.</p>
            <dl className="experience-stats"><div><dt>Less setup time</dt><dd>85%</dd></div><div><dt>Improvement in ROAS</dt><dd>2.3×</dd></div><div><dt>Workflow uptime</dt><dd>99.9%</dd></div></dl><ExternalLink href="https://vitalcep.com">Visit Vitalcep</ExternalLink>
          </article>

          <div hidden={active.id !== "skills"} className="panel-arrival toolkit-focus">
            <div className="panel-topline"><p className="eyebrow">Toolkit / Familiar instruments</p></div>
            <h3>The tools behind the work.</h3>
            <dl className="constellation-skills">{skills.map(skill => <div className="skill-group" key={skill.label}><dt><span className="skill-orbit" aria-hidden="true" />{skill.label}</dt><dd><ul className="skill-chips">{skill.value.split(", ").map((item, i) => <li key={item} style={{ animationDelay: `${i * 55}ms` }}>{item}</li>)}</ul></dd></div>)}</dl>
          </div>
        </div>
      </div>
      <div className="observatory-bottom"><span>Different paths. Same curiosity.</span><ExternalLink href="https://github.com/aamodbhatt">More on GitHub</ExternalLink></div>
    </section>
  );
}
