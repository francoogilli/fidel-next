import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "planes",
  title: "Planes y precios",
  description:
    "Compará los planes de Fidel para gestionar ventas, stock, compras y facturación electrónica en tu comercio.",
});

export default function PlanesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
