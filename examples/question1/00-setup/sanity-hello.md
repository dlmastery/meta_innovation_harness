# Setup — Sanity Hello Verification

## Purpose

Before sending the substantive Q1 invocation, a simple "hello" message was sent to each expert tab to confirm: (a) the tab is active and logged in, (b) the expert's interface accepts input, and (c) the configured mode is live. This proves the browser-automation loop works end-to-end for each expert.

---

## Ping Sent

```
hello
```

A plain, single-word greeting — no prompt engineering, no persona framing. Sent to each tab in sequence after mode configuration was confirmed.

---

## Observed Replies

| # | Expert | Tab ID | Observed Reply (faithful paraphrase) | Loop Proven? |
|---|---|---|---|---|
| 1 | Claude | 1033526908 | "Hi! How can I help you today?" | YES |
| 2 | ChatGPT | 1033526909 | "Hey [operator]! 👋 What can I help you with today?…" (addressed the operator by first name + a brief friendly continuation) | YES |
| 3 | Gemini | 1033526910 | "Hello! It is so wonderful to hear from you… How can I help you today?" (warm, elaborate greeting) | YES |
| 4 | Grok | 1033526911 | A friendly greeting (the conversation was auto-titled by Grok's session-titling system) | YES |

---

## Notes

- **ChatGPT** addressed the operator by first name, confirming it has access to the signed-in account profile. _(Personal identifiers are redacted in this public archive — see the sanitization recipe.)_
- **Gemini** gave a noticeably warmer / more elaborate reply than the other three — consistent with its conversational style.
- **Grok** auto-titled the session, indicating Grok's session-title inference draws on conversation/profile context.
- All four responses arrived without error, confirming the browser-automation MCP loop is functional for all four expert tabs.
- These hello messages exist in the chat history of each tab and will precede the Q1 invocation. This is expected and does not affect the Q1 seeding round (each expert is instructed to treat Q1 as a fresh, first-principles derivation).

---

## Cross-Links

- Tab roster: [convening.md](convening.md)
- Mode config: [expert-config.md](expert-config.md)
- Q1 invocation (next step): [../outer-loop-01/inner-loop-Q1/00-invocation.md](../outer-loop-01/inner-loop-Q1/00-invocation.md)
