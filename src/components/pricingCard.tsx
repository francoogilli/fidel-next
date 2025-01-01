"use client";

import React from "react";
import GradientLine from "./gradientLine";
import { motion } from "framer-motion";
import { pricingData } from "@/data/data";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";
import CreditCardIcon from "@/icons/creditCard";
import CrossIcon from "@/icons/crossx";
import DoubleChevron from "@/icons/doubleChevron";
import ModulesIcon from "@/icons/modules";
import CalendarIcon from "@/icons/calendar";
import Garabato from "@/icons/garabato";
import CashIcon from "@/icons/cash";
import StonksIcon from "@/icons/stonks";
import ThunderIcon from "@/icons/thunder";
import Check from "@/icons/checkIcon";
import Link from "next/link";
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
    <div className="max-w-7xl xl:max-w-[90rem] mx-auto mt-32 mb-0 md:mb-10 px-4 space-y-7">
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
            className="text-center text-sm md:text-xl text-[#5c5c5c] font-medium w-[20rem] md:w-[40rem] mx-auto pb-0 md:pb-9"
            style={{ fontFamily: "Satoshi" }}
          >
            Ya seas un emprendedor independiente, una pyme o una empresa,
            tenemos la solución que se adapta a tus necesidades.
          </h4>
        </motion.div>
      ) : (
        <>
          <div className="flex justify-center items-center gap-x-2.5">
            <GradientLine direction="left" />
            <ThreeStripesLeft />
            <div className="flex items-center rounded-full bg-[#333333] px-4 xl:px-5 py-2 animation-1">
              <CreditCardIcon className="size-4 md:size-5 text-[#f5f5f5]" />
              <h2
                className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#f5f5f5]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Precios
              </h2>
            </div>
            <ThreeStripesRight />
            <GradientLine direction="right" />
          </div>
          <h3
            className="animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 xl:pb-2.5 tracking-tight"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Planes que tienen sentido.
          </h3>
          <h4
            className="animation-1 text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[16rem] md:w-[21rem] xl:w-[25rem] mx-auto pb-0 md:pb-9"
            style={{ fontFamily: "Satoshi" }}
          >
            Diseñamos nuestros precios para que se adapten a tu negocio.
          </h4>
        </>
      )}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {pricingData.map((pricing) => (
          <motion.div
            className={`${
              pricing.popular === true
                ? "bg-gradient-to-bl from-[#60ff6c] to-[#0bcf0f]"
                : "bg-[#FAFAFA]"
            } relative flex flex-col px-6 pt-4 text-center rounded-3xl border border-[#e5e5e5]`}
            key={pricing.name}
            variants={scaleUp}
          >
            {pricing.popular && (
              <div className="absolute top-3 right-3 flex flex-col items-start">
                <div className="bg-[#fefefe57] text-white text-xs xl:text-sm font-medium px-4 py-2 rounded-full shadow-2xl hover:scale-105 transition-all duration-500 cursor-default">
                  Popular
                </div>
                <svg
                  className="-mt-2.5 -ml-3 size-8"
                  width="48"
                  height="47"
                  viewBox="0 0 48 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.86938 17.6771C7.0936 22.1864 22.5294 31.9981 42.479 35.1705M11.7096 15.022c3.9703 3.3037 16.0263 10.1155 32.4877 10.9334"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
            <div className="px-6 py-5 -mx-6 -mt-4 rounded-t-3xl">
              <div className="flex justify-start items-center space-x-2.5">
                <h3
                  className={`text-[14px] lg:text-[24px] xl:text-[26px] font-semibold lg:font-bold ${
                    pricing.popular === true
                      ? "text-[#fefefe]"
                      : "text-[#212121]"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  {pricing.name}
                </h3>
              </div>
              <div className="flex justify-start text-left text-[#212121] items-baseline my-3">
                <span
                  className={`text-5xl xl:text-[3.4rem] -tracking-wider font-bold ${
                    pricing.popular === true
                      ? "text-[#fefefe]"
                      : "text-[#212121]"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  ${Number(pricing.price).toLocaleString("es-AR")}
                </span>
                <span
                  className={`pl-1 font-bold text-xs md:text-[15px] xl:text-[16px] text-left ${
                    pricing.popular === true
                      ? "text-[#fafafa]"
                      : "text-[#212121]"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  /mes
                </span>
              </div>
              <h5
                className={`text-sm xl:text-[15px] font-medium text-left ${
                  pricing.popular === true ? "text-[#fafafa]" : "text-[#212121]"
                }`}
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Para {pricing.bestOption}
              </h5>
            </div>

            <hr
              className={`flex-grow border-t mb-6 xl:mb-8 mt-2 xl:mt-4 ${
                pricing.popular === true
                  ? "border-[#90f992]"
                  : "border-zinc-200"
              }`}
            />

            <ul
              role="list"
              className="mb-5 xl:mb-[1.4rem] space-y-2.5 text-left"
            >
              {pricing.benefits.map((benefit, index) => (
                <React.Fragment key={index}>
                  <li className="flex items-center space-x-2 justify-between">
                    <div className="flex items-center space-x-2">
                      {benefit.active ? (
                        pricing.popular ? (
                          <Check
                            strokeWidth="3"
                            className={`bg-[#ffffff] text-[#191919] rounded-[5px] p-1`}
                          />
                        ) : (
                          <Check
                            strokeWidth="3"
                            className={`bg-[#191919] text-[#FAFAFA] rounded-[5px] p-1`}
                          />
                        )
                      ) : pricing.popular ? (
                        <CrossIcon
                          strokeWidth="3"
                          className={`size-5 bg-[#fafafa46] text-[#ffffffda] rounded-[5px] p-1`}
                        />
                      ) : (
                        <CrossIcon
                          strokeWidth="3"
                          className={`size-5 bg-[#f2f2f2] rounded-[5px] p-1`}
                        />
                      )}
                      <span
                        className={`text-sm xl:text-[15px] xl:leading-[1.5rem] ${
                          !benefit.active ? "line-through" : ""
                        } ${
                          pricing.popular === true
                            ? "text-[#ffffff]"
                            : "text-[#151515]"
                        }`}
                      >
                        {benefit.text}
                      </span>
                    </div>
                  </li>
                  {index < pricing.benefits.length - 1 && (
                    <hr
                      className={`border-t ${
                        pricing.popular === true
                          ? "border-[transparent]"
                          : "border-[#fafafa]"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
              <Link
                href="/"
                style={{ fontFamily: "Plus Jakarta Sans", marginTop: "60px" }}
                className={`${
                  pricing.popular === true
                    ? "bg-[#ffffff] hover:bg-[#efefef] text-[#191919]"
                    : "bg-[#191919] hover:bg-[#333333] text-[#fafafa]"
                } w-[12.5rem] xl:w-[13.8rem] mx-auto flex justify-center tracking-wide items-center gap-x-1 font-medium rounded-3xl text-sm xl:text-base px-5 py-3 text-center transition-all duration-200`}
              >
                Elegir plan
                <DoubleChevron className="size-4" strokeWidth="2.2" />
              </Link>
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {viewComparison ? (
        <div className="animation-1">
          <div className="flex justify-center items-center gap-x-2.5 pt-4 pb-8">
            <GradientLine from="#f8f8f8" direction="left" />
            <ThreeStripesLeft />

            <h4
              className="text-lg xl:text-xl px-5 text-[#4e4e4e] font-semibold"
              style={{ fontFamily: "Satoshi" }}
            >
              Todos los planes incluyen
            </h4>
            <ThreeStripesRight />
            <GradientLine from="#f8f8f8" direction="right" />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2.5 md:gap-x-2">
            <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-xl">
              <ThunderIcon className="size-6" strokeWidth="1.5" />
              <span className="text-sm text-[#2c2c2c] font-medium">
                Atención al cliente
              </span>
            </div>
            <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-xl">
              <StonksIcon className="size-6" strokeWidth="1.7" />
              <span className="text-sm text-[#2c2c2c] font-medium">
                Ventas sin límites
              </span>
            </div>
            <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-xl">
              <CashIcon className="size-6" strokeWidth="1.7" />
              <span className="text-sm text-[#2c2c2c] font-medium">
                Caja y Ventas
              </span>
            </div>
            <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-xl">
              <ModulesIcon className="size-6" strokeWidth="1.6" />
              <span className="text-sm text-[#2c2c2c] font-medium">
                Clientes y Productos
              </span>
            </div>
            <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 bg-[#F4F7F9] border border-[#dfdfdf] rounded-xl">
              <CalendarIcon className="size-6" strokeWidth="1.6" />
              <span className="text-sm text-[#2c2c2c] font-medium">
                Actualizaciones
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex items-center justify-center">
          <h4
            className="text-3xl mx-auto w-[32rem] md:w-[40rem] xl:w-[48rem] md:text-5xl xl:text-[3.5rem] font-bold text-center md:pt-14 pb-1 tracking-tight"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Compara y explora las características de cada plan.
          </h4>
          <Garabato
            className="hidden md:block absolute top-10 right-[305px] xl:right-[335px] size-16 xl:size-[4.4rem]"
            color="#c2ffb0"
          />
        </div>
      )}
    </div>
  );
}
