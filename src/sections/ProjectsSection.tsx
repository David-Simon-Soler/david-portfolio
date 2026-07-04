import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GhostButton } from '../components/Buttons';

type Project = {
  n: string;
  category: string;
  name: string;
  desc: string;
  caseStudy?: string;
  link: string;
  linkLabel: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    n: '01',
    category: 'Proyecto de empresa · Premio Innovación Social UA',
    name: 'Last Memory · Story',
    desc: 'Plataforma de legado emocional con chatbot IA (Botpress, se muestra en directo, sin link público), con modelo de negocio y plan de comunicación completos.',
    caseStudy:
      'Caso práctico «La memoria de Julián»: una familia entrena un chatbot con los recuerdos y la voz de Julián para que su legado emocional siga acompañándoles.',
    link: 'https://psua.avs-sociologia.com/CTS/25Laura/',
    linkLabel: 'Ver prototipo',
    tags: ['Botpress', 'IA conversacional', 'Modelo de negocio', 'Comunicación'],
  },
  {
    n: '02',
    category: 'Proyecto personal',
    name: 'DataPulse',
    desc: 'App de análisis de datos con IA integrada sobre la API de Claude. Consultas en lenguaje natural sobre conjuntos de datos.',
    link: 'https://data-pulse-seven.vercel.app/',
    linkLabel: 'Ver proyecto',
    tags: ['API Claude', 'React', 'Análisis de datos'],
  },
  {
    n: '03',
    category: 'Proyecto personal · prueba con negocio local',
    name: 'La Versilia',
    desc: 'Web de restauración construida con Lovable para probar cómo aplicar IA generativa al desarrollo web con un negocio real, sin que fuera un encargo vendido.',
    link: 'https://pruebaversiliaweb.lovable.app/',
    linkLabel: 'Ver web',
    tags: ['Lovable', 'Restauración', 'IA generativa'],
  },
  {
    n: '04',
    category: 'Proyecto personal · prueba con negocio local',
    name: 'Lucy Eventos',
    desc: 'Misma idea que La Versilia, aplicada a un negocio de eventos: explorar el desarrollo web con IA sobre un caso real.',
    link: 'https://wearingclothes.lovable.app/',
    linkLabel: 'Ver web',
    tags: ['Lovable', 'Eventos', 'IA generativa'],
  },
  {
    n: '05',
    category: 'Proyecto personal · prueba con negocio local',
    name: 'Floristería Lola',
    desc: 'Web de floristería construida con Lovable como ejercicio práctico, no como encargo comercial.',
    link: 'https://floristerialolaprueba.lovable.app',
    linkLabel: 'Ver web',
    tags: ['Lovable', 'Comercio local', 'IA generativa'],
  },
  {
    n: '06',
    category: 'Proyectos web propios',
    name: 'Desarrollo web y SEO',
    desc: 'Proyectos propios con WordPress, Shopify y WooCommerce, incluyendo SEO y campañas de Google Ads en un blog de deporte.',
    link: '',
    linkLabel: '',
    tags: ['WordPress', 'Shopify', 'WooCommerce', 'SEO', 'Google Ads'],
  },
  {
    n: '07',
    category: 'Código',
    name: 'GitHub',
    desc: 'Todo el código documentado: proyectos y experimentos con IA aplicada, desarrollo web y automatización.',
    link: 'https://github.com/David-Simon-Soler',
    linkLabel: 'Ver GitHub',
    tags: ['Open source', 'Experimentos', 'IA'],
  },
];

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="sticky top-20 h-[78vh] sm:top-24 sm:h-[80vh] md:top-28 md:h-[82vh]"
      style={{ top: `${84 + index * 16}px` }}
    >
      {/* Superficie de tarjeta oscura ligeramente elevada sobre el fondo #0C0C0C */}
      <motion.div
        style={{ scale, backgroundColor: '#14201C' }}
        className="group flex h-full flex-col justify-between rounded-4xl border border-white/10 bg-[#14201C]/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.38)] transition-[border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-(--forest) hover:shadow-[0_24px_70px_rgba(0,0,0,0.55)] sm:rounded-[2.5rem] sm:p-6 md:rounded-[3rem] md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span
              className="font-display font-black leading-none text-(--forest) transition-colors duration-300 group-hover:text-(--clay)"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
            >
              {project.n}
            </span>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/50">
                {project.category}
              </div>
              <h3 className="font-display mt-1 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                {project.name}
              </h3>
            </div>
          </div>
          {project.link && (
            <GhostButton href={project.link} tone="light">
              {project.linkLabel}
            </GhostButton>
          )}
        </div>

        <div className="mt-6 max-w-xl">
          <p className="text-base text-white/70 sm:text-lg">{project.desc}</p>
          {project.caseStudy && (
            <p className="mt-4 border-l-2 border-(--clay) pl-4 text-sm italic text-white/60 sm:text-base">
              {project.caseStudy}
            </p>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wide text-white/60"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // Parallax: el resplandor de fondo se desplaza más lento que las tarjetas
  const glowY = useTransform(scrollYProgress, [0, 1], ['-8%', '12%']);

  return (
    <section
      ref={ref}
      id="proyectos"
      className="relative -mt-10 overflow-hidden rounded-t-[40px] px-5 pb-32 pt-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Parallax de fondo */}
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-x-0 top-1/4 z-0"
      >
        <div
          className="mx-auto h-150 w-150 max-w-full opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(59,110,99,0.5) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      <div className="relative z-10">
        <h2
          className="hero-heading-light font-display mb-16 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 130px)' }}
        >
          Proyectos
        </h2>

        <div className="mx-auto flex max-w-4xl flex-col gap-7">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.n} project={p} index={i} total={PROJECTS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
