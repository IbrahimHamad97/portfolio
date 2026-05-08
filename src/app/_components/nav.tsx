"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { SITE } from "@/app/_lib/site-data";
import { cn } from "@/app/_lib/cn";
import { Container } from "@/app/_components/container";

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme]);
  const canToggle = resolvedTheme === "dark" || resolvedTheme === "light";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight"
          aria-label="Home"
        >
          <span className="relative grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/5">
            <span className="h-2 w-2 rounded-full bg-foreground/80" />
          </span>
          <span className="text-sm text-foreground/90 group-hover:text-foreground">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {SITE.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 sm:inline-flex"
            href="#contact"
          >
            Let’s talk
          </a>

          <button
            type="button"
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5",
              "text-foreground/80 hover:bg-white/10 hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            )}
            onClick={() => {
              if (!canToggle) return;
              setTheme(isDark ? "light" : "dark");
            }}
            aria-label="Toggle theme"
            aria-disabled={!canToggle}
          >
            {canToggle ? (
              isDark ? (
                <Sun className="h-4 w-4" aria-hidden />
              ) : (
                <Moon className="h-4 w-4" aria-hidden />
              )
            ) : null}
          </button>
        </div>
      </Container>
    </header>
  );
}
