import { useEffect, useRef, useState } from 'react';

const ROW_1 = [
  'LAST MEMORY', 'DATAPULSE', 'LA VERSILIA', 'LUCY EVENTOS', 'FLORISTERÍA LOLA',
  'POWER BI', 'PROMPT ENGINEERING',
];
const ROW_2 = [
  'WORDPRESS', 'SHOPIFY', 'BOTPRESS', 'MAKE', 'SEO', 'VEO 3', 'ELEVENLABS',
  'CANVA',
];

function Tile({ label }: { label: string }) {
  return (
    <div className="flex h-35 w-70 shrink-0 items-center justify-center rounded-2xl border border-(--line) bg-(--paper) px-4 font-mono text-[0.7rem] uppercase tracking-widest text-(--ink-soft) transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:border-(--forest) hover:text-(--ink) hover:shadow-[0_12px_30px_rgba(18,32,28,0.10)] sm:h-45 sm:w-85 sm:px-6 sm:text-sm">
      {label}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const value =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1 = [...ROW_1, ...ROW_1, ...ROW_1];
  const row2 = [...ROW_2, ...ROW_2, ...ROW_2];

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1.map((label, i) => (
            <Tile key={`r1-${i}`} label={label} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2.map((label, i) => (
            <Tile key={`r2-${i}`} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
