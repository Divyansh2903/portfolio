import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeUpItem, hoverSpring, staggerContainer } from '../lib/motion';
import { ResumeModal } from './ResumeModal';

const links = [
  { label: 'Email', href: 'mailto:sdivyansh001@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Divyansh2903' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sdivyansh001' },
  { label: 'X', href: 'https://x.com/chauhan2903' },
] as const;

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <header id="intro" className="scroll-mt-8 pt-5 pb-2 md:pt-8">
      <h1 className="font-serif text-[12vw] font-normal leading-[0.95] tracking-tight text-foreground sm:text-[72px] sm:leading-[72px]">
        divyansh singh
      </h1>

      <nav
        className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground"
        aria-label="Contact links and resume"
      >
        <motion.ul
          className="flex flex-wrap gap-x-8 gap-y-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {links.map(({ label, href }) => (
            <motion.li key={label} variants={fadeUpItem}>
              <motion.a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-block border-b border-transparent pb-0.5 transition-colors hover:border-neutral-400 hover:text-neutral-600 dark:hover:border-neutral-500 dark:hover:text-neutral-300"
                whileHover={{ y: -1 }}
                transition={hoverSpring}
              >
                {label}
              </motion.a>
            </motion.li>
          ))}
          <motion.li variants={fadeUpItem}>
            <motion.button
              type="button"
              className="inline-block cursor-pointer border-b border-transparent bg-transparent p-0 pb-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-neutral-400 hover:text-neutral-600 dark:hover:border-neutral-500 dark:hover:text-neutral-300"
              aria-haspopup="dialog"
              aria-expanded={resumeOpen}
              aria-controls="resume-dialog"
              whileHover={{ y: -1 }}
              transition={hoverSpring}
              onClick={() => setResumeOpen(true)}
            >
              Resume
            </motion.button>
          </motion.li>
        </motion.ul>
      </nav>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </header>
  );
}
