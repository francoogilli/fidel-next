"use client";

import { useRef, useState } from "react";
import ShoppingCartIcon from "../icons/shopping-cart";
import PackageIcon from "../icons/package";
import ChartIcon from "../icons/chart";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";
import Check from "@/icons/checkIcon";
import BankIcon from "@/icons/bank";
import ShoppingBagIcon from "@/icons/shopping-bag";
import WorldUpIcon from "@/icons/worldUp";
import MobileIcon from "@/icons/mobile";

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  onHover: (hovering: boolean) => void;
  isBlurred: boolean;
  onClick: () => void;
}> = ({ icon, text, onHover, isBlurred, onClick }) => (
  <li
    className={`flex flex-col justify-between group cursor-pointer items-center w-[12rem] h-[10rem] md:w-[15rem] md:h-[12rem] py-3 md:py-5 gap-x-1 bg-gradient-to-tr from-[#FCFBF9] via-[#fff] to-[#f1f1f17d] border border-[#e5e5e5] rounded-3xl transition-all duration-300 ${
      isBlurred ? "blur-sm opacity-50" : "blur-none opacity-100"
    }`}
    style={{
      boxShadow: "0px 4px 6px 4px rgba(180, 156, 197, 0.08)",
    }}
    onClick={onClick}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    {icon}
    <span className="text-xs md:text-base text-center pt-2 md:pt-4 max-w-[10rem] md:max-w-[12rem] flex justify-center items-center text-gray-800 font-normal">
      {text}
    </span>
    <span className="pt-2 md:pt-3 flex justify-center text-sm items-center gap-2">
      Ver detalles{" "}
      <span className="border border-[#191919] group-hover:bg-black rounded-full p-0.5">
        <svg
          width="14"
          height="14"
          className="text-[#191919] group-hover:text-white size-2.5"
          fill="currentColor"
          aria-hidden="true"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.75 4c0-.41421-.33579-.75-.75-.75s-.75.33579-.75.75v3.25H4c-.41421 0-.75.33579-.75.75s.33579.75.75.75h3.25V12c0 .4142.33579.75.75.75s.75-.3358.75-.75V8.75H12c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75H8.75V4Z" />
        </svg>
      </span>
    </span>
  </li>
);

