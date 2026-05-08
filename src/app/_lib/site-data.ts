/**
 * Single source of truth for portfolio copy.
 * Prefer editing arrays/objects here — sections map over them in components.
 *
 * Sources: `Ibrahim_Hamad_CV.pdf` (primary wording) + `Ibrahim_Hamd_CV.pdf` (extra project links).
 */

export type Project = {
  title: string;
  description: string;
  tag: string;
  /** GitHub repo URL — shows a GitHub icon link on the card if set. */
  repoUrl?: string;
  /** Deployed/live demo URL — shows a globe icon link on the card if set. */
  liveUrl?: string;
};

export type Experience = {
  role: string;
  org: string;
  time: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type QuickFact = {
  label: string;
  value: string;
};

export type SkillGroup = {
  /** Group title — used to look up its icon in the component. */
  label: string;
  items: readonly string[];
};

export type Hobby = {
  /** Looked up against the icon map in `hobbies-section.tsx`. */
  iconKey: "esports" | "video" | "books" | "sports";
  title: string;
  description: string;
  /** Optional grouped sub-items (e.g., tournaments and titles). */
  details?: readonly { label: string; items: readonly string[] }[];
  /**
   * Card width in a 6-column grid on `md+`. Stacks full-width on small screens.
   * Pairs that sum to 6 lay out cleanly: 2+4, 4+2, 3+3.
   */
  span: 2 | 3 | 4;
};

export const SITE = {
  name: "Ibrahim Hamad",
  /** Shown in metadata / nav context */
  location: "Doha, Qatar",
  email: "ibrahimhamad97@hotmail.com",
  phone: "+974 70318235",
  tagline: "Full-stack Software Engineer",
  availability: "Open to opportunities",
  /** Short lines for hero / meta — from newer CV */
  aboutLead:
    "Building web and mobile products with Angular/React, Flutter, FastAPI, and Node.js. Experienced in delivering high-traffic systems in privacy-sensitive domains.",
  certifications: ["AWS Certified Cloud Practitioner"] as const,

  /**
   * Skills grouped by category. Component maps `label` → lucide icon.
   * Add a new group: append here and (optionally) add an icon mapping in
   * `about-section.tsx`. Unknown labels fall back to a generic icon.
   */
  skillGroups: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Dart"],
    },
    {
      label: "Frontend",
      items: ["React", "Next.js", "Angular", "Tailwind CSS"],
    },
    {
      label: "Backend",
      items: ["Node.js", "FastAPI", "REST APIs"],
    },
    {
      label: "Mobile",
      items: ["Flutter", "React Native"],
    },
    {
      label: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      label: "Cloud & DevOps",
      items: ["AWS", "Git"],
    },
  ] as const satisfies readonly SkillGroup[],

  education: [
    {
      degree: "Computer Science",
      institution: "Qatar University",
      period: "2016 — 2020",
    },
  ] satisfies Education[],

  /**
   * Experience: wording from newer CV; each role has bullet list (no one big HTML string).
   * Ordering matches typical reverse-chronological CV flow.
   */
  experience: [
    {
      role: "Software Engineer",
      org: "Pandata Tech",
      time: "May 2024 — Present",
      highlights: [
        "Built a Flutter mobile application end-to-end for a regulated, privacy-sensitive domain, with offline-first storage (SharedPreferences, Drift) and real-time plus scheduled notifications (FCM, Flutter Local Notifications).",
        "Developed and maintained internal Python (FastAPI) microservices powering company-wide dashboards and APIs, used across the organization daily.",
      ],
    },
    {
      role: "Software Engineer",
      org: "Rafeeq",
      time: "June 2022 — May 2024",
      highlights: [
        "Developed and maintained a customer-facing production ordering website with Angular so users could browse menus and place food orders at scale.",
        "Enhanced internal operations and vendor dashboards for daily employee use.",
        "Implemented and extended backend APIs with Node.js to support new features.",
      ],
    },
    {
      role: "Sales Engineer",
      org: "iHorizons",
      time: "March 2021 — August 2021",
      highlights: [
        "Supported client accounts through calls, emails, and on-site meetings; helped scope needs and coordinate solutions.",
      ],
    },
    {
      role: "Backend Developer (Internship)",
      org: "QCRI",
      time: "May 2020 — July 2020",
      highlights: [
        "Built a Flask backend and implemented Arabic text classification/processing using SVM/NLTK with Twitter API data.",
      ],
    },
    {
      role: "IT Support (Part-time)",
      org: "Qatar University",
      time: "November 2018 — May 2020",
      highlights: [
        "Imaged and deployed user devices; handled domain, email, and network setup and resolved day-to-day hardware and software issues.",
      ],
    },
  ] satisfies Experience[],

  /**
   * Curated selection of GitHub repositories from
   * Descriptions are intentionally short — replace with case-study summaries
   * (problem → approach → outcome) when you have time.
   */
  projects: [
    {
      title: "Rafeeq - Food Delivery Service",
      description: "Customer-facing food delivery website built with Angular.",
      tag: "Angular",
      liveUrl: "https://www.gorafeeq.com/en/home",
    },
    {
      title: "Vacation Planner",
      description:
        "Full-stack vacation planner app built with Next.js and FastAPI.",
      tag: "Full-stack",
      repoUrl: "https://github.com/IbrahimHamad97/vacation_planner-server",
    },
    {
      title: "Movies App (React Native)",
      description: "Mobile movies app built with React Native.",
      tag: "Mobile",
      repoUrl: "https://github.com/IbrahimHamad97/movies_app_react_native",
    },
  ] satisfies Project[],

  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ibrahim-hamad-b0371b184/",
    },
    {
      label: "GitHub",
      href: "https://github.com/IbrahimHamad97",
    },
  ] satisfies SocialLink[],

  nav: [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#contact", label: "Contact" },
  ] satisfies NavItem[],

  /**
   * Hobbies — written in a more casual voice than the work sections.
   * Add or remove freely; the `iconKey` must match a key in
   * `hobbies-section.tsx`'s icon/accent maps.
   */
  hobbies: [
    {
      iconKey: "esports",
      title: "Esports — organizing & broadcasting",
      description:
        "I've worked on a bunch of Qatar-based tournaments — running brackets, casting matches, and producing the broadcast.",
      details: [
        {
          label: "Geekdom",
          items: ["Valorant", "Overwatch", "League of Legends"],
        },
        { label: "EQSL × Qatar Mall", items: ["FIFA"] },
      ],
      span: 4,
    },
    {
      iconKey: "video",
      title: "Video editing",
      description: "Cutting together game clips and short videos.",
      span: 2,
    },
    {
      iconKey: "books",
      title: "Movies, shows & books",
      description:
        "Always working through a new story — film, TV, or a good book.",
      span: 2,
    },
    {
      iconKey: "sports",
      title: "Running, tennis & the occasional gym",
      description:
        "Walking and running most days, tennis when I can find a court, and gym if I find the time.",
      span: 4,
    },
  ] satisfies readonly Hobby[],

  quickFacts: [
    { label: "Location", value: "Doha, Qatar" },
    { label: "Focus", value: "Web, mobile, APIs, regulated domains" },
    { label: "Certification", value: "AWS Cloud Practitioner" },
  ] satisfies QuickFact[],

  /** Section blurbs */
  projectsIntro: "A few selected repositories from my GitHub.",
} as const;
