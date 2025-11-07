import React from 'react';

const SkillGroup = ({ title, items }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <h4 className="font-medium text-white mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="inline-flex items-center rounded-lg border border-white/10 bg-black px-3 py-1 text-xs text-white/80">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SkillGroup title="Frontend" items={[
            'React.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'JavaScript (ES6+)'
          ]} />
          <SkillGroup title="Backend" items={[
            'Node.js (Express)', 'Laravel', 'CodeIgniter', 'Django REST Framework'
          ]} />
          <SkillGroup title="Database" items={[
            'MySQL', 'PostgreSQL', 'Firebase', 'Prisma', 'Sequelize'
          ]} />
          <SkillGroup title="Cloud & DevOps" items={[
            'AWS (EC2, S3, Lambda)', 'Azure', 'GCP (Cloud Run, Cloud SQL)', 'Docker'
          ]} />
          <SkillGroup title="Integrations & Tools" items={[
            'PayPal', 'Stripe', 'Razorpay', 'FFmpeg', 'OpenAI', 'Pinecone', 'Pusher.js'
          ]} />
        </div>
      </div>
    </section>
  );
}
