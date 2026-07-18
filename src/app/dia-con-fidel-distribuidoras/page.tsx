"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowRight, Share2, FileText, CheckCircle2, ShoppingCart, RefreshCw, Layers } from "lucide-react";
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

function MockDistribuidoraCierre() {
  return (
    <BrowserChrome url="fidel.com.ar / distribuidora / panel / resumen">
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs border-b border-gray-200/50 pb-2">
          <div>
            <h4 className="font-bold text-gray-800">Resumen del Día y Sincronización</h4>
            <p className="text-[9px] text-gray-400">Jornada finalizada · 18:00</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
            Sincronizado
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-gray-50 border border-gray-200/60 p-2 rounded-md">
            <span className="block text-[8px] text-gray-400 font-bold uppercase tracking-wider">Pedidos Recibidos</span>
            <span className="text-xs font-bold text-gray-700">42</span>
          </div>
          <div className="bg-gray-50 border border-gray-200/60 p-2 rounded-md">
            <span className="block text-[8px] text-gray-400 font-bold uppercase tracking-wider">Cobranzas</span>
            <span className="text-xs font-bold text-emerald-600">$840.500</span>
          </div>
          <div className="bg-gray-50 border border-gray-200/60 p-2 rounded-md">
            <span className="block text-[8px] text-gray-400 font-bold uppercase tracking-wider">Clientes Nuevos</span>
            <span className="text-xs font-bold text-blue-600">3</span>
          </div>
        </div>
        <div className="text-[10px] text-gray-400 text-center font-medium">
          Todo el equipo trabaja conectado en tiempo real.
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

export default function DiaConFidelDistribuidorasPage() {
  const moments: MomentType[] = [
    {
      time: "07:45",
      label: "Arranca la jornada",
      title: "Martín arranca el día con la información en su mano",
      body: "Antes de salir a recorrer clientes, Martín abre la aplicación de Fidel desde su celular. Revisa su Hoja de Ruta del día, consulta el saldo de algunos clientes y verifica que tiene la lista de precios actualizada. No necesita llamar a la oficina ni pedir información por WhatsApp. Todo está disponible desde la app.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diadi1.png"
            alt="Arranca la jornada"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "08:30",
      label: "Toma de pedidos",
      title: "Primera visita, primer pedido cargado en segundos",
      body: "Martín llega a un autoservicio que compra mercadería todas las semanas. El cliente necesita prácticamente los mismos productos que en el pedido anterior. En lugar de cargar todo nuevamente, Martín copia el último pedido realizado y modifica únicamente algunas cantidades. En menos de un minuto el pedido está listo. Más velocidad para vender. Menos tiempo cargando información.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diadi2.png"
            alt="Primera visita, primer pedido"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "09:15",
      label: "Consulta de stock",
      title: "Stock al instante frente al cliente",
      body: "Durante la visita, el cliente pregunta por un producto específico. Antes, esto implicaba llamar a la oficina para consultar disponibilidad. Ahora Martín verifica el stock desde la aplicación y confirma al instante cuántas unidades quedan disponibles. La respuesta es inmediata y el pedido se cierra sin demoras.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diadi3.png"
            alt="Consulta de stock en tiempo real"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "10:45",
      label: "Alta de clientes",
      title: "Nuevas oportunidades registradas al momento",
      body: "Durante el recorrido surge una oportunidad. Un comercio quiere comenzar a comprarle a la distribuidora. Martín crea el nuevo cliente directamente desde la aplicación. Carga sus datos y registra la información necesaria sin volver a la oficina. Cuando finaliza, el cliente ya está disponible para toda la empresa.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/distribuidoras3.png"
            alt="Nuevos clientes sin papeleo"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "11:30",
      label: "Catálogos visuales",
      title: "Catálogo visual para evitar confusiones",
      body: "Mientras arma un pedido, el cliente tiene dudas sobre algunas presentaciones. Martín utiliza las imágenes cargadas en los productos para identificar rápidamente cada artículo. Esto evita confusiones, reduce errores y agiliza la toma de pedidos. Todos hablan del mismo producto desde el primer momento.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/distribuidoras1.png"
            alt="Productos con fotos, menos errores"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "12:00",
      label: "Carga de facturas (IA)",
      ai: true,
      title: "Nueva mercadería cargada en minutos",
      body: "Mientras tanto desde el depósito reciben una nueva entrega de productos. Antes, esto significaba ingresar manualmente cada artículo, cantidad y precio de la factura. Una tarea repetitiva que consumía tiempo y podía generar errores. Ahora simplemente cargás una foto o el PDF de la factura de compra en Fidel. La inteligencia artificial identifica automáticamente al proveedor, detecta los productos incluidos, las cantidades, los precios y el total de la factura. En pocos segundos la compra queda registrada en el sistema y el stock se actualiza automáticamente.",
      note: "Mientras antes dedicabas varios minutos a tareas administrativas, ahora podés volver rápidamente a lo importante: atender clientes, vender y hacer crecer tu negocio.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/distribuidoras_ia.png"
            alt="Llega nueva mercadería y la cargás en minutos"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "12:30",
      label: "Sincronización",
      title: "Los pedidos ya están en la oficina",
      body: "Mientras Martín continúa recorriendo clientes, el equipo administrativo ya puede ver los pedidos que fue cargando durante la mañana. No hay que esperar que regrese para ingresar la información. Los pedidos se sincronizan automáticamente con el sistema en tiempo real. La preparación de la mercadería puede comenzar incluso antes de que termine el recorrido.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/distribuidoras.png"
            alt="Pedidos en la oficina en tiempo real"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "14:00",
      label: "Cobranzas",
      title: "Registro de cobros al instante",
      body: "Uno de los clientes aprovecha la visita para cancelar una deuda pendiente. Martín registra el cobro desde la aplicación y genera un recibo provisorio en el momento. La información queda sincronizada automáticamente para que sea procesada por la Administración. Sin papeles. Sin cargas duplicadas.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/distribuidoras4.png"
            alt="Un cliente realiza un pago"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "15:30",
      label: "Información de ventas",
      title: "Listas de precios y condiciones a un tap de distancia",
      body: "Antes de cerrar una venta importante, el cliente consulta precios y condiciones. Martín accede desde la aplicación a las listas de precios vigentes y verifica saldos pendientes. No necesita llamar a nadie ni esperar respuestas. Toda la información está disponible donde la necesita: frente al cliente.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/distribuidoras1.png"
            alt="Información comercial siempre disponible"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "17:00",
      label: "Operaciones conectadas",
      title: "Depósito y administración trabajando en sintonía",
      body: "Los pedidos continúan ingresando y sincronizándose automáticamente. Desde la oficina pueden seguir la actividad comercial en tiempo real, mientras el equipo de depósito prepara la mercadería para las entregas del día siguiente. Cada área trabaja con la misma información. Sin planillas paralelas. Sin errores por transcripción.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/distribuidoras.png"
            alt="Últimas visitas del día"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "18:00",
      label: "Resumen del día",
      title: "El día termina, la gestión ya está hecha",
      body: "Martín regresa a su casa. No tiene que pasar por la oficina para entregar pedidos ni rendir papeles. Todos los pedidos fueron cargados. Los cobros quedaron registrados. Los nuevos clientes ya están en el sistema. Y la administración cuenta con toda la información necesaria para continuar trabajando. Porque cuando las ventas están en movimiento, la gestión también tiene que estarlo.",
      note: "Con Fidel, vendedores, administración y depósito trabajan conectados en tiempo real para que la distribuidora funcione de manera más rápida, ordenada y eficiente.",
      mock: <MockDistribuidoraCierre />
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
            title="Un día con Fidel: así trabaja una distribuidora"
            sub="Cada momento de la jornada muestra cómo Fidel unifica el trabajo del preventista en la calle con la administración y depósito."
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
