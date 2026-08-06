import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

// Splits the target element's text into words and reveals them with a
// GSAP ScrollTrigger-driven stagger as the element scrolls into view.
// Usage: const ref = useSplitReveal(); <h2 ref={ref}>Headline text</h2>
export function useSplitReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const original = el.textContent;
    const words = original.split(' ');
    el.innerHTML = words
      .map((w) => `<span class="split-word" style="display:inline-block;overflow:hidden;vertical-align:top;"><span class="split-word-inner" style="display:inline-block;">${w}&nbsp;</span></span>`)
      .join('');

    const inners = el.querySelectorAll('.split-word-inner');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.045,
          scrollTrigger: {
            trigger: el,
            start: options.start || 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
      el.textContent = original;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
