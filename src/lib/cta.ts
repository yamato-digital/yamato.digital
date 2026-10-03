// TODO(Ignacio): URL de agenda directa (Cal.com o Calendly) y enlace de WhatsApp (formato https://wa.me/34XXXXXXXXX).
// Mientras bookingUrl esté vacío, el CTA principal apunta a /contacto. El enlace de WhatsApp solo se pinta si existe.
export const CTA_LINKS = {
  bookingUrl: "",
  whatsappUrl: "",
  fallback: "/contacto",
} as const;

export const RADIOGRAFIA_LABEL = "Pide tu Radiografía gratis";

export function radiografiaHref(): string {
  return CTA_LINKS.bookingUrl || CTA_LINKS.fallback;
}

export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//.test(href);
}
