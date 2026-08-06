import { motion } from 'framer-motion';
import { stack } from '../data/misc';

export default function TechStack() {
  return (
    <section id="stack" className="relative py-28 lg:py-36">
      <div className="container-edit">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-[600px] mb-16"
        >
          <p className="eyebrow mb-4">Tech Ecosystem</p>
          <h2 className="font-display text-[38px] sm:text-[48px] font-semibold leading-[1.05] text-balance">
            The tools I reach for, grouped by what they're for.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(stack).map(([category, tools], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-[var(--radius-md)] border border-[color:var(--line)] p-6 bg-white transition-shadow hover:shadow-[0_20px_50px_rgba(17,24,39,0.08)]"
            >
              <p className="font-mono text-[11.5px] mb-4" style={{ color: 'var(--accent)' }}>// {category.toLowerCase()}</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="text-[13px] font-medium rounded-full border border-[color:var(--line)] px-3 py-1.5 transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
