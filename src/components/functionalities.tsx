import CreditCardIcon from "../icons/creditCard";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import ThreeStripesRight from "../icons/threeStripesRight";
import CarouselInfinite from "./carouselInfinite";
import GradientLine from "./gradientLine";

export default function Functionalities() {
  return (
    <div className="pb-20 md:pb-28">
      <div className="flex justify-center items-center gap-x-2.5">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2 animation-1">
          <CreditCardIcon className="size-4 md:size-5 text-[#121212]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
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
        Un software, todas las soluciones.
      </h3>
      <h4
        className="animation-1 text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[20rem] md:w-[27rem] xl:w-[39rem] mx-auto pb-0 md:pb-9"
        style={{ fontFamily: "Satoshi" }}
      >
        Si usás tantas plataformas que ya ni sabés dónde buscar las cosas, te
        entendemos. Con Fidel, todo lo que necesitás está en un solo lugar,
        <span className="hidden md:block"> sincronizado y listo para usarse.</span>
      </h4>
      <div className="pt-10">
        <CarouselInfinite />
      </div>
    </div>
  );
}
