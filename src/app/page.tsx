import Image from "next/image";
import Atmosphere from "./atmosphere";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
    </svg>
  );
}

const projects = [
  { name: "Small Frame", category: "Local-first software", description: "An experimental runtime for small, local-first apps, exploring private collaboration through ordinary browser links.", tags: ["Rust", "TypeScript", "WebAssembly"], status: "In progress" },
  { name: "FTunePrompt", category: "Model adaptation", description: "50+ controlled LoRA experiments comparing fine-tuning with prompting. A CLI that helps choose the right adaptation strategy.", tags: ["PyTorch", "PEFT", "LoRA"], href: "https://github.com/aamodbhatt/ftuneprompt" },
  { name: "ChainScope", category: "Reasoning diagnostics", description: "Tracing and analyzing language-model reasoning chains to pinpoint where, and why, they go wrong.", tags: ["Python", "LLMs", "Open source"] },
  { name: "TLDRUN", category: "Research tooling", description: "From a machine learning paper to a runnable starter repository, with dataset loaders, configs, and training pipelines.", tags: ["LangChain", "Python"], href: "https://tldrun.vercel.app/" },
  { name: "Recursive Knowledge Engine", category: "Retrieval & reasoning", description: "An iterative retrieval pipeline that refines its own queries to answer questions requiring multiple reasoning steps.", tags: ["Python", "RAG"], href: "https://github.com/aamodbhatt/recursive-knowledge-engine" },
  { name: "Model Arena", category: "Evaluation", description: "An evaluation platform for comparing language model responses side by side.", tags: ["LLMs", "Evaluation"], href: "https://github.com/aamodbhatt/model-arena" },
];

const skills = [
  { label: "Machine learning", value: "PyTorch, Transformers, LoRA / QLoRA, diffusion models, OpenCV" },
  { label: "Languages", value: "Python, Java, C++, SQL, JavaScript" },
  { label: "Full stack", value: "React, Next.js, Node.js, Express, PostgreSQL" },
  { label: "Infrastructure & tools", value: "Docker, AWS EC2, Google Cloud, Linux, Git, LangChain, LangGraph" },
];

