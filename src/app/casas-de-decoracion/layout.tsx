import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "casas-de-decoracion",
  title: "Sistema de gestión para casas de decoración",
  description:
    "Gestioná ventas, stock y catálogos visuales para tu casa de decoración. Conectá el local, WhatsApp y tu tienda online desde Fidel.",
  image: "deco.webp",
  imageAlt: "Gestión de productos y ventas para casas de decoración en Fidel",
});

export default function CasasDeDecoracionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
