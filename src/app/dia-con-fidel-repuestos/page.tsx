"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import GradientLine from "@/components/gradientLine";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";

const styles = [
  ".glass-card-fidel {",
  "  background: rgba(255, 255, 255, 0.7);",
  "  backdrop-filter: blur(16px);",
  "  -webkit-backdrop-filter: blur(16px);",
  "  border: 1px solid rgba(229, 231, 235, 0.6);",
  "  border-radius: 1rem;",
  "  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);",
  "}",
].join("\n");

function Screenshot({
  src,
  alt,
  className = "",
  imageClassName = "w-full h-auto",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={
        "overflow-hidden rounded-[24px] border border-[#e9e9e9d3] bg-white/70 " +
        className
      }
    >
      <img src={src} alt={alt} className={imageClassName} />
    </div>
  );
}

function BrowserChrome({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass-card-fidel overflow-hidden rounded-xl bg-white/60 shadow-xl">
      <div className="flex items-center gap-2 border-b border-gray-200/50 bg-gray-50/50 px-4 py-3">
        <span className="size-2.5 rounded-full bg-rose-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <div className="flex-1 select-none text-center font-mono text-[11px] text-gray-400">
          {url}
        </div>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function ReplenishmentMock() {
  const rows = [
    { name: "Pastillas de freno", stock: "2", target: "8" },
    { name: "Filtro de aceite", stock: "4", target: "12" },
    { name: "Correa de distribución", stock: "1", target: "5" },
  ];

  return (
    <BrowserChrome url="fidel.com.ar / inventario / reposición">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3 border-b border-gray-200/60 pb-3">
          <div>
            <h4 className="text-sm font-bold text-gray-800">
              Productos para reponer
            </h4>
            <p className="mt-1 text-[10px] text-gray-400">
              Stock mínimo y proveedores disponibles
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
            3 productos
          </span>
        </div>
        <div className="space-y-2.5">
          {rows.map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 bg-white/80 px-3 py-2.5"
            >
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-gray-700">
                  {row.name}
                </p>
                <p className="mt-0.5 text-[9px] text-gray-400">
                  Stock {row.stock} · mínimo {row.target}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold text-amber-700">
                Reponer
              </span>
            </div>
          ))}
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
      className={
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16 " +
        (reverse ? "lg:[&>*:first-child]:order-2" : "")
      }
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="shrink-0 whitespace-nowrap rounded-md py-1 pr-2.5 text-4xl font-bold tracking-wider text-[#307fff] sm:text-5xl">
            {m.time}
            <span className="ml-1 inline-block text-3xl sm:text-4xl">hs</span>
          </span>
          <span className="text-sm font-semibold uppercase tracking-wide text-gray-400">
            {m.label}
          </span>
          {m.ai && (
            <span className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-purple-200 bg-purple-50/50 px-2 py-0.5 text-[10px] font-bold text-purple-600">
              <Sparkles className="size-3" /> IA
            </span>
          )}
        </div>
        <h3
          className="text-2xl font-extrabold leading-snug tracking-tight text-[#252525] md:text-3xl"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          {m.title}
        </h3>
        <p
          className="mt-4 text-sm leading-relaxed text-[#5c5c5c] md:text-base"
          style={{ fontFamily: "Satoshi" }}
        >
          {m.body}
        </p>
        {m.note && (
          <p className="mt-3 border-l-2 border-gray-200 pl-3 text-xs italic text-gray-400">
            {m.note}
          </p>
        )}
      </div>
      <div className="mx-auto w-full max-w-md lg:max-w-none">{m.mock}</div>
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mb-16 text-center md:mb-24">
      <div className="flex items-center justify-center gap-x-2.5 sm:pb-5">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 py-2 xl:px-5">
          <Sparkles className="size-4 text-[#121212] md:size-5" />
          <h2
            className="ml-2 text-center text-xs font-medium uppercase text-[#121212] md:text-sm xl:text-base"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            {eyebrow}
          </h2>
        </div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>
      <div className="mb-16 text-center">
        <h1
          className="mx-auto my-8 max-w-6xl pb-1 text-center text-4xl font-bold leading-[2.8rem] tracking-tighter text-[#252525] sm:leading-[3.7rem] md:text-[3.25rem] xl:pb-2.5 xl:text-[3.5rem]"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          {title}
        </h1>
        {sub && (
          <div className="flex items-center justify-center rounded-xl p-1.5 px-3">
            <span
              className="text-lg font-medium text-black md:text-xl"
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

export default function DiaConFidelRepuestosPage() {
  const moments: MomentType[] = [
    {
      time: "08:00",
      label: "Preparación del local",
      title: "Abrís el local y preparás todo para empezar",
      body: "Llegás al local, levantás la persiana, preparás un mate y abrís Fidel. Antes de que llegue el primer cliente, podés revisar el estado del stock, identificar productos que necesitan reposición y consultar los movimientos del negocio. Con toda la información centralizada, empezás el día sabiendo qué tenés disponible y qué necesitás resolver. Menos tiempo buscando información. Más tiempo para vender.",
      mock: (
        <div className="relative pb-12 sm:pb-14">
          <Screenshot
            src="/fidel/dia-repuestos-01.webp"
            alt="Vista del inventario de una casa de repuestos en Fidel"
            className="shadow-xl"
          />
          <Screenshot
            src="/fidel/dia-repuestos-02.webp"
            alt="Un trabajador consulta productos en el depósito"
            className="absolute bottom-0 right-1 w-[42%] border-4 border-white shadow-xl sm:w-[38%]"
            imageClassName="aspect-square w-full object-cover"
          />
        </div>
      ),
    },
    {
      time: "08:45",
      label: "Actualización de precios",
      title: "Llegó una nueva lista de precios del proveedor",
      body: "En el rubro repuestos, los precios cambian constantemente. Y cuando trabajás con miles de artículos, actualizar cada uno manualmente puede convertirse en una tarea interminable. Con Fidel, importás la lista de precios desde Excel y actualizás los valores de forma masiva, utilizando los códigos de proveedor para identificar los productos correspondientes. En segundos, tenés los precios actualizados sin tener que modificar artículo por artículo. Así podés dedicarte a atender el mostrador sin preocuparte por mantener cientos de precios al día de forma manual.",
      mock: (
        <Screenshot
          src="/fidel/dia-repuestos-03.webp"
          alt="Importación y actualización masiva de una lista de precios en Fidel"
        />
      ),
    },
    {
      time: "09:30",
      label: "Atención en el mostrador",
      title: "Un cliente necesita un repuesto específico",
      body: "Un cliente llega al mostrador buscando un repuesto para su vehículo. Necesitás identificar el artículo correcto, confirmar su disponibilidad y darle una respuesta rápida. Con Fidel, podés consultar la información de los productos y conocer su ubicación dentro del depósito. Aunque tengas miles de artículos organizados en distintas estanterías, sabés dónde buscar cada uno. Menos vueltas en el depósito. Menos tiempo de espera en el mostrador. Porque cuando un cliente necesita un repuesto, encontrarlo rápido hace la diferencia.",
      mock: (
        <Screenshot
          src="/fidel/dia-repuestos-04.webp"
          alt="Consulta de un repuesto entre las estanterías del depósito"
          imageClassName="aspect-[4/3] w-full object-cover"
        />
      ),
    },
    {
      time: "10:30",
      label: "Comparación de proveedores",
      title: "Tenés varias opciones para comprar el mismo repuesto",
      body: "Un artículo se está vendiendo muy bien y necesitás reponerlo. Pero no todos los proveedores ofrecen las mismas condiciones. Con Fidel, podés asociar varios proveedores a un mismo producto, comparar sus precios y consultar el historial de compras. Así tenés más información para elegir a quién comprarle y cuidar mejor los costos del negocio. Una decisión que antes podía requerir revisar facturas, listas y registros separados, ahora se resuelve desde un solo lugar.",
      mock: (
        <Screenshot
          src="/fidel/dia-repuestos-07.webp"
          alt="Un comerciante compara productos y compras desde Fidel"
          imageClassName="aspect-[4/3] w-full object-cover"
        />
      ),
    },
    {
      time: "11:30",
      label: "Ingreso de mercadería",
      ai: true,
      title: "Llega nueva mercadería al depósito",
      body: "El proveedor acaba de entregar un pedido y es momento de registrar la compra. En lugar de cargar manualmente cada artículo, cantidad y precio, subís a Fidel una foto o el archivo PDF de la factura de compra. La inteligencia artificial identifica al proveedor y extrae los productos, las cantidades, los precios y el total de la factura para cargarlos automáticamente en el sistema. En pocos pasos, transformás una tarea administrativa repetitiva en un proceso mucho más ágil. Llega la mercadería, cargás la factura y Fidel te ayuda con el resto. Menos carga manual, menos errores y más tiempo para seguir trabajando.",
      mock: (
        <Screenshot
          src="/fidel/dia-repuestos-08.webp"
          alt="Factura de compra procesada en Fidel con inteligencia artificial"
        />
      ),
    },
    {
      time: "12:30",
      label: "Venta por unidad",
      title: "Vendés por unidad lo que compraste por bulto",
      body: "Un cliente necesita algunas unidades de un repuesto que compraste en cajas cerradas. No hace falta sacar la calculadora ni hacer cuentas cada vez que vendés. Fidel permite gestionar la compra por bulto y la venta por unidad, calculando los costos y precios correspondientes y ajustando el stock automáticamente. Así podés manejar distintas presentaciones sin complicar la operación diaria. Vos te concentrás en la venta. El sistema se ocupa de los cálculos.",
      mock: (
        <Screenshot
          src="/fidel/dia-repuestos-09.webp"
          alt="Configuración de compra por bulto y stock en unidades"
        />
      ),
    },
    {
      time: "15:30",
      label: "Catálogos para compartir",
      title: "Un cliente te pide un listado de repuestos",
      body: "Un taller mecánico necesita consultar varios productos de una marca específica. En lugar de buscar imágenes, copiar precios y preparar un documento desde cero, generás un catálogo en PDF desde Fidel. Podés organizarlo por categoría, marca o proveedor, incluir fotos y precios y compartirlo por WhatsApp en pocos segundos. El cliente recibe la información de manera clara y vos podés seguir atendiendo el negocio mientras avanzás con nuevas oportunidades de venta. Más herramientas para vender, incluso cuando el cliente no está en el mostrador.",
      mock: (
        <Screenshot
          src="/fidel/dia-repuestos-10.webp"
          alt="Un cliente consulta por WhatsApp un catálogo de repuestos"
          imageClassName="aspect-[4/3] w-full object-cover"
        />
      ),
    },
    {
      time: "17:00",
      label: "Planificación de compras",
      title: "Organizás la reposición antes de cerrar",
      body: "Antes de terminar la jornada, revisás los productos que necesitan reposición y consultás las alternativas disponibles entre tus proveedores. Con la información de stock, los niveles mínimos y máximos y el historial de compras, podés planificar mejor los próximos pedidos. Ya no dependés exclusivamente de recorrer estanterías o descubrir un faltante cuando un cliente necesita ese repuesto. La información está disponible para ayudarte a tomar decisiones más ordenadas.",
      mock: <ReplenishmentMock />,
    },
    {
      time: "18:00",
      label: "Cierre de jornada",
      title: "Cerrás el local con todo bajo control",
      body: "Terminó el día. Los precios están actualizados, las ventas quedaron registradas y tenés más claridad sobre el estado del inventario y las próximas compras. Los productos están identificados por su ubicación, las alternativas de proveedores están disponibles y los catálogos te permiten seguir generando oportunidades comerciales.",
      note: "En una casa de repuestos, gestionar miles de artículos ya es un desafío por sí solo. Con Fidel, podés simplificar las tareas cotidianas, trabajar con información más ordenada y dedicar más tiempo a lo que realmente importa: atender bien a tus clientes y hacer crecer tu negocio. Fidel. Menos tiempo gestionando. Más tiempo vendiendo.",
      mock: (
        <Screenshot
          src="/fidel/dia-repuestos-18h.webp"
          alt="Dueño de una casa de repuestos revisa su tablet al cierre de la jornada"
          imageClassName="aspect-[4/3] w-full object-cover"
        />
      ),
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="backgroundImage" />
      <main className="mx-auto min-h-screen max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div id="dia">
          <SectionHeading
            eyebrow="Un día con Fidel"
            title="Así trabaja una casa de repuestos"
            sub="Cada momento muestra cómo Fidel ayuda a organizar miles de productos, atender el mostrador y simplificar la gestión del negocio."
          />
          <div className="mx-auto max-w-5xl space-y-24 md:space-y-36">
            {moments.map((m, i) => (
              <MomentComponent key={m.time} m={m} i={i} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
