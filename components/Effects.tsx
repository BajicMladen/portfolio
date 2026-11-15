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

    // Active nav link: the last section whose top has passed 35% of the viewport.
    // At the very bottom of the page the last section wins, even if it is too short to scroll that far.
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav a[href^='#']"));
    const sections = links
      .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href")!))
      .filter((s): s is HTMLElement => Boolean(s));
    const setActive = (id: string) =>
      links.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === `#${id}`)));
    let navFrame = 0;
    const updateActive = () => {
      navFrame = 0;
      if (!sections.length) return;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) return setActive(sections[sections.length - 1].id);
      const line = window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const s of sections) if (s.getBoundingClientRect().top <= line) current = s.id;
      setActive(current);
    };
    const onScroll = () => {
      if (!navFrame) navFrame = requestAnimationFrame(updateActive);
    };
    const onNavClick = (e: Event) => {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (href) setActive(href.slice(1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    links.forEach((a) => a.addEventListener("click", onNavClick));
    updateActive();

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
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      links.forEach((a) => a.removeEventListener("click", onNavClick));
      if (navFrame) cancelAnimationFrame(navFrame);
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
