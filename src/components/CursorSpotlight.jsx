import { useEffect, useRef } from 'react';

// A soft radial glow that follows the pointer, confined to dark sections
// via the [data-spotlight] attribute on ancestor sections.
export default function CursorSpotlight() {
  const glowRef = useRef(null);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return;

    let raf = null;
    let mx = 0, my = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const el = glowRef.current;
        if (el) {
          el.style.transform = `translate3d(${mx - 260}px, ${my - 260}px, 0)`;
          const target = document.elementFromPoint(mx, my);
          const dark = target?.closest('[data-spotlight="dark"]');
          el.style.opacity = dark ? '1' : '0';
        }
        raf = null;
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-40 h-[520px] w-[520px] rounded-full opacity-0 transition-opacity duration-300"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
