"use client";

import AdvantagesIcon from "@/icons/advantages";
import CreditCardIcon from "@/icons/creditCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Wrench, Truck, Sparkles, Settings } from "lucide-react";

const EASE = "cubic-bezier(.2,.85,.25,1)";
const DUR = "0.6s";
const TR = `all ${DUR} ${EASE}`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToPlanes = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToFuncionalidades = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("funcionalidades")
      ?.scrollIntoView({ behavior: "smooth" });
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
              href="#"
              onClick={handleScrollToPlanes}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium text-[#2a2b30] rounded-xl hover:bg-black/5 hover:text-black transition-colors whitespace-nowrap group"
            >
              <CreditCardIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
              Planes
            </Link>

            <Link
              href="#"
              onClick={handleScrollToFuncionalidades}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium text-[#2a2b30] rounded-xl hover:bg-black/5 hover:text-black transition-colors whitespace-nowrap group"
            >
              <AdvantagesIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
              Funcionalidades
            </Link>

            {/* Rubros dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
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
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="backdrop-blur-md bg-white/80 border rounded-2xl">
                    <ul className="grid w-[420px] gap-2 p-4 md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/ferreterias"
                            className="block rounded-md p-3 hover:bg-zinc-100 transition"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Wrench className="size-4 text-zinc-700" />
                              <span className="font-medium">Ferreterías</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Control de stock, listas de precios y ventas
                              rápidas
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/distribuidoras"
                            className="block rounded-md p-3 hover:bg-zinc-100 transition"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Truck className="size-4 text-zinc-700" />
                              <span className="font-medium">
                                Distribuidoras
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Gestión mayorista y control de pedidos
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/casas-de-decoracion"
                            className="block rounded-md p-3 hover:bg-zinc-100 transition"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Sparkles className="size-4 text-zinc-700" />
                              <span className="font-medium">Deco</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Productos decorativos y control por variantes
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/casas-de-repuestos"
                            className="block rounded-md p-3 hover:bg-zinc-100 transition"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Settings className="size-4 text-zinc-700" />
                              <span className="font-medium">Repuestos</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Precios, stock y proveedores para repuestos
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
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

      {/* Spacer so content doesn't hide behind the fixed header */}
      <div style={{ height: 80 }} aria-hidden="true" />
    </>
  );
}
