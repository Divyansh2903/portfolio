import { motion } from 'framer-motion';
import { fadeUpItem, hoverSpring, sectionViewport, staggerContainer } from '../lib/motion';
import { simpleIconSrc } from '../lib/simpleIcon';
import { SectionHeader } from './SectionHeader';

const INTRO =
  "Currently in 3rd Year pursuing BSc from BITS Pilani (Digital). I build full-stack and mobile applications with a focus on performance and real-world usability. I've worked on production apps, reduced load times significantly, and built systems used in real environments.";

type Pill = { slug: string; label: string };

const languagePills: Pill[] = [
  { slug: 'typescript', label: 'TypeScript' },
  { slug: 'javascript', label: 'JavaScript' },
  { slug: 'python', label: 'Python' },
  { slug: 'dart', label: 'Dart' },
  { slug: 'cplusplus', label: 'C++' },
];

const frameworkPills: Pill[] = [
  { slug: 'flutter', label: 'Flutter' },
  { slug: 'react', label: 'React' },
  { slug: 'nextdotjs', label: 'Next.js' },
  { slug: 'reactnative', label: 'React Native' },
  { slug: 'expo', label: 'Expo' },
  { slug: 'nodedotjs', label: 'Node.js' },
  { slug: 'express', label: 'Express' },
  { slug: 'nestjs', label: 'NestJS' },
  { slug: 'fastify', label: 'Fastify' },
];

const databasePills: Pill[] = [
  { slug: 'postgresql', label: 'PostgreSQL' },
  { slug: 'prisma', label: 'Prisma' },
  { slug: 'firebase', label: 'Firebase' },
  { slug: 'mongodb', label: 'MongoDB' },
  { slug: 'supabase', label: 'Supabase' },
];

function PillItem({ slug, label }: Pill) {
  return (
    <li>
      <motion.span
        whileHover={{ y: -1 }}
        transition={hoverSpring}
        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-200"
      >
        <img
          src={simpleIconSrc(slug)}
          alt=""
          width={12}
          height={12}
          className="h-3 w-3 shrink-0"
          loading="lazy"
          decoding="async"
        />
        {label}
      </motion.span>
    </li>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-8">
      <SectionHeader title="About" />
      <h2 id="about-heading" className="sr-only">
        About
      </h2>

      <motion.div
        className="space-y-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.p
          variants={fadeUpItem}
          className="max-w-2xl text-[15px] leading-[1.52] text-neutral-600 dark:text-neutral-400"
        >
          {INTRO}
        </motion.p>

        <div className="space-y-5">
          <motion.div variants={fadeUpItem}>
            <h3 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
              Languages
            </h3>
            <ul className="flex flex-wrap gap-2">
              {languagePills.map((pill) => (
                <PillItem key={pill.label} {...pill} />
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUpItem}>
            <h3 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
              Frameworks &amp; libraries
            </h3>
            <ul className="flex flex-wrap gap-2">
              {frameworkPills.map((pill) => (
                <PillItem key={pill.label} {...pill} />
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUpItem}>
            <h3 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
              Databases &amp; tools
            </h3>
            <ul className="flex flex-wrap gap-2">
              {databasePills.map((pill) => (
                <PillItem key={pill.label} {...pill} />
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
