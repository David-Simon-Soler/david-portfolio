import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    n: '01',
    name: 'Ideas que se vuelven experiencias',
    desc: 'Diseño de conceptos, narrativas y piezas visuales que ayudan a comunicar mejor y a hacer que cada propuesta se entienda de inmediato.',
  },
  {
    n: '02',
    name: 'Contenido con IA generativa',
    desc: 'Producción de vídeo, imagen y voz con Veo 3, ElevenLabs y CapCut para redes sociales, reels o campañas de contenido.',
  },
  {
    n: '03',
    name: 'Desarrollo web con IA',
    desc: 'Webs funcionales y con personalidad, construidas con WordPress, Shopify y herramientas de IA para pasar del brief al producto más rápido.',
  },
  {
    n: '04',
    name: 'Automatización y flujos',
    desc: 'Conexión de herramientas, triggers y procesos repetitivos con Make y chatbots conversacionales con Botpress para ahorrar tiempo.',
  },
  {
    n: '05',
    name: 'Estrategia + análisis',
    desc: 'SEO básico, medición de resultados y pensamiento de negocio para que cada pieza no solo se vea bien, sino que también tenga propósito.',
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // Parallax: el fondo decorativo se mueve más lento que el contenido
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '10%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden rounded-t-[40px] bg-(--paper) px-5 py-20 shadow-[0_-1px_0_var(--line)] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      {/* Capa de parallax: blob suave verde que aporta profundidad */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-x-0 top-0 z-0"
      >
        <div
          className="mx-auto h-130 w-130 max-w-full opacity-[0.06] blur-3xl"
          style={{
            background:
              'radial-gradient(circle, var(--forest) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      <div className="relative z-10">
        <FadeIn>
          <h2
            className="font-display mb-10 text-center font-black uppercase leading-none tracking-tight text-(--ink) sm:mb-14 md:mb-20"
            style={{ fontSize: 'clamp(2.4rem, 8.5vw, 5.2rem)' }}
          >
            Servicios
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-5xl">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.08}>
              <div
                className="group flex items-start gap-6 border-b py-8 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-2 sm:py-10 md:gap-10 md:py-12"
                style={{ borderColor: 'rgba(18,32,28,0.12)' }}
              >
                <span
                  className="font-display shrink-0 font-black leading-none text-(--ink) transition-colors duration-300 group-hover:text-(--clay)"
                  style={{ fontSize: 'clamp(2.4rem, 8vw, 100px)' }}
                >
                  {s.n}
                </span>
                <div>
                  <h3
                    className="font-medium uppercase text-(--ink)"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 1.9rem)' }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="mt-2 max-w-2xl font-light leading-relaxed text-(--ink-soft)"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
