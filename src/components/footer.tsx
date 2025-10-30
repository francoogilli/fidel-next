"use client";

import Instagram from "@/icons/instagram";
import Whatsapp from "@/icons/whatsapp";
import Link from "next/link";

export default function Footer() {
  const handleScrollToPlanes = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("planes");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    const handleScrollToFuncionalidades = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("funcionalidades");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="w-full p-8">
      <div className="mx-auto max-w-[88.5rem] rounded-[30px] bg-[#f6f6f6] border border-[#e6eee6] px-12 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-3.5">
            <div className="flex items-center space-x-2">
              <img
                src="/fidel/fidel1.svg"
                className="w-12"
                draggable="false"
                alt="Logo Fidel"
              />
              <h3 className="text-xl font-bold font-sans tracking-wide">
                Fidel
              </h3>
            </div>
            <p className="text-sm text-[#101010]">
              Optimiza la gestión de tu empresa y simplifica tu día a día.
            </p>
            <p className="text-sm text-[#101010] flex gap-x-1.5 items-center">
              © {new Date().getFullYear()}. Un producto de{" "}
              <a
                href="https://www.instagram.com/trizapsoftware/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#252525] font-medium duration-200"
              >
                <img
                  src="https://trizap.net/images/headerDark2.png"
                  className="w-14"
                  draggable="false"
                  alt=""
                />
              </a>
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/fidelsistema"
                target="_blank"
                className="text-[#272727] mt-0.5 hover:text-zinc-900"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              <div
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=543564222935&text=" +
                      encodeURIComponent(
                        "¡Hola! Estoy viendo la web de Fidel y me gustaría acceder a una cuenta de prueba para conocer mejor el sistema."
                      ),
                    "_blank"
                  )
                }
                className="cursor-pointer text-[#272727] hover:text-zinc-900"
              >
                <Whatsapp className="mb-0.5 size-7" />
                <span className="sr-only">WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Recursos */}
          <div className="space-y-4 md:col-start-4">
            <h3 className="text-lg font-medium">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <span
                  onClick={handleScrollToFuncionalidades}
                  className="cursor-pointer text-sm text-gray-600 hover:text-gray-900"
                >
                  Funcionalidades
                </span>
              </li>
              <li>
                <span
                  onClick={handleScrollToPlanes}
                  className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Planes
                </span>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
