import { Link } from "@tanstack/react-router";

const logoWhite = { url: "/assets/logo-yamato-white.png" };

const legalLinks = [
  { label: "Aviso legal", to: "/aviso-legal" },
  { label: "Privacidad", to: "/politica-privacidad" },
  { label: "Cookies", to: "/politica-cookies" },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="flex flex-col gap-10 px-6 sm:px-10 lg:px-20 xl:px-28 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <img src={logoWhite.url} alt="YAMATO" className="h-10 w-auto" />
          <p className="mt-3 text-sm text-paper/60">
            Tu Fractional CMO ·&nbsp;Desde Madrid para el mundo entero
          </p>
        </div>
        <div className="grid gap-2 text-sm text-paper/70 md:text-right">
          <a href="mailto:hola@yamato.digital" className="link-underline link-underline-hover">
            hola@yamato.digital
          </a>
          <a
            href="https://www.linkedin.com/company/yamatodigital/"
            className="link-underline link-underline-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <p className="mt-6 text-paper/40">© {new Date().getFullYear()} YAMATO</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-paper/40 md:justify-end">
            {legalLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="link-underline link-underline-hover hover:text-paper/70">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
