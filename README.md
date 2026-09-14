# Scam Guard AI

crete professional website Build a Professional AI Scam & Fake Job Detector Website

Create a modern, premium, fully responsive web application called ScamShield AI.

🎯 Main Purpose

ScamShield AI helps users analyze suspicious:

Job offers

Recruitment emails

WhatsApp messages

SMS messages

Freelance job offers

Screenshots of suspicious conversations

The AI should provide a Scam Risk Assessment based on suspicious patterns and explain the reasons clearly.

IMPORTANT: The system must clearly state that results are AI-generated risk estimates and are not guaranteed proof that an offer or company is fraudulent.

🎨 DESIGN & UI REQUIREMENTS

Create a premium, trustworthy cybersecurity-inspired design.

Design Style:

Modern SaaS platform

Clean and professional

Minimal but visually impressive

Trust and security focused

Smooth animations

Responsive for mobile, tablet, and desktop

Accessible UI with good contrast

Suggested Visual Elements:

Shield icon

AI scanning animation

Security dashboard

Risk meter

Warning indicators

Document/email analysis cards

Interactive charts

Do not make the interface look overly complicated.

🏠 HOMEPAGE

Hero Section

Main Headline:

"Check Before You Trust."

Subheadline:

Analyze suspicious job offers, emails, and messages with AI-powered scam risk detection.

CTA Buttons:

Analyze a Message

Check a Job Offer

Add a visual AI security scanner animation on the right side.

How It Works Section

Create 3 professional steps:

1. Submit

Paste a message or upload a screenshot.

2. AI Analysis

Our AI analyzes suspicious patterns and risk indicators.

3. Understand

Receive a clear risk assessment and recommended verification steps.

Features Section

Create feature cards for:

🔍 Smart Text Analysis

Detect suspicious language and common scam patterns.

🖼 Screenshot Analysis

Upload screenshots of emails, chats, or job offers.

⚠️ Risk Assessment

Get a Low, Medium, High, or Critical risk estimate.

🏢 Company Verification Guide

Learn steps to independently verify a company.

📊 Detailed Explanation

Understand which patterns increased the risk score.

🔒 Privacy Focused

Clearly explain how user-submitted data is handled.

🔎 AI ANALYSIS PAGE

Create a powerful analysis interface.

Input Methods

Add tabs:

Tab 1: Paste Text

Large textarea where users can paste:

Emails

Job offers

WhatsApp messages

SMS messages

Recruitment messages

Placeholder:

"Paste the suspicious message or job offer here..."

Tab 2: Upload Screenshot

Allow users to upload:

PNG

JPG

JPEG

WEBP

Show image preview before analysis.

Add:

Analyze with AI button.

🤖 AI ANALYSIS ENGINE

Create the frontend structure for an AI-powered analysis system.

The AI should analyze signals such as:

Suspicious Indicators

Requests for upfront payment

Requests for bank details

Requests for passwords or OTPs

Unrealistic salary promises

Urgent pressure tactics

Poor grammar combined with impersonation signals

Generic greetings

Suspicious links

Requests to communicate outside official channels

Fake company domains

Requests to purchase equipment using personal money

Suspicious recruiter behavior

Requests for unnecessary personal documents

Important:

Do not automatically label something as a scam based on only one indicator.

The system should evaluate multiple signals and explain uncertainty.

📊 RESULTS PAGE

After analysis, show a professional security report.

Risk Score

Display:

Scam Risk Score: 78/100

Use a visual circular progress indicator.

Risk Levels:

🟢 Low Risk: 0–25
🟡 Moderate Risk: 26–50
🟠 High Risk: 51–75
🔴 Critical Risk: 76–100

AI Verdict

Example:

"This message contains several patterns commonly associated with recruitment scams. However, this result is an AI-generated risk estimate and should not be treated as definitive proof."

Suspicious Indicators

Display individual cards.

Example:

⚠️ Upfront Payment Request

The message asks the applicant to pay money before employment verification.

Risk Impact: High

⚠️ Unrealistic Salary

The offered salary appears unusually high compared with the limited job requirements.

Risk Impact: Medium

⚠️ Urgency Pressure

The message encourages the user to act immediately without allowing time for independent verification.

Risk Impact: Medium

🛡 RECOMMENDED ACTIONS

Based on analysis, generate personalized recommendations.

Examples:

Do not send money before independently verifying the employer.

Do not share OTPs or passwords.

Verify the company through its official website.

Check whether the sender uses an official company domain.

Contact the company using contact information found independently.

Search for the job listing on the company's official careers page.

