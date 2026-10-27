import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "dia-con-fidel-repuestos",
  title: "Un día en una casa de repuestos",
  description:
    "Descubrí cómo Fidel acompaña las tareas diarias de una casa de repuestos: actualizar precios, consultar stock, comprar y vender.",
  image: "dia-repuestos-01.webp",
  imageAlt: "Una jornada de trabajo en una casa de repuestos con Fidel",
});

export default function DiaConFidelRepuestosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
