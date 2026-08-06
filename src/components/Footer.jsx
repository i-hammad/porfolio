import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './SocialIcons';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-10 border-t border-[color:var(--line)]" style={{ background: 'var(--canvas)' }}>
      <div className="container-edit flex flex-wrap items-center justify-between gap-6">
        <p className="font-mono text-[12.5px] text-white/40">© {new Date().getFullYear()} Hammad — built with React & Framer Motion</p>

        <div className="flex items-center gap-5">
          <a href="#" aria-label="GitHub" className="text-white/50 hover:text-white transition-colors"><GithubIcon size={17} /></a>
          <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors"><LinkedinIcon size={17} /></a>
          <a href="#" aria-label="Twitter" className="text-white/50 hover:text-white transition-colors"><XIcon size={17} /></a>

          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="ml-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-1 hover:text-white hover:border-white/30"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
