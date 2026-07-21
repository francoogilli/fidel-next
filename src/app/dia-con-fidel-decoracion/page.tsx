"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import GradientLine from "@/components/gradientLine";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";

// Custom styles for glass-card and accents to guarantee look-and-feel
const styles = `
  .glass-card-fidel {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(229, 231, 235, 0.6);
    border-radius: 1rem;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
  }
`;

function BrowserChrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="glass-card-fidel overflow-hidden shadow-xl border border-gray-200/60 rounded-xl bg-white/60">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200/50 bg-gray-50/50">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <div className="flex-1 text-center text-[11px] text-gray-400 font-mono select-none">{url}</div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function MockDecoCierre() {
  return (
    <BrowserChrome url="fidel.com.ar / decoracion / resumen / diario">
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs border-b border-gray-200/50 pb-2">
          <div>
            <h4 className="font-bold text-gray-800">Resumen de Local y Tienda Online</h4>
            <p className="text-[9px] text-gray-400">Jornada finalizada · 18:30</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
            Sincronizado
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-gray-50 border border-gray-200/60 p-2 rounded-md">
            <span className="block text-[8px] text-gray-400 font-bold uppercase tracking-wider">Ventas Showroom</span>
            <span className="text-xs font-bold text-gray-700">$412.000</span>
          </div>
          <div className="bg-gray-50 border border-gray-200/60 p-2 rounded-md">
            <span className="block text-[8px] text-gray-400 font-bold uppercase tracking-wider">Ventas Online</span>
            <span className="text-xs font-bold text-purple-600">$298.500</span>
          </div>
          <div className="bg-gray-50 border border-gray-200/60 p-2 rounded-md">
            <span className="block text-[8px] text-gray-400 font-bold uppercase tracking-wider">Catálogos Enviados</span>
            <span className="text-xs font-bold text-blue-600">14</span>
          </div>
        </div>
        <div className="text-[10px] text-gray-400 text-center font-medium">
          Todo tu negocio de decoración conectado en un solo lugar.
        </div>
      </div>
    </BrowserChrome>
  );
}

type MomentType = {
  time: string;
  label: string;
  ai?: boolean;
  title: string;
  body: string;
  note?: string;
  mock: React.ReactNode;
};

