import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { jobs } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Mladen Bajić",
    "Mladen Bajic",
    "Full Stack Engineer",
    "Team Lead",
    "AI-first applications",
    "Frontend architecture",
    "React",
    "Next.js",
    "Vue",
    "Nuxt",
    "Go",
    "Micro frontends",
    "Novi Sad",
    "Serbia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    firstName: "Mladen",
    lastName: "Bajić",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      alternateName: "Mladen Bajic",
      url: site.url,
      image: `${site.url}/mladen-bajic.jpg`,
      email: `mailto:${site.email}`,
      jobTitle: "Full Stack Engineer & Team Lead",
      description: site.description,
      worksFor: { "@type": "Organization", name: jobs[0].company },
      address: { "@type": "PostalAddress", addressLocality: site.location.city, addressCountry: "RS" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Faculty of Technical Sciences, University of Novi Sad",
      },
      knowsAbout: ["Full stack development", "Frontend architecture", "AI-first applications", "Micro frontends", "React", "Next.js", "Vue.js", "Nuxt", "Go"],
      knowsLanguage: ["sr", "en", "es"],
      sameAs: [site.github, site.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/jetbrains-mono-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Marks JS as available before paint, so scroll-reveal never hides content for no-JS visitors or crawlers */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
