# How Does the Meta-Innovation Harness Work?

## Step-by-Step Protocol

### Phase 0: Setup

1. **Install Claude Code** and authenticate your Anthropic account.
2. **Install Claude-in-Chrome** browser extension.
3. **Open four browser tabs** and log in to each LLM's public interface:
   - Tab 1: Claude (claude.ai)
   - Tab 2: ChatGPT (chat.openai.com)
   - Tab 3: Gemini (gemini.google.com)
   - Tab 4: Grok (grok.x.ai)
4. **Copy the eight skill files** from `skills/` into your Claude Code
   skills directory (`.claude/skills/` at project or global level).

### Phase 1: Goal Specification

The user invokes the harness with a research goal:

```bash
/meta_skill_selector "What are the most important open problems at the
intersection of AI alignment, evolutionary game theory, and institutional
design? Generate six frontier questions and explore them."
```

Or with pre-formed questions:

```bash
/cross_pollination_engine "Q1: How do collective action problems change when
agents are AI systems? | Q2: What evolutionary pressures shaped human
cooperation norms and what are their AI analogues? | Q3: ..."
```

### Phase 2: Workflow Selection (Meta-Skill)

The meta-skill analyses the goal across five dimensions:

| Dimension | Assessment |
|-----------|-----------|
| **Complexity** | How many distinct sub-questions? How deep is each? |
| **Domain spread** | How many of the four lens-domains are genuinely required? |
| **Convergence need** | Does the user need a decision, or exploration? |
| **Time budget** | Explicit or inferred from context |
| **Novelty vs. validation** | Is this blue-sky ideation or hypothesis stress-testing? |

Based on this diagnosis, the meta-skill selects one of the six workflow
protocols and configures its parameters (number of inner-loop rotations,
outer-loop passes, synthesis format, archive structure).

### Phase 3: Expert Briefing

The Orchestrator constructs four expert briefing prompts — one per LLM.
Each briefing contains:

1. **Persona declaration**: Triple-PhD MIT Genius (adapted to the fixed lens)
2. **Fixed lens specification**: Explicit, detailed description of the
   disciplinary lens the expert must not abandon
3. **Question set**: All focal questions for the session
4. **Protocol instructions**: Explanation of blanking + leaking and what
   the expert will be asked to do in each inner-loop round
5. **Quality standard**: What a genuinely elite response looks like

Example expert briefing (abbreviated) for Claude's biological-philosopher lens:

```
You are a Triple-PhD MIT Genius operating as a master of Evolutionary Biology,
Systems Biology, Ancient Texts (Vedic, Stoic, Taoist, Greek), Continental
Philosophy, and Ethics. You are the elite of the elite in your domains.

You will be asked to respond to a series of research questions. For each
question, you will receive the current best answers from your fellow experts
(operating from their own fixed lenses) for all OTHER questions in the set.
Use these cross-domain signals freely.

For your OWN question, you will begin each round with a clean slate —
your prior answer will be shown to you and then you must discard it entirely.
Re-derive from first principles through your biological-philosophical lens.

First question: [Q1]
Current best answers from your colleagues for all other questions: [...]
```

### Phase 4: Inner Loop Execution

For each round of the inner loop:

```
For each question Q_i:
  Orchestrator builds the prompt for round k:
    ├── Expert's fixed lens reminder
    ├── Expert's PRIOR answer to Q_i (to be explicitly discarded)
    ├── Current-best answers for all Q_j ≠ i (the "leak")
    └── Request: re-derive Q_i from scratch through your fixed lens

  Orchestrator sends prompt to Expert AI via Claude-in-Chrome
  Orchestrator reads Expert AI's response
  Orchestrator stores as candidate answer for Q_i, round k
End for

Orchestrator synthesis:
  For each Q_i:
    ├── Compare all four expert responses for Q_i in round k
    ├── Score each on: novelty, rigor, cross-domain integration, specificity
    ├── Synthesise into integrated "current-best" for Q_i (for use in next round)
    └── Flag: unresolved tensions, most surprising insights, next-round priorities
```

