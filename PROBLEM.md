# PROBLEM DEFINITION & USER PERSONA
**Beta AI — Senior Daily Companion**

## 1. The Core Problem
Older adults frequently receive complex, dense, and critical communications:
- Medical appointment reminders with fasting/preparation instructions.
- Municipal/utility maintenance notices or schedule changes.
- Banking or pension advisory notices with ambiguous deadlines and confusing legalistic terms.

### Key Senior Vulnerabilities:
1. **Cognitive & Terminology Overload:** Dense jargon causes anxiety and hesitation.
2. **Action Fragmentation:** Understanding a notice, figuring out what to do, and adding a reminder to a separate calendar requires juggling multiple apps—where steps get forgotten.
3. **Physical & Sensory Barriers:** Small typography, low-contrast buttons, intricate swipe gestures, and rapid disappearing toast notifications degrade confidence.
4. **Vulnerability to Misinformation / Scams:** Unscrupulous messages prompt fears; seniors need safe, grounded analysis that never asks for credentials or OTPs.

## 2. Target User Persona
- **Persona:** Senior citizen (60+) using a phone, tablet, or desktop browser.
- **Digital Comfort:** Can browse web pages and tap buttons, but intimidated by complex menus, rapid animations, or conversational bots that hallucinate or run off on tangents.
- **Vision/Motor Capabilities:** Needs large readable fonts (20px - 28px), high contrast (>= 4.5:1), generous touch targets (>= 48px), and zero hover-only dependencies.
- **Language:** English or Hindi (plus colloquial Hinglish phrases).

## 3. Product Vision & Promise
> **“Understand it. Take one step. Feel confident.”**

Beta AI is not a generic open-ended chatbot. It is a dedicated, assistive multi-workflow companion:
1. **Explain Something:** Simplifies pasted or spoken notices into plain language, extracts exact facts (with source trace quotes), identifies unknowns/ambiguities, and flags cautions.
2. **Guide Me:** Takes extracted actions and walks through them one step at a time, allowing the senior to pace themselves without feeling overwhelmed.
3. **My Day:** Converts guided steps or manual entries into confirmed, editable daily tasks with calm in-app proactive reminders.

## 4. Trust Boundaries & Non-Goals
- **No Hallucinated Dates:** If a notice omits a date or time, Beta AI marks it unknown and asks for clarification.
- **No Automatic External Actions:** Beta AI never books appointments, makes payments, sends messages, or promises that an external system was updated.
- **Strict Data Privacy:** All personal tasks and saved guides reside in local browser storage; pasted notices are not logged on the server.
- **Human-in-the-Loop Confirmation:** Every task creation or modification must be previewed and confirmed with explicit date/time readout. An undo button is always visible for the last mutation.
- **Offline/Degraded Resilience:** If AI calls fail or internet drops, the senior can still use "My Day" and manual task features normally.
