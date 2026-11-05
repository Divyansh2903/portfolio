import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';

function App() {
  return (
    <main className="mx-auto max-w-[40rem] px-6 py-8 text-body text-foreground sm:px-8 sm:py-12">
      <Header />
      <div className="mt-12 flex flex-col gap-12 sm:mt-16 sm:gap-16">
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

export default App;
