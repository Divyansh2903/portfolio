import { motion } from 'framer-motion';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { fadeUpItem, sectionViewport } from './lib/motion';

function App() {
  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-foreground selection:text-background">
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-5 pb-14 pt-2 md:gap-12 md:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />

        <motion.footer
          variants={fadeUpItem}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="border-t border-neutral-200 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400"
        >
          <p>© {new Date().getFullYear()} divyansh singh</p>
        </motion.footer>
      </main>
    </div>
  );
}

export default App;
