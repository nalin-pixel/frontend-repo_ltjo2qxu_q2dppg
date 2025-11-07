import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => handleClick('home')} className="text-white font-semibold tracking-tight">
              <span className="text-cyan-400">Uday</span> Pankhaniya
            </button>
            <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
            <ul className="hidden md:flex items-center gap-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleClick(s.id)}
                    className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                      active === s.id
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {open && (
            <ul className="md:hidden px-2 pb-3 space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleClick(s.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                      active === s.id ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
