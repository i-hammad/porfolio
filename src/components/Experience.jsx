import { useState } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/misc';

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" data-spotlight="dark" className="relative py-28 lg:py-36" style={{ background: 'var(--canvas)' }}>
      <div className="noise" aria-hidden="true" />
      <div className="container-edit relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-[600px] mb-16"
        >
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="font-display text-white text-[38px] sm:text-[48px] font-semibold leading-[1.05] text-balance">
            Five years, three teams, one obsession with craft.
          </h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-[3px] sm:left-[7px] top-2 bottom-2 w-[1.5px] bg-white/10">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="origin-top h-full w-full"
              style={{ background: 'linear-gradient(180deg, var(--accent), var(--accent-2))' }}
            />
          </div>

          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative mb-3"
            >
              <span
                className="absolute -left-8 sm:-left-12 top-6 h-[9px] w-[9px] rounded-full"
                style={{ background: 'var(--accent-2)', boxShadow: '0 0 0 4px rgba(99,102,241,0.15)' }}
              />
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left rounded-2xl px-5 sm:px-7 py-6 card-glass-dark transition-colors hover:bg-white/[0.07]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-white text-[22px] font-semibold">{e.company}</h3>
                  <span className="font-mono text-[12px] text-white/40">{e.period}</span>
                </div>
                <p className="mt-1 text-[14.5px]" style={{ color: 'var(--accent-2)' }}>{e.role}</p>
                <p className="mt-3 text-[14.5px] text-white/55 leading-relaxed max-w-[560px]">{e.summary}</p>

                <motion.div
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2 pt-4 border-t border-white/10">
                    {e.points.map((p) => (
                      <li key={p} className="text-[13.5px] text-white/50 flex gap-2.5">
                        <span className="mt-2 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
