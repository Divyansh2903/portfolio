import { About } from './components/About';
import { Experience } from './components/Experience';
import { FloatingDock } from './components/FloatingDock';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200 selection:bg-foreground selection:text-background">
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-5 pb-32 pt-2 md:gap-12 md:px-8 md:pb-36">
        <Hero />
        <About />
        <Experience />
        <Projects />

        <Footer />
      </main>

      <FloatingDock />
    </div>
  );
}

export default App;
