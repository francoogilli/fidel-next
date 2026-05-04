"use client";

import { motion } from "framer-motion";
import { CheckItem } from "./check-item";
import GradientLine from "@/components/gradientLine";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";
import {
  Truck,
  Smartphone,
  RefreshCw,
  Users,
  ImageIcon,
  Wallet,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Pedidos sincronizados en tiempo real",
    description:
      "Tomá pedidos desde el celular y olvidate de la carga manual. Se sincronizan automáticamente con el sistema al instante.",
  },
  {
    icon: RefreshCw,
    title: "Clientes frecuentes, pedidos más rápidos",
    description:
      "Copiá pedidos anteriores, editá productos en segundos y cerrá ventas mucho más rápido con clientes habituales.",
  },
  {
    icon: Users,
    title: "Gestión de clientes desde la app",
    description:
      "Cargá clientes, asigná bonificaciones y enviá el detalle del pedido por WhatsApp, todo desde el celular.",
  },
  {
    icon: ImageIcon,
    title: "Productos con fotos, cero confusiones",
    description:
      "Cargá productos con imágenes para facilitar la identificación y reducir errores en la toma de pedidos.",
  },
  {
    icon: Wallet,
    title: "Gestión de pagos y cobranzas",
    description:
      "Generá recibos provisorios desde la app. Todo queda sincronizado con el sistema y la caja automáticamente.",
  },
  {
    icon: BarChart3,
    title: "Información clave al instante",
    description:
      "Consultá stock, listas de precios y saldos de clientes en tiempo real. Sin llamadas, sin volver a la oficina.",
  },
];

const detailSections = [
  {
    icon: Smartphone,
    badge: "Pedidos en tiempo real",
    title: "Tomá pedidos desde la app y olvidate de la carga manual",
    description:
      "Con Fidel, los pedidos se cargan desde el celular y se sincronizan automáticamente con el sistema. La facturación y preparación comienza al instante.",
    items: [
      "Los pedidos se cargan desde el celular sin conexión.",
      "Se sincronizan automáticamente con el sistema.",
      "La facturación y preparación de pedidos comienza al instante",
    ],
    image: "/distribuidoras1.png",
    reverse: false,
  },
  {
    icon: RefreshCw,
    badge: "Clientes frecuentes",
    title: "Repetí pedidos en segundos y cerrá más ventas",
    description:
      "¿Tus clientes repiten siempre pedidos similares? Fidel te permite copiar pedidos anteriores, editarlos y cerrar la venta en tiempo récord.",
    items: [
      "Copiá pedidos anteriores con un solo toque",
      "Editá o eliminá productos en segundos",
      "Cerrá ventas mucho más rápido con clientes habituales",
    ],
    image: "/distribuidoras2.png",
    reverse: true,
  },
  {
    icon: Users,
    badge: "Gestión de clientes",
    title: "Todo lo que necesitás del cliente, desde el celular",
    description:
      "Cargá nuevos clientes, asigná condiciones comerciales y comunicá el pedido por WhatsApp, todo sin salir de la app.",
    items: [
      "Cargá nuevos clientes desde la app.",
      "Asigná bonificaciones y condiciones comerciales",
      "Enviá el detalle del pedido por WhatsApp al instante",
    ],
    image: "/distribuidoras3.png",
    reverse: false,
  },
  {
    icon: Wallet,
    badge: "Pagos y cobranzas",
    title: "Control total de los pagos sin papeles ni confusiones",
    description:
      "Registrá pagos directamente desde la app sin interrumpir el circuito de ventas. El área de cobranzas recibe la información sincronizada.",
    items: [
      "Generá recibos provisorios desde la app",
      "El área de cobranzas procesa la información automáticamente",
      "Todo queda sincronizado con el sistema y la caja",
    ],
    image: "/distribuidoras4.png",
    reverse: true,
  },
];

export default function DistribuidorasPage() {
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
            <Truck className="size-4 text-[#121212]" />
            <span
              className="text-xs md:text-sm font-medium text-[#121212]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Fidel para Distribuidoras
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
          El sistema de gestión ideal para ventas en movimiento
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-5 text-[#5c5c5c] text-base md:text-lg xl:text-xl font-medium leading-relaxed mx-auto max-w-2xl"
          style={{ fontFamily: "Satoshi" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ¿Tenés una distribuidora con vendedores que toman pedidos en la calle?
          Fidel simplifica la gestión comercial, acelera las ventas y mantiene
          toda la información sincronizada en tiempo real, sin errores ni demoras.
        </motion.p>

        {/* Account count */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-x-3 rounded-2xl bg-[#d4ffcc] border border-[#81fc71] px-6 py-3">
            <span
              className="text-3xl font-bold text-[#1db31d]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              +180
            </span>
            <span
              className="text-base font-medium text-[#18a018]"
              style={{ fontFamily: "Satoshi" }}
            >
              distribuidoras ya confían en Fidel
            </span>
          </div>
        </motion.div>

        {/* Hero placeholder */}
        <motion.div
          className="mt-14 mx-auto w-full max-w-4xl rounded-[24px] overflow-hidden border border-[#e9e9e9d3]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img
            src="/distribuidoras.png"
            alt="Sistema Fidel para distribuidoras"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <div
        id="funcionalidades-distribuidoras"
        className="pb-20 md:pb-28"
        style={{ background: "linear-gradient(to bottom, #FFFFFF, transparent)" }}
      >
        <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-4">
          {/* Section header */}
          <div className="flex justify-center items-center gap-x-2.5 pt-4 pb-6">
            <GradientLine direction="left" />
            <ThreeStripesLeft />
            <div className="flex items-center rounded-full bg-[#f6f6f6] border border-[#e9e9e9] px-4 py-2 gap-x-2">
              <Truck className="size-4 text-[#121212]" />
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
            Todo lo que necesita tu distribuidora
          </h2>
          <p
            className="text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[20rem] md:w-[38rem] mx-auto pb-10"
            style={{ fontFamily: "Satoshi" }}
          >
            Herramientas diseñadas para que tus vendedores vendan más y tu
            empresa funcione sin errores ni demoras.
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
          <div className="flex justify-center items-center gap-x-2.5 pb-6">
            <GradientLine direction="left" />
            <ThreeStripesLeft />
            <div className="flex items-center rounded-full bg-[#f6f6f6] border border-[#e9e9e9] px-4 py-2 gap-x-2">
              <Truck className="size-4 text-[#121212]" />
              <span
                className="text-xs md:text-sm font-medium text-[#121212]"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Fidel, el aliado de tu distribuidora
              </span>
            </div>
            <ThreeStripesRight />
            <GradientLine direction="right" />
          </div>

          <h2
            className="text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-[#252525] tracking-tight leading-tight text-balance mx-auto max-w-4xl"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            <img src="/fidel1.svg" alt="Fidel" style={{ height: "1.5em", width: "auto", display: "inline", verticalAlign: "-0.35em", marginRight: "0.15em" }} />Fidel conecta ventas, stock, cobranzas y administración
          </h2>
          <p
            className="mt-6 text-[#5c5c5c] text-base md:text-lg xl:text-xl font-medium leading-relaxed mx-auto max-w-2xl"
            style={{ fontFamily: "Satoshi" }}
          >
            Un solo sistema pensado para distribuidoras que necesitan velocidad,
            control y precisión en cada movimiento.
          </p>
        </div>
      </section>
    </>
  );
}
