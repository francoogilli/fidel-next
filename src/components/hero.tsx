"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Zap } from "lucide-react";
import SparklesIcon from "../icons/sparkles";
import CreditCardIcon from "../icons/creditCard";
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

  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="mx-auto flex max-w-7xl flex-col px-4 pb-32 pt-10 xl:max-w-[90rem] xl:pt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-8 flex justify-center">
          <div
            className="flex w-fit max-w-full items-center gap-2 rounded-full border border-[#eeeeee] bg-white px-2 py-1.5 text-xs font-medium text-[#424242] md:text-sm"
          >
            <Zap aria-hidden="true" className="size-3.5 shrink-0 " strokeWidth={2.25} />
            <span className="whitespace-nowrap">IA ya integrada en</span>
            <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-[#252525]">
              <img
                src="/fidel1.svg"
                alt=""
                aria-hidden="true"
                className="size-5"
              />
              <span>Fidel</span>
            </span>
            <span
              aria-hidden="true"
              className="ml-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#252525] text-white"
            >
              <ChevronRight className="size-3" strokeWidth={2.25} />
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0">
          <div className="flex-1 pt-0 text-center lg:text-left">
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
              className="mx-auto mt-4 w-full max-w-[36rem] lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="font-sans text-[#5c5c5c] mx-auto text-base font-medium leading-[1.4em] lg:mx-0 lg:w-auto lg:text-lg">
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
              <div className="flex flex-col items-center justify-center space-y-2 text-center md:flex-row md:space-x-3 md:space-y-0 lg:justify-start">
                <motion.button
                  className="w-full md:w-auto bg-gradient-to-br from-[#81fc71] via-[#b2fa9e] to-[#81fc71] tracking-tighter md:tracking-normal text-[#171717] justify-center gap-2 font-bold py-2.5 px-6 md:px-7 md:py-3 text-base md:text-[15px] rounded-[18px] flex items-center space-x-2 border-4 md:border-[5px] border-[#fafafa] hover:border-[#dfffdf] transition-all duration-700"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=543564222935&text=" +
                      encodeURIComponent(
                        "¡Hola! Estoy viendo la web de Fidel y me gustaría acceder a una cuenta de prueba para conocer mejor el sistema."
                      ),
                      "_blank"
                    )
                  }
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
            className="group relative flex flex-1 items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="w-[100%] transition-colors duration-300 md:mt-6"
              poster="/hero-poster.png"
            >
              {loadVideo && (
                <>
                  <source src="/hero.mp4" type="video/mp4" />
                </>
              )}
            </motion.video>
          </motion.div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoUrl="https://www.youtube.com/embed/WO2b03Zdu4Q?autoplay=1"
        />
      </motion.div>
    </>
  );
}
