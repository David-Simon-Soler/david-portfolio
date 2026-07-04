import FadeIn from '../components/FadeIn';
import { GhostButton } from '../components/Buttons';

export default function LastMemorySection() {
  return (
    <section
      id="lastmemory"
      className="bg-(--paper) px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-(--clay)">
            Proyecto destacado
          </div>
          <h2
            className="hero-heading font-display mt-3 font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 9vw, 110px)' }}
          >
            Last Memory
          </h2>
          <p className="font-display mt-2 text-xl italic text-(--ink-soft) sm:text-2xl">
            · Story
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          {/* Columna izquierda: relato y caso práctico */}
          <FadeIn delay={0.1}>
            <div
              className="rounded-4xl border-2 p-6 sm:rounded-[2.5rem] sm:p-8"
              style={{ borderColor: 'var(--line)' }}
            >
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                La memoria de Julián
              </h3>
              <p className="mt-4 text-base leading-relaxed text-(--ink-soft) sm:text-lg">
                Julián empieza a olvidar. Su familia entrena un chatbot con sus
                recuerdos, su forma de hablar y sus historias, para que su legado
                emocional siga acompañándoles cuando él ya no pueda contarlo.
                Un caso práctico sobre memoria, vínculo y tecnología con sentido.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {['Botpress', 'IA conversacional', 'Modelo de negocio', 'Comunicación'].map(
                  (t) => (
                    <span
                      key={t}
                      className="font-mono rounded-full border px-3 py-1 text-xs uppercase tracking-wide text-(--ink-soft)"
                      style={{ borderColor: 'var(--line)' }}
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeIn>

          {/* Columna derecha: premio, chatbot y enlace */}
          <FadeIn delay={0.2}>
            <div className="flex h-full flex-col gap-6">
              <div
                className="rounded-[28px] p-7 text-(--paper)"
                style={{
                  background:
                    'linear-gradient(155deg, #3B6E63 0%, #20342F 70%, #14231F 100%)',
                }}
              >
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-(--paper)/70">
                  Reconocimiento
                </div>
                <h4 className="font-display mt-2 text-xl font-semibold leading-snug">
                  Premio a la Innovación Social
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-(--paper)/85">
                  IX Triatlón de Emprendimiento Social · Universidad de Alicante,
                  2026.
                </p>
              </div>

              <div
                className="rounded-[28px] border-2 p-7"
                style={{ borderColor: 'var(--line)' }}
              >
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-(--clay)">
                  Chatbot IA
                </div>
                <p className="mt-2 text-sm leading-relaxed text-(--ink-soft)">
                  Chatbot conversacional desarrollado con Botpress, entrenado con
                  recuerdos reales. Sin enlace público:{' '}
                  <span className="font-medium text-(--ink)">
                    se muestra en directo durante la entrevista.
                  </span>
                </p>
                <div className="mt-5">
                  <GhostButton href="https://psua.avs-sociologia.com/CTS/25Laura/">
                    Ver prototipo
                  </GhostButton>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
