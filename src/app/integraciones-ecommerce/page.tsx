import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ArrowDownUp,
  Check,
  CircleHelp,
  ClipboardList,
  Image as ImageIcon,
  Layers3,
  PackageCheck,
  ShoppingBag,
  Tag,
} from "lucide-react";
import GradientLine from "@/components/gradientLine";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";
import TiendaNubeIcon from "@/icons/tiendaNube";

export const metadata: Metadata = {
  title: "Integraciones E-Commerce | Fidel",
  description:
    "Vinculá masivamente tus productos de Fidel con Tienda Nube o WooCommerce. Mantené actualizados el stock y los precios, y recibí las ventas como pedidos listos para facturar.",
};


const syncedDetails = [
  { label: "Precio", icon: Tag },
  { label: "Foto", icon: ImageIcon },
  { label: "Stock disponible", icon: PackageCheck },
  { label: "Descripción detallada", icon: ClipboardList },
  { label: "Hasta tres variantes por producto", icon: Layers3 },
];

const setupSteps = [
  {
    title: "Acceso a tu tienda",
    text: "Una vez que contrates Fidel, pasanos el acceso a la cuenta de Tienda Nube o WooCommerce que quieras vincular.",
  },
  {
    title: "Productos y categorías",
    text: "Asegurate de que la tienda no tenga productos ni categorías cargadas previamente. La sincronización y las futuras modificaciones se hacen desde Fidel.",
  },
  {
    title: "Diseño de la tienda",
    text: "La creación y el diseño de la tienda online quedan a tu cargo para que se genere según tus preferencias.",
  },
];

const planLimits = [
  { name: "Inicial", quantity: "300" },
  { name: "Intermedio", quantity: "1.000" },
  { name: "Avanzado", quantity: "2.000" },
];

function SectionLabel() {
  return (
    <div className="flex items-center justify-center gap-x-2.5 pb-6">
      <GradientLine direction="left" />
      <ThreeStripesLeft />
      <span
        className="flex items-center gap-2 rounded-full border border-[#e9e9e9] bg-[#f6f6f6] px-4 py-2 text-xs font-medium text-[#121212] md:text-sm"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        <ShoppingBag className="size-4" aria-hidden="true" />
        Soluciones en la nube para tu empresa
      </span>
      <ThreeStripesRight />
      <GradientLine direction="right" />
    </div>
  );
}

