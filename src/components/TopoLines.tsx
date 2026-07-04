// Patrón de líneas fluidas abstractas (estilo topográfico) para el fondo del Hero.
// Blanco sobre negro, con glow sutil y deriva horizontal continua vía CSS.
// Las líneas se generan como curvas suaves periódicas (periodo = WAVELENGTH) para
// que el desplazamiento infinito no muestre saltos.

const VIEW_W = 1440;
const VIEW_H = 900;
const DRAW_W = VIEW_W + 360; // margen extra para el desplazamiento sin huecos
const WAVELENGTH = 360; // debe coincidir con el translateX de la animación en index.css
const STEP = 30;
const LINES = 20;

function wavePath(baseY: number, amplitude: number, phase: number): string {
  const pts: [number, number][] = [];
  for (let x = 0; x <= DRAW_W; x += STEP) {
    const y = baseY + Math.sin((x / WAVELENGTH) * Math.PI * 2 + phase) * amplitude;
    pts.push([x, y]);
  }
  // Curva suave pasando por los puntos medios (Q) para un trazo orgánico.
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x, y] = pts[i];
    const [px, py] = pts[i - 1];
    const cx = (px + x) / 2;
    const cy = (py + y) / 2;
    d += ` Q ${px} ${py} ${cx} ${cy}`;
  }
  return d;
}

// Genera un conjunto de líneas con espaciado y amplitud moduladas para que se
// agrupen como curvas de nivel de un mapa topográfico.
function buildLines() {
  return Array.from({ length: LINES }, (_, i) => {
    const t = i / (LINES - 1);
    const baseY = t * VIEW_H + Math.sin(i * 0.9) * 22;
    const amplitude = 16 + Math.sin(i * 0.6) * 12;
    const phase = i * 0.5;
    return { d: wavePath(baseY, amplitude, phase), key: i };
  });
}

const LAYER_A = buildLines();

export default function TopoLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <filter id="topo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Difuminado del brillo hacia los bordes para que no compita con el nombre */}
          <radialGradient id="topo-fade" cx="50%" cy="42%" r="75%">
            <stop offset="0%" stopColor="#000" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#000" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Capa de glow difuso que deriva lentamente y respira */}
        <g className="topo-drift topo-drift--slow topo-pulse" filter="url(#topo-glow)">
          {LAYER_A.map((l) => (
            <path
              key={`glow-${l.key}`}
              d={l.d}
              stroke="#ffffff"
              strokeOpacity={0.18}
              strokeWidth={1.8}
            />
          ))}
        </g>

        {/* Capa nítida principal */}
        <g className="topo-drift">
          {LAYER_A.map((l) => (
            <path
              key={`line-${l.key}`}
              d={l.d}
              stroke="#ffffff"
              strokeOpacity={0.34}
              strokeWidth={1}
            />
          ))}
        </g>
      </svg>

      {/* Máscara radial que atenúa el centro para proteger la legibilidad del texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(58% 50% at 50% 46%, rgba(12,12,12,0.72) 0%, rgba(12,12,12,0.28) 48%, rgba(12,12,12,0) 80%)',
        }}
      />
    </div>
  );
}
