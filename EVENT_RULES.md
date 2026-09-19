# EVENT RULES & BRIEF AUTHORITY
**PromptWars Warm-Up Challenge**

## 1. Official Requirements (Source: PromptWars Warm-up Challenge Slide)
- **Goal:** GenAI-powered website acting as an intelligent, accessible, and trustworthy daily companion for senior citizens.
- **Core Value:** Helps with everyday tasks, confidence, and independence.
- **Form Factor:** Website (must go beyond a simple chatbot).
- **Core Capabilities:**
  - Simplify complex information into plain, understandable terms.
  - Anticipate needs and offer proactive assistance at the user's pace.
  - Thoughtfully connected workflows and meaningful functionality across the whole application (a single chat window fails the brief).
  - High accessibility and trustworthiness.

## 2. Proposed Product Decisions (Builder Scope, Not Organizer Mandates)
- **Application Name:** Beta AI — Senior Daily Companion.
- **Core User Story:** “When I receive an appointment or service notice, I want it explained simply, with clear next steps and a reminder I control, so I can handle it independently.”
- **Architecture:** Single Python FastAPI backend + clean, accessible vanilla HTML/CSS/JS frontend.
- **3 Connected P0 Workflows:**
  1. *Explain something:* Grounded plain-language explanation of spoken or pasted text (with source traceability).
  2. *Guide me:* One-step-at-a-time interactive checklist derived from notice or template.
  3. *My day:* Senior-friendly task dashboard with grounded proactive reminders, editable time/date, and independent manual task management.
- **Speech Pipeline:** Tap-to-speak turns (Web Speech API / server fallback), dual-language support (English & Hindi), read-aloud TTS with Stop/Replay.
- **Safety & Trust Controls:** Explicit confirmation previews for all mutations, non-disappearing Undo for last action, prompt injection boundaries, no handling of secrets/OTPs/banking.
- **Persistence:** Browser-local `localStorage` ensuring user data stays on device; manual features remain functional during LLM network outages.

## 3. Unverified Status & Event Constraints (To Be Confirmed)
- **Time Limit:** Exact build duration (assumed 120-minute rapid build window for sprint budgeting).
- **Judging Criteria & Weights:** Rubric weights (e.g. UX vs Technical Depth vs AI Quality) unstated.
- **Mandatory Cloud/Model APIs:** No specific LLM vendor mandated (using Gemini / local API keys with graceful degradation).
- **Submission Requirements:** Deployment URL / Git repository / demo video format to be verified.
