"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Camera,
  Check,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";

export default function AiSection() {
  const shouldReduceMotion = useReducedMotion();

  const entrance = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: "easeOut" as const };

  return (
    <section
      id="ia"
      className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_48%_45%_at_88%_5%,rgba(114,203,113,0.22),transparent_68%),radial-gradient(ellipse_45%_55%_at_50%_48%,rgba(236,250,237,0.92),transparent_72%),#fcfaf7] py-20 text-[#121212] md:py-28"
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
              La IA ya empezó a trabajar en Fidel
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
            className="relative overflow-hidden rounded-[35px] border border-[#e3e8e3] bg-gradient-to-tr from-[#eef7ea] to-[#f8faf9] p-5 text-[#333333] shadow-[0_16px_45px_rgba(47,71,53,0.08)] md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...entrance, delay: 0.12 }}
          >
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#cdb428]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#cdb428] text-[#f5f5f5]">
                    <Camera size={15} />
                  </span>
                  <span>Sacás una foto.</span>
                </div>
                <h3
                  className="max-w-[31rem] text-2xl font-bold leading-[1.06] tracking-[-0.045em] text-[#333333] md:text-[2.3rem]"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                >
                  Cargás tus comprobantes en segundos.
                </h3>
              </div>
            </div>

            <div className="relative mt-6 grid grid-cols-2 gap-3 rounded-[1.45rem] border border-[#d6e4d3] bg-white/55 p-2 shadow-[0_18px_35px_rgba(47,71,53,0.07)] md:gap-4 md:p-3">
              <motion.figure
                className="min-w-0"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { ...entrance, delay: 0.08 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                  <Image
                    src="/ai-carga-factura.png"
                    alt="Flujo de carga asistida de facturas en Fidel"
                    fill
                    sizes="(min-width: 1024px) 24vw, 46vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b8054] sm:text-xs">
                  Facturas
                </figcaption>
              </motion.figure>

              <motion.figure
                className="min-w-0"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { ...entrance, delay: 0.16 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                  <Image
                    src="/ai-carga-cheque.png"
                    alt="Flujo de carga asistida de cheques con IA en Fidel"
                    fill
                    sizes="(min-width: 1024px) 24vw, 46vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b8054] sm:text-xs">
                  Cheques
                </figcaption>
              </motion.figure>
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

            <ul className="mx-5 mt-7 space-y-3 border-t border-[#dce8da] pt-7 text-sm text-[#4b604c] md:mx-8">
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
