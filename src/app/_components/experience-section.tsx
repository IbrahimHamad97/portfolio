import { Container } from "@/app/_components/container";
import { SITE } from "@/app/_lib/site-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-8 py-12">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-6 space-y-4">
          {SITE.experience.map((e) => (
            <div
              key={`${e.org}-${e.time}`}
              className="rounded-2xl border border-white/10 bg-[color:var(--card)] p-5"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="font-semibold tracking-tight">
                  {e.role} · <span className="text-foreground/70">{e.org}</span>
                </div>
                <div className="text-sm text-foreground/60">{e.time}</div>
              </div>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-foreground/70 marker:text-foreground/40">
                {e.highlights.map((line, i) => (
                  <li key={`${e.org}-${i}`}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
