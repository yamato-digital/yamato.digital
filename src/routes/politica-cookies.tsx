import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LEGAL, LegalPage, legalHead } from "@/components/LegalPage";

/** ID del dominio en Cookiebot (Implementación). El banner se carga desde GTM. */
const COOKIEBOT_CBID = "4accb2a9-0017-4204-acf6-debc977fb6d6";

declare global {
  interface Window {
    Cookiebot?: { renew: () => void };
  }
}

export const Route = createFileRoute("/politica-cookies")({
  head: () =>
    legalHead(
      "/politica-cookies",
      "Política de cookies | YAMATO",
      "Qué cookies usa yamato.digital, para qué sirven y cómo cambiar tu consentimiento.",
    ),
  component: PoliticaCookiesPage,
});

/**
 * Declaración de cookies de Cookiebot: pinta la tabla actualizada tras cada escaneo.
 * Se inyecta en cliente porque cd.js se renderiza junto a su propia etiqueta <script>.
 */
function CookieDeclaration() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src = `https://consent.cookiebot.com/${COOKIEBOT_CBID}/cd.js`;
    script.type = "text/javascript";
    script.async = true;
    container.appendChild(script);
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={ref} className="cookie-declaration" />;
}

function PoliticaCookiesPage() {
  return (
    <LegalPage title="Política de cookies">
      <p>
        En cumplimiento del artículo 22.2 de la Ley 34/2002 (LSSI-CE), te explicamos qué cookies
        utiliza {LEGAL.web}, para qué sirven y cómo puedes aceptarlas, rechazarlas o cambiar de
        opinión.
      </p>

      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar
        información sobre tu visita. Algunas son imprescindibles para que la web funcione y otras
        sirven, por ejemplo, para medir cuántas personas la visitan.
      </p>

      <h2>2. Qué cookies usamos</h2>
      <ul>
        <li>
          <strong>Necesarias</strong>: permiten que el sitio web funcione y guardan tu elección
          sobre las cookies. No requieren consentimiento.
        </li>
        <li>
          <strong>Estadísticas</strong>: nos ayudan a entender cómo se usa el sitio web (páginas
          visitadas, origen de las visitas) para mejorarlo. Solo se activan si las aceptas.
        </li>
        <li>
          <strong>Marketing</strong>: permiten medir campañas y mostrar publicidad relevante en
          otras plataformas. Solo se activan si las aceptas.
        </li>
      </ul>
      <p>
        Además, usamos Vercel Analytics, una herramienta de medición que no instala cookies ni
        identifica a los usuarios.
      </p>

      <h2>3. Listado de cookies</h2>
      <p>
        Esta tabla la genera automáticamente nuestra plataforma de gestión del consentimiento
        (Cookiebot) a partir del análisis periódico del sitio web, así que refleja las cookies que
        hay en cada momento, con su proveedor, finalidad y duración. Desde aquí también puedes
        cambiar o retirar tu consentimiento.
      </p>
      <CookieDeclaration />

      <h2>4. Cómo cambiar tu consentimiento</h2>
      <p>
        Puedes cambiar tu elección en cualquier momento desde el panel de cookies:
      </p>
      <p>
        <button
          type="button"
          onClick={() => window.Cookiebot?.renew()}
          className="link-underline link-underline-hover font-medium"
        >
          Configurar cookies
        </button>
      </p>
      <p>
        También puedes bloquear o borrar las cookies desde la configuración de tu navegador:{" "}
        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
          Chrome
        </a>
        ,{" "}
        <a
          href="https://support.mozilla.org/es/kb/Borrar%20cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Firefox
        </a>
        ,{" "}
        <a
          href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
          target="_blank"
          rel="noopener noreferrer"
        >
          Safari
        </a>{" "}
        y{" "}
        <a
          href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edge
        </a>
        . Si bloqueas las cookies necesarias, es posible que algunas partes del sitio web no
        funcionen correctamente.
      </p>

      <h2>5. Más información</h2>
      <p>
        Para saber cómo tratamos los datos personales que se recogen a través de las cookies,
        consulta la <Link to="/politica-privacidad">política de privacidad</Link>. Si tienes
        dudas, escríbenos a <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
      </p>
    </LegalPage>
  );
}
