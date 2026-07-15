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

function MockCierre() {
  return (
    <BrowserChrome url="fidel.com.ar / ferreteria / caja / cierre">
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs border-b border-gray-200/50 pb-2">
          <div>
            <h4 className="font-bold text-gray-800">Cierre de Caja y Turnos</h4>
            <p className="text-[9px] text-gray-400">Jornada finalizada · 18:00</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
            Sincronizado
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-gray-50 border border-gray-200/60 p-2 rounded-md">
            <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider">Total de Caja</span>
            <span className="text-xs font-bold text-gray-700">$342.800</span>
          </div>
          <div className="bg-gray-50 border border-gray-200/60 p-2 rounded-md">
            <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider">Diferencias</span>
            <span className="text-xs font-bold text-emerald-600">$0 (Caja Ok)</span>
          </div>
        </div>
        <div className="text-[10px] text-gray-400 text-center font-medium">
          Toda la facturación y movimientos han sido guardados en la nube.
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

export default function DiaConFidelPage() {
  const moments: MomentType[] = [
    {
      time: "07:30",
      label: "Apertura de caja",
      title: "Abrís el local y empezás el día tranquilo",
      body: "Llegás a la ferretería, preparás el mate y abrís la caja desde Fidel. En pocos segundos ya tenés todo listo para comenzar a vender. No hay planillas para completar ni cuentas pendientes del día anterior. Mientras acomodás el mostrador, podés ver rápidamente las ventas realizadas, los saldos de clientes y los movimientos pendientes. La jornada arranca organizada.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diaf1.png"
            alt="Apertura de caja"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "08:15",
      label: "Actualización masiva",
      title: "Tu proveedor envía una nueva lista de precios",
      body: "Como pasa seguido en el rubro, llega una actualización de precios. Antes significaba revisar cientos o miles de artículos uno por uno. Ahora simplemente importás el archivo de Excel que envió el proveedor y Fidel actualiza los productos de manera masiva. En cuestión de minutos toda la lista queda actualizada y lista para vender. Menos errores. Menos tiempo perdido.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diaf2.png"
            alt="Actualización masiva"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "09:30",
      label: "Atención al cliente",
      title: "Un cliente necesita un taladro",
      body: "Un cliente entra buscando un taladro. Mientras lo atendés, consultás el stock en tiempo real y verificás las distintas opciones disponibles. También podés ver qué proveedores ofrecen ese mismo producto y comparar costos para futuras compras. Toda la información está en un solo lugar, sin llamadas ni búsquedas interminables.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diaf3.png"
            alt="Un cliente necesita un taladro"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "11:00",
      label: "Reposición",
      title: "Descubrís que un producto está por agotarse",
      body: "Mientras trabajás, Fidel detecta que el stock de ciertos artículos llegó al mínimo configurado. El sistema te avisa automáticamente. No hace falta esperar a que el cliente pida un producto que ya no tenés. Incluso podés generar la orden de compra directamente desde el sistema para reponer mercadería antes de quedarte sin stock.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diaf4.png"
            alt="Descubrís que un producto está por agotarse"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "12:30",
      label: "Control de stock fraccionado",
      title: "Vendés por unidad lo que compraste por bulto",
      body: "Un cliente necesita solamente algunas unidades de tornillos. No importa que los hayas comprado por cajas o bultos completos. Fidel administra automáticamente las conversiones entre compra y venta, manteniendo el stock actualizado sin cálculos manuales. Vos vendés como necesitás. El sistema hace el resto.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diaf5.png"
            alt="Vendés por unidad lo que compraste por bulto"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "14:00",
      label: "Facturación electrónica",
      title: "Emitís una factura en segundos",
      body: "Después de una venta importante, generás la factura electrónica. Con un par de clics queda emitida y enviada al cliente por correo electrónico, WhatsApp o ambos. Todo queda registrado automáticamente.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diaf6.png"
            alt="Emitís una factura en segundos"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "15:30",
      label: "Catálogos visuales",
      title: "Un cliente pide una lista de precios",
      body: "Un cliente habitual quiere conocer los precios actualizados de varias herramientas. En lugar de armar un documento desde cero, generás un catálogo con imágenes y precios directamente desde Fidel. Lo compartís por WhatsApp y el cliente recibe una presentación profesional y actualizada. Más rápido para vos. Más cómodo para tu cliente.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diaf7.png"
            alt="Un cliente pide una lista de precios"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "17:00",
      label: "Decisiones de compra",
      title: "Analizás las compras del próximo pedido",
      body: "Antes de cerrar, revisás los productos más vendidos del día. También consultás qué proveedor ofrece mejores precios para ciertos artículos. Tomar decisiones deja de ser una cuestión de intuición.",
      mock: (
        <div className="rounded-[24px] overflow-hidden border border-[#e9e9e9d3] bg-white/40">
          <img
            src="/diaf8.png"
            alt="Un cliente pide una lista de precios"
            className="w-full h-auto object-cover"
          />
        </div>
      )
    },
    {
      time: "18:00",
      label: "Cierre de jornada",
      title: "Cerrás el local sin llevarte trabajo a casa",
      body: "Terminó la jornada. Las ventas están registradas. El stock está actualizado. Las facturas fueron enviadas. Las compras pendientes están identificadas. Y toda la información quedó guardada en la nube. Mañana solo tenés que volver a abrir el local y seguir trabajando.",
      note: "Porque gestionar una ferretería ya es suficientemente complejo. El software debería simplificarte el trabajo, no agregarte más tareas. Con Fidel, el día a día es más simple, más ordenado y más rentable.",
      mock: <MockCierre />
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
            title="Un día con Fidel: así trabaja una ferretería"
            sub="Cada momento del día muestra cómo Fidel acompaña la rutina de una ferretería, simplificando cada tarea."
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
