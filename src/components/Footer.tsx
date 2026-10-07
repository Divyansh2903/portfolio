import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeUpItem, sectionViewport } from '../lib/motion';

const IST_ZONE = 'Asia/Kolkata';
const LOCAL_ZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Free, keyless hit counter (https://abacus.jasoncameron.dev). Namespace + key
// are public, so anyone can read the count; that is fine for a portfolio.
const COUNTER_NAMESPACE = 'divyansh-space';
const COUNTER_KEY = 'portfolio-visits';
const COUNTER_BASE = 'https://abacus.jasoncameron.dev';
const SESSION_FLAG = 'portfolio-visit-counted';

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

function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let counted = false;
    try {
      counted = sessionStorage.getItem(SESSION_FLAG) === '1';
    } catch {
      /* storage blocked: fall through and just read */
    }

    // Count once per browser session, and never from local dev builds.
    const shouldHit = import.meta.env.PROD && !counted;
    if (shouldHit) {
      try {
        sessionStorage.setItem(SESSION_FLAG, '1');
      } catch {
        /* ignore */
      }
    }

    const url = `${COUNTER_BASE}/${shouldHit ? 'hit' : 'get'}/${COUNTER_NAMESPACE}/${COUNTER_KEY}`;
    fetch(url, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: { value?: number }) => {
        if (typeof data.value === 'number') setCount(data.value);
      })
      .catch(() => {
        /* leave the count hidden when the API is unreachable */
      });

    return () => controller.abort();
  }, []);

  return count;
}

function Clock() {
  const now = useNow();
  const [showLocal, setShowLocal] = useState(false);
  const viewerIsInIst = LOCAL_ZONE === IST_ZONE;

  const istLabel = `${formatTime(now, IST_ZONE)} IST`;
  const localLabel = `${formatTime(now, LOCAL_ZONE)} ${zoneAbbreviation(now, LOCAL_ZONE)}`;
  const label = showLocal && !viewerIsInIst ? localLabel : istLabel;

  return (
    <span
      className="relative inline-flex cursor-default items-center tabular-nums"
      onMouseEnter={() => setShowLocal(true)}
      onMouseLeave={() => setShowLocal(false)}
      onFocus={() => setShowLocal(true)}
      onBlur={() => setShowLocal(false)}
      tabIndex={0}
      aria-label={
        viewerIsInIst ? `Current time ${istLabel}` : `Current time ${istLabel}, your local time ${localLabel}`
      }
      title={viewerIsInIst ? undefined : `Your time: ${localLabel}`}
    >
      <time dateTime={now.toISOString()} className="transition-colors">
        {label}
      </time>
    </span>
  );
}

function VisitorCount() {
  const count = useVisitorCount();
  if (count === null) return null;

  return (
    <span className="tabular-nums" title="Total visits to this site">
      {count.toLocaleString('en-IN')} {count === 1 ? 'visitor' : 'visitors'}
    </span>
  );
}

export function Footer() {
  return (
    <motion.footer
      variants={fadeUpItem}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-neutral-200 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400 dark:border-neutral-800 dark:text-neutral-500"
    >
      <p className="flex items-center gap-2.5">
        <span>© {new Date().getFullYear()} divyansh singh</span>
        <span className="text-[13px] font-bold leading-none text-neutral-500 dark:text-neutral-400" aria-hidden>
          •
        </span>
        <Clock />
      </p>
      <VisitorCount />
    </motion.footer>
  );
}
