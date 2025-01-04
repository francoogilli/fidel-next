"use client";

import Link from "next/link";
import ArrowUpIcon from "@/icons/arrow-up";

export default function Footer() {
  return (
    <footer className="relative bg-[#131313] z-10 overflow-hidden border-t border-[#6f6f6f] ">
      <Blur />
      <div className="relative mx-auto w-full max-w-7xl xl:max-w-[90rem] px-8 py-14 md:px-3">
        <div className="flex gap-10 max-md:flex-col md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex justify-start items-center gap-2">
              <svg
                viewBox="0 0 1788 1788"
                width="60"
                height="60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1179 521h13l38 2 28 4 37 8 30 9 22 8 17 7 30 15 27 16 20 14 14 11 13 11 11 9 26 26 7 8 12 13 12 16 11 15 17 26 15 27 10 22 9 23 9 29 9 40 5 35 2 24v56l-2 23-3 9-2 2-8 1h-218l-33-1-2 35-4 26-7 25-10 23-7 13-10 15-9 11-12 14-13 12-14 11-14 9-22 12-20 8-18 5-19 4-28 3h-9l-3-3-1-4-1-190V568l1-43 6-2 8-1z"
                  fill="#ececec"
                />
                <path
                  d="m937 535 3 1-8 7-12 9-13 10-10 9-8 7-12 11-11 12-9 11-11 13-9 12-13 18-13 20-14 25-11 22-11 25-8 23-8 27-7 32-3 18-3 39v47l3 36 4 28 8 31 8 26 9 24 10 23 10 19 13 22 12 19 12 17 12 15 9 11 9 9 7 8 9 9 8 7 10 9 5 7-1 2h-33l-63-3-53-5-42-6-45-9-48-12-41-12-24-8-6-3 1-5 9-10 2-3h2l2-4 8-8 7-8 3-4h2l2-4 13-14 1-2h2l2-4 16-16 7-8 15-16 7-8 14-15 8-9 2-4-15-2-30-2-35-5-40-9-35-10-41-14-31-13-37-16-39-20-23-13-29-17-21-13-32-21-15-10-17-12-19-14-21-16-13-10-13-11-14-12-10-8-7-7 1-4 19-7 40-13 27-9 35-11 41-14 95-31 23-7 31-10 64-21 36-12 70-23 34-11 41-13 43-14 40-13 115-37 27-10z"
                  fill="#ececec"
                />
                <path
                  d="m1147 1027 37 1 17 1h117l38 1v13l-1 21-4 26-7 25-10 23-7 13-10 15-9 11-12 14-13 12-14 11-14 9-22 12-20 8-18 5-19 4-16 2h-20l-3-3v-220l3-3z"
                  fill="#ececec"
                />
                <path
                  d="m979 706 17 1 15 4 16 7 10 7 12 11 9 13 6 14 4 16 1 8v20l-3 14-7 16-10 14-4 5h-2l-1 3-13 10-16 8-11 3-15 2h-13l-15-2-12-4-16-8-13-11-9-11-8-14-6-16-2-15v-14l2-15 5-14 7-12 8-10 10-10 10-7 16-8 17-4z"
                  fill="#ececec"
                />
              </svg>
              <p className="text-[27px] font-sans text-[#ececec] font-bold">
                Fidel
              </p>
            </div>
            <p className="font-sans text-[15px] font-medium text-[#B5B3AD]">
              Organiza tu empresa. Simplifica tu vida.
            </p>
            <span className="font-sans text-[15px] font-medium text-[#B5B3AD]">
              © 2025. Un producto de{" "}
              <a
                href="https://www.instagram.com/trizapsoftware/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 duration-200"
              >
                Trizap
              </a>
            </span>
            <div className="flex justify-start items-center gap-4">
              <Button
                name={"Instagram"}
                url={"https://www.instagram.com/fidelsistema"}
              />
              <Button
                name={"Whatsapp"}
                url={"https://api.whatsapp.com/send?phone=543564222935"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-[15px]">
            <Link
              href="/ui"
              className="text-[#B5B3AD] duration-200 hover:text-[#dad7d0]"
            >
              Inicio
            </Link>
            <a
              href="/funcionalidades"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-[#B5B3AD] duration-200 hover:text-[#dad7d0]"
            >
              Funcionalidades
              <ArrowUpIcon className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/planes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-[#B5B3AD] duration-200 hover:text-[#dad7d0]"
            >
              Planes
              <ArrowUpIcon className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/contacto"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-[#B5B3AD] duration-200 hover:text-[#dad7d0]"
            >
              Contacto
              <ArrowUpIcon className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Button({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={` 
        relative flex justify-center items-center cursor-pointer gap-x-2 w-fit rounded-full mt-2 font-[460] text-[#ececec]
        bg-[#161616] px-4 py-2 text-xs shadow-inner shadow-neutral-800/80 transition-all duration-200
        hover:bg-gradient-to-t hover:from-neutral-900/40 hover:to-neutral-800/60
      `}
    >
      {name}
      <ArrowUpIcon className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
function Blur() {
  return (
    <div
      aria-hidden="true"
      className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)",
      }}
    />
  );
}
