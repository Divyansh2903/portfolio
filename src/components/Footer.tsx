import { Clock } from './Clock';

export function Footer() {
  return (
    <footer className="mt-12 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-border pt-6 text-meta text-faint sm:mt-16">
      <p>© {new Date().getFullYear()} Divyansh Singh</p>
      <Clock />
    </footer>
  );
}
