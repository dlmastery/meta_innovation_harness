# What Is the Meta-Innovation Harness?

## Definition

The **Meta-Innovation Harness** is a structured Claude Code skill-suite that
orchestrates four browser-driven frontier LLMs — Claude, ChatGPT/GPT, Gemini,
and Grok — as a coordinated expert ensemble to produce genuinely novel,
multi-disciplinary insight on any research goal.

It consists of **eight skills** in total:

| Layer | Count | Description |
|-------|-------|-------------|
| Workflow Harnesses | 6 | Distinct orchestration protocols with different cognitive-pressure profiles |
| Meta-Skill | 1 | Auto-selects the optimal workflow for a given research goal |
| Meta-Meta-Skill | 1 | Generates, critiques, and self-improves harness workflows |

## System Components

### 1. The Orchestrator AI

Claude Code — operating under the **Triple-PhD MIT Genius** persona — acts as
the conductor of the ensemble. It:

- Receives the research goal from the user
- Selects (via the meta-skill) or directly invokes the appropriate workflow
- Briefs each expert in their fixed disciplinary lens
- Manages the inner/outer loop state machine
- Synthesises cross-expert outputs into integrated conclusions
- Archives all interactions to `examples/` as Markdown

### 2. The Four Frontier Expert AIs

Each LLM is assigned a permanent, non-negotiable disciplinary lens for the
duration of a session:

| Expert | Model | Fixed Lens Summary |
|--------|-------|-------------------|
| Biological Philosopher | Claude | Biology, ancient texts, philosophy |
| Physical Engineer | ChatGPT / GPT | Physics, chemistry, engineering |
| Human-System Evaluator | Gemini | Social science, product, HCI, evaluation |
| Radical World-Modeler | Grok | World-modeling, radical efficiency, contrarian thinking |

### 3. The Blanking + Leaking Method

The core algorithmic innovation:

- **Blank**: For a focal question Q_i, delete each expert's own prior answer.
  This forces genuine re-derivation from first principles, eliminating anchoring
  bias and self-echo-chamber effects.
- **Leak**: While blanking their own answer, show each expert the current best
  answers of all *other* questions (Q_j ≠ i). This preserves cross-domain signal
  without contaminating the focal question with prior thinking.

### 4. The Loop Structure

- **Inner loop**: Rotate the blanking + leaking protocol across all focal
  questions within a single session pass. Each expert responds to each question
  with a fresh perspective informed by the others.
- **Outer loop**: The Orchestrator synthesises the inner-loop outputs, scores
  them, updates the "current best answers," and re-broadcasts for the next pass.
  This mirrors the Delphi method's multi-round expert elicitation.

### 5. The Browser Automation Bridge

All four LLMs are accessed through the **Claude-in-Chrome** extension — no APIs,
no rate limits beyond those of the public web interfaces, no vendor lock-in.
Each LLM runs in a separate browser tab; the Claude Code Orchestrator drives
all four programmatically.

### 6. The Archive

Every interaction — prompts, expert responses, synthesis steps, iteration traces —
is archived as structured Markdown under `examples/`. This provides
science-grade reproducibility and full intellectual transparency.

## The Worked Example

The canonical demonstration applies the harness to **six open research questions
from a Google DeepMind/Gemini leadership talk** — questions at the genuine
frontier of current AI research. Full archived outputs are in `examples/deepmind_questions/`.

## What It Is Not

- It is NOT a simple chat aggregator or A/B comparison tool.
- It is NOT a prompt chaining library that calls four APIs in sequence.
- It is NOT a voting system where the majority answer wins.
- It IS a structured, theory-grounded, iterative cross-pollination protocol
  that produces emergent insight no individual expert would generate alone.

---

*See also: [why.md](why.md) · [how.md](how.md) · [who.md](who.md)*
