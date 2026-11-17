import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

/** Datos del titular. Fuente: Notion › ¿Qué es Yamato? › Sociedad. */
export const LEGAL = {
  razonSocial: "YAMATO DIGITAL, S.L. (Sociedad Unipersonal)",
  nif: "B70790803",
  domicilio: "Calle Galileo, 7, planta 1, puerta 14, 28015 Madrid (España)",
  registro:
    "Registro Mercantil de Madrid, tomo 46.363, folio 70, hoja M-814331, inscripción 1.ª",
  email: "hola@yamato.digital",
  web: "yamato.digital",
  actualizado: "17 de noviembre de 2026",
} as const;

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28">
        <article className="mx-auto max-w-2xl pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="text-xs uppercase tracking-[0.14em] text-muted-ink">
            Última actualización: {LEGAL.actualizado}
          </div>
          <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.01em]">
            {title}
          </h1>
          <div className="mt-12 space-y-6 text-base leading-relaxed text-ink md:text-lg [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:tracking-[-0.01em] md:[&_h2]:text-3xl [&_h3]:mt-8 [&_h3]:font-semibold [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_table]:w-full [&_table]:text-left [&_table]:text-sm [&_th]:border-b [&_th]:border-ink/20 [&_th]:py-2 [&_th]:pr-4 [&_th]:align-top [&_th]:font-semibold [&_td]:border-b [&_td]:border-ink/10 [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export function legalHead(path: string, title: string, description: string) {
  const url = `https://yamato.digital${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
