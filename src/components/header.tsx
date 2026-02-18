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
import { Wrench, Truck, Sparkles } from "lucide-react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <div
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-700 ${
        showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-transparent w-full">
        <div className="flex items-center justify-center w-full flex-col">
          <div
            className="
              flex items-center justify-between
              bg-[#FCFBF9]/90
              shadow-[0_2px_20px_-2px_rgba(0,0,0,0.04)]
              backdrop-blur-md
              border-2
              border-[rgba(255,255,255,0.7)] 
              w-[95%] sm:min-w-[800px] sm:max-w-[1200px]
              rounded-xl
              px-4 py-2 mt-2 md:mt-4 
              relative
              transition-all duration-300 ease-in-out
            "
          >
            <div className="relative z-10 flex items-center justify-between w-full gap-2">
              {/* LEFT */}
              <div className="flex items-center gap-6">
                <Link className="flex items-center gap-2" href="/">
                  <img
                    alt="logo"
                    width="38"
                    height="38"
                    className="hidden dark:block"
                    src="/fidel1.svg"
                  />
                  <img
                    alt="logo"
                    width="28"
                    height="28"
                    className="block dark:hidden"
                    src="/fidel1.svg"
                  />
                  <span className="hidden sm:block font-semibold">Fidel</span>
                </Link>

                <span className="text-zinc-300">|</span>

                <div className="hidden sm:flex items-center gap-x-0.5">
                  {/* PLANES */}
                  <Link
                    className="text-sm flex justify-center px-3.5 py-1.5 hover:bg-zinc-100 rounded-md items-center gap-x-1 text-zinc-800 hover:text-zinc-900 transition-colors group"
                    href="#"
                    onClick={handleScrollToPlanes}
                  >
                    <CreditCardIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
                    Planes
                  </Link>

                  {/* FUNCIONALIDADES */}
                  <Link
                    className="text-sm px-3.5 py-1.5 hover:bg-zinc-100 rounded-md text-zinc-800 hover:text-zinc-900 transition-colors flex items-center gap-2 group"
                    href="#"
                    onClick={handleScrollToFuncionalidades}
                  >
                    <AdvantagesIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
                    Funcionalidades
                  </Link>

                  {/* RUBROS — SHADCN NAVIGATION MENU */}
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className="
                            text-sm px-3.5 py-1.5
                            bg-transparent
                            hover:bg-zinc-100
                            text-zinc-800
                            hover:text-zinc-900
                            gap-2 font-normal
                          "
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
                            <rect width="7" height="7" x="3" y="3" rx="1" />
                            <rect width="7" height="7" x="14" y="3" rx="1" />
                            <rect width="7" height="7" x="14" y="14" rx="1" />
                            <rect width="7" height="7" x="3" y="14" rx="1" />
                          </svg>
                          Rubros
                        </NavigationMenuTrigger>

                        <NavigationMenuContent className="backdrop-blur-md bg-white/80 border rounded-2xl shadow-lg">
                          <ul className="grid w-[420px] gap-2 p-4 md:grid-cols-2">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/ferreterias"
                                  className="block rounded-md p-3 hover:bg-zinc-100 transition"
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    <Wrench className="size-4 text-zinc-700" />
                                    <span className="font-medium">
                                      Ferretería
                                    </span>
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
                                      Distribuidora
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
                                    Productos decorativos y control por
                                    variantes
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>

              {/* RIGHT */}
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-zinc-300 ">|</span>

                <Link
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-zinc-900 hover:bg-zinc-700 transition-colors"
                  href="#"
                >
                  <span className="text-white text-sm flex items-center gap-2">
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
                    Iniciar sesión
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
