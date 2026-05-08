import { Container } from "@/app/_components/container";
import { SITE } from "@/app/_lib/site-data";

export function Hero() {
  return (
    <section className="pb-10 pt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {SITE.availability}
            </p>

            <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {SITE.tagline}
            </h1>

            <p className="mt-5 max-w-prose text-pretty text-lg leading-8 text-foreground/70">
              {SITE.aboutLead}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                See projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-foreground/80 hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[color:var(--card)] p-6 shadow-[0_30px_100px_-60px_rgba(0,0,0,0.6)]">
            <h2 className="text-sm font-semibold text-foreground/80">
              Quick facts
            </h2>
            <dl className="mt-4 space-y-3 text-sm text-foreground/70">
              {SITE.quickFacts.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4"
                >
                  <dt>{row.label}</dt>
                  <dd className="text-right text-foreground/90">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="my-5 h-px bg-white/10" />

            <h3 className="text-sm font-semibold text-foreground/80">
              Education
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-foreground/70">
              {SITE.education.map((e) => (
                <li key={`${e.institution}-${e.period}`}>
                  <span className="font-medium text-foreground/90">
                    {e.degree}
                  </span>
                  <span className="text-foreground/60"> · </span>
                  {e.institution}
                  <span className="block text-xs text-foreground/55">
                    {e.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
