import { Copy, Download, ShieldQuestion } from "lucide-react";
import { toast } from "sonner";

import { Disclaimer } from "@/components/Disclaimer";
import { RiskMeter } from "@/components/RiskMeter";
import {
  DISCLAIMER,
  severityTextClass,
  type AnalysisResult,
  type Severity,
} from "@/lib/scam-analysis";

const SEVERITY_BORDER: Record<Severity, string> = {
  Low: "border-risk-low/30 bg-risk-low/5",
  Medium: "border-risk-moderate/30 bg-risk-moderate/5",
  High: "border-risk-high/30 bg-risk-high/5",
};

function toPlainReport(result: AnalysisResult) {
  return [
    "ScamShield AI — Risk Report",
    `Scam Risk Score: ${result.risk_score}/100 (${result.risk_level} risk)`,
    "",
    "AI Verdict:",
    result.summary,
    "",
    "Suspicious indicators:",
    ...result.indicators.map((i) => `- [${i.severity}] ${i.name}: ${i.description}`),
    "",
    "Recommended actions:",
    ...result.recommended_actions.map((a) => `- ${a}`),
    "",
    "Confidence notes:",
    result.confidence_notes,
    "",
    DISCLAIMER,
  ].join("\n");
}

export function AnalysisReport({ result }: { result: AnalysisResult }) {
  const copyAdvice = async () => {
    await navigator.clipboard.writeText(result.recommended_actions.map((a) => `• ${a}`).join("\n"));
    toast.success("Safety advice copied");
  };

  const exportReport = () => {
    const blob = new Blob([toPlainReport(result)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `scamshield-report-${result.risk_score}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="ss-rise grid gap-5">
      <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
        <div className="rounded-2xl border border-line bg-panel p-6">
          <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>Risk score</span>
            <span>0–100</span>
          </div>
          <RiskMeter score={result.risk_score} level={result.risk_level} />
        </div>

        <div className="rounded-2xl border border-line bg-panel p-6">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <ShieldQuestion className="size-4 text-neon-cyan" /> AI verdict
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">{result.summary}</p>

          <div className="mt-7 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Suspicious indicators ({result.indicators.length})
          </div>
          <div className="mt-3 grid gap-2.5">
            {result.indicators.map((indicator) => (
              <div
                key={indicator.name}
                className={`rounded-xl border p-3.5 ${SEVERITY_BORDER[indicator.severity]}`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold">{indicator.name}</span>
                  <span
                    className={`rounded border border-current px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${severityTextClass(indicator.severity)}`}
                  >
                    {indicator.severity} impact
                  </span>
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                  {indicator.description}
                </p>
              </div>
            ))}
            {result.indicators.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No strong suspicious patterns were identified. This is not confirmation that the
                offer is legitimate.
              </p>
            )}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Recommended actions
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyAdvice}
                className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-xs transition hover:border-neon-cyan hover:text-neon-cyan"
              >
                <Copy className="size-3.5" /> Copy advice
              </button>
              <button
                type="button"
                onClick={exportReport}
                className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-xs transition hover:border-neon-cyan hover:text-neon-cyan"
              >
                <Download className="size-3.5" /> Export report
              </button>
            </div>
          </div>
          <ul className="mt-3 grid gap-2">
            {result.recommended_actions.map((action) => (
              <li key={action} className="flex gap-2.5 text-[13px] text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-neon-cyan" />
                {action}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl border border-line bg-muted/40 p-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Confidence notes
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              {result.confidence_notes}
            </p>
          </div>
        </div>
      </div>

      <Disclaimer />
    </div>
  );
}
