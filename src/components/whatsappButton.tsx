"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5491100000000";
const WHATSAPP_MESSAGE =
  "¡Hola! Estoy viendo la web de Fidel y me gustaría acceder más INFO para conocer mejor el sistema.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        {/* Tooltip */}
        <span
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(8px)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
            background: "#111",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 500,
            padding: "6px 12px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
          }}
        >
          ¡Escribinos por WhatsApp!
        </span>

        {/* Botón */}
        <span
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: hovered
              ? "0 6px 24px rgba(37,211,102,0.55)"
              : "0 4px 16px rgba(37,211,102,0.35)",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "box-shadow 0.2s ease, transform 0.2s ease",
            flexShrink: 0,
          }}
          className="bg-gradient-to-br from-[#25D366] to-[#01fe5e]"
        >
          {/* SVG oficial de WhatsApp */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="26"
            height="26"
            fill="white"
          >
            <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.363.638 4.674 1.846 6.694L2.667 29.333l6.805-1.783A13.27 13.27 0 0 0 16.003 29.333C23.369 29.333 29.333 23.363 29.333 16S23.369 2.667 16.003 2.667zm0 2.4c5.91 0 10.93 5.02 10.93 10.933s-5.02 10.933-10.93 10.933a10.9 10.9 0 0 1-5.573-1.527l-.397-.24-4.037 1.058 1.08-3.935-.263-.413A10.88 10.88 0 0 1 5.073 16c0-5.913 5.017-10.933 10.93-10.933zm-3.23 5.6c-.22 0-.573.083-.873.41-.3.327-1.143 1.117-1.143 2.723s1.17 3.16 1.333 3.377c.163.217 2.277 3.647 5.62 4.967 2.78 1.1 3.343.883 3.947.827.603-.057 1.943-.793 2.217-1.56.273-.767.273-1.423.19-1.56-.08-.137-.3-.22-.63-.383-.33-.163-1.943-.957-2.243-1.067-.3-.11-.52-.163-.74.163-.22.327-.853 1.067-.953 1.147-.1.083-.183.093-.35.017-.167-.077-1.547-.57-2.947-1.82-1.09-.973-1.827-2.173-2.04-2.54-.213-.367-.023-.565.16-.748.163-.163.363-.423.543-.633.177-.21.237-.363.357-.607.12-.243.06-.457-.03-.637-.09-.18-.74-1.797-1.02-2.457-.27-.647-.547-.553-.74-.563-.192-.01-.413-.013-.633-.013z" />
          </svg>
        </span>
      </a>
    </>
  );
}
