"use client";

import { motion } from "framer-motion";
import { CheckItem } from "./check-item";
import GradientLine from "@/components/gradientLine";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";
import {
  Wrench,
  FileSpreadsheet,
  Package,
  Users,
  Bell,
  Mail,
  Image,
} from "lucide-react";

const features = [
  {
    icon: FileSpreadsheet,
    title: "Actualización masiva desde Excel",
    description:
      "Importá la lista de tu proveedor y actualizá todos tus precios en segundos, sin errores manuales.",
  },
  {
    icon: Package,
    title: "Compra por bulto, venta por unidad",
    description:
      "Gestioná ambos formatos sin complicaciones. El sistema calcula precios y stock automáticamente.",
  },
  {
    icon: Users,
    title: "Múltiples proveedores",
    description:
      "Registrá distintos proveedores para el mismo producto y compará precios desde un solo lugar.",
  },
  {
    icon: Bell,
    title: "Control de stock inteligente",
    description:
      "Recibí alertas automáticas cuando el stock baja y generá órdenes de compra al instante.",
  },
  {
    icon: Mail,
    title: "Facturación automática",
    description:
      "Enviá facturas por mail o WhatsApp en un par de clics. Sin demoras ni tareas repetitivas.",
  },
  {
    icon: Image,
    title: "Catálogos con imágenes",
    description:
      "Creá listas de precios visuales para vender por mostrador o compartir digitalmente con tus clientes.",
  },
];

const detailSections = [
  {
    icon: FileSpreadsheet,
    badge: "Actualización masiva de precios",
    title: "Actualizá todos tus precios desde un solo archivo Excel",
    description:
      "¿Tus proveedores te envían listas de precios en Excel? Con Fidel, solo importás el archivo y el sistema hace el resto.",
    items: [
      "Actualiza automáticamente los precios según el código de proveedor",
      "Evita errores manuales y te ahorra horas de carga",
      "En pocos segundos, tus precios quedan listos para vender",
    ],
    image: "/ferreteria1.png",
    reverse: false,
  },
  {
    icon: Bell,
    badge: "Control inteligente de stock",
    title: "Nunca más te quedés sin mercadería ni sobrestockeés",
    description:
      "Fidel te mantiene siempre en el punto justo. Configurás los límites y el sistema te avisa cuando es momento de reponer.",
    items: [
      "Definí stock mínimo y máximo por producto",
      "Recibí alertas automáticas cuando el stock baja",
      "Generá órdenes de compra de forma rápida",
    ],
    reverse: true,
  },
  {
    icon: Users,
    badge: "Gestión de proveedores",
    title: "Comprá siempre al mejor proveedor, sin perder tiempo",
    description:
      "¿Comprás el mismo producto a distintos proveedores? Registralos todos en Fidel y elegí siempre la mejor opción.",
    items: [
      "Registrá múltiples proveedores para un mismo artículo",
      "Consultá el historial de compras fácilmente",
      "Compará precios y tomá mejores decisiones",
    ],
    reverse: false,
  },
];

