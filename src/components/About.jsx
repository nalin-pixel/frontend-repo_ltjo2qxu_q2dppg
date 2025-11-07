import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">About</h3>
            <p className="mt-4 text-white/80 leading-relaxed">
              Uday is a Full Stack Developer currently working at Teknikforce Ventures LLC (Sharjah, UAE) with over 3.6 years of experience designing, developing, and deploying scalable web applications and APIs. Skilled in PHP (Laravel, CodeIgniter), Node.js (Express.js), Python (Django), and frontend frameworks like React and Redux. Experienced with AWS, Azure, and Google Cloud for cloud infrastructure, Docker containerization, CI/CD pipelines, and microservices.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Info icon={MapPin} label="Location" value="Mangrol, Junagadh, India" />
              <Info icon={Mail} label="Email" value="udaypankhaniya7@gmail.com" href="mailto:udaypankhaniya7@gmail.com" />
              <Info icon={Phone} label="Phone" value="+91 7096814018" href="tel:+917096814018" />
              <div className="flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <Globe size={18} /> Portfolio
                </a>
              </div>
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
        </div>
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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-medium text-white/90">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
