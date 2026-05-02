import { motion } from 'framer-motion';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { FloatingDock } from './components/FloatingDock';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { fadeUpItem, sectionViewport } from './lib/motion';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200 selection:bg-foreground selection:text-background">
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-5 pb-32 pt-2 md:gap-12 md:px-8 md:pb-36">
        <Hero />
        <About />
        <Experience />
        <Projects />

        <motion.footer
          variants={fadeUpItem}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="border-t border-neutral-200 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400 dark:border-neutral-800 dark:text-neutral-500"
        >
          <p>© {new Date().getFullYear()} divyansh singh</p>
        </motion.footer>
      </main>

      <FloatingDock />
    </div>
  );
}

export default App;
