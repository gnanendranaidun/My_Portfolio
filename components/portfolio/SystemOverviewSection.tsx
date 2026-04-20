import { portfolioData } from "@/data/portfolio";
import { SectionFrame } from "./SectionFrame";

export function SystemOverviewSection() {
  return (
    <SectionFrame id="overview" title="System Overview" subtitle="Node Context">
      <p className="mb-5 text-sm leading-7 text-zinc-300 sm:text-base">{portfolioData.overview.description}</p>
      <ul className="grid gap-3">
        {portfolioData.overview.bullets.map((item) => (
          <li
            key={item}
            className="rounded border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-200 transition hover:border-red-400/40 hover:bg-red-500/[0.06]"
          >
            {item}
          </li>
        ))}
      </ul>
    </SectionFrame>
  );
}
