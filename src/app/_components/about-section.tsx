import {
  Cloud,
  Code,
  Database,
  Layers,
  Server,
  Smartphone,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { Container } from "@/app/_components/container";
import { SITE } from "@/app/_lib/site-data";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Map a skill group's `label` to its icon. Falls back to `Code` if a new
 * group is added in `site-data.ts` without a matching icon here.
 */
const GROUP_ICONS: Record<string, IconType> = {
  Languages: Code,
  Frontend: Layers,
  Backend: Server,
  Mobile: Smartphone,
  Databases: Database,
  "Cloud & DevOps": Cloud,
};

export function AboutSection() {
  return (
    <section id="skills" className="scroll-mt-8 py-12">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <p className="mt-2 text-sm text-foreground/70">
          Tools I reach for, grouped by where they fit in the stack.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.skillGroups.map((group) => {
            const Icon = GROUP_ICONS[group.label] ?? Code;
            return (
              <div
                key={group.label}
                className="rounded-2xl border border-white/10 bg-[color:var(--card)] p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-foreground/80"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground/90">
                    {group.label}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/70"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
