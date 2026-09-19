---
name: frontend-design
description: >-
  Establish an accessible, senior-first UI with large adjustable type (20-28px), 48px+ touch targets, clear voice states, high contrast, and responsive layout.
---

# Frontend Design Skill (Senior-First & Accessibility)

Apply this skill before crafting the UI shell and during design refinement to deliver an accessible, dignified, and visually pleasing experience for older adults.

## Core Design Principles

1. **Senior-Friendly Typography:**
   - Base body text: 20px default, with clearly labelled toggles for 24px and 28px.
   - High legibility fonts (e.g. Outfit, Inter, Noto Sans Devanagari for Hindi).
   - Line height at ~1.5 for comfortable reading; left-aligned text; short paragraphs.

2. **Touch Targets & Navigation:**
   - Minimum 48px x 48px interactive targets; primary voice microphone button 64px+.
   - Generous spacing between buttons to prevent accidental taps.
   - Avoid icon-only buttons; always pair icons with explicit text labels.
   - Always visible "Home" and "Back" navigation.

3. **Color, Contrast & Focus:**
   - WCAG AAA contrast ratio (>= 7:1 for headings, >= 4.5:1 for body).
   - Calm light background, dark high-contrast text, strong purposeful accent.
   - Clear high-visibility focus rings (`:focus-visible`) for keyboard navigation.

4. **Dynamic States & Voice Indicators:**
   - Distinct, explicit status badges: `Ready`, `Listening`, `Processing`, `Review`, `Speaking`, `Error`.
   - Never use countdown timers, forced rapid interactions, or hover-only controls.
   - Support responsive layouts down to 360px viewport without horizontal scrolling, and zoom up to 200%.
