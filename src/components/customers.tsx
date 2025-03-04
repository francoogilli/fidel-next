"use client";

import ThreeStripesLeft from "../icons/threeStripesLeft";
import UsersGroup from "../icons/user-group";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";

export default function Customers() {
  return (
    <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-4 md:px-6 pt-4 ">
      <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2 animation-1">
          <UsersGroup className="size-5 text-[#121212]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Clientes
          </h2>
        </div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>

      <h3
        className="animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8  tracking-tight"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        Se dice de Fidel
      </h3>
      <h4
        className="animation-1 text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[16rem] md:w-[24rem] xl:w-[30rem] mx-auto"
        style={{ fontFamily: "Satoshi" }}
      >
        Descubri cómo Fidel transformo sus negocios.
      </h4>

      <section className="relative isolate overflow-hidden bg-[#FCFBF9] px-6 py-24 sm:py-28 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#FCFBF9] ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12"
            src="https://tailwindui.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
            alt=""
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl/8 font-semibold text-[#2b2b2b] sm:text-2xl/9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto size-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
