import { SectionHeader } from './SectionHeader';

const projects = [
  {
    title: 'Electricity Billing System',
    tech: 'React, Node, PostgreSQL, Prisma, Gemini, Razorpay, Web3',
    impact: [
      'Full-stack billing platform for campus; migrated from MERN to PostgreSQL + Prisma.',
      'Gemini Vision for meter readings from photos; Razorpay + crypto payments.',
    ],
  },
  {
    title: 'Encore Medlabs',
    tech: 'Flutter, Firebase, Cloud Functions',
    impact: [
      'Cross-platform app with auth + Firestore; MVC + Provider.',
      'Vendor app for orders and offers; tuned performance across devices.',
    ],
  },
  {
    title: 'Naya Bharat',
    tech: 'Flutter, Firebase',
    impact: ['Offers & partnerships app with real-time Firebase data; shipped production-ready.'],
  },
];

export function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <SectionHeader title="Projects" />
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>
      <div className="space-y-14">
        {projects.map((project) => (
          <article key={project.title} className="max-w-2xl">
            <h3 className="font-mono text-[15px] font-medium lowercase text-foreground">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.08em] text-neutral-400">
              {project.tech}
            </p>
            <ul className="mt-4 space-y-2 font-mono text-[14px] leading-[1.6] text-neutral-600 lowercase">
              {project.impact.map((point) => (
                <li key={point}>— {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
