import { SectionHeader } from './SectionHeader';

export function About() {
  return (
    <section aria-labelledby="about-heading">
      <SectionHeader title="About" />
      <h2 id="about-heading" className="sr-only">
        About
      </h2>
      <div className="max-w-2xl space-y-5 font-mono text-[15px] leading-[1.65] text-neutral-600 lowercase">
        <p>
          hey, i&apos;m divyansh. i build full-stack and mobile apps with a focus on performance and how
          they behave in production—not just on a demo slide.
        </p>
        <p>
          i&apos;ve shipped work that cut real load times (7–8s → 0.6s), migrated stacks to postgres +
          prisma, and built firebase-backed mobile products end to end. i care about systems, apis, and
          learning how things work under the hood.
        </p>
        <p className="text-neutral-500">
          bsc computer science, bits pilani (2023–2027).
        </p>
      </div>
    </section>
  );
}
