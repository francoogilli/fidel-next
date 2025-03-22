"use client";

import { motion } from "framer-motion";
import MobileIcon from "../icons/mobile";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";
import ArrowUpIcon from "@/icons/arrow-up";
import ChevronIcon from "@/icons/chevron";
import CoinIcon from "@/icons/coin";

export default function AppMobile() {
  return (
    <div className="max-w-7xl xl:max-w-[90rem] mb-8 mx-auto px-3 md:px-3">
      <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2"
        >
          <MobileIcon className="size-4 md:size-4 text-[#121212]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Fidel App
          </h2>
        </motion.div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>
      <motion.div
        className="flex mx-auto justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3
          className="text-4xl md:text-[3.25rem] xl:w-[75%] xl:leading-[4.2rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 tracking-tight"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Todo lo que tus vendedores necesitan, en la palma de tu mano.
        </h3>
      </motion.div>
      <motion.h4
        className="text-center text-sm md:text-lg text-[#5c5c5c] font-medium md:w-[55%] mx-auto pb-0 md:pb-9"
        style={{ fontFamily: "Satoshi" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Pensada para distribuidoras, mayoristas y equipos de venta en la calle.
        Fidel App permite a tus vendedores tomar pedidos, consultar precios y
        registrar cobranzas en el momento, sin tener que volver a la oficina.
      </motion.h4>

      <div className="bg-gradient-to-tr from-[#F2F0FD] to-[#E5F8F4] border border-[#ebf0ff] rounded-[35px] py-16 pl-16 pr-5 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h2 className="text-[33px] font-sans font-bold text-gray-800 mb-6">
              Tomá pedidos en segundos.
            </h2>

            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="mt-1">
                  <CoinIcon className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">
                    Alerts & Schedules
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Stay organized with smart reminders and automated routines
                    for daily productivity.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1">
                  <ArrowUpIcon className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">
                    Customization & Design
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Personalize your experience with custom themes, layouts, and
                    styling options.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <img src="a.jpg" alt="" />
        </div>
      </div>

      <div className="bg-gradient-to-bl to-[#fcf8f7] from-[#f0f9e6] mt-7 rounded-[35px] py-16 pr-16 pl-8 ">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Project Card */}
          <img src="b.jpg" alt="" />
          {/* Right Column - Features */}
          <div>
            <h2 className="text-[33px] tracking-tighter font-sans font-bold text-gray-800 mb-6">
              Stock y precios actualizados en tiempo real.
            </h2>

            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="mt-1">
                  <ChevronIcon className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">
                    Activity Tracking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We explore how embracing diversity fosters innovation,
                    enhances sustainable growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1">
                  <ArrowUpIcon className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">
                    Various Documents & Files
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Effortlessly manage multiple documents and files in one
                    place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <button className="w-full max-w-[250px] bg-gradient-to-l from-[#191919] to-[#414141] text-white px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="209"
            height="256"
            viewBox="0 0 814 1000"
            className="size-5"
          >
            <path
              fill="#fff"
              d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
            />
          </svg>
          Disponible para iOS
        </button>
        <button className="w-full max-w-[250px] bg-[#ededed57] font-medium border border-[#e6eee6] text-[#000000] px-5 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2">
          <svg
            className="size-5"
            aria-hidden="true"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0,0h40v40H0V0z"></path>
            <g>
              <path
                d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z"
                fill="#EA4335"
              ></path>
              <path
                d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
                fill="#FBBC04"
              ></path>
              <path
                d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
                fill="#4285F4"
              ></path>
              <path
                d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z"
                fill="#34A853"
              ></path>
            </g>
          </svg>
          Disponible para Android
        </button>
      </div>
    </div>
  );
}
