import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const btn = useMagnetic(0.25);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <section id="contact" data-spotlight="dark" className="relative py-28 lg:py-40" style={{ background: 'var(--canvas)' }}>
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full blur-[130px] opacity-25" style={{ background: 'var(--accent)' }} />
        <div className="noise" />
      </div>

      <div className="container-edit relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="font-display text-white text-[42px] sm:text-[56px] font-semibold leading-[1.02] text-balance">
              Have a product worth building well?
            </h2>
            <p className="mt-6 text-[16px] text-white/55 leading-relaxed max-w-[440px]">
              I take on a small number of frontend engagements each quarter — product builds,
              design-system work, or performance rescues. Tell me what you're making.
            </p>
            <a href="mailto:hello@hammad.dev" className="mt-8 inline-flex items-center gap-2 text-white font-semibold text-[16px] group">
              hello@hammad.dev
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 card-glass-dark rounded-[var(--radius-lg)] p-7 sm:p-9"
          >
            <div className="space-y-5">
              <div>
                <label className="font-mono text-[11px] tracking-wider uppercase text-white/40">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-white/15 py-2.5 text-white text-[15px] outline-none focus:border-[color:var(--accent-2)] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] tracking-wider uppercase text-white/40">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-white/15 py-2.5 text-white text-[15px] outline-none focus:border-[color:var(--accent-2)] transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] tracking-wider uppercase text-white/40">Message</label>
                <textarea
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-white/15 py-2.5 text-white text-[15px] outline-none focus:border-[color:var(--accent-2)] transition-colors resize-none"
                  placeholder="What are you building?"
                />
              </div>
            </div>

            <button
              ref={btn.ref}
              onMouseMove={btn.onMouseMove}
              onMouseLeave={btn.onMouseLeave}
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-[color:var(--canvas)] transition-transform"
              style={{ background: sent ? 'var(--success)' : 'white' }}
            >
              {sent ? 'Sent — talk soon' : 'Send message'}
              <Send size={15} className={sent ? '' : 'transition-transform'} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
