import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "distribuidoras",
  title: "Sistema de gestión para distribuidoras",
  description:
    "Tomá pedidos, organizá preventistas y gestioná stock, clientes y cobranzas con Fidel para distribuidoras.",
  image: "distribuidoras.webp",
  imageAlt: "Sistema de gestión Fidel para distribuidoras",
});

export default function DistribuidorasLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
