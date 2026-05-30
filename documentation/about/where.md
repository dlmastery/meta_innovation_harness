# Where Does the Meta-Innovation Harness Run?

## Runtime Environment

The Meta-Innovation Harness runs in two coupled environments simultaneously:

### Environment 1: Claude Code CLI (Orchestrator Host)

The **Orchestrator AI** runs inside the **Claude Code** command-line interface,
which serves as the skill runtime, state machine host, and archive writer.

**What runs here:**
- All eight skill files (`.md` format, Claude Code skill specification)
- The meta-skill's workflow selection logic
- The meta-meta-skill's harness generation and critique
- The inner/outer loop state machine
- Expert prompt construction and response parsing
- Synthesis, scoring, and integration logic
- Markdown archive writing to `examples/`

**Technical requirements:**
- Claude Code CLI (latest version)
- Authenticated Anthropic account
- The skill files from `skills/` installed in `.claude/skills/` (or project skills directory)

### Environment 2: Web Browser + Claude-in-Chrome (Expert AI Host)

The **four frontier expert AIs** run in separate browser tabs, driven
programmatically by the **Claude-in-Chrome** browser extension.

**What runs here:**
- Claude (chat.anthropic.com or claude.ai) — tab 1
- ChatGPT / GPT (chat.openai.com) — tab 2
- Gemini (gemini.google.com) — tab 3
- Grok (grok.x.ai or x.com/i/grok) — tab 4

**Technical requirements:**
- Chrome browser (or Chromium-based equivalent)
- [Claude-in-Chrome](https://github.com/anthropics/claude-in-chrome) extension installed and active
- User accounts active in all four browser tabs (free-tier accounts are sufficient)

## Data Flows

```
User terminal
     │  (slash command)
     ▼
Claude Code CLI  ──── reads skill files from skills/
     │                writes transcripts to examples/
     │  (Claude-in-Chrome bridge)
     ▼
Browser automation
     ├──▶ Claude tab     (inject prompt → read response)
     ├──▶ ChatGPT tab    (inject prompt → read response)
     ├──▶ Gemini tab     (inject prompt → read response)
     └──▶ Grok tab       (inject prompt → read response)
```

## What Does NOT Run Remotely

- No external API calls are made beyond the public browser interfaces.
- No user data is sent to a third-party server beyond what each LLM
  receives as normal prompt input through its public web UI.
- No persistent cloud infrastructure is required; everything runs on
  the user's local machine.

## Where Output Is Stored

All outputs are stored **locally** in the repository:

| Path | Content |
|------|---------|
| `examples/` | Full Markdown session transcripts |
| `examples/deepmind_questions/` | Worked example: 6 DeepMind research questions |
| `research/` | Background notes, source questions, references |
| `documentation/` | PRD, theory docs, about files (this directory) |

## Where the Site Is Hosted

The static documentation site lives in `docs/` and is served via
**GitHub Pages** from the `docs/` directory of the main branch.

- **Site URL**: `https://dlmastery.github.io/meta_innovation_harness/`
- **Source**: `docs/index.html`, `docs/styles.css`, `docs/main.js`
- **Jekyll bypass**: `docs/.nojekyll` (already present)

## Network and Privacy Considerations

Since all four frontier LLMs receive prompts through their public
browser interfaces, users should:

1. **Not send confidential or proprietary information** through the harness
   unless they have reviewed the privacy policies of all four LLM providers.
2. **Treat session outputs as potentially non-confidential**, consistent with
   how they treat any other interaction with these public AI services.
3. **Review** `examples/` archives before making them public if they contain
   sensitive research directions.

The harness itself (the Claude Code skills, the Orchestrator logic) runs
entirely locally and does not transmit anything beyond what the user's
own browser sessions transmit to their respective LLM providers.

---

*See also: [what.md](what.md) · [how.md](how.md) · [when.md](when.md)*
