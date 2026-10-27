import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "dia-con-fidel-decoracion",
  title: "Un día en un local de decoración",
  description:
    "Mirá cómo Fidel conecta ventas, stock, consultas y catálogo online a lo largo de la jornada de un negocio de decoración.",
  image: "diade1.webp",
  imageAlt: "Una jornada de trabajo en una casa de decoración con Fidel",
});

export default function DiaConFidelDecoracionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
