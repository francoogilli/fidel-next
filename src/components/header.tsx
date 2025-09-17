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
                            shadow-[0_2px_20px_-2px_rgba(0,0,0,0.07)]
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
                <span className="text-zinc-300 ">|</span>
                <div className="hidden sm:flex items-center gap-x-0.5">
                  <Link
                    className="text-sm flex justify-center px-3.5 py-1.5 hover:bg-zinc-100 rounded-md items-center gap-x-1 text-zinc-800 hover:text-zinc-900 transition-colors group"
                    href="/"
                  >
                    <CreditCardIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
                    Planes
                  </Link>

                  <Link
                    target="_blank"
                    className="text-sm px-3.5 py-1.5 hover:bg-zinc-100 rounded-md text-zinc-800 hover:text-zinc-900  transition-colors flex items-center gap-2 group"
                    href="#"
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
                    {/* <a
                      target="_blank"
                      className="flex items-center justify-end gap-2 pl-2 pr-0.5 py-1 text-sm font-medium text-zinc-800  rounded-[10px] border-2 border-orange-500/20 hover:border-orange-500/60 transition-all duration-300 group hover:shadow-md"
                      href="https://kokonutui.pro?utm_source=kokonutui.com&amp;utm_medium=header"
                    >
                      <span className="hidden md:flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M15.602 2.4c-.22-.22-.497-.21-.648-.19c-.144.02-.316.068-.48.115l-.125.035l-.103-.064a3.4 3.4 0 0 0-.42-.24c-.149-.064-.4-.138-.666.001c-.26.137-.345.381-.38.537a4 4 0 0 0-.06.487l-.01.127v.01l-.112.093c-.133.11-.272.223-.37.33c-.104.114-.264.327-.223.625c.042.307.265.466.404.544c.126.07.291.13.446.188l.109.04l.04.109c.057.154.118.32.188.446c.077.14.237.362.544.404c.297.04.51-.12.624-.224c.108-.098.221-.236.331-.37l.092-.111h.01l.128-.01c.168-.014.345-.028.487-.06c.155-.035.4-.12.537-.38c.139-.265.065-.518 0-.667a3.4 3.4 0 0 0-.24-.42l-.064-.102l.036-.126a3.5 3.5 0 0 0 .114-.479c.02-.152.03-.428-.19-.648m-.9.9l-.078.022l-.02.006a1 1 0 0 1-.397.047a.9.9 0 0 1-.37-.155l-.018-.011l-.1-.064l-.011.141l-.002.022a1 1 0 0 1-.092.384a1 1 0 0 1-.263.294L13.334 4l-.09.075l.076.029l.02.006c.071.026.23.082.35.202s.176.278.201.35l.007.02l.029.077l.075-.091l.013-.017c.051-.063.151-.188.295-.263a1 1 0 0 1 .384-.092l.022-.002l.14-.01l-.063-.102l-.011-.017a.9.9 0 0 1-.155-.37a1 1 0 0 1 .047-.397l.006-.02z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M10.435 3.17a.75.75 0 1 0-1.28-.782A2.15 2.15 0 0 0 9.47 5.03l.097.098a.76.76 0 0 1 .19.756a.75.75 0 0 0 1.436.434a2.26 2.26 0 0 0-.565-2.25l-.098-.098a.65.65 0 0 1-.095-.8m-2.749.77a.536.536 0 1 0-.758.76a.536.536 0 0 0 .758-.76m10.592 1.664a.75.75 0 0 0-1.471-.294l-.144.72c-.093.463-.427.84-.874.99a2.82 2.82 0 0 0-1.871 2.119l-.144.72a.75.75 0 0 0 1.47.294l.145-.72c.092-.463.426-.84.874-.99a2.82 2.82 0 0 0 1.87-2.12z"
                          ></path>
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M22.524 8.842c.255.554.083 1.183-.384 1.65c-.271.27-.634.393-.957.451c-.331.059-.68.06-.987.04a7 7 0 0 1-1.045-.147l-.046-.01l-.024-.006l-.02-.005l-.006-.001h-.002l.12-.486l-.12.485a.5.5 0 0 1-.366-.365v-.003l-.002-.006l-.005-.02a5 5 0 0 1-.064-.317a7 7 0 0 1-.1-.798a4.2 4.2 0 0 1 .041-.986c.058-.324.18-.687.451-.958c.467-.467 1.096-.64 1.65-.383c.42.194.694.586.796 1.069c.483.103.875.376 1.07.796m-2.928 1.062c.178.031.413.065.664.081c.263.017.525.013.747-.027c.23-.04.361-.109.425-.173c.243-.243.225-.435.184-.524c-.045-.096-.204-.262-.614-.261a.5.5 0 0 1-.502-.502c.002-.41-.165-.57-.261-.614c-.089-.04-.281-.06-.524.184c-.064.064-.133.195-.173.425a3.2 3.2 0 0 0-.027.747c.016.25.05.486.081.664"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M20.33 13.73a1.01 1.01 0 0 1 1.079-.17l.291.127a.75.75 0 0 0 .601-1.375l-.291-.127a2.51 2.51 0 0 0-2.674.422c-.326.29-.801.338-1.179.12l-.212-.123a.75.75 0 0 0-.75 1.299l.212.122a2.51 2.51 0 0 0 2.924-.296m-1.273 1.584a.537.537 0 1 1 .759.76a.537.537 0 0 1-.759-.76m-6.142-8.156a.536.536 0 1 0-.759.759a.536.536 0 0 0 .759-.76m4.241 3.001a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.76"
                          ></path>
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M9.639 6.885c.586.434 1.26 1.11 2.08 1.928l3.467 3.467c.819.82 1.494 1.494 1.928 2.08c.45.606.766 1.279.583 2.054c-.183.776-.767 1.236-1.44 1.577c-.651.33-1.556.632-2.654.998l-5.19 1.73c-1.33.443-2.41.803-3.247.952c-.844.15-1.7.135-2.337-.501c-.636-.636-.651-1.493-.501-2.338c.149-.836.509-1.916.952-3.246l1.73-5.19c.366-1.098.668-2.003.998-2.654c.34-.673.801-1.257 1.577-1.44s1.448.134 2.054.583M8.746 8.09l-.052-.038l-.036.2a50 50 0 0 0-.302 1.882c-.213 1.515-.392 3.347-.3 4.751c.055.85.237 1.95.411 2.857a49 49 0 0 0 .265 1.29l2.635-.88c-.07-.205-.152-.47-.235-.777c-.199-.74-.405-1.758-.405-2.82a11 11 0 0 1 .406-2.864a11 11 0 0 1 .329-1.014l-.76-.76c-.874-.873-1.47-1.467-1.956-1.827m-2.333 2.84a58 58 0 0 1 .541-1.577l-.083.573c-.216 1.533-.415 3.492-.312 5.057c.062.948.259 2.123.435 3.04a51 51 0 0 0 .308 1.484c-1.041.344-1.808.582-2.398.687c-.721.128-.92.009-1.014-.085s-.213-.293-.085-1.014c.127-.715.45-1.69.919-3.096zm6.656 6.656l-.279.093a12 12 0 0 1-.365-1.345a9 9 0 0 1-.198-1.779a9.5 9.5 0 0 1 .418-2.695l1.436 1.437c.874.874 1.468 1.47 1.828 1.956c.354.478.359.686.328.817s-.128.315-.658.583c-.54.274-1.338.542-2.51.933"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text font-medium tracking-tighter">
                          Explore 70+ new components and templates
                        </span>
                      </span>
                      <span className="flex md:hidden items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-party-popper w-4 h-4 text-orange-500"
                          aria-hidden="true"
                        >
                          <path d="M5.8 11.3 2 22l10.7-3.79"></path>
                          <path d="M4 3h.01"></path>
                          <path d="M22 8h.01"></path>
                          <path d="M15 2h.01"></path>
                          <path d="M22 20h.01"></path>
                          <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path>
                          <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path>
                          <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path>
                          <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path>
                        </svg>
                        <span className="text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text font-semibold">
                          Explore
                        </span>
                      </span>
                      <div className="relative inline-flex items-center gap-2 px-1.5 py-0.5 text-sm rounded-md bg-gradient-to-r from-zinc-900 to-zinc-800   mr-1">
                        <div className="flex items-center gap-1">
                          <span className="text-white  group-hover:text-white  tracking-tighter">
                            Kokonut UI Pro
                          </span>
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
                            className="lucide lucide-arrow-up-right w-3.5 h-3.5 text-white/90  group-hover:text-white  transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                            aria-hidden="true"
                          >
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        </div>
                      </div>
                    </a> */}
                    <Link
                      target="_blank"
                      className="hidden group relative md:inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-zinc-900 transition-colors hover:bg-zinc-700 "
                      href="https://github.com/kokonut-labs/kokonutui"
                    >
                      <div className="relative flex items-center gap-2 w-full">
                        <span className="text-white text-sm group-hover:text-white  ">
                          Ingresar
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex sm:hidden items-center gap-4">
                <Link
                  className="text-sm flex items-center gap-1 text-zinc-800 hover:text-zinc-900 transition-colors"
                  href="/"
                >
                  <CreditCardIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
                  Planes
                </Link>
                <Link
                  target="_blank"
                  className="text-sm flex items-center gap-1 text-zinc-800 hover:text-zinc-900  transition-colors"
                  href="https://kokonutui.pro/templates?utm_source=kokonutui.com&amp;utm_medium=header"
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
