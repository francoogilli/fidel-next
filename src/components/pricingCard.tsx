"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "framer-motion";
import { pricingInfo } from "@/data/data";
import { LaurelIcon } from "@/icons/laurel";
import ArrowUpIcon from "@/icons/arrow-up";
import { cn } from "@nextui-org/react";
import GradientLine from "./gradientLine";
import ThreeStripesLeft from "@/icons/threeStripesLeft";
import ThreeStripesRight from "@/icons/threeStripesRight";
import CreditCardIcon from "@/icons/creditCard";

// ── Inline ShinyPrice component ──────────────────────────────────────────────

interface ShinyPriceProps {
  children: React.ReactNode;
  speed?: number;
  color?: string;
  shineColor?: string;
  spread?: number;
  className?: string;
}

function ShinyPrice({
  children,
  speed = 3,
  color = "#171717",
  shineColor = "#1ef15d",
  spread = 120,
  className = "",
}: ShinyPriceProps) {
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const animationDuration = speed * 1000;

  useAnimationFrame((time) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }
    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += delta;

    const cycleTime = elapsedRef.current % animationDuration;
    const p = (cycleTime / animationDuration) * 100;
    progress.set(p);
  });

  const backgroundPosition = useTransform(
    progress,
    (p) => `${150 - p * 2}% center`,
  );

  return (
    <motion.span
      className={className}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundPosition,
        display: "inline",
        letterSpacing: "inherit",
      }}
    >
      {children}
    </motion.span>
  );
}

interface Props {
  viewComparison?: boolean;
}

