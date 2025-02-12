"use client";

import { useState } from "react";
import ThreeStripesLeft from "../icons/threeStripesLeft";
import UsersGroup from "../icons/user-group";
import ThreeStripesRight from "../icons/threeStripesRight";
import Star from "../icons/star";
import GradientLine from "./gradientLine";
import Image from "next/image";

const testimonials = [
  {
    name: "María López",
    role: "CEO en TechSolutions",
    text: "Fidel nos ayudó a transformar completamente la manera en que gestionamos nuestra empresa. La automatización y las herramientas son excelentes. Desde que implementamos su sistema, hemos logrado una reducción del 40% en nuestros tiempos operativos y hemos incrementado nuestra capacidad de análisis financiero. Además, el equipo de soporte siempre está disponible y dispuesto a ayudarnos.",
    image: "https://via.placeholder.com/500x300/ecfeef/000000?text=1",
    rating: 5,
  },
  {
    name: "Juan Pérez",
    role: "Gerente de Operaciones en AgroTech",
    text: "Con Fidel, hemos reducido significativamente el tiempo dedicado a tareas administrativas. ¡Totalmente recomendado! Antes dedicábamos horas a procesos manuales que ahora se completan en minutos. Esto nos ha permitido enfocarnos en áreas estratégicas de la empresa, como mejorar la logística y el servicio al cliente. La plataforma es intuitiva y fácil de usar, incluso para quienes no tienen experiencia técnica.",
    image: "https://via.placeholder.com/500x300/ecfeef/000000?text=2",
    rating: 4,
  },
  {
    name: "Lucía García",
    role: "Fundadora de MarketNow",
    text: "Implementar Fidel fue la mejor decisión para nuestro negocio. Su soporte y funcionalidades son inigualables. Nos impresionó la personalización que ofrecen, adaptándose perfectamente a las necesidades específicas de nuestra empresa. Ahora, nuestro equipo está más organizado, y hemos logrado un aumento del 25% en productividad. Recomendamos Fidel a cualquier empresa que busque optimizar su gestión.",
    image: "https://via.placeholder.com/500x300/ecfeef/000000?text=3",
    rating: 5,
  },
];

export default function Customers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleSlideChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setActiveIndex(newIndex);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const deltaX = currentX - startX;

    if (deltaX > 50) {
      handleSlideChange(activeIndex - 1);
      setIsDragging(false);
    } else if (deltaX < -50) {
      handleSlideChange(activeIndex + 1);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-4 md:px-6 pt-4 pb-20">
      {/* Header */}
      <div className="flex justify-center items-center gap-x-2.5 pt-20 pb-4">
        <GradientLine direction="left" />
        <ThreeStripesLeft />
        <div className="flex items-center rounded-full bg-[#f6f6f6] px-4 xl:px-5 py-2 animation-1">
          <UsersGroup className="size-5 text-[#121212]" />
          <h2
            className="text-xs md:text-sm xl:text-base font-medium text-center ml-2 text-[#121212]"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Clientes
          </h2>
        </div>
        <ThreeStripesRight />
        <GradientLine direction="right" />
      </div>

      {/* Title */}
      <h3
        className="animation-1 text-4xl md:text-[3.25rem] xl:text-[3.5rem] font-bold text-center my-8 pb-1 tracking-tight"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        Lo que nuestros clientes dicen.
      </h3>
      <h4
        className="animation-1 text-center text-sm md:text-lg xl:text-xl text-[#5c5c5c] font-medium w-[16rem] md:w-[24rem] xl:w-[30rem] mx-auto pb-0 md:pb-9"
        style={{ fontFamily: "Satoshi" }}
      >
        Descubri cómo Fidel transformo sus negocios.
      </h4>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
        {/* Image */}
        <div
          className="md:col-span-5 col-span-12 order-2 md:order-1 flex justify-center"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="relative w-full">
            <Image
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              width={500}
              height={300}
              draggable="false"
              className="w-full h-96 xl:h-[26.5rem] object-cover rounded-[1.8rem] border-[5px] border-[#a6faa5d8] hover:border-[#79f277d0] duration-300"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-blue-600 scale-110"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="md:col-span-7 col-span-12 order-1 md:order-2">
          <div className="rounded-2xl p-8 bg-white">
            <h3
              className="text-2xl xl:text-3xl font-semibold"
              style={{ fontFamily: "Satoshi" }}
            >
              {testimonials[activeIndex].name}
            </h3>
            <p className="text-sm xl:text-base text-gray-500">
              {testimonials[activeIndex].role}
            </p>
            <div className="flex mt-2 space-x-0.5">
              {Array.from({ length: testimonials[activeIndex].rating }).map(
                (_, i) => (
                  <Star key={i} className="text-[#efeb23] size-4 xl:size-5" />
                )
              )}
            </div>
            <p
              className="mt-4 text-[#666666] font-medium text-lg xl:text-xl"
              style={{ fontFamily: "Satoshi" }}
            >
              {testimonials[activeIndex].text}
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="mt-12">
        <GradientLine direction="right" />
      </div>
    </div>
  );
}
