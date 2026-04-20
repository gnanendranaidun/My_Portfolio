import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { StatusPill } from "./StatusPill";

export function HeroSection() {
  const { hero, name, role } = portfolioData;

  return (
    <header id="signal" className="relative overflow-hidden border border-red-500/30 bg-black p-8 sm:p-10">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_bottom,transparent_95%,rgba(255,0,0,0.25)_96%)] [background-size:100%_6px]" />
      <div className="relative space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-red-400"
        >
          {hero.signal}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl font-semibold text-white sm:text-4xl"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="font-mono text-sm uppercase tracking-[0.16em] text-red-200"
        >
          {role}
        </motion.p>

        <p className="max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">{hero.lead} {hero.summary}</p>

        <div className="flex flex-wrap gap-2">
          {hero.statuses.map((status) => (
            <StatusPill key={status} status={status} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={hero.links.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-red-500/60 bg-red-500/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-red-100 transition hover:bg-red-500/35"
          >
            Resume
          </a>
          <a
            href={hero.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-zinc-100 transition hover:border-red-400/70 hover:text-red-200"
          >
            GitHub Node
          </a>
          <a
            href={hero.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-zinc-100 transition hover:border-red-400/70 hover:text-red-200"
          >
            LinkedIn Channel
          </a>
        </div>
      </div>
    </header>
  );
}
