"use client";

import { useState } from "react";
import { FAQIcon } from "../icons/faq";
import { accordionData } from "../data/data";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";

export const QuestionsAnswers = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl xl:max-w-[90rem] mb-8 mx-auto px-4 md:px-3">
      <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
        <GradientLine weight="1.5px" direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2 animation-1">
          <FAQIcon className="size-4 md:size-5 text-[#121212]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            FAQs
          </h2>
        </div>
        <ThreeStripesRight />
        <GradientLine weight="1.5px" direction="right" />
      </div>
      <h3 className="font-satoshi animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 tracking-tight">
        No te quedes con dudas
      </h3>
      <h4
        className="animation-1 text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[19rem] md:w-[25rem] xl:w-[31rem] mx-auto pb-0 md:pb-9"
        style={{ fontFamily: "Satoshi" }}
      >
        ¿Todavía tenés preguntas? Contactá a nuestro equipo, disponible de lunes a viernes de 8:00 a 18:00 hs.
      </h4>
      <div className="space-y-3">
        {accordionData.map((item, index) => {
          return (
            <div
              key={item.id}
              className="mx-auto max-w-[56rem] xl:max-w-[67rem] border border-[#efefef] rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-5 py-5 bg-[#ffffff] text-left font-medium flex items-center justify-between"
              >
                <span className="flex items-center">
                  <span
                    className="text-sm md:text-[1.0625rem] xl:text-lg font-medium"
                    style={{ fontFamily: "Satoshi" }}
                  >
                    {item.title}
                  </span>
                </span>
                <div className="bg-[#f6f6f67e] rounded-lg p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`size-4 md:size-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-135" : "rotate-90"
                    }`}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    {openIndex === index ? (
                      <path d="M5 12h14" />
                    ) : (
                      <>
                        <path d="M12 5l0 14" />
                        <path d="M5 12l14 0" />
                      </>
                    )}
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-screen pb-4 px-5 bg-[#fff]"
                    : "max-h-0"
                }`}
              >
                <p
                  className="text-xs md:text-base xl:text-[17px] font-medium text-[#707070]"
                  style={{ fontFamily: "Satoshi" }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
