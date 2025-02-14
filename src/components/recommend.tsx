"use client";

import ArrowUpIcon from "../icons/arrow-up";
import UsersIcon from "../icons/users";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";
import Link from "next/link";

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

      <div className="bg-gradient-to-r border border-[#ffebebd4] md:bg-gradient-to-br from-[#f3d1a424] via-[#FCFBF9] to-[#f3d1a424] max-w-[78.5rem] xl:max-w-[90rem] mx-4 xl:mx-auto mt-10 mb-10 px-4 space-y-7 rounded-3xl">
        <div className="hidden lg:block relative p-10">
          <img
            src="coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-0 top-1/2 transform -translate-y-1/2 size-20"
          />
          <img
            src="coin7.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-36 top-32 transform -translate-y-1/2 w-10 rotate-45"
          />
          <img
            src="coin5.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-40 top-12 transform -translate-y-1/2 size-28"
          />
          <img
            src="coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-20 top-52 transform -translate-y-1/2 w-12 blur-[4px] rotate-[20deg]"
          />
          <img
            src="coin.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-44 top-[86%] transform -translate-y-1/2 size-24"
          />
          <img
            src="coin2.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-44 top-10 transform -translate-y-1/2 size-28"
          />
          <img
            src="coin82.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-10 top-20 rotate-[175deg] transform -translate-y-1/2 size-20"
          />
          <img
            src="coin7.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-48 top-36 transform -translate-y-1/2 w-12"
          />
          <img
            src="coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-10 top-52 transform rotate-[-20deg] -translate-y-1/2 size-16 blur-[4px]"
          />
          <img
            src="coin3.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-44 top-[86%] transform -translate-y-1/2 size-24"
          />
          <p style={{ fontFamily: "Plus Jakarta Sans" }} className="text-3xl md:text-6xl xl:text-7xl  pb-5 font-extrabold text-center bg-gradient-to-br from-[#000000] to-[#434343] bg-clip-text text-transparent">
            ¡Referi y gana!
          </p>
          <p className="font-medium text-[#434343] xl:text-lg text-center">
            Recomenda <span className="font-bold text-black">Fidel</span> a tus
            amigos y familiares.
          </p>
          <p className="font-medium text-[#434343] xl:text-lg text-center">
            Gana <span className="font-bold text-black">$25.000</span> por cada
            persona que se suscriba usando tu enlace.
          </p>
          <Link href="/terms">
            <button className="flex justify-center items-center gap-x-2 mx-auto bg-[#212121] text-white font-normal rounded-[1.1rem] text-sm xl:text-base px-7 xl:px-8 py-3 mt-5 text-center border-4 border-[#FFF6D8] hover:border-[#ffc6c6] transition-all duration-700">
              Descubri más
              <ArrowUpIcon className="size-4" />
            </button>
          </Link>
        </div>
        <div className="hidden md:block lg:hidden relative p-8">
          <img
            src="coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-0 top-24 transform -translate-y-1/2 size-10"
          />
          <img
            src="coin7.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-16 top-24 transform -translate-y-1/2 w-6 rotate-45"
          />
          <img
            src="coin5.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-16 top-7 transform -translate-y-1/2 size-[4.5rem]"
          />
          <img
            src="coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-6 top-36 transform -translate-y-1/2 w-8 blur-[4px] rotate-[20deg]"
          />
          <img
            src="coin.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-14 -bottom-11 transform -translate-y-1/2 size-[4.5rem]"
          />
          <img
            src="coin2.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-16 top-6 transform -translate-y-1/2 size-[4.5rem]"
          />
          <img
            src="coin82.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-0 top-16 rotate-[175deg] transform -translate-y-1/2 size-12"
          />
          <img
            src="coin7.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-0 top-32 transform -translate-y-1/2 w-8"
          />
          <img
            src="coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-10 top-32 transform rotate-[-20deg] -translate-y-1/2 size-7 blur-[4px]"
          />
          <img
            src="coin3.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-9 -bottom-12 transform -translate-y-1/2 size-[4.5rem]"
          />
          <p className="text-5xl pb-5 font-bold text-center bg-gradient-to-br from-[#000000] to-[#434343] bg-clip-text text-transparent">
            ¡Referi y gana!
          </p>
          <p className="font-medium text-sm text-[#434343] text-center">
            Recomenda <span className="font-bold text-black">Fidel</span> a tus
            amigos y familiares.
          </p>
          <p className="font-medium text-sm text-[#434343] text-center">
            Gana <span className="font-bold text-black">$25.000</span> por cada
            persona que se suscriba usando tu enlace.
          </p>
          <Link href="/terms">
            <button className="flex justify-center items-center mx-auto text-xs bg-[#212121] gap-x-1.5  text-white font-normal rounded-2xl px-7 py-3 mt-5 text-center">
              Descubri más
              <ArrowUpIcon className="size-4" />
            </button>
          </Link>
        </div>
        <div className="block md:hidden relative py-4">
          <img
            src="coin.png"
            alt=""
            className="mx-auto rotate-[47deg] size-28 mb-6"
          />
          <img
            src="coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-16 top-16 transform -translate-y-1/2 size-8"
          />
          <img
            src="coin7.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-8 top-16 transform -translate-y-1/2 w-4 rotate-45"
          />
          <img
            src="coin5.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-1 top-7 transform -translate-y-1/2 size-9"
          />
          <img
            src="coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-14 top-24 transform -translate-y-1/2 w-4 blur-[3px] rotate-[20deg]"
          />
          <img
            src="coin.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute right-0 top-28 transform -translate-y-1/2 size-8"
          />

          <img
            src="coin2.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute -left-1 top-8 transform -translate-y-1/2 size-9"
          />
          <img
            src="coin82.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-14 top-14 rotate-[175deg] transform -translate-y-1/2 size-8"
          />
          <img
            src="coin7.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-4 top-20 transform -translate-y-1/2 w-5"
          />
          <img
            src="coin4.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute left-14 top-24 transform rotate-[-20deg] -translate-y-1/2 size-5 blur-[4px]"
          />
          <img
            src="coin3.png"
            alt="Moneda"
            draggable="false"
            className="select-none absolute -left-1 top-28 transform -translate-y-1/2 size-8"
          />
          <p className="text-2xl pb-3.5 font-bold text-center bg-gradient-to-br from-[#000000] to-[#434343] bg-clip-text text-transparent">
            ¡Referi y gana!
          </p>
          <p className="font-medium text-xs text-[#434343] text-center pb-2">
            Gana <span className="font-bold text-black">$25.000</span> por cada
            persona que se suscriba usando tu enlace.
          </p>
          <Link href="/terms">
            <button className="flex justify-center items-center mx-auto px-7 py-4 mt-5 w-full text-sm bg-[#212121] text-white gap-x-1.5 font-normal rounded-[0.875rem] text-center">
              Descubri más
              <ArrowUpIcon className="size-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
