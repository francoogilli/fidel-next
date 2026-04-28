"use client";

import { motion } from "framer-motion";
import { CheckItem } from "./check-item";
import GradientLine from "@/components/gradientLine";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";
import {
  Sparkles,
  ShoppingCart,
  QrCode,
  BarChart3,
  BookImage,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Integración con Tienda Nube y WooCommerce",
    description:
      "Las ventas online ingresan directo al sistema. Facturás, despachás y actualizás stock sin cargar nada a mano.",
  },
  {
    icon: QrCode,
    title: "QR y códigos de barra en el local",
    description:
      "Colocá QR en los productos para que el cliente vea precios y detalles desde su celular. Menos consultas, más ventas.",
  },
  {
    icon: BarChart3,
    title: "Información clave en tiempo real",
    description:
      "Mirá qué productos se venden más, el stock disponible y las alertas de reposición, todo actualizado en segundos.",
  },
  {
    icon: BookImage,
    title: "Catálogos visuales por WhatsApp",
    description:
      "Armá catálogos en PDF con fotos y precios, y enviálos por WhatsApp en pocos segundos. Vendé incluso fuera del local.",
  },
];

const detailSections = [
  {
    icon: ShoppingCart,
    badge: "Tienda Nube y WooCommerce",
    title: "Vendé online sin duplicar trabajo",
    description:
      "Con Fidel, tus ventas online ingresan directo al sistema. Productos, stock, precios, variantes, promociones y fotos se actualizan automáticamente.",
    items: [
      "Las ventas online ingresan directo al sistema sin carga manual",
      "Facturás y despachás en el momento, sin errores",
      "Productos, precios y variantes sincronizados automáticamente",
      "Imprimís etiquetas de envío en pocos clics",
      "Cada venta crea un nuevo cliente en tu base de datos",
    ],
    reverse: false,
  },
  {
    icon: QrCode,
    badge: "QR y códigos de barra",
    title: "Mejorá la experiencia de compra en tu showroom",
    description:
      "Colocá códigos QR en los productos de tu local para que los clientes escaneen y vean precios y detalles desde su celular, sin interrumpirte.",
    items: [
      "El cliente escanea el QR y ve precios y detalles al instante",
      "Usá códigos de barra y lector para agilizar las ventas",
      "Menos consultas repetitivas, más foco en atender y vender",
    ],
    image: "/deco2.png",
    reverse: true,
  },
  {
    icon: BookImage,
    badge: "Catálogos visuales",
    title: "Enviá catálogos por WhatsApp y vendé desde cualquier lugar",
    description:
      "Armá catálogos en PDF con fotos y precios personalizados. Enviálos por WhatsApp y cerrá ventas incluso cuando el cliente no está en el local.",
    items: [
      "Armá catálogos en PDF con fotos y precios",
      "Personalizalos para cada cliente o segmento",
      "Enviálos por WhatsApp en pocos segundos",
    ],
    image: "/deco3.png",
    reverse: false,
  },
];

export default function CasasDeDecoracionPage() {
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
            <Sparkles className="size-4 text-[#121212]" />
            <span
              className="text-xs md:text-sm font-medium text-[#121212]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Fidel para Casas de Decoración
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
          Un solo sistema para vender, mostrar y gestionar tu negocio deco
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-5 text-[#5c5c5c] text-base md:text-lg xl:text-xl font-medium leading-relaxed mx-auto max-w-2xl"
          style={{ fontFamily: "Satoshi" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Si usás distintas plataformas para vender, controlar stock y armar
          catálogos, Fidel es para vos. Centralizá todo en un solo sistema y
          enfocá tu tiempo en vender y atender mejor a tus clientes.
        </motion.p>

        {/* Hero placeholder */}
        <motion.div
          className="mt-14 mx-auto w-full max-w-4xl rounded-[24px] overflow-hidden border border-[#e9e9e9d3]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src="/deco.png"
            alt="Sistema Fidel para casas de decoración"
            className="w-full h-auto"
          />
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
              <Sparkles className="size-4 text-[#121212]" />
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
            Todo lo que necesita tu local de decoración
          </h2>
          <p
            className="text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[20rem] md:w-[38rem] mx-auto pb-10"
            style={{ fontFamily: "Satoshi" }}
          >
            Herramientas pensadas para negocios deco que venden en tienda
            física y online, sin duplicar esfuerzo.
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
          <div className="flex justify-center items-center gap-x-2.5 pb-6">
            <GradientLine direction="left" />
            <ThreeStripesLeft />
            <div className="flex items-center rounded-full bg-[#f6f6f6] border border-[#e9e9e9] px-4 py-2 gap-x-2">
              <Sparkles className="size-4 text-[#121212]" />
              <span
                className="text-xs md:text-sm font-medium text-[#121212]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Fidel, el sistema pensado para negocios deco
              </span>
            </div>
            <ThreeStripesRight />
            <GradientLine direction="right" />
          </div>

          <h2
            className="text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-[#252525] tracking-tight leading-tight text-balance mx-auto max-w-3xl"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Estas herramientas ya están incluidas en{" "}
            <img src="/fidel1.svg" alt="Fidel" style={{ height: "1.5em", width: "auto", display: "inline", verticalAlign: "-0.35em", marginRight: "0.15em" }} />Fidel
          </h2>
          <p
            className="mt-6 text-[#5c5c5c] text-base md:text-lg xl:text-xl font-medium leading-relaxed mx-auto max-w-2xl"
            style={{ fontFamily: "Satoshi" }}
          >
            Junto con muchas más funciones pensadas para locales de decoración
            que venden en tienda física y online, todo en un solo sistema.
          </p>
        </div>
      </section>
    </>
  );
}
