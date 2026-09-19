# Beta AI — Senior Daily Companion
## Product Requirements Document | PromptWars warm-up

Version: 2.0 — Voice and accessibility first | Status: proposed build scope | Date: 19 September 2026

## 1. Challenge and scope authority

Source: the user-supplied photograph of the PromptWars Warm-up Challenge slide.

The brief asks for a GenAI-powered website that is an intelligent, accessible and trustworthy daily companion for senior citizens. It should help with everyday tasks, confidence and independence; go beyond a simple chatbot; simplify complex information; anticipate needs; and offer proactive assistance at the user's pace.

The slide explicitly encourages thoughtfully connected workflows and meaningful functionality across the application. Build one end-to-end slice first, then complete the connected core workflows below. A single chat screen does not meet this product interpretation.

The name, features, stack, acceptance thresholds and schedule below are proposed product decisions, not organizer mandates. Exact build duration, judging weights, mandatory services and submission requirements are not visible in the slide and must be confirmed separately.

## 2. Product vision

**Beta AI helps a senior understand an everyday notice, turn it into manageable steps, and remember what to do next.**

Product promise: “Understand it. Take one step. Feel confident.”

The primary experience is a home screen with large task cards, a prominent tap-to-talk control, spoken and visible explanations, and a personal Today list. Voice operates the same workflows as buttons and typing; it is not a separate chatbot.

### Agreed direction and scope assumption

Core features: voice mode; large adjustable fonts; big buttons and simple navigation; plain-language explanations; step-by-step guidance; confirmation and undo. Hindi/English selection and read-aloud support these core features. Daily tasks and reminders are retained as the proposed practical use case from the earlier PRD; the user has not separately selected this over the alternatives. Message safety checks and photo-to-explanation remain future options, not MVP commitments.

### Primary user

An older adult who can use a phone or computer but finds dense notices, unfamiliar terminology and multi-step digital tasks overwhelming. Accommodate different levels of vision, dexterity and digital confidence without assuming all seniors have the same needs.

### Core user story

“When I receive an appointment or service notice, I want it explained simply, with clear next steps and a reminder I control, so I can handle it independently.”

## 3. MVP: three connected workflows

| Workflow | User outcome | Connection |
|---|---|---|
| Understand a notice | Plain-language explanation of spoken or pasted text | Extracts candidate actions for guided help |
| Do it step by step | A short checklist with one step visible at a time | User confirms actions to add to Today |
| My day | Review, edit and complete planned actions | Reopens original explanation and unfinished steps |

**Distinctive value:** information becomes a confirmed action and a visible follow-up. The user never has to copy an AI paragraph into a separate to-do app.

## 4. Functional requirements

### FR-1: Welcome and preferences — P0
- Offer “Start” without account creation.
- Let the user choose English or Hindi, and standard or larger text; provide sensible defaults and a skip option.
- Apply preferences consistently to navigation and generated explanations.
- Explain that saved items stay in this browser for the prototype. Provide “Clear my saved data.”
- No microphone permission request on page load.

### FR-2: Home — P0
- Show three large labelled entries: “Explain something,” “Guide me,” and “My day.”
- Display due and unfinished items with a clear next action.
- Show a gentle suggestion grounded in saved state, such as “You have an unfinished checklist. Continue?”
- Empty state explains how to start and offers clearly labelled fictional examples.
- Keep Home and Back actions consistently available.

### FR-3: Explain something — P0
- Accept typed, pasted or reviewed speech transcripts, capped at 5,000 characters for the prototype.
- Provide a labelled fictional sample so evaluators can try it immediately.
- On explicit submit, generate: short summary, important facts, unfamiliar terms, suggested next steps, missing information and cautions when warranted.
- Each factual claim or extracted action must be traceable to a supporting excerpt from the input, or clearly labelled as a general suggestion.
- Preserve names, amounts and dates exactly when stated. Do not invent missing deadlines, entitlements, appointment details or official procedures.
- Distinguish ambiguous dates and ask for clarification.
- Provide “Make it simpler,” “Guide me through this,” and “Add an action to My day.”
- Render model text safely; never execute embedded instructions or HTML.

