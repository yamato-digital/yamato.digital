import { createFileRoute, Link } from "@tanstack/react-router";
import { LEGAL, LegalPage, legalHead } from "@/components/LegalPage";

export const Route = createFileRoute("/aviso-legal")({
  head: () =>
    legalHead(
      "/aviso-legal",
      "Aviso legal | YAMATO",
      "Datos del titular de yamato.digital y condiciones de uso del sitio web.",
    ),
  component: AvisoLegalPage,
});

function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal">
      <h2>1. Titular del sitio web</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y de Comercio Electrónico (LSSI-CE), estos son los datos del
        titular de {LEGAL.web}:
      </p>
      <ul>
        <li>
          <strong>Titular:</strong> {LEGAL.razonSocial}
        </li>
        <li>
          <strong>NIF:</strong> {LEGAL.nif}
        </li>
        <li>
          <strong>Domicilio:</strong> {LEGAL.domicilio}
        </li>
        <li>
          <strong>Datos registrales:</strong> {LEGAL.registro}
        </li>
        <li>
          <strong>Email:</strong> <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
        </li>
        <li>
          <strong>Actividad:</strong> dirección de marketing externa (Fractional CMO), consultoría
          de marketing y servicios de publicidad.
        </li>
      </ul>

      <h2>2. Objeto y condiciones de uso</h2>
      <p>
        Este aviso legal regula el acceso y el uso de {LEGAL.web} (en adelante, «el sitio web»).
        Acceder al sitio web te atribuye la condición de usuario e implica que aceptas estas
        condiciones. Si no estás de acuerdo, no utilices el sitio web.
      </p>
      <p>
        Te comprometes a usar el sitio web y sus contenidos de forma lícita, sin dañar los
        derechos de YAMATO ni de terceros, y sin introducir virus ni cualquier otro elemento que
        pueda dañar o impedir su funcionamiento.
      </p>

      <h2>3. Propiedad intelectual e industrial</h2>
      <p>
        Los textos, imágenes, logotipos, marcas, diseño y código del sitio web son propiedad de
        YAMATO o de terceros que han autorizado su uso. Quedan prohibidas su reproducción,
        distribución, comunicación pública y transformación sin autorización expresa, salvo para
        uso personal y privado, o para citar fragmentos con mención de la fuente y enlace al
        original.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        YAMATO procura que la información publicada sea correcta y esté actualizada, pero no
        garantiza la ausencia de errores ni que el sitio web esté disponible en todo momento. Los
        contenidos del blog son de carácter divulgativo y no sustituyen el asesoramiento
        profesional adaptado a cada caso.
      </p>
      <p>
        YAMATO no se responsabiliza de los daños que puedan derivarse del uso del sitio web ni de
        interrupciones causadas por terceros o por causas ajenas a su control.
      </p>

      <h2>5. Enlaces a otros sitios</h2>
      <p>
        El sitio web incluye enlaces a sitios de terceros (por ejemplo, Calendly, Tally,
        WhatsApp, LinkedIn o Instagram). YAMATO no controla esos sitios y no es responsable de sus
        contenidos ni de sus políticas de privacidad.
      </p>

      <h2>6. Protección de datos y cookies</h2>
      <p>
        El tratamiento de tus datos personales se explica en la{" "}
        <Link to="/politica-privacidad">política de privacidad</Link>, y el uso de cookies, en la{" "}
        <Link to="/politica-cookies">política de cookies</Link>.
      </p>

      <h2>7. Legislación aplicable y jurisdicción</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier controversia, las
        partes se someten a los juzgados y tribunales de Madrid capital, salvo que la normativa
        aplicable establezca otro fuero (por ejemplo, el del domicilio del consumidor).
      </p>

      <h2>8. Cambios</h2>
      <p>
        YAMATO puede modificar este aviso legal para adaptarlo a cambios legales o del sitio web.
        La versión vigente es la publicada en esta página, con la fecha de su última
        actualización.
      </p>
    </LegalPage>
  );
}
