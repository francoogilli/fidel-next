import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "dia-con-fidel-distribuidoras",
  title: "Un día de trabajo en una distribuidora",
  description:
    "Conocé cómo una distribuidora puede organizar visitas, pedidos, clientes y cobranzas desde la app de Fidel.",
  image: "diadi1.webp",
  imageAlt: "Una jornada de trabajo en una distribuidora con Fidel",
});

export default function DiaConFidelDistribuidorasLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
