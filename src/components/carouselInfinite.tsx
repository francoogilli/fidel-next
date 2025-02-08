"use client";

import { useRef, useState } from "react";
import ShoppingCartIcon from "../icons/shopping-cart";
import PackageIcon from "../icons/package";
import CashIcon from "../icons/cash";
import ChartIcon from "../icons/chart";
import ReceiptIcon from "../icons/receipt";
import { TruckDeliveryIcon } from "../icons/truck-delivery";

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  onHover: (hovering: boolean) => void;
  isBlurred: boolean;
}> = ({ icon, text, onHover, isBlurred }) => (
  <li
    className={`flex flex-col justify-between group cursor-pointer items-center w-[15rem] h-[12rem] py-5 gap-x-1 bg-[#ffffff] border border-[#e5e5e5] rounded-3xl transition-all duration-300 ${
      isBlurred ? "blur-sm opacity-50" : "blur-none opacity-100"
    }`}
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
      icon: <ChartIcon className="size-14" strokeWidth="1.6" />,
      text: "App Móvil para Vendedores",
    },
    {
      icon: <ShoppingCartIcon className="size-14" strokeWidth="1.5" />,
      text: "Ventas y Clientes",
    },
    {
      icon: <PackageIcon className="size-14" strokeWidth="1.6" />,
      text: "Productos y Stock",
    },
    {
      icon: <ReceiptIcon className="size-14" strokeWidth="1.6" />,
      text: "Finanzas y Contabilidad",
    },
    {
      icon: <ChartIcon className="size-14" strokeWidth="1.6" />,
      text: "Estadísticas",
    },
    {
      icon: <TruckDeliveryIcon className="size-14" strokeWidth="1.6" />,
      text: "Integración E-Commerce",
    },
    { icon: <CashIcon className="size-14" strokeWidth="1.6" />, text: "Caja" },
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
                />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarouselInfinite;
