import NightSky from "./night-sky";
import Atmosphere from "./atmosphere";
import Observatory from "./observatory";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
    </svg>
  );
}

export default function Portfolio() {
  return (
    <Atmosphere>
      <NightSky />
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

          <div className="hero-footer"><span>Currently building <a href="#small-frame">Small Frame <Arrow /></a></span><a href="#research">Enter my orbit <span aria-hidden="true">↓</span></a></div>
        </section>

        <Observatory />
        <section className="contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">Back on Earth / Make contact</p>
          <div className="contact-row" data-reveal><h2 id="contact-title">Have something<br />interesting in mind?</h2><a className="contact-link" href="mailto:bhatt.aamod@gmail.com">Let’s talk <Arrow diagonal /></a></div>
          <a className="email-link" href="mailto:bhatt.aamod@gmail.com">bhatt.aamod@gmail.com</a>
        </section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Aamod Bhatt</span><div><a href="https://github.com/aamodbhatt" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://linkedin.com/in/aamodbhatt" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="/resume.pdf" download="Aamod-Bhatt-Resume.pdf">Résumé <Arrow diagonal /></a></div><a href="#">Back to top ↑</a></footer>
      <p className="photo-credit">Background: <a href="https://commons.wikimedia.org/wiki/File:Mt._Annapurna_milkyway.jpg" target="_blank" rel="noreferrer">Annapurna · Shedeur Ghale</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a><span> · Cropped and shaded for display.</span></p>
      </div>
    </Atmosphere>
  );
}
