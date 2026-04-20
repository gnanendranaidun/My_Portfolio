import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionFrameProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function SectionFrame({ id, title, subtitle, children }: SectionFrameProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative border border-white/10 bg-black/60 p-6 shadow-[0_0_40px_rgba(255,0,0,0.08)] backdrop-blur sm:p-8"
    >
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <h2 className="font-mono text-lg uppercase tracking-[0.18em] text-red-300 sm:text-xl">
          {title}
        </h2>
        {subtitle ? (
          <span className="text-xs uppercase tracking-[0.16em] text-white/55">{subtitle}</span>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}
