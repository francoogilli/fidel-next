"use client";

import { motion } from "framer-motion";
import MobileIcon from "../icons/mobile";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";
import Image from "next/image";
import ShoppingCart from "@/icons/shopping-cart";
import Package from "@/icons/package";
import ArrowUpIcon from "@/icons/arrow-up";
import ShareIcon from "@/icons/share";

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

      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-10 gap-12 items-center">
          <div className="rounded-2xl col-span-4 ">
            <Image
              src="https://plus.unsplash.com/premium_photo-1674558864100-c094c560185d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Business professional working"
              width={600}
              height={450}
              className="object-cover object-center rounded-2xl h-auto max-h-[625px]"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 col-span-6">
            {[
              {
                icon: ShoppingCart,
                title: "Tomá pedidos en segundos.",
                text: "Agregá productos rápido, copiá pedidos anteriores y evitá errores. Todo se sincroniza automáticamente con Fidel.",
                gradient: "rose-50",
                strokeWidth: "2",
              },
              {
                icon: Package,
                title: "Stock y precios en tiempo real.",
                text: "Consultá stock actualizado y listas de precios al instante para evitar ventas fallidas.",
                gradient: "rose-50",
              },
              {
                icon: Package,
                title: "Controlá tus cuentas corrientes.",
                text: "Verificá saldos de clientes, registrá pagos y generá recibos provisorios en segundos.",
                gradient: "rose-50",
              },
              {
                icon: ShareIcon,
                title: "Compartí pedidos por WhatsApp.",
                text: "Enviá un resumen detallado del pedido y evitá errores de comunicación. Todo queda registrado en Fidel.",
                gradient: "rose-50",
                iconClass: "mr-1",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b from-${item.gradient} to-[#ffffff02] via-[#ffffff] rounded-2xl p-9 border border-[#e6eee6bd]`}
              >
                <div
                  className="bg-[#24d708c1] rounded-full size-14 flex items-center justify-center mb-4 shadow-2xl shadow-yellow-400"
                  style={{
                    boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <item.icon
                    strokeWidth={item.strokeWidth}
                    className={`text-white size-7 ${item.iconClass || ""}`}
                  />
                </div>

                <h3 className="font-semibold tracking-tight text-xl mb-2 font-sans">
                  {item.title}
                </h3>
                <p className="text-[#6b6b6b] font-medium">{item.text}</p>
              </div>
            ))}
            <div className="bg-[#24d708c1] rounded-xl flex justify-center items-center">
              <div className="w-full sm:w-auto bg-[#58E043] text-white py-5 px-7 rounded-xl text-sm font-normal flex items-center justify-center gap-2">
                Lorem ipsum dolor sit amet.
                <div className="bg-white rounded-full p-0.5">
                  <ArrowUpIcon className="size-4 text-black" />
                </div>
              </div>
            </div>
            <div className="bg-[#24d708c1] rounded-xl flex justify-center items-center">
              <div className="w-full sm:w-auto bg-[#58E043] text-white py-5 px-7 rounded-xl text-sm font-normal flex items-center justify-center gap-2">
                Lorem ipsum dolor sit amet.
                <div className="bg-white rounded-full p-0.5">
                  <ArrowUpIcon className="size-4 rotate-90 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
