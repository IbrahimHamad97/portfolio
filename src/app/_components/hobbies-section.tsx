import { BookOpen, Clapperboard, Dumbbell, Trophy } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { Container } from "@/app/_components/container";
import { SITE } from "@/app/_lib/site-data";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Per-hobby icon and accent classes.
 * Keep keys in sync with `Hobby["iconKey"]` in `site-data.ts`.
 *
 * Tailwind requires class names to appear *literally* in source for the
 * compiler to pick them up — that's why these are static strings rather
 * than built dynamically.
 */
const HOBBY_ICONS: Record<string, IconType> = {
  esports: Trophy,
  video: Clapperboard,
  books: BookOpen,
  sports: Dumbbell,
};

const HOBBY_ACCENTS: Record<string, { gradient: string; iconClass: string }> = {
  esports: {
    gradient: "from-violet-500/15 via-fuchsia-500/10 to-transparent",
    iconClass: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
  video: {
    gradient: "from-orange-500/15 via-rose-500/10 to-transparent",
    iconClass: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  books: {
    gradient: "from-amber-500/15 via-yellow-500/10 to-transparent",
    iconClass: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  sports: {
    gradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
    iconClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
};

const SPAN_CLASS: Record<2 | 3 | 4, string> = {
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
};

export function HobbiesSection() {
  return (
    <section id="hobbies" className="scroll-mt-8 py-12">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">
          Outside of work
        </h2>
        <p className="mt-2 text-sm text-foreground/70">
          A few things I do for fun.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-6">
          {SITE.hobbies.map((h) => {
            const Icon = HOBBY_ICONS[h.iconKey] ?? Trophy;
            const accent = HOBBY_ACCENTS[h.iconKey] ?? HOBBY_ACCENTS.esports;
            return (
              <article
                key={h.title}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--card)] p-5 transition hover:-translate-y-0.5 ${SPAN_CLASS[h.span]}`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.gradient}`}
                />
                <div className="relative">
                  <span
                    aria-hidden
                    className={`grid h-10 w-10 place-items-center rounded-xl border ${accent.iconClass}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold tracking-tight">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">
                    {h.description}
                  </p>

                  {h.details ? (
                    <dl className="mt-4 space-y-2 text-sm">
                      {h.details.map((d) => (
                        <div
                          key={d.label}
                          className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
                        >
                          <dt className="font-medium text-foreground/85">
                            {d.label}:
                          </dt>
                          <dd className="flex flex-wrap gap-1.5">
                            {d.items.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-foreground/75"
                              >
                                {item}
                              </span>
                            ))}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
