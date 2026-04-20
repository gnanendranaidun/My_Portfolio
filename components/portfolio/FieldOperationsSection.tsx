import { portfolioData } from "@/data/portfolio";
import { SectionFrame } from "./SectionFrame";
import { StatusPill } from "./StatusPill";

export function FieldOperationsSection() {
  return (
    <SectionFrame id="field-operations" title="Field Operations" subtitle="Mission Timeline">
      <div className="space-y-4">
        {portfolioData.fieldOperations.map((operation) => (
          <article
            key={operation.title}
            className="rounded border border-white/10 bg-white/[0.02] p-4 transition hover:border-red-400/50 hover:bg-red-500/[0.06]"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-white">{operation.title}</h3>
              <StatusPill status={operation.status} />
            </div>
            <p className="text-sm text-zinc-300">{operation.detail}</p>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