### FR-4: Guide me — P0
- Open from a generated explanation, a saved item, or a labelled curated example.
- Show one short instruction at a time, with step number, Back, Next and completion state.
- Provide “Explain this step” to request a simpler explanation within the original context.
- Offer an editable task preview before saving an action to My day.
- Allow users to resume a saved checklist without repeating the original model call.
- A completed checklist must not imply that an external booking, payment or submission occurred.

### FR-5: My day and proactive assistance — P0
- Create, view, edit, complete and delete tasks; allow manual task creation even if AI is unavailable.
- Fields: title, optional notes, optional date/time, source reference and checklist progress.
- Dates inferred from text remain suggestions until reviewed and confirmed. Clarify incomplete dates; show the user's local time zone.
- Sort overdue and due-today items before upcoming items; show undated items separately.
- On app load and while open, show a calm in-app reminder for due actions, with Done and Reschedule controls.
- Explain why a suggestion appeared: “Based on the task you saved.”
- No background delivery claim: reminders are in-app only for the MVP, not guaranteed when the site is closed.

### FR-6: Voice mode and read-aloud — P0
- Show a large microphone button labelled “Tap to speak,” plus a nearby typing option.
- Request microphone permission only after the user taps it. Explain permission denial and allow retry or typing.
- Support English and Hindi.
- MVP uses tap-to-start/tap-to-stop speech turns, not always-on listening. A visible Stop recording control must remain available.
- Show explicit states: Ready, Listening, Processing, Review, Speaking, Error.
- Limit each prototype recording to 30 seconds with a visible warning near the limit.
- Display what was heard with Edit, Try again and Continue.
- In voice mode, speak short responses after the user's request. Outside voice mode, speak only on Read aloud. Never autoplay on page load.
- Offer Read aloud, Stop and Replay on explanations, guide steps and confirmation previews.
- Stop existing playback before starting another response. Stop playback before capturing a new utterance. Release microphone capture on stop, navigation or cancellation.
- Handle “repeat,” “next,” “go back,” “make it simpler,” “show my tasks,” and “add a reminder” within their valid screen context. If unclear, ask one short clarification.
- On speech failure, show usable text/buttons.

### FR-7: Confirm, cancel and undo — P0
- Before creating or editing a task, display and in voice mode read back the title, exact date, time and time zone. Offer Confirm, Edit and Cancel.
- Resolve relative phrases such as “tomorrow morning” against the user's current local date; ask for the missing time rather than invent it.
- Cancel saves nothing. Changing a preview invalidates any prior confirmation.
- Protect repeat clicks, repeated transcripts and retries from duplicate task creation using a stable action ID.
- Delete requires confirmation. Completion must be reversible. Keep a visible Undo last change action until the next mutation or session end.
- Confirm only after the storage operation succeeds; never speak “Saved” before persistence succeeds.

## 5. UX and accessibility requirements
- Default body text 20 px with clearly labelled 24 px and 28 px options.
- Primary touch controls at least 48 by 48 px.
- High contrast (>= 4.5:1), keyboard navigation, visible focus, ARIA live regions for status.
- No countdown timers, hover-only controls, or forced rapid interactions.
- Responsive design without horizontal scroll down to 360px viewport; usable at 200% zoom.
- Calm light background, dark readable text, strong accent.

## 6. GenAI behavior and trust boundaries
- Grounded extraction: summary, facts with excerpts, steps, clarifications, suggested tasks, cautions.
- Strict prompt boundaries: never process OTPs/passwords/cards; never invent missing details; do not diagnose or make commitments.
- Voice intent parser: strict schema with intent allowlist, spoken reply, task draft, clarification.
- Server-side validation and bounded timeouts.
- Deterministic fallback for manual task creation and navigation.

## 7. Data and persistence
- Browser LocalStorage for prototype preferences, saved explanations, and tasks.
- No raw audio retention. Transcripts retained only when part of confirmed explanations/tasks.
