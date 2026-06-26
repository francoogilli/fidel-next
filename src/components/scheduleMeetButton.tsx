import React from "react";

export const ScheduleMeetButton: React.FC = () => {
  return (
    <a
      href="https://calendly.com/reunionesfidel"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-center items-center bg-[#1a1a1aeb] hover:bg-[#2b2b2beb] text-white text-sm xl:text-base font-medium rounded-xl px-4 py-3 transition-colors duration-500"
    >
      Agendar Reunión
    </a>
  );
};
