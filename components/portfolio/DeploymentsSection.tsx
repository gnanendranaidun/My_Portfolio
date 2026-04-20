import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { SectionFrame } from "./SectionFrame";
import { StatusPill } from "./StatusPill";

export function DeploymentsSection() {
  return (
    <SectionFrame id="deployments" title="Deployments" subtitle="Pipeline Registry">
      <div className="grid gap-4 lg:grid-cols-2">
        {portfolioData.deployments.map((deployment) => (
          <article
            key={deployment.name}
            className={`group rounded border p-4 transition hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(255,0,0,0.16)] ${
              deployment.featured
                ? "border-red-500/40 bg-red-500/[0.06]"
                : "border-white/10 bg-white/[0.02] hover:border-red-400/45"
            }`}
          >
            <div className="mb-4 overflow-hidden rounded border border-white/10">
              <Image
                src={deployment.image}
                alt={deployment.name}
                width={1200}
                height={700}
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-white">{deployment.name}</h3>
              <StatusPill status={deployment.status} />
            </div>

            <p className="mb-2 text-sm text-zinc-200">{deployment.summary}</p>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.12em] text-red-200">{deployment.pipeline}</p>
            <p className="mb-4 text-sm text-zinc-300">{deployment.impact}</p>

            <a
              href={deployment.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.14em] text-zinc-100 transition hover:border-red-400/70 hover:text-red-200"
            >
              View deployment node
            </a>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
