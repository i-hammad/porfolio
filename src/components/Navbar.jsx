import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#testimonials', label: 'Notes' },
  { href: '#contact', label: 'Contact' },
];

// A single dark glass pill, used on both light and dark sections so the
// bar never washes out — it's designed to float over anything beneath it.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container-edit">
        <div
          className={`mt-4 flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 border ${
            scrolled
              ? 'bg-[#111827]/70 border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl'
              : 'bg-[#111827]/35 border-white/5 backdrop-blur-md'
          }`}
        >
          <a href="#top" className="font-display font-semibold tracking-tight text-[17px] flex items-center gap-2 text-white">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: 'var(--accent-2)' }} />
            Hammad<span style={{ color: 'var(--accent-2)' }}>.</span>dev
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[14px] font-medium text-white/60 hover:text-white transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full" style={{ background: 'var(--accent-2)' }} />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-[13.5px] font-semibold text-[#111827] transition-transform hover:scale-[1.04] bg-white"
          >
            Let's talk
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`h-[1.5px] w-6 bg-white transition-transform ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`h-[1.5px] w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[1.5px] w-6 bg-white transition-transform ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-2xl px-5 py-4 flex flex-col gap-4 bg-[#111827]/85 border border-white/10 backdrop-blur-xl"
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[15px] font-medium text-white/80">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
