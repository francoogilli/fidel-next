"use client";
import { useEffect, useState } from "react";
import CrossMenuIcon from "@/icons/crossMenu";
import MenuHamburgerIcon from "@/icons/menu-hamburger";
import { navLinks } from "@/data/data";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed  top-0 w-full z-40 justify-center items-center bg-white border-b border-[#fcfcfc] transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto w-full max-w-5xl px-6 md:max-w-7xl xl:max-w-[90rem]">
        <div className="bg-white absolute left-0 top-0 z-20 flex w-full flex-col items-center md:hidden">
          <div className="flex w-full items-center px-6 py-4">
            <Link
              href="/"
              className="flex gap-x-2 justify-center items-center auto font-medium"
            >
              <img src="/fidel1.svg" className="w-10" alt="Logo Fidel" />
              Fidel
            </Link>
            <button onClick={toggleMenu} className="flex flex-auto justify-end">
              {isMenuOpen ? <CrossMenuIcon /> : <MenuHamburgerIcon />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="overflow-y-auto overflow-x-hidden h-[calc(100vh-72px)] flex w-full py-4">
              <div className="relative">
                <div className="absolute top-0 left-0 min-h-full px-6 w-screen">
                  <a
                    href="#"
                    className="font-sans bg-zinc-800 tracking-tighter text-[#fff] font-bold inline-flex items-center justify-center border select-none relative cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 bg-slate-3 border-slate-6 text-slate-12 hover:bg-slate-4 dark:hover:bg-slate-4 focus-visible:ring-2 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-4 disabled:hover:bg-slate-4 text-base h-11 pl-4 pr-4 rounded-xl gap-2 mb-4 w-full"
                  >
                    Ingresar
                  </a>
                  <a
                    href="#"
                    className="font-sans bg-[#fafafa] tracking-tighter font-semibold inline-flex items-center justify-center border select-none relative cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 bg-slate-3 border-slate-6 text-slate-12 hover:bg-slate-4 dark:hover:bg-slate-4 focus-visible:ring-2 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-4 disabled:hover:bg-slate-4 text-base h-11 pl-4 pr-4 rounded-xl gap-2 mb-4 w-full"
                  >
                    Conocer planes
                  </a>
                  <ul className="mt-4">
                    {navLinks.map((link, index) => (
                      <li
                        key={link.href}
                        className={`mb-4 ${
                          index < navLinks.length - 1
                            ? "border-b border-zinc-200"
                            : ""
                        } pb-4`}
                      >
                        <Link
                          href={link.href}
                          className="block md:text-base font-medium text-slate-900"
                          onClick={closeMenu}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mx-auto hidden pt-1 h-[58px] w-full items-center justify-between transition duration-500 ease-in-out md:flex">
          <div className="flex lg:w-[225px]">
            <Link
              href="/"
              className="flex justify-center items-center space-x-2 outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 py-1"
            >
              <img src="/fidel1.svg" className="w-11" alt="Logo Fidel" />
              <p className="text-base font-semibold pt-0.5 text-[#101010]">
                Fidel
              </p>
            </Link>
          </div>
          <div className="relative pr-20">
            <ul className="flex items-center text-[13px] font-medium">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <li className="hover:bg-[#00000007] text-black flex justify-center items-center gap-x-1.5 transition duration-300 cursor-pointer border border-none hover:border-[#e7e7e7] px-5 py-2 rounded-xl">
                    {link.icon && (
                      <link.icon className="w-4 pb-0.5" strokeWidth="1.6" />
                    )}
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            <a
              href=""
              className="text-[13px] py-2 px-6 font-normal bg-zinc-800 text-white inline-flex items-center justify-center select-none rounded-xl"
            >
              Ingresar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
