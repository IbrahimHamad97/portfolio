import { Mail, Phone } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { Container } from "@/app/_components/container";
import { GithubIcon, LinkedinIcon } from "@/app/_components/brand-icons";
import { SITE } from "@/app/_lib/site-data";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Map a social link label to an icon component.
 * Falls back to `Mail` so the action still renders if a new label is added later.
 */
const SOCIAL_ICONS: Record<string, IconType> = {
  LinkedIn: LinkedinIcon,
  GitHub: GithubIcon,
};

export function ContactSection() {
  const actions: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
    Icon: IconType;
    external?: boolean;
  }[] = [
    {
      label: SITE.email,
      href: `mailto:${SITE.email}`,
      variant: "primary",
      Icon: Mail,
    },
    {
      label: SITE.phone,
      href: `tel:${SITE.phone.replace(/\s/g, "")}`,
      variant: "secondary",
      Icon: Phone,
    },
    ...SITE.socialLinks.map((s) => ({
      label: s.label,
      href: s.href,
      variant: "secondary" as const,
      Icon: SOCIAL_ICONS[s.label] ?? Mail,
      external: true,
    })),
  ];

  return (
    <section id="contact" className="scroll-mt-8 py-12">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-3 max-w-prose text-sm leading-7 text-foreground/70">
            Reach out by email or phone, or connect on LinkedIn or GitHub.
          </p>
          <div className="mt-6 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            {actions.map(({ Icon, ...a }) => (
              <a
                key={a.href}
                href={a.href}
                {...(a.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={
                  a.variant === "primary"
                    ? "inline-flex h-11 min-w-[10rem] items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90"
                    : "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-foreground/80 hover:bg-white/10 hover:text-foreground"
                }
              >
                <Icon className="h-4 w-4" aria-hidden />
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
