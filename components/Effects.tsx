"use client";

import { useEffect } from "react";

/**
 * All client-side behaviour in one tiny component (no animation library):
 * - reveals [data-reveal] elements as they scroll into view
 * - highlights the nav link of the section currently on screen
 * - moves a soft glow with the pointer on devices that have one
 */
export function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    let revealObserver: IntersectionObserver | undefined;
    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObserver?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
      );
      revealEls.forEach((el) => revealObserver!.observe(el));
    }

    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav a[href^='#']"));
    const sections = links
      .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href")!))
      .filter((s): s is HTMLElement => Boolean(s));
    const navObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = `#${entry.target.id}`;
          links.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === id)));
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => navObserver.observe(s));

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
        document.documentElement.style.setProperty("--my", `${e.clientY}px`);
        frame = 0;
      });
    };
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (finePointer && !reduce) window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      revealObserver?.disconnect();
      navObserver.disconnect();
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
