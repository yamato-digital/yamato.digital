import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoBlack from "@/assets/logo-yamato-black.png";
import { CTA_LINKS } from "@/lib/cta";

const menuItems = [
  { label: "Fractional CMO", to: "/fractional-cmo" },
  { label: "Servicios", to: "/servicios" },
  { label: "Quiénes somos", to: "/quienes-somos" },
  { label: "Clientes", to: "/clientes" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/contacto" },
] as const;

const GUTTER = "px-6 sm:px-10 lg:px-16 xl:px-28";
const HOVER =
  "transition-colors duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:text-[#0000FF]";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur">
        <div className={`flex items-center gap-3 py-6 min-[30rem]:gap-4 ${GUTTER}`}>
          <Link to="/" className="min-w-0 shrink">
            <img
              src={logoBlack}
              alt="YAMATO"
              width={1907}
              height={296}
              className="h-auto max-h-8 w-auto max-w-full"
            />
          </Link>
          <div className="ml-auto flex shrink-0 items-center gap-5 sm:gap-8">
            <Link
              to="/contacto"
              activeProps={{ className: "font-semibold" }}
              className="hidden min-[30rem]:inline-flex items-center rounded-full border border-ink px-5 py-2 text-sm leading-none text-ink sm:px-6 sm:py-2.5 sm:text-base"
            >
              Contacto
            </Link>
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={isOpen}
              aria-controls="menu-principal"
              onClick={() => setIsOpen(true)}
              className="grid h-11 w-[45px] place-items-center text-ink"
            >
              <svg width="45" height="7" viewBox="0 0 45 7" aria-hidden="true">
                <path d="M0 0h45v1H0zM0 6h45v1H0z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isOpen ? (
        <div
          id="menu-principal"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          className={`fixed inset-0 z-50 grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)] overflow-y-auto bg-paper text-ink md:grid-cols-2 md:grid-rows-1 ${GUTTER}`}
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={close}
            className={`absolute top-6 right-6 grid h-11 w-[45px] place-items-center sm:right-10 lg:right-16 xl:right-28 ${HOVER}`}
          >
            <svg width="26" height="26" viewBox="0 0 32.527 32.527" aria-hidden="true">
              <path d="M0 31.819L31.82-.001l.707.707-31.82 31.82z" fill="currentColor" />
              <path d="M.708 0l31.82 31.82-.707.707L0 .707z" fill="currentColor" />
            </svg>
          </button>

          <div className="py-6 md:border-r md:border-ink md:pr-[34px]">
            <Link
              to="/"
              onClick={close}
              aria-label="YAMATO, inicio"
              className="flex h-11 w-max max-w-full items-center md:h-auto md:w-2/3 md:items-start md:pt-1.5"
            >
              <img
                src={logoBlack}
                alt="YAMATO"
                width={1907}
                height={296}
                className="block h-auto max-h-8 w-auto max-w-full md:max-h-none md:w-full"
              />
            </Link>
          </div>

          <div className="flex min-h-0 flex-col py-6 md:pl-[34px]">
            <nav
              aria-label="Principal"
              className="flex flex-1 flex-col items-start justify-center text-[44px] font-normal leading-none tracking-[-0.02em] md:py-10 md:text-[clamp(44px,4.17vw,90px)]"
            >
              {menuItems.map((item) => (
                <Link key={item.to} to={item.to} onClick={close} className="link-underline-reveal">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="w-full md:w-2/5 md:min-w-[280px]">
              <p className="mb-[15px] text-xs uppercase tracking-[0.01em]">
                Llamar es gratis (aún)
              </p>
              <a
                href={CTA_LINKS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between gap-4 border-b border-ink pb-2 text-base ${HOVER}`}
              >
                <span>Reservar llamada</span>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                  <path d="M0 6h16.5M11.5 1l5 5-5 5" stroke="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
