import { Section } from './Section';

const INTRO =
  "Third-year CS at BITS Pilani, studying online while working full-time. I build web and mobile apps, usually the whole stack. Lately I've been learning agentic infrastructure and AI.";

const skills: Array<{ label: string; items: string[] }> = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'C++'] },
  { label: 'Web & mobile', items: ['React', 'Next.js', 'React Native', 'Expo', 'Flutter'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Fastify'] },
  { label: 'Data & tools', items: ['PostgreSQL', 'Prisma', 'Firebase', 'MongoDB', 'Supabase'] },
  { label: 'Infra', items: ['AWS', 'DigitalOcean', 'Docker'] },
];

export function About() {
  return (
    <Section id="about" title="About">
      <p className="text-muted">{INTRO}</p>

      {/* Phones: label above its list. Wider screens: label column beside the list. */}
      <dl className="mt-6 flex flex-col gap-2 text-detail sm:grid sm:grid-cols-[auto_1fr] sm:gap-x-6 sm:gap-y-2">
        {skills.map(({ label, items }) => (
          <div key={label} className="sm:contents">
            <dt className="text-faint">{label}</dt>
            <dd className="text-muted">{items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