export default function IntegracionesEcommercePage() {
  return (
    <main className="min-h-screen bg-[#fcfbf9] px-4 pb-20 pt-12 text-[#252525] selection:bg-[#d8ff73] selection:text-[#0b0b0c] md:px-6 md:pt-20">
      <section className="mx-auto max-w-7xl" aria-labelledby="page-title">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel />
          <h1
            id="page-title"
            className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Integraciones E-Commerce
          </h1>
          <p className="mt-4 text-base text-[#5c5c5c] md:text-lg" style={{ fontFamily: "Satoshi" }}>
            Tienda Nube y WooCommerce conectadas con Fidel.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] md:gap-14 lg:mt-20">
          <div className="max-w-xl">
            <h2
              className="text-3xl font-bold leading-tight tracking-[-0.035em] md:text-4xl"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Tu tienda online y tu gestión, conectadas
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#5c5c5c] md:text-lg" style={{ fontFamily: "Satoshi" }}>
              <p>
                Fidel se integra con Tienda Nube y WooCommerce para mantener actualizados el stock y la lista de precios de tus productos.
              </p>
              <p>
                Las ventas ingresan automáticamente como pedidos en Fidel, con el cliente ya cargado, para que solo tengas que facturar.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-[#e3eddc] bg-[#f7fbf5] p-5 sm:p-7" aria-label="Esquema de integración entre los canales de venta online y Fidel">
            <div className="flex items-center justify-between gap-3 border-b border-[#dce9d8] pb-4">
              <span className="text-sm font-semibold text-[#305d36]" style={{ fontFamily: "Plus Jakarta Sans" }}>Tienda Nube, Mercado Libre y WooCommerce</span>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#e2f6df] px-3 py-1 text-xs font-medium text-[#225d2b]">
                <span className="size-1.5 rounded-full bg-[#3dba50]" aria-hidden="true" />
                Sincronizada
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="flex min-h-20 items-center justify-center rounded-2xl border border-[#e8eee5] bg-white px-2 sm:px-4">
                <TiendaNubeIcon className="h-10 w-32 max-w-full" fill="#2673d9" />
                <span className="sr-only">Tienda Nube</span>
              </div>
              <div className="flex min-h-20 items-center justify-center rounded-2xl border border-[#e8eee5] bg-white px-2 sm:px-4">
                <Image src="/mercado-libre.png" alt="Mercado Libre" width={72} height={72} className="h-16 w-16 max-w-full object-contain" />
              </div>
              <div className="flex min-h-20 items-center justify-center rounded-2xl border border-[#e8eee5] bg-white px-2 sm:px-4">
                <Image src="/woocommerce.svg" alt="WooCommerce" width={150} height={70} className="h-12 w-auto max-w-full object-contain" />
              </div>
            </div>
            <div className="relative mx-auto flex h-16 w-fit items-center justify-center" aria-hidden="true">
              <span className="absolute top-0 h-16 w-px bg-[#b9d8b4]" />
              <span className="relative flex size-9 items-center justify-center rounded-full border border-[#c9e4c4] bg-white text-[#31823b] shadow-[0_5px_16px_-9px_rgba(49,130,59,0.6)]">
                <ArrowDownUp className="size-4" />
              </span>
            </div>
            <div className="rounded-[20px] border border-[#d8e9d9] bg-white p-4 shadow-[0_16px_32px_-25px_rgba(52,126,65,0.35)] sm:p-5">
              <div className="flex items-center justify-between gap-3 border-b border-[#edf2eb] pb-3">
                <div className="flex items-center gap-2">
                  <Image src="/fidel1.svg" alt="" width={27} height={27} />
                  <span className="font-semibold" style={{ fontFamily: "Plus Jakarta Sans" }}>Fidel</span>
                </div>
                <span className="text-xs text-[#667367]">Ventas / Pedidos</span>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#f7fbf5] px-3 py-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d4ffcc] text-[#1b8c2b]"><ClipboardList className="size-5" aria-hidden="true" /></span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Nuevo pedido online</p>
                  <p className="text-xs text-[#637063]">Cliente cargado · listo para facturar</p>
                </div>
                <Check className="ml-auto size-5 shrink-0 text-[#1b8c2b]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-7xl md:mt-40" aria-labelledby="sync-title">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="sync-title" className="text-3xl font-bold leading-tight tracking-[-0.035em] md:text-5xl" style={{ fontFamily: "Plus Jakarta Sans" }}>
            ¿Qué se sincroniza?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5c5c5c] md:text-lg" style={{ fontFamily: "Satoshi" }}>
            Desde Fidel, podés vincular masivamente tus productos a Tienda Nube o WooCommerce. En la tienda se reflejan:
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl items-stretch gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-12">
          <div className="rounded-[28px] border border-[#e3eddc] bg-[#f7fbf5] px-6 py-6 md:px-8 md:py-8">
            <ul className="divide-y divide-[#dfead9]">
              {syncedDetails.map(({ label, icon: Icon }, index) => (
                <li key={label} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${index % 2 ? "bg-[#fff0d5] text-[#d08236]" : "bg-[#d4ffcc] text-[#1b8c2b]"}`}>
                    <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="text-base font-semibold md:text-lg" style={{ fontFamily: "Plus Jakarta Sans" }}>{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-[28px] border border-[#f0e4cc] bg-[#fff9ef] p-7 md:p-9">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#fff0d5] text-[#d08236]"><ShoppingBag className="size-6" aria-hidden="true" /></div>
            <h3 className="mt-7 text-2xl font-bold tracking-[-0.035em] md:text-3xl" style={{ fontFamily: "Plus Jakarta Sans" }}>Pedidos listos para facturar</h3>
            <p className="mt-4 text-base leading-relaxed text-[#5c5c5c]" style={{ fontFamily: "Satoshi" }}>
              Cuando un cliente compra en tu e-commerce, el pedido llega a Fidel. Allí podés revisarlo y facturarlo sin volver a cargarlo.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-7xl md:mt-40" aria-labelledby="steps-title">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="steps-title" className="text-3xl font-bold leading-tight tracking-[-0.035em] md:text-5xl" style={{ fontFamily: "Plus Jakarta Sans" }}>¿Cómo empezar?</h2>
        </div>
        <ol className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-[28px] border border-[#e3eddc] bg-[#f7fbf5] md:mt-16">
          {setupSteps.map((step, index) => (
            <li key={step.title} className="grid gap-4 border-b border-[#dfead9] p-6 last:border-b-0 md:grid-cols-[auto_minmax(0,1fr)] md:gap-6 md:p-8">
              <span className={`flex size-11 items-center justify-center rounded-2xl text-lg font-bold ${index % 2 ? "bg-[#fff0d5] text-[#a86119]" : "bg-[#d4ffcc] text-[#1b8c2b]"}`} aria-hidden="true">{index + 1}</span>
              <div>
                <h3 className="text-lg font-bold tracking-[-0.015em] md:text-xl" style={{ fontFamily: "Plus Jakarta Sans" }}>{step.title}</h3>
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-[#5c5c5c]" style={{ fontFamily: "Satoshi" }}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-28 max-w-7xl md:mt-40" aria-labelledby="pricing-title">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[36px] border border-[#d8e9d9] bg-[#eff9ec] px-5 py-8 md:px-10 md:py-12">
            <h2 id="pricing-title" className="text-3xl font-bold leading-tight tracking-[-0.035em] md:text-5xl" style={{ fontFamily: "Plus Jakarta Sans" }}>Costos y planes</h2>
            <p className="mt-2 text-base text-[#405d43]" style={{ fontFamily: "Satoshi" }}>La integración está disponible desde el Plan Inicial.</p>
            <div className="mt-10 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between gap-10 rounded-[28px] bg-[#252525] p-6 text-white shadow-[0_18px_30px_-22px_rgba(37,37,37,0.9)] md:p-8">
                <div>
                  <p className="text-lg font-semibold md:text-xl" style={{ fontFamily: "Plus Jakarta Sans" }}>Costo de implementación</p>
                  <p className="mt-1 text-sm text-white/70" style={{ fontFamily: "Satoshi" }}>Pago único</p>
                </div>
                <p className="text-3xl font-bold leading-[1.05] tracking-[-0.04em] md:text-5xl" style={{ fontFamily: "Plus Jakarta Sans" }}>
                  $ 276.000 <span className="whitespace-nowrap text-xl text-white/65 md:text-2xl">+ IVA</span>
                </p>
              </div>
              <div className="rounded-[28px] border border-[#d8e9d9] bg-white/85 p-6 md:p-8">
                <h3 className="text-lg font-semibold md:text-xl" style={{ fontFamily: "Plus Jakarta Sans" }}>Productos que podés vincular</h3>
                <p className="mt-1 text-sm text-[#526e56]" style={{ fontFamily: "Satoshi" }}>Límite según el plan de Fidel que contrates</p>
                <dl className="mt-6 divide-y divide-[#e3eddc]">
                  {planLimits.map((plan) => (
                    <div key={plan.name} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                      <dt className="text-sm font-medium text-[#3f4d40] sm:text-base">Plan {plan.name}</dt>
                      <dd className="whitespace-nowrap text-base font-bold tabular-nums sm:text-lg" style={{ fontFamily: "Plus Jakarta Sans" }}><span className="text-sm font-normal text-[#526e56]">hasta </span>{plan.quantity} <span className="text-sm font-normal text-[#526e56]">productos</span></dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3 border-t border-[#d8e9d9] pt-5 text-sm leading-relaxed text-[#405d43] md:text-base" style={{ fontFamily: "Satoshi" }}>
              <CircleHelp className="mt-0.5 size-5 shrink-0 text-[#32833e]" aria-hidden="true" />
              <p>Si tenés productos variantes, cada variante cuenta como un producto al vincular Tienda Nube. Para sumar más productos, podés cambiar de plan.</p>
            </div>
            <a href="https://mejorasfidel.vercel.app/planes" target="_blank" rel="noopener noreferrer" className="mt-4 flex w-fit items-center gap-2 text-sm font-semibold text-[#205d2a] underline decoration-[#7ebf78] underline-offset-4 hover:text-[#123d19] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#205d2a]">
              Conocé los planes de Fidel <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-5xl text-center md:mt-40" aria-labelledby="contact-title">
        <h2 id="contact-title" className="text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl" style={{ fontFamily: "Plus Jakarta Sans" }}>Vendé sin complicaciones</h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-[#5c5c5c] md:text-lg" style={{ fontFamily: "Satoshi" }}>Si tenés dudas o querés avanzar con la implementación, estamos para ayudarte.</p>
        <a href="https://wa.me/message/2OLNOPTCUKLTO1" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0b0b0c] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-16px_rgba(0,0,0,0.7)] hover:bg-[#2b2b2d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1b8c2b] md:text-base">
          Pedí tu demo gratis <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#5c5c5c]" style={{ fontFamily: "Satoshi" }}>
          <a href="https://wa.me/message/2OLNOPTCUKLTO1" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[#205d2a]">WhatsApp Ventas: +54 3564 21-2129</a>
          <a href="https://www.instagram.com/fidelsistema/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[#205d2a]">Instagram: @fidelsistema</a>
        </div>
      </section>
    </main>
  );
}
