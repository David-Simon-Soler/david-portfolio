# David Simón Soler — Portfolio

Portfolio hecho con React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Cómo ejecutarlo en local

```
npm install
npm run dev
```

Se abrirá en http://localhost:5173

## Cómo desplegarlo en Vercel

1. Sube esta carpeta a un repositorio de GitHub (igual que hiciste con DataPulse).
2. Entra en vercel.com, "Add New Project", importa el repo.
3. Vercel detecta automáticamente que es un proyecto Vite. Dale a Deploy.
4. Listo, te da una URL pública tipo `tu-proyecto.vercel.app`.

## Estructura

- `src/sections/` — cada bloque de la página (Hero, About, Proyectos, etc.)
- `src/components/` — piezas reutilizables (FadeIn, Magnet, botones, texto animado)
- `src/index.css` — colores, tipografías y estilos globales

## Pendiente de personalizar

- Sustituir el monograma "DS" del hero por una foto real si quieres (en `HeroSection.tsx`)
- Añadir capturas reales en vez de las etiquetas de texto del marquee (en `MarqueeSection.tsx`)
- Sección de prompts / skills de IA si quieres añadirla como bloque nuevo
