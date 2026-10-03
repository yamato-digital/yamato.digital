import type { ReactNode } from "react";
import { CTA_LINKS, RADIOGRAFIA_LABEL, isExternalUrl, radiografiaHref } from "@/lib/cta";

const VARIANT_CLASSES = {
  link: "group inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight link-underline link-underline-hover",
  button:
    "group inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
} as const;

function externalProps(href: string) {
  return isExternalUrl(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

export function RadiografiaCta({
  location,
  variant = "link",
  microcopy,
  microcopyPosition = "after",
  microcopyClassName = "text-muted-ink",
  whatsapp = false,
  className = "",
}: {
  /** Sección de la página; llega a GTM como data-cta-location. */
  location: string;
  variant?: keyof typeof VARIANT_CLASSES;
  microcopy?: ReactNode;
  microcopyPosition?: "before" | "after";
  microcopyClassName?: string;
  /** Muestra "O escríbenos por WhatsApp" debajo. Solo en hero y cierre, para no competir con el CTA principal. */
  whatsapp?: boolean;
  className?: string;
}) {
  const href = radiografiaHref();
  const note = microcopy ? (
    <p className={`text-base leading-relaxed md:text-lg ${microcopyClassName}`}>{microcopy}</p>
  ) : null;

  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      {microcopyPosition === "before" ? note : null}
      <a
        href={href}
        data-cta="radiografia"
        data-cta-location={location}
        className={VARIANT_CLASSES[variant]}
        {...externalProps(href)}
      >
        {RADIOGRAFIA_LABEL}
        <span
          aria-hidden
          className="ml-2 inline-block transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </a>
      {microcopyPosition === "after" ? note : null}
      {whatsapp && CTA_LINKS.whatsappUrl ? (
        <a
          href={CTA_LINKS.whatsappUrl}
          data-cta="whatsapp"
          data-cta-location={location}
          className="text-sm link-underline link-underline-hover"
          {...externalProps(CTA_LINKS.whatsappUrl)}
        >
          O escríbenos por WhatsApp
        </a>
      ) : null}
    </div>
  );
}
