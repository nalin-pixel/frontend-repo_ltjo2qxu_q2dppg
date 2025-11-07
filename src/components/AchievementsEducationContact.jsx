import React, { useState } from 'react';
import { Mail, Send, Award, GraduationCap } from 'lucide-react';

const Achievement = ({ title, year, org }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
    <div className="flex items-center gap-2 text-white"><Award size={16} className="text-cyan-400"/> {title}</div>
    <p className="text-xs text-white/60">{year} – {org}</p>
  </div>
);

const Edu = ({ degree, place, years }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
    <div className="flex items-center gap-2 text-white"><GraduationCap size={16} className="text-cyan-400"/> {degree}</div>
    <p className="text-xs text-white/60">{place} — {years}</p>
  </div>
);

export default function AchievementsEducationContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    const emailValid = /.+@.+\..+/.test(form.email);
    if (!form.name || !emailValid || form.message.length < 10) {
      setStatus('Please fill all fields correctly.');
      return;
    }

    try {
      const mailto = `mailto:udaypankhaniya7@gmail.com?subject=${encodeURIComponent('Portfolio Contact from ' + form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' <' + form.email + '>')}`;
      window.location.href = mailto;
      setStatus('Opening your email app...');
    } catch (err) {
      setStatus('Unable to open email client. Please write to udaypankhaniya7@gmail.com');
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Achievements</h2>
            <div className="space-y-3">
              <Achievement title="Blogger of the Year" year="2023" org="XpertLab" />
              <Achievement title="Best Rapper" year="2022" org="XpertLab" />
            </div>
            <h2 className="text-2xl font-semibold my-6">Education</h2>
            <div className="space-y-3">
              <Edu degree="BCA" place="Dr. Subhash Technical Campus, Junagadh" years="2019–2022" />
              <Edu degree="HSC" place="Oxford Science School, Keshod" years="2016–2018" />
              <Edu degree="SSC" place="Shri Vivekananda School, Mangrol" years="2012–2016" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <div>
                <label className="block text-xs text-white/60 mb-1">Name</label>
                <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full rounded-xl bg-black border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs text-white/60 mb-1">Email</label>
                <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="w-full rounded-xl bg-black border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-xs text-white/60 mb-1">Message</label>
                <textarea rows={4} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="w-full rounded-xl bg-black border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60" placeholder="Hi Uday, I would like to discuss..." />
              </div>
              {status && <p className="text-xs text-white/70">{status}</p>}
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-400 transition">
                <Send size={16}/> Send Message
              </button>
              <div className="text-sm text-white/70 mt-4 flex flex-col gap-1">
                <p className="flex items-center gap-2"><Mail size={16} className="text-cyan-400"/> udaypankhaniya7@gmail.com</p>
              </div>
            </form>
          </div>
        </div>
        <p className="text-center text-xs text-white/50 mt-10">© {new Date().getFullYear()} Uday Pankhaniya. Built with React.</p>
      </div>
    </section>
  );
}
