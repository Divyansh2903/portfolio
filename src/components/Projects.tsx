import type { ReactNode } from 'react';
import { Section } from './Section';

type Project = {
  title: string;
  note?: string;
  description: ReactNode;
  tech: string[];
  links: Array<{ label: string; href: string }>;
};

const projects: Project[] = [
  {
    title: 'Fensory App',
    description:
      'Solana-first mobile app where users track portfolios, buy tokens, and invest in on-chain protocols with real-time insights. Built end-to-end, including the React Native + Expo mobile app and a NestJS backend with PostgreSQL + Prisma and Supabase Auth.',
    tech: ['React Native', 'Expo', 'NestJS', 'PostgreSQL', 'Prisma', 'Supabase Auth', 'Solana'],
    links: [
      {
        label: 'Demo',
        href: 'https://drive.google.com/file/d/1jXwZFUiPy0B4qg_mOylIV13ZTFZPra5B/view?usp=sharing',
      },
    ],
  },
  {
    title: 'YouTube AI SEO Agent',
    note: 'Freelance',
    description: (
      <>
        AI SEO agent that scores underperforming videos and rewrites their tags, titles, and
        descriptions. React/Vite dashboard with an Express + Prisma/PostgreSQL backend, using Gemini
        and Claude for AI. Runs on Docker Compose behind nginx on a droplet. Built for the{' '}
        <a href="https://www.youtube.com/@MathsJugadSe" target="_blank" rel="noreferrer">
          MJS YouTube channel
        </a>
        .
      </>
    ),
    tech: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'YouTube API', 'Claude', 'Gemini'],
    links: [{ label: 'Demo', href: 'https://www.loom.com/share/24a1dddb826a4efdbfc7df0fa60bfc30' }],
  },
  {
    title: 'CineBook',
    description:
      'AI-powered movie booking platform where customers discover films, pick showtimes, reserve seats with live availability, and complete bookings manually or via a chat assistant. Flutter mobile app, React admin dashboard, and Fastify API on PostgreSQL with Prisma, websockets for seat sync.',
    tech: ['TypeScript', 'Flutter', 'React', 'Fastify', 'PostgreSQL', 'Prisma', 'Docker', 'WebSockets'],
    links: [
      {
        label: 'Demo',
        href: 'https://drive.google.com/file/d/1-NlygrIkVAzv-cn0zo3DFruVvh3mVf7h/view?usp=sharing',
      },
      { label: 'Code', href: 'https://github.com/Divyansh2903/CINEBOOK' },
    ],
  },
  {
    title: 'ConfigVault',
    note: 'Hackathon',
    description:
      'Team config vault with environments, access control, and audit logs. Encrypted secrets at rest, multi-project organization, time-limited share links. Next.js frontend and backend with PostgreSQL + Prisma.',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'AES-256-GCM', 'RBAC', 'Resend', 'Tailwind CSS'],
    links: [
      { label: 'Live', href: 'https://configvault.divyansh.space' },
      { label: 'Code', href: 'https://github.com/Divyansh2903/Config-Vault' },
    ],
  },
  {
    title: 'UpNext',
    note: 'Personal',
    description:
      'A real-time collaborative music queue based music streaming platform. Next.js frontend and an Express.js backend with PostgreSQL + Prisma, hosted on AWS EC2.',
    tech: ['TypeScript', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'WebSockets', 'EC2'],
    links: [
      { label: 'Live', href: 'https://upnext.divyansh.space' },
      { label: 'Code', href: 'https://github.com/Divyansh2903/UpNext' },
    ],
  },
  {
    title: 'Encore Medlabs',
    note: 'Freelance',
    description:
      'Cross-platform medical lab booking app with a companion vendor app, built using Flutter and Firebase. Patients book tests and view pricing while vendors manage orders and real-time discounts.',
    tech: ['Flutter', 'Firebase', 'Cloud Functions'],
    links: [{ label: 'Code', href: 'https://github.com/Divyansh2903/Encore-Medlabs' }],
  },
  {
    title: 'Display Manager',
    note: 'Personal',
    description:
      'A macOS menu bar app for saving and switching between display configurations with named profiles, visual layout previews, and one-click apply.',
    tech: ['Swift', 'SwiftUI', 'AppKit', 'CoreGraphics', 'displayplacer', 'macOS'],
    links: [
      {
        label: 'Download',
        href: 'https://github.com/Divyansh2903/displaymanager/releases/download/v1.1/DisplayManager-v1.1.0.zip',
      },
      { label: 'Code', href: 'https://github.com/Divyansh2903/displaymanager' },
    ],
  },
  {
    title: 'Electricity Billing System',
    note: 'Learning',
    description:
      'Full-stack electricity billing platform for campus-level usage management. Built with MERN stack first, then migrated to PostgreSQL with Prisma ORM.',
    tech: ['React.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Gemini API', 'Razorpay', 'Web3.js'],
    links: [{ label: 'Code', href: 'https://github.com/Divyansh2903/Billing_System' }],
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ol className="flex flex-col gap-8">
        {projects.map((project) => {
          const primary = project.links[0];
          return (
            <li key={project.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p>
                  {primary ? (
                    <a href={primary.href} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                  {project.note ? <span className="text-faint"> · {project.note}</span> : null}
                </p>
                <p className="flex gap-x-4 text-[14px]">
                  {project.links.map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="text-muted">
                      {label}
                    </a>
                  ))}
                </p>
              </div>
              <p className="mt-1.5 text-[14px] text-muted">{project.description}</p>
              <p className="mt-2 text-[13px] text-faint">{project.tech.join(', ')}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
