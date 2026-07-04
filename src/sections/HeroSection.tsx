import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import Ticker from '../components/Ticker';
import TopoLines from '../components/TopoLines';
import { ContactButton } from '../components/Buttons';

const NAV_LINKS = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'IA aplicada', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen w-full flex-col overflow-x-clip text-white"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Fondo: líneas fluidas topográficas en blanco sobre negro con glow sutil */}
      <TopoLines />

      {/* Ticker con scroll infinito, por encima del navbar */}
      <div className="relative z-10">
        <Ticker />
      </div>

      <FadeIn delay={0.05} y={-20} className="relative z-10">
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 pt-4 sm:px-6 sm:pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white sm:text-sm md:px-4 md:text-base lg:text-lg"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Heading protagonista, centrado en el espacio libre */}
      <div className="relative z-10 flex flex-1 items-center justify-center overflow-hidden px-4 sm:px-6">
        <FadeIn delay={0.2} y={40} className="w-full">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
            <h1 className="hero-heading-light font-display w-full font-black uppercase leading-[0.8] tracking-[-0.03em] text-[clamp(3.2rem,12vw,8rem)] sm:text-[clamp(4rem,11vw,8.6rem)] md:text-[clamp(5.4rem,13vw,10.5rem)]">
              Soy David
            </h1>
          </div>
        </FadeIn>
      </div>

      <div className="relative z-10 flex items-end justify-between gap-4 px-4 pb-6 sm:px-6 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.4} y={20} className="w-full max-w-40 sm:max-w-60 md:max-w-80">
          <p
            className="font-mono uppercase leading-snug tracking-wide text-white/55"
            style={{ fontSize: 'clamp(0.7rem, 1.3vw, 1.05rem)' }}
          >
            sociólogo que construye webs, contenido e ia aplicada al marketing
          </p>
        </FadeIn>

        {/* Único elemento interactivo del Hero: botón de contacto con efecto magnético */}
        <FadeIn delay={0.55} y={20}>
          <Magnet padding={120} strength={5}>
            <ContactButton>Contacto</ContactButton>
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
