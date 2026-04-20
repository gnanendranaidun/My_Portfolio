import { portfolioData } from "@/data/portfolio";
import { SectionFrame } from "./SectionFrame";

export function SystemLogsSection() {
  return (
    <SectionFrame id="system-logs" title="System Logs" subtitle="Verified Signals">
      <div className="space-y-3">
        {portfolioData.logs.map((log) => (
          <article
            key={log.event}
            className="rounded border border-white/10 bg-black/30 p-4 transition hover:border-red-400/50"
          >
            <h3 className="mb-1 font-mono text-sm uppercase tracking-[0.12em] text-red-200">{log.event}</h3>
            <p className="text-sm text-zinc-300">{log.detail}</p>
            {log.link !== "#" ? (
              <a
                href={log.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs uppercase tracking-[0.14em] text-zinc-200 underline decoration-red-400/70 underline-offset-4 hover:text-red-200"
              >
                Open source log
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