### Phase 5: Outer Loop and Convergence

After each full inner loop pass, the Orchestrator evaluates:

- **Quality delta**: Has the integrated "current-best" for each question
  improved materially compared to the previous outer loop round?
- **Diminishing returns**: Is the marginal improvement per inner loop pass
  decreasing below a threshold?
- **Time budget**: Has the session time budget been consumed?
- **Convergence**: Are the four experts' responses converging toward a
  robust consensus, or productively diverging (both are valid end-states)?

If quality delta is above threshold and time budget permits: begin next
outer loop pass, using updated "current-best" answers as the new leak set.

If convergence criterion is met or time is exhausted: proceed to final synthesis.

### Phase 6: Final Synthesis

The Orchestrator produces a structured final synthesis containing:

1. **Integrated answer per question**: The best available synthesis across
   all four lenses and all outer loop iterations.
2. **Cross-domain insights**: Connections between questions that emerged
   from the leaking mechanism.
3. **Expert-specific contributions**: What each fixed lens uniquely contributed.
4. **Irreducible tensions**: Where the four lenses genuinely disagree and why.
5. **Open questions**: What remains unresolved and what the most productive
   next investigations would be.
6. **Quality assessment**: How the Orchestrator rates the output against
   the Triple-PhD MIT Genius standard.

### Phase 7: Archiving

The Orchestrator writes the full session to `examples/`:

```
examples/
└── session_YYYY-MM-DD_HH-MM/
    ├── session_config.md        # workflow, question set, parameters
    ├── expert_briefings.md      # all four expert briefing prompts
    ├── round_01/
    │   ├── claude_Q1.md         # Claude's round-1 response to Q1
    │   ├── gpt_Q1.md            # GPT's round-1 response to Q1
    │   ├── gemini_Q1.md
    │   ├── grok_Q1.md
    │   ├── synthesis_Q1.md      # Orchestrator synthesis for Q1
    │   └── ...                  # same for Q2...Q6
    ├── round_02/                # next outer loop pass
    │   └── ...
    └── final_synthesis.md       # complete integrated output
```

## The Blanking + Leaking Mechanism in Detail

### Blanking: What It Looks Like in Practice

The Orchestrator, for the expert's second-round response to Q3, constructs:

```
[CONTEXT — DO NOT USE]: Your previous answer to Q3 was:
  "[expert's round-1 answer to Q3]"
You must now set this aside entirely. Do not build on it, do not reference it,
do not defend it. Begin from first principles as if you had never answered Q3.

[INJECT — USE FREELY]: Your colleagues' current-best answers to Q1, Q2, Q4, Q5, Q6:
  Q1 (Biology lens): [current-best for Q1]
  Q1 (Physics lens): [current-best for Q1]
  ...

Now: re-derive your answer to Q3 through your [fixed lens] from scratch.
```

### Leaking: What Gets Injected and Why

The "leak" is the current-best integrated synthesis for all questions
*except* the focal question. This is the Orchestrator's synthesis — not
a raw expert response — because:

1. It is higher quality (already cross-pollinated)
2. It is more compact (parseable in a single context window alongside
   the expert's own response)
3. It reflects the outer-loop state, not just one expert's view

### Why This Produces Novelty

The mechanism creates a structured form of **productive interference**:

- Expert A (biology) re-derives Q3 after reading what Expert B (physics)
  concluded about Q1 and Q4. The physics answer for Q1 might contain a
  physical substrate concept (e.g., dissipative structures) that Expert A
  then applies to Q3 in a way that was invisible before the leak.
- Expert C (social science) re-derives Q2 after reading Expert D (Grok)'s
  radical constraint-stripping of Q5 and Q6. The contrarian move on Q6
  might free Expert C from an implicit social-science assumption about Q2.

This is precisely the mechanism that Sawyer identifies as the source of
collaborative emergence: ideas that no individual could generate alone
become possible through structured cross-pollination of diverse lenses.

---

*See also: [what.md](what.md) · [why.md](why.md) · [where.md](where.md) · [when.md](when.md)*
