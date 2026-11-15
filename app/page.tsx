import { Effects } from "@/components/Effects";
import { Icon } from "@/components/Icon";
import { focusAreas, highlights, jobs, languages, sideWork, thesis } from "@/lib/content";
import { site } from "@/lib/site";

const sections = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "thesis", label: "thesis" },
  { id: "contact", label: "contact" },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="glow" aria-hidden="true" />
      <Effects />

      <div className="shell">
        <header className="side intro">
          <p className="prompt">
            ~/mladen-bajic $ <span className="typed">whoami</span>
            <span className="cursor" aria-hidden="true">
              ▍
            </span>
          </p>
          <h1 className="name">Mladen Bajić</h1>
          <p className="role">Full Stack Engineer &amp; Team Lead</p>
          <p className="tagline">
            Engineering judgment first, AI wherever it multiplies it. I lead teams that build scalable, AI-first full stack
            applications.
          </p>
          <nav className="nav" aria-label="Sections">
            {sections.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} aria-current="false">
                <span>
                  <span className="num">0{i + 1}.</span> {s.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="actions">
            <a className="btn" href={site.github} {...ext}>
              <Icon name="github" />
              GitHub
            </a>
            <a className="btn" href={site.linkedin} {...ext}>
              <Icon name="linkedin" />
              LinkedIn
            </a>
            {site.cvUrl ? (
              <a className="btn btn-primary" href={site.cvUrl} download>
                Download CV
              </a>
            ) : (
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                <Icon name="mail" />
                Email me
              </a>
            )}
          </div>
        </header>

        <main id="main" className="content">
          {/* 01 About */}
          <section id="about" className="section intro-late" aria-labelledby="about-h">
            <h2 id="about-h" className="eyebrow">
              01 / About
            </h2>
            <p className="lead">
              I build AI-first products on <span className="accent">solid architecture</span>, where AI amplifies good
              engineering instead of replacing it.
            </p>
            <p className="body">
              As a team lead I own client-side development end to end and work across the whole stack, from React and
              Next.js interfaces to Go services. I pair deep front-end architecture knowledge with AI-driven workflows to
              design features that scale, ship faster and stay maintainable as products grow.
            </p>
            <p className="body">
              Based in Novi Sad, Serbia. I mentor engineers, and I care about open source, frontend CI/CD, cloud and
              thoughtful UI/UX.
            </p>
            <div className="grid">
              {focusAreas.map((f, i) => (
                <div key={f.title} className="card focus" data-reveal style={{ ["--d" as string]: `${i * 0.08}s` }}>
                  <Icon name={f.icon} size={26} stroke="var(--accent)" />
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 02 Experience */}
          <section id="experience" className="section" aria-labelledby="exp-h">
            <h2 id="exp-h" className="eyebrow" data-reveal>
              02 / Experience
            </h2>
            <ol className="jobs">
              {jobs.map((j) => (
                <li key={j.company} className={`job${j.current ? " current" : ""}`} data-reveal>
                  <p className="job-period">{j.period}</p>
                  <div className="job-body">
                    <h3>
                      {j.role} · <span className="accent">{j.company}</span>
                    </h3>
                    <p className="place">{j.place}</p>
                    <p className="summary">{j.summary}</p>
                    <ul className="tags" aria-label="Skills">
                      {j.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* 03 Projects */}
          <section id="projects" className="section" aria-labelledby="proj-h">
            <h2 id="proj-h" className="eyebrow" data-reveal>
              03 / Selected projects
            </h2>
            <p className="sub-eyebrow" data-reveal>
              Highlights
            </p>
            <div className="grid">
              {highlights.map((h, i) => (
                <article key={h.title} className="card feature" data-reveal style={{ ["--d" as string]: `${i * 0.1}s` }}>
                  <div className="card-top">
                    <Icon name={h.icon} size={28} stroke="var(--accent)" />
                    <span className="badge">{h.badge}</span>
                  </div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                  <ul className="tags" aria-label="Technologies">
                    {h.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="sub-eyebrow" style={{ marginTop: 20 }} data-reveal>
              Side work
            </p>
            <div className="grid">
              {sideWork.map((s, i) => (
                <article key={s.title} className="card side-card" data-reveal style={{ ["--d" as string]: `${i * 0.1}s` }}>
                  <div className="card-top">
                    <h3>{s.title}</h3>
                    <a className="ext" href={s.href} {...ext}>
                      {s.label} ↗
                    </a>
                  </div>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* 04 Thesis */}
          <section id="thesis" className="section" aria-labelledby="thesis-h">
            <h2 id="thesis-h" className="eyebrow" data-reveal>
              04 / Bachelor thesis
            </h2>
            <article className="window" data-reveal>
              <div className="window-bar" aria-hidden="true">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="window-title">thesis/micro-frontends.md</span>
              </div>
              <div className="window-body">
                <p className="lang-pill">
                  <Icon name="globe" size={14} />
                  Written in Serbian (Cyrillic) · English abstract included
                </p>
                <h3 className="thesis-title">{thesis.title}</h3>
                <p className="thesis-school">{thesis.school}</p>
                <p className="thesis-summary">{thesis.summary}</p>

                <div className="scores">
                  <p className="scores-label">Lighthouse performance score</p>
                  {thesis.approaches.map((a) => (
                    <div key={a.name} className="score">
                      <div className="score-head">
                        <span>
                          <a href={a.href} {...ext}>
                            {a.name}
                          </a>{" "}
                          <span className="score-note">· {a.note}</span>
                        </span>
                        <span className="mono" aria-label={`Score ${a.score} out of 100`}>
                          {a.score}
                        </span>
                      </div>
                      <div className="track" aria-hidden="true">
                        <div className={`fill fill-${a.tone}`} style={{ ["--w" as string]: a.score / 100 }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="actions">
                  <a className="btn btn-primary" href={site.thesisPdf} {...ext}>
                    <Icon name="file" />
                    Read the full thesis · PDF, Serbian
                  </a>
                  <a className="btn" href={site.github} {...ext}>
                    Source code on GitHub <span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            </article>
          </section>

          {/* 05 Contact */}
          <section id="contact" className="section" aria-labelledby="contact-h" data-reveal>
            <h2 id="contact-h" className="eyebrow">
              05 / Contact
            </h2>
            <p className="contact-title">Building an AI-first product? Let&apos;s make it scale.</p>
            <a className="mail" href={`mailto:${site.email}`}>
              {site.email} →
            </a>
            <footer className="footer">
              <p>{languages}</p>
              <p>© {new Date().getFullYear()} Mladen Bajić</p>
            </footer>
          </section>
        </main>
      </div>
    </>
  );
}
