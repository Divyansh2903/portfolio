import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';

function App() {
  return (
    <main className="mx-auto max-w-[40rem] px-6 pb-24 pt-16 text-[15px] leading-[1.65] text-foreground sm:px-8 sm:pt-24">
      <Header />
      <div className="mt-16 flex flex-col gap-16">
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

export default App;
