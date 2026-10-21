import type { Metadata } from "next";
import LegalDocumentPage from "@/components/legal-document-page";
import { serviceTerms } from "@/content/legal-pages";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Servicio | Fidel",
  description:
    "Condiciones de acceso, contratación, uso, pagos, soporte y baja del servicio Fidel.",
};

export default function ServiceTermsPage() {
  return <LegalDocumentPage document={serviceTerms} />;
}
