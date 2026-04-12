type SectionHeaderProps = {
  title: string;
};

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-8 mt-20 flex items-center gap-4 md:mt-24">
      <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-400">
        {title}
      </span>
      <div className="h-px min-w-0 flex-1 bg-neutral-200" aria-hidden />
    </div>
  );
}
