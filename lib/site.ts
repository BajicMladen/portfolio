/**
 * Site-wide settings. Change `url` once the domain is live
 * (NEXT_PUBLIC_SITE_URL in Vercel → Settings → Environment Variables overrides it).
 */
export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mladenbajic.dev").replace(/\/$/, ""),
  name: "Mladen Bajić",
  title: "Mladen Bajić · Full Stack Engineer & Team Lead",
  description:
    "Full stack engineer and team lead building scalable, AI-first web applications with React, Next.js, Vue, Nuxt and Go. Based in Novi Sad, Serbia.",
  email: "bajicmladen33@gmail.com",
  location: { city: "Novi Sad", country: "Serbia" },
  github: "https://github.com/BajicMladen",
  linkedin: "https://www.linkedin.com/in/mladen-baji%C4%87-b56a8a180/",
  /** Put a PDF at /public/mladen-bajic-cv.pdf and set this to "/mladen-bajic-cv.pdf" to show the CV button. */
  cvUrl: null as string | null,
  thesisPdf: "/thesis/mladen-bajic-micro-frontends-thesis.pdf",
  accent: "#7CE38B",
};
