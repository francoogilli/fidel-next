"use client";

import { motion } from "framer-motion";
import { CheckItem } from "./check-item";
import GradientLine from "@/components/gradientLine";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";
import {
  Settings,
  FileSpreadsheet,
  Package,
  Users,
  Bell,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: FileSpreadsheet,
    title: "Actualización masiva de precios",
    description:
      "Importá listas desde Excel y actualizá precios de forma masiva usando el código de proveedor, en segundos y sin errores.",
  },
  {
    icon: Package,
    title: "Compra por bulto, venta por unidad",
    description:
      "Fidel calcula automáticamente el costo por bulto, el precio por unidad y ajusta el stock sin cuentas manuales.",
  },
  {
    icon: Users,
    title: "Múltiples proveedores por producto",
    description:
      "Asigná más de un proveedor a cada artículo, comparé precios fácilmente y consultá el historial de compras.",
  },
  {
    icon: Bell,
    title: "Stock mínimo y máximo con alertas",
    description:
      "Definí límites por producto y recibí alertas automáticas para reponer a tiempo y mantener el equilibrio.",
  },
  {
    icon: MapPin,
    title: "Ubicación exacta de cada producto",
    description:
      "Creá depósitos y asigná ubicación específica a cada repuesto. Encontralos al instante, incluso si vendés online.",
  },
];

const detailSections = [
  {
    icon: FileSpreadsheet,
    badge: "Actualización masiva de precios",
    title: "Los precios cambian todo el tiempo. Actualizalos en segundos",
    description:
      "En el rubro repuestos, trabajar con precios desactualizados es perder dinero. Con Fidel importás la lista del proveedor y actualizás todo al instante.",
    items: [
      "Importá listas de precios directamente desde Excel",
      "Actualizá precios de forma masiva usando el código de proveedor",
      "Sin errores manuales y en pocos segundos",
    ],
    reverse: false,
  },
  {
    icon: Package,
    badge: "Compra por bulto, venta por unidad",
    title: "Precisión total sin cuentas manuales",
    description:
      "¿Comprás por bulto pero vendés por pieza? Fidel hace los cálculos por vos y mantiene el stock actualizado automáticamente.",
    items: [
      "Calcula automáticamente el costo por bulto",
      "Determina el precio por unidad sin intervención manual",
      "Ajusta el stock de forma automática en cada venta",
    ],
    reverse: true,
  },
  {
    icon: Users,
    badge: "Múltiples proveedores",
    title: "Comprá siempre al proveedor más conveniente",
    description:
      "Un mismo repuesto puede tener varios proveedores. Con Fidel los tenés todos organizados para tomar la mejor decisión de compra.",
    items: [
      "Asigná más de un proveedor a cada artículo",
      "Compará precios fácilmente desde un solo lugar",
      "Consultá el historial de compras por proveedor",
    ],
    reverse: false,
  },
  {
    icon: MapPin,
    badge: "Ubicación de productos",
    title: "Miles de repuestos, encontrados al instante",
    description:
      "Cuando tenés miles de productos, saber dónde está cada uno es clave para atender rápido. Fidel te da esa precisión.",
    items: [
      "Creá distintos depósitos o sectores del local",
      "Asigná ubicación específica a cada producto",
      "Encontrá cualquier repuesto al instante, incluso si también vendés online",
    ],
    reverse: true,
  },
];

export default function CasasDeRepuestosPage() {
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
            <Settings className="size-4 text-[#121212]" />
            <span
              className="text-xs md:text-sm font-medium text-[#121212]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Fidel para Casas de Repuestos
            </span>
          </div>
          <ThreeStripesRight />
          <GradientLine direction="right" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-bold text-[#252525] text-4xl md:text-[3.25rem] xl:text-[3.5rem] tracking-tight leading-[1.15] text-balance mx-auto max-w-5xl"
          style={{ fontFamily: "Plus Jakarta Sans" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          El sistema pensado para negocios con muchos códigos y alta rotación
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-5 text-[#5c5c5c] text-base md:text-lg xl:text-xl font-medium leading-relaxed mx-auto max-w-2xl"
          style={{ fontFamily: "Satoshi" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Los precios cambian constantemente, el stock es complejo y el tiempo
          en mostrador vale oro. Por eso Fidel tiene herramientas pensadas
          específicamente para quienes trabajan entre listas de precios, códigos
          y estanterías llenas de productos.
        </motion.p>

        {/* Hero placeholder */}
        <motion.div
          className="mt-14 mx-auto w-full max-w-4xl aspect-[16/9] bg-[#f6f6f6] border border-[#e9e9e9d3] rounded-[24px] flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span
            className="text-[#5c5c5c] text-sm"
            style={{ fontFamily: "Satoshi" }}
          >
            Imagen / video del sistema
          </span>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <div
        className="pb-20 md:pb-28"
        style={{ background: "linear-gradient(to bottom, #FFFFFF, transparent)" }}
      >
        <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-4">
          {/* Section header */}
          <div className="flex justify-center items-center gap-x-2.5 pt-4 pb-6">
            <GradientLine direction="left" />
            <ThreeStripesLeft />
            <div className="flex items-center rounded-full bg-[#f6f6f6] border border-[#e9e9e9] px-4 py-2 gap-x-2">
              <Settings className="size-4 text-[#121212]" />
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
            Todo lo que necesita tu casa de repuestos
          </h2>
          <p
            className="text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[20rem] md:w-[38rem] mx-auto pb-10"
            style={{ fontFamily: "Satoshi" }}
          >
            Herramientas para ordenar precios, stock y proveedores en un solo
            lugar, y trabajar con más velocidad y control.
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
                  className="text-xl font-bold text-[#18a018] mb-3 leading-snug"
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

              {/* Visual placeholder */}
              <div className="flex justify-center">
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
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Final */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl xl:max-w-[90rem] px-4 text-center">
          <div className="flex justify-center items-center gap-x-2.5 pb-6">
            <GradientLine direction="left" />
            <ThreeStripesLeft />
            <div className="flex items-center rounded-full bg-[#f6f6f6] border border-[#e9e9e9] px-4 py-2 gap-x-2">
              <Settings className="size-4 text-[#121212]" />
              <span
                className="text-xs md:text-sm font-medium text-[#121212]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Fidel, el aliado de tu casa de repuestos
              </span>
            </div>
            <ThreeStripesRight />
            <GradientLine direction="right" />
          </div>

          <h2
            className="text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-[#252525] tracking-tight leading-tight text-balance mx-auto max-w-5xl"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            <img src="/fidel1.svg" alt="Fidel" style={{ height: "1.5em", width: "auto", display: "inline", verticalAlign: "-0.35em", marginRight: "0.15em" }} />Fidel{" "}
            te ayuda a ordenar precios, stock y proveedores en un solo lugar
          </h2>
          <p
            className="mt-6 text-[#5c5c5c] text-base md:text-lg xl:text-xl font-medium leading-relaxed mx-auto max-w-2xl"
            style={{ fontFamily: "Satoshi" }}
          >
            Para que puedas trabajar con más velocidad, menos errores y mayor
            control en cada operación de tu negocio.
          </p>
        </div>
      </section>
    </>
  );
}
