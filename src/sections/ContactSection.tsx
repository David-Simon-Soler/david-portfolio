import FadeIn from '../components/FadeIn';
import { ContactButton, GhostButton } from '../components/Buttons';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-8 px-5 py-24 text-center sm:px-8 md:px-10"
    >
      <FadeIn>
        <h2
          className="font-display max-w-2xl font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 60px)' }}
        >
          ¿Construimos algo juntos?
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-(--ink-soft)">
          Orihuela, Comunidad Valenciana · Disponibilidad inmediata
        </p>
      </FadeIn>
      <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-4">
        <ContactButton>davidsimonsoler2002@gmail.com</ContactButton>
        <GhostButton href="https://github.com/David-Simon-Soler">GitHub</GhostButton>
      </FadeIn>
      <p className="font-mono mt-10 text-xs text-(--ink-soft)">
        David José Simón Soler — 2026
      </p>
    </section>
  );
}
