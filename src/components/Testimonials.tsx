export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

function isComplete(t: Testimonial): boolean {
  return Boolean(t.quote.trim() && t.name.trim() && t.role.trim() && t.company.trim());
}

/** Solo pinta testimonios completos. Si no hay ninguno, no renderiza la sección. */
export function Testimonials({ items }: { items: Testimonial[] }) {
  const ready = items.filter(isComplete);
  if (ready.length === 0) return null;

  return (
    <section aria-labelledby="testimonios" className="mt-24 md:mt-32">
      <h2
        id="testimonios"
        className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]"
      >
        Lo dicen ellos
      </h2>
      <div className="mt-12 grid gap-12 md:grid-cols-3">
        {ready.map((t) => (
          <figure key={`${t.company}-${t.name}`} className="border-t border-ink/15 pt-6">
            <blockquote className="font-serif text-[clamp(1.25rem,1.8vw,1.75rem)] leading-[1.25]">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 text-base leading-relaxed text-muted-ink">
              <span className="font-semibold text-ink">{t.name}</span>
              <br />
              {t.role}, {t.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