Be cautious of pressure to act immediately.

🏢 COMPANY VERIFICATION PAGE

Create a dedicated page called:

Verify a Company

Allow users to enter:

Company Name

Website

Recruiter Email

Job Posting URL

The page should provide a structured verification checklist.

Verification Checklist

Domain Check

Does the email domain match the official company website?

Official Website Check

Is the company website professional and consistent?

Careers Page Check

Does the job appear on the official careers page?

Contact Verification

Can the company be contacted through independently verified contact information?

Social Presence

Does the company have a legitimate and consistent professional presence?

Important:
Do not claim that a company is legitimate or fraudulent without reliable evidence.

Use language such as:

"Unable to verify"
"Additional verification recommended"
"Information appears consistent"

instead of definitive accusations.

📚 SCAM EDUCATION CENTER

Create a page called:

Scam Awareness Center

Include categories:

💼 Fake Job Scams

Common recruitment scam tactics.

📧 Phishing Emails

How attackers impersonate trusted organizations.

💬 Messaging Scams

Suspicious WhatsApp and SMS messages.

💰 Payment Scams

Why legitimate employers usually do not require applicants to pay upfront.

🔐 Identity Protection

How to protect personal information.

Each article should have:

Clear explanation

Warning signs

What to do

Safety checklist

👤 USER AUTHENTICATION

Create:

Sign Up

Login

Forgot Password

User Profile

Use secure authentication.

📂 USER DASHBOARD

Create a dashboard where users can view:

Total analyses

Recent analyses

Risk score history

Saved reports

Verification history

Add filters:

Date

Risk Level

Analysis Type

🗄 DATABASE STRUCTURE

Create database tables for:

Users

id

name

email

created_at

Analyses

id

user_id

input_type

input_text

image_url

risk_score

risk_level

ai_summary

created_at

Risk Indicators

id

analysis_id

indicator_name

description

severity

Saved Reports

id

user_id

analysis_id

saved_at

🔐 SECURITY & PRIVACY

Implement:

Secure authentication

Row-level security

Protected user data

File validation

File size limits

Rate limiting for analysis requests

Clear data retention policy

Delete analysis option

Do not permanently store uploaded screenshots unless necessary.

Allow users to delete their analysis history.

Never expose API keys in frontend code.

⚙️ TECHNICAL REQUIREMENTS

Build the project with:

React

TypeScript

Modern component architecture

Responsive design

Clean reusable components

Use a backend such as Supabase for:

Authentication

Database

Storage

Secure backend functions

Create secure server-side functions for AI API calls.

The frontend must never directly expose secret API keys.

🤖 AI RESPONSE FORMAT

Design the AI integration to return structured JSON:

{
"risk_score": 0,
"risk_level": "Low | Moderate | High | Critical",
"summary": "Short explanation of the assessment.",
"indicators": [
{
"name": "Indicator name",
"description": "Why this may be suspicious.",
"severity": "Low | Medium | High"
}
],
"recommended_actions": [
"Recommended action 1",
"Recommended action 2"
],
"confidence_notes": "Explain limitations and uncertainty."
}

Validate all AI responses before displaying them.

⚠️ REQUIRED DISCLAIMER

Display this disclaimer clearly on:

Homepage

Analysis page

Results page

Text:

"ScamShield AI provides automated risk assessments based on patterns and available information. Results are not definitive proof that an individual, job offer, or company is fraudulent or legitimate. Always perform independent verification before making financial or personal information decisions."

✨ ADVANCED FEATURES

Add the following advanced features:

Analysis Comparison

Allow users to compare two suspicious messages.

Risk History Chart

Show how analyzed risk levels are distributed.

Export Report

Allow users to export a personal analysis report.

Copy Safety Advice

Allow users to copy recommended actions.

Dark/Light Mode

Add theme switching.

Multi-language Ready

Design the application architecture to support multiple languages in the future.

Loading Experience

Show a professional AI scanning animation while analysis is running.

📱 RESPONSIVENESS

Ensure perfect responsiveness for:

Mobile

Tablet

Laptop

Desktop

Use a mobile-first approach.

🚀 FINAL QUALITY REQUIREMENTS

The final website should feel like a real startup product, not a basic student project.

Focus on:

Professional UI

Excellent UX

Clear information hierarchy

Security-focused design

Reusable components

Fast performance

Accessibility

Trustworthy language

Create realistic sample data so the website looks complete during development.

Start by building the complete homepage, navigation, authentication pages, AI analysis interface, results dashboard, and database integration.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/271ab62b-73c7-4739-8911-84d7168ee472).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
