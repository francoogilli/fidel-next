import type { Metadata } from "next";
import LegalDocumentPage from "@/components/legal-document-page";
import { serviceTerms } from "@/content/legal-pages";

export const metadata: Metadata = {
  title: "Términos del Servicio | Fidel",
  description:
    "Condiciones generales de contratación, uso y baja del servicio Fidel.",
};

export default function ServiceTermsPage() {
  return <LegalDocumentPage document={serviceTerms} />;
}
