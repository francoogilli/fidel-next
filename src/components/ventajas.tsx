"use client";

import { motion } from "framer-motion";
import AdvantagesIcon from "../icons/advantages";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";
import Image from "next/image";

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
            Aprovechá todas nuestras ventajas
          </h3>
          <h4
            className="text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium md:w-[50%] xl:w-[48%] mx-auto pb-0"
            style={{ fontFamily: "Satoshi" }}
          >
            Todo lo que necesitás para gestionar tu negocio de manera sencilla,
            segura y sin complicaciones, con el mejor respaldo y un equipo para
            ayudarte.
          </h4>
          {/* Opción 2: Mantener grid pero quitar aspect-square y agregar h-full */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-4 md:gap-6">
            <div className="col-span-1 w-full h-full order-5 md:order-none bg-white border border-[#e9e9e9d3] rounded-[32px] flex transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="p-10 text-center flex flex-col justify-center flex-1 transform scale-95 hover:scale-90 transition-transform duration-300 ease-in-out">
                <Image
                  src="/ventajas1.png"
                  width={350}
                  height={168}
                  draggable="false"
                  className="mx-auto"
                  alt="cloud"
                />
                <h2 className="text-[33px] leading-[2.3rem] mt-4 font-sans font-bold text-gray-800 mb-4">
                  Gestión en la nube, sin límites de lugar ni horario.
                </h2>
                <p className="text-gray-500 text-base">
                  Sin instalaciones, sin descargas, sin complicaciones. Accedé a
                  toda la información desde tu PC, tablet o celular, estés donde
                  estés, las 24 horas.
                </p>
              </div>
            </div>
            <div className="col-span-1 w-full h-full order-5 md:order-none bg-white border border-[#e9e9e9d3] rounded-[32px] flex transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="p-10 text-center flex flex-col justify-center flex-1 transform scale-95 hover:scale-90 transition-transform duration-300 ease-in-out">
                <Image
                  src="/ventajas2.png"
                  width={350}
                  height={168}
                  draggable="false"
                  className="mx-auto"
                  alt="cloud"
                />
                <h2 className="text-[30px] leading-[2.3rem]  font-sans font-bold mt-2 text-gray-800 mb-4">
                 ¿Necesitás una persona del otro lado? También estamos.
                </h2>
                <p className="text-gray-500 text-base">
                  Hay consultas que se resuelven al instante y otras que
                  necesitan alguien del otro lado. En Fidel, combinamos lo mejor
                  de los dos mundos para que nunca te quedes sin respuesta.
                </p>
              </div>
            </div>
            <div className="col-span-1 w-full h-full order-5 md:order-none bg-white border border-[#e9e9e9d3] rounded-[32px] flex transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="p-10 text-center flex flex-col justify-center flex-1 transform scale-95 hover:scale-90 transition-transform duration-300 ease-in-out">
                <Image
                  src="/ventajas3.png"
                  width={350}
                  height={168}
                  draggable="false"
                  className="mx-auto"
                  alt="cloud"
                />
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
          </div>
        </div>
      </div>
    </div>
  );
}
