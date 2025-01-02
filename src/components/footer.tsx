"use client";

import { socialLinks, appLinks, footerLinks } from "../data/data";
import Download from "../icons/download";

export default function Footer() {
  return (
    <footer className="bg-[#191919] max-w-8xl mt-10 md:mt-20 text-white p-4">
      <div className="flex flex-col lg:flex-row justify-between px-3 max-w-7xl mx-auto pb-6 lg:pb-2 pt-7 md:pt-0">
        <div className="flex mx-auto md:mx-0 flex-col items-center md:items-start max-w-72">
          <div className="flex justify-start items-center space-x-4">
            <img src="/fidel1.svg" width={80} alt="Fidel Logo" />
            <p className="text-3xl font-medium">Fidel</p>
          </div>
          <p className="text-[#a9a9a9] text-sm md:text-base font-medium pt-5">
            Organiza y gestiona tu empresa con Fidel: Impulsando tu éxito en
            cada paso.
          </p>
          <div className="flex justify-start items-center space-x-3 pt-6 pb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="bg-[#262626] rounded-xl p-2.5 hover:-translate-y-1 duration-200"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-x-44 pt-10 gap-y-7 md:pb-0 pb-7">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-base text-[#999999] font-normal pb-3.5">
                {section.title}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#797979] hover:text-[#ececec] duration-500 font-normal"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center border border-[#3a3a3a] rounded-2xl px-6 pt-4 mt-6 h-full pb-6">
          <p className="text-xs md:text-base font-medium flex justify-center items-center gap-x-2 pb-4">
            Descargar ahora <Download />
          </p>
          <div className="flex flex-col justify-center w-full space-y-3">
            {appLinks.map((appLink, index) => (
              <a
                key={index}
                href={appLink.href}
                target="_blank"
                className="flex justify-center items-center space-x-3 bg-[#262626] hover:bg-[#373737] border border-[#333333] py-3.5 px-10 rounded-xl"
              >
                <appLink.icon className="size-7 fill-white" />
                <div className="flex flex-col items-start">
                  <h3 className="text-xs font-medium text-[#999999]">
                    Descargar en
                  </h3>
                  <p className="text-sm md:text-base font-medium">
                    {appLink.platform}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="px-2 md:px-24">
        <hr className="border border-[#242424]" />
        <div className="flex justify-center items-center space-y-3.5 pt-3.5 xl:pt-7 xl:pb-2 text-sm xl:text-base text-[#7d7d7d]">
          <p>© {new Date().getFullYear()} Fidel. Un producto de Trizap</p>
        </div>
      </div>
    </footer>
  );
}