export default function PricingCard({ viewComparison }: Props) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const [openDescription, setOpenDescription] = useState<{
    cardName: string;
    benefitIndex: number;
  } | null>(null);
  const [openBestOption, setOpenBestOption] = useState<string | null>(null);

  return (
    <div
      className="relative w-full min-h-screen flex bg-[#ffffff] items-center justify-center overflow-hidden py-32"
      style={{
        backgroundImage: "url('/canvas.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-[1] w-full h-full bg-gradient-to-b from-[#FCFBF9] via-transparent to-white pointer-events-none"></div>
      <div className="absolute inset-0 z-[1] w-full h-full bg-white/30 pointer-events-none"></div>
      <div className="absolute inset-0 z-[1] w-full h-full bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-[87rem] mx-auto px-6">
        <div className="flex justify-center items-center gap-x-2.5  sm:pb-7">
          <GradientLine direction="left" />
          <ThreeStripesLeft />
          <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2 animation-1">
            <CreditCardIcon className="size-4 md:size-5 text-[#121212]" />
            <h2
              className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Precios
            </h2>
          </div>
          <ThreeStripesRight />
          <GradientLine direction="right" />
        </div>
        <div className="text-center mb-16">
          <h3
            className="animation-1 max-w-6xl mx-auto text-4xl leading-[2.8rem] sm:leading-[3.7rem] md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 xl:pb-2.5 tracking-tighter"
            style={{
              fontFamily: "Plus Jakarta Sans",
              opacity: 1,
            }}
          >
            No importa el tamaño de tu negocio, hay un plan para vos.
          </h3>
          <div className="flex justify-center items-center p-1.5 px-3 gap-x-1 text-[#c5c5c5] rounded-xl">
            <span className="text-xl md:text-lg text-black">
              Soporte y actualizaciones constantes.
            </span>
          </div>
          <div className="flex justify-center items-center gap-x-2.5 pb-3 pt-10">
            <h4
              className="text-base flex justify-center items-center xl:text-lg px-5 text-black font-medium"
              style={{ fontFamily: "Satoshi" }}
            >
              <LaurelIcon className="text-[#fbe660] w-5 mr-4" />
              Incluido en todos los planes
              <LaurelIcon className="text-[#fbe660] w-5 ml-4 transform scale-x-[-1]" />
            </h4>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {pricingInfo.map((pricing) => {
            const isPopular = pricing.popular === true;

            const cardContent = (
              <div
                className={cn(
                  "relative flex flex-col px-6 py-5 transition-all duration-200 h-full card-figma",
                  !isPopular && "hover:shadow-md",
                  isPopular && "flex-1",
                )}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      {pricing.name}
                    </h3>
                  </div>
                </div>

                {/* Best option / description */}
                <div className="mb-4">
                  {openBestOption === pricing.name ? (
                    <>
                      <p className="text-xs text-neutral-500">
                        Para {pricing.bestOption}
                      </p>
                      <button
                        onClick={() => setOpenBestOption(null)}
                        className="text-neutral-700 hover:text-black text-xs mt-1"
                      >
                        Ver menos
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="text-xs text-neutral-500 overflow-hidden text-ellipsis whitespace-nowrap">
                        Para {pricing.bestOption}
                      </p>
                      {pricing.bestOption.length > 50 && (
                        <button
                          onClick={() => setOpenBestOption(pricing.name)}
                          className="text-neutral-700 hover:text-black text-xs mt-1"
                        >
                          Ver más
                        </button>
                      )}
                    </>
                  )}
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2 h-10">
                      <ShinyPrice
                        speed={3}
                        color="#171717"
                        shineColor={"#a3a3a3"}
                        spread={120}
                        className="text-[2.4rem] font-bold text-neutral-900"
                      >
                        ${Number(pricing.price).toLocaleString("es-AR")}
                      </ShinyPrice>
                      <span
                        className="text-[13px] text-neutral-500 mb-0.5 whitespace-nowrap text-ellipsis overflow-hidden"
                        title="+IVA/mes"
                      >
                        +IVA/mes
                      </span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-5 flex-1 border-t border-[#f1f1f1] pt-5">
                  <p className="text-sm font-medium text-neutral-900 mb-3">
                    Qué incluye:
                  </p>
                  <ul className="space-y-2.5">
                    {pricing.benefits.map((benefit, index) => (
                      <li key={index} className="flex flex-col gap-1">
                        <div className="flex items-start gap-3 text-sm text-neutral-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5  "
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check size-4 shrink-0 mt-0.5 text-[#0ade49]"
                            aria-hidden="true"
                          >
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          <div className="flex items-center gap-1">
                            <span
                              onClick={() => {
                                if (!benefit.description) return;
                                if (
                                  openDescription?.cardName === pricing.name &&
                                  openDescription.benefitIndex === index
                                ) {
                                  setOpenDescription(null);
                                } else {
                                  setOpenDescription({
                                    cardName: pricing.name,
                                    benefitIndex: index,
                                  });
                                }
                              }}
                              className={cn(
                                "text-sm transition-colors duration-200",
                                benefit.description && "cursor-pointer",
                                benefit.highlight &&
                                  "bg-gradient-to-tr text-black from-[#ededed] via-[#fffffff1] to-[#ededed] border border-[#ffffff] font-medium px-2 py-1 rounded-md",
                                openDescription?.cardName === pricing.name &&
                                  openDescription.benefitIndex === index &&
                                  "text-neutral-800 font-medium",
                              )}
                            >
                              {benefit.text}
                            </span>

                            {benefit.description && (
                              <button
                                onClick={() => {
                                  if (
                                    openDescription?.cardName ===
                                      pricing.name &&
                                    openDescription.benefitIndex === index
                                  ) {
                                    setOpenDescription(null);
                                  } else {
                                    setOpenDescription({
                                      cardName: pricing.name,
                                      benefitIndex: index,
                                    });
                                  }
                                }}
                                className={cn(
                                  "px-0.5 hover:text-neutral-700 hover:bg-neutral-100 duration-300 rounded-md ml-2 font-bold cursor-pointer",
                                  openDescription?.cardName === pricing.name &&
                                    openDescription.benefitIndex === index
                                    ? "text-neutral-700 bg-gradient-to-tr  from-[#f0f0f0] via-[#fffffff1] to-[#f0f0f0]"
                                    : "text-neutral-400",
                                )}
                                aria-label="Ver más"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="size-[1.2rem] inline-block"
                                >
                                  {openDescription?.cardName === pricing.name &&
                                  openDescription.benefitIndex === index ? (
                                    <path d="M6 15l6 -6l6 6" />
                                  ) : (
                                    <path d="M6 9l6 6l6 -6" />
                                  )}
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>

                        <AnimatePresence initial={false}>
                          {benefit.description &&
                            openDescription?.cardName === pricing.name &&
                            openDescription.benefitIndex === index && (
                              <motion.div
                                key="desc"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeInOut",
                                }}
                                style={{ overflow: "hidden" }}
                              >
                                <p className="ml-7 text-zinc-600 text-[13px] text-left pt-1 mt-1 bg-gradient-to-tr  from-[#f0f0f0] via-[#fffffff1] to-[#f0f0f0] border border-[#ffffff] rounded-md px-2 py-1.5">
                                  {benefit.description}
                                </p>
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() =>
                    window.open(
                      `https://api.whatsapp.com/send?phone=543564222935&text=${encodeURIComponent(
                        `¡Hola! Estoy viendo la web de Fidel y me interesa el plan ${pricing.name}. ¿Podrían enviarme más información sobre el sistema?`,
                      )}`,
                      "_blank",
                    )
                  }
                  className={cn(
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer h-12 rounded-[20px] px-8 w-full",
                    isPopular
                      ? "bg-gradient-to-b from-[#1ef15d]/70 via-[#1ef15d] to-[#1ef15d]/70 text-primary-foreground shadow-[0_4px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:translate-y-[-1px] active:translate-y-[1px] active:shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-[#1ef15d]/20"
                      : "bg-gradient-to-b from-[#0f1419] via-[#0f1419] to-[#0f1419]/80 text-white shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.4)] hover:translate-y-[-1px] active:translate-y-[1px]",
                  )}
                >
                  Elegir plan {pricing.name}
                  <ArrowUpIcon className="size-4" />
                </button>
              </div>
            );

            if (isPopular) {
              return (
                <motion.div
                  key={pricing.name}
                  className="relative rounded-2xl p-1 -m-1 glass-prompt-wrap lg:-mt-9 flex flex-col lg:mb-[-2rem]"
                  variants={scaleUp}
                >
                  <div className="text-center py-1.5">
                    <span className="text-sm flex items-center gap-1 justify-center font-semibold text-[#1aff00a5]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 4v3m-4 -3v6m8 -6v6" />
                        <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5l-3 -1.5" />
                      </svg>
                      Mas elegido
                    </span>
                  </div>
                  {cardContent}
                </motion.div>
              );
            }

            return (
              <motion.div key={pricing.name} variants={scaleUp}>
                {cardContent}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-1">
          <div className="bg-[#ffffff] border border-[#dffcf6] py-2.5 px-3 duration-300 rounded-xl text-center card-figma-secondary">
            <h4
              className="text-base px-5 pb-1 text-[#022943] font-medium"
              style={{ fontFamily: "Satoshi" }}
            >
              ¿Necesitás más herramientas?
            </h4>
            <p className="text-[#022943] text-sm">
              Podés cambiar de plan en cualquier momento, sin problemas.
            </p>
          </div>
          <div className="bg-[#ffffff] border border-[#dffcf6] py-2.5 px-3 duration-300 rounded-xl text-center card-figma-secondary">
            <h4
              className="text-base px-5 pb-1 text-[#022943] font-medium"
              style={{ fontFamily: "Satoshi" }}
            >
              ¿No estás seguro de cuál elegir?
            </h4>
            <p className="text-[#022943] text-sm">
              Tranqui, agendá una llamada y te damos una demo GRATIS.
            </p>
          </div>
        </div>
        <p className="text-[#ffcc01] bg-[#fffbee] card-figma-tertiary border border-[#fef1bc] p-4 rounded-medium mx-auto w-fit flex justify-center items-center gap-x-2 text-center font-medium text-sm mt-11">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-[#ffcc01]"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z" />
          </svg>{" "}
          Sin compromiso, sin tarjeta de crédito.
        </p>
      </div>
    </div>
  );
}
