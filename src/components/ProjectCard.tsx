import { motion } from 'framer-motion';
import { Download, Globe, Link2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { fadeUpItem, sectionViewport } from '../lib/motion';

export type ProjectCategory = 'web' | 'mobile' | 'desktop';

export type ProjectCardData = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: ReactNode;
  badge?: string;
  tags: string[];
  liveUrl?: string;
  downloadUrl?: string;
  repoUrl?: string;
  previewLabel?: string;
  previewImage?: string;
  /** Renders a thick rounded “device” bezel when the mockup PNG has no frame baked in */
  previewDeviceFrame?: boolean;
};

type ProjectCardProps = {
  project: ProjectCardData;
  index: number;
};

const PREVIEW_LABELS = ['PROJECT SCREENSHOT', 'APP PREVIEW', 'INTERFACE MOCKUP'] as const;

export function ProjectCard({ project, index }: ProjectCardProps) {
  const previewLabel = project.previewLabel ?? PREVIEW_LABELS[index] ?? 'PREVIEW';

  return (
    <motion.article
      variants={fadeUpItem}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className="group grid border-t border-neutral-200/80 md:grid-cols-[minmax(0,52%)_minmax(0,48%)] dark:border-neutral-800/95"
    >
      <div className="flex flex-col border-neutral-200/80 py-9 pr-8 md:border-r md:py-10 md:pr-10 dark:border-neutral-800/95">
        <div className="mb-7 flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-neutral-400 dark:text-neutral-500">
            {project.id}
          </span>
          <div className="flex items-center gap-4">
          {project.downloadUrl ? (
            <a
              href={project.downloadUrl}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition-colors hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
            >
              <Download className="size-3" strokeWidth={1.7} aria-hidden />
              <span>Download</span>
            </a>
          ) : project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition-colors hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
            >
              <Globe className="size-3" strokeWidth={1.7} aria-hidden />
              <span>Live Link</span>
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition-colors hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
            >
                <Link2 className="size-3" strokeWidth={1.7} aria-hidden />
              <span>GitHub</span>
            </a>
          ) : null}
          </div>
        </div>

        {project.badge ? (
          <span className="mb-3 inline-flex w-fit items-center gap-1.5 border border-neutral-300/90 bg-neutral-100/80 px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-neutral-700 dark:border-neutral-700/90 dark:bg-neutral-800/60 dark:text-neutral-200">
            <span className="size-1 rounded-full bg-neutral-500 dark:bg-neutral-400" aria-hidden />
            {project.badge}
          </span>
        ) : null}

        <h3 className="font-mono text-[clamp(1.9rem,2.8vw,2.45rem)] font-normal leading-[1.12] tracking-[-0.01em] text-neutral-900 dark:text-neutral-100">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl font-mono text-[13px] leading-[1.75] text-neutral-600 dark:text-neutral-300/70">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
            key={tag}
              className="inline-flex items-center border border-neutral-300/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500 dark:border-neutral-700/90 dark:text-neutral-400"
          >
            {tag}
            </span>
        ))}
        </div>
      </div>

      <div className="flex items-center py-7 md:py-8 md:pl-10">
        {project.previewImage ? (
          project.previewDeviceFrame ? (
            <div className="isolate w-full overflow-hidden rounded-[0.95rem] bg-[#8e8f8f] p-0.5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.07),0_6px_22px_rgba(0,0,0,0.16)] md:rounded-[1.05rem] md:p-[3px] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_10px_34px_rgba(0,0,0,0.45)]">
              <div className="aspect-video w-full min-h-0 overflow-hidden rounded-[calc(0.95rem-2px)] md:rounded-[calc(1.05rem-3px)]">
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  className="block h-full w-full object-cover object-center select-none"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.previewImage}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          )
        ) : (
          <div className="flex aspect-video w-full items-center justify-center overflow-hidden border border-neutral-300/80 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_5px,transparent_5px,transparent_10px)] dark:border-neutral-800/90 dark:bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.045)_0px,rgba(255,255,255,0.045)_5px,transparent_5px,transparent_10px)]">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
              {previewLabel}
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}
