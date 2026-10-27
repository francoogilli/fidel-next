import LegalDocumentPage from "@/components/legal-document-page";
import { serviceTerms } from "@/content/legal-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "terminos-del-servicio",
  title: "Términos y condiciones del servicio",
  description:
    "Condiciones de acceso, contratación, uso, pagos, soporte y baja del servicio Fidel.",
});

export default function ServiceTermsPage() {
  return <LegalDocumentPage document={serviceTerms} />;
}
