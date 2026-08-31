import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Building2,
  Image as ImageIcon,
  Lock,
  ScanSearch,
  AlertTriangle,
  LoaderCircle,
} from "lucide-react";

import { Disclaimer } from "@/components/Disclaimer";
import { RISK_BANDS, riskTextClass } from "@/lib/scam-analysis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScamShield AI — Check Before You Trust" },
      {
        name: "description",
        content:
          "Analyze suspicious job offers, recruitment emails and messages with AI-powered scam risk detection. Clear risk scores, reasons and verification steps.",
      },
      { property: "og:title", content: "ScamShield AI — Check Before You Trust" },
      {
        property: "og:description",
        content:
          "AI-powered scam risk detection for job offers, emails, WhatsApp and SMS messages. Risk estimates with transparent reasoning.",
      },
    ],
  }),
  component: Home,
});

const STEPS = [
  {
    n: "01",
    color: "text-neon-cyan",
    title: "Submit",
    body: "Paste a message or upload a screenshot of the suspicious offer or conversation.",
  },
  {
    n: "02",
    color: "text-neon-amber",
    title: "AI Analysis",
    body: "Our AI analyzes suspicious patterns, domains and pressure tactics all at once.",
  },
  {
    n: "03",
    color: "text-neon-rose",
    title: "Understand",
    body: "Receive a clear risk assessment and recommended verification steps.",
  },
];

const FEATURES = [
  {
    icon: ScanSearch,
    title: "Smart Text Analysis",
    body: "Detect suspicious language and common scam patterns across emails, SMS and chats.",
  },
  {
    icon: ImageIcon,
    title: "Screenshot Analysis",
    body: "Upload screenshots of emails, chats, or job offers and have them read for you.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    body: "Get a Low, Moderate, High, or Critical risk estimate on a transparent 0–100 scale.",
  },
  {
    icon: Building2,
    title: "Company Verification Guide",
    body: "Work through a structured checklist to independently verify a company.",
  },
  {
    icon: BarChart3,
    title: "Detailed Explanation",
    body: "Understand exactly which patterns increased the risk score, and how strongly.",
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    body: "Screenshots are analyzed on demand, not permanently stored, and you can delete history.",
  },
];

function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neon-cyan">
            <span className="ss-blink size-1.5 rounded-full bg-neon-cyan" /> AI-powered risk
            detection
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Check
            <br />
            Before
            <br />
            You <span className="neon-text text-neon-cyan">Trust.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Analyze suspicious job offers, emails, and messages with AI-powered scam risk detection.
            Transparent scoring, clear reasoning, and independent verification steps.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/analyze"
              className="glow-cyan rounded-md bg-neon-cyan px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-neon-lime"
            >
              Analyze a Message
            </Link>
            <Link
              to="/analyze"
              className="rounded-md border border-line bg-panel px-5 py-3 text-sm font-medium transition hover:border-neon-amber hover:text-neon-amber"
            >
              Check a Job Offer
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
            <span>▸ 13 signal categories</span>
            <span className="text-neon-amber">▸ 4 risk tiers</span>
            <span className="text-neon-violet">▸ privacy-first</span>
          </div>
        </div>

        <div className="relative">
          <div className="glow-cyan rounded-2xl border border-line bg-panel p-5">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                Live scan
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-neon-cyan">
                <LoaderCircle className="size-3.5 animate-spin" /> scanning
              </span>
            </div>
            <div className="relative mt-4 overflow-hidden rounded-lg border border-line bg-background">
              <div className="space-y-2.5 p-4 font-mono text-[10.5px] leading-relaxed text-muted-foreground">
                <p>Recruiter: Hi, we have a remote role for you.</p>
                <p className="text-neon-amber">⚠ “Please send $50 to cover onboarding fees.”</p>
                <p className="text-neon-rose">⚠ “Share your bank details + OTP now.”</p>
                <p>Salary: $8,000/mo · no experience needed</p>
                <p>Domain: job-verify-882[.]xyz</p>
              </div>
              <div className="ss-scanline pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-neon-cyan/25 to-transparent" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px] tracking-wide uppercase">
              <div className="rounded-md border border-line bg-background p-2 text-center">
                <span className="text-neon-rose">HIGH</span>
                <br />
                payment
              </div>
              <div className="rounded-md border border-line bg-background p-2 text-center">
                <span className="text-neon-amber">MED</span>
                <br />
                urgency
              </div>
              <div className="rounded-md border border-line bg-background p-2 text-center">
                <span className="text-neon-amber">MED</span>
                <br />
                salary
              </div>
            </div>
          </div>
          <div className="glow-amber absolute -bottom-5 -left-5 hidden rounded-xl border border-neon-rose/40 bg-panel px-4 py-3 text-center sm:block">
            <span className="neon-text font-display text-2xl font-bold text-neon-rose">78</span>
            <span className="block font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              risk / 100
            </span>
          </div>
        </div>
      </section>

      <section className="border-t border-line/70 py-12">
        <h2 className="font-display text-lg font-semibold tracking-[0.15em] uppercase">
          How it works
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n} className="rounded-xl border border-line bg-panel p-5">
              <span className={`font-mono text-xs ${step.color}`}>{step.n}</span>
              <h3 className="mt-2 font-display text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line/70 py-12">
        <h2 className="font-display text-lg font-semibold tracking-[0.15em] uppercase">
          Capabilities
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-line bg-panel p-5 transition hover:border-neon-cyan/50"
            >
              <span className="grid size-9 place-items-center rounded-md bg-neon-cyan/10 text-neon-cyan">
                <feature.icon className="size-4" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line/70 py-12">
        <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold">Risk scoring, made legible</h2>
              <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                Every score maps to a four-tier scale so you can act with confidence — and know the
                limits of an AI estimate.
              </p>
            </div>
            <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              4-tier scale
            </span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {RISK_BANDS.map((band) => (
              <div
                key={band.level}
                className="rounded-lg border border-line bg-background/40 p-4"
                style={{ borderColor: "color-mix(in oklab, currentColor 12%, transparent)" }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`size-2.5 rounded-full ${
                      {
                        Low: "bg-risk-low",
                        Moderate: "bg-risk-moderate",
                        High: "bg-risk-high",
                        Critical: "bg-risk-critical",
                      }[band.level]
                    }`}
                  />
                  <span className={`font-display text-sm font-semibold ${riskTextClass(band.level)}`}>
                    {band.level}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground">{band.range}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/70 py-10">
        <Disclaimer />
      </section>
    </main>
  );
}
