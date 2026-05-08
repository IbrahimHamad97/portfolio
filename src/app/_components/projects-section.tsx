import { Globe } from "lucide-react";

import { Container } from "@/app/_components/container";
import { GithubIcon } from "@/app/_components/brand-icons";
import { SITE } from "@/app/_lib/site-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-8 py-12">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-2 text-sm text-foreground/70">
              {SITE.projectsIntro}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-[color:var(--card)] p-5 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold tracking-tight">{p.title}</h3>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-foreground/70">
                  {p.tag}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-6 text-foreground/70">
                {p.description}
              </p>

              {(p.repoUrl || p.liveUrl) && (
                <div className="mt-4 flex items-center gap-2">
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      title="GitHub repository"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live site`}
                      title="Live site"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
                    >
                      <Globe className="h-4 w-4" aria-hidden />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
