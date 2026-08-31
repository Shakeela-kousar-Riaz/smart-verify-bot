import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-panel/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} ScamShield AI · risk estimates, not verdicts</span>
        <span className="flex gap-5">
          <Link to="/awareness" className="transition hover:text-neon-cyan">
            Awareness
          </Link>
          <Link to="/verify" className="transition hover:text-neon-cyan">
            Verify
          </Link>
          <Link to="/analyze" className="transition hover:text-neon-cyan">
            Analyze
          </Link>
        </span>
      </div>
    </footer>
  );
}
