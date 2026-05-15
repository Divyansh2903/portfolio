import { ProjectCard, type ProjectCardData } from './ProjectCard';
import { SectionHeader } from './SectionHeader';
import configVaultMockup from '../../mockups/configvault_mockup.png';
import encoreMockup from '../../mockups/encore_mockup.png';
import displayPlacerMockup from '../../mockups/displayPlacer_mockups.png';
import electricityBillingMockup from '../../mockups/electricity_mockup.png';
import upnextMockup from '../../mockups/upnext_mockup.png';

const projects: ProjectCardData[] = [
  {
    id: '01',
    title: 'ConfigVault',
    description:
      'Team config vault with environments, access control, and audit logs. Encrypted secrets at rest (AES-256-GCM), multi-project organization, RBAC, time-limited share links, bulk .env import, and cookie-based auth with password reset via Resend.',
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
    id: '02',
    title: 'UpNext',
    description:
      'A real-time collaborative music queue. Hosts spin up a session, participants join via a code, and everyone can search for tracks or add YouTube/Spotify links before voting on what plays next.',
    tags: ['TYPESCRIPT', 'NEXT.JS', 'NODE.JS', 'EXPRESS.JS', 'POSTGRESQL', 'PRISMA', 'WEBSOCKETS', 'EC2'],
    liveUrl: 'https://upnext.divyansh.space',
    repoUrl: 'https://github.com/Divyansh2903/UpNext',
    previewLabel: 'PROJECT SCREENSHOT',
    previewImage: upnextMockup,
    previewDeviceFrame: true,
  },
  {
    id: '03',
    title: 'Electricity Billing System',
    description:
      'Full-stack electricity billing platform for campus-level usage management. Built with the MERN stack first, then migrated to PostgreSQL with Prisma ORM.',
    tags: ['REACT.JS', 'EXPRESS.JS', 'POSTGRESQL', 'PRISMA', 'GEMINI API', 'RAZORPAY', 'WEB3.JS'],
    repoUrl: 'https://github.com/Divyansh2903/Billing_System',
    previewLabel: 'APP PREVIEW',
    previewImage: electricityBillingMockup,
    previewDeviceFrame: true,
  },
  {
    id: '04',
    title: 'Encore Medlabs',
    description:
      'Cross-platform medical lab booking app with a companion vendor app, built using Flutter and Firebase. Patients book tests and view pricing while vendors manage orders and real-time discounts.',
    tags: ['FLUTTER', 'FIREBASE', 'CLOUD FUNCTIONS'],
    repoUrl: 'https://github.com/Divyansh2903/Encore-Medlabs',
    previewLabel: 'INTERFACE MOCKUP',
    previewImage: encoreMockup,
    previewDeviceFrame: true,
  },
  {
    id: '05',
    title: 'Display Manager',
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
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-8">
      <SectionHeader title="Projects" />
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>
      <div className="border-y border-neutral-200/80 dark:border-neutral-800/95">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
