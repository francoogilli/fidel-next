"use client";

import AdvantagesIcon from "@/icons/advantages";
import CreditCardIcon from "@/icons/creditCard";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    const section = document.getElementById("planes");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    const handleScrollToFuncionalidades = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("funcionalidades");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
                            border 
                            border-[rgba(230,230,230,0.7)] 
                            w-[95%] sm:min-w-[800px] sm:max-w-[1200px]
                            rounded-xl
                            px-4 py-2 mt-2 md:mt-4 
                            relative
                            transition-all duration-300 ease-in-out
                        "
          >
            <div className="relative z-10 flex items-center justify-between w-full gap-2">
              <div className="flex items-center gap-6">
                <Link className="flex items-center gap-2" href="/">
                  <img
                    alt="logo"
                    loading="lazy"
                    width="38"
                    height="38"
                    decoding="async"
                    data-nimg="1"
                    className="hidden dark:block"
                    src="/fidel1.svg"
                  />
                  <img
                    alt="logo"
                    loading="lazy"
                    width="28"
                    height="28"
                    decoding="async"
                    data-nimg="1"
                    className="block dark:hidden"
                    src="/fidel1.svg"
                  />
                  <span className="hidden sm:block font-semibold">Fidel</span>
                </Link>
                <span className="text-zinc-300">|</span>
                <div className="hidden sm:flex items-center gap-x-0.5">
                  <Link
                    className="text-sm flex justify-center px-3.5 py-1.5 hover:bg-zinc-100 rounded-md items-center gap-x-1 text-zinc-800 hover:text-zinc-900 transition-colors group"
                    href="#"
                    onClick={handleScrollToPlanes}
                  >
                    <CreditCardIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
                    Planes
                  </Link>

                  <Link
                    className="text-sm px-3.5 py-1.5 hover:bg-zinc-100 rounded-md text-zinc-800 hover:text-zinc-900  transition-colors flex items-center gap-2 group"
                    href="#"
                    onClick={handleScrollToFuncionalidades}
                  >
                    <AdvantagesIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
                    Funcionalidades
                    {/* <span className="text-orange-500 rounded-md border border-orange-500 px-1 py-0.5 text-xs">
                      Nuevo
                    </span> */}
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-zinc-300 ">|</span>
                <div className="flex items-center justify-end gap-1 flex-1">
                  <div className="flex items-center justify-start md:justify-end gap-1 flex-1">
                    <Link
                      target="_blank"
                      className="hidden group relative md:inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-zinc-900 transition-colors hover:bg-zinc-700 "
                      href="#"
                    >
                      <div className="relative flex items-center gap-2 w-full">
                        <span className="text-white text-sm group-hover:text-white flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
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
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex sm:hidden items-center gap-4">
                <Link
                  className="text-sm flex items-center gap-1 text-zinc-800 hover:text-zinc-900 transition-colors"
                  href="#"
                  onClick={handleScrollToPlanes}
                >
                  <CreditCardIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
                  Planes
                </Link>
                <Link
                  className="text-sm flex items-center gap-1 text-zinc-800 hover:text-zinc-900  transition-colors"
                  href="#"
                  onClick={handleScrollToFuncionalidades}
                >
                  <AdvantagesIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
                  Funcionalidades
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