export default function Portfolio() {
  return (
    <Atmosphere>
      <div className="night-backdrop" aria-hidden="true"><Image src="/annapurna-milky-way.jpg" alt="" fill sizes="100vw" priority className="night-image" /><div className="night-shade" /></div>
      <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="Aamod Bhatt, home"><span className="brand-orbit" aria-hidden="true" /> ab.</a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#work">Work</a>
          <a href="mailto:bhatt.aamod@gmail.com">Let’s talk <Arrow diagonal /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Machine learning engineer</p>
            <h1 id="hero-title">Aamod Bhatt<span className="name-period">.</span></h1>
            <p className="hero-heading">Curiosity, translated<br />into working systems.</p>
            <p className="hero-description">I build at the intersection of machine learning research and real-world engineering. Lately, that means video generation, language models, and a lot of experiments.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="text-link" href="/resume.pdf" download="Aamod-Bhatt-Resume.pdf">Download résumé <Arrow diagonal /></a>
            </div>
          </div>

          <div className="hero-footer"><span>Currently building <a href="#small-frame">Small Frame <Arrow /></a></span><a href="#research">A little further down <span aria-hidden="true">↓</span></a></div>
        </section>

        <div className="content-surface">
        <section id="research" className="section" aria-labelledby="research-title">
          <div className="section-heading" data-reveal><p className="eyebrow">01 / Research &amp; open source</p><h2 id="research-title">Small details. Meaningful progress.</h2></div>
          <div className="research-grid">
            <article className="research-item" data-reveal>
              <p className="eyebrow accent">IEEE CONECCT 2026 · Accepted</p>
              <h3>Making missing frames<br />feel like they belong.</h3>
              <p>Co-authored a flow-guided latent diffusion model for real-time video inpainting, with temporally consistent reconstruction across frames.</p>
              <div className="research-footnote">Camera-ready version submitted</div>
            </article>
            <article className="research-item" data-reveal>
              <p className="eyebrow accent">Parameter Golf · Merged contribution</p>
              <h3 className="benchmark">1.1179 <span>bits per byte</span></h3>
              <p>Set a benchmark leaderboard record using the Muon optimizer for test-time training. Earlier contributions earned OpenAI compute support for further experiments on 8 NVIDIA H100s.</p>
              <a className="text-link" href="https://github.com/openai/parameter-golf/pull/1148" target="_blank" rel="noreferrer">View merged contribution <Arrow diagonal /></a>
            </article>
          </div>
        </section>
        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-heading heading-with-link">
            <div><p className="eyebrow">02 / Selected projects</p><h2 id="work-title">Ideas I’ve put to work.</h2></div>
            <a className="text-link" href="https://github.com/aamodbhatt" target="_blank" rel="noreferrer">More on GitHub <Arrow diagonal /></a>
          </div>
          <div className="project-list">
            {projects.map((project, i) => (
              <article className="project" data-reveal key={project.name} id={project.name === "Small Frame" ? "small-frame" : undefined}>
                <span className="project-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div className="project-identity">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.name}<Arrow diagonal /></a> : project.name}</h3>
                  {project.status && <span className="project-status"><span className="status-dot" />{project.status}</span>}
                </div>
                <div className="project-details"><p>{project.description}</p><ul className="tags" aria-label={`${project.name} technologies`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="section-heading" data-reveal><p className="eyebrow">03 / A little background</p><h2 id="about-title">Research-minded. Hands-on.</h2></div>
          <div className="about-grid">
            <div>
              <div className="experience-heading"><h3><a href="https://vitalcep.com" target="_blank" rel="noreferrer">Vitalcep <Arrow diagonal /></a></h3><p className="date">Dec 2024 — Jan 2026</p></div>
              <p className="role">Growth &amp; Automation Engineer <span>· Part-time</span></p>
              <p className="body-copy">Built an end-to-end Meta Ads automation pipeline with n8n on AWS EC2. Connected creative, campaign, and optimization workflows, handling 10,000+ events a day.</p>
              <dl className="experience-stats"><div><dt>Less setup time</dt><dd>85%</dd></div><div><dt>Improvement in ROAS</dt><dd>2.3×</dd></div><div><dt>Workflow uptime</dt><dd>99.9%</dd></div></dl>

            </div>
            <div className="toolkit"><p className="eyebrow">The tools behind the work</p><dl>{skills.map((skill, index) => <div className="skill-group" key={skill.label} data-reveal><dt><span className="skill-orbit" aria-hidden="true" />{skill.label}<span className="skill-index" aria-hidden="true">0{index + 1}</span></dt><dd><ul className="skill-chips">{skill.value.split(", ").map((item, i) => <li key={item} style={{ animationDelay: `${i * 70}ms` }}>{item}</li>)}</ul></dd></div>)}</dl></div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">04 / Make contact</p>
          <div className="contact-row" data-reveal><h2 id="contact-title">Have something<br />interesting in mind?</h2><a className="contact-link" href="mailto:bhatt.aamod@gmail.com">Let’s talk <Arrow diagonal /></a></div>
          <a className="email-link" href="mailto:bhatt.aamod@gmail.com">bhatt.aamod@gmail.com</a>
        </section>
        </div>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Aamod Bhatt</span><div><a href="https://github.com/aamodbhatt" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://linkedin.com/in/aamodbhatt" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="/resume.pdf" download="Aamod-Bhatt-Resume.pdf">Résumé <Arrow diagonal /></a></div><a href="#">Back to top ↑</a></footer>
      <p className="photo-credit">Background: <a href="https://commons.wikimedia.org/wiki/File:Mt._Annapurna_milkyway.jpg" target="_blank" rel="noreferrer">Annapurna · Shedeur Ghale</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a><span> · Cropped and shaded for display.</span></p>
      </div>
    </Atmosphere>
  );
}
