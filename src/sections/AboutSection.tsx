import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import { ContactButton } from '../components/Buttons';

const PILLARS = [
  { n: '01', label: 'Sociología' },
  { n: '02', label: 'Diseño de producto' },
  { n: '03', label: 'Contenido y narrativa' },
  { n: '04', label: 'Automatización' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center gap-14 px-5 py-20 sm:gap-18 sm:px-8 md:gap-22 md:px-10"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-display text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 130px)' }}
        >
          Sobre mí
        </h2>
      </FadeIn>

      <AnimatedText
        text="Soy un profesional que combina sociología, diseño y tecnología para construir experiencias útiles y con personalidad. Me interesa entender cómo piensa la gente, cómo se mueve la información y cómo convertir eso en productos claros: webs, contenidos, automatizaciones y herramientas con IA. Mi trabajo nace de la observación, pero se sostiene con claridad, detalle y una idea muy concreta de lo que debe comunicar cada proyecto."
        className="w-full max-w-176 text-center font-medium leading-relaxed text-(--ink-soft)"
      />

      <FadeIn delay={0.2}>
        <ContactButton>Hablemos</ContactButton>
      </FadeIn>

      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {PILLARS.map((p, i) => (
          <FadeIn key={p.n} delay={i * 0.08}>
            <div className="panel-surface rounded-3xl border border-(--forest)/15 p-4 text-left">
              <div className="font-mono text-xs text-(--clay)">{p.n}</div>
              <h4 className="font-display mt-2 text-lg font-semibold">{p.label}</h4>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
