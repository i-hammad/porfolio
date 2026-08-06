const items = ['React', 'Next.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'GraphQL', 'Zustand', 'Storybook'];

export default function TechMarquee() {
  const row = [...items, ...items];
  return (
    <div className="relative py-6 border-y border-[color:var(--line)] overflow-hidden" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((t, i) => (
          <span key={i} className="font-mono text-[13px] text-[color:var(--ink-soft)] flex items-center gap-3 whitespace-nowrap">
            {t}
            <span className="h-1 w-1 rounded-full" style={{ background: 'var(--accent)' }} />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[color:var(--bg)] to-transparent" />
    </div>
  );
}
