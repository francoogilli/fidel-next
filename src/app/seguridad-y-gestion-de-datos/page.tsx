import LegalDocumentPage from "@/components/legal-document-page";
import { dataSecurity } from "@/content/legal-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "seguridad-y-gestion-de-datos",
  title: "Seguridad y gestión de datos",
  description:
    "Cómo Fidel protege, respalda, exporta y elimina la información del servicio.",
});

export default function DataSecurityPage() {
  return <LegalDocumentPage document={dataSecurity} />;
}
