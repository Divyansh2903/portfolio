import { SectionHeader } from './SectionHeader';

const experiences = [
  {
    company: 'Sniphat',
    role: 'Software Development Engineer Intern',
    date: 'Jan 2024 – Oct 2024',
    location: 'Bangalore, India',
    impact: [
      'Reduced app loading time from ~7–8 seconds to 0.6 seconds.',
      'Shipped feature work in a fast-paced team; focused on performance and product iteration.',
    ],
  },
  {
    company: 'Pixelotech',
    role: 'Software Development Engineer Intern',
    date: 'Aug 2022 – Dec 2022',
    location: 'Vadodara, India',
    impact: [
      'Refactored and modernized a legacy codebase.',
      'Integrated multiple APIs and worked with PM + team to hit milestones.',
    ],
  },
  {
    company: 'The Bigger Stories',
    role: 'iOS Intern',
    date: 'Jun 2022 – Aug 2022',
    location: 'New Delhi, India',
    impact: [
      'Built responsive UI across devices; aligned with App Store guidelines.',
      'Got the app reviewed, approved, and deployed.',
    ],
  },
];

export function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <SectionHeader title="Experience" />
      <h2 id="experience-heading" className="sr-only">
        Experience
      </h2>
      <div className="space-y-14">
        {experiences.map((exp) => (
          <article key={exp.company} className="max-w-2xl">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-mono text-[15px] font-medium lowercase text-foreground">
                {exp.company}
              </h3>
              <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-neutral-400">{exp.date}</p>
            </div>
            <p className="mt-1 font-mono text-[13px] lowercase text-neutral-500">
              {exp.role} · {exp.location}
            </p>
            <ul className="mt-4 space-y-2 font-mono text-[14px] leading-[1.6] text-neutral-600 lowercase">
              {exp.impact.map((point) => (
                <li key={point}>— {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
