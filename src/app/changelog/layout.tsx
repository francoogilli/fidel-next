import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "changelog",
  title: "Novedades y actualizaciones",
  description:
    "Consultá las nuevas funciones, mejoras y cambios incorporados al sistema de gestión para comercios Fidel.",
});

export default function ChangelogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
