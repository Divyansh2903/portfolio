import { motion } from 'framer-motion';
import { fadeUpItem, sectionViewport, staggerContainer } from '../lib/motion';
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
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-8">
      <SectionHeader title="Projects" />
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="max-w-3xl"
          >
            <motion.h3
              variants={fadeUpItem}
              className="font-mono text-[14px] font-medium lowercase text-foreground"
            >
              {project.title}
            </motion.h3>
            <motion.p
              variants={fadeUpItem}
              className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-neutral-400 dark:text-neutral-500"
            >
              {project.tech}
            </motion.p>
            <motion.ul
              variants={staggerContainer}
              className="mt-3 space-y-1.5 font-mono text-[13px] leading-[1.58] text-neutral-600 lowercase dark:text-neutral-400"
            >
              {project.impact.map((point) => (
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