const CarouselInfinite: React.FC = () => {
  const logosRef = useRef<HTMLUListElement>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedFeature, setSelectedFeature] = useState<{
    icon: React.ReactNode;
    text: string;
    items: string[];
    subtitle: string;
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
      items: [
        "Emití facturas electrónicas, presupuestos, remitos y pedidos en segundos.",
        "Creá, buscá y administrá clientes con información detallada. Usá el CUIT o DNI para obtener automáticamente todos los datos de tu cliente en ARCA y optimizar el proceso de registro.",
        "Registrá pagos y controlá cuentas corrientes fácilmente.",
        "Portal de clientes: A través de un link, tus clientes acceden a su resumen de cuenta donde podrán visualizar y descargar los comprobantes emitidos, facturas pendientes de pagos y pagos emitidos.",
        "Emití reportes de Clientes que te facilitan la toma de decisiones.",
      ],
      subtitle:
        "Emití facturas, remitos, pedidos y presupuestos en segundos. Cargá clientes con CUIT/DNI y datos automáticos desde ARCA. Registrá pagos y controlá cuentas corrientes sin errores. Compartí resúmenes de cuenta a través del portal de clientes. Consultá reportes, analizá datos clave y tomá mejores decisiones.",
    },
    {
      icon: <ShoppingBagIcon className="size-14" strokeWidth="1.6" />,
      text: "Compras y Proveedores",
      items: [
        "Cargá las facturas de tus proveedores para actualizar automáticamente el stock y los precios de tus productos.",
        "Gestioná las Cuentas Corrientes con tus Proveedores, generando diferentes órdenes de pago.",
        "Cargá tus órdenes de Compra para enviar tu pedido a tus proveedores, de forma automática.",
        "Generá órdenes de producción y exportá la lista de insumos necesarios para satisfacer las órdenes pendientes.",
        "Determiná los descuentos que te otorgan tus proveedores para mantener tus costos actualizados.",
      ],
      subtitle:
        "Cargá facturas de compra y actualizá stock y precios automáticamente. Administrá cuentas corrientes, órdenes de pago y órdenes de compra automáticas a proveedores. Mantené tus costos al día cargando descuentos y condiciones especiales. Si fabricás productos, generá órdenes de producción y exportá la lista de insumos necesarios.",
    },
    {
      icon: <PackageIcon className="size-14" strokeWidth="1.6" />,
      text: "Productos y Stock",
      items: [
        "Creá variantes, productos compuestos y listas de precios.",
        "Controlá inventario en tiempo real y gestioná múltiples depósitos.",
        "Administrá compras y órdenes de reposición.",
        "Configurá el stock máximo y mínimo para recibir alertas de reposición.",
        "Actualizá los precios por porcentajes o mediante archivos Excel.",
        "Realizá ajustes de stock y transferencias entre depósitos para mantener la organización.",
      ],
      subtitle:
        "Mantené tu inventario ordenado y actualizado. Creá variantes, kits, productos compuestos y listas de precios. Controlá el stock en tiempo real, incluso en múltiples depósitos. Recibí alertas automáticas según el stock mínimo o máximo configurado. Actualizá precios por porcentaje o desde Excel en pocos clics. Hacé ajustes y transferencias de stock de forma ágil y segura.",
    },
    {
      icon: <BankIcon className="size-14" strokeWidth="1.8" />,
      text: "Cajas, Bancos, Finanzas y Contabilidad",
      items: [
        "Controlá ingresos, egresos y movimientos de dinero.",
        "Mantené un registro preciso de saldos y pagos.",
        "Generá reportes clave para ARCA y análisis financieros.",
        "Registrá cheques propios y de terceros con alertas previas al vencimiento.",
        "Descargá tus reportes contables de manera fácil y rápida.",
        "Gestioná la apertura y cierre de tus cajas de forma eficiente.",
        "Creá grupos de cajas para tener cajas independientes según tu operación.",
      ],
      subtitle:
        "Gestioná ingresos, egresos y saldos bancarios con precisión. Registrá cheques propios y de terceros con alertas de vencimiento. Controlá la apertura y cierre de cajas (con opción de cajas independientes). Generá y descargá reportes contables y financieros en segundos. Accedé a reportes compatibles con ARCA para presentaciones formales.",
    },
    {
      icon: <MobileIcon className="size-14" strokeWidth="1.8" />,
      text: "App Móvil para Vendedores",
      items: [
        "App exclusiva: Pedidos, Recibos, Pagos y Órdenes de Compra con sincronización en tiempo real.",
        "Definí zonas de venta para una mejor organización comercial.",
        "Generá hojas de ruta para tus vendedores, optimizando recorridos.",
        "Establecé comisiones por ventas y/o cobros generados.",
        "Cargá y visualizá imágenes de productos de forma fácil.",
        "Funcionamiento offline para zonas con señal limitada.",
        "Guardá la ubicación de tus clientes para encontrarlos fácilmente.",
        "Consultá el estado de cuenta de tu cliente de forma rápida.",
      ],
      subtitle:
        "Generá pedidos, pagos y recibos provisorios con sincronización en tiempo real. Consultá stock, precios y estado de cuenta de cada cliente al instante. Funciona offline: ideal para zonas con poca señal. Visualizá imágenes de productos y evitá errores en la carga. Organizá zonas de venta, hojas de ruta y comisiones por vendedor. Guardá la ubicación de cada cliente para visitas más eficientes.",
    },
    {
      icon: <WorldUpIcon className="size-14" strokeWidth="1.6" />,
      text: "Integraciones E-Commerce",
      items: [
        "Sincronizá automáticamente toda la información de tus productos: stock, precios, fotos y más.",
        "Recibí los pedidos realizados por tus clientes desde el E-Commerce.",
        "Aplicá descuentos promocionales y potenciá las ventas en tu Tienda.",
        "Imprimí etiquetas de envío con todos los datos de tus clientes.",
        "Registrá en el sistema a los nuevos clientes que compren en tu Tienda.",
      ],
      subtitle:
        "Sincronizá stock, precios, imágenes y descripciones automáticamente. Recibí pedidos online listos para procesar en Fidel. Aplicá descuentos y promociones desde el sistema. Imprimí etiquetas de envío con los datos del cliente. Registrá automáticamente nuevos compradores en tu base de clientes.",
    },
    {
      icon: <ChartIcon className="size-14" strokeWidth="1.6" />,
      text: "Estadísticas y Reportes",
      items: [
        "Conocé el estado de tus ventas, compras, clientes, presupuestos y productos de forma clara.",
        "Aplicá filtros para obtener reportes más puntuales.",
        "Identificá tus productos más vendidos para tomar decisiones estratégicas.",
        "Visualizá datos clave de tu gestión en nuestro Dashboard.",
      ],
      subtitle:
        "Consultá reportes detallados de ventas, compras, clientes, presupuestos y productos. Aplicá filtros para obtener información específica. Identificá tus productos más vendidos y optimizá tu estrategia. Accedé a un dashboard fácil de interpretar.",
    },
  ];

  return (
    <div className="relative font-inter antialiased overflow-hidden">
      <main className="relative flex flex-col justify-center">
        <div className="w-full max-w-5xl xl:max-w-7xl mx-auto px-4 md:px-0 py-3 bg-[#f8f8f8ee] relative">
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#FCFBF9] to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#FCFBF9] to-transparent pointer-events-none z-10"></div>
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
        size="5xl"
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody className="p-5 md:p-20 max-h-[80vh] overflow-y-auto">
                <div className="flex justify-center items-center gap-2 pb-3">
                  {selectedFeature?.icon}
                  <h3 className=" text-3xl md:text-4xl xl:text-5xl font-sans font-bold">
                    {selectedFeature?.text}
                  </h3>
                </div>
                <div className="flex justify-center items-center text-start gap-2 pb-9">
                  <p className="text-lg">{selectedFeature?.subtitle}</p>
                </div>

                <div className="flex flex-col gap-2">
                  {selectedFeature?.items.map((item, index) => (
                    <span
                      key={index}
                      className="flex items-start text-lg gap-4 py-1.5"
                    >
                      <Check
                        strokeWidth="4"
                        className="bg-[#39e915] scale-150 text-white rounded-[15px] p-1 mt-1"
                      />
                      {item}
                    </span>
                  ))}
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
