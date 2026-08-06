import CursorSpotlight from './components/CursorSpotlight';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import HorizontalShowcase from './components/HorizontalShowcase';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorSpotlight />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <HorizontalShowcase />
        <Projects />
        <Experience />
        <Stats />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
