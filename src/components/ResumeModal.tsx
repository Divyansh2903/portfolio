import { AnimatePresence, motion } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { useEffect } from 'react';

const RESUME_SRC = '/divyansh_singh.pdf';
const DOWNLOAD_FILENAME = 'divyansh_singh.pdf';

const RESUME_EMBED_SRC = `${RESUME_SRC}#toolbar=0&navpanes=0&scrollbar=0&zoom=70`;

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="resume-modal"
          className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-5"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close resume preview"
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px] dark:bg-black/65"
            onClick={onClose}
          />

          <div
            id="resume-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-dialog-title"
            className="relative z-10 flex h-[min(88vh,860px)] w-[min(calc(100vw-1.5rem),920px)] flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-linear-to-b from-neutral-100 to-neutral-200/90 shadow-2xl ring-1 ring-black/5 dark:border-neutral-800 dark:from-neutral-950 dark:to-black dark:ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="resume-dialog-title" className="sr-only">
              Resume preview
            </h2>

            <div className="flex min-h-0 flex-1 flex-col p-2 sm:p-3">
              <iframe
                title="Resume PDF preview"
                src={RESUME_EMBED_SRC}
                className="min-h-0 w-full flex-1 basis-0 rounded-lg border border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-neutral-950"
              />
            </div>

            <div className="pointer-events-none absolute right-4 top-4 z-10 flex items-center gap-3 sm:right-5 sm:top-5">
              <a
                href={RESUME_SRC}
                download={DOWNLOAD_FILENAME}
                aria-label="Download resume PDF"
                className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-full border border-neutral-200/90 bg-white/95 text-neutral-800 shadow-[0_10px_28px_-12px_rgba(0,0,0,0.55),0_8px_12px_-10px_rgba(0,0,0,0.4)] ring-1 ring-black/10 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.6),0_10px_16px_-12px_rgba(0,0,0,0.45)] dark:border-neutral-600 dark:bg-neutral-900/95 dark:text-neutral-100 dark:ring-white/15 dark:hover:bg-neutral-800 dark:hover:shadow-[0_16px_30px_-14px_rgba(0,0,0,0.8),0_10px_18px_-12px_rgba(0,0,0,0.65)]"
              >
                <Download className="size-4" strokeWidth={1.75} aria-hidden />
              </a>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close resume preview"
                className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-full border border-neutral-200/90 bg-white/95 text-neutral-800 shadow-[0_10px_28px_-12px_rgba(0,0,0,0.55),0_8px_12px_-10px_rgba(0,0,0,0.4)] ring-1 ring-black/10 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.6),0_10px_16px_-12px_rgba(0,0,0,0.45)] dark:border-neutral-600 dark:bg-neutral-900/95 dark:text-neutral-100 dark:ring-white/15 dark:hover:bg-neutral-800 dark:hover:shadow-[0_16px_30px_-14px_rgba(0,0,0,0.8),0_10px_18px_-12px_rgba(0,0,0,0.65)]"
              >
                <X className="size-4" strokeWidth={1.75} aria-hidden />
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
