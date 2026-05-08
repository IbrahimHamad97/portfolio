"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Client-side theme provider.
 *
 * Notes:
 * - This is intentionally a small client boundary: the rest of the app can stay
 *   as Server Components by default.
 * - `attribute="class"` lets Tailwind use the `dark:` variant via `.dark`.
 */
export function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

