import FadeIn from '../components/FadeIn';

// NOTA: las cuentas reales (TikTok, Instagram, YouTube) y ejemplos concretos de
// contenido NO se enlazan públicamente. Se muestran en directo desde el móvil
// durante la entrevista.

const TOOLS = ['Veo 3', 'ElevenLabs', 'CapCut', 'Canva'];
const FORMATS = ['TikTok', 'Instagram', 'YouTube'];

export default function ContentSection() {
  return (
    <section
      id="contenido"
      className="bg-(--paper) px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-(--clay)">
            Contenido y creatividad
          </div>
          <h2
            className="hero-heading font-display mt-3 font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 96px)' }}
          >
            Contenido
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-(--ink-soft) sm:text-xl">
            Gestión y creación de contenido en distintos nichos y formatos:
            TikTok, Instagram y YouTube. Producción con IA generativa (Veo 3,
            ElevenLabs), edición en CapCut, diseño en Canva.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <FadeIn delay={0.15}>
            <div className="panel-surface rounded-3xl p-5">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-(--ink-soft)">
                Formatos
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {FORMATS.map((f) => (
                  <span
                    key={f}
                    className="soft-chip font-mono rounded-full px-4 py-1.5 text-sm uppercase tracking-wide text-(--ink)"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="panel-surface rounded-3xl p-5">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-(--ink-soft)">
                Herramientas
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {TOOLS.map((t) => (
                  <span
                    key={t}
                    className="soft-chip font-mono rounded-full px-4 py-1.5 text-sm uppercase tracking-wide text-(--ink)"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25}>
          <p className="font-mono mt-12 text-xs uppercase tracking-wide text-(--ink-soft)">
            * Cuentas y ejemplos de contenido se muestran en directo durante la
            entrevista.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
