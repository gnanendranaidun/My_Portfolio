import { portfolioData } from "@/data/portfolio";
import { SectionFrame } from "./SectionFrame";

export function TransmitSignalSection() {
  return (
    <SectionFrame id="transmit" title={portfolioData.contact.title} subtitle="Communication Uplink">
      <p className="mb-5 text-sm text-zinc-300">{portfolioData.contact.message}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {portfolioData.contact.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-white/15 bg-white/[0.02] px-4 py-3 text-sm uppercase tracking-[0.14em] text-zinc-100 transition hover:border-red-400/70 hover:bg-red-500/[0.08] hover:text-red-100"
          >
            {link.label}
          </a>
        ))}
      </div>
    </SectionFrame>
  );
}
