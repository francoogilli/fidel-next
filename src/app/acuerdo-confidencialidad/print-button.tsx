"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1d2921] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#35463a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5a9b4c] focus-visible:ring-offset-2"
    >
      <Printer aria-hidden="true" size={16} strokeWidth={1.8} />
      Imprimir o Guardar PDF
    </button>
  );
}
