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
        <div className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 ${GUTTER}`}>
          <Link to="/" className="inline-block">
            <img src={logoBlack} alt="YAMATO" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/contacto"
              activeProps={{ className: "font-semibold" }}
              className="inline-flex items-center rounded-full border border-ink px-5 py-2 text-sm leading-none text-ink sm:px-6 sm:py-2.5 sm:text-base"
            >
              Contacto
            </Link>
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={isOpen}
              aria-controls="menu-principal"
              onClick={() => setIsOpen(true)}
              className="grid h-10 w-10 place-items-center"
            >
              <span className="relative block h-[14px] w-6">
                <span className="absolute inset-x-0 top-0 border-t border-ink" />
                <span className="absolute inset-x-0 top-[6px] border-t border-ink" />
                <span className="absolute inset-x-0 top-3 border-t border-ink" />
              </span>
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
          className={`fixed inset-0 z-50 grid grid-cols-1 overflow-y-auto bg-paper text-ink md:grid-cols-2 ${GUTTER}`}
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={close}
            className={`absolute right-6 top-6 grid h-10 w-10 place-items-center sm:right-10 lg:right-16 xl:right-28 ${HOVER}`}
          >
            <svg width="26" height="26" viewBox="0 0 32.527 32.527" aria-hidden="true">
              <path d="M0 31.819L31.82-.001l.707.707-31.82 31.82z" fill="currentColor" />
              <path d="M.708 0l31.82 31.82-.707.707L0 .707z" fill="currentColor" />
            </svg>
          </button>

          <div className="border-b border-ink py-6 md:border-b-0 md:border-r md:pr-[34px]">
            <Link
              to="/"
              onClick={close}
              aria-label="YAMATO, inicio"
              className="block w-3/5 md:w-2/3"
            >
              <img src={logoBlack} alt="YAMATO" className="block h-auto w-full" />
            </Link>
          </div>

          <div className="flex flex-col py-6 md:pl-[34px]">
            <nav
              aria-label="Principal"
              className="flex flex-1 flex-col items-start justify-center py-10 text-[44px] font-normal leading-none tracking-[-0.02em] md:text-[clamp(44px,4.17vw,90px)]"
            >
              {menuItems.map((item) => (
                <Link key={item.to} to={item.to} onClick={close} className={HOVER}>
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
