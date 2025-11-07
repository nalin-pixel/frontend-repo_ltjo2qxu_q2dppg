import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceProjects from './components/ExperienceProjects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <section id="skills" className="relative">
          <About />
        </section>
        <ExperienceProjects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/90 py-10">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Uday Pankhaniya. Built with React, Tailwind, and love.
        </div>
      </footer>
    </div>
  );
}

export default App;
