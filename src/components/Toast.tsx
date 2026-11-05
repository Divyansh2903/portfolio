type ToastProps = {
  message: string;
  visible: boolean;
};

/**
 * A small confirmation pill at the bottom of the screen.
 * The visible pill keeps its text while it fades out; a separate live region
 * announces the message to screen readers each time it appears.
 */
export function Toast({ message, visible }: ToastProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-6">
      <p
        aria-hidden
        className={`rounded-full bg-foreground px-4 py-2 text-detail text-background shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)] transition-[opacity,translate] duration-200 ease-out motion-reduce:transition-none ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        {message}
      </p>
      <span role="status" aria-live="polite" className="sr-only">
        {visible ? message : ''}
      </span>
    </div>
  );
}
