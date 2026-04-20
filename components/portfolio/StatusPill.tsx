type StatusTone = "active" | "deployed" | "processing" | "operational";

const toneClasses: Record<StatusTone, string> = {
  active: "border-red-500/70 bg-red-500/15 text-red-200",
  deployed: "border-emerald-400/70 bg-emerald-500/15 text-emerald-200",
  processing: "border-amber-400/70 bg-amber-500/15 text-amber-200",
  operational: "border-cyan-400/70 bg-cyan-500/15 text-cyan-200",
};

function normalizeStatus(status: string): StatusTone {
  const value = status.toLowerCase();
  if (value.includes("deploy")) return "deployed";
  if (value.includes("process")) return "processing";
  if (value.includes("operat")) return "operational";
  return "active";
}

export function StatusPill({ status }: { status: string }) {
  const tone = normalizeStatus(status);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] ${toneClasses[tone]}`}
    >
      <span className="h-2 w-2 rounded-full bg-current opacity-90" />
      {status}
    </span>
  );
}
