import { Section } from './Section';

const experiences: Array<{
  company: string;
  formerly?: string;
  url?: string;
  role: string;
  date: string;
  location: string;
  impact: string[];
  tech: string[];
}> = [
  {
    company: 'Fensory',
    url: 'https://fensory.com',
    role: 'Full Stack Engineer',
    date: 'Apr 2026 – Present',
    location: 'Remote',
    impact: [
      'Built the Fensory mobile application using Expo / React Native, developed its backend with NestJS.',
      'Shipped the Fensory app to the Seeker dApp Store.',
      'Owned the development, launch, and ongoing maintenance of Fensory’s trading MCP server.',
      '31+ merged PRs to the core backend repository.',
    ],
    tech: ['Expo', 'React Native', 'NestJS', 'Fastify', 'Supabase'],
  },
  {
    company: 'GuideUs',
    formerly: 'Sniphat',
    url: 'https://www.guideus.in/',
    role: 'Software Development Engineer Intern',
    date: 'Jan 2024 – Oct 2024',
    location: 'Bangalore, India',
    impact: [
      'Reduced app loading time from ~7–8 seconds to 0.6 seconds.',
      'Shipped feature work in a fast-paced team; focused on performance and product iteration.',
    ],
    tech: ['Flutter', 'Firebase', 'MongoDB', 'TypeScript', 'Node.js'],
  },
  {
    company: 'Pixelotech',
    url: 'https://pixelotech.com/',
    role: 'Software Development Engineer Intern',
    date: 'Aug 2022 – Dec 2022',
    location: 'Remote',
    impact: [
      'Refactored and modernized a legacy codebase.',
      'Delivered features across 2 client projects, integrating multiple APIs and collaborating with cross-functional teams.',
    ],
    tech: ['Flutter', 'REST APIs'],
  },
  {
    company: 'The Bigger Stories',
    role: 'iOS Intern',
    date: 'Jun 2022 – Aug 2022',
    location: 'Remote',
    impact: [
      'Built responsive UI across devices.',
      'Aligned the app with App Store Review Guidelines and resolved compliance issues.',
    ],
    tech: ['iOS', 'Flutter'],
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <li key={exp.company}>
            {/* Company and date always share the first line. On phones the role moves to its own
                line underneath, so the date never jumps around. */}
            <div className="flex items-baseline justify-between gap-x-4">
              <h3 className="min-w-0 font-normal">
                <span className="text-foreground">
                  {exp.url ? (
                    <a className="hit" href={exp.url} target="_blank" rel="noreferrer">
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </span>
                <span className="hidden text-muted sm:inline"> · {exp.role}</span>
              </h3>
              <p className="shrink-0 text-detail text-faint tabular-nums">{exp.date}</p>
            </div>
            <p className="mt-1 text-detail text-muted sm:hidden">{exp.role}</p>

            <ul className="mt-2 flex flex-col gap-1 text-detail text-muted">
              {exp.impact.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden className="select-none text-faint">
                    –
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-2 text-meta text-faint">
              {exp.formerly ? `Formerly ${exp.formerly} · ` : null}{exp.location} · {exp.tech.join(', ')}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
