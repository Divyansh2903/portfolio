import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{ theme: Theme; toggle: () => void } | null>(null);

function readInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Apply a change with every CSS transition switched off, so all colours flip in the
 * same frame instead of some elements lagging behind the others.
 */
function withoutTransitions(change: () => void) {
  const style = document.createElement('style');
  style.textContent = '*,*::before,*::after{transition:none!important}';
  document.head.appendChild(style);
  change();
  void window.getComputedStyle(document.body).color; // force the new styles to apply now
  requestAnimationFrame(() => style.remove());
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Tint the phone's browser bar to match the page.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0e0e0e' : '#ffffff');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const apply = () => withoutTransitions(() => flushSync(() => setTheme(next)));

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('startViewTransition' in document)) {
      apply();
      return;
    }
    // Cross-fade the whole page between the old and new theme.
    document.startViewTransition(apply);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- hook + provider pair
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
