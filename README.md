# Hammad — Portfolio

A cinematic, award-worthy portfolio site built with React, Vite, Tailwind CSS v4, and Framer Motion.

## What's inside

- **Hero** — layered parallax composition (floating code window, git commit card, deploy card, metric card), typewriter headline, mesh gradient background, mouse parallax, scroll-based fade.
- **Projects** — three cinematic case studies with sticky-feel image parallax, alternating layout, challenge/solution copy, tech pills.
- **Experience** — animated vertical timeline, expand-on-click company cards.
- **Tech stack** — grouped floating chip categories.
- **Stats** — large animated count-up numbers.
- **Testimonials** — drag/swipe glassmorphism carousel.
- **Contact** — animated form with magnetic submit button.
- Global chrome: scroll progress bar, cursor spotlight (desktop only, dark sections), magnetic buttons, reduced-motion support.

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Notes

- Colors, radii, and fonts are defined as CSS variables in `src/index.css` — change the palette there.
- Replace `/resume.pdf` in `public/` with a real resume file (the Hero's "Download Resume" button links to it).
- Project, experience, tech-stack, testimonial, and stat content lives in `src/data/` — edit those files to swap in your real work.
- Social links in `Footer.jsx` are placeholders (`href="#"`) — point them at your real profiles.
- Brand icons (GitHub/LinkedIn/X) are hand-rolled SVGs in `src/components/SocialIcons.jsx` since recent `lucide-react` versions dropped brand icons.
