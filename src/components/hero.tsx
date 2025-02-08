"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SparklesIcon from "../icons/sparkles";
import CreditCardIcon from "../icons/creditCard";
import PlayIcon from "../icons/play";
import Link from "next/link";
import CarouselInfinite from "./carouselInfinite";
import Modal from "./modal";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <motion.div
        className="mx-auto flex flex-col lg:flex-row max-w-7xl xl:max-w-[90rem] pt-40 lg:pt-10 xl:pt-20 space-y-6 px-4 lg:px-4 pb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex-1 text-center lg:text-left pt-0 md:pt-[0rem] lg:pt-[3.2rem]">
          <motion.h2
            className="font-bold text-[#252525] text-4xl md:text-6xl lg:text-[5rem] lg:leading-[1.1em] xl:text-[5.6rem] xl:leading-[1.2em] tracking-tighter"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Organiza tu empresa, en un solo lugar.
          </motion.h2>

          <motion.div
            className="lg:px-0 mt-4 mx-auto md:ml-0 w-[23rem] md:w-[36rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4
              className="font-satoshi text-[#5c5c5c] lg:w-auto mx-auto lg:mx-0 text-base lg:text-lg leading-[1.4em] font-medium"
            >
              Optimiza cada operación y toma decisiones más inteligentes para
              impulsar la gestión de tu negocio. Potencia tus procesos para
              llevar tu empresa más lejos.
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
                className="bg-[#5fff5c] tracking-tighter md:tracking-normal text-[#171717] justify-center w-auto gap-2 font-bold py-2.5 px-6 md:px-7 md:py-3 text-base md:text-[15px] rounded-[18px] flex items-center space-x-2 border-4 md:border-[5px] border-[#fafafa] hover:border-[#dfffdf] transition-all duration-700"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                <SparklesIcon className="size-4 md:size-5" />
                Empezar ahora
              </motion.button>
              <Link href="/planes">
                <motion.button
                  className="bg-[#fafafa] tracking-tighter md:tracking-normal text-[#171717] gap-2 justify-center w-auto font-bold py-2.5 px-6 md:px-7 md:py-3 text-base md:text-[15px] rounded-[18px] flex items-center space-x-2 border-4 md:border-[5px] border-[#ffffff] md:border-[#fafafa] hover:border-[#efefef] transition-all duration-700"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  <CreditCardIcon className="size-4 md:size-5" />
                  Conocer planes
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative flex-1 flex justify-center lg:justify-end items-center group"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.img
            src="/image.png"
            alt="Laptop"
            className="md:border-[7px] border-[7px] border-[#a7faa5] md:mt-11 w-[100%] rounded-[2.5rem] transition-colors duration-300 group-hover:border-[#79f277]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <button
            onClick={openModal}
            className="absolute inset-0 flex justify-center mt-0 md:mt-11 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="bg-[#6fff6d] hover:bg-[#43fc40] border-[5px] border-[#dcffdb] hover:border-[#e6ffe6] p-4 rounded-full shadow-xl hover:shadow-2xl duration-500 transition-all"
            >
              <PlayIcon className="size-8 md:size-12 pl-0.5 text-white" />
            </motion.div>
          </button>
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
