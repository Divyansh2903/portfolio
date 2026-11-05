import { useTheme } from '../lib/theme';

const links = [
  { label: 'Email', href: 'mailto:sdivyansh001@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Divyansh2903' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sdivyansh001' },
  { label: 'X', href: 'https://x.com/chauhan2903' },
  { label: 'Resume', href: '/divyansh_singh.pdf' },
  { label: 'Book a call', href: 'https://calendly.com/sdivyansh001/30min' },
] as const;

export function Header() {
  const { theme, toggle } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <header id="intro">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-[15px] font-medium text-foreground">Divyansh Singh</h1>
        <button
          type="button"
          onClick={toggle}
          aria-label={`Switch to ${next} mode`}
          className="cursor-pointer text-[13px] text-muted transition-colors hover:text-foreground"
        >
          {next}
        </button>
      </div>

      <p className="mt-1 text-muted">
        Full-stack developer based in India. Engineer at{' '}
        <a href="https://fensory.com" target="_blank" rel="noreferrer">
          Fensory
        </a>
        .
      </p>

      <nav aria-label="Contact links and resume" className="mt-6">
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[14px]">
          {links.map(({ label, href }) => {
            const external = href.startsWith('http') || href.endsWith('.pdf');
            return (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
