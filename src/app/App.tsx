import { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundCanvas } from './components/BackgroundCanvas';

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-screen bg-bg-primary font-sans text-text-primary selection:bg-accent-violet selection:text-white overflow-hidden">
      {/* Scroll-linked image sequence background */}
      <BackgroundCanvas scrollContainer={scrollRef} />

      <Navbar />
      
      {/* Scroll Snapping Container */}
      <main
        ref={scrollRef}
        className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}