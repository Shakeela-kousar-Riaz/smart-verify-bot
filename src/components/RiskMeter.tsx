import { RISK_BANDS, riskTextClass, type RiskLevel } from "@/lib/scam-analysis";

const BAND_BG: Record<RiskLevel, string> = {
  Low: "bg-risk-low",
  Moderate: "bg-risk-moderate",
  High: "bg-risk-high",
  Critical: "bg-risk-critical",
};

const RING_COLOR: Record<RiskLevel, string> = {
  Low: "var(--neon-lime)",
  Moderate: "var(--neon-amber)",
  High: "var(--neon-rose)",
  Critical: "var(--neon-violet)",
};

export function RiskMeter({
  score,
  level,
  size = 176,
}: {
  score: number;
  level: RiskLevel;
  size?: number;
}) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className="relative grid place-items-center rounded-full"
        style={{
          width: size,
          height: size,
          background: `conic-gradient(from -90deg, ${RING_COLOR[level]} 0 ${score}%, var(--line) ${score}% 100%)`,
        }}
        role="img"
        aria-label={`Scam risk score ${score} out of 100, ${level} risk`}
      >
        <div className="grid size-[78%] place-items-center rounded-full bg-panel text-center">
          <div>
            <span className={`font-display text-4xl font-bold ${riskTextClass(level)}`}>
              {score}
            </span>
            <span className="font-mono text-sm text-muted-foreground">/100</span>
            <span
              className={`mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] ${riskTextClass(level)}`}
            >
              {level} risk
            </span>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-4 gap-1 font-mono text-[10px] uppercase">
        {RISK_BANDS.map((band) => (
          <div key={band.level} className="text-center">
            <span className={`mb-1 block h-1.5 rounded-full ${BAND_BG[band.level]}`} />
            <span className={band.level === level ? riskTextClass(level) : "text-muted-foreground"}>
              {band.level}
            </span>
            <span className="mt-0.5 block text-[9px] text-muted-foreground">{band.range}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