export default function FidelFeaturesSection() {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="mx-auto max-w-7xl xl:max-w-[90rem] px-4 lg:px-4 pt-16 md:pt-20 xl:pt-28 pb-16 md:pb-24 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="flex justify-center items-center gap-x-2.5 pb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <GradientLine direction="left" />
          <ThreeStripesLeft />
          <div className="flex items-center rounded-full bg-[#f6f6f6] border border-[#e9e9e9] px-4 py-2 gap-x-2">
            <Wrench className="size-4 text-[#121212]" />
            <span
              className="text-xs md:text-sm font-medium text-[#121212]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Fidel para Ferreterías
            </span>
          </div>
          <ThreeStripesRight />
          <GradientLine direction="right" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-bold text-[#252525] text-4xl md:text-[3.25rem] xl:text-[3.5rem] tracking-tight leading-[1.15] text-balance mx-auto max-w-4xl"
          style={{ fontFamily: "Plus Jakarta Sans" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          El sistema de gestión pensado para el día a día de tu ferretería
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-5 text-[#5c5c5c] text-base md:text-lg xl:text-xl font-medium leading-relaxed mx-auto max-w-2xl"
          style={{ fontFamily: "Satoshi" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ¿Perdés tiempo actualizando precios, controlando stock o enviando
          facturas? Fidel simplifica tu trabajo con herramientas diseñadas
          específicamente para el rubro ferretero.
        </motion.p>

        {/* Hero image */}
        <motion.div
          className="mt-14 mx-auto w-full max-w-4xl rounded-[24px] overflow-hidden border border-[#e9e9e9d3]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img
            src="/ferreterias1.png"
            alt="Sistema Fidel para ferreterías"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <div
        id="funcionalidades-ferreteria"
        className="pb-20 md:pb-28"
        style={{ background: "linear-gradient(to bottom, #FFFFFF, transparent)" }}
      >
        <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-4">
          {/* Section header */}
          <div className="flex justify-center items-center gap-x-2.5 pt-4 pb-6">
            <GradientLine direction="left" />
            <ThreeStripesLeft />
            <div className="flex items-center rounded-full bg-[#f6f6f6] border border-[#e9e9e9] px-4 py-2 gap-x-2">
              <Wrench className="size-4 text-[#121212]" />
              <span
                className="text-xs md:text-sm font-medium text-[#121212]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Funcionalidades
              </span>
            </div>
            <ThreeStripesRight />
            <GradientLine direction="right" />
          </div>

          <h2
            className="text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-6 tracking-tight text-[#252525]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Todo lo que necesita tu ferretería
          </h2>
          <p
            className="text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[20rem] md:w-[38rem] mx-auto pb-10"
            style={{ fontFamily: "Satoshi" }}
          >
            Herramientas diseñadas para resolver los problemas reales del rubro
            ferretero, sin complicaciones.
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-[#e9e9e9d3] rounded-[32px] p-8 flex flex-col transition-transform duration-300 ease-in-out hover:scale-[1.02]"
              >
                <div className="inline-flex items-center justify-center size-12 rounded-2xl bg-[#d4ffcc] border border-[#81fc71] mb-5">
                  <feature.icon className="size-5 text-[#1db31d]" />
                </div>
                <h3
                  className="text-xl font-bold text-[#474747] mb-3 leading-snug"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#5c5c5c] text-base leading-relaxed"
                  style={{ fontFamily: "Satoshi" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Sections */}
      {detailSections.map((section) => (
        <section
          key={section.badge}
          className="py-16 md:py-24"
          style={{ background: "linear-gradient(to bottom, #f9f9f9, #ffffff)" }}
        >
          <div className="mx-auto max-w-7xl xl:max-w-[90rem] px-4">
            <div
              className={`grid items-center gap-12 md:grid-cols-2 ${section.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Text */}
              <div>
                <div className="inline-flex items-center rounded-full bg-[#d4ffcc] border border-[#81fc71] px-4 py-2 gap-x-2 mb-5">
                  <section.icon className="size-4 text-[#1db31d]" />
                  <span
                    className="text-xs md:text-sm font-medium text-[#18a018]"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    {section.badge}
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-[2.5rem] font-bold text-[#252525] leading-tight tracking-tight text-balance"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  {section.title}
                </h2>
                <p
                  className="mt-4 text-[#5c5c5c] text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "Satoshi" }}
                >
                  {section.description}
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  {section.items.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex justify-center">
                {"image" in section && section.image ? (
                  <div className="w-full max-w-md rounded-[24px] overflow-hidden border border-[#e9e9e9d3]">
                    <img
                      src={section.image}
                      alt={section.badge}
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-md aspect-[4/3] bg-[#f6f6f6] border border-[#e9e9e9d3] rounded-[24px] flex flex-col items-center justify-center gap-3">
                    <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-white border border-[#e9e9e9] shadow-sm">
                      <section.icon className="size-8 text-[#252525]" />
                    </div>
                    <span
                      className="text-sm text-[#5c5c5c]"
                      style={{ fontFamily: "Satoshi" }}
                    >
                      {section.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Final */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl xl:max-w-[90rem] px-4 text-center">
          {/* Badge header */}
          <div className="flex justify-center items-center gap-x-2.5 pb-6">
            <GradientLine direction="left" />
            <ThreeStripesLeft />
            <div className="flex items-center rounded-full bg-[#f6f6f6] border border-[#e9e9e9] px-4 py-2 gap-x-2">
              <Wrench className="size-4 text-[#121212]" />
              <span
                className="text-xs md:text-sm font-medium text-[#121212]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Fidel, el aliado de tu ferretería
              </span>
            </div>
            <ThreeStripesRight />
            <GradientLine direction="right" />
          </div>

          <h2
            className="text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-[#252525] tracking-tight leading-tight text-balance mx-auto max-w-3xl"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            <img src="/fidel1.svg" alt="Fidel" style={{ height: "1.5em", width: "auto", display: "inline", verticalAlign: "-0.35em", marginRight: "0.15em" }} />Fidel no es solo un sistema de gestión
          </h2>
          <p
            className="mt-6 text-[#5c5c5c] text-base md:text-lg xl:text-xl font-medium leading-relaxed mx-auto max-w-2xl"
            style={{ fontFamily: "Satoshi" }}
          >
            Es una herramienta pensada para simplificar tu trabajo, ordenar tu
            stock y ayudarte a vender mejor. Probalo sin compromiso.
          </p>

        </div>
      </section>
    </>
  );
}
