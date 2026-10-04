export const CTA_LINKS = {
  bookingUrl: "https://calendly.com/ignacio-yamato/30min",
  /** "calendar" si bookingUrl abre una agenda; "form" si abre un formulario (Tally, etc.). Cambia los textos. */
  bookingType: "calendar" as "calendar" | "form",
  whatsappUrl: "https://wa.me/34696977968",
  fallback: "/contacto",
} as const;

const IS_FORM = CTA_LINKS.bookingType === "form";

export const RADIOGRAFIA_LABEL = "Quiero contactar";

export const CONTACT_BOOKING_LABEL = IS_FORM ? "Solicitar una primera conversación." : "Reservar llamada.";

export function radiografiaHref(): string {
  return CTA_LINKS.fallback;
}

export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//.test(href);
}
