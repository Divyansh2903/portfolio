import { motion } from 'framer-motion';
import { fadeUpItem, sectionViewport } from '../lib/motion';
import { simpleIconSrc } from '../lib/simpleIcon';
import { SectionHeader } from './SectionHeader';

type Tech = { slug: string; label: string };

const experiences: Array<{
  company: string;
  role: string;
  date: string;
  location: string;
  impact: string[];
  tech: Tech[];
}> = [
  {
    company: 'Fensory',
    role: 'Full Stack Engineering Intern',
    date: 'Apr 2026 – Present',
    location: 'Remote',
    impact: [
      'Built the Fensory mobile application using Expo / React Native, developed its backend with NestJS.',
      'Shipped the Fensory app to the Seeker dApp Store.',
      '13+ merged PRs to the core backend repository',
      'Developing the Trading MCP along with the core backend',
    ],
    tech: [
      { slug: 'expo', label: 'EXPO' },
      { slug: 'reactnative', label: 'REACT NATIVE' },
      { slug: 'nestjs', label: 'NESTJS' },
      { slug: 'fastify', label: 'FASTIFY' },
      { slug: 'supabase', label: 'SUPABASE' },
    ],
  },
  {
    company: 'Sniphat',
    role: 'Software Development Engineer Intern',
    date: 'Jan 2024 – Oct 2024',
    location: 'Bangalore, India',
    impact: [
      'Reduced app loading time from ~7–8 seconds to 0.6 seconds.',
      'Shipped feature work in a fast-paced team; focused on performance and product iteration.',
    ],
    tech: [
      { slug: 'flutter', label: 'FLUTTER' },
      { slug: 'firebase', label: 'FIREBASE' },
      { slug: 'mongodb', label: 'MONGO DB' },
      { slug: 'typescript', label: 'TYPESCRIPT' },
      { slug: 'nodedotjs', label: 'NODE.JS' },
    ],
  },
  {
    company: 'Pixelotech',
    role: 'Software Development Engineer Intern',
    date: 'Aug 2022 – Dec 2022',
    location: 'Remote',
    impact: [
      'Refactored and modernized a legacy codebase.',
      'Delivered features across 2 client projects, integrating multiple APIs and collaborating with cross-functional teams.',
    ],
    tech: [
      { slug: 'flutter', label: 'FLUTTER' },
      { slug: 'swagger', label: 'REST APIs' },
    ],
  },
  {
    company: 'The Bigger Stories',
    role: 'iOS Intern',
    date: 'Jun 2022 – Aug 2022',
    location: 'Remote',
    impact: [
      'Built responsive UI across devices',
      'Aligned the app with App Store Review Guidelines and resolved compliance issues.'
    ],
    tech: [
      { slug: 'apple', label: 'IOS' },
      { slug: 'flutter', label: 'FLUTTER' },
    ],
  },
];

function TechBadge({ slug, label }: Tech) {
  return (
    <span className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.06em] text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-200">
      <img
        src={simpleIconSrc(slug)}
        alt=""
        width={12}
        height={12}
        className="size-3 shrink-0"
        loading="lazy"
        decoding="async"
      />
      {label}
    </span>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-8 text-foreground"
    >
      <SectionHeader title="Experience" />
      <h2 id="experience-heading" className="sr-only">
        Experience
      </h2>

      <div className="font-mono">
        {experiences.map((exp) => (
          <motion.article
            key={exp.company}
            variants={fadeUpItem}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="grid grid-cols-[1fr_auto] items-start gap-x-5 gap-y-3 border-b border-neutral-200 py-8 last:border-b-0 dark:border-neutral-800 md:grid-cols-[minmax(0,20%)_minmax(0,1fr)_minmax(0,18%)] md:gap-x-7 md:py-10"
          >
            <div className="col-start-1 row-start-1 min-w-0">
              <h3 className="text-[12px] font-bold uppercase leading-snug tracking-wide text-foreground">
                {exp.company}
              </h3>
              <p className="mt-0.5 text-[11px] leading-snug text-neutral-600 dark:text-neutral-400">
                {exp.location}
              </p>
            </div>

            <p className="col-start-2 row-start-1 max-w-44 text-right text-[10px] leading-snug text-neutral-600 dark:text-neutral-400 md:col-start-3 md:max-w-none md:text-[11px]">
              {exp.date}
            </p>

            <div className="col-span-2 min-w-0 md:col-span-1 md:col-start-2 md:row-start-1">
              <p className="text-[13px] font-semibold leading-snug text-foreground">{exp.role}</p>
              <ul className="mt-3 space-y-1.5 text-[12px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                {exp.impact.map((point) => (
                  <li key={point} className="pl-0">
                    <span className="text-neutral-500 dark:text-neutral-500">- </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <TechBadge key={t.slug} {...t} />
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
