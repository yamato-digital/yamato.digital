import { createFileRoute, Link } from "@tanstack/react-router";
import { LEGAL, LegalPage, legalHead } from "@/components/LegalPage";

export const Route = createFileRoute("/politica-privacidad")({
  head: () =>
    legalHead(
      "/politica-privacidad",
      "Política de privacidad | YAMATO",
      "Qué datos personales trata YAMATO, para qué, durante cuánto tiempo y cómo ejercer tus derechos.",
    ),
  component: PoliticaPrivacidadPage,
});

function PoliticaPrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad">
      <p>
        Esta política explica cómo trata YAMATO los datos personales de quienes visitan{" "}
        {LEGAL.web} o contactan con nosotros, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley
        Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales
        (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Responsable:</strong> {LEGAL.razonSocial}
        </li>
        <li>
          <strong>NIF:</strong> {LEGAL.nif}
        </li>
        <li>
          <strong>Domicilio:</strong> {LEGAL.domicilio}
        </li>
        <li>
          <strong>Contacto para temas de privacidad:</strong>{" "}
          <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
        </li>
      </ul>

      <h2>2. Qué datos tratamos y para qué</h2>
      <p>
        Este sitio web no tiene formularios propios ni área de usuario. Solo tratamos los datos que
        nos facilitas cuando contactas con nosotros por alguno de estos canales, además de los datos
        de navegación que recogen las cookies que aceptes.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Canal</th>
              <th>Datos</th>
              <th>Finalidad</th>
              <th>Base legal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email y WhatsApp</td>
              <td>Nombre, email o teléfono y el contenido de tu mensaje</td>
              <td>Responder a tu consulta</td>
              <td>Tu consentimiento al escribirnos y la aplicación de medidas precontractuales</td>
            </tr>
            <tr>
              <td>Reserva de llamada (Calendly)</td>
              <td>Nombre, email, empresa y la información que añadas al reservar</td>
              <td>Gestionar la reunión y preparar la propuesta</td>
              <td>Medidas precontractuales a petición tuya (art. 6.1.b RGPD)</td>
            </tr>
            <tr>
              <td>Formulario de partners (Tally)</td>
              <td>Nombre, email, perfil profesional y los datos que indiques</td>
              <td>Valorar tu incorporación a la red de colaboradores</td>
              <td>Medidas precontractuales a petición tuya (art. 6.1.b RGPD)</td>
            </tr>
            <tr>
              <td>Clientes y proveedores</td>
              <td>Datos de contacto y de facturación</td>
              <td>Prestar el servicio, facturar y cumplir obligaciones fiscales y contables</td>
              <td>Ejecución del contrato y obligación legal (art. 6.1.b y 6.1.c RGPD)</td>
            </tr>
            <tr>
              <td>Navegación por el sitio web</td>
              <td>Datos de uso y del dispositivo recogidos mediante cookies analíticas</td>
              <td>Medir y mejorar el sitio web</td>
              <td>Tu consentimiento (art. 6.1.a RGPD), que puedes retirar cuando quieras</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        No tomamos decisiones automatizadas ni elaboramos perfiles con efectos jurídicos sobre ti, y
        no usamos tus datos para fines distintos de los indicados.
      </p>

      <h2>3. Cuánto tiempo conservamos tus datos</h2>
      <ul>
        <li>
          <strong>Consultas y reservas que no acaban en contratación:</strong> el tiempo necesario
          para atenderlas y, como máximo, un año desde el último contacto.
        </li>
        <li>
          <strong>Clientes y proveedores:</strong> mientras dure la relación y, después, durante
          los plazos legales (seis años para la documentación mercantil, según el Código de
          Comercio, y cuatro años a efectos fiscales).
        </li>
        <li>
          <strong>Datos de navegación:</strong> según la duración de cada cookie, indicada en la{" "}
          <Link to="/politica-cookies">política de cookies</Link>.
        </li>
      </ul>

      <h2>4. Con quién compartimos tus datos</h2>
      <p>
        No vendemos ni cedemos tus datos a terceros, salvo obligación legal (por ejemplo, a la
        Agencia Tributaria). Sí trabajamos con proveedores que tratan datos por cuenta nuestra
        (encargados del tratamiento), con contratos que garantizan su protección:
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong>: alojamiento del sitio web y analítica sin cookies (EE. UU.).
        </li>
        <li>
          <strong>Google LLC</strong>: Google Tag Manager, analítica web y correo electrónico
          (EE. UU.).
        </li>
        <li>
          <strong>Calendly LLC</strong>: reserva de reuniones (EE. UU.).
        </li>
        <li>
          <strong>Tally BV</strong>: formularios (Bélgica, UE).
        </li>
        <li>
          <strong>Usercentrics A/S (Cookiebot)</strong>: gestión del consentimiento de cookies
          (Dinamarca, UE).
        </li>
        <li>
          <strong>WhatsApp Ireland Ltd. (Meta)</strong>: mensajería, si eliges este canal.
        </li>
      </ul>
      <p>
        Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En esos
        casos, la transferencia se ampara en el Marco de Privacidad de Datos UE-EE. UU. (Data Privacy
        Framework), en el que están certificados, o en las cláusulas contractuales tipo aprobadas por
        la Comisión Europea.
      </p>

      <h2>5. Tus derechos</h2>
      <p>Puedes ejercer en cualquier momento estos derechos sobre tus datos:</p>
      <ul>
        <li>
          <strong>Acceso</strong>: saber qué datos tuyos tratamos.
        </li>
        <li>
          <strong>Rectificación</strong>: corregir los datos inexactos.
        </li>
        <li>
          <strong>Supresión</strong>: pedir que los borremos.
        </li>
        <li>
          <strong>Oposición y limitación</strong>: oponerte al tratamiento o pedir que lo
          restrinjamos.
        </li>
        <li>
          <strong>Portabilidad</strong>: recibir tus datos en un formato estructurado.
        </li>
        <li>
          <strong>Retirar tu consentimiento</strong>, sin que afecte a los tratamientos anteriores.
        </li>
      </ul>
      <p>
        Escríbenos a <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> indicando qué derecho
        quieres ejercer. Te responderemos en el plazo máximo de un mes. Si no estás conforme con
        nuestra respuesta, puedes presentar una reclamación ante la Agencia Española de Protección
        de Datos (<a href="https://www.aepd.es">www.aepd.es</a>).
      </p>

      <h2>6. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a
        pérdidas, accesos no autorizados o usos indebidos, de acuerdo con el riesgo del tratamiento.
      </p>

      <h2>7. Menores de edad</h2>
      <p>
        Nuestros servicios se dirigen a empresas y profesionales. No tratamos conscientemente datos
        de menores de 14 años.
      </p>

      <h2>8. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para adaptarla a cambios legales o en nuestros servicios.
        La versión vigente es la publicada en esta página, con la fecha de su última actualización.
      </p>
    </LegalPage>
  );
}
