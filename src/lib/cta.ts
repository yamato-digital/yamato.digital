export const CTA_LINKS = {
  bookingUrl: "https://calendly.com/ignacio-yamato/30min",
  whatsappUrl: "https://wa.me/34696977968",
  fallback: "/contacto",
} as const;

export const RADIOGRAFIA_LABEL = "Pide tu Radiografía gratis";

export function radiografiaHref(): string {
  return CTA_LINKS.bookingUrl || CTA_LINKS.fallback;
}

export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//.test(href);
}
