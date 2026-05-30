# Shared Recipe: Expert Panel Setup & Verification (Claude-in-Chrome)

This recipe is invoked by EVERY Innovation-Harness workflow skill (Workflows 1–6) as
**Phase 0 — Convene the Panel**, before any blanking/leaking rounds begin. It brings up
the four "super-expert" LLMs in dedicated Chrome tabs, forces each into its high-reasoning
mode, and verifies the configuration with a hard check. Do not start Round 1 until all four
rows of the readiness table pass.

> Transport: this Claude Code session is the **Orchestrator**. The four experts are real
> browser sessions driven via `mcp__claude-in-chrome__*` tools. Tabs are created in one MCP
> tab group (one window) — only one tab is foreground at a time (see Lesson L3).

---

## The four experts (fixed roles)

| Slot | Service | URL (new chat)             | Default specialty lens                                   |
|------|---------|----------------------------|----------------------------------------------------------|
| A    | Claude  | https://claude.ai/new      | Biology + Ancient Texts (Vedas/Upanishads) + Philosophy  |
| B    | ChatGPT | https://chatgpt.com/       | Physics + Chemistry + Complex Systems + Rigorous Eng.    |
| C    | Gemini  | https://gemini.google.com/app | Social Sciences + Product + Evaluation + HCI          |
| D    | Grok    | https://grok.com/          | Creative World-Modeling + Radical Efficiency + Synthesis |

Record the assigned `tabId` for each slot in the run's state file (`state/run-XXXX.json`)
under `experts: {A: tabId, B: tabId, C: tabId, D: tabId}`.

---

## Phase 0 procedure

### Step 0.1 — Convene
1. `tabs_context_mcp { createIfEmpty: true }` to get/create the group.
2. Create 3 more tabs with `tabs_create_mcp` so there are 4 total.
3. `browser_batch` → `navigate` each tab to its URL above.
4. Screenshot each tab. **Verify login**: if any tab shows a sign-in wall, STOP and ask the
   user to log in manually (never enter credentials — see safety rules). Do not proceed.

### Step 0.2 — Force high-reasoning mode (PER EXPERT)

Each service exposes its model/effort picker in the **composer** (bottom input bar). Settings
are sticky per browser profile, so this only needs doing once per session, but the
verification (0.3) runs every time.

**A · Claude** — target = **Opus 4.8 · High**
- Picker is in the composer, bottom-right (`Opus 4.8  High ⌄`). Usually already correct.
- If not: click the model label → choose `Opus 4.8`; click the effort label → choose `High`.

**B · ChatGPT** — target = **Pro**
- Composer shows a mode dropdown labelled `Instant ⌄`.
- Click it → menu lists `Instant`, `Thinking · Light`, `Pro`, `Configure…`.
- Click **`Pro`**. Composer label must then read `Pro`.

**C · Gemini** — target = **3.1 Pro · Extended thinking**
- Composer shows a mode dropdown labelled `Pro ⌄`. **Activate the tab first** (Lesson L3).
- Click it (use `find` → click by ref; coordinate clicks are flaky here — Lesson L1).
- Menu lists `3.1 Flash-Lite`, `3.5 Flash`, `3.1 Pro ✓`, and a `Thinking level` submenu.
- Ensure **`3.1 Pro`** is checked.
- **Hover** (do not click) the `Thinking level` row to expand its submenu, then select
  **`Extended`**. Clicking the parent row closes the menu — it is a hover-submenu (Lesson L2).
- Composer label must then read `Pro  Extended`.

**D · Grok** — target = **Expert**
- Composer shows a mode dropdown labelled `Expert ⌄`, bottom-right. Usually already correct.
- If not: click it → choose `Expert`.

### Step 0.3 — Verification harness (HARD GATE)
For each expert, `zoom` into the composer's mode label and confirm it reads the target string:

| Expert  | Composer label must contain |
|---------|-----------------------------|
| Claude  | `Opus 4.8` and `High`       |
| ChatGPT | `Pro`                       |
| Gemini  | `Pro` and `Extended`        |
| Grok    | `Expert`                    |

Write the observed label into the state file. If any label does not match after 2 retries,
STOP and surface a screenshot to the user — do not silently run a round with the wrong model.

### Step 0.4 — Sanity ping (optional but recommended)
Send `hello` to each expert; confirm a reply renders (tab title changes / response bubble
appears). This proves the full click→type→Enter→read loop before committing to a real round.

---

## Browser-automation lessons (apply throughout every workflow)

- **L1 — Prefer `find` → click-by-ref over raw coordinates.** Especially Gemini, whose
  onboarding popups ("Let Gemini Spark…") reflow the layout and shift coordinates. Use
  `find` to get a stable `ref`, then `computer { ref }`.
- **L2 — Gemini "Thinking level" is a hover-submenu.** Open the picker once, then `hover`
  the row (never click it) so the submenu expands; click `Extended` in the submenu.
- **L3 — Activate the tab before hover/submenu operations.** All four experts share one
  window, so only the foreground tab renders hover states reliably. Bring the target tab to
  the front (a click on its page, or screenshot it) before driving hover-dependent menus.
- **L4 — Dismiss onboarding popups first.** Gemini's "Get started / Not now" card and
  ChatGPT's "Claude is active in this tab group" toast can intercept clicks. Clear them.
- **L5 — Open a picker once; a second click on the same trigger closes it.** Sequence is
  open → (find/hover) → select, not open → open.
- **L6 — Per-send completion check.** Reply latencies differ wildly (Grok "Expert" agents are
  much slower than Claude). After sending, wait for streaming to finish (no "stop" button /
  stable text) before reading the answer — never read a half-streamed response.
- **L7 — Never enter credentials.** If logged out, hand off to the user.
- **L8 — Captures are PERSONAL data.** The panel runs in the operator's logged-in accounts, so
  `get_page_text`/screenshots routinely contain the operator's name/email/location and unrelated
  private history (sidebars, account menus). Transcribe **only the answer body**, never the
  surrounding chrome, and run the [`sanitization.md`](sanitization.md) PRE-PUBLISH GATE before any
  commit to a public repo.

## State this recipe writes
- `experts`: slot → tabId map
- `expert_modes`: slot → observed composer label (audit trail)
- `phase0_passed`: boolean gate that Round 1 checks before starting
