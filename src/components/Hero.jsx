import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/95" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(0,255,255,0.15),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-black/40 px-3 py-1 text-xs text-cyan-300/90 shadow-[0_0_40px_rgba(0,255,255,0.15)]">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Available for interesting opportunities
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Uday Pankhaniya
          </h1>
          <h2 className="mt-2 bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-2xl font-medium text-transparent sm:text-3xl">
            Full Stack Developer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            Building scalable SaaS platforms and automation tools with React, Node.js, and cloud technologies.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="rounded-xl bg-cyan-500/90 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-400"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
