import { portfolioData } from "@/data/portfolio";
import { SectionFrame } from "./SectionFrame";
import { StatusPill } from "./StatusPill";

export function CapabilitiesSection() {
  return (
    <SectionFrame id="capabilities" title="Capabilities" subtitle="System Modules">
      <div className="grid gap-4 sm:grid-cols-2">
        {portfolioData.capabilities.map((group) => (
          <article
            key={group.title}
            className="rounded border border-white/10 bg-white/[0.02] p-4 transition hover:-translate-y-1 hover:border-red-400/50 hover:shadow-[0_10px_30px_rgba(255,0,0,0.14)]"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-red-200">{group.title}</h3>
              <StatusPill status={group.status} />
            </div>
            <ul className="space-y-2 text-sm text-zinc-300">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
