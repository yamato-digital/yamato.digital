import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoBlack from "@/assets/logo-yamato-black.png";

const navItems = [
  { label: "Fractional CMO", to: "/fractional-cmo" },
  { label: "Servicios", to: "/servicios" },
  { label: "Quiénes somos", to: "/quienes-somos" },
  { label: "Clientes", to: "/clientes" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/contacto" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:px-10 lg:px-16 xl:px-28">
        <Link to="/" className="inline-block">
          <img src={logoBlack} alt="YAMATO" className="h-8 w-auto" />
        </Link>
        <nav className="hidden min-w-0 items-center justify-end gap-4 text-xs md:flex lg:gap-6 lg:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "font-semibold" }}
              className="link-underline link-underline-hover whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center md:hidden"
        >
          <span className="grid w-6 gap-1.5">
            <span className="h-px bg-ink" />
            <span className="h-px bg-ink" />
            <span className="h-px bg-ink" />
          </span>
        </button>
      </div>
      {isOpen ? (
        <nav className="border-t border-hairline px-6 py-5 text-sm md:hidden">
          <div className="grid gap-4">
            {navItems.map((item) => (
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
