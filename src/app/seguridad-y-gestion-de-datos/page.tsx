import type { Metadata } from "next";
import LegalDocumentPage from "@/components/legal-document-page";
import { dataSecurity } from "@/content/legal-pages";

export const metadata: Metadata = {
  title: "Seguridad y Gestión de Datos | Fidel",
  description:
    "Cómo Fidel protege, respalda, exporta y elimina la información del servicio.",
};

export default function DataSecurityPage() {
  return <LegalDocumentPage document={dataSecurity} />;
}
