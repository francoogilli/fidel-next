"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  BadgePercent,
  ClipboardList,
  PackageSearch,
  UserRoundCheck,
  Wrench,
} from "lucide-react";
import GradientLine from "@/components/gradientLine";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";

const productDetails = [
  {
    title: "Visualización de productos:",
    icon: PackageSearch,
    description:
      "La página web estará sincronizada con tu cuenta de Fidel, mostrando tus productos tal como están en el sistema (nombre, imagen, stock y precio).",
  },
  {
    title: "Acceso exclusivo para clientes:",
    icon: UserRoundCheck,
    description:
      "Podrás generar usuarios y contraseñas desde Fidel para que tus clientes ingresen, visualicen tus productos y realicen pedidos.",
  },
  {
    title: "Gestión de pedidos:",
    icon: ClipboardList,
    description:
      "Los pedidos que realicen tus clientes se enviarán automáticamente al Módulo de Ventas → Pedidos, donde podrás Facturarlos o Presupuestarlos según corresponda.",
  },
  {
    title: "Cálculo de precios de venta:",
    icon: BadgePercent,
    description:
      "Tus clientes podrán ingresar su margen de ganancia en la web para conocer el precio final de sus productos.",
  },
];

const workflowDetails = [
  {
    title: "INICIO DE SESIÓN PARA CLIENTES:",
    description:
      "Si el Cliente no inicia sesión pueden ver productos y fotos, pero no stock y precios.",
  },
  {
    title: "LISTADO DE PRODUCTOS CON PRECIO, STOCK (opcional) Y FOTOS:",
    description:
      "El cliente podrá realizar las búsquedas por diferentes filtros (nombre, código, marca, categoría, precio).",
  },
  {
    title: "PEDIDO PARCIAL:",
    description:
      "Se puede ir guardando parcialmente (en diferentes días) el Pedido y al finalizar la carga se confirma y se envía. En Fidel se recepcionará desde el menú Ventas → Pedidos, listo para facturarlo o presupuestarlo al Cliente.",
  },
  {
    title: "NUEVO PEDIDO EN FIDEL",
    description:
      "Ingresa un nuevo Pedido en Fidel para Facturar o Presupuestar, se puede habilitar una opción para que, al confirmar el Pedido el Cliente, se envíe por Email una copia al Cliente y otra a la Empresa.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
          {children}
        </span>
      </div>
      <ThreeStripesRight />
      <GradientLine direction="right" />
    </motion.div>
  );
}

