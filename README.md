# Portfolio — Ibrahim Hamad

A single-page personal portfolio built with **Next.js (App Router)** and **Tailwind CSS v4**.
The whole site is data-driven: copy lives in one TypeScript file, and components map over it to render every section.

## Stack

- [**Next.js 16**](https://nextjs.org/) (App Router, Turbopack)
- **React 19** (Server Components by default)
- **TypeScript** strict mode
- [**Tailwind CSS v4**](https://tailwindcss.com/) via `@tailwindcss/postcss`
- [**next-themes**](https://github.com/pacocoursey/next-themes) for class-based dark/light theming
- [**lucide-react**](https://lucide.dev/) for icons (with two inline brand SVGs for GitHub/LinkedIn)
- `clsx` + `tailwind-merge` for safe className composition

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
npm run lint    # ESLint
npm run build   # Production build
npm run start   # Start the production server
```

## Project structure

```
src/app/
├─ _components/                # All UI building blocks
│  ├─ about-section.tsx        # Skills, grouped by category
│  ├─ background-layers.tsx    # Decorative gradient blobs + grid
│  ├─ brand-icons.tsx          # Inline GitHub/LinkedIn SVGs
│  ├─ contact-section.tsx      # Email, phone, social buttons
│  ├─ container.tsx            # Centered max-width wrapper
│  ├─ experience-section.tsx   # Work history with bullet highlights
│  ├─ footer.tsx
│  ├─ hero.tsx                 # Headline + quick facts + education
│  ├─ hobbies-section.tsx      # Bento-style hobbies grid
│  ├─ nav.tsx                  # Sticky header + theme toggle
│  ├─ projects-section.tsx     # Project cards with repo/live icons
│  └─ theme-provider.tsx       # next-themes wrapper (Client Component)
├─ _lib/
│  ├─ cn.ts                    # clsx + tailwind-merge helper
│  └─ site-data.ts             # Single source of truth for all copy
├─ globals.css                 # Tailwind import + design tokens
├─ layout.tsx                  # Root layout, metadata, providers
└─ page.tsx                    # Composes the home page sections
```

Folders prefixed with `_` are private and never become routes — they're a safe place to colocate UI and data alongside `app/`.

## Editing content

Almost everything visible on the site lives in **`src/app/_lib/site-data.ts`**. Components import the `SITE` object and `.map()` over its arrays — there's no hardcoded copy in JSX.

### What's in `site-data.ts`

| Field | What it powers | Where it shows up |
|---|---|---|
| `name`, `title`, `tagline`, `availability` | Hero headline + nav brand | `hero.tsx`, `nav.tsx`, `<title>` |
| `aboutLead` | Hero paragraph | `hero.tsx` |
| `email`, `phone`, `location` | Contact buttons + metadata | `contact-section.tsx` |
| `quickFacts[]` | Right-side card in the hero | `hero.tsx` |
| `education[]` | Education list under quick facts | `hero.tsx` |
| `skillGroups[]` | Skills bento (grouped by category) | `about-section.tsx` |
| `experience[]` | Reverse-chronological work history with bullets | `experience-section.tsx` |
| `projects[]` | Project cards | `projects-section.tsx` |
| `hobbies[]` | Bento-style hobbies grid | `hobbies-section.tsx` |
| `socialLinks[]` | LinkedIn / GitHub buttons in contact | `contact-section.tsx` |
| `nav[]` | Header nav links | `nav.tsx` |
| `projectsIntro` | Subtitle under the Projects heading | `projects-section.tsx` |

### Adding a project

```ts
// src/app/_lib/site-data.ts
projects: [
  {
    title: "My new project",
    description: "Short, factual one-liner.",
    tag: "Next.js",
    repoUrl: "https://github.com/IbrahimHamad97/my-new-project", // optional
    liveUrl: "https://my-new-project.example.com",               // optional
  },
  // …
]
```

The card automatically shows a **GitHub icon** if `repoUrl` is set, a **globe icon** if `liveUrl` is set, both if both are set, and nothing if neither is set.

### Adding a job

```ts
experience: [
  {
    role: "Software Engineer",
    org: "Pandata Tech",
    time: "May 2024 — Present",
    highlights: [
      "Bullet 1 — what you built and the impact.",
      "Bullet 2 — keep these short and specific.",
    ],
  },
  // …
]
```

### Adding a skill group

```ts
skillGroups: [
  {
    label: "DevOps",                 // also wire an icon below
    items: ["Docker", "GitHub Actions"],
  },
  // …
]
```

If you introduce a new group label, add a matching icon in **`about-section.tsx`** under `GROUP_ICONS`. Unmapped labels fall back to the `Code` icon, so it never crashes.

### Adding a hobby

```ts
hobbies: [
  {
    iconKey: "esports",   // see HOBBY_ICONS map in hobbies-section.tsx
    title: "Esports — organizing & broadcasting",
    description: "…",
    details: [            // optional sub-list (renders as labeled chips)
      { label: "Geekdom", items: ["Valorant", "Overwatch", "League of Legends"] },
    ],
    span: 4,              // 2 | 3 | 4 — width on a 6-col grid (md+)
  },
]
```

The `iconKey` type in `site-data.ts` is intentionally a literal union (`"esports" | "video" | "books" | "sports"`) so TypeScript fails the build if you reference an icon that doesn't have a mapping. To add a new key:

1. Extend the `Hobby["iconKey"]` union in `site-data.ts`.
2. Add an entry to `HOBBY_ICONS` and `HOBBY_ACCENTS` in `hobbies-section.tsx`.

### Adding a social link

```ts
socialLinks: [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/…" },
  { label: "GitHub",   href: "https://github.com/…" },
  { label: "X",        href: "https://x.com/…" }, // would need an X icon
]
```

The contact section maps each label to an icon via `SOCIAL_ICONS` in `contact-section.tsx`. New labels fall back to the mail icon — add a mapping for a proper icon.

## Theming

- `next-themes` toggles a `.dark` class on `<html>` (`attribute="class"` mode).
- Design tokens are CSS variables in **`src/app/globals.css`**:
  - `--background`, `--foreground`, `--card`, `--card-border`
  - The `.dark:root` override defines the dark palette.
- Tailwind utilities consume those variables (e.g. `bg-background`, `text-foreground`), so the manual toggle in the navbar always wins over the OS preference.
- Smooth scroll + reduced-motion handling and a custom `:focus-visible` ring also live in `globals.css`.

## Anchor scrolling

Every section uses `scroll-mt-24` so in-page anchor jumps clear the sticky navbar (`h-14` / 56 px) with breathing room. If you change the navbar height, also adjust `scroll-mt-*`.

## Deployment

Built for Vercel (zero-config), but any host that runs Next.js will work:

```bash
npm run build && npm run start
```

For Vercel: push to GitHub and import the repo at <https://vercel.com/new>.

## Notes & follow-ups

- Project descriptions are intentionally short. Replace them with **problem → approach → outcome** sentences when you have time.
- Brand icons (GitHub/LinkedIn) are inlined in `brand-icons.tsx` because lucide removed brand glyphs.
- The Tailwind config is implicit — there's no `tailwind.config.*`. Tailwind v4 picks tokens up via `@theme inline` in `globals.css`.
