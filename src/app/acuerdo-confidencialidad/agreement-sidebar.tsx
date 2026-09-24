"use client";

import { useEffect, useRef, useState } from "react";

type IndexItem = {
  id: string;
  label: string;
};

const HIGHLIGHT_CLASSES = ["bg-[#f9fff5]", "shadow-[0_0_0_12px_#f5faf2]"] as const;

export default function AgreementSidebar({ items }: { items: IndexItem[] }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const highlightFrameRef = useRef<number | null>(null);
  const highlightTimerRef = useRef<number | null>(null);
  const highlightedSectionRef = useRef<HTMLElement | null>(null);

  const clearHighlight = () => {
    if (highlightFrameRef.current !== null) {
      window.cancelAnimationFrame(highlightFrameRef.current);
      highlightFrameRef.current = null;
    }
    if (highlightTimerRef.current !== null) {
      window.clearTimeout(highlightTimerRef.current);
      highlightTimerRef.current = null;
    }
    highlightedSectionRef.current?.classList.remove(...HIGHLIGHT_CLASSES);
    highlightedSectionRef.current = null;
  };

  const highlightAfterScroll = (section: HTMLElement) => {
    let lastScrollY = window.scrollY;
    let stableSince = performance.now();
    const startedAt = stableSince;

    const checkArrival = (now: number) => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) > 0.5) stableSince = now;
      lastScrollY = scrollY;

      const bounds = section.getBoundingClientRect();
      const isVisible = bounds.top < window.innerHeight && bounds.bottom > 0;

      if (isVisible && now - stableSince >= 140) {
        highlightFrameRef.current = null;
        highlightedSectionRef.current = section;
        section.classList.add(...HIGHLIGHT_CLASSES);
        highlightTimerRef.current = window.setTimeout(() => {
          section.classList.remove(...HIGHLIGHT_CLASSES);
          highlightedSectionRef.current = null;
          highlightTimerRef.current = null;
        }, 1000);
      } else if (now - startedAt < 3500) {
        highlightFrameRef.current = window.requestAnimationFrame(checkArrival);
      } else {
        highlightFrameRef.current = null;
      }
    };

    highlightFrameRef.current = window.requestAnimationFrame(checkArrival);
  };

  useEffect(() => () => {
    if (highlightFrameRef.current !== null) {
      window.cancelAnimationFrame(highlightFrameRef.current);
    }
    if (highlightTimerRef.current !== null) {
      window.clearTimeout(highlightTimerRef.current);
    }
    highlightedSectionRef.current?.classList.remove(...HIGHLIGHT_CLASSES);
  }, []);

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.id));
    let frame = 0;

    const updateActive = () => {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.36, 280);
      let current = -1;

      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= readingLine) {
          current = index;
        }
      });

      setActiveIndex(current);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [items]);

  useEffect(() => {
    if (activeIndex < 0) return;

    const nav = navRef.current;
    const link = linksRef.current[activeIndex];
    if (!nav || !link) return;

    const navBox = nav.getBoundingClientRect();
    const linkBox = link.getBoundingClientRect();
    const topMargin = 20;
    const bottomMargin = 20;
    let target = nav.scrollTop;

    if (linkBox.top < navBox.top + topMargin) {
      target += linkBox.top - navBox.top - topMargin;
    } else if (linkBox.bottom > navBox.bottom - bottomMargin) {
      target += linkBox.bottom - navBox.bottom + bottomMargin;
    }

    if (target !== nav.scrollTop) {
      nav.scrollTo({
        top: target,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <aside className="hidden md:block print:hidden">
      <nav
        aria-label="Índice del acuerdo"
        className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto border-l border-[#dfe5dc] pl-5 pr-2"
        ref={navRef}
      >
        <p className="mb-4 text-sm font-semibold text-[#263229]">
          En este acuerdo
        </p>
        <ol className="grid gap-1">
          {items.map((item, index) => (
            <li key={item.id}>
              <a
                aria-current={activeIndex === index ? "location" : undefined}
                className={`-ml-2 block rounded-md px-2 py-1.5 text-[13px] leading-[1.45] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4b8c40] focus-visible:outline-offset-4 ${activeIndex === index
                  ? "bg-[#e9f5e5] font-semibold text-[#315a2b]"
                  : "text-[#69736b] hover:bg-[#f2f6f0] hover:text-[#315a2b]"
                  }`}
                href={`#${item.id}`}
                onClick={(event) => {
                  const section = document.getElementById(item.id);
                  if (!section) return;

                  event.preventDefault();
                  clearHighlight();
                  section.scrollIntoView({
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                      ? "auto"
                      : "smooth",
                    block: "start",
                  });
                  window.history.pushState(null, "", `#${item.id}`);
                  highlightAfterScroll(section);
                }}
                ref={(node) => {
                  linksRef.current[index] = node;
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
