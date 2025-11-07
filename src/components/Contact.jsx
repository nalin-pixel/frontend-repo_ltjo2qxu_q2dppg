import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    // simple frontend validation
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      // In a real deployment, wire this to a backend email service.
      // For now, open default mail client as a fallback.
      const subject = encodeURIComponent('Portfolio Contact');
      const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`);
      window.location.href = `mailto:udaypankhaniya7@gmail.com?subject=${subject}&body=${body}`;
      setStatus('Opening your email client...');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">Contact</h3>
            <p className="mt-4 text-white/80">Reach out for collaborations, consulting, or opportunities.</p>
            <div className="mt-6 space-y-3 text-white/80">
              <p className="flex items-center gap-3"><Mail size={18} className="text-cyan-300"/> udaypankhaniya7@gmail.com</p>
              <p className="flex items-center gap-3"><Phone size={18} className="text-cyan-300"/> +91 7096814018</p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Your name" />
                </Field>
                <Field label="Email">
                  <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="you@example.com" />
                </Field>
              </div>
              <Field label="Message" className="mt-4">
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="How can I help?" />
              </Field>
              <div className="mt-4 flex items-center gap-3">
                <button type="submit" className="rounded-xl bg-cyan-500/90 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-400">Send Message</button>
                {status && <span className="text-sm text-white/70">{status}</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-white/60">{label}</span>
      {children}
    </label>
  );
}
