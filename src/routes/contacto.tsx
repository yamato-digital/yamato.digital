import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CONTACT_BOOKING_LABEL, CTA_LINKS } from "@/lib/cta";

/*
 * TODO(Ignacio): en el formulario de reserva, sustituir las opciones de disciplinas por situaciones:
 * "Tenemos equipo, pero falta dirección" / "Necesitamos dirección y manos" /
 * "Tenemos un lanzamiento o un reto concreto" / "No sabemos por dónde empezar".
 * Hoy la reserva va a Calendly (CTA_LINKS.bookingUrl), no a Tally: sería una pregunta obligatoria del evento.
 */

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Fractional CMO independiente | YAMATO" },
      {
        name: "description",
        content: "Hablemos. YAMATO es tu dirección de marketing independiente. Reserva, WhatsApp, email y LinkedIn.",
      },
      { property: "og:title", content: "Contacto | Fractional CMO independiente | YAMATO" },
      {
        property: "og:description",
        content: "Hablemos. YAMATO es tu dirección de marketing independiente.",
      },
      { property: "og:url", content: "https://yamato.digital/contacto" },
    ],
    links: [{ rel: "canonical", href: "https://yamato.digital/contacto" }],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 sm:px-10">
        <h1 className="select-none font-serif text-[clamp(5rem,20vw,18rem)] leading-[0.85] tracking-[-0.02em] text-hairline text-center">
          Contacto
        </h1>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-lg font-medium md:gap-10 md:text-xl">
          <a
            href={CTA_LINKS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline link-underline-hover"
          >
            {CONTACT_BOOKING_LABEL}
          </a>
          <a
            href={CTA_LINKS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline link-underline-hover"
          >
            WhatsApp.
          </a>
          <a href="mailto:hola@yamato.digital" className="link-underline link-underline-hover">
            Email.
          </a>
          <a
            href="https://www.linkedin.com/company/yamatodigital/"
            className="link-underline link-underline-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn.
          </a>
        </div>
        <p className="mt-8 max-w-xl text-center text-base leading-relaxed text-muted-ink md:text-lg">
          Te responde Ignacio. En la llamada vemos tu situación y te decimos qué haríamos primero.
        </p>
      </main>
      <Footer />
    </div>
  );
}
