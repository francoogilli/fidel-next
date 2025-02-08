"use client";

import { useRef, useState } from "react";
import ShoppingCartIcon from "../icons/shopping-cart";
import PackageIcon from "../icons/package";
import ChartIcon from "../icons/chart";
import ReceiptIcon from "../icons/receipt";
import { TruckDeliveryIcon } from "../icons/truck-delivery";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";
import Check from "@/icons/checkIcon";

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  onHover: (hovering: boolean) => void;
  isBlurred: boolean;
  onClick: () => void;
}> = ({ icon, text, onHover, isBlurred, onClick }) => (
  <li
    className={`flex flex-col justify-between group cursor-pointer items-center w-[15rem] h-[12rem] py-5 gap-x-1 bg-[#ffffff] border border-[#e5e5e5] rounded-3xl transition-all duration-300 ${
      isBlurred ? "blur-sm opacity-50" : "blur-none opacity-100"
    }`}
    onClick={onClick}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    {icon}
    <span className="md:text-base text-center text-xs pt-4 max-w-[12rem] flex justify-center items-center text-gray-800 font-normal">
      {text}
    </span>
    <a href="#" className="pt-3 flex justify-center items-center gap-2">
      Ver más{" "}
      <span className="border border-[#191919] group-hover:bg-black rounded-full p-0.5">
        <svg
          width="16"
          height="16"
          fill="currentColor"
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="text-[#191919] group-hover:text-white size-3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.75 4c0-.41421-.33579-.75-.75-.75s-.75.33579-.75.75v3.25H4c-.41421 0-.75.33579-.75.75s.33579.75.75.75h3.25V12c0 .4142.33579.75.75.75s.75-.3358.75-.75V8.75H12c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75H8.75V4Z" />
        </svg>
      </span>
    </a>
  </li>
);

const CarouselInfinite: React.FC = () => {
  const logosRef = useRef<HTMLUListElement>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedFeature, setSelectedFeature] = useState<{
    icon: React.ReactNode;
    text: string;
    subtitle: string;
    description: string;
  } | null>(null);
  const handleHover = (hovering: boolean, index: number) => {
    if (logosRef.current) {
      logosRef.current.style.animationPlayState = hovering
        ? "paused"
        : "running";
    }
    setHoverIndex(hovering ? index : null);
  };

  const items = [
    {
      icon: <ShoppingCartIcon className="size-14" strokeWidth="1.5" />,
      text: "Ventas y Clientes",
      subtitle: "Gestioná todo el ciclo de ventas y relaciones con clientes",
      description:
        "Optimiza el proceso de ventas y mejora la relación con tus clientes.",
    },
    {
      icon: <PackageIcon className="size-14" strokeWidth="1.6" />,
      text: "Compras y Proveedores",
      subtitle: "Optimizá la gestión de tus compras y proveedores",
      description:
        "Controla tu inventario de manera eficiente y sin complicaciones.",
    },
    {
      icon: <PackageIcon className="size-14" strokeWidth="1.6" />,
      text: "Productos y Stock",
      subtitle:
        "Administrá tu inventario en tiempo real y asegurate de que nunca te falte ni te sobre mercadería.",
      description:
        "Controla tu inventario de manera eficiente y sin complicaciones.",
    },
    {
      icon: <ReceiptIcon className="size-14" strokeWidth="1.6" />,
      text: "Finanzas y Contabilidad",
      subtitle: "Ordená tus números sin esfuerzo",
      description:
        "Mantén tus cuentas claras con herramientas de contabilidad avanzadas.",
    },
    {
      icon: <ChartIcon className="size-14" strokeWidth="1.6" />,
      text: "App Móvil para Vendedores",
      subtitle:
        "Dale a tu equipo las herramientas para vender más y mejor, con datos en tiempo real.",
      description:
        "Gestiona tus ventas desde cualquier lugar con nuestra app móvil para vendedores.",
    },
    {
      icon: <TruckDeliveryIcon className="size-14" strokeWidth="1.6" />,
      text: "Integración E-Commerce",
      subtitle:
        "Sincronizá tu negocio físico y digital en un solo sistema para automatizar procesos.",
      description:
        "Conéctate con plataformas de comercio electrónico de manera sencilla.",
    },
    {
      icon: <ChartIcon className="size-14" strokeWidth="1.6" />,
      text: "Estadísticas",
      subtitle:
        "Visualizá la información clave de tu negocio con reportes claros y fáciles de interpretar.",
      description:
        "Obtén informes detallados sobre el rendimiento de tu negocio.",
    },
  ];

  return (
    <div className="relative font-inter antialiased overflow-hidden">
      <main className="relative flex flex-col justify-center">
        <div className="w-full max-w-5xl xl:max-w-7xl mx-auto px-4 md:px-0 py-3 bg-gray-50 relative">
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul
              ref={logosRef}
              className="flex items-center justify-center md:justify-start animate-infinite-scroll"
            >
              {[...items, ...items].map((item, index) => (
                <FeatureItem
                  key={index}
                  {...item}
                  onHover={(hovering) => handleHover(hovering, index)}
                  isBlurred={hoverIndex !== null && hoverIndex !== index}
                  onClick={() => {
                    setSelectedFeature(item);
                    onOpen();
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Modal
        isOpen={isOpen}
        backdrop="blur"
        size="4xl"
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody className="p-10">
                <div className="flex justify-center items-center gap-2 pb-6">
                  {selectedFeature?.icon}
                  <h3 className=" text-3xl md:text-4xl xl:text-5xl font-sans font-bold">
                    {selectedFeature?.text}
                  </h3>
                </div>
                <div className="flex justify-center items-center text-center gap-2 pb-7">
                  <p className="italic text-xl">{selectedFeature?.subtitle}</p>
                </div>

                <div className="flex flex-col mx-auto gap-2">
                  <span className="flex items-center text-lg gap-4 py-1.5">
                    <Check
                      strokeWidth="4"
                      className={`bg-[#39e915] scale-150 text-[#ffffff] rounded-[15px] p-1`}
                    />
                    Emití facturas electrónicas, presupuestos y pedidos en
                    segundos.
                  </span>
                  <span className="flex items-center text-lg gap-4 py-1.5">
                    <Check
                      strokeWidth="4"
                      className={`bg-[#39e915] scale-150 text-[#ffffff] rounded-[15px] p-1`}
                    />
                    Creá, buscá y administrá clientes con información detallada.
                  </span>
                  <span className="flex items-center text-lg gap-4 py-1.5">
                    <Check
                      strokeWidth="4"
                      className={`bg-[#39e915] scale-150 text-[#ffffff] rounded-[15px] p-1`}
                    />
                    Registrá pagos y controlá cuentas corrientes fácilmente.
                  </span>
                  <span className="flex items-center text-lg gap-4 py-1.5">
                    <Check
                      strokeWidth="4"
                      className={`bg-[#39e915] scale-150 text-[#ffffff] rounded-[15px] p-1`}
                    />
                    Portal de clientes: A través de un link, tus clientes
                    acceden a XXXX sin
                  </span>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CarouselInfinite;
