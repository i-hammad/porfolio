import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/projects';

function ProjectRow({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.15'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const reverse = index % 2 === 1;

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center py-20 lg:py-28 border-b border-[color:var(--line)]">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}
      >
        <span className="font-mono text-[13px]" style={{ color: project.color }}>{project.id}</span>
        <h3 className="font-display text-[42px] sm:text-[54px] font-semibold leading-[0.98] mt-2 mb-4 text-balance">
          {project.name}
        </h3>
        <p className="text-[17px] text-[color:var(--ink-soft)] leading-relaxed max-w-[440px]">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11.5px] rounded-full border border-[color:var(--line)] px-3 py-1.5 text-[color:var(--ink-soft)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 max-w-[380px]">
          <div>
            <p className="font-display text-[22px] font-semibold" style={{ color: project.color }}>{project.metric.value}</p>
            <p className="text-[12.5px] text-[color:var(--ink-soft)] mt-1">{project.metric.label}</p>
          </div>
          <div>
            <p className="font-display text-[22px] font-semibold">{project.role}</p>
            <p className="text-[12.5px] text-[color:var(--ink-soft)] mt-1">{project.year}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 max-w-[440px]">
          <div>
            <p className="eyebrow mb-1.5">Challenge</p>
            <p className="text-[14.5px] text-[color:var(--ink-soft)] leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <p className="eyebrow mb-1.5">Solution</p>
            <p className="text-[14.5px] text-[color:var(--ink-soft)] leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a href={project.live} className="inline-flex items-center gap-1.5 font-semibold text-[14.5px] group">
            Live demo
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href={project.repo} className="inline-flex items-center gap-1.5 text-[14.5px] text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]">
            <GithubIcon size={15} /> Source
          </a>
        </div>
      </motion.div>

      <motion.div
        style={{ y: imgY }}
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}
      >
        <div
          className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden group cursor-pointer border border-[color:var(--line)]"
          style={{ background: `linear-gradient(155deg, ${project.color}22, ${project.color}05)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.06]">
            <div className="w-[78%] rounded-xl bg-white shadow-[0_30px_60px_rgba(17,24,39,0.14)] overflow-hidden border border-[color:var(--line)]">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[color:var(--line)]">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              </div>
              <div className="p-5 space-y-2.5">
                <div className="h-3 w-2/3 rounded" style={{ background: `${project.color}33` }} />
                <div className="h-2.5 w-full rounded bg-[color:var(--line)]" />
                <div className="h-2.5 w-5/6 rounded bg-[color:var(--line)]" />
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="h-14 rounded-lg" style={{ background: `${project.color}22` }} />
                  <div className="h-14 rounded-lg bg-[color:var(--line)]" />
                  <div className="h-14 rounded-lg bg-[color:var(--line)]" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(0deg, ${project.color}20, transparent 60%)` }} />
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-28 lg:py-36">
      <div className="container-edit">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-[640px] mb-6"
        >
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 className="font-display text-[38px] sm:text-[48px] font-semibold leading-[1.05] text-balance">
            Three products, three very different constraints.
          </h2>
        </motion.div>

        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
