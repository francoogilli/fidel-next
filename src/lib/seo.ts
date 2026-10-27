import type { Metadata } from "next";

export const FIDEL_SITE_ROOT = new URL("https://fidel.com.ar/fidel/");

const SOCIAL_IMAGE = new URL("hero-poster.webp", FIDEL_SITE_ROOT).toString();

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({
  path,
  title,
  description,
  image,
  imageAlt = "Panel de gestión de Fidel",
}: PageMetadataInput): Metadata {
  const canonical = path
    ? new URL(path.replace(/^\/+/, ""), FIDEL_SITE_ROOT).toString()
    : FIDEL_SITE_ROOT.toString();
  const pageTitle = `${title} | Fidel`;
  const socialImage = image
    ? new URL(image.replace(/^\/+/, ""), FIDEL_SITE_ROOT).toString()
    : SOCIAL_IMAGE;

  return {
    title: pageTitle,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName: "Fidel",
      title: pageTitle,
      description,
      url: canonical,
      images: [{ url: socialImage, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [socialImage],
    },
  };
}
