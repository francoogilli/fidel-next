"use client";

import { useState } from "react";
import Image from "next/image";
import TiendaNubeIcon from "../icons/tiendaNube";
import IntegrationIcon from "../icons/integration";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";

type Mark = "mercado-libre" | "woocommerce" | "tienda-nube";

type OrbitTool = {
  name: string;
  mark: Mark;
  positionClass: "left-[38%]" | "left-1/2" | "left-[62%]";
};

const orbitTools: OrbitTool[] = [
  { name: "WooCommerce", mark: "woocommerce", positionClass: "left-[38%]" },
  { name: "Mercado Libre", mark: "mercado-libre", positionClass: "left-1/2" },
  { name: "Tienda Nube", mark: "tienda-nube", positionClass: "left-[62%]" },
];

function IntegrationMark({ mark }: { mark: Mark }) {
  if (mark === "mercado-libre") {
    return (
      <span className="grid h-[50px] w-[50px] place-items-center overflow-hidden rounded-[9px] max-[700px]:h-10 max-[700px]:w-10" aria-hidden="true">
        <Image className="h-[50px] w-[50px] object-contain max-[700px]:h-10 max-[700px]:w-10" src="/mercado-libre.png" alt="" width={50} height={50} sizes="50px" />
      </span>
    );
  }

  if (mark === "woocommerce") {
    return (
      <span className="grid h-[50px] w-[50px] place-items-center overflow-hidden rounded-[9px] max-[700px]:h-10 max-[700px]:w-10" aria-hidden="true">
        <Image className="h-[50px] w-[50px] object-contain max-[700px]:h-10 max-[700px]:w-10" src="/woocommerce.svg" alt="" width={50} height={50} sizes="50px" />
      </span>
    );
  }

  return (
    <span className="grid h-[50px] w-[50px] place-items-center overflow-hidden max-[700px]:h-10 max-[700px]:w-10" aria-hidden="true">
      <TiendaNubeIcon className="h-[30px] w-[50px] fill-[#383838] stroke-none max-[700px]:h-6 max-[700px]:w-10" fill="#383838" />
    </span>
  );
}

export default function Integration() {
  const [activeTool, setActiveTool] = useState("Mercado Libre");

  return (
    <section
      className="relative isolate min-h-[900px] overflow-hidden bg-[radial-gradient(ellipse_48%_45%_at_88%_5%,rgba(114,203,113,0.3),transparent_68%),radial-gradient(ellipse_45%_55%_at_50%_48%,rgba(236,250,237,0.92),transparent_72%),#fcfaf7] text-[#231813] max-[700px]:min-h-[790px]"
      aria-labelledby="integration-title"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.65] [background-image:radial-gradient(rgba(50,91,46,0.1)_0.6px,transparent_0.6px)] [background-size:5px_5px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent_75%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-[190px] right-[9%] z-0 h-[360px] w-[360px] rounded-full bg-[rgba(88,190,96,0.22)] blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[34%] top-[320px] z-0 h-[300px] w-[560px] rounded-full bg-[rgba(148,220,151,0.22)] blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl xl:max-w-[90rem] mb-8 mx-auto px-4 md:px-3">
        <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
          <GradientLine direction="left" />
          <ThreeStripesLeft />
          <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2 animation-1">
            <IntegrationIcon className="size-4 md:size-5 text-[#121212]" />
            <h2
              className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Integraciones
            </h2>
          </div>
          <ThreeStripesRight />
          <GradientLine direction="right" />
        </div>
        <h3
          id="integration-title"
          className="animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] leading-[2.8rem] sm:leading-[3.7rem] font-bold text-center my-8 pb-4 tracking-tight text-[#121212]"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          <span className="block">Centralizá tu tienda online</span>
          <span className="block">y hacé crecer tu negocio</span>
        </h3>
        <h4
          className="text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[20rem] md:w-[27rem] xl:w-[39rem] mx-auto "
          style={{ fontFamily: "Satoshi" }}
        >
          Conectá Mercado Libre, WooCommerce y Tienda Nube en un solo lugar y
          centralizá tus pedidos, ventas y stock desde cualquier dispositivo.
        </h4>
      </div>

      <div className="relative mx-auto mt-[38px] h-[510px] w-full max-w-[1600px] max-[700px]:mt-7 max-[700px]:h-[430px]" aria-label="Integraciones disponibles">
        <svg
          className="pointer-events-none absolute inset-x-0 top-[22px] h-[430px] w-full overflow-visible max-[700px]:top-[10px] max-[700px]:h-[380px]"
          viewBox="0 0 1600 430"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className="fill-none [stroke:rgba(58,101,63,0.3)] [stroke-width:1] [vector-effect:non-scaling-stroke]" d="M608 105Q800 105 992 105" />
          <path className="fill-none [stroke:rgba(58,101,63,0.12)] [stroke-width:1] [vector-effect:non-scaling-stroke]" d="M608 111Q800 111 992 111" />
        </svg>

        {orbitTools.map((tool) => (
          <button
            key={tool.name}
            type="button"
            className={`group absolute top-[25%] z-[5] grid h-[94px] w-[94px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[rgba(91,184,101,0.5)] bg-[rgba(230,248,231,0.92)] p-0 text-[#29cd44] shadow-[0_0_0_9px_rgba(83,183,94,0.1),0_0_0_18px_rgba(83,183,94,0.06),0_0_36px_rgba(66,161,76,0.2),inset_0_0_0_1px_rgba(255,255,255,0.72)] transition-[border-color,color,background-color,transform] duration-[220ms] ease-in-out hover:scale-[1.08] hover:border-[rgba(70,166,82,0.75)] hover:bg-[rgba(222,246,224,0.98)] hover:text-[#32833e] focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(70,166,82,0.2),inset_0_0_0_1px_rgba(255,255,255,0.76)] max-[700px]:h-[76px] max-[700px]:w-[76px] ${tool.positionClass}`}
            aria-label={`Ver integración de ${tool.name}`}
            onMouseEnter={() => setActiveTool(tool.name)}
            onFocus={() => setActiveTool(tool.name)}
          >
            <IntegrationMark mark={tool.mark} />
            <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded-full border border-[rgba(58,101,63,0.12)] bg-white/95 px-3 py-1.5 font-[var(--font-plus-jakarta-sans)] text-xs font-semibold text-[#231813] opacity-0 shadow-[0_8px_24px_rgba(52,91,46,0.14)] transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              {tool.name}
            </span>
          </button>
        ))}

        <div className="absolute left-1/2 top-[51%] z-[4] w-[calc(100%_-_40px)] max-w-[600px] -translate-x-1/2 text-center max-[700px]:w-[calc(100%_-_34px)]">
          <p className="m-0 font-[var(--font-plus-jakarta-sans)] text-[0.74rem] font-[750] uppercase leading-[1.3] tracking-[0.14em] text-[#32833e]">Todo conectado en un solo lugar</p>
          <p className="mx-auto mt-[13px] max-w-[590px] font-[var(--font-plus-jakarta-sans)] text-[clamp(1rem,1.45vw,1.22rem)] font-[650] leading-[1.4] tracking-[-0.025em] text-[#2c201a] max-[700px]:text-[0.95rem] max-[700px]:leading-[1.55]">
            Recibí pedidos de Mercado Libre, WooCommerce y Tienda Nube,
            sincronizá tu stock y trabajá siempre con información actualizada.
          </p>
          <p className="sr-only" aria-live="polite">{activeTool} seleccionada</p>
        </div>
      </div>
    </section>
  );
}
