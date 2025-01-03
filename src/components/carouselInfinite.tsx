"use client";

import { useEffect, useRef } from "react";
import ShoppingCartIcon from "../icons/shopping-cart";
import ShoppingBagIcon from "../icons/shopping-bag";
import UsersIcon from "../icons/users";
import PackageIcon from "../icons/package";
import CashIcon from "../icons/cash";
import ChartIcon from "../icons/chart";
import ReceiptIcon from "../icons/receipt";
import { TruckDeliveryIcon } from "../icons/truck-delivery";

const FeatureItem: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <li className="flex justify-center items-center p-[.4375rem] px-3 gap-x-1 bg-[#ffffff] border border-[#edeff3] rounded-lg">
    {icon}
    <span className="md:text-sm text-xs text-gray-800 font-normal whitespace-nowrap">
      {text}
    </span>
  </li>
);

const CarouselInfinite: React.FC = () => {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      ul.style.animation = "infinite-scroll 25s linear infinite";
    }
  }, []);

  const items = [
    {
      icon: <ShoppingCartIcon className="size-5" strokeWidth="1.5" />,
      text: "Ventas",
    },
    {
      icon: <ShoppingBagIcon className="size-5" strokeWidth="1.7" />,
      text: "Compras",
    },
    {
      icon: <UsersIcon className="size-5" strokeWidth="1.7" />,
      text: "Clientes",
    },
    {
      icon: <PackageIcon className="size-5" strokeWidth="1.6" />,
      text: "Productos",
    },
    { icon: <CashIcon className="size-5" strokeWidth="1.6" />, text: "Caja" },
    {
      icon: <ChartIcon className="size-5" strokeWidth="1.6" />,
      text: "Estadísticas",
    },
    {
      icon: <ReceiptIcon className="size-5" strokeWidth="1.6" />,
      text: "Contabilidad",
    },
    {
      icon: <TruckDeliveryIcon className="size-5" strokeWidth="1.6" />,
      text: "Pedidos",
    },
  ];

  return (
    <div className="relative font-inter antialiased overflow-hidden">
      <main className="relative flex flex-col justify-center">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-0 py-3 bg-gray-50 relative">
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul
              ref={logosRef}
              className="flex items-center justify-center md:justify-start animate-infinite-scroll"
            >
              {[...items, ...items].map((item, index) => (
                <FeatureItem key={index} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarouselInfinite;
