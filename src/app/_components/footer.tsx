import { Container } from "@/app/_components/container";
import { SITE } from "@/app/_lib/site-data";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <Container className="flex flex-col gap-3 py-10 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p className="text-foreground/50">
          Built with Next.js + Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
