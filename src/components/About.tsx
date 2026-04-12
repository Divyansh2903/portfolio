import { motion } from 'framer-motion';

const INTRO =
  "Currently in 3rd Year pursuing BSc from BITS Pilani (Digital). I build full-stack and mobile applications with a focus on performance and real-world usability. I've worked on production apps, reduced load times significantly, and built systems used in real environments.";

export function About() {
  return (
    <section aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">
        About
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="max-w-xl text-[17px] leading-[1.55] text-neutral-600"
      >
        {INTRO}
      </motion.p>
    </section>
  );
}
