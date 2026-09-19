---
name: systematic-debugging
description: >-
  Systematically isolate, reproduce, root-cause, fix, and verify software defects and test failures with minimal regressions.
---

# Systematic Debugging Skill

Apply this skill whenever an unexpected error, API failure, UI glitch, or test failure occurs.

## Debugging Workflow

1. **Reproduce Reliably:**
   - Create a minimal reproduction command, script, or browser interaction.
   - Capture exact error messages, stack traces, and HTTP status codes.

2. **Isolate Root Cause:**
   - Trace data flow from input to error site.
   - Inspect server logs, browser console logs, and network payloads.
   - Formulate a testable hypothesis before altering code.

3. **Minimal Surgical Fix:**
   - Implement the minimal targeted fix addressing the verified root cause.
   - Do not refactor unrelated code or alter working interfaces.

4. **Verify & Prevent Regressions:**
   - Re-run the reproduction test to confirm resolution.
   - Run the broader test suite (`pytest`, UI checks) to ensure no regressions were introduced.
