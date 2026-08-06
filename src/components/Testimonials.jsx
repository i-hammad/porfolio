import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/misc';

export default function Testimonials() {
  const trackRef = useRef(null);

  return (
    <section id="testimonials" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="container-edit">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
        >
          <div className="max-w-[560px]">
            <p className="eyebrow mb-4">Notes From Collaborators</p>
            <h2 className="font-display text-[38px] sm:text-[48px] font-semibold leading-[1.05] text-balance">
              What it's like to work together.
            </h2>
          </div>
          <p className="text-[13.5px] text-[color:var(--ink-soft)] font-mono hidden sm:block">← drag to browse →</p>
        </motion.div>
      </div>

      <motion.div ref={trackRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={{ left: -((testimonials.length - 1) * 420), right: 0 }}
          dragElastic={0.12}
          className="flex gap-6 px-6 sm:px-[max(24px,calc((100vw-1360px)/2+64px))]"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="shrink-0 w-[85vw] sm:w-[400px] rounded-[var(--radius-lg)] card-glass p-8 select-none"
              style={{ boxShadow: '0 20px 60px rgba(17,24,39,0.06)' }}
            >
              <Quote size={26} style={{ color: 'var(--accent)' }} className="mb-5" />
              <p className="text-[16px] leading-relaxed text-[color:var(--ink)]">{t.quote}</p>
              <div className="mt-7 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center font-display font-semibold text-white text-[14px]"
                  style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent-2))' }}
                >
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-[14px] font-semibold">{t.name}</p>
                  <p className="text-[12.5px] text-[color:var(--ink-soft)]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
