import type { ReactNode } from 'react';

export function ContactButton({
  href = 'mailto:davidsimonsoler2002@gmail.com',
  children = 'Hablemos',
}: {
  href?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="btn-gradient inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#FAF8F4] sm:px-10 sm:py-3.5 sm:text-sm"
      style={{
        boxShadow:
          '0px 4px 4px rgba(59,110,99,0.25), 4px 4px 12px rgba(42,79,70,0.5) inset',
        outline: '2px solid #FAF8F4',
        outlineOffset: '-3px',
      }}
    >
      {children}
    </a>
  );
}

export function GhostButton({
  href,
  children,
  tone = 'dark',
}: {
  href: string;
  children: ReactNode;
  // 'dark'  -> texto oscuro para secciones claras
  // 'light' -> texto claro para secciones oscuras
  tone?: 'dark' | 'light';
}) {
  const light = tone === 'light';
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 px-6 py-2.5 text-xs font-medium uppercase tracking-widest transition-transform duration-300 hover:-translate-y-px sm:text-sm ${
        light
          ? 'border-white/60 text-white'
          : 'border-(--ink)/70 text-(--ink)'
      }`}
    >
      {/* Relleno que sube suavemente desde abajo en hover */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 ${
          light ? 'bg-white' : 'bg-(--ink)'
        }`}
      />
      <span
        className={`relative z-10 transition-colors duration-300 ${
          light
            ? 'group-hover:text-[#0C0C0C]'
            : 'group-hover:text-(--paper)'
        }`}
      >
        {children}
      </span>
    </a>
  );
}