export default function PedidosWebPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf9] px-4 pb-20 pt-12 text-[#252525] selection:bg-[#d8ff73] selection:text-[#0b0b0c] md:px-6 md:pt-20">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">

          <SectionLabel>Soluciones en la nube para tu empresa</SectionLabel>
          <h1
            className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#252525] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Pedidos Web
          </h1>

        </div>

        <div className="mx-auto mt-16 grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] md:gap-14 lg:mt-20">
          <div className="max-w-xl">
            <h2
              className="text-3xl font-bold leading-tight tracking-[-0.035em] text-[#252525] md:text-4xl"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              ¿Realizás ventas mayoristas?
            </h2>
            <div
              className="mt-6 space-y-5 text-base leading-relaxed text-[#5c5c5c] md:text-lg"
              style={{ fontFamily: "Satoshi" }}
            >
              <p>
                Desarrollamos tu propia plataforma web de ventas, en tu dominio
                web (por ejemplo: {" "}
                <span
                  className="font-medium text-[#252525] underline decoration-[#D08236] decoration-1 underline-offset-4"
                >
                  www.miempresa.com.ar
                </span>
                ), sincronizada en tiempo real con los datos de los productos
                cargados en Fidel para la venta directa a tus clientes.
              </p>
              <p>
                Cada cliente tendrá su usuario y contraseña para realizar
                pedidos que luego podrás Facturar desde Fidel, con toda la
                información ya cargada.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
            <Image
              src="/pedidos-web-hero-v2.png"
              alt=""
              width={1536}
              height={1024}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-7xl md:mt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#252525] md:text-5xl"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            ¿En qué consiste?
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl items-stretch gap-8 md:mt-20 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:gap-12">
          <div className="rounded-[28px] border border-[#e3eddc] bg-[#f7fbf5] px-6 py-6 md:px-8 md:py-8">
            <dl className="divide-y divide-[#dfead9]">
              {productDetails.map((item, index) => {
                const Icon = item.icon;
                const isGreen = index % 2 === 0;

                return (
                  <div
                    key={item.title}
                    className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 py-4 first:pt-0 last:pb-0 md:gap-4"
                  >
                    <div
                        className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl ${
                        isGreen
                          ? "bg-[#d4ffcc] text-[#1B8C2B]"
                          : "bg-[#fff0d5] text-[#D08236]"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className="size-5" strokeWidth={2} />
                    </div>
                    <div>
                      <dt
                        className="text-base font-bold leading-snug text-[#252525] md:text-[17px]"
                        style={{ fontFamily: "Plus Jakarta Sans" }}
                      >
                        {item.title}
                      </dt>
                      <dd
                        className="mt-1 max-w-3xl text-[15px] leading-6 text-[#5c5c5c]"
                        style={{ fontFamily: "Satoshi" }}
                      >
                        {item.description}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-[380px] self-center overflow-hidden rounded-[32px] border border-[#D08236]/25 bg-[#fff9ef] lg:aspect-auto lg:min-h-[420px] lg:self-stretch lg:justify-self-end">
            <Image
              src="/pedidos-web-section-v2.png"
              alt="PedidosWeb"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-7xl md:mt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#252525] md:text-5xl"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            ¿Cómo funciona?
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl border-y border-[#e5e3df] md:mt-16">
          {workflowDetails.map((item) => (
            <article
              key={item.title}
              className="grid gap-3 border-b border-[#e5e3df] py-8 last:border-b-0 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] md:gap-12 md:py-10"
            >
              <h3
                className="text-base font-bold leading-snug tracking-[-0.015em] text-[#252525] md:text-lg"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                {item.title}
              </h3>
              <p
                className="max-w-3xl text-base leading-relaxed text-[#5c5c5c]"
                style={{ fontFamily: "Satoshi" }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-7xl md:mt-40">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mt-5 flex items-center justify-center gap-3">
              <BadgeDollarSign className="size-7 md:size-9" aria-hidden="true" />
              <h2
                className="text-3xl font-bold leading-tight tracking-[-0.035em] text-[#252525] md:text-5xl"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Costos
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-0 border-y border-[#e5e3df] md:mt-16 md:grid-cols-2 md:divide-x md:divide-[#e5e3df]">
            <div className="py-9 md:pr-12 md:py-12">
              <h2
                className="text-2xl font-bold text-[#252525] md:text-3xl"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Development
              </h2>
              <p
                className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#1B8C2B] md:text-4xl"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                $ 500.000 + IVA (pago único)
              </p>
            </div>
            <div className="border-t border-[#e5e3df] py-9 md:border-t-0 md:pl-12 md:py-12">
              <h2
                className="text-2xl font-bold text-[#252525] md:text-3xl"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                Monthly maintenance
              </h2>
              <p
                className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#1B8C2B] md:text-4xl"
                style={{ fontFamily: "Plus Jakarta Sans" }}
              >
                $ 54.000 + IVA (adicional al plan elegido en Fidel)
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-[#5c5c5c] md:text-lg" style={{ fontFamily: "Satoshi" }}>
            <p>Ambos precios están sujetos a modificaciones.</p>
            <p>
              Es importante que tengas en cuenta que una vez abonado el
              servicio el tiempo destinado a su desarrollo es de 15 a 30 días
              posterior al pago. Si tienes alguna duda o querés avanzar con el
              desarrollo, estoy a disposición.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-5xl text-center md:mt-40">
        <h2
          className="text-4xl font-bold leading-tight tracking-[-0.04em] text-[#252525] md:text-6xl"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Vendé sin complicaciones
        </h2>
        <div className="mt-10 inline-flex rounded-full bg-[#0b0b0c] px-6 py-3.5 shadow-[0_12px_24px_-16px_rgba(0,0,0,0.7)]">
          <a
            href="https://wa.me/543564212129"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white underline decoration-[#d8ff73] decoration-1 underline-offset-4 md:text-base"
          >
            / Pedí tu Demo Gratis
          </a>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-5xl border-t border-[#e5e3df] pt-10 md:mt-40 md:pt-14">
        <div className="text-center">
          <SectionLabel>NO DUDES EN CONSULTARNOS</SectionLabel>
          <h2
            className="mt-5 text-3xl font-bold tracking-[-0.035em] text-[#252525] md:text-5xl"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            CONTACTO
          </h2>
        </div>

        <div className="mt-12 grid gap-8 text-center sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5c5c5c]">
              WhatsApp Ventas
            </p>
            <a
              href="tel:+543564212129"
              className="mt-3 inline-block text-2xl font-bold text-[#252525] underline decoration-[#D08236] decoration-1 underline-offset-4 md:text-3xl"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              +54 3564 21-2129
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5c5c5c]">
              Instagram
            </p>
            <Link
              href="https://www.instagram.com/fidelsistema"
              target="_blank"
              className="mt-3 inline-block text-2xl font-bold text-[#252525] underline decoration-[#D08236] decoration-1 underline-offset-4 md:text-3xl"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              / fidelsistema
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
