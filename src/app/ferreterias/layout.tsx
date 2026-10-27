import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "ferreterias",
  title: "Sistema de gestión para ferreterías",
  description:
    "Controlá stock, precios, proveedores y ventas de tu ferretería con Fidel. Importá listas desde Excel y organizá las compras.",
  image: "ferreterias1.webp",
  imageAlt: "Sistema de gestión Fidel para ferreterías",
});

export default function FerreteriasLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
