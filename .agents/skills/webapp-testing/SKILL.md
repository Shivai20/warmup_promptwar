---
name: webapp-testing
description: >-
  Verify web application user journeys, responsive layouts, accessibility compliance, state persistence, and speech flows with tangible browser evidence.
---

# Webapp Testing Skill

Apply this skill after completing each usable workflow and prior to final submission.

## Testing Protocol

1. **Connected Workflow Verification:**
   - Test end-to-end data flow: Notice Input -> Grounded Explanation -> Step Checklist -> Confirmed Task -> My Day Dashboard.
   - Verify that data correctly persists across browser refreshes (`localStorage`).

2. **Accessibility & Responsive Checks:**
   - Verify layout at 360px width without horizontal scrollbars.
   - Verify 200% browser zoom rendering.
   - Verify tab order and focus-visible indicators.
   - Verify font scaling (20px, 24px, 28px) retains control visibility without clipping.

3. **Speech & Audio Verification:**
   - Test speech recognition state transitions (Ready -> Listening -> Review -> Processed).
   - Test audio collision safety (playback must stop before listening begins).
   - Document speech recognition and synthesis behavior in English and Hindi.

4. **Error & Boundary Testing:**
   - Test handling of notices without dates.
   - Test prompt injection inputs (ensure model treats text purely as data).
   - Test network failure / missing API key (ensure manual task management works independently).
