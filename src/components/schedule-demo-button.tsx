"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { CalendarDays, X } from "lucide-react";

const DEMO_URL = "https://calendly.com/reunionesfidel/30";

export default function ScheduleDemoButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-[18px] border-4 border-[#f3f3f3] bg-[#2b2b2b] px-6 py-2.5 text-base font-bold tracking-tighter text-white transition-all duration-700 hover:border-[#d4d4d4] hover:bg-[#383838] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b8c2b] md:w-auto md:border-[5px] md:px-7 md:py-3 md:text-[15px] md:tracking-normal"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          <CalendarDays aria-hidden="true" className="size-4 md:size-5" />
          Agendar reunión
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm" />
        <Dialog.Content
          data-lenis-prevent
          className="fixed left-1/2 top-1/2 z-[10001] flex h-[min(850px,calc(100dvh-32px))] w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl focus:outline-none md:w-[calc(100%-64px)] md:rounded-3xl"
        >
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[#eeeeee] px-4 py-3 md:px-6 md:py-4">
            <div>
              <Dialog.Title className="text-base font-bold text-[#252525] md:text-lg">
                Agendar reunión
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-xs text-[#5c5c5c] md:text-sm">
                Elegí un horario para tu demo con el equipo de Fidel.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Cerrar agenda"
                className="flex size-10 shrink-0 items-center justify-center rounded-full text-[#252525] transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b8c2b]"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </Dialog.Close>
          </div>
          <iframe
            src={`${DEMO_URL}?embed_type=Inline`}
            title="Agendar Demo Fidel en Calendly"
            className="min-h-0 w-full flex-1 border-0"
          />
          <div className="shrink-0 border-t border-[#eeeeee] px-4 py-3 text-center text-xs text-[#5c5c5c]">
            ¿No podés ver el calendario?{" "}
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#252525] underline underline-offset-2 hover:text-[#1b8c2b]"
            >
              Abrir en Calendly
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
