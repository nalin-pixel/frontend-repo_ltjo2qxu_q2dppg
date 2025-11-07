import React, { useMemo } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Cloud, CloudDrizzle, Cloudy } from 'lucide-react';
import { motion } from 'framer-motion';

function useExperience(startYear = 2021, startMonth = 8) {
  // startMonth is 0-indexed (0=Jan). September 2021 -> month=8
  return useMemo(() => {
    const start = new Date(startYear, startMonth, 1);
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    if (now.getDate() < start.getDate()) months -= 1;
    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    return { years, months: remMonths, label: `${years} year${years!==1?'s':''} ${remMonths} month${remMonths!==1?'s':''}` };
  }, [startYear, startMonth]);
}

export default function About() {
  const exp = useExperience(2021, 8);

  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-start gap-10 md:grid-cols-2"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white">About</h3>
            <p className="mt-4 text-white/80 leading-relaxed">
              Uday is a Full Stack Developer currently working at Teknikforce Ventures LLC (Sharjah, UAE) with over
              <span className="mx-1 font-medium text-cyan-300">{` ${exp.label} `}</span>
              of experience building scalable web applications and APIs.
              Skilled in backend technologies (PHP, Node.js, Python), frontend frameworks (React, Redux), and cloud infrastructure across AWS, Azure, and Google Cloud.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Info icon={MapPin} label="Location" value="Mangrol, Junagadh, India" />
              <Info icon={Mail} label="Email" value="udaypankhaniya7@gmail.com" href="mailto:udaypankhaniya7@gmail.com" />
              <Info icon={Phone} label="Phone" value="+91 7096814018" href="tel:+917096814018" />
              <div className="flex items-center gap-4">
                <a href="https://github.com/udaypankhaniya" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/uday-pankhaniya" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Cloud icons */}
            <div className="mt-8 flex items-center gap-6 text-white/70">
              <span className="inline-flex items-center gap-2"><Cloud className="text-cyan-300" size={18}/> AWS</span>
              <span className="inline-flex items-center gap-2"><CloudDrizzle className="text-fuchsia-300" size={18}/> Azure</span>
              <span className="inline-flex items-center gap-2"><Cloudy className="text-indigo-300" size={18}/> GCP</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">Skills</h3>
            <div className="mt-6 grid gap-4">
              <SkillGroup title="Frontend" items={['React.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'JavaScript (ES6+)']} />
              <SkillGroup title="Backend" items={['Node.js (Express)', 'Laravel', 'CodeIgniter', 'Django REST Framework']} />
              <SkillGroup title="Database" items={['MySQL', 'PostgreSQL', 'Firebase', 'Prisma', 'Sequelize']} />
              <SkillGroup title="Cloud & DevOps" items={['AWS (EC2, S3, Lambda)', 'Azure', 'GCP (Cloud Run, Cloud SQL)', 'Docker']} />
              <SkillGroup title="Integrations & Tools" items={['PayPal', 'Stripe', 'Razorpay', 'FFmpeg', 'OpenAI', 'Pinecone', 'Pusher.js']} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-3">
      <Icon size={18} className="text-cyan-300" />
      <div>
        <p className="text-xs uppercase tracking-wider text-white/50">{label}</p>
        <p className="text-white/90">{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href} className="hover:opacity-90">{content}</a>;
  return content;
}

function SkillGroup({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
    >
      <p className="text-sm font-medium text-white/90">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