function MomentComponent({ m, i }: { m: MomentType; i: number }) {
  const reverse = i % 2 === 1;
  return (
    <motion.div
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4 text-xs">
          <span className="font-semibold tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100/60">{m.time}</span>
          <span className="text-gray-400 font-semibold uppercase tracking-wider">{m.label}</span>
          {m.ai && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-purple-200 text-purple-600 bg-purple-50/50 flex items-center gap-1">
              <Sparkles className="size-3" /> IA
            </span>
          )}
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#252525] leading-snug tracking-tight" style={{ fontFamily: "Plus Jakarta Sans" }}>
          {m.title}
        </h3>
        <p className="mt-4 text-[#5c5c5c] text-sm md:text-base leading-relaxed" style={{ fontFamily: "Satoshi" }}>
          {m.body}
        </p>
        {m.note && (
          <p className="mt-3 text-xs text-gray-400 border-l-2 border-gray-200 pl-3 italic">
            {m.note}
          </p>
        )}
      </div>
      <div className="w-full max-w-md mx-auto lg:max-w-none">
        {m.mock}
      </div>
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-16 md:mb-24">
      <div className="flex justify-center items-center gap-x-2.5 sm:pb-5">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2">
          <Sparkles className="size-4 md:size-5 text-[#121212]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            {eyebrow}
          </h2>
        </div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>
      <div className="text-center mb-16">
        <h3
          className="max-w-6xl mx-auto text-4xl leading-[2.8rem] sm:leading-[3.7rem] md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 xl:pb-2.5 tracking-tighter text-[#252525]"
          style={{
            fontFamily: "Plus Jakarta Sans",
            opacity: 1,
          }}
        >
          {title}
        </h3>
        {sub && (
          <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 rounded-xl">
            <span
              className="text-xl md:text-lg text-black font-medium"
              style={{ fontFamily: "Satoshi" }}
            >
              {sub}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DiaConFidelDecoracionPage() {
  const moments: MomentType[] = [
    {
      time: "08:30",
      label: "Apertura del local",
      title: "Abrís el local y empezás el día organizado",
      body: "Llegás al local, encendés las luces, acomodás algunos productos y abrís Fidel. Antes de que entren los primeros clientes ya podés abrir la caja, ver el estado del stock, las ventas del día anterior y los pedidos pendientes. Toda la información está centralizada en un solo lugar. Sin planillas. Sin sistemas separados.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/deco.png"
            alt="Abrís el local y empezás el día organizado"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "09:15",
      label: "Ventas online",
      title: "Mientras atendés el local, también vendés online",
      body: "La primera venta del día no ocurre en el salón. Llega desde tu tienda online. El pedido ingresa automáticamente a Fidel, el stock se actualiza y la venta queda lista para facturar. No hay que copiar datos ni cargar información manualmente. Tu tienda online y tu sistema trabajan juntos.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/deco1.png"
            alt="Mientras atendés el local, también vendés online"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "10:30",
      label: "Experiencia QR",
      title: "Un cliente quiere conocer más detalles de un producto",
      body: "Una clienta está interesada en una lámpara decorativa. En lugar de buscar etiquetas o consultar listas impresas, escanea el código QR del producto desde su celular. Al instante puede ver información, precios y detalles del artículo. Menos tiempo respondiendo consultas repetitivas. Más tiempo asesorando y vendiendo.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/deco2.png"
            alt="Un cliente quiere conocer más detalles de un producto"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "11:45",
      label: "Catálogos visuales",
      title: "Una consulta llega por WhatsApp",
      body: "Una persona que visitó el local el fin de semana quiere volver a ver algunos productos. Desde Fidel generás un catálogo visual con fotos y precios actualizados. En pocos segundos lo enviás por WhatsApp. El cliente recibe una presentación profesional sin necesidad de armar documentos manualmente. Porque muchas ventas empiezan fuera del local.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/deco3.png"
            alt="Una consulta llega por WhatsApp"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "13:00",
      label: "Sincronización constante",
      title: "La tienda sigue vendiendo mientras almorzás",
      body: "Mientras el equipo descansa, siguen ingresando pedidos desde Tienda Nube y WooCommerce. Todas las ventas se sincronizan automáticamente. El stock se actualiza en tiempo real y evitás vender productos que ya no están disponibles. Menos errores. Mejor experiencia para tus clientes.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/deco1.png"
            alt="La tienda sigue vendiendo mientras almorzás"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "15:00",
      label: "Análisis de tendencias",
      title: "Detectás cuáles son los productos tendencia",
      body: "Durante la tarde revisás los indicadores del negocio. Observás cuáles son los artículos más vendidos, qué productos tienen menor rotación y cuáles necesitan reposición. La información está disponible en tiempo real para ayudarte a tomar mejores decisiones de compra. Porque vender más también implica comprar mejor.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/deco.png"
            alt="Detectás cuáles son los productos tendencia"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "16:30",
      label: "Control de stock mínimo",
      title: "Un producto está por agotarse",
      body: "Uno de los artículos más vendidos de la temporada está llegando al stock mínimo. Fidel te avisa automáticamente. Así podés anticiparte y realizar la reposición antes de perder oportunidades de venta. Sin controles manuales. Sin sorpresas de último momento.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/deco2.png"
            alt="Un producto está por agotarse"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "17:30",
      label: "Concreción de ventas",
      title: "Una clienta vuelve para concretar la compra",
      body: "Después de recibir el catálogo por WhatsApp, una clienta se decide por un conjunto de decoración que había visto anteriormente. La venta se realiza rápidamente porque toda la información ya está disponible y actualizada. Lo que comenzó con una consulta termina convirtiéndose en una venta.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/deco3.png"
            alt="Una clienta vuelve para concretar la compra"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "18:30",
      label: "Cierre de jornada",
      title: "Cerrás el local y todo quedó registrado",
      body: "Finaliza la jornada. Las ventas del local y de la tienda online están registradas. El stock quedó actualizado. Los pedidos pendientes están identificados. Y los catálogos enviados ayudaron a generar nuevas oportunidades de venta.",
      note: "Porque cuando gestionás un negocio de decoración, tu tiempo debería estar dedicado a inspirar clientes y generar ventas. No a realizar tareas repetitivas. Con Fidel, todo está conectado para que tu negocio funcione de forma más simple, profesional y eficiente.",
      mock: <MockDecoCierre />
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="backgroundImage"></div>
      <main className="min-h-screen py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <div id="dia">
          <SectionHeading
            eyebrow="Un día con Fidel"
            title="Un día con Fidel: así trabaja un local de decoración"
            sub="Cada momento del día muestra cómo Fidel acompaña la rutina de un local de decoración, conectando tu tienda física con tus canales digitales."
          />
          <div className="space-y-24 md:space-y-36 max-w-5xl mx-auto">
            {moments.map((m, i) => (
              <MomentComponent key={i} m={m} i={i} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
