import { motion } from 'framer-motion';
import { fadeUpItem, sectionViewport } from '../lib/motion';

type SectionHeaderProps = {
  title: string;
};

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUpItem}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className="mb-4 flex items-center gap-3"
    >
      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400 dark:text-neutral-500">
        {title}
      </span>
      <div className="h-px min-w-0 flex-1 bg-neutral-200 dark:bg-neutral-800" aria-hidden />
    </motion.div>
  );
}
