import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

const CODE_LINES = [
  { t: 'export function ', a: 'Experience', b: '() {' },
  { t: '  const [', a: 'craft', b: ', setCraft] = useState(true)' },
  { t: '  return ', a: '<Delight ', b: 'obsessive />' },
  { t: '}' },
];

function FloatingWindow({ className, delay, parallaxX, parallaxY }) {
  return (
    <motion.div
      style={{ x: parallaxX, y: parallaxY }}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`animate-float absolute card-glass-dark rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[10.5px] text-white/40">component.tsx</span>
      </div>
      <div className="px-4 py-3.5 font-mono text-[12px] leading-relaxed">
        {CODE_LINES.map((l, i) => (
          <div key={i} className="whitespace-pre text-white/50">
            {l.t}
            {l.a && <span style={{ color: '#a5b4fc' }}>{l.a}</span>}
            {l.b}
          </div>
        ))}
        <span className="text-white/50 animate-blink">▍</span>
      </div>
    </motion.div>
  );
}

function GitCard({ className, delay, parallaxX, parallaxY }) {
  return (
    <motion.div
      style={{ x: parallaxX, y: parallaxY }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`animate-float absolute card-glass-dark rounded-2xl px-4 py-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full" style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent-2))' }} />
        <div>
          <p className="font-mono text-[11px] text-white/85">fix(nav): magnetic hover jitter</p>
          <p className="font-mono text-[10px] text-white/35">4a9f21c · main</p>
        </div>
      </div>
    </motion.div>
  );
}

function DeployCard({ className, delay, parallaxX, parallaxY }) {
  return (
    <motion.div
      style={{ x: parallaxX, y: parallaxY }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`animate-float absolute card-glass-dark rounded-2xl px-4 py-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="flex items-center justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] text-white/35 mb-1">DEPLOY</p>
          <p className="font-mono text-[11.5px] text-white/85">Production · Ready</p>
        </div>
        <span className="h-2 w-2 rounded-full" style={{ background: 'var(--success)', boxShadow: '0 0 0 4px rgba(34,197,94,0.18)' }} />
      </div>
    </motion.div>
  );
}

function MetricCard({ className, delay, parallaxX, parallaxY }) {
  return (
    <motion.div
      style={{ x: parallaxX, y: parallaxY }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`animate-float absolute card-glass-dark rounded-2xl px-4 py-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`}
    >
      <p className="font-mono text-[10px] text-white/35 mb-1">LIGHTHOUSE</p>
      <div className="flex items-end gap-1.5">
        <span className="font-display text-[26px] font-semibold text-white leading-none">99</span>
        <span className="mb-0.5 font-mono text-[10px]" style={{ color: 'var(--success)' }}>perf</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const sx = useSpring(mvX, { stiffness: 60, damping: 20 });
  const sy = useSpring(mvY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mvX.set(((e.clientX / innerWidth) - 0.5) * 30);
      mvY.set(((e.clientY / innerHeight) - 0.5) * 30);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mvX, mvY]);

  const viewBtn = useMagnetic(0.3);
  const resumeBtn = useMagnetic(0.3);
  const [typed, setTyped] = useState('');
  const full = 'Crafting modern digital experiences with code.';

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      data-spotlight="dark"
      className="relative min-h-[100svh] overflow-hidden pt-32 pb-24"
      style={{ background: 'var(--canvas)' }}
    >
      {/* mesh gradient background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full blur-[110px] opacity-40"
          style={{ background: 'var(--accent)' }}
        />
        <div
          className="absolute top-10 right-[-120px] h-[480px] w-[480px] rounded-full blur-[110px] opacity-30"
          style={{ background: 'var(--accent-2)' }}
        />
        <div
          className="absolute bottom-[-160px] left-1/3 h-[420px] w-[420px] rounded-full blur-[120px] opacity-20"
          style={{ background: '#22C55E' }}
        />
        <div className="noise" />
      </div>

      <div className="container-edit relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div style={{ y: headlineY, opacity: fade }} className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="eyebrow mb-6 flex items-center gap-2 text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--success)' }} />
              Senior Frontend Engineer · Available for select work
            </motion.p>

            <h1 className="font-display text-balance text-white text-[13vw] leading-[0.98] tracking-tight sm:text-[64px] lg:text-[76px] font-semibold min-h-[1.05em]">
              {typed}
              <span className="animate-blink" style={{ color: 'var(--accent-2)' }}>|</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-7 max-w-[520px] text-[17px] leading-relaxed text-white/60"
            >
              I'm Hammad — I design and build interfaces where every pixel, transition,
              and millisecond of load time is a deliberate decision. Five years turning
              ambitious product briefs into fast, accessible, unmistakably crafted software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                ref={viewBtn.ref}
                onMouseMove={viewBtn.onMouseMove}
                onMouseLeave={viewBtn.onMouseLeave}
                href="#work"
                className="rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-[color:var(--canvas)] transition-transform"
                style={{ background: 'white', transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
              >
                View Work
              </a>
              <a
                ref={resumeBtn.ref}
                onMouseMove={resumeBtn.onMouseMove}
                onMouseLeave={resumeBtn.onMouseLeave}
                href="/resume.pdf"
                className="rounded-full border border-white/20 px-7 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Floating composition */}
          <motion.div
            style={{ y: sceneY, scale: sceneScale }}
            className="relative hidden lg:block lg:col-span-5 h-[520px]"
          >
            <motion.div style={{ x: sx, y: sy }} className="absolute inset-0">
              <FloatingWindow className="w-[300px] top-2 left-0" delay={0.3} />
              <GitCard className="w-[230px] top-[210px] left-[190px]" delay={0.55} />
              <DeployCard className="w-[210px] top-[340px] left-[10px]" delay={0.75} />
              <MetricCard className="w-[150px] top-[80px] left-[280px]" delay={0.95} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <div className="h-9 w-[1px] bg-white/25 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 h-1/2 w-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
