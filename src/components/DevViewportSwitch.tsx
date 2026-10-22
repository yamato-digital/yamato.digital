import { useEffect, useRef, useState, type ReactNode } from "react";

const STORAGE_KEY = "yamato-viewport";
type ViewportMode = "desktop" | "mobile";

function isLocalHost() {
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host === "[::1]";
}

function ViewportToggle({
  mode,
  onChange,
}: {
  mode: ViewportMode;
  onChange: (mode: ViewportMode) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Vista de la página"
      className="flex items-center rounded-full border border-ink bg-paper p-1 text-sm text-ink shadow-sm"
    >
      {(
        [
          ["desktop", "Escritorio"],
          ["mobile", "Móvil"],
        ] as const
      ).map(([value, label]) => (
        <button
          key={value}
          type="button"
          aria-pressed={mode === value}
          onClick={() => onChange(value)}
          className={`rounded-full px-4 py-1.5 leading-none ${mode === value ? "bg-ink text-paper" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function MobilePreview({ onDesktop }: { onDesktop: (href: string) => void }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [src] = useState(() => window.location.href);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <div className="flex h-dvh flex-col bg-[#eceae4]">
      <div className="flex items-center justify-center gap-3 py-3">
        <ViewportToggle
          mode="mobile"
          onChange={(next) => {
            if (next !== "desktop") return;
            let href = window.location.href;
            try {
              href = frameRef.current?.contentWindow?.location.href ?? href;
            } catch {
              href = window.location.href;
            }
            onDesktop(href);
          }}
        />
        <span className="text-xs text-muted-ink">390 px</span>
      </div>
      <div className="flex min-h-0 flex-1 justify-center px-4 pb-4">
        <iframe
          ref={frameRef}
          title="Vista móvil de YAMATO"
          src={src}
          className="h-full w-[390px] max-w-full border border-ink/15 bg-paper"
        />
      </div>
    </div>
  );
}

function DevViewportSwitchInner({ children }: { children: ReactNode }) {
  const [preview, setPreview] = useState<ViewportMode | null>(null);

  useEffect(() => {
    if (!isLocalHost() || window.self !== window.top) return;
    const saved = localStorage.getItem(STORAGE_KEY);
    setPreview(saved === "mobile" ? "mobile" : "desktop");
  }, []);

  const select = (mode: ViewportMode) => {
    localStorage.setItem(STORAGE_KEY, mode);
    setPreview(mode);
  };

  if (preview === "mobile") {
    return (
      <MobilePreview
        onDesktop={(href) => {
          localStorage.setItem(STORAGE_KEY, "desktop");
          if (href !== window.location.href) {
            window.location.assign(href);
            return;
          }
          setPreview("desktop");
        }}
      />
    );
  }

  return (
    <>
      {children}
      {preview === "desktop" ? (
        <div className="fixed bottom-4 right-4 z-[80]">
          <ViewportToggle mode="desktop" onChange={select} />
        </div>
      ) : null}
    </>
  );
}

/** Conmutador de vista solo en el servidor de desarrollo, y solo en localhost. */
export function DevViewportSwitch({ children }: { children: ReactNode }) {
  if (!import.meta.env.DEV) return children;
  return <DevViewportSwitchInner>{children}</DevViewportSwitchInner>;
}
