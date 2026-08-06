import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { projects } from '../data/projects';

// A pinned section: the page stops scrolling vertically while this section
// is in view, and the card track instead translates horizontally, driven
// by GSAP ScrollTrigger's scrub. Falls back to a normal horizontal-scroll
// strip (no pin) when the user prefers reduced motion.
export default function HorizontalShowcase() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const setup = () => {
        const distance = track.scrollWidth - window.innerWidth;
        return distance > 0 ? distance : 0;
      };

      let distance = setup();

      const tween = gsap.to(track, {
        x: () => -setup(),
        ease: 'none',
        scrollTrigger: {
          id: 'horizontal-showcase',
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${setup()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-spotlight="dark"
      className="relative overflow-hidden"
      style={{ background: 'var(--canvas)' }}
      aria-label="Project reel"
    >
      <div className="noise" aria-hidden="true" />
      <div className="relative z-10 h-[100svh] flex flex-col justify-center">
        <div className="container-edit mb-10 shrink-0">
          <p className="eyebrow mb-4">The Reel</p>
          <h2 className="font-display text-white text-[32px] sm:text-[42px] font-semibold leading-[1.05] max-w-[600px]">
            Scroll to move through the work.
          </h2>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 pl-6 sm:pl-[max(24px,calc((100vw-1360px)/2+64px))] pr-[10vw] w-max"
        >
          {projects.map((p) => (
            <div
              key={p.id}
              className="shrink-0 w-[78vw] sm:w-[520px] rounded-[var(--radius-lg)] card-glass-dark p-8 sm:p-10"
            >
              <span className="font-mono text-[13px]" style={{ color: p.color }}>{p.id}</span>
              <h3 className="font-display text-white text-[38px] sm:text-[46px] font-semibold leading-[0.98] mt-2 mb-4">
                {p.name}
              </h3>
              <p className="text-[15.5px] text-white/55 leading-relaxed max-w-[400px] mb-6">{p.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] rounded-full border border-white/15 px-3 py-1.5 text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="shrink-0 w-[60vw] sm:w-[360px] flex flex-col justify-center">
            <p className="font-mono text-[12px] text-white/35 mb-3">// end of reel</p>
            <a href="#work" className="font-display text-white text-[26px] font-semibold inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
              See full case studies ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
