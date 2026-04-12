import { motion } from 'framer-motion';

const links = [
  { label: 'Email', href: 'mailto:sdivyansh001@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Divyansh2903' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sdivyansh001' },
] as const;

export function Hero() {
  return (
    <header className="pt-6 pb-2 md:pt-10">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />
        <span>full-stack &amp; mobile engineer</span>
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="font-serif text-[13vw] font-normal leading-[0.95] tracking-tight text-foreground sm:text-[88px] sm:leading-[88px]"
      >
        divyansh singh
      </motion.h1>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground"
        aria-label="Contact links"
      >
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="border-b border-transparent pb-0.5 transition-colors hover:border-neutral-400 hover:text-neutral-600"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
