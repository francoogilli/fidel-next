import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "contacto",
  title: "Contacto",
  description:
    "Hablá con el equipo de Fidel para pedir una demostración o consultar cómo organizar las ventas, el stock y la facturación de tu negocio.",
});

export default function ContactoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
