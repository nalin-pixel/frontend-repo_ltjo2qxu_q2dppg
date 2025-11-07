import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceProjects from './components/ExperienceProjects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <div id="skills" className="relative">
          <About />
        </div>
        <ExperienceProjects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/90 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Uday Pankhaniya. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
