import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../lib/theme';
import { dockShortcuts } from './floatingDockShortcuts';

const dockShellClass =
  'pointer-events-auto relative flex w-full items-stretch overflow-hidden rounded-2xl border border-neutral-300/90 bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.13),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-black/5 backdrop-blur-xl dark:border-neutral-700/80 dark:bg-neutral-950/92 dark:shadow-[0_14px_34px_rgba(0,0,0,0.62),0_2px_10px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.07)] dark:ring-white/10';

export function FloatingDockMobile() {
  const { theme, toggle } = useTheme();

  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(1rem,calc(0.65rem+env(safe-area-inset-bottom)))] pt-2 md:hidden"
      aria-label="Section shortcuts and theme"
    >
      <div className={dockShellClass}>
        <span
          className="pointer-events-none absolute inset-x-4 -top-px h-px rounded-full bg-linear-to-r from-transparent via-white/70 to-transparent dark:via-white/20"
          aria-hidden
        />
        <div className="grid min-w-0 flex-1 grid-cols-4">
          {dockShortcuts.map(({ href, label, shortLabel }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              className="flex min-h-11 min-w-0 items-center justify-center border-r border-neutral-200/90 px-1 py-2.5 font-mono text-[9px] uppercase tracking-[0.1em] text-neutral-600 transition-colors active:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-400 dark:active:bg-neutral-800/90"
            >
              <span className="truncate">{shortLabel}</span>
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Use light mode' : 'Use dark mode'}
          className="flex w-12 shrink-0 items-center justify-center text-neutral-600 transition-colors active:bg-neutral-100 dark:text-neutral-400 dark:active:bg-neutral-800/90"
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
