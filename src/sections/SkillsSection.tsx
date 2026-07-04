import FadeIn from '../components/FadeIn';

const SKILLS = [
  {
    n: '01',
    name: 'Generador de copys para redes sociales',
    desc: 'Skill que genera 3 variantes de copy (directo, curiosidad y narrativo) adaptadas a cada red social.',
    input:
      'Copy para Instagram promocionando gestión de redes sociales para pymes locales, tono cercano.',
    outputLabel: 'Output · enfoque Narrativo',
    output:
      'Una clienta nos contó que llevaba meses subiendo fotos porque hay que estar en redes, sin saber muy bien si eso le traía algún cliente. Empezamos a gestionar su Instagram, y en pocas semanas sus publicaciones pasaron de ser un trámite a ser una razón real por la que la gente entraba a su tienda.',
  },
  {
    n: '02',
    name: 'Generador de brief SEO',
    desc: 'Skill que genera título, meta descripción, estructura H2/H3 y FAQs a partir de una palabra clave.',
    input: "Brief SEO para 'agencia de marketing digital en Orihuela'.",
    outputLabel: 'Output · resumido',
    output:
      'Título «Agencia de Marketing Digital en Orihuela», meta descripción, estructura H2 (Qué hace una agencia · Por qué elegir una agencia local · Precio · FAQs) y la pregunta «¿Cuánto cuesta contratar una agencia de marketing digital?» con su respuesta.',
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-(--paper) px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-32"
    >
      <FadeIn>
        <div className="mx-auto max-w-5xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-(--clay)">
            IA aplicada
          </div>
          <h2
            className="hero-heading font-display mt-3 font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 10vw, 120px)' }}
          >
            Skills
          </h2>
          <p className="mt-5 max-w-2xl text-base text-(--ink-soft) sm:text-lg">
            Dos skills de IA construidas de principio a fin, con un ejemplo real
            de entrada y salida generado con cada una.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto mt-14 grid max-w-5xl gap-7 md:grid-cols-2">
        {SKILLS.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1}>
            <div
              className="panel-surface flex h-full flex-col rounded-4xl border p-7 transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-(--forest) hover:shadow-[0_20px_45px_rgba(18,32,28,0.12)] sm:rounded-[2.5rem] sm:p-8"
              style={{ borderColor: 'var(--line)' }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="font-display font-black leading-none text-(--forest)"
                  style={{ fontSize: 'clamp(2rem, 6vw, 56px)' }}
                >
                  {s.n}
                </span>
                <h3 className="font-display mt-1 text-xl font-semibold leading-snug sm:text-2xl">
                  {s.name}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-(--ink-soft) sm:text-base">
                {s.desc}
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-(--ink-soft)">
                    Input
                  </div>
                  <p
                    className="font-mono mt-2 rounded-2xl px-4 py-3 text-sm text-(--ink)"
                    style={{ background: 'rgba(18,32,28,0.05)' }}
                  >
                    {s.input}
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-(--clay)">
                    {s.outputLabel}
                  </div>
                  <p
                    className="mt-2 rounded-2xl border-l-2 px-4 py-3 text-sm leading-relaxed text-(--ink-soft)"
                    style={{
                      borderColor: 'var(--forest)',
                      background: 'rgba(59,110,99,0.06)',
                    }}
                  >
                    {s.output}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
