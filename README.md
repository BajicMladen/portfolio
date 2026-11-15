# Mladen Bajić · Portfolio

Personal site of Mladen Bajić, Full Stack Engineer & Team Lead.

Built with **Next.js 15 (App Router)**, React 19 and TypeScript. Every route is prerendered as static HTML, so it ships almost no JavaScript and scores 100 on Lighthouse (desktop) for performance, accessibility, best practices and SEO.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| What | Where |
| --- | --- |
| Text content (jobs, projects, thesis) | `lib/content.ts` |
| Name, links, email, domain, CV toggle | `lib/site.ts` |
| Page layout | `app/page.tsx` |
| Styles, colors and animations | `app/globals.css` |
| Scroll reveal, active nav, pointer glow | `components/Effects.tsx` |
| SEO: metadata, JSON-LD, Open Graph | `app/layout.tsx`, `app/opengraph-image.tsx` |
| Sitemap, robots, manifest | `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` |
| Thesis PDF | `public/thesis/` |

## Deploy on Vercel

1. In Vercel: **Add New → Project**, import this repository. No settings needed.
2. After you buy the domain, add it under **Project → Settings → Domains** and set the DNS records Vercel shows you.
3. Set the environment variable `NEXT_PUBLIC_SITE_URL` to your domain (for example `https://www.mladenbajic.dev`) and redeploy. Canonical URLs, the sitemap and social previews all use it.
4. Submit `https://YOUR-DOMAIN/sitemap.xml` in Google Search Console.

## Add the CV button

Put the PDF at `public/mladen-bajic-cv.pdf` and set `cvUrl: "/mladen-bajic-cv.pdf"` in `lib/site.ts`. Until then the button reads "Email me".

## Performance and accessibility notes

- Fonts (Inter, JetBrains Mono) are self-hosted and preloaded, with no third-party requests.
- Above-the-fold content never starts invisible, so animations do not delay Largest Contentful Paint.
- Scroll animations only run when JavaScript is available, so crawlers and no-JS visitors still see everything.
- All motion respects `prefers-reduced-motion`.
