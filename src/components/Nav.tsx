import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoBlack from "@/assets/logo-yamato-black.png";

const menuItems = [
  { label: "Fractional CMO", to: "/fractional-cmo" },
  { label: "Servicios", to: "/servicios" },
  { label: "Quiénes somos", to: "/quienes-somos" },
  { label: "Clientes", to: "/clientes" },
  { label: "Blog", to: "/blog" },
] as const;

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:px-10 lg:px-16 xl:px-28">
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
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center"
          >
            <span className="relative block h-[14px] w-6">
              <span
                className={`absolute inset-x-0 border-t border-ink ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
              />
              <span className={`absolute inset-x-0 top-[6px] border-t border-ink ${isOpen ? "opacity-0" : ""}`} />
              <span
                className={`absolute inset-x-0 border-t border-ink ${isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>
      {isOpen ? (
        <nav className="px-6 pb-6 text-sm sm:px-10 lg:px-16 xl:px-28">
          <div className="grid gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "font-semibold" }}
                className="link-underline link-underline-hover w-fit"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
