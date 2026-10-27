import LegalDocumentPage from "@/components/legal-document-page";
import { privacyPolicy } from "@/content/legal-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "politica-de-privacidad",
  title: "Política de privacidad",
  description:
    "Conocé qué datos personales recopila Fidel, para qué los usa y cómo ejercer tus derechos.",
});

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage document={privacyPolicy} />;
}
