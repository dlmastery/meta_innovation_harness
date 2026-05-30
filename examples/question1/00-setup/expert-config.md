# Setup — Expert Mode Configuration & Verification

## Purpose

This document records the per-expert high-reasoning mode that was targeted, the configuration steps taken, the observed result, and the browser-automation lessons learned during the setup phase.

---

## Per-Expert Configuration Table

| # | Expert | Target Mode Label | Configuration Action | Observed Result | Verified? |
|---|---|---|---|---|---|
| 1 | Claude (tab 1033526908) | Opus 4.8 · High reasoning | Model picker → "Claude Opus 4.8"; reasoning slider → "High" | "High" reasoning mode active on Opus 4.8 | YES |
| 2 | ChatGPT (tab 1033526909) | Pro mode | Mode picker: changed from "Instant" → "Pro" | Pro mode confirmed active | YES |
| 3 | Gemini (tab 1033526910) | Extended Thinking (Gemini 3.1 Pro) | Model = Gemini 3.1 Pro (or Flash Thinking); Thinking Level submenu → "Extended" | "Extended" thinking level set | YES |
| 4 | Grok (tab 1033526911) | Expert mode | Mode picker → "Expert" | Expert mode active | YES |

---

## Configuration Detail — Claude (tab 1033526908)

- Opened model selector from the chat input area.
- Selected "Claude Opus 4.8" from the model list.
- Located the reasoning/thinking slider and moved it to the "High" position.
- Confirmed the header/indicator showed Opus 4.8 · High before proceeding.

## Configuration Detail — ChatGPT (tab 1033526909)

- On first inspection the mode was set to "Instant" (a lighter/faster mode).
- Changed to "Pro" via the mode/model dropdown at the top of the chat interface.
- Confirmed mode label changed to "Pro" before proceeding.

## Configuration Detail — Gemini (tab 1033526910)

- Located the model selector; chose Gemini 3.1 Pro / Flash Thinking variant.
- Opened the "Thinking Level" control — this is a **hover submenu**, not a direct click target; the submenu appears when hovering over the thinking icon/label.
- Selected "Extended" from the submenu options.
- Confirmed "Extended" thinking level was shown in the UI.

## Configuration Detail — Grok (tab 1033526911)

- Located the mode picker in the Grok chat interface.
- Selected "Expert" mode.
- Confirmed "Expert" displayed as the active mode.

---

## Browser-Automation Lessons Learned

These lessons were discovered during the convening and configuration phase and must be applied to all subsequent Q1 (and later) browser runs:

| # | Lesson | Detail |
|---|---|---|
| 1 | **Gemini: use find → element-ref clicks, not pixel coordinates** | Gemini's UI has popups and overlapping elements that shift absolute pixel coordinates. Always use element-reference-based clicking (find element by selector/text, then click the reference) rather than hardcoded (x, y) coordinates. |
| 2 | **Gemini: Thinking Level is a hover submenu** | The "Thinking Level" control does not respond to a direct click on its label. You must hover over the element first to reveal the submenu, then click the desired level ("Extended"). |
| 3 | **Activate the tab before hover operations** | Before issuing any hover command, explicitly select / activate the target tab (e.g., `select_page(tabId)`) to ensure the browser delivers the hover event to the correct window. Failure to do so causes hover events to silently miss. |
| 4 | **Dismiss onboarding popups before interacting** | Gemini (and potentially other platforms) may show onboarding or "what's new" modal popups on first visit. These must be dismissed (click "Got it" / "Dismiss" / press Escape) before any configuration or send actions work correctly. |
| 5 | **Per-send completion checks are required** | Do not fire the next send until the current expert has finished generating. Poll for the "stop generating" button disappearing or the response-complete indicator appearing. **Grok in Expert mode is notably slow** — allow extra polling time. |

---

## Cross-Links

- Tab roster: [convening.md](convening.md)
- Sanity verification: [sanity-hello.md](sanity-hello.md)
- Q1 invocation: [../outer-loop-01/inner-loop-Q1/00-invocation.md](../outer-loop-01/inner-loop-Q1/00-invocation.md)
