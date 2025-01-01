"use client";

import { motion } from "framer-motion";
import CheckIcon from "../icons/check";
import MobileIcon from "../icons/mobile";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";

export default function Mobile() {
  return (
    <div className="max-w-7xl xl:max-w-[90rem] mb-8 mx-auto px-3 md:px-3">
      <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center rounded-full bg-[#333333] px-4 xl:px-5 py-2"
        >
          <MobileIcon className="size-4 md:size-4 text-[#f5f5f5]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#f5f5f5]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Aplicación Mobile
          </h2>
        </motion.div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>
      <motion.div
        className="flex mx-auto justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3
          className="text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 tracking-tight"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Maneja tu negocio desde tu celular
        </h3>
      </motion.div>
      <motion.h4
        className="text-center text-sm md:text-lg text-[#5c5c5c] font-medium md:w-[50%] mx-auto pb-0 md:pb-9"
        style={{ fontFamily: "Satoshi" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Controla y toma decisiones desde la comodidad de tu celular. Conecta con
        cada aspecto de tu negocio, estés donde estés, a cualquier hora.
      </motion.h4>
      <div className="grid grid-cols-1 md:grid-cols-12 relative pt-10 space-y-7 md:space-y-0">
        <div className="col-span-6 relative hidden md:block">
          <motion.img
            src="fondo.png"
            alt=""
            className="absolute z-0 rounded-2xl w-[600px] xl:w-[680px] h-[500px] xl:h-[570px]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.img
            width={600}
            src="cositas.svg"
            alt=""
            className="p-10 relative z-10 w-[600px] xl:w-[670px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute flex justify-center -top-5 right-0 "
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src="papelitoderecho.png" className="w-16" alt="" />
          </motion.div>
          <motion.div
            className="absolute flex justify-center -top-5 -left-6"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img src="papelitoizquierdo.png" className="w-16" alt="" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-20 xl:top-[1.9rem]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="phone.png"
              alt="Imagen de celular"
              width={500}
              className="overflow-hidden w-[500px] xl:w-[550px]"
            />
          </motion.div>
        </div>
        <div className="col-span-6 md:hidden flex justify-center items-center mx-auto">
          <motion.img
            src="mobileimage.png"
            alt="Imagen para móviles"
            className="w-full h-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
        <div className="col-span-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <h3
              className="text-3xl md:text-5xl xl:text-[3.2rem] text-[#252525] font-bold my-8 pb-0 md:pb-1 xl:pb-2.5 tracking-tight"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Gestiona tu empresa desde donde vos quieras.
            </h3>

            <p className="text-[#565656] text-sm md:text-base xl:text-lg">
              Fidel te ofrece acceso instantáneo a toda la información clave de
              tu negocio. Desde la facturación hasta el control de inventario.
              Simplifica la gestión, mejora la eficiencia, y mantén el control
              total desde la comodidad de tu celular.
            </p>
          </motion.div>
          <motion.div
            className="pt-0 md:pt-5 xl:pt-9 space-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FeatureItem text="Acceso en cualquier lugar y en cualquier momento." />
            <FeatureItem text="Visualiza todos tus datos o información en tiempo real." />
            <FeatureItem text="Realiza pedidos directamente desde cualquier lugar." />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <motion.div
      className="col-span-1 bg-[#fdfdfd] flex justify-start items-center text-sm md:text-base xl:text-lg gap-x-3.5 border border-[#e6eee6] rounded-3xl p-3 xl:p-3.5"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.1 }}
    >
      <div className="bg-gradient-to-tr from-[#63ff33] to-[#b3ff99] rounded-full p-1 border border-[#e6eee6]">
        <CheckIcon className="size-6" />
      </div>
      {text}
    </motion.div>
  );
}
