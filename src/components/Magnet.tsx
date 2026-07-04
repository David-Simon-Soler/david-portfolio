import { useRef, useState, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export default function Magnet({
  children,
  padding = 120,
  strength = 3,
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0)');
  const [transition, setTransition] = useState('transform 0.6s ease-in-out');

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = Math.max(rect.width, rect.height) / 2 + padding;

    if (dist < maxDist) {
      setTransition('transform 0.3s ease-out');
      setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0)`);
    } else {
      setTransition('transform 0.6s ease-in-out');
      setTransform('translate3d(0px, 0px, 0)');
    }
  };

  const handleMouseLeave = () => {
    setTransition('transform 0.6s ease-in-out');
    setTransform('translate3d(0px, 0px, 0)');
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <div
        ref={ref}
        style={{ transform, transition, willChange: 'transform' }}
      >
        {children}
      </div>
    </div>
  );
}
