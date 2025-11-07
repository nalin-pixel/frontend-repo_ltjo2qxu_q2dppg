import React from 'react';
import { Briefcase, Rocket, Award } from 'lucide-react';

export default function ExperienceProjects() {
  return (
    <section id="experience" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2"><Briefcase size={22}/> Experience</h3>
            <div className="mt-6 space-y-4">
              <ExpCard
                role="Full Stack Developer"
                company="Teknikforce Ventures LLC"
                period="2024–Present"
                points={[
                  'Built scalable automation and chatbot SaaS using OpenAI, Pinecone, and AWS.',
                ]}
              />
              <ExpCard
                role="Full Stack Developer"
                company="XpertLab Technology Pvt. Ltd."
                period="2021–2024"
                points={[
                  'Delivered multiple SaaS products, backend systems, and cloud deployments.',
                ]}
              />
            </div>

            <h3 id="projects" className="mt-12 text-2xl font-semibold text-white flex items-center gap-2"><Rocket size={22}/> Projects</h3>
            <div className="mt-6 grid gap-4">
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2"><Award size={22}/> Achievements</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <AchieveCard title="Blogger of the Year (2023)" org="XpertLab" />
              <AchieveCard title="Best Rapper (2022)" org="XpertLab" />
            </div>

            <h3 className="mt-12 text-2xl font-semibold text-white">Education</h3>
            <div className="mt-6 space-y-3">
              <Edu title="BCA" org="Dr. Subhash Technical Campus, Junagadh" period="2019–2022" />
              <Edu title="HSC" org="Oxford Science School, Keshod" period="2016–2018" />
              <Edu title="SSC" org="Shri Vivekananda School, Mangrol" period="2012–2016" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpCard({ role, company, period, points }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between text-white/80">
        <p className="font-medium text-white">{role}</p>
        <span className="text-xs">{period}</span>
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
    desc: 'AI-based chatbot platform with Pinecone, OpenAI, and AWS S3 integration.',
  },
  {
    title: 'Funnels Products',
    desc: 'SaaS ecosystem with plugin architecture and responsive redesign.',
  },
  {
    title: 'DPR (Digital Paint Report)',
    desc: 'AI corrosion detection tool, migrated to Docker + Azure Storage.',
  },
  {
    title: 'DAWN Platform',
    desc: 'React Native + Node.js social app with HLS video streaming.',
  },
  {
    title: 'eServSol',
    desc: 'Django REST + AWS-based service provider platform with search and filtering.',
  },
];

function ProjectCard({ title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 transition hover:border-cyan-400/30">
      <p className="font-medium text-white group-hover:text-cyan-300">{title}</p>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  );
}

function AchieveCard({ title, org }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
      <p className="font-medium text-white">{title}</p>
      <p className="text-sm text-white/60">{org}</p>
    </div>
  );
}

function Edu({ title, org, period }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
      <div className="flex items-center justify-between">
        <p className="font-medium text-white">{title}</p>
        <span className="text-xs">{period}</span>
      </div>
      <p className="text-sm text-white/70">{org}</p>
    </div>
  );
}
