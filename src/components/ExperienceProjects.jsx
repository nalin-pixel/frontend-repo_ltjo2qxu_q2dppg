import React, { useMemo } from 'react';
import { Briefcase, Rocket, Award, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function diffLabel(from, to = new Date()) {
  const start = new Date(from.getFullYear(), from.getMonth(), 1);
  const now = new Date(to.getFullYear(), to.getMonth(), 1);
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return `${years} year${years !== 1 ? 's' : ''} ${rem} month${rem !== 1 ? 's' : ''}`;
}

export default function ExperienceProjects() {
  const teknikforceDuration = useMemo(() => diffLabel(new Date(2024, 0, 1)), []);
  const xpertlabDuration = useMemo(() => diffLabel(new Date(2021, 8, 1), new Date(2023, 11, 31)), []);

  return (
    <section id="experience" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2"><Briefcase size={22}/> Experience</h3>
            <div className="mt-6 space-y-4">
              <ExpCard
                role="Full Stack Developer"
                company="Teknikforce Ventures LLC (Sharjah, UAE)"
                period={`2024–Present • ${teknikforceDuration}`}
                points={[
                  'Built SaaS automation platforms using OpenAI, Pinecone, AWS (S3, Lambda).',
                  'Optimized Node.js APIs and React frontends for performance and scalability.',
                ]}
              />
              <ExpCard
                role="Full Stack Developer"
                company="XpertLab Technology Pvt. Ltd."
                period={`2021–2024 • ${xpertlabDuration}`}
                points={[
                  'Developed SaaS systems, backend APIs, and cloud deployments across AWS/Azure.',
                  'Led feature delivery with CI/CD and containerized services.',
                ]}
              />
            </div>

            <h3 id="projects" className="mt-12 text-2xl font-semibold text-white flex items-center gap-2"><Rocket size={22}/> Projects</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 text-white">
              <Award size={22} />
              <h3 className="text-2xl font-semibold">Achievements</h3>
            </div>
            <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
              <ConfettiInView />
              <AchieveCard title="Blogger of the Year (2023)" subtitle="Recognized for technical writing" tone="gold" />
              <AchieveCard title="Best Rapper (2022)" subtitle="Awarded for creativity and confidence" tone="silver" />
            </div>

            <h3 className="mt-12 text-2xl font-semibold text-white flex items-center gap-2"><Calendar size={20}/> Education</h3>
            <div className="mt-6 space-y-4">
              <Edu title="BCA" org="Dr. Subhash Technical Campus" period="2019–2022" />
              <Edu title="HSC" org="Oxford Science School" period="2016–2018" />
              <Edu title="SSC" org="Shri Vivekananda School" period="2012–2016" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExpCard({ role, company, period, points }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-4 backdrop-blur">
      <div className="flex items-center justify-between text-white/80">
        <p className="font-medium text-white">{role}</p>
        <span className="inline-flex items-center gap-1 text-xs"><Clock size={14}/> {period}</span>
      </div>
      <p className="mt-1 text-sm text-white/70">{company}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
        {points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
    </div>
  );
}

const projects = [
  {
    title: 'PeopleBots',
    desc: 'AI automation & chatbot SaaS with OpenAI, Pinecone, AWS S3.',
    stack: ['React.js', 'PHP', 'OpenAI', 'Pinecone', 'S3'],
  },
  {
    title: 'Funnels Suite',
    desc: 'CloudFunnels, CourseFunnels, ShopFunnels — modular SaaS ecosystem.',
    stack: ['React', 'PHP', 'MySQL', 'Stripe'],
  },
  {
    title: 'DPR (Digital Paint Report)',
    desc: 'AI corrosion detection app running on Docker + Azure Storage.',
    stack: ['Python', 'Docker', 'Azure'],
  },
  {
    title: 'DAWN Platform',
    desc: 'React Native + Node.js app with HLS streaming.',
    stack: ['React Native', 'Node.js', 'HLS'],
  },
  {
    title: 'eServSol',
    desc: 'Django REST backend on AWS for location-based matching.',
    stack: ['Django REST', 'AWS', 'PostgreSQL'],
  },
];

function ProjectCard({ title, desc, stack }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 transition hover:border-cyan-400/30"
    >
      <p className="font-medium text-white group-hover:text-cyan-300">{title}</p>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack?.map((s) => (
          <span key={s} className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] text-white/70">{s}</span>
        ))}
      </div>
    </motion.div>
  );
}

function AchieveCard({ title, subtitle, tone = 'gold' }) {
  const toneClasses = tone === 'gold'
    ? 'from-yellow-500/20 to-amber-500/10 border-yellow-500/20'
    : 'from-slate-300/15 to-slate-100/5 border-slate-300/20';
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className={`rounded-2xl border ${toneClasses} bg-gradient-to-br p-5 text-white/90 backdrop-blur`}
    >
      <p className="text-white font-medium">{title}</p>
      <p className="text-sm text-white/70">{subtitle}</p>
    </motion.div>
  );
}

function Edu({ title, org, period }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
      <div className="flex items-center justify-between">
        <p className="font-medium text-white">{title}</p>
        <span className="text-xs">{period}</span>
      </div>
      <p className="text-sm text-white/70">{org}</p>
    </div>
  );
}

function ConfettiInView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      className="pointer-events-none absolute inset-0"
    >
      <div className="absolute -top-6 left-6 h-2 w-2 rounded-full bg-cyan-400/70 blur-[1px] animate-bounce [animation-duration:1800ms]" />
      <div className="absolute -top-3 right-10 h-1.5 w-1.5 rounded-full bg-fuchsia-400/70 blur-[1px] animate-bounce [animation-duration:1600ms]" />
      <div className="absolute top-10 left-1/3 h-1.5 w-1.5 rounded-full bg-indigo-400/70 blur-[1px] animate-bounce [animation-duration:1400ms]" />
    </motion.div>
  );
}
