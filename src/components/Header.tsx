import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Toast } from './Toast';

const EMAIL = 'sdivyansh001@gmail.com';

const links = [
  { label: 'Email', href: `mailto:${EMAIL}` },
  { label: 'GitHub', href: 'https://github.com/Divyansh2903' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sdivyansh001' },
  { label: 'X', href: 'https://x.com/chauhan2903' },
  { label: 'Resume', href: '/divyansh_singh.pdf' },
  { label: 'Book a call', href: 'https://calendly.com/sdivyansh001/30min' },
] as const;

const TOAST_MS = 2000;

/** Copies the email address and shows a toast. Falls back to the mail app if copying fails. */
function useCopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (!navigator.clipboard?.writeText) return; // no clipboard access: let mailto open the mail app
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
      return;
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), TOAST_MS);
  };

  return { copied, onClick };
}

export function Header() {
  const copyEmail = useCopyEmail();

  return (
    <header id="intro">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-body font-medium text-foreground">Divyansh Singh</h1>
        <ThemeToggle />
      </div>

      <p className="mt-1 text-muted">
        Full-stack developer based in India. Engineer at{' '}
        <a href="https://fensory.com" target="_blank" rel="noreferrer">
          Fensory
        </a>
        .
      </p>

      <nav aria-label="Contact links and resume" className="mt-6">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-detail">
          {links.map(({ label, href }) => {
            const isEmail = href.startsWith('mailto:');
            const external = href.startsWith('http') || href.endsWith('.pdf');
            return (
              <li key={label}>
                <a
                  className="hit"
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  onClick={isEmail ? copyEmail.onClick : undefined}
                  title={isEmail ? `Copy ${EMAIL}` : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <Toast message="Email copied to clipboard" visible={copyEmail.copied} />
    </header>
  );
}
