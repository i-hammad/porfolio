export const experience = [
  {
    company: 'Northwind Labs',
    role: 'Senior Frontend Engineer',
    period: '2023 — Present',
    summary: 'Leading frontend architecture for the core product suite, mentoring three engineers, and owning the design system.',
    points: [
      'Cut median page load by 61% through route-level code splitting and image pipeline rework',
      'Introduced an event-bus loading architecture adopted across 6 product surfaces',
      'Ran weekly design-engineering pairing sessions to close the handoff gap',
    ],
  },
  {
    company: 'Fieldnote',
    role: 'Frontend Engineer',
    period: '2021 — 2023',
    summary: 'Owned the offline-first web app end to end, from architecture to shipped feature.',
    points: [
      'Built a conflict-free sync engine for spotty-connectivity field use',
      'Migrated the codebase from CRA to Vite, cutting cold builds from 48s to 6s',
    ],
  },
  {
    company: 'Studio Halcyon',
    role: 'Frontend Developer',
    period: '2020 — 2021',
    summary: 'Built marketing and product sites for early-stage startups in a fast-paced agency environment.',
    points: [
      'Delivered 14 client sites with hand-built animation systems, zero templates',
      'Introduced a shared component kit that cut new-project setup from days to hours',
    ],
  },
];

export const stack = {
  Frontend: ['React', 'Next.js', 'Nuxt', 'TypeScript', 'Tailwind CSS'],
  State: ['Zustand', 'Pinia', 'TanStack Query'],
  Motion: ['Framer Motion', 'GSAP', 'Lenis'],
  Tooling: ['Vite', 'Storybook', 'Playwright', 'Turborepo'],
  Deploy: ['Vercel', 'Docker', 'GitHub Actions'],
};

export const stats = [
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 50, suffix: '+', label: 'Projects shipped' },
  { value: 100, suffix: '%', label: 'Responsive, always' },
  { value: 20, suffix: '+', label: 'Happy clients' },
];

export const testimonials = [
  {
    quote: "Hammad turned a messy, three-team spec into an interface that felt inevitable. Reconciliation went from a dreaded weekly chore to something our analysts open on purpose.",
    name: 'Sara Klein',
    role: 'VP Product, Ledgerline',
  },
  {
    quote: "The offline sync work quietly saved us from a field-ops disaster. It just works, even where our own team assumed it couldn't.",
    name: 'Marcus Oduya',
    role: 'Eng Lead, Fieldnote',
  },
  {
    quote: "Our design system finally feels like one system. Eleven teams shipping consistent, accessible UI without a single Slack fire.",
    name: 'Priya Nathan',
    role: 'Design Director, Northwind Labs',
  },
  {
    quote: "Rare mix of taste and rigor — he'll push back on a spec that doesn't serve the user, then ship the better version the same week.",
    name: 'Diego Fuentes',
    role: 'CTO, Studio Halcyon',
  },
];
