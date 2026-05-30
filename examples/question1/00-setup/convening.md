# Setup — Tab Convening

## Purpose

This document records how the four expert browser tabs were created and navigated by the Orchestrator (Claude Code session using Claude-in-Chrome MCP), and catalogues the final tab roster used throughout the Q1 run.

---

## Transport

**Mechanism:** Claude-in-Chrome MCP — the Orchestrator issued `navigate_page`, `new_page`, `select_page`, and related browser-automation calls to open and configure each expert's chat interface inside the user's logged-in Chrome profile.

**Operator account:** [redacted] — already authenticated on all four platforms before the session began. _(Personal identifiers are redacted in this public archive per the sanitization recipe.)_

---

## Tab Roster

| # | Expert Platform | Tab ID | URL navigated to | Notes |
|---|---|---|---|---|
| 1 | Claude (Anthropic) | 1033526908 | claude.ai | Primary Anthropic assistant |
| 2 | ChatGPT (OpenAI) | 1033526909 | chatgpt.com | OpenAI assistant |
| 3 | Gemini (Google DeepMind) | 1033526910 | gemini.google.com | Google / DeepMind assistant |
| 4 | Grok (xAI) | 1033526911 | grok.com | xAI assistant |

---

## Convening Sequence

1. **Claude tab** (1033526908): navigated to `claude.ai`; confirmed operator session active; model selector set to Opus 4.8 with High reasoning mode.
2. **ChatGPT tab** (1033526909): navigated to `chatgpt.com`; confirmed operator session active; mode initially observed as "Instant" — changed to "Pro" via the model/mode picker before the Q1 invocation.
3. **Gemini tab** (1033526910): navigated to `gemini.google.com`; confirmed user session active; model set to Gemini 3.1 Pro / Flash Thinking; Thinking Level set to "Extended" (via hover submenu — see [expert-config.md](expert-config.md) for browser-automation details).
4. **Grok tab** (1033526911): navigated to `grok.com`; confirmed user session active; mode set to "Expert".

---

## Tab Verification

Each tab received a sanity "hello" ping after configuration; each replied successfully (see [sanity-hello.md](sanity-hello.md)).

---

## Cross-Links

- Mode configuration details: [expert-config.md](expert-config.md)
- Sanity hello verification: [sanity-hello.md](sanity-hello.md)
- Q1 invocation: [../outer-loop-01/inner-loop-Q1/00-invocation.md](../outer-loop-01/inner-loop-Q1/00-invocation.md)
