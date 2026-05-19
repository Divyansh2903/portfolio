import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../lib/theme';
import { dockShortcuts } from './floatingDockShortcuts';

const dockShellClass =
  'pointer-events-auto relative flex max-w-[min(100%,32rem)] items-center gap-1 rounded-full border border-neutral-300/90 bg-white/95 px-2 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.13),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-black/5 backdrop-blur-xl dark:border-neutral-700/80 dark:bg-neutral-950/92 dark:shadow-[0_14px_34px_rgba(0,0,0,0.62),0_2px_10px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.07)] dark:ring-white/10 sm:gap-1.5 sm:px-2.5 sm:py-2';

export function FloatingDockDesktop() {
  const { theme, toggle } = useTheme();

  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 hidden justify-center px-4 pb-[max(2.25rem,calc(0.85rem+env(safe-area-inset-bottom)))] pt-2 md:flex"
      aria-label="Section shortcuts and theme"
    >
      <div className={dockShellClass}>
        <span
          className="pointer-events-none absolute inset-x-4 -top-px h-px rounded-full bg-linear-to-r from-transparent via-white/70 to-transparent dark:via-white/20"
          aria-hidden
        />
        {dockShortcuts.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="shrink-0 rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-foreground dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 sm:px-3.5"
          >
            {label}
          </a>
        ))}
        <span className="mx-0.5 h-5 w-px shrink-0 bg-neutral-200 dark:bg-neutral-700" aria-hidden />
        <button
          type="button"
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Use light mode' : 'Use dark mode'}
          className="shrink-0 rounded-full p-2.5 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-foreground dark:text-neutral-400 dark:hover:bg-neutral-800/90 dark:hover:text-neutral-100"
        >
          {theme === 'dark' ? (
            <Sun className="size-4" strokeWidth={1.75} aria-hidden />
          ) : (
            <Moon className="size-4" strokeWidth={1.75} aria-hidden />
          )}
        </button>
      </div>
    </nav>
  );
}
