"use client";

import { motion } from "framer-motion";
import AdvantagesIcon from "../icons/advantages";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";

export default function Ventajas() {
  return (
    <div className="max-w-7xl xl:max-w-[90rem] mb-8 mx-auto px-4 md:px-3">
      <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <motion.div
          className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <AdvantagesIcon className="size-4 text-[#121212]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Ventajas
          </h2>
        </motion.div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>
      <div className="font-sans">
        <div className="mx-auto">
          <h3
            className="text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 xl:pb-3 tracking-tight"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Aprovecha todas nuestras ventajas
          </h3>
          <h4
            className="text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium md:w-[50%] xl:w-[48%] mx-auto pb-0"
            style={{ fontFamily: "Satoshi" }}
          >
            Todo lo que necesitás para gestionar tu negocio de manera sencilla,
            segura y sin complicaciones, con el mejor respaldo y un equipo para
            ayudarte.
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-4 md:gap-[0.01px]">
            <div className="col-span-1 w-full aspect-square order-1 md:order-none border border-[#e9e9e9d3] rounded-[32px] flex items-center justify-center">
              <div className="p-10 text-center sm:text-center mt-auto">
                <div
                  style={{
                    boxShadow: "0px 4px 6px 4px rgba(180, 156, 197, 0.08)",
                    background:
                      "linear-gradient(140deg, rgba(173, 255, 190, 0.7) 4%, rgba(144, 238, 144, 0.7) 60%, rgba(34, 139, 34, 0.6) 103%)",
                  }}
                  className="inline-flex border-2 border-[#ffffff] items-center justify-center size-16 text-2xl rounded-2xl text-[#393939] font-extrabold mb-4"
                >
                  1
                </div>

                <h2 className="text-[33px] leading-[2.3rem] font-sans font-bold text-gray-800 mb-4">
                  Gestión en la nube, sin límites de lugar ni horario.
                </h2>
                <p className="text-gray-500 text-base">
                  Sin instalaciones, sin descargas, sin complicaciones. Accedé a
                  toda la información desde tu PC, tablet o celular, estés donde
                  estés, las 24 horas.
                </p>
              </div>
            </div>
            <div className="col-span-1 w-full hidden md:flex aspect-square order-4 md:order-none border bg-[#F7F7F7] border-[#e9e9e9d3] rounded-[32px] items-center justify-center">
              <img
                className="w-[26.5rem] mx-auto object-cover mt-20 "
                src="/mesage.png"
                alt=""
              />
            </div>
            <div className="col-span-1 w-full aspect-square order-5 md:order-none border border-[#e9e9e9d3] rounded-[32px] flex items-center justify-center">
              <div className="p-10 text-center sm:text-center mt-auto">
                <div
                  style={{
                    boxShadow: "0px 4px 6px 4px rgba(180, 156, 197, 0.08)",
                    background:
                      "linear-gradient(140deg, rgba(173, 255, 190, 0.7) 4%, rgba(144, 238, 144, 0.7) 60%, rgba(34, 139, 34, 0.6) 103%)",
                  }}
                  className="inline-flex border-2 border-[#ffffff] items-center justify-center size-16 text-2xl rounded-2xl bg-gray-100 text-[#393939] font-extrabold mb-4"
                >
                  3
                </div>
                <h2 className="text-[33px] leading-[2.3rem] font-sans font-bold text-gray-800 mb-4">
                  Actualizaciones automáticas y datos seguros.
                </h2>
                <p className="text-gray-500 text-base">
                  No tenés que perder tiempo instalando versiones nuevas: todo
                  se actualiza automáticamente. Tenemos servidores con las
                  medidas de seguridad necesarias para que trabajes con
                  tranquilidad.
                </p>
              </div>
            </div>
            <div className="col-span-1 w-full aspect-square hidden md:flex order-2 md:order-none border border-[#e9e9e9d3] bg-[#F7F7F7] rounded-[32px] items-center justify-center">
              <img
                className="h-[min(192px,40cqw)] object-cover mt-16"
                src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                alt=""
              />
            </div>
            <div className="col-span-1 w-full aspect-square order-3 md:order-none border border-[#e9e9e9d3] rounded-[32px] flex items-center justify-center">
              <div className="p-10 text-center sm:text-center mt-auto">
                <div
                  style={{
                    boxShadow: "0px 4px 6px 4px rgba(180, 156, 197, 0.08)",
                    background:
                      "linear-gradient(140deg, rgba(173, 255, 190, 0.7) 4%, rgba(144, 238, 144, 0.7) 60%, rgba(34, 139, 34, 0.6) 103%)",
                  }}
                  className="inline-flex border-2 border-[#fff] items-center justify-center size-16 text-2xl rounded-2xl bg-gray-100 text-[#393939] font-extrabold mb-4"
                >
                  2
                </div>
                <h2 className="text-[33px] leading-[2.3rem] tracking-tight font-sans font-bold text-gray-800 mb-4">
                  Un equipo de asesoría real (no bots{" "}
                  <span className="inline-flex">
                    <img
                      src="/emoji.png"
                      className="size-6 translate-y-0.5 ml-2"
                    />
                  </span>
                  )
                </h2>
                <p className="text-gray-500 text-base">
                  Olvídate de respuestas automáticas y chats eternos con bots
                  que no entienden lo que buscás. Hablamos tu idioma y te
                  acompañamos en cada paso con un equipo real, listo para
                  resolver cualquier duda.
                </p>
              </div>
            </div>
            <div className="col-span-1 w-full aspect-square hidden md:flex order-6 md:order-none border bg-[#F7F7F7] border-[#e9e9e9d3] rounded-[32px] items-center justify-center">
              <img
                className="h-[min(192px,40cqw)] object-cover mt-16"
                src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                alt=""
              />
            </div>
          </div>

          {/* <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-[#ffffff] via-[#f8f8f8] to-[#F7F7F7] lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-950 max-lg:text-center">
                    Gestión en la nube, sin límites de lugar ni horario.
                  </p>
                  <p className="mt-2 max-w-lg text-base/6 text-gray-600 max-lg:text-center">
                    Sabemos lo importante que es tener el control de tu negocio
                    en todo momento. Por eso, Fidel funciona 100% en la nube:
                    sin instalaciones, sin descargas, sin complicaciones. Accedé
                    a toda la información desde tu PC, tablet o celular, estés
                    donde estés, las 24 horas.
                  </p>
                </div>
                <div className="@container relative min-h-[20rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>

            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-2xl border border-[#eeeeee] bg-gradient-to-b from-[#ffffff] via-[#f8f8f8] to-[#F7F7F7]"></div>
              <div className="relative flex h-full flex-col overflow-hidden">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-4xl pb-3 font-extrabold tracking-tight text-[#141414] max-lg:text-center">
                    Asesoría personalizada con personas. (no bots{" "}
                    <span className="inline-flex">
                      <img
                        src="/emoji.png"
                        className="size-6 translate-y-0.5"
                      />
                    </span>
                    )
                  </p>

                  <p className="mt-2 max-w-lg text-base/6 text-[#3a3a3a] max-lg:text-center">
                    Olvídate de respuestas automáticas y chats eternos con bots
                    que no entienden lo que buscás. En Fidel, hablamos tu idioma
                    y te acompañamos en cada paso con un equipo real, listo para
                    resolver cualquier duda.
                  </p>
                </div>
                <img
                  className="w-[26.5rem] mx-auto object-cover mt-20 "
                  src="/mesage.png"
                  alt=""
                />
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl ring-1  ring-white/10 max-lg:rounded-b-[2rem]"></div>
            </div>

            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-[#ffffff] via-[#f8f8f8] to-[#F7F7F7] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-4xl pb-3 font-extrabold tracking-tight text-[#141414] max-lg:text-center">
                    Actualizaciones automáticas y todos tus datos seguros
                  </p>
                  <p className="mt-2 max-w-lg text-base/6 text-gray-600 max-lg:text-center">
                    No tenés que preocuparte por actualizaciones ni perder
                    tiempo instalando versiones nuevas: todo se actualiza
                    automáticamente. Además, tenemos servidores con todas las
                    medidas de seguridad, para que trabajes con total
                    tranquilidad.
                  </p>
                </div>
                <img
                  className="h-[min(192px,40cqw)] object-cover mt-16"
                  src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
