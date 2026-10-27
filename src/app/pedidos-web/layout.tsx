import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "pedidos-web",
  title: "Pedidos web para los clientes de tu comercio",
  description:
    "Ofrecé un catálogo online sincronizado con Fidel para que tus clientes consulten productos y envíen pedidos sin recargar datos.",
  image: "pedidos-web-hero-v2.webp",
  imageAlt: "Pedidos web sincronizados con el sistema Fidel",
});

export default function PedidosWebLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
