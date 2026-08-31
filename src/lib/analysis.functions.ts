import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { analysisResultSchema, riskLevelFromScore, type AnalysisResult } from "./scam-analysis";

const inputSchema = z
  .object({
    inputType: z.enum(["text", "image"]),
    text: z.string().trim().max(12000).optional(),
    imageDataUrl: z
      .string()
      .max(8_000_000)
      .regex(/^data:image\/(png|jpe?g|webp);base64,[A-Za-z0-9+/=]+$/, "Unsupported image format")
      .optional(),
  })
  .refine((v) => (v.inputType === "text" ? !!v.text && v.text.length >= 20 : !!v.imageDataUrl), {
    message: "Provide at least 20 characters of text, or a PNG/JPG/WEBP screenshot.",
  });

const SYSTEM_PROMPT = `You are ScamShield AI, a cautious fraud-risk analyst reviewing job offers, recruitment emails, WhatsApp/SMS messages and freelance offers.

Evaluate signals such as: upfront payment requests, requests for bank details, requests for passwords or OTPs, unrealistic salary promises, urgent pressure tactics, poor grammar combined with impersonation, generic greetings, suspicious links, moving off official channels, lookalike or free-mail company domains, buying equipment with personal money, unusual recruiter behaviour, and requests for unnecessary personal documents.

Rules:
- Never conclude fraud from a single weak indicator. Weigh multiple signals together.
- Be explicit about uncertainty and about what could not be verified from the content alone.
- Use cautious, non-accusatory language. Never state as fact that a company or person is fraudulent.
- Score 0-100 where 0-25 Low, 26-50 Moderate, 51-75 High, 76-100 Critical.
- Recommended actions must be concrete independent verification steps.
Respond ONLY with JSON matching this shape:
{"risk_score":0,"risk_level":"Low|Moderate|High|Critical","summary":"","indicators":[{"name":"","description":"","severity":"Low|Medium|High"}],"recommended_actions":[""],"confidence_notes":""}`;

function extractJson(raw: string): unknown {
  const cleaned = raw
    .trim()
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/, "")
    .trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("The AI response could not be read.");
  return JSON.parse(cleaned.slice(start, end + 1));
}

export const analyzeMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }): Promise<AnalysisResult> => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) {
      throw new Error("AI is not configured for this project.");
    }

    const userContent =
      data.inputType === "image"
        ? [
            {
              type: "text",
              text: "Analyse this screenshot of a suspicious message or job offer for scam risk.",
            },
            { type: "image_url", image_url: { url: data.imageDataUrl! } },
          ]
        : [
            {
              type: "text",
              text: `Analyse the following suspicious message for scam risk:\n\n"""${data.text}"""`,
            },
          ];

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": apiKey,
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: "google/gemini-3.7-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userContent },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const message = await res.text();
      if (res.status === 429) {
        throw new Error("Too many analysis requests right now. Please try again in a moment.");
      }
      if (res.status === 402 || res.status === 403) {
        throw new Error(`AI analysis is currently unavailable: ${message.slice(0, 300)}`);
      }
      throw new Error(`AI analysis failed (${res.status}). ${message.slice(0, 300)}`);
    }

    const payload = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = payload.choices?.[0]?.message?.content;
    if (!content) throw new Error("The AI returned an empty response.");

    const parsed = analysisResultSchema.parse(extractJson(content));
    const score = Math.round(Math.min(100, Math.max(0, parsed.risk_score)));

    return {
      ...parsed,
      risk_score: score,
      risk_level: riskLevelFromScore(score),
    };
  });
