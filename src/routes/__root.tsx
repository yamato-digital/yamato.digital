import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  useEffect(() => {
    document.title = "Página no encontrada — YAMATO";
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Nav />
      <main className="flex flex-1 items-center justify-center px-6 py-20 sm:px-10 lg:px-20 xl:px-28">
        <div className="max-w-2xl text-center">
          <span className="font-serif text-[clamp(6rem,15vw,12rem)] leading-none tracking-tight text-ink/10">
            404
          </span>
          <h1 className="mt-6 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight">
            Esta página no genera tráfico ni conversión.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-ink md:text-xl">
            La URL que has intentado visitar no existe, ha sido movida o nunca tuvo demanda.
            En marketing, cuando algo no funciona, lo mejor es reorientar.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Volver a la home
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Hablemos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://yamato.digital";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "5hVSqmWNzF9ywzhbG4ZEgOwMJRqbmILlYqtYf92Jm-c" },
      { title: "YAMATO — Consultora de marketing independiente" },
      { name: "description", content: "Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio. De la startup a la corporación." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "YAMATO" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "YAMATO — Consultora de marketing independiente" },
      { name: "twitter:title", content: "YAMATO — Consultora de marketing independiente" },
      { property: "og:description", content: "Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio. De la startup a la corporación." },
      { name: "twitter:description", content: "Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio. De la startup a la corporación." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/aykRTjElrvhS78u5RDiqYqG9ItB2/social-images/social-1782230154804-YAMATO-2_-_1920x1080.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/aykRTjElrvhS78u5RDiqYqG9ItB2/social-images/social-1782230154804-YAMATO-2_-_1920x1080.webp" },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "YAMATO",
              "alternateName": ["YAMATO Digital", "Yamato Consultora de Marketing"],
              "url": SITE_URL,
              "description": "Consultora de marketing independiente. CMO externo para startups y corporaciones.",
              "contactPoint": { "@type": "ContactPoint", "email": "hola@yamato.digital" },
            },
            {
              "@type": "WebSite",
              "name": "YAMATO",
              "alternateName": ["YAMATO Digital", "Yamato Consultora de Marketing"],
              "url": SITE_URL,
              "inLanguage": "es",
              "publisher": { "@type": "Organization", "name": "YAMATO", "url": SITE_URL },
            },

          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PSHW2P5S');" }} />
        <HeadContent />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSHW2P5S" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
