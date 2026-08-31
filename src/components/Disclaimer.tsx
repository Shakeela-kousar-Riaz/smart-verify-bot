import { AlertTriangle } from "lucide-react";

import { DISCLAIMER } from "@/lib/scam-analysis";

export function Disclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex gap-4 rounded-xl border border-neon-amber/30 bg-neon-amber/5 ${compact ? "p-4" : "p-5"}`}
    >
      <AlertTriangle className="mt-0.5 size-5 shrink-0 text-neon-amber" />
      <p className={`leading-relaxed text-foreground/90 ${compact ? "text-xs" : "text-sm"}`}>
        {DISCLAIMER}
      </p>
    </div>
  );
}
