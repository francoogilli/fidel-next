"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative z-50 w-full max-w-[90rem] mx-auto flex-none text-sm/6 font-semibold text-slate-900">
      <nav
        aria-label="Global"
        className="max-w-container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative flex justify-between items-center py-[1.4rem]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
          <Link className="flex-none text-slate-900" href="/">
            <div className="flex items-center gap-x-2.5">
              <img src="/fidel1.svg" className="w-12" alt="Logo Fidel" />
              <span className="text-xl">Fidel</span>
            </div>
          </Link>
          <Link
            href="#"
            className="group -my-2 ml-6 hidden items-center gap-2 rounded-full bg-[#262626] hover:bg-[#474747] duration-500 px-3 py-2 text-xs text-[#ffffff] ring-1 ring-black/[0.08] ring-inset hover:bg-white/50 hover:ring-black/[0.13] sm:flex md:ml-8  min-[80rem]:flex"
          >
            <svg className="size-4 fill-[#55e700]" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-semibold">¡Conoce lo NUEVO de Fidel!</span>
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              className="fill-slate-900 group-hover:fill-[#efefef]"
            >
            </svg>
            
            <svg
              viewBox="0 0 5 8"
              className="h-2 w-[5px] fill-[#efefef]"
              fillRule="evenodd"
              clipRule="evenodd"
              aria-hidden="true"
            >
              <path d="M.2.24A.75.75 0 0 1 1.26.2l3.5 3.25a.75.75 0 0 1 0 1.1L1.26 7.8A.75.75 0 0 1 .24 6.7L3.148 4 .24 1.3A.75.75 0 0 1 .2.24Z"></path>
            </svg>
          </Link>
          <div className="ml-auto hidden font-sans font-semibold lg:flex lg:items-center">
            <Link href="/">Inicio</Link>
            <Link className="ml-8" href="/funcionalidades">
              Funcionalidades
            </Link>
            <Link className="ml-8" href="/planes">
              Planes
            </Link>
            <Link className="ml-8" href="/contacto">
              Contacto
            </Link>
          </div>

          <button
            type="button"
            className="-my-1 -mr-1 ml-6 flex size-8 items-center justify-center lg:hidden"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open navigation</span>
            <svg viewBox="0 0 24 24" className="size-6 stroke-slate-900">
              <path
                d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div
              className="fixed inset-0 z-50 overflow-hidden lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div
                className="absolute inset-0 bg-slate-900/25 backdrop-blur-xs"
                onClick={() => setIsOpen(false)}
              ></div>
              <div className="fixed inset-0 flex items-start justify-end overflow-y-auto">
                <div className="min-h-full w-[min(20rem,calc(100vw-calc(var(--spacing)*10)))] bg-white ring-1 shadow-2xl ring-black/10 p-6 relative">
                  <button
                    type="button"
                    className="absolute top-5 right-6 flex items-center justify-center size-8"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Cerrar navegación</span>
                    <svg
                      className="h-3.5 w-3.5 stroke-slate-900"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0L14 14M14 0L0 14"></path>
                    </svg>
                  </button>
                  <nav className="divide-y divide-slate-900/10 text-base text-slate-900">
                    <div className="py-6">
                      <Link className="block py-2 font-semibold" href="/">
                        Inicio
                      </Link>
                      <a
                        className="block py-2 font-semibold"
                        href="/funcionalidades"
                      >
                        Funcionalidades
                      </a>
                      <Link className="block py-2 font-semibold" href="/planes">
                        Planes
                      </Link>
                      <Link className="block py-2 font-semibold" href="/contacto">
                        Contacto
                      </Link>
                    </div>
                    <div className="py-6">
                      <Link
                        className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-[#282828] text-white hover:bg-[#1f1f1f] w-full"
                        href="/#"
                      >
                        Ingresar
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          )}

          <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
            <Link href="/login">Sign in</Link>
            <Link
              className="inline-flex justify-center rounded-xl text-sm font-medium py-2.5 px-4 bg-[#282828] text-white hover:bg-[#1f1f1f] -my-2.5 ml-8"
              href="/all-access"
            >
              <span className="flex items-center gap-1">Ingresar</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
