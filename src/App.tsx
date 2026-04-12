import { About } from './components/About';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';

function App() {
  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-foreground selection:text-background">
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-2 md:px-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />

        <footer className="mt-28 border-t border-neutral-200 pt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
          <p>© {new Date().getFullYear()} divyansh singh</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
