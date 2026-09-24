import type { Metadata } from "next";
import LegalDocumentPage from "@/components/legal-document-page";
import { cookiesPolicy } from "@/content/legal-pages";

export const metadata: Metadata = {
  title: "Cookies y Seguimiento | Fidel",
  description:
    "Información sobre Meta Pixel, las cookies y las herramientas de medición del sitio de Fidel.",
};

export default function CookiesPolicyPage() {
  return <LegalDocumentPage document={cookiesPolicy} />;
}
