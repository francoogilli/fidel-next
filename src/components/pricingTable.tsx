"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Check from "../icons/checkIcon";
import DoubleChevron from "../icons/doubleChevron";
import CrossIcon from "../icons/crossx";
import InfoCircle from "../icons/infoCircle";
import Tooltip from "./tooltip";

export default function PricingTable() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const plans = [
    { name: "Básico", price: "$37.000" },
    { name: "Inicial", price: "$50.000" },
    { name: "Intermedio", price: "$68.000" },
    { name: "Avanzado", price: "$88.000" },
  ];

  const features = [
    {
      title: "Asesoría",
      info: "Tipo de asesoría",
      values: ["Prioritaria", "Prioritaria", "Prioritaria", "Prioritaria"],
    },
    {
      title: "Usuarios",
      info: "Usuarios disponibles. Sin contar vendedores",
      values: [1, 3, 6, 12],
    },
    {
      title: "Vendedores",
      info: "Vendedores para pedidos en app móvil",
      values: ["-", "-", 3, 9],
    },
    {
      title: "Gestion",
      info: "Compras, Proveedores y Estadísticas",
      values: [false, true, true, true],
    },
    {
      title: "Portal de clientes",
      info: "Acceso a ventas y pagos",
      values: [false, true, true, true],
    },
    {
      title: "Reportes Contables",
      info: "IVA, IIBB e Imp. Municipal",
      values: [false, true, true, true],
    },
    {
      title: "App Mobile",
      info: "Acceso a la aplicacion mobile.",
      values: [false, true, true, true],
    },
    {
      title: "Tienda Nube",
      info: "Integración con Tienda Nube.",
      values: [false, true, true, true],
    },
    {
      title: "Percepciones Prov.",
      info: "Facturar utilizando múltiples CUITs.",
      values: [false, true, true, true],
    },
    {
      title: "Múltiples CUITs",
      info: "Gestión de percepciones provinciales.",
      values: [false, false, 2, 6],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const isScreenLarge = window.innerWidth >= 768;
      setIsLargeScreen(isScreenLarge);
      if (isScreenLarge) {
        setSelectedPlanIndex(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePlanClick = (index: number) => {
    if (!isLargeScreen) {
      setSelectedPlanIndex(index);
    }
  };

  const renderFeatureValue = (value: any) =>
    typeof value === "boolean" ? (
      <motion.span
        className="text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {value ? (
          <Check className="bg-gradient-to-b from-[#63ff33] to-[#b3ff99] rounded-full p-1" />
        ) : (
          <CrossIcon className="rounded-full bg-gradient-to-tl from-[#ececec] to-[#ffffff] text-[#000000] size-5 p-1" />
        )}
      </motion.span>
    ) : (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {value}
      </motion.span>
    );

  return (
    <div className="max-w-7xl xl:max-w-[90rem] px-4 mx-auto flex flex-col gap-6 mt-0 lg:mt-[60px]">
      <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
        <div className="flex flex-col gap-6 w-full lg:w-[200px] border-opacity-10 rounded-[10px] lg:rounded-[20px] p-0 lg:p-5">
          <p className="mt-4 min-[1024px]:hidden text-base font-normal text-center">
            Elija la opción que se ajuste a sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-1 w-full lg:w-[calc(100%-200px)]">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              onClick={() => handlePlanClick(index)}
              className={`relative bg-[#dddddd25] md:cursor-default p-2 lg:p-5 rounded-[10px] lg:rounded-[20px] border ${
                selectedPlanIndex === index
                  ? "border-[#d5d4d4] bg-gradient-to-bl from-[#60ff6c] to-[#0bcf0f] text-[#f5f5f5]"
                  : "border-[#747474]"
              } border-opacity-10 flex flex-col items-center lg:items-start justify-around h-[72px] lg:h-auto xl:h-[14rem] cursor-pointer`}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {index === 1 && (
                <motion.div
                  className="hidden lg:block absolute top-3 right-3 bg-[#fefefe57] text-white text-xs xl:text-sm font-medium px-4 py-2 rounded-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Popular
                </motion.div>
              )}

              <motion.p
                className="text-[14px] lg:text-[24px] xl:text-[28px] font-semibold lg:font-bold"
                style={{ fontFamily: "Plus Jakarta Sans" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {plan.name}
              </motion.p>

              <div className="flex items-center justify-center space-x-1">
                <motion.p
                  className="text-[13px] lg:text-[35px] xl:text-[40px] lg:tracking-tight font-bold my-3"
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {plan.price}
                </motion.p>
                <motion.p
                  className={`hidden lg:block text-[14px] lg:text-xs xl:text-sm ${
                    selectedPlanIndex === index
                      ? "text-[#ffffff]"
                      : "text-[#222222]"
                  } font-bold mt-3`}
                  style={{ fontFamily: "Plus Jakarta Sans" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  /mes
                </motion.p>
              </div>

              <div className="hidden lg:flex justify-center align-center w-full">
                <motion.button
                  style={{ fontFamily: "Satoshi" }}
                  className={`flex justify-center tracking-wide items-center gap-x-1 ${
                    selectedPlanIndex === index
                      ? "bg-[#ffffff] hover:bg-[#efefef] text-[#232323]"
                      : "bg-[#191919] hover:bg-[#333333] text-[#f3f3f3]"
                  } font-medium rounded-3xl text-sm xl:text-base px-8 py-2.5 text-center transition-all duration-200`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Elegir plan
                  <DoubleChevron className="size-4" strokeWidth="2.2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className="flex items-center justify-between gap-5 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-[50%] lg:w-[200px] font-medium text-base lg:text-[18px]"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              <div className="flex items-center gap-2">
                <div className="hidden lg:flex items-center gap-1">
                  <Tooltip text={feature.info} hideOnSmallScreens={true}>
                    <InfoCircle className="size-3.5 text-[#414141]" />
                  </Tooltip>
                </div>
                <p>{feature.title}</p>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-4 gap-1 w-[calc(100%-200px)]">
              {feature.values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-[#fbfbfb] hover:bg-[#f2f2f2ae] text-[#1f1f1f] text-base font-normal rounded-lg h-[54px] p-3 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderFeatureValue(value)}
                </motion.div>
              ))}
            </div>
            <div className="lg:hidden w-[50%] grid grid-cols-1">
              <motion.div
                className="bg-[#fbfbfb] text-[#1f1f1f] text-base font-normal rounded-lg h-[54px] p-3 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {renderFeatureValue(feature.values[selectedPlanIndex])}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
