import FadeIn from '../components/FadeIn';

export default function AutomationSection() {
  return (
    <section
      id="automatizacion"
      className="bg-(--paper) px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div
            className="rounded-4xl p-8 text-(--paper) sm:rounded-[40px] sm:p-12"
            style={{
              background:
                'linear-gradient(150deg, #3B6E63 0%, #20342F 65%, #14231F 100%)',
            }}
          >
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-(--paper)/70">
              Automatización
            </div>
            <h2
              className="font-display mt-4 font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2rem, 6vw, 64px)' }}
            >
              Procesos con Make
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-(--paper)/85 sm:text-lg">
              Automatización de procesos con Make aplicada a flujos de contenido
              y de atención al cliente: conexión de herramientas, disparadores y
              tareas repetitivas resueltas sin intervención manual.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
