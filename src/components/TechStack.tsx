import type { LucideIcon } from 'lucide-react';
import {
  Code,
  Code2,
  Database,
  Flame,
  Layers,
  Server,
  Smartphone,
  Terminal,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const pills: { label: string; Icon: LucideIcon }[] = [
  { label: 'TypeScript', Icon: Code },
  { label: 'JavaScript', Icon: Code2 },
  { label: 'Python', Icon: Terminal },
  { label: 'Dart', Icon: Layers },
  { label: 'Flutter', Icon: Smartphone },
  { label: 'React', Icon: Layers },
  { label: 'React Native', Icon: Smartphone },
  { label: 'Node.js', Icon: Server },
  { label: 'Express', Icon: Server },
  { label: 'PostgreSQL', Icon: Database },
  { label: 'Prisma', Icon: Database },
  { label: 'Firebase', Icon: Flame },
  { label: 'MongoDB', Icon: Database },
  { label: 'NeonDB', Icon: Database },
];

export function TechStack() {
  return (
    <section aria-labelledby="stack-heading">
      <SectionHeader title="Stack" />
      <h2 id="stack-heading" className="sr-only">
        Stack
      </h2>
      <ul className="flex flex-wrap gap-2">
        {pills.map(({ label, Icon }) => (
          <li key={label}>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-700">
              <Icon className="h-3.5 w-3.5 shrink-0 text-neutral-500" strokeWidth={1.75} aria-hidden />
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
