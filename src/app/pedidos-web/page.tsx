"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  BadgePercent,
  ClipboardList,
  FilePlus2,
  ListFilter,
  LogIn,
  PackageSearch,
  Save,
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
    title: "Inicio de sesión para clientes:",
    icon: LogIn,
    image: "/pedidos-web-workflow-login.png",
    description:
      "Si el Cliente no inicia sesión pueden ver productos y fotos, pero no stock y precios.",
  },
  {
    title: "Listado de Productos con Precio, Stock (opcional) y Fotos:",
    icon: ListFilter,
    image: "/pedidos-web-workflow-products.png",
    description:
      "El cliente podrá realizar las búsquedas por diferentes filtros (nombre, código, marca, categoría, precio).",
  },
  {
    title: "Pedido Parcial",
    icon: Save,
    image: "/pedidos-web-workflow-order.png",
    description:
      "Se puede ir guardando parcialmente (en diferentes días) el Pedido y al finalizar la carga se confirma y se envía. En Fidel se recepcionará desde el menú Ventas → Pedidos, listo para facturarlo o presupuestarlo al Cliente.",
  },
  {
    title: "Nuevo pedido en Fidel",
    icon: FilePlus2,
    image: "/pedidos-web-workflow-fidel-order.png",
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
                      className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl ${isGreen
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

        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-[28px] border border-[#e3eddc] bg-[#f7fbf5] md:mt-16">
          {workflowDetails.map((item, index) => {
            const Icon = item.icon;
            const isGreen = index % 2 === 0;

            return (
              <article
                key={item.title}
                className="grid gap-5 border-b border-[#dfead9] p-5 last:border-b-0 md:grid-cols-[minmax(0,1.4fr)_minmax(200px,0.45fr)] md:items-center md:gap-8"
              >
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 md:gap-5">
                  <div
                    className={`mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl ${isGreen
                      ? "bg-[#d4ffcc] text-[#1B8C2B]"
                      : "bg-[#fff0d5] text-[#D08236]"
                      }`}
                    aria-hidden="true"
                  >
                    <Icon className="size-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold leading-snug tracking-[-0.015em] text-[#252525] md:text-lg"
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-2 max-w-3xl text-base leading-relaxed text-[#5c5c5c]"
                      style={{ fontFamily: "Satoshi" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
                {item.image ? (
                  <div className="relative mx-auto aspect-[16/9] w-full max-w-[230px] overflow-hidden rounded-[18px] border border-[#D08236]/25 bg-[#fff9ef] md:mx-0 md:justify-self-end">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 230px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    role="img"
                    aria-label="Espacio reservado para imagen"
                    className="mx-auto aspect-[16/9] w-full max-w-[230px] rounded-[18px] border border-dashed border-[#D08236]/45 bg-[#fff9ef] md:mx-0 md:justify-self-end"
                  />
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-7xl md:mt-40">
        <div className="mx-auto max-w-5xl">
          <div className="relative isolate overflow-hidden rounded-[36px] border border-[#d8e9d9] bg-[#eff9ec] px-5 py-8 shadow-[0_24px_70px_-42px_rgba(52,126,65,0.28)] md:px-10 md:py-12">
            <div
              className="pointer-events-none absolute -right-20 -top-24 -z-10 size-72 rounded-full bg-[#d4ffcc]/70 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-20 -z-10 size-72 rounded-full bg-[#92fda6]/90 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#252525] text-[#79e149] shadow-[0_10px_20px_-12px_rgba(37,37,37,0.8)]">
                  <BadgeDollarSign className="size-6" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <div>
                  <h2
                    className="text-3xl font-bold leading-tight tracking-[-0.035em] text-[#252525] md:text-5xl"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Costos
                  </h2>
                  <p className="mt-1 text-sm text-[#0c110d] md:text-base" style={{ fontFamily: "Satoshi" }}>
                    Una inversión clara para poner tu canal de ventas online en marcha.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative overflow-hidden rounded-[28px] bg-[#252525] p-6 text-white shadow-[0_18px_30px_-22px_rgba(37,37,37,0.9)] transition-transform duration-300 hover:-translate-y-1 md:p-8">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-[#d8ff73]/20 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-full flex-col justify-between gap-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold md:text-xl" style={{ fontFamily: "Plus Jakarta Sans" }}>
                          Desarrollo
                        </p>
                        <p className="mt-1 text-sm text-white/65" style={{ fontFamily: "Satoshi" }}>
                          Configuración inicial de tu plataforma
                        </p>
                      </div>
                      <span className="rounded-full bg-[#8ef86b] px-3 py-1.5 text-xs font-semibold text-[#252525]">
                        Pago único
                      </span>
                    </div>
                    <p
                      className="max-w-[15ch] text-3xl font-bold leading-[1.05] tracking-[-0.04em] md:text-5xl"
                      style={{ fontFamily: "Plus Jakarta Sans" }}
                    >
                      $ 500.000 <span className="whitespace-nowrap text-xl text-white/60 md:text-2xl">+ IVA</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-10 rounded-[28px] border border-[#d8e9d9] bg-white/85 p-6 shadow-[0_18px_30px_-26px_rgba(52,126,65,0.24)] transition-transform duration-300 hover:-translate-y-1 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="max-w-[14ch] text-lg font-semibold leading-tight text-[#252525] md:text-xl" style={{ fontFamily: "Plus Jakarta Sans" }}>
                        Mantenimiento mensual
                      </p>
                      <p className="mt-1 text-sm text-[#527257]" style={{ fontFamily: "Satoshi" }}>
                        Adicional al plan elegido en Fidel
                      </p>
                    </div>
                    <span className="rounded-full bg-[#dff3df] px-3 py-1.5 text-xs font-semibold text-[#071208]">
                      Mensual
                    </span>
                  </div>
                  <p
                    className="max-w-[15ch] text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-[#252525] md:text-5xl"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    $ 54.000 <span className="whitespace-nowrap text-xl text-[#6d8d73] md:text-2xl">+ IVA</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-[#d8e9d9] pt-5 text-sm leading-relaxed text-[#0c110d] md:text-base" style={{ fontFamily: "Satoshi" }}>
                <p>Ambos precios están sujetos a modificaciones.</p>
                <p className="mt-2 max-w-4xl">
                  Es importante que tengas en cuenta que una vez abonado el
                  servicio el tiempo destinado a su desarrollo es de 15 a 30 días
                  posterior al pago. Si tienes alguna duda o querés avanzar con el
                  desarrollo, estoy a disposición.
                </p>
              </div>
            </div>
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
            className="text-sm font-semibold text-white md:text-base"
          >
            Pedí tu Demo Gratis
          </a>
        </div>
      </section>
    </main>
  );
}
