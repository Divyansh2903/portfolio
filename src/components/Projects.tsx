import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard, type ProjectCardData, type ProjectCategory } from './ProjectCard';
import { SectionHeader } from './SectionHeader';
import { fadeUpItem, sectionViewport } from '../lib/motion';
import configVaultMockup from '../../mockups/configvault_mockup.png';
import encoreMockup from '../../mockups/encore_mockup.png';
import displayPlacerMockup from '../../mockups/displayPlacer_mockups.png';
import electricityBillingMockup from '../../mockups/electricity_mockup.png';
import fensoryMockup from '../../mockups/fensory_mockup.png';
import seoAgentMockup from '../../mockups/seoagent_mockup.png';
import upnextMockup from '../../mockups/upnext_mockup.png';

const projects: ProjectCardData[] = [
  {
    id: '01',
    title: 'Fensory App',
    category: 'mobile',
    description:
      'Solana-first mobile app where users track portfolios, buy tokens, and invest in on-chain protocols with real-time insights. Built this end-to-end, including the React Native + Expo mobile app and a NestJS backend with PostgreSQL + Prisma and Supabase Auth.',
    tags: ['REACT NATIVE', 'EXPO', 'NESTJS', 'POSTGRESQL', 'PRISMA', 'SUPABASE AUTH', 'SOLANA'],
    previewLabel: 'APP PREVIEW',
    previewImage: fensoryMockup,
    previewDeviceFrame: true,
  },
  {
    id: '02',
    title: 'YouTube AI SEO Agent',
    category: 'web',
    badge: 'FREELANCE',
    description: (
      <>
        AI SEO agent for a single YouTube channel owner that scores
        underperforming videos and rewrites their tags, titles, and
        descriptions. Built this end-to-end — a React/Vite dashboard and an
        Express + Prisma/PostgreSQL backend that calls Gemini and Claude, syncs
        through the YouTube Data and Analytics APIs over OAuth, and runs on Docker
        Compose behind nginx on a DigitalOcean droplet. Built as freelance work
        for the{' '}
        <a
          href="https://www.youtube.com/@MathsJugadSe"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 decoration-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          MJS YouTube channel
        </a>
        .
      </>
    ),
    tags: ['TYPESCRIPT', 'REACT', 'EXPRESS', 'POSTGRESQL', 'PRISMA', 'DOCKER', 'YOUTUBE API', 'GEMINI'],
    previewLabel: 'APP PREVIEW',
    previewImage: seoAgentMockup,
    previewDeviceFrame: true,
  },
  {
    id: '03',
    title: 'ConfigVault',
    category: 'web',
    badge: 'HACKATHON',
    description:
      'Team config vault with environments, access control, and audit logs. Encrypted secrets at rest, multi-project organization, time-limited share links. Built with Next.js frontend and backend with PostgreSQL + Prisma.',
    tags: [
      'TYPESCRIPT',
      'NEXT.JS',
      'POSTGRESQL',
      'PRISMA',
      'AES-256-GCM',
      'RBAC',
      'RESEND',
      'TAILWIND CSS',
    ],
    liveUrl: 'https://configvault.divyansh.space',
    repoUrl: 'https://github.com/Divyansh2903/Config-Vault',
    previewLabel: 'PROJECT SCREENSHOT',
    previewImage: configVaultMockup,
    previewDeviceFrame: true,
  },
  {
    id: '04',
    title: 'UpNext',
    category: 'web',
    badge: 'PERSONAL',
    description:
      'A real-time collaborative music queue based music streaming platform. Built with Next.js frontend and a express.js backend with PostgreSQL + Prisma, hosted on AWS EC2.',
    tags: ['TYPESCRIPT', 'NEXT.JS', 'NODE.JS', 'EXPRESS.JS', 'POSTGRESQL', 'PRISMA', 'WEBSOCKETS', 'EC2'],
    liveUrl: 'https://upnext.divyansh.space',
    repoUrl: 'https://github.com/Divyansh2903/UpNext',
    previewLabel: 'PROJECT SCREENSHOT',
    previewImage: upnextMockup,
    previewDeviceFrame: true,
  },
  {
    id: '05',
    title: 'Encore Medlabs',
    category: 'mobile',
    badge: 'FREELANCE',
    description:
      'Cross-platform medical lab booking app with a companion vendor app, built using Flutter and Firebase. Patients book tests and view pricing while vendors manage orders and real-time discounts.',
    tags: ['FLUTTER', 'FIREBASE', 'CLOUD FUNCTIONS'],
    repoUrl: 'https://github.com/Divyansh2903/Encore-Medlabs',
    previewLabel: 'INTERFACE MOCKUP',
    previewImage: encoreMockup,
    previewDeviceFrame: true,
  },
  {
    id: '06',
    title: 'Display Manager',
    category: 'desktop',
    badge: 'PERSONAL',
    description:
      'A macOS menu bar app for saving and switching between display configurations with named profiles, visual layout previews, and one-click apply.',
    tags: ['SWIFT', 'SWIFTUI', 'APPKIT', 'COREGRAPHICS', 'DISPLAYPLACER', 'MACOS'],
    downloadUrl:
      'https://github.com/Divyansh2903/displaymanager/releases/download/v1.1/DisplayManager-v1.1.0.zip',
    repoUrl: 'https://github.com/Divyansh2903/displaymanager',
    previewLabel: 'DISPLAY SETUP PREVIEW',
    previewImage: displayPlacerMockup,
    previewDeviceFrame: true,
  },
  {
    id: '07',
    title: 'Electricity Billing System',
    category: 'web',
    badge: 'LEARNING',
    description:
      'Full-stack electricity billing platform for campus-level usage management. Built with MERN stack first, then migrated to PostgreSQL with Prisma ORM.',
    tags: ['REACT.JS', 'EXPRESS.JS', 'POSTGRESQL', 'PRISMA', 'GEMINI API', 'RAZORPAY', 'WEB3.JS'],
    repoUrl: 'https://github.com/Divyansh2903/Billing_System',
    previewLabel: 'APP PREVIEW',
    previewImage: electricityBillingMockup,
    previewDeviceFrame: true,
  },
];

type FilterValue = ProjectCategory | 'all';

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'desktop', label: 'Desktop App' },
];

export function Projects() {
  const [filter, setFilter] = useState<FilterValue>('all');

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-8">
      <SectionHeader title="Projects" />
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>

      <motion.div
        variants={fadeUpItem}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="mb-6 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by platform"
      >
        {FILTERS.map(({ value, label }) => {
          const isActive = filter === value;
          return (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(value)}
              className={`inline-flex items-center rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors ${
                isActive
                  ? 'bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900'
                  : 'border border-neutral-300/90 text-neutral-500 hover:text-neutral-800 dark:border-neutral-700/90 dark:text-neutral-400 dark:hover:text-neutral-200'
              }`}
            >
              {label}
            </button>
          );
        })}
      </motion.div>

      <div className="border-y border-neutral-200/80 dark:border-neutral-800/95">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
