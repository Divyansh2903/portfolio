import { Section } from './Section';

const INTRO =
  "Currently in my 3rd year pursuing a BSc in Computer Science from BITS Pilani (Digital). I build full-stack and mobile applications with a focus on performance, scalability, and real-world usability. I've worked on production apps, shipped features, and improved systems used by real users.";

const skills: Array<{ label: string; items: string[] }> = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'C++'] },
  {
    label: 'Frameworks',
    items: ['Flutter', 'React', 'Next.js', 'React Native', 'Expo', 'Node.js', 'Express', 'NestJS', 'Fastify'],
  },
  { label: 'Data & tools', items: ['PostgreSQL', 'Prisma', 'Firebase', 'MongoDB', 'Supabase'] },
];

export function About() {
  return (
    <Section id="about" title="About">
      <p className="text-muted">{INTRO}</p>

      <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-[14px]">
        {skills.map(({ label, items }) => (
          <div key={label} className="contents">
            <dt className="text-faint">{label}</dt>
            <dd className="text-muted">{items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
