import { motion } from 'framer-motion';
import { fadeUpItem, sectionViewport, staggerContainer } from '../lib/motion';
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
      <div className="space-y-10">
        {experiences.map((exp) => (
          <motion.article
            key={exp.company}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUpItem}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <h3 className="font-mono text-[15px] font-medium lowercase text-foreground">
                {exp.company}
              </h3>
              <p className="font-mono text-[12px] uppercase tracking-widest text-neutral-400">{exp.date}</p>
            </motion.div>
            <motion.p
              variants={fadeUpItem}
              className="mt-1 font-mono text-[13px] lowercase text-neutral-500"
            >
              {exp.role} · {exp.location}
            </motion.p>
            <motion.ul
              variants={staggerContainer}
              className="mt-4 space-y-2 font-mono text-[14px] leading-[1.6] text-neutral-600 lowercase"
            >
              {exp.impact.map((point) => (
                <motion.li key={point} variants={fadeUpItem}>
                  — {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
