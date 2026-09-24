import type { Metadata } from "next";
import LegalDocumentPage from "@/components/legal-document-page";
import { privacyPolicy } from "@/content/legal-pages";

export const metadata: Metadata = {
  title: "Política de Privacidad | Fidel",
  description:
    "Conocé qué datos personales recopila Fidel, para qué los usa y cómo ejercer tus derechos.",
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage document={privacyPolicy} />;
}
