import CrossIcon from "../icons/crossx";
import { MouseEvent, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function Modal({ isOpen, onClose, videoUrl }: ModalProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = 'hidden'; // Evitar scroll
      document.body.style.paddingRight = `${scrollbarWidth}px`; // Compensar ancho de la barra de scroll
    } else {
      setTimeout(() => setShowModal(false), 300);
      document.body.style.overflow = ''; // Restaurar scroll
      document.body.style.paddingRight = ''; // Restaurar padding
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 z-50 -top-6 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClickOutside}
    >
      <div
        className={`bg-transparent rounded-3xl p-6 max-w-4xl w-full relative transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-90"
        }`}
      >
        <button
          className="absolute -top-10 right-5 lg:-top-5 lg:-right-4 text-black rounded-full p-1"
          onClick={onClose}
        >
          <CrossIcon className="size-11 text-white active:bg-black/30 duration-200 hover:bg-black/10 rounded-full p-1.5" />
        </button>
        {/* Contenedor para el video */}
        <div
          className="relative rounded-xl md:rounded-[1.875rem] overflow-hidden"
          style={{ paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            src={videoUrl}
            title="YouTube video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
