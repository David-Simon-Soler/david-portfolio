// Franja de scroll horizontal infinito para la parte superior del Hero.
// El texto se duplica y el track se anima -50% (ver .ticker-track en index.css)
// para que el bucle sea perfectamente continuo.

const ITEMS = [
  'PORTFOLIO',
  'MARKETING DIGITAL',
  'IA APLICADA',
  'CREATIVIDAD',
  'DAVID SIMÓN SOLER',
];

function Sequence() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="mx-4 whitespace-nowrap">{item}</span>
          <span className="opacity-40">·</span>
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div
      className="w-full overflow-hidden border-b border-white/10 py-2"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="ticker-track flex w-max items-center font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/70 sm:text-xs">
        {/* Dos secuencias idénticas: al desplazar -50% el bucle es continuo */}
        <div className="flex items-center">
          <Sequence />
        </div>
        <div className="flex items-center" aria-hidden="true">
          <Sequence />
        </div>
      </div>
    </div>
  );
}
