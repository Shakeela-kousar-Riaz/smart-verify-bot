import { z } from "zod";

export const RISK_LEVELS = ["Low", "Moderate", "High", "Critical"] as const;
export type RiskLevel = (typeof RISK_LEVELS)[number];

export const SEVERITIES = ["Low", "Medium", "High"] as const;
export type Severity = (typeof SEVERITIES)[number];

export const indicatorSchema = z.object({
  name: z.string().min(1).max(120),
  description: z.string().min(1).max(600),
  severity: z.enum(SEVERITIES),
});

export const analysisResultSchema = z.object({
  risk_score: z.number().min(0).max(100),
  risk_level: z.enum(RISK_LEVELS),
  summary: z.string().min(1).max(1200),
  indicators: z.array(indicatorSchema).max(14),
  recommended_actions: z.array(z.string().min(1).max(300)).max(12),
  confidence_notes: z.string().min(1).max(800),
});

export type AnalysisResult = z.infer<typeof analysisResultSchema>;
export type RiskIndicator = z.infer<typeof indicatorSchema>;

export const DISCLAIMER =
  "ScamShield AI provides automated risk assessments based on patterns and available information. Results are not definitive proof that an individual, job offer, or company is fraudulent or legitimate. Always perform independent verification before making financial or personal information decisions.";

export function riskLevelFromScore(score: number): RiskLevel {
  if (score <= 25) return "Low";
  if (score <= 50) return "Moderate";
  if (score <= 75) return "High";
  return "Critical";
}

export const RISK_BANDS: { level: RiskLevel; range: string; token: string }[] = [
  { level: "Low", range: "0–25", token: "risk-low" },
  { level: "Moderate", range: "26–50", token: "risk-moderate" },
  { level: "High", range: "51–75", token: "risk-high" },
  { level: "Critical", range: "76–100", token: "risk-critical" },
];

export function riskTextClass(level: RiskLevel) {
  return {
    Low: "text-risk-low",
    Moderate: "text-risk-moderate",
    High: "text-risk-high",
    Critical: "text-risk-critical",
  }[level];
}

export function riskBorderClass(level: RiskLevel) {
  return {
    Low: "border-risk-low/40 bg-risk-low/5",
    Moderate: "border-risk-moderate/40 bg-risk-moderate/5",
    High: "border-risk-high/40 bg-risk-high/5",
    Critical: "border-risk-critical/40 bg-risk-critical/5",
  }[level];
}

export function severityTextClass(severity: Severity) {
  return {
    Low: "text-risk-low",
    Medium: "text-risk-moderate",
    High: "text-risk-high",
  }[severity];
}

/** Realistic sample report used for previews and the marketing surfaces. */
export const SAMPLE_ANALYSIS: AnalysisResult = {
  risk_score: 78,
  risk_level: "Critical",
  summary:
    "This message contains several patterns commonly associated with recruitment scams, including an upfront payment request and pressure to act immediately. However, this result is an AI-generated risk estimate and should not be treated as definitive proof.",
  indicators: [
    {
      name: "Upfront Payment Request",
      description:
        "The message asks the applicant to pay money before any employment verification has taken place.",
      severity: "High",
    },
    {
      name: "Bank Details & OTP Request",
      description:
        "Sensitive banking credentials and one-time passcodes are requested early in the conversation.",
      severity: "High",
    },
    {
      name: "Unrealistic Salary",
      description:
        "The offered salary appears unusually high compared with the limited stated job requirements.",
      severity: "Medium",
    },
    {
      name: "Urgency Pressure",
      description:
        "The sender encourages immediate action without allowing time for independent verification.",
      severity: "Medium",
    },
    {
      name: "Suspicious Sender Domain",
      description:
        "The contact domain does not appear to match a recognisable official company domain.",
      severity: "Medium",
    },
  ],
  recommended_actions: [
    "Do not send money before independently verifying the employer.",
    "Never share OTPs, passwords, or full bank details with a recruiter.",
    "Verify the company through its official website found via your own search.",
    "Check whether the job appears on the company's official careers page.",
    "Contact the company using contact details you found independently.",
    "Be cautious of any pressure to act immediately.",
  ],
  confidence_notes:
    "This assessment is based only on the text provided. Legitimate recruiters occasionally write informally or use short deadlines, and some scam messages look highly professional. Treat this as a prompt for further verification, not a conclusion.",
};
