"use client";

import CheckboxIcon from "../icons/checkbox";
import IntegrationIcon from "../icons/integration";
import LockIcon from "../icons/lock";
import RefreshIcon from "../icons/refresh";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import ThunderIcon from "../icons/thunder";
import TiendaNubeIcon from "../icons/tiendaNube";
import GradientLine from "./gradientLine";

export default function Integration() {
  return (
    <div className="max-w-7xl xl:max-w-[90rem] mb-8 mx-auto px-4 md:px-3">
      <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#333333] px-4 xl:px-5 py-2 animation-1">
          <IntegrationIcon className="size-4 rotate-90 -scale-x-100 text-[#f5f5f5]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#f5f5f5]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Integraciones
          </h2>
        </div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>
      <div className="flex mx-auto justify-center items-center">
        <h3
          className="animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 tracking-tight"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Conecta fácil con tu tienda online
        </h3>
      </div>
      <h4
        className="animation-1 text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium md:w-[50%] xl:w-[54%] mx-auto pb-0 md:pb-14"
        style={{ fontFamily: "Satoshi" }}
      >
        Facilita la gestión de tu tienda online sincronizando inventarios,
        pedidos y ventas, todo desde un mismo lugar y sin complicaciones.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-12 relative pt-6 gap-x-5">
        <div className="col-span-6 md:hidden flex justify-center items-center mx-auto">
          <img
            src="integrationimage.png"
            alt="Imagen para móviles"
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-6">
          <div className="hidden md:block">
            <h3
              className="text-3xl md:text-5xl xl:text-[3.2rem] text-[#252525] font-bold my-8 pb-0 md:pb-1 tracking-tight"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              Descubri las integraciones que mejoran tu negocio.
            </h3>

            <p className="text-[#565656] text-sm md:text-base xl:text-lg">
              Con <span className="font-medium text-[#3d3d3d]">Fidel</span>,
              podés integrar fácilmente tu tienda online con{" "}
              <span className="font-medium text-[#3d3d3d]">Tienda Nube</span> o{" "}
              <span className="font-medium text-[#3d3d3d]">WooCommerce</span>,
              gestionando todos tus productos, pedidos y clientes desde una sola
              plataforma.
            </p>
            <p className="text-[#565656] text-sm md:text-base xl:text-lg pt-2.5">
              Aprovecha nuestras integraciones y potencia tu negocio con una
              gestión más eficiente, mejorando la experiencia de tus clientes y
              aumentando tus ventas sin complicaciones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-2">
            <div className="col-span-1 bg-[#fcfff8] flex justify-start items-center text-sm md:text-base xl:text-lg gap-x-3.5 border border-[#e6eee6] rounded-xl p-3">
              <div className="bg-gradient-to-tr from-[#63ff33] to-[#b3ff99] rounded-xl p-2 border border-[#e6eee6]">
                <CheckboxIcon className="size-7" />
              </div>
              Elegi 1 integracion para tu negocio.
            </div>
            <div className="col-span-1 bg-[#fcfff8] flex justify-start items-center text-sm md:text-base xl:text-lg gap-x-3.5 border border-[#e6eee6] rounded-xl p-3">
              <div className="bg-gradient-to-tr from-[#63ff33] to-[#b3ff99] rounded-xl p-2 border border-[#e6eee6]">
                <RefreshIcon className="size-7" />
              </div>
              Actualiza precios y stock automaticamente
            </div>
            <div className="col-span-1 bg-[#fcfff8] flex justify-start items-center text-sm md:text-base xl:text-lg gap-x-3.5 border border-[#e6eee6] rounded-xl p-3">
              <div className="bg-gradient-to-tr from-[#63ff33] to-[#b3ff99] rounded-xl p-2 border border-[#e6eee6]">
                <ThunderIcon className="size-7" />
              </div>
              Optimiza y mejora la gestión de tu negocio
            </div>
            <div className="col-span-1 bg-[#fcfff8] flex justify-start items-center text-sm md:text-base xl:text-lg gap-x-3.5 border border-[#e6eee6] rounded-xl p-3">
              <div className="bg-gradient-to-tr from-[#63ff33] to-[#b3ff99] rounded-xl p-2 border border-[#e6eee6]">
                <LockIcon className="size-7" />
              </div>
              Tu tienda online bajo tu control
            </div>
          </div>
        </div>
        <div className="col-span-6 relative hidden md:block bg-gradient-to-r from-[#84ee71] via-[#a3fd8d] to-[#84ee71] rounded-3xl border border-[#e6eee6]">
          <img src="fondointe.avif" className="rounded-3xl" alt="" />
          <div className="absolute flex justify-center -top-5 -right-6 transition-all duration-300">
            <img src="papelitoderecho.png" className="w-16" alt="" />
          </div>
          <div className="absolute flex justify-center -top-5 -left-6 transition-all duration-300">
            <img src="papelitoizquierdo.png" className="w-16" alt="" />
          </div>
          <div className="absolute flex justify-center bg-gradient-to-r from-[#217aff] via-[#4690ff] to-[#217aff] border-[7px] border-[#b6fea8] px-10 xl:px-[2.875rem] py-4 rounded-[2rem] rotate-[5deg] top-[5.5rem] left-[120px] hover:scale-105 duration-500">
            <TiendaNubeIcon className="size-32 xl:size-36" fill="#fff" />
          </div>
          <div className="absolute flex justify-center bg-[#fff] border-[7px] border-[#D1F9CA]  px-[2.375rem] xl:px-[2.75rem] py-4 rounded-[2rem] -rotate-[5deg] top-[17.8rem] xl:top-[19.5rem] right-[8.5rem] hover:scale-105 duration-500">
            <img
              src="woocommerce.svg"
              draggable="false"
              className="size-32 xl:size-36"
              alt=""
            />
          </div>
          <div className="absolute flex justify-center top-[12rem] xl:top-[12rem] right-[7.5rem] xl:right-[9.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="152"
              height="67"
              fill="none"
              className="rotate-[225deg] w-[12rem]"
              viewBox="0 0 152 67"
            >
              <path
                fill="url(#a)"
                d="M147.521 50.916c-.49 1.397-.941 4.602-2.612 4.974-2.256.502-2.207-1.974-2.187-3.563.038-3.125 2.111-7.63 1.195-10.508-18.169 15.77-40.599 24.464-64.689 24.532-23.96.068-50.583-7.634-66.415-26.757C5.063 30.234-.091 18.814.817 6.382.895 5.315 1.036.023 3.015.936c1.031.475.784 7.268.929 8.487.752 6.339 2.561 12.186 5.617 17.771 10.412 19.032 32.04 29.724 52.672 32.891 13.667 2.098 28.107 1.172 41.511-2.46 6.919-1.875 13.805-4.453 20.078-7.969 5.292-2.965 14.11-7.637 17.296-13.038-5.355-1.018-11.893 3.17-17.388 2.945-2.911-.119-5.471-2.465-2.596-4.81 2.331-1.9 7.646-1.754 10.522-2.203 3.21-.501 6.417-.895 9.659-1.093 2.378-.146 7.42-1.45 9.313.211 3.347 2.937-1.966 15.628-3.107 19.248.476-1.51-.512 1.46 0 0z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="153.753"
                  x2="7.439"
                  y1="32.649"
                  y2="21.339"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#000" />
                  <stop offset="1" stopColor="#000" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute flex justify-center top-[17rem] xl:top-[19rem] left-[7.5rem] xl:left-[10rem] transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="152"
              height="67"
              fill="none"
              className="rotate-[40deg]"
            >
              <path
                fill="url(#a)"
                d="M147.521 50.916c-.49 1.397-.941 4.602-2.612 4.974-2.256.502-2.207-1.974-2.187-3.563.038-3.125 2.111-7.63 1.195-10.508-18.169 15.77-40.599 24.464-64.689 24.532-23.96.068-50.583-7.634-66.415-26.757C5.063 30.234-.091 18.814.817 6.382.895 5.315 1.036.023 3.015.936c1.031.475.784 7.268.929 8.487.752 6.339 2.561 12.186 5.617 17.771 10.412 19.032 32.04 29.724 52.672 32.891 13.667 2.098 28.107 1.172 41.511-2.46 6.919-1.875 13.805-4.453 20.078-7.969 5.292-2.965 14.11-7.637 17.296-13.038-5.355-1.018-11.893 3.17-17.388 2.945-2.911-.119-5.471-2.465-2.596-4.81 2.331-1.9 7.646-1.754 10.522-2.203 3.21-.501 6.417-.895 9.659-1.093 2.378-.146 7.42-1.45 9.313.211 3.347 2.937-1.966 15.628-3.107 19.248.476-1.51-.512 1.46 0 0z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="153.753"
                  x2="7.439"
                  y1="32.649"
                  y2="21.339"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f4f4f4" />
                  <stop offset="1" stopColor="#D0F9C8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
