"use client";

import AdvantagesIcon from "@/icons/advantages";
import CreditCardIcon from "@/icons/creditCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Wrench, Truck, Sparkles, Settings, ArrowRight, ShoppingCart } from "lucide-react";

const EASE = "cubic-bezier(.2,.85,.25,1)";
const DUR = "0.6s";
const TR = `all ${DUR} ${EASE}`;

const rubroCardContent = [
  {
    title: "Día en Ferreterías",
    desc: "Conocé cómo Fidel ordena el stock, los precios y las ventas.",
    badge: "Ferreterías",
    bgImage: "/menu_ferreteria_bg.png",
    href: "/dia-con-fidel-ferreterias"
  },
  {
    title: "Día en Distribuidoras",
    desc: "Seguí pedidos y stock en ruta, todo sincronizado al instante.",
    badge: "Distribuidoras",
    bgImage: "/menu_distribuidora_bg.png",
    href: "/dia-con-fidel-distribuidoras"
  },
  {
    title: "Día en Decoración",
    desc: "Coordiná showroom y tienda online en un mismo lugar.",
    badge: "Decoración",
    bgImage: "/menu_decoracion_bg.png",
    href: "/dia-con-fidel-decoracion"
  },
  {
    title: "Día en Repuestos",
    desc: "Consultá precios, stock y proveedores en segundos.",
    badge: "Repuestos",
    bgImage: "/repuestos.png",
    href: "/dia-con-fidel-ferreterias"
  }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRubroIndex, setActiveRubroIndex] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <>
      {/* Ambient blue glow — visible only when scrolled */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          pointerEvents: "none",
          overflow: "hidden",
          height: 340,
          zIndex: 1,
          opacity: scrolled ? 1 : 0,
          transition: scrolled ? `opacity 0.6s ${EASE}` : "opacity 0.5s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 360,
            borderRadius: "50%",
            filter: "blur(80px)",
            opacity: 0.85,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            left: "50%",
            transform: "translateX(-50%)",
            width: 520,
            height: 180,
            borderRadius: "50%",
            filter: "blur(60px)",
            opacity: 0.85,
          }}
        />
      </div>

      {/* Fixed header wrapper */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 50,
          pointerEvents: "none",
          padding: scrolled ? "12px 24px" : "12px 20px",
          transition: TR,
        }}
      >
        <header
          style={{
            pointerEvents: "auto",
            position: "relative",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            gap: scrolled ? 6 : 16,
            width: "100%",
            maxWidth: scrolled ? 860 : 1600,
            padding: scrolled ? "4px 7px 4px 18px" : "10px 18px",
            borderRadius: scrolled ? 999 : 28,
            background: scrolled
              ? "rgba(255,255,255,0.65)"
              : "rgba(255,255,255,0)",
            backdropFilter: scrolled
              ? "blur(18px) saturate(160%)"
              : "blur(0px) saturate(100%)",
            WebkitBackdropFilter: scrolled
              ? "blur(18px) saturate(160%)"
              : "blur(0px) saturate(100%)",
            border: `1px solid ${scrolled ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0)"}`,
            boxShadow: scrolled
              ? "rgba(0,0,0,0.1) 0px 8px 32px, rgba(255,255,255,0.3) 0px 1px 0px inset, rgba(0,0,0,0.05) 0px -1px 0px inset"
              : "rgba(0,0,0,0) 0px 8px 32px, rgba(255,255,255,0) 0px 1px 0px inset, rgba(0,0,0,0) 0px -1px 0px inset",
            transition: TR,
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <img alt="logo" width={28} height={28} src="/fidel1.svg" />
            <span className="hidden sm:block font-semibold text-[#0b0b0c]">
              Fidel
            </span>
          </Link>

          {/* Nav */}
          <nav
            className="hidden sm:flex items-center gap-0.5 px-0.5"
            style={{ justifySelf: "center", minWidth: 0 }}
          >
            <Link
              href="/#planes"
              onClick={scrollToSection("planes")}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium text-[#2a2b30] rounded-xl hover:bg-black/5 hover:text-black transition-colors whitespace-nowrap group"
            >
              <CreditCardIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
              Planes
            </Link>

            <Link
              href="/#funcionalidades"
              onClick={scrollToSection("funcionalidades")}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium text-[#2a2b30] rounded-xl hover:bg-black/5 hover:text-black transition-colors whitespace-nowrap group"
            >
              <AdvantagesIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
              Funcionalidades
            </Link>

            <Link
              href="/pedidos-web"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium text-[#2a2b30] rounded-xl hover:bg-black/5 hover:text-black transition-colors whitespace-nowrap group"
            >
              <ShoppingCart className="size-4 transition-transform group-hover:-translate-x-0.5" />
              Pedidos Web
            </Link>

            {/* Rubros dropdown */}
            <NavigationMenu
              value={menuOpen ? "rubros" : ""}
              onValueChange={(v) => {
                setMenuOpen(!!v);
              }}
            >
              <NavigationMenuList>
                <NavigationMenuItem value="rubros">
                  <NavigationMenuTrigger className="text-[13.5px] px-3.5 py-2 bg-transparent hover:bg-black/5 text-[#2a2b30] hover:text-black gap-1.5 font-medium rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <rect width="7" height="7" x="3" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="14" rx="1" />
                      <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                    Rubros
                    <span className="ml-0.5 px-1.5 py-1 rounded-md bg-gradient-to-r from-[#19ff19] to-[#19ff19] text-white text-[9px] font-bold leading-none uppercase tracking-wide">
                      Nuevo
                    </span>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <div className="flex w-[min(548px,calc(100vw-32px))] gap-2.5 p-2.5">
                      {/* Left: rubros list */}
                      <ul className="flex flex-col gap-1 flex-1 min-w-0">
                        {[
                          {
                            href: "/ferreterias",
                            icon: <Wrench className="size-4" />,
                            label: "Ferreterías",
                            desc: "Control de stock, listas de precios y ventas rápidas.",
                          },
                          {
                            href: "/distribuidoras",
                            icon: <Truck className="size-4" />,
                            label: "Distribuidoras",
                            desc: "Gestión mayorista y control de pedidos.",
                          },
                          {
                            href: "/casas-de-decoracion",
                            icon: <Sparkles className="size-4" />,
                            label: "Decoración",
                            desc: "Productos decorativos y control por variantes.",
                          },
                          {
                            href: "/casas-de-repuestos",
                            icon: <Settings className="size-4" />,
                            label: "Repuestos",
                            desc: "Precios, stock y proveedores para repuestos.",
                          },
                        ].map(({ href, icon, label, desc }, index) => (
                          <li
                            key={href}
                            onMouseEnter={() => setActiveRubroIndex(index)}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                href={href}
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-zinc-50 transition-colors group"
                              >
                                <span className="flex items-center justify-center size-9 rounded-lg shrink-0 bg-zinc-100 text-zinc-500">
                                  {icon}
                                </span>
                                <div>
                                  <p className="text-sm font-medium text-[#0b0b0c] leading-tight">
                                    {label}
                                  </p>
                                  <p className="text-xs text-zinc-500 mt-0.5 leading-snug">
                                    {desc}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>

                      {/* Divider */}
                      <div className="w-px bg-zinc-100 self-stretch mx-1" />

                      {/* Right: Un día con Fidel panel */}
                      <div className="group relative flex min-h-[248px] w-[216px] shrink-0 flex-col justify-between overflow-hidden rounded-[18px]  bg-[#19232b] p-3.5 shadow-[0_12px_28px_-18px_rgba(0,0,0,0.8)] transition-all duration-300">
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                          style={{
                            backgroundImage: rubroCardContent[activeRubroIndex]?.bgImage
                              ? `url(${rubroCardContent[activeRubroIndex].bgImage})`
                              : "none",
                            backgroundColor: rubroCardContent[activeRubroIndex]?.bgImage ? "transparent" : "#f1f5f9",
                          }}
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,20,0.04)_0%,rgba(7,13,20,0.16)_34%,rgba(7,13,20,0.72)_67%,rgba(7,13,20,0.96)_100%)]"
                        />

                        <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-between gap-8">
                          <span className="self-start rounded-full bg-gradient-to-r from-[#59ff22] via-[#d7ff73] to-[#59ff22] px-2.5 py-1 text-[10px] font-semibold leading-none text-[#17210e] shadow-[0_3px_12px_-6px_rgba(216,255,115,0.9)]">
                            {rubroCardContent[activeRubroIndex]?.badge || "Ferreterías"}
                          </span>

                          <div>
                            <h4 className="text-[17px] font-semibold leading-tight tracking-[-0.02em] text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)]">
                              {rubroCardContent[activeRubroIndex]?.title || "Día en Ferreterías"}
                            </h4>
                            <p className="mt-1.5 text-[12px] leading-[1.35] text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                              {rubroCardContent[activeRubroIndex]?.desc || ""}
                            </p>
                            <Link
                              href={rubroCardContent[activeRubroIndex]?.href || "/dia-con-fidel-ferreterias"}
                              onClick={() => setMenuOpen(false)}
                              className="group/btn mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2.5 text-xs font-bold text-[#10171d] no-underline shadow-[0_8px_18px_-10px_rgba(0,0,0,0.9)] transition-colors hover:bg-[#d8ff73] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#19232b]"
                            >
                              Ver el día
                              <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>

                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

          </nav>

          {/* Actions */}
          <div
            className="flex items-center"
            style={{
              gap: scrolled ? 6 : 10,
              justifySelf: "end",
              flexShrink: 0,
              transition: TR,
            }}
          >
            <Link
              href="#"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-medium text-white bg-[#0b0b0c] hover:bg-[#1a1a1d] rounded-full border border-black whitespace-nowrap flex-shrink-0 transition-colors"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.12), 0 6px 14px -6px rgba(0,0,0,0.45)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="inline">Ingresar</span>
            </Link>
          </div>
        </header>
      </div>
      {/* Blur overlay when menu is open */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          backdropFilter: menuOpen ? "blur(3px)" : "blur(0px)",
          WebkitBackdropFilter: menuOpen ? "blur(3px)" : "blur(0px)",
          background: menuOpen ? "rgba(182, 182, 182, 0.08)" : "rgba(0,0,0,0)",
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "backdrop-filter 0.25s ease, -webkit-backdrop-filter 0.25s ease, background 0.25s ease",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Spacer so content doesn't hide behind the fixed header */}
      <div style={{ height: 80 }} aria-hidden="true" />
    </>
  );
}
