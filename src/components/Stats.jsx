import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { stats } from '../data/misc';

function Stat({ s }) {
  const { ref, value } = useCountUp(s.value);
  return (
    <div ref={ref}>
      <p className="font-display text-[56px] sm:text-[72px] font-semibold leading-none" style={{ color: 'var(--accent)' }}>
        {value}{s.suffix}
      </p>
      <p className="mt-3 text-[14.5px] text-[color:var(--ink-soft)]">{s.label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 lg:py-32 border-y border-[color:var(--line)]">
      <div className="container-edit">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Stat s={s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
