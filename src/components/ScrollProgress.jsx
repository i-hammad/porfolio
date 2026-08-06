import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
      aria-hidden="true"
    >
      <div className="h-full w-full" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} />
    </motion.div>
  );
}
