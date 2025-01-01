import CreditCardIcon from "../icons/creditCard";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import GradientLine from "./gradientLine";

export default function Functionalities() {
  const items = [
    {
      title: "Clientes y Ventas",
      subtitle: "Gestión integral de clientes y ventas.",
      imgSrc: "/func1.webp",
    },
    {
      title: "Facturación Electrónica",
      subtitle: "Simplifica tus procesos de facturación.",
      imgSrc: "/func1.webp",
    },
    {
      title: "Zonas y Vendedores",
      subtitle: "Organiza tus zonas y equipo de ventas.",
      imgSrc: "/func1.webp",
    },
    {
      title: "Productos y Stock",
      subtitle: "Control eficiente de inventario.",
      imgSrc: "/func1.webp",
    },
    {
      title: "Remitos y Transportes",
      subtitle: "Optimiza la logística de entregas.",
      imgSrc: "/func1.webp",
    },
    {
      title: "Proveedores y Compras",
      subtitle: "Administra tus proveedores fácilmente.",
      imgSrc: "/func1.webp",
    },
    {
      title: "Impuestos y Contabilidad",
      subtitle: "Cumple con tus obligaciones fiscales.",
      imgSrc: "/func1.webp",
    },
    {
      title: "Caja, Cheques y Bancos",
      subtitle: "Lleva un control detallado de tus finanzas.",
      imgSrc: "/func1.webp",
    },
    {
      title: "Estadísticas",
      subtitle: "Analiza y mide el rendimiento de tu negocio.",
      imgSrc: "/func1.webp",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center gap-x-2.5">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#333333] px-4 xl:px-5 py-2 animation-1">
          <CreditCardIcon className="size-4 md:size-5 text-[#f5f5f5]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#f5f5f5]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Funcionalidades
          </h2>
        </div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>
      <h3
        className="animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 tracking-tight"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        Hace todo en un mismo lugar.
      </h3>
      <h4
        className="animation-1 text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[16rem] md:w-[24rem] xl:w-[28rem] mx-auto pb-0 md:pb-9"
        style={{ fontFamily: "Satoshi" }}
      >
        Todas las herramientas que necesitas, juntas en un solo lugar.
      </h4>

      <div className="w-full max-w-7xl xl:max-w-[90rem] mx-auto px-4 space-y-6">
        {/* Primer Renglón: 3 Columnas Iguales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FCFA] border border-[#edf3f2] hover:scale-105 duration-700 rounded-2xl p-4 flex flex-col items-start"
            >
              <img
                src={item.imgSrc}
                className="w-full h-40 xl:h-[12rem] object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg xl:text-xl font-medium text-left text-gray-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm xl:text-base text-left text-gray-500">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Segundo Renglón: 2 Columnas Iguales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FCFA] border border-[#edf3f2] hover:scale-105 duration-700 rounded-2xl p-4 flex flex-col items-start"
            >
              <img
                src={item.imgSrc}
                className="w-full h-56 xl:h-[16.8rem] object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg xl:text-xl font-medium text-left text-gray-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm xl:text-base text-left text-gray-500">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Tercer Renglón: Primera Columna 3/4 */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          <div className="col-span-10 md:col-span-6 bg-[#F8FCFA] border border-[#edf3f2] hover:scale-105 duration-700 rounded-2xl p-4 flex flex-col items-start">
            <img
              src={items[5].imgSrc}
              className="w-full h-64 xl:h-[19.2rem] object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg xl:text-xl font-medium text-left text-gray-700">
              {items[5].title}
            </h3>
            <p className="mt-2 text-sm xl:text-base text-left text-gray-500">
              {items[5].subtitle}
            </p>
          </div>
          <div className="col-span-10 md:col-span-4 bg-[#F8FCFA] border border-[#edf3f2] hover:scale-105 duration-700 rounded-2xl p-4 flex flex-col items-start">
            <img
              src={items[6].imgSrc}
              className="w-full h-64 xl:h-[19.2rem] object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg xl:text-xl font-medium text-left text-gray-700">
              {items[6].title}
            </h3>
            <p className="mt-2 text-sm xl:text-base text-left text-gray-500">
              {items[6].subtitle}
            </p>
          </div>
        </div>

        {/* Cuarto Renglón: Segunda Columna 3/4 */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          <div className="col-span-10 md:col-span-4 bg-[#F8FCFA] border border-[#edf3f2] hover:scale-105 duration-700 rounded-2xl p-4 flex flex-col items-start">
            <img
              src={items[7].imgSrc}
              className="w-full h-64 xl:h-[19.2rem] object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg xl:text-xl font-medium text-left text-gray-700">
              {items[7].title}
            </h3>
            <p className="mt-2 text-sm xl:text-base text-left text-gray-500">
              {items[7].subtitle}
            </p>
          </div>
          <div className="col-span-10 md:col-span-6 bg-[#F8FCFA] border border-[#edf3f2] hover:scale-105 duration-700 rounded-2xl p-4 flex flex-col items-start">
            <img
              src={items[8].imgSrc}
              className="w-full h-64 xl:h-[19.2rem] object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg xl:text-xl font-medium text-left text-gray-700">
              {items[8].title}
            </h3>
            <p className="mt-2 text-sm xl:text-base text-left text-gray-500">
              {items[8].subtitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
