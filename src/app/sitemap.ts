import type { MetadataRoute } from "next";
import { FIDEL_SITE_ROOT } from "@/lib/seo";

export const dynamic = "force-static";

const publicPaths = [
  "",
  "acuerdo-confidencialidad",
  "casas-de-decoracion",
  "casas-de-repuestos",
  "changelog",
  "contacto",
  "cookies-y-seguimiento",
  "dia-con-fidel-decoracion",
  "dia-con-fidel-distribuidoras",
  "dia-con-fidel-ferreterias",
  "dia-con-fidel-repuestos",
  "distribuidoras",
  "ferreterias",
  "integraciones-ecommerce",
  "pedidos-web",
  "planes",
  "politica-de-privacidad",
  "seguridad-y-gestion-de-datos",
  "terminos-del-servicio",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: path ? new URL(path, FIDEL_SITE_ROOT).toString() : FIDEL_SITE_ROOT.toString(),
  }));
}
