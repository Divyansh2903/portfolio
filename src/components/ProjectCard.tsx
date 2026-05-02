import { motion } from 'framer-motion';
import { Globe, Link2 } from 'lucide-react';
import { fadeUpItem, sectionViewport } from '../lib/motion';

export type ProjectCardData = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  previewLabel?: string;
  previewImage?: string;
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
      className="group grid border-t border-neutral-200/80 md:grid-cols-[minmax(0,55%)_minmax(0,45%)] dark:border-neutral-800/95"
    >
      <div className="flex flex-col border-neutral-200/80 py-9 pr-8 md:border-r md:py-10 md:pr-10 dark:border-neutral-800/95">
        <div className="mb-7 flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-neutral-400 dark:text-neutral-500">
            {project.id}
          </span>
          <div className="flex items-center gap-4">
          {project.liveUrl ? (
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

      <div className="py-7 md:py-8 md:pl-10">
        {project.previewImage ? (
          <div className="aspect-video w-full overflow-hidden border border-neutral-300/80 dark:border-neutral-800/90">
            <img
              src={project.previewImage}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
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
