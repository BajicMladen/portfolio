export type Job = {
  period: string;
  role: string;
  company: string;
  place: string;
  summary: string;
  tags: string[];
  current?: boolean;
};

export const focusAreas = [
  {
    icon: "spark",
    title: "AI-first full stack",
    text: "AI built into the product and the workflow, with engineering judgment making the final call.",
  },
  {
    icon: "grid",
    title: "Frontend architecture",
    text: "Component systems and data flow designed to scale with the product and the team behind it.",
  },
  {
    icon: "team",
    title: "Team leadership",
    text: "Owning the client side end to end, setting direction and helping every engineer level up.",
  },
] as const;

export const jobs: Job[] = [
  {
    period: "2025 · Present",
    role: "Team Lead",
    company: "Avantos.ai",
    place: "Remote",
    current: true,
    summary:
      "Leading the entire client side of the product and owning features end to end across the full stack. I design, build and maintain scalable features, evolve a custom fork of a major open-source form library, and keep React UI behavior and Go validation perfectly in sync. Modernized a large Next.js codebase to cut tech debt and speed up the whole team.",
    tags: ["Team lead", "Full stack", "React", "Next.js", "Go"],
  },
  {
    period: "Feb to May 2025",
    role: "Lead Frontend Engineer",
    company: "RTRK (Zyne)",
    place: "Novi Sad, Serbia",
    summary:
      "Primary engineer behind a new energy-sector platform built with Nuxt. Took the MVP from zero to a live presentation at the largest energy fair in four months, with highly positive feedback. Owned the component architecture, data flow, routing, state management and API integration.",
    tags: ["Nuxt", "Vue", "Architecture"],
  },
  {
    period: "2021 to 2025",
    role: "Software Engineer & Project Lead",
    company: "ServalIT",
    place: "Novi Sad, Serbia",
    summary:
      "Built and maintained full stack applications for clients of every size. Designed front-end architectures for scale and performance. As Project Team Lead I worked with clients daily on scope and solutions, ran demos, made the architecture calls and took on the most complex front-end work. Trusted again and again to mentor interns.",
    tags: ["Team lead", "Mentor", "Full stack"],
  },
];

export const highlights = [
  {
    icon: "chart",
    badge: "In production",
    title: "AI platform for wealth advisors",
    text: "A production-grade wealth management app that puts AI to work for financial advisors. I lead the client side and ship scalable features end to end, from complex, validated forms in React to the Go services behind them.",
    tags: ["AI", "React", "Next.js", "Go"],
  },
  {
    icon: "bolt",
    badge: "Secured funding",
    title: "Energy data visualization MVP",
    text: "Led and built a data-intensive visualization tool for one of Europe's largest energy companies. Delivered in four months, presented at the largest energy fair and won funding to continue.",
    tags: ["Nuxt", "Vue", "Data viz", "Lead"],
  },
] as const;

export const sideWork = [
  {
    title: "LONA Wellbeing",
    href: "https://lonawellbeing.com/",
    label: "lonawellbeing.com",
    text: "Website for a concierge lymphatic drainage studio in Hoboken, New Jersey, with treatment pages and online booking.",
  },
  {
    title: "Alfa Konsalting",
    href: "https://alfa-konsalting.com/",
    label: "alfa-konsalting.com",
    text: "Single-page site for an intellectual services agency, fully responsive with scroll-driven animations.",
  },
] as const;

export const thesis = {
  title: "Micro Frontend Architecture: Theory and Application in Web Development",
  school: "Faculty of Technical Sciences, Novi Sad · Information Systems Engineering",
  summary:
    "One e-commerce app, B-World, built three times with React, Vue and Svelte, once for each integration approach. I measured every version with Lighthouse and Chrome DevTools and turned the results into a decision matrix that helps teams pick the right architecture for their product.",
  approaches: [
    {
      name: "Module Federation",
      note: "best performance, 334 KB",
      score: 89,
      href: "https://github.com/mf-micro-frontend",
      tone: "accent",
    },
    {
      name: "Single-SPA",
      note: "most flexible, framework agnostic",
      score: 82,
      href: "https://github.com/single-spa-micro-frontends",
      tone: "light",
    },
    {
      name: "iframe",
      note: "strongest isolation, ideal for legacy systems",
      score: 62,
      href: "https://github.com/BajicMladen/iframe-micro-frontends",
      tone: "muted",
    },
  ],
} as const;

export const languages = "Serbian (native) · English (full professional) · Spanish (elementary)";
