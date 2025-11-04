"use client";

import React, { useState } from "react";
import GradientLine from "./gradientLine";
import { motion } from "framer-motion";
import { pricingInfo } from "@/data/data";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";
import CreditCardIcon from "@/icons/creditCard";
import ArrowUpIcon from "@/icons/arrow-up";
import { LaurelIcon } from "@/icons/laurel";
import ThunderIcon from "@/icons/thunder";
interface Props {
  viewComparison?: boolean;
}
export default function PricingCard({ viewComparison }: Props) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };
  const [openDescription, setOpenDescription] = useState<{
    cardName: string;
    benefitIndex: number;
  } | null>(null);
  const [openBestOption, setOpenBestOption] = useState<string | null>(null);

  return (
    <div className="border-y-8 border-[#e9e9e9]">
      <div className="w-full bg-[#121212] border-y-8 border-[#313131] text-white">
        <div className="max-w-7xl xl:max-w-[90rem] mx-auto mt-24 mb-0 md:mb-10 px-4">
          {!viewComparison ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center"
            >
              <h3
                className="text-4xl mx-auto w-[20rem] md:w-[45rem] md:leading-[4.5rem] md:text-[4.2rem] font-bold text-center my-8 pb-1 tracking-tight"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Encontra el plan para tus necesidades.
              </h3>
              <h4
                className="text-center text-sm md:text-xl text-gray-400 font-medium w-[20rem] md:w-[40rem] mx-auto pb-0 md:pb-9"
                style={{ fontFamily: "Satoshi" }}
              >
                Ya seas un emprendedor independiente, una pyme o una empresa,
                tenemos la solución que se adapta a tus necesidades.
              </h4>
            </motion.div>
          ) : (
            <>
              <div className="flex justify-center items-center gap-x-2.5 pt-0">
                <GradientLine from="#1e1e1e" to="#999999d9" direction="left" />
                <ThreeStripesLeft strokeColor={"#878586d9"} />
                <div className="flex items-center rounded-full bg-[#1e1e1e] px-4 xl:px-5 py-2 animation-1">
                  <CreditCardIcon className="size-4 md:size-5 text-[#f5f5f5]" />
                  <h2
                    className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#f5f5f5]"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Precios
                  </h2>
                </div>
                <ThreeStripesRight strokeColor={"#878586d9"} />
                <GradientLine from="#1e1e1e" to="#999999d9" direction="right" />
              </div>
              <h3
                className="animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 xl:pb-2.5 tracking-tighter"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                No importa el tamaño de tu negocio, hay un plan para vos.
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-2.5 md:gap-x-2 pt-4">
                <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 text-[#c5c5c5] rounded-xl">
                  <ThunderIcon className="size-5 text-[#ffce1f] mr-1" />
                  <span className="text-sm text-[#c5c5c5]">
                    Soporte y actualizaciones constantes.
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-x-2.5 pb-10 pt-1">
                <h4
                  className="text-base flex justify-center items-center xl:text-lg px-5 text-[#ffffff] font-medium"
                  style={{ fontFamily: "Satoshi" }}
                >
                  <LaurelIcon className="text-[#fbe660] w-5 mr-4" />
                  Incluido en todos los planes
                  <LaurelIcon className="text-[#fbe660] w-5 ml-4 transform scale-x-[-1]" />
                </h4>
              </div>
              
            </>
          )}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pb-20"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {pricingInfo.map((pricing) => (
              <motion.div
                key={pricing.name}
                className={`${
                  pricing.popular === true
                    ? "bg-gradient-to-bl from-[#3a3a3a] to-[#1e1e1e]"
                    : "bg-[#1e1e1e]"
                } relative flex flex-col px-6 pt-4 text-center rounded-[1.6875rem] border border-[#333333] justify-between`}
                variants={scaleUp}
              >
                {pricing.popular && (
                  <div className="absolute top-3 right-3 flex flex-col items-start">
                    <div className="bg-gradient-to-t from-[#444] to-[#4e4e4e] text-white text-xs xl:text-sm font-medium px-4 py-2 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
                      Popular
                    </div>
                  </div>
                )}
                <div className="px-6 -mx-6 -mt-4 rounded-t-3xl">
                  <h3
                    className="text-[14px] lg:text-[24px] xl:text-[26px] pt-6 font-semibold lg:font-bold text-white"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    {pricing.name}
                  </h3>
                  <div className="flex justify-start text-left text-gray-200 items-baseline my-3">
                    <span
                      className="text-5xl xl:text-[3.2rem] text-[#f7f7f7] -tracking-wider font-bold"
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                    >
                      ${"\u00A0"}{Number(pricing.price).toLocaleString("es-AR")}
                    </span>
                    <span className="pl-1 font-medium text-xs md:text-[13px]  text-left text-[#d3d3d3]">
                      +IVA/mes
                    </span>
                  </div>
                  <div
                    className={`text-left pt-2 ${
                      pricing.bestOption.length > 50 ? "pb-0" : "pb-6"
                    }`}
                  >
                    {openBestOption === pricing.name ? (
                      <>
                        <h5 className="text-sm xl:text-sm font-normal text-zinc-400">
                          Para {pricing.bestOption}
                        </h5>
                        <button
                          onClick={() => setOpenBestOption(null)}
                          className="text-[#e4e4e4] hover:text-white text-xs mt-1"
                        >
                          Ver menos
                        </button>
                      </>
                    ) : (
                      <>
                        <h5 className="text-sm xl:text-sm font-normal text-zinc-400 overflow-hidden text-ellipsis whitespace-nowrap">
                          Para {pricing.bestOption}
                        </h5>
                        {pricing.bestOption.length > 50 && (
                          <button
                            onClick={() => setOpenBestOption(pricing.name)}
                            className="text-[#e4e4e4] hover:text-white text-xs mt-1"
                          >
                            Ver más
                          </button>
                        )}
                      </>
                    )}
                  </div>
                  <hr className="flex-grow border-t mb-6 xl:mb-8 mt-2 xl:mt-4 border-[#555555]" />
                </div>

                {/* Contenedor beneficios con flex-grow para ocupar espacio */}
                <div className="flex flex-col flex-grow ">
                  <ul className="flex flex-col gap-1">
                    {pricing.benefits.map((benefit, index) => (
                      <li key={index} className="flex flex-col gap-1 pb-2.5">
                        <div className="flex items-center gap-x-3">
                          <div className="flex items-center justify-center size-6 bg-[#3d3d3d] rounded-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              focusable="false"
                              color="rgb(255, 255, 255)"
                              aria-hidden="true"
                              className="select-none size-3 inline-block fill-white text-white flex-shrink-0"
                            >
                              <g color="rgb(255, 255, 255)">
                                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                              </g>
                            </svg>
                          </div>

                          <div className="flex items-center gap-1 text-sm xl:text-sm">
                            <span>{benefit.text}</span>
                            {benefit.description && (
                              <button
                                onClick={() => {
                                  if (
                                    openDescription?.cardName ===
                                      pricing.name &&
                                    openDescription.benefitIndex === index
                                  ) {
                                    setOpenDescription(null);
                                  } else {
                                    setOpenDescription({
                                      cardName: pricing.name,
                                      benefitIndex: index,
                                    });
                                  }
                                }}
                                className="text-[#d2d2d2] hover:text-white hover:bg-[#2c2c2c] duration-300 rounded-md ml-2 font-bold cursor-pointer"
                                aria-label="Ver más"
                              >
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
                                  className="size-[1.2rem] inline-block"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                  <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>

                        {benefit.description &&
                          openDescription?.cardName === pricing.name &&
                          openDescription.benefitIndex === index && (
                            <p className="ml-9 text-zinc-400 text-sm text-left">
                              {benefit.description}
                            </p>
                          )}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  onClick={() =>
                    window.open(
                      `https://api.whatsapp.com/send?phone=543564222935&text=${encodeURIComponent(
                        `¡Hola! Estoy viendo la web de Fidel y me interesa el plan ${pricing.name}. ¿Podrían enviarme más información sobre el sistema?`
                      )}`,
                      "_blank"
                    )
                  }
                  style={{ fontFamily: "Plus Jakarta Sans", marginTop: "30px" }}
                  className={`${
                    pricing.popular === true
                      ? "bg-gradient-to-br from-[#dbdbdb] to-[#ffffff] hover:from-[#ffffff] hover:to-[#dbdbdb] text-[#191919]"
                      : "bg-gradient-to-br from-[#3c3c3c] to-[#2b2b2b] hover:from-[#2b2b2b] hover:to-[#3c3c3c] text-[#fafafa]"
                  } w-[12.5rem] xl:w-[13.8rem] mx-auto flex justify-center tracking-wide items-center gap-x-2 font-semibold rounded-xl text-sm xl:text-base px-5 py-3 mb-6 text-center transition-all duration-200`}
                >
                  Elegir plan
                  <ArrowUpIcon className="size-4" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center items-center gap-10 pt-1">
            <div className="bg-[#1f1f1f] hover:bg-[#2b2b2b] py-2.5 px-3 duration-300 rounded-lg text-center">
              <h4
                className="text-base px-5 pb-1 text-[#ffffff] font-medium"
                style={{ fontFamily: "Satoshi" }}
              >
                ¿Necesitás más herramientas?
              </h4>
              <p className="text-gray-400 text-sm">
                Podés cambiar de plan en cualquier momento, sin problemas.
              </p>
            </div>
            <div className="bg-[#1f1f1f] hover:bg-[#2b2b2b] py-2.5 px-3 duration-300 rounded-lg text-center">
              <h4
                className="text-base px-5 pb-1 text-[#ffffff] font-medium"
                style={{ fontFamily: "Satoshi" }}
              >
                ¿No estás seguro de cuál elegir?
              </h4>
              <p className="text-gray-400 text-sm">
                Tranqui, agendá una llamada y te damos una demo GRATIS.
              </p>
            </div>
          </div>
        </div>

        <p className="text-[#fddb54] bg-[#2626265d] p-4 rounded-medium mx-auto w-fit flex justify-center items-center gap-x-2 text-center font-medium text-sm mt-11 mb-8 md:mb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-[#FCD53F]"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z" />
          </svg>{" "}
          Sin compromiso, sin tarjeta de crédito.
        </p>
      </div>
    </div>
  );
}
