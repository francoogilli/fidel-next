"use client";

import { useEffect, useRef, useState } from "react";

type IndexItem = {
  id: string;
  label: string;
};

export default function AgreementSidebar({ items }: { items: IndexItem[] }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

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
                className={`-ml-2 block rounded-md px-2 py-1.5 text-[13px] leading-[1.45] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4b8c40] focus-visible:outline-offset-4 ${
                  activeIndex === index
                    ? "bg-[#e9f5e5] font-semibold text-[#315a2b]"
                    : "text-[#69736b] hover:bg-[#f2f6f0] hover:text-[#315a2b]"
                }`}
                href={`#${item.id}`}
                onClick={() => setActiveIndex(index)}
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
