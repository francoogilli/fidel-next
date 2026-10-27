import LegalDocumentPage from "@/components/legal-document-page";
import { cookiesPolicy } from "@/content/legal-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "cookies-y-seguimiento",
  title: "Cookies y seguimiento",
  description:
    "Información sobre Meta Pixel, las cookies y las herramientas de medición del sitio de Fidel.",
});

export default function CookiesPolicyPage() {
  return <LegalDocumentPage document={cookiesPolicy} />;
}
