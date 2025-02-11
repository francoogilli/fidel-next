"use client";

import React from "react";
import GradientLine from "./gradientLine";
import { motion } from "framer-motion";
import { pricingInfo } from "@/data/data";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";
import CreditCardIcon from "@/icons/creditCard";
import ThunderIcon from "@/icons/thunder";
import Link from "next/link";
import ArrowUpIcon from "@/icons/arrow-up";
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

  return (
    <div className="border-y-8 border-[#e8e8e8]">
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
                className="animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 xl:pb-2.5 tracking-tight"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                No importa tu negocio, tenemos un plan para vos.
              </h3>
              <div className="flex justify-center items-center gap-x-2.5 pt-4 pb-1">
                <h4
                  className="text-base xl:text-lg px-5 text-[#ffffff] font-medium"
                  style={{ fontFamily: "Satoshi" }}
                >
                  <span className="text-[#b0b0b0]">«</span> Todos los planes
                  incluyen <span className="text-[#b0b0b0]">»</span>
                </h4>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-2.5 md:gap-x-2 pb-14">
                <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 text-[#c5c5c5] rounded-xl">
                  <ThunderIcon className="size-6 text-[#ffce1f]" />
                  <span className="text-sm text-[#c5c5c5] font-medium">
                    Soporte y actualizaciones constantes.
                  </span>
                </div>
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
                className={`${
                  pricing.popular === true
                    ? "bg-gradient-to-bl from-[#3a3a3a] to-[#1e1e1e]"
                    : "bg-[#1e1e1e]"
                } relative flex flex-col px-6 pt-4 text-center rounded-3xl border border-[#333333]`}
                key={pricing.name}
                variants={scaleUp}
              >
                {pricing.popular && (
                  <div className="absolute top-3 right-3 flex flex-col items-start">
                    <div className="bg-[#444] text-white text-xs xl:text-sm font-medium px-4 py-2 rounded-full shadow-2xl hover:scale-105 transition-all duration-500 cursor-default">
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
                      className="text-5xl xl:text-[3.4rem] text-[#f7f7f7] -tracking-wider font-bold"
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                    >
                      ${Number(pricing.price).toLocaleString("es-AR")}
                    </span>
                    <span className="pl-1 font-medium text-xs md:text-[15px] xl:text-[16px] text-left text-[#d3d3d3]">
                      /mes
                    </span>
                  </div>
                  <h5 className="text-sm xl:text-sm pt-2 pb-6 font-normal text-left text-gray-400">
                    Para {pricing.bestOption}
                  </h5>
                  <hr className="flex-grow border-t mb-6 xl:mb-8 mt-2 xl:mt-4 border-[#555555]" />
                </div>

                {pricing.benefits.map((benefit, index) => (
                  <React.Fragment key={index}>
                    <li className="flex items-center space-x-2 justify-between">
                      <div className="flex items-center justify-center gap-x-3 pb-2.5">
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
                              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                            </g>
                          </svg>
                        </div>
                        <span className="text-sm xl:text-sm ">
                          {benefit.text}
                        </span>
                      </div>
                    </li>
                  </React.Fragment>
                ))}
                <Link
                  href="/"
                  style={{ fontFamily: "Plus Jakarta Sans", marginTop: "60px" }}
                  className={`${
                    pricing.popular === true
                      ? "bg-[#ffffff] hover:bg-[#efefef] text-[#191919]"
                      : "bg-[#313131] hover:bg-[#333333] text-[#fafafa]"
                  } w-[12.5rem] xl:w-[13.8rem] mx-auto flex justify-center tracking-wide items-center gap-x-2 font-semibold rounded-xl text-sm xl:text-base px-5 py-3 mb-6 text-center transition-all duration-200`}
                >
                  Elegir plan
                  <ArrowUpIcon className="size-4"/>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
