import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "dia-con-fidel-ferreterias",
  title: "Un día en una ferretería",
  description:
    "Recorré una jornada de ferretería y descubrí cómo Fidel ayuda con caja, precios, stock, pedidos y reposición.",
  image: "diaf1.webp",
  imageAlt: "Una jornada de trabajo en una ferretería con Fidel",
});

export default function DiaConFidelFerreteriasLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
