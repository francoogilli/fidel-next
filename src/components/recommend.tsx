"use client";

import ArrowUpIcon from "../icons/arrow-up";
import UsersIcon from "../icons/users";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";

export default function Recommend() {
  return (
    <div className="max-w-7xl xl:max-w-[90rem] mb-8 mx-auto px-4 md:px-3">
      <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
        <GradientLine weight="1.5px" direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2 animation-1">
          <UsersIcon className="size-4 md:size-4 text-[#121212]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Referidos
          </h2>
        </div>
        <ThreeStripesRight />
        <GradientLine weight="1.5px" direction="right" />
      </div>

      <section className="py-16 hidden md:block">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden bg-muted/20 p-8 md:p-12 bg-[#FCF8F2] border border-[#fff0f0]">
            <div className="relative w-full flex justify-center">
              <div className="absolute top-[3.25rem] right-16 rotate-[5deg] blur-[3px] opacity-70">
                <img
                  src="/fidel/coin3.png"
                  alt=""
                  className="size-20"
                  style={{ animation: "levitate 40s ease infinite" }}
                />
              </div>
              <div className="absolute -top-24 right-0 rotate-[30deg]">
                <img
                  src="/fidel/coin2.png"
                  alt=""
                  className="size-32"
                  style={{ animation: "levitate 40s ease infinite" }}
                />
              </div>
              <div className="absolute -top-10 right-52 rotate-[30deg]">
                <img
                  src="/fidel/coin3.png"
                  alt=""
                  className="size-20 blur-[3px]"
                  style={{ animation: "levitate 33s ease infinite" }}
                />
              </div>
              <div className="absolute top-36 right-24">
                <img
                  src="/fidel/coin3.png"
                  alt=""
                  className="size-24"
                  style={{ animation: "levitate 34s ease infinite" }}
                />
              </div>
              <div className="absolute top-32 -right-14 -rotate-[20deg]">
                <img
                  src="/fidel/coin4.png"
                  alt=""
                  className="size-20 "
                  style={{ animation: "levitate 30s ease infinite" }}
                />
              </div>
              <div className="absolute -top-7 right-[21rem] -rotate-[250deg]">
                <img
                  src="/fidel/coin4.png"
                  alt=""
                  className="size-20 "
                  style={{ animation: "levitate 39s ease infinite" }}
                />
              </div>
              <div className="absolute -top-7 right-[28rem] rotate-[140deg]">
                <img
                  src="/fidel/coin5.png"
                  alt=""
                  className="size-20 blur-[5px]"
                  style={{ animation: "levitate 33s ease infinite" }}
                />
              </div>
              <div className="absolute top-36 right-[2rem] rotate-[190deg]">
                <img
                  src="/fidel/coin4.png"
                  alt=""
                  className="size-10 blur-[3px]"
                  style={{ animation: "levitate 32s ease infinite" }}
                />
              </div>
              <div className="absolute top-24 right-60 rotate-[240deg]">
                <img
                  src="/fidel/coin5.png"
                  alt=""
                  className="size-28"
                  style={{ animation: "levitate 38s ease infinite" }}
                />
              </div>
              <div className="absolute top-24 right-[25rem] ">
                <img
                  src="/fidel/coin.png"
                  alt=""
                  className="size-[5.5rem] blur-[3px]"
                  style={{ animation: "levitate 35s ease infinite" }}
                />
              </div>
            </div>

            {/* Gradiente de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-muted/50 to-transparent"></div>

            {/* Shadow blanco hacia adentro de izquierda a derecha */}
            <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#FCF8F2] before:via-[#FCF8F2] before:to-transparent"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-sm text-muted-foreground mb-4 px-4 py-1.5 border border-[#2121210c] rounded-full inline-block bg-[#6666660c]">
                  ✨ ¡Novedad!
                </p>
                <h2 className="text-2xl pb-2 font-sans bg-gradient-to-br from-[#000000] to-[#434343] bg-clip-text text-transparent md:text-6xl font-extrabold mb-4 ">
                  ¡Recomendá y ganá!
                </h2>
                <p className="text-sm md:text-base flex justify-start gap-x-1.5 text-muted-foreground max-w-3xl">
                  Recomendá{" "}
                  <span className="inline-flex items-center space-x-1">
                    <img
                      src="/fidel/fidel1.svg"
                      className="w-6"
                      draggable="false"
                      alt="Logo Fidel"
                    />
                    <p className="font-medium">Fidel</p>
                  </span>{" "}
                  a tus amigos y familiares.
                </p>

                <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                  Gana <span className="font-bold">$25.000</span> por cada
                  persona que se suscriba usando tu enlace.
                </p>
              </div>
              <a
                href="https://bit.ly/ProgramaReferidosExternos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex font-sans font-medium justify-center items-center gap-x-2 px-6 py-3 rounded-[14px] bg-[#333333] shadow-xl hover:scale-105 duration-400 text-[#fafafa]"
              >
                Descubrir más
                <ArrowUpIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#FCF8F2] border border-[#ffebebd4] md:bg-gradient-to-br max-w-[78.5rem] xl:max-w-[90rem] mx-4 xl:mx-auto mt-10 mb-10 px-4 space-y-7 rounded-3xl">
        <div className="block md:hidden relative py-4">
          <img
            src="/fidel/coin.png"
            alt=""
            className="mx-auto rotate-[47deg] size-28 mb-6"
          />
          <img
            src="/fidel/coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-16 top-16 transform -translate-y-1/2 size-8"
          />
          <img
            src="/fidel/coin7.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-8 top-16 transform -translate-y-1/2 w-4 rotate-45"
          />
          <img
            src="/fidel/coin5.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-1 top-7 transform -translate-y-1/2 size-9"
          />
          <img
            src="/fidel/coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-14 top-24 transform -translate-y-1/2 w-4 blur-[3px] rotate-[20deg]"
          />
          <img
            src="/fidel/coin.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-0 top-28 transform -translate-y-1/2 size-8"
          />

          <img
            src="/fidel/coin2.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute -left-1 top-8 transform -translate-y-1/2 size-9"
          />
          <img
            src="/fidel/coin82.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-14 top-14 rotate-[175deg] transform -translate-y-1/2 size-8"
          />
          <img
            src="/fidel/coin7.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-4 top-20 transform -translate-y-1/2 w-5"
          />
          <img
            src="/fidel/coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-14 top-24 transform rotate-[-20deg] -translate-y-1/2 size-5 blur-[4px]"
          />
          <img
            src="/fidel/coin3.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute -left-1 top-28 transform -translate-y-1/2 size-8"
          />
          <p className="text-2xl pb-3.5 font-sans font-extrabold text-center bg-gradient-to-br from-[#000000] to-[#434343] bg-clip-text text-transparent">
            ¡Recomendá y ganá!
          </p>
          <p className="text-xs md:text-base flex justify-start gap-x-1.5 text-muted-foreground max-w-3xl">
            Recomendá{" "}
            <span className="inline-flex items-center space-x-1">
              <img
                src="/fidel/fidel1.svg"
                className="w-4"
                draggable="false"
                alt="Logo Fidel"
              />
              <p className="font-medium">Fidel</p>
            </span>{" "}
            a tus amigos y familiares.
          </p>

          <p className="text-xs md:text-base text-muted-foreground max-w-xl">
            Gana <span className="font-bold">$25.000</span> por cada persona que
            se suscriba usando tu enlace.
          </p>
          <a
            href="https://bit.ly/ProgramaReferidosExternos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center mx-auto px-7 py-4 mt-5 w-full text-sm bg-[#212121] text-white gap-x-1.5 font-normal rounded-[0.875rem] text-center"
          >
            Descubrir más
            <ArrowUpIcon className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
