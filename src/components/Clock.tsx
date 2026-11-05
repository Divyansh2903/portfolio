import { useEffect, useState } from 'react';

const IST_ZONE = 'Asia/Kolkata';
const LOCAL_ZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone,
  })
    .format(date)
    .toUpperCase();
}

function zoneAbbreviation(date: Date, timeZone: string) {
  const part = new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'short' })
    .formatToParts(date)
    .find((p) => p.type === 'timeZoneName');
  return part?.value ?? timeZone;
}

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

/** Shows my time (IST). Hovering or focusing it shows the visitor's own local time instead. */
export function Clock() {
  const now = useNow();
  const [showLocal, setShowLocal] = useState(false);
  const viewerIsInIst = LOCAL_ZONE === IST_ZONE;

  const istLabel = `${formatTime(now, IST_ZONE)} IST`;
  const localLabel = `${formatTime(now, LOCAL_ZONE)} ${zoneAbbreviation(now, LOCAL_ZONE)}`;
  const label = showLocal && !viewerIsInIst ? localLabel : istLabel;

  return (
    <span
      className="cursor-default tabular-nums"
      onMouseEnter={() => setShowLocal(true)}
      onMouseLeave={() => setShowLocal(false)}
      onFocus={() => setShowLocal(true)}
      onBlur={() => setShowLocal(false)}
      tabIndex={0}
      aria-label={
        viewerIsInIst ? `Current time ${istLabel}` : `Current time ${istLabel}, your local time ${localLabel}`
      }
    >
      <time dateTime={now.toISOString()}>{label}</time>
    </span>
  );
}
