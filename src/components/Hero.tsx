import { motion } from 'framer-motion';
import { fadeUpItem, hoverSpring, staggerContainer } from '../lib/motion';

const links = [
  { label: 'Email', href: 'mailto:sdivyansh001@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Divyansh2903' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sdivyansh001' },
  { label: 'X', href: 'https://x.com/chauhan2903' },
] as const;

export function Hero() {
  return (
    <header className="pt-6 pb-2 md:pt-10">
      <p className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
        <span>full-stack &amp; mobile engineer</span>
      </p>

      <h1 className="font-serif text-[13vw] font-normal leading-[0.95] tracking-tight text-foreground sm:text-[88px] sm:leading-[88px]">
        divyansh singh
      </h1>

      <nav
        className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground"
        aria-label="Contact links"
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
                className="inline-block border-b border-transparent pb-0.5 transition-colors hover:border-neutral-400 hover:text-neutral-600"
                whileHover={{ y: -1 }}
                transition={hoverSpring}
              >
                {label}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
}
