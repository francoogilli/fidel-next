import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "casas-de-repuestos",
  title: "Sistema de gestión para casas de repuestos",
  description:
    "Ordená listas de precios, inventario, proveedores y compras en tu casa de repuestos. Gestioná productos y ventas desde Fidel.",
  image: "repuestos.webp",
  imageAlt: "Sistema Fidel para gestionar una casa de repuestos",
});

export default function CasasDeRepuestosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
