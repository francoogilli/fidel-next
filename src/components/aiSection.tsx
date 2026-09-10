"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Camera,
  Check,
  FileText,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";

type InputType = "factura" | "cheque";

const documentData: Record<
  InputType,
  { label: string; title: string; amount: string; rows: string[] }
> = {
  factura: {
    label: "Factura de compra",
    title: "Distribuidora Norte",
    amount: "$ 184.520,00",
    rows: ["12 × Tornillo 8mm", "6 × Adhesivo multiuso", "2 × Caja organizadora"],
  },
  cheque: {
    label: "Cheque recibido",
    title: "Ferretería San Juan",
    amount: "$ 92.000,00",
    rows: ["Vencimiento · 30/09/26", "Banco · Nación", "Nº 0001842"],
  },
};

export default function AiSection() {
  const [inputType, setInputType] = useState<InputType>("factura");
  const shouldReduceMotion = useReducedMotion();
  const activeDocument = documentData[inputType];

  const entrance = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: "easeOut" as const };

  return (
    <section
      id="ia"
      className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_48%_45%_at_88%_5%,rgba(114,203,113,0.22),transparent_68%),radial-gradient(ellipse_45%_55%_at_50%_48%,rgba(236,250,237,0.92),transparent_72%),#fcfaf7] py-20 text-[#121212] md:py-18"
      aria-labelledby="ai-title"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.65] [background-image:radial-gradient(rgba(50,91,46,0.08)_0.6px,transparent_0.6px)] [background-size:5px_5px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent_75%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-[190px] right-[9%] z-0 h-[360px] w-[360px] rounded-full bg-[rgba(88,190,96,0.18)] blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[34%] top-[360px] z-0 h-[300px] w-[560px] rounded-full bg-[rgba(148,220,151,0.18)] blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-3 xl:max-w-[90rem]">
        <div className="flex items-center justify-center gap-x-2.5 pb-4 pt-4 md:pt-8">
          <GradientLine direction="left" />
          <ThreeStripesLeft />
          <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 py-2 xl:px-5">
            <Sparkles className="size-4 text-[#121212] md:size-5" />
            <h2
              className="ml-2 text-center text-xs font-medium text-[#121212] md:text-sm xl:text-base"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Inteligencia Artificial
            </h2>
          </div>
          <ThreeStripesRight />
          <GradientLine direction="right" />
        </div>

        <motion.div
          className="mx-auto flex max-w-[58rem] justify-center text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={entrance}
        >
          <div>
            <h3
              id="ai-title"
              className="my-8 pb-1 text-4xl font-bold tracking-tight text-[#121212] md:text-[3.25rem] xl:text-[3.5rem]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              La IA ya empezó a trabajar en Fidel.
            </h3>
            <p
              className="mx-auto max-w-[39rem] text-center text-sm font-medium text-[#5c5c5c] md:text-lg xl:text-xl"
              style={{ fontFamily: "Satoshi" }}
            >
              No viene a decorar el sistema: viene a sacarte carga manual.
              Desde una foto hasta una respuesta para tu cliente, Fidel suma
              inteligencia donde tu negocio ya está trabajando.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            className="relative overflow-hidden rounded-[35px] border border-[#e3e8e3] bg-gradient-to-tr from-[#e9f2ea] to-[#f4f6f3] p-5 text-[#333333] shadow-[0_16px_45px_rgba(47,71,53,0.08)] md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...entrance, delay: 0.12 }}
          >
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6a8b62]">
                  Carga asistida
                </p>
                <h3
                  className="mt-3 max-w-[31rem] text-3xl font-bold leading-[1.04] tracking-[-0.055em] text-[#333333] md:text-[2.75rem]"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Sacás una foto.
                  <span className="block text-[#4f9944]">Fidel ayuda a leer los datos.</span>
                </h3>
              </div>
              <div className="flex shrink-0 rounded-full border border-[#c8d8bd] bg-white/70 p-1 text-xs font-bold">
                {(["factura", "cheque"] as InputType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInputType(type)}
                    className={`rounded-full px-3 py-2 transition-colors ${inputType === type
                      ? "bg-[#172119] text-[#edffca]"
                      : "text-[#688064] hover:text-[#172119]"
                      }`}
                    aria-pressed={inputType === type}
                  >
                    {type === "factura" ? "Factura" : "Cheque"}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative mt-8 grid items-center gap-5 rounded-[1.45rem] border border-[#d4e5c7] bg-gradient-to-tr from-[#dff5c5] to-[#f0f8e9] p-4 sm:grid-cols-[1.14fr_0.86fr] md:gap-7 md:p-7">
              <div className="relative -rotate-2 overflow-hidden rounded-[0.75rem] bg-[#fffdf8] px-5 pb-5 pt-6 shadow-[0_18px_30px_rgba(34,71,28,0.15)] sm:min-h-[250px]">
                <div className="absolute right-4 top-4 rounded-md bg-[#eaf4e2] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#67955a]">
                  Vista de ejemplo
                </div>
                <div className="flex items-center gap-2 border-b border-[#e3eadf] pb-4">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#caff8a] text-[#375e2c]">
                    {inputType === "factura" ? <FileText size={17} /> : <Check size={17} />}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#72906a]">
                      {activeDocument.label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#1e2a20]">{activeDocument.title}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-[11px] text-[#657263]">
                  {activeDocument.rows.map((row) => (
                    <div key={row} className="flex items-center justify-between border-b border-[#edf1ea] pb-2">
                      <span>{row}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a7f35d]" aria-hidden="true" />
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between rounded-lg bg-[#f0f7ec] px-3 py-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#75936e]">Total</span>
                  <span className="text-sm font-bold text-[#1e2a20]">{activeDocument.amount}</span>
                </div>
                <motion.div
                  className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-[#8ee34d] shadow-[0_0_16px_#9eff5c]"
                  animate={shouldReduceMotion ? undefined : { y: [18, 230, 18] }}
                  transition={{ duration: 4.6, ease: "easeInOut", repeat: Infinity }}
                  aria-hidden="true"
                />
              </div>

              <div className="relative rounded-[1.15rem] bg-[#333333] p-4 text-[#f5f5f5] shadow-[0_12px_28px_rgba(21,44,18,0.16)] sm:translate-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-[#baff91] text-[#234120]"><Sparkles size={14} /></span>
                    <span className="text-xs font-bold">Lectura con IA</span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-[#c0cfc0]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#baff91]" /> activa</span>
                </div>
                <div className="mt-4 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between rounded-lg bg-white/[0.08] px-3 py-2"><span className="text-[#c1cec1]">Proveedor</span><span>Identificado</span></div>
                  <div className="flex items-center justify-between rounded-lg bg-white/[0.08] px-3 py-2"><span className="text-[#c1cec1]">Importe</span><span>Detectado</span></div>
                  <div className="flex items-center justify-between rounded-lg bg-white/[0.08] px-3 py-2"><span className="text-[#c1cec1]">Conceptos</span><span>Leídos</span></div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#baff91] px-3 py-2 text-[11px] font-bold text-[#21351e]"><Check size={14} /> Datos listos para revisar</div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 text-sm font-medium text-[#577052]">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#caff8a] text-[#37652b]"><Camera size={16} /></span>
              <span>La carga se vuelve más ágil desde el primer paso.</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col overflow-hidden rounded-[35px] border border-[#e3e8e3] bg-gradient-to-tr from-[#eef7ea] to-[#f8faf9] text-[#333333] shadow-[0_16px_45px_rgba(47,71,53,0.06)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...entrance, delay: 0.24 }}
          >
            <div className="grid items-start gap-5 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6">
              <div className="relative mx-0 aspect-[464/496] w-full max-w-[13rem] overflow-hidden rounded-br-[1.5rem] sm:max-w-none">
                <Image
                  src="/fidelito-transparente.png"
                  alt="Fidelito, el asistente con IA de Fidel"
                  fill
                  sizes="(min-width: 640px) 40vw, 70vw"
                  className="object-contain"
                />
              </div>
              <div className="px-5 pt-5 sm:px-0 sm:pr-5 md:pr-8 md:pt-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d6e4d3] bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5b8054]">
                  <Sparkles size={13} /> Asistente IA
                </div>
                <h3
                  className="mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.055em] text-[#333333]"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Conocé a Fidelito, tu asistente con IA.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#667766]" style={{ fontFamily: "Satoshi" }}>
                  Fidelito te ayuda a resolver dudas y usar Fidel al máximo, en segundos.
                </p>
              </div>
            </div>

            <ul className="mx-5 mt-7 space-y-3 border-t border-[#dce8da] pt-6 text-sm text-[#4b604c] md:mx-8">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#caffad] text-[#3f7c39]"><Check size={13} /></span>
                <span>Respuestas al instante sobre cómo usar Fidel.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#caffad] text-[#3f7c39]"><Check size={13} /></span>
                <span>Ayuda paso a paso cuando la necesitás.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#caffad] text-[#3f7c39]"><Check size={13} /></span>
                <span>Un equipo real detrás para acompañarte cuando necesitás una persona.</span>
              </li>
            </ul>

            <div className="mx-5 mb-5 mt-7 flex items-start gap-3 rounded-2xl border border-[#dce8da] bg-white/60 p-4 text-sm leading-relaxed text-[#5d705e] md:mx-8 md:mb-8">
              <MessageCircle className="mt-0.5 shrink-0 text-[#4f9944]" size={18} />
              <p><span className="font-bold text-[#333333]">IA + personas reales.</span> Cuando la consulta necesita algo más, hay gente del equipo Fidel del otro lado.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
