"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SparklesIcon from "../icons/sparkles";
import CreditCardIcon from "../icons/creditCard";
import Link from "next/link";
import Modal from "./modal";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const handleScrollToPlanes = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("planes");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <motion.div
        className="mx-auto flex flex-col lg:flex-row max-w-7xl xl:max-w-[90rem] pt-40 lg:pt-10 xl:pt-20 space-y-6 px-4 lg:px-4 pb-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex-1 text-center lg:text-left pt-0 md:pt-[0rem] lg:pt-[3.2rem]">
          <motion.h2
            className="font-bold text-[#252525] text-4xl md:text-6xl lg:text-6xl lg:leading-[1.1em] xl:text-7xl xl:leading-[1.2em] tracking-tighter"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gestionar tu negocio no tiene que ser complicado.
          </motion.h2>

          <motion.div
            className="lg:px-0 mt-4 mx-auto md:ml-0 w-[23rem] md:w-[36rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="font-sans text-[#5c5c5c] lg:w-auto mx-auto lg:mx-0 text-base lg:text-lg leading-[1.4em] font-medium">
              Imaginá un software que ordena, ahorra tiempo y te ayuda a tomar
              decisiones con claridad. Eso es Fidel: simple, poderoso y fácil de
              usar. Crecé sin obstáculos y de manera sostenible, con las
              herramientas adecuadas para cada etapa de tu negocio.
            </h4>
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:space-x-3 mx-auto lg:mx-0 justify-center lg:justify-start items-center text-center space-y-2 md:space-y-0">
              <motion.button
                className="w-full md:w-auto bg-gradient-to-br from-[#81fc71] via-[#b2fa9e] to-[#81fc71] tracking-tighter md:tracking-normal text-[#171717] justify-center gap-2 font-bold py-2.5 px-6 md:px-7 md:py-3 text-base md:text-[15px] rounded-[18px] flex items-center space-x-2 border-4 md:border-[5px] border-[#fafafa] hover:border-[#dfffdf] transition-all duration-700"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                <SparklesIcon className="size-4 md:size-5" />
                ¡Probá una demo!
              </motion.button>
                <motion.button
                onClick={handleScrollToPlanes}
                  className="w-full md:w-auto bg-gradient-to-bl from-[#222222] via-[#383838] to-[#222222] tracking-tighter md:tracking-normal text-white gap-2 justify-center font-bold py-2.5 px-6 md:px-7 md:py-3 text-base md:text-[15px] rounded-[18px] flex items-center space-x-2 border-4 md:border-[5px] border-[#f3f3f3] hover:border-[#d4d4d4] transition-all duration-700"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  <CreditCardIcon className="size-4 md:size-5" />
                  Mirá nuestros planes
                </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative flex-1 flex justify-center lg:justify-end items-center group"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.video
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="md:mt-6 w-[100%] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoUrl="https://www.youtube.com/embed/WO2b03Zdu4Q?autoplay=1"
        />
      </motion.div>
    </>
  );
}
