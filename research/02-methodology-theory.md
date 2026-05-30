---
title: "Methodology Theory — Blanking+Leaking, Group Genius, TSM-CI, and the Five Recipes"
---

# Methodology Theory

This document explains *why* the MetaInnovation synthesis process works. It covers the blanking+leaking mechanic, its connection to Group Genius and Group Flow, the Transactive Systems Model of Collective Intelligence (TSM-CI), and the five named recipe formats that evolved from this theoretical grounding.

See also: [The Six Questions](00-gemini-talk-and-six-questions.md) | [Polymath Analyses](01-polymath-analyses.md) | [Workflows Overview](03-the-six-workflows-overview.md)

---

## Table of Contents

- [1. The Core Mechanic: Blanking + Leaking Cross-Pollination](#1-the-core-mechanic-blanking--leaking-cross-pollination)
- [2. Initial Assessment and Clarification](#2-initial-assessment-and-clarification)
- [3. Why the Clarified Version Is Stronger (8.5–9/10)](#3-why-the-clarified-version-is-stronger-859-10)
- [4. Group Genius and Group Flow](#4-group-genius-and-group-flow)
- [5. The Transactive Systems Model of Collective Intelligence (TSM-CI)](#5-the-transactive-systems-model-of-collective-intelligence-tsm-ci)
- [6. How the AI Protocol Replicates This](#6-how-the-ai-protocol-replicates-this)
- [7. What It Misses (Honest Assessment)](#7-what-it-misses-honest-assessment)
- [8. Literature Insights That Perfect the Technique](#8-literature-insights-that-perfect-the-technique)
- [9. Quick High-Impact Improvements](#9-quick-high-impact-improvements)
- [10. The Five Named Recipe Formats](#10-the-five-named-recipe-formats)

---

## 1. The Core Mechanic: Blanking + Leaking Cross-Pollination

The core methodology is a **dialectical cross-pollination engine with forced amnesia on the focal question**.

The protocol for each regeneration round, when targeting question Q_x:

- The prompt contains the **full evolving answers for all other questions** (Q1, Q2… except Q_x).
- Q_x's own prior answers are **completely removed** — clean slate on its own content.
- The model is asked, with the same polymath/deep-research instruction: "Now derive an answer to Q_x from first principles, drawing on all the cross-domain fields and the insights you now see from the other questions."
- The new output is **appended** to the accumulating stack for Q_x.
- The subset that gets blanked is rotated randomly each round; the process repeats 3–5 times.

This is materially different from self-priming. Every output for Q1 is born fresh, not copied from a prior version of itself.

### Analogies to Human Research Practice

This mechanic closely mirrors several elite research practices:

- **Iterative partial solving in theoretical physics and mathematics**: Solve the easier equations first, hold them fixed, re-solve the hard one, rotate which one you hold fixed.
- **Hegelian dialectic / Socratic elenchus**: Thesis from one angle, antithesis via clean-slate re-attack informed by related domains.
- **Theory club sessions**: One person presents on Problem A, everyone else has read the latest on B–F, the presenter is forced to re-explain A from scratch in light of what they just heard.
- **Grant revision cycles**: Reviewers tear apart one section while leaving others intact; you rewrite only the attacked section with the full context of the improved others.
- **The blank page test**: Delete your draft of Chapter 3, read the polished Chapters 1–2 and 4–6, then rewrite Chapter 3.
- **Delphi method**: Anonymous iterative rounds where experts receive aggregated prior responses and revise — reduces dominance bias, builds consensus, surfaces hidden interconnections.
- **Modern multi-agent LLM frameworks** (CollabEval, MacNet, Iteration-of-Thought): Iterative discussion rounds with shared context improve reasoning, coordination, and task scores. Random blanking acts like ablation testing or simulated amnesia, pushing models to reconstruct using leaked context and forcing cross-question fertilization.

---

## 2. Initial Assessment and Clarification

The method was initially rated **7.5–8/10** with these strengths identified:

- Polymath forcing + multi-model ensemble broadens the aperture. Cross-domain prompts reliably surface non-obvious analogies that single-field thinkers miss.
- Querying Claude, GPT, Gemini, and Grok separately captures different training biases and "personalities," providing diversity injection.
- Iterative rounds with accumulation create cumulative refinement, mimicking how ideas incubate and compound.

Failure modes flagged in the initial assessment:

- **Error amplification and premature consensus**: Early hallucinations get "canonized" once leaked and re-processed. Priming creates strong pressure toward the most fluent narrative rather than truth-tracking.
- **Context bloat and signal dilution**: After 2–3 rounds the prompt becomes enormous. Diminishing returns and increased repetition.
- **Lack of grounding or adversarial pressure**: No built-in falsification loop, no external paper search validation. Risk of plausible but untestable sophistry.
- **Practical friction**: API costs, token limits, manual concatenation.

---

## 3. Why the Clarified Version Is Stronger (8.5–9/10)

After the mechanic was clarified (no self-priming — the focal question sees only the other questions' answers), the error-amplification risk drops significantly:

- No direct self-priming or hallucination inheritance *on the same question*. Every output for Q1 is born fresh.
- Errors can still creep in indirectly (a weak analogy in the growing Q2 corpus influences the new Q1 generation), but because every question is regenerated multiple times with different random neighborhoods, bad ideas tend to get diluted or out-competed by stronger cross-pollinated variants that appear in later rounds.
- The appending mechanic creates a natural "version history" per question — later synthesis can identify which regenerations were most fertile.

Remaining small risks:
- Context bloat after round 4–5.
- If a particularly charismatic but flawed analogy lands early in several "other" questions, it can become a shared background assumption. Mitigable by adding one adversarial round.

> **Core insight**: This is not just idea generation; it is **simulated collaborative refinement under controlled information asymmetry**. It is legitimately one of the better human-in-the-loop LLM synthesis protocols for open, interconnected, philosophy-of-science-level research questions.

---

## 4. Group Genius and Group Flow

The methodology replicates the "magic" that the DeepMind leaders embodied in their talk: bringing together high-caliber, long-acquainted experts to produce emergent breakthroughs that no individual could achieve alone.

### Group Genius (Keith Sawyer)

Keith Sawyer's seminal 2007/2017 book and research demonstrates that the lone-genius myth is false: creativity is almost always **emergent from interaction**. Breakthroughs come from "a series of sparks — never a single flash." Sawyer studied jazz ensembles, improv theater, and innovation labs.

### Group Flow (Sawyer, extending Csikszentmihalyi)

The peak collective state where a team feels "in sync," time distorts, and ideas flow improvisationally. Sawyer identifies 10 conditions for group flow:

- Clear but open goals
- Autonomy
- Potential for failure
- Constant spontaneous communication
- Close listening and equal participation
- Blending of egos
- Familiarity and trust among participants
- And more

### Deep Mechanisms (Literature-Backed)

**1. Idea Sparks + Recombination ("Yes, and...")**
Innovation is inefficient, bottom-up bricolage. One remark suggests something to another; meaning clarifies only in retrospect. Bell Labs' Shockley team met "almost on the spur of the moment" daily. Xerox PARC, MIT Building 20, and the DeepMind merger all thrived on this. Formal meetings kill it; spontaneous collisions create it.

**2. Attention and Focus Dynamics**
Complete concentration + close listening + equal participation. The group achieves shared/joint attention that filters noise and amplifies high-leverage threads. Informal settings remove hierarchy and deadlines, letting attention flow naturally.

**3. Added Context + Cross-Pollination**
Each genius brings a unique lens. The others instantly provide new context that reframes the problem — exactly how blanking+leaking works. Diversity of expertise + psychological safety (blending egos, familiarity) turns potential conflict into fuel. Groups of 3–5 consistently outperform even the best individual.

**4. Familiarity + Trust + Controlled Risk**
Long shared history (as in the DeepMind personal stories) supplies tacit knowledge, enabling rapid "finish-each-other's-sentence" sync without groupthink.

---

## 5. The Transactive Systems Model of Collective Intelligence (TSM-CI)

The most precise modern framework for understanding collective intelligence (Anita Williams Woolley, Pranav Gupta, and colleagues, 2021–2025; tested on 476 open-source software teams).

Collective intelligence emerges from three interlocking **transactive systems** that groups develop and mutually adapt:

### Transactive Memory System (TMS)
Everyone knows "who knows what." The DeepMind team's long shared history = perfect TMS. In the AI protocol, **leaking** builds this: all AIs see the evolving group knowledge.

### Transactive Attention System (TAS)
The group collectively directs and sustains focus on promising threads. In the AI protocol, **random blanking** forces re-allocation of attention — the AI must re-engage with the focal question entirely fresh.

### Transactive Reasoning System (TRS)
Joint sense-making, error correction, and building where one person's idea is immediately reframed/extended by others. In the AI protocol, the **clean-slate re-ask + polymath prompt** enforces fresh reasoning informed by the collective.

> **Key finding from research**: In high-uncertainty environments (exactly like the Gemini frontier questions), strong TAS + TRS buffer overload and sustain commitment far better than raw expertise alone.

---

## 6. How the AI Protocol Replicates This

| Human Group Dynamic | AI Protocol Equivalent |
|--------------------|------------------------|
| Multiple expert geniuses (Jeff, Koray, Noam, Oriol) | Claude + GPT + Gemini + Grok — four distinct "personalities" |
| Polymath/cross-domain lenses | Explicit polymath/deep-research prompt forcing physics → agency, Vedas → continuous learning, etc. |
| Leaking all other answers; blanking the focal one | Transactive memory + attention + added context. The AI sees evolving group knowledge but must re-derive fresh. |
| Iterative rounds with random blanking | Turn-taking improvisation ("Yes, and...") across rounds. Each regeneration is a new spark informed by accumulated context. |
| Appending new answers | Cumulative idea flow and version history. |
| "Amnesia refresh" | Prevents stale groupthink — something human teams sometimes lack. |

The protocol even improves on human versions: infinite patience, perfect memory of prior rounds, effortless diversity injection, no ego.

---

## 7. What It Misses (Honest Assessment)

The method excels at **divergence and recombination** but is weaker on **convergence to actionable, high-confidence insights**. What top researchers do that this cannot fully replicate:

- Ruthless self-critique and taste (humans prune mercilessly; models flatter).
- Deep primary-source immersion + embodied intuition from failures.
- Empirical/validation loop (running the experiment, coding the toy model, falsifying).
- Question reformulation ("maybe the real open question is X, not what DeepMind said").
- Long incubation + serendipity.

It functions as a turbocharged **idea-generation workshop** (extremely useful), not the full end-to-end discovery pipeline.

---

## 8. Literature Insights That Perfect the Technique

- **TSM-CI** (Woolley/Gupta 2021–2025): Strong TAS + TRS buffer overload in high-uncertainty environments; explicitly modeled by the blanking/leaking design.
- **Group Genius / Group Flow** (Keith Sawyer): Magic in informal, high-trust, equal-participation settings with "Yes-and" improvisation and rapid recombination.
- **Evolved Delphi + AI-Delphi** (2025 arXiv + hybrid studies): Fixed-round LLM panels with role randomization, redundancy filtering, and organizer agents that reframe questions outperform classic versions for interconnected ideation. Maximize divergence before convergence.
- **Deep-tech practice** (McKinsey 2025, NVIDIA/pharma hackathons, d.school Ideaflow by Utley): Bottom-up hackathons + top-down quarterly synthesis. Measure "idea flow" (volume + rapid scrappy tests). Use role-based swarms (CrewAI/LangGraph style), explicit critique, and grounding.

---

## 9. Quick High-Impact Improvements

These can be added immediately to push the protocol from excellent toward world-class:

1. **Role randomization per AI**: e.g., "You are now the Physics-World-Modeler" or "Vedic-Consciousness Philosopher + Skeptical Engineer."
2. **Dedicated Critic/Organizer agent**: Filters redundancy and generates linking questions (or rotate one AI into this role).
3. **Cap rounds at 4 + convergence/falsification round**: "Propose one cheap experiment or counter-example for the strongest claim across all questions."
4. **30-second distillation after each round**: "Synthesize the single most fertile cross-connection that just emerged."
5. **Explicit "Yes-and + build-on" prompt**: "Assume all prior ideas have merit; extend ruthlessly but kindly."
6. **Ground every other round with real-tool use**: Paper search, quick simulation via code, or analogy validation.

---

## 10. The Five Named Recipe Formats

These are the battle-tested, literature-backed formats that evolved from the methodology. Each is a ready-to-use protocol that slots onto the blanking+leaking engine. (Full master orchestrator prompts are in [03-the-six-workflows-overview.md](03-the-six-workflows-overview.md) and the source file.)

### Recipe 1 — TSM-CI Kitchen Table
**Inspiration**: Gupta/Woolley TSM-CI + OSS empirical validation + DeepMind personal-history sharing.

Explicitly builds and maintains TAS/TMS/TRS.

**How to run**:
- Round 1–2: Diverge (polymath + blanking, but assign each AI a permanent "specialty" role tied to one DeepMind speaker's lens).
- Round 3: TAS burst — all AIs focus only on interconnections (leaked answers + "what thread is being ignored?").
- Round 4: TRS synthesis + commitment check ("Which idea would you bet 6 months of research on?").
- End with Organizer distillation + one falsification task.

**Why it wins**: Directly mirrors tested OSS/high-uncertainty performance gains; perfect for 6 tightly-coupled Gemini questions. Expected output: a coherent "research program" roadmap.

---

### Recipe 2 — AI-Delphi Swarm Hackathon
**Inspiration**: 2025 LLM-Delphi (fixed 5 rounds, role-randomized agents, organizer that reframes) + lablab.ai multi-agent hackathons using LangGraph/CrewAI.

One AI is permanently "Organizer" (rotates every round). Organizer reframes + removes redundancy after every full cycle and creates one new bridging question. Blanking serves as the "amnesia refresh."

**Best for**: Maximum idea fertility in less than 2 hours.

---

### Recipe 3 — Group Flow Improv Lab
**Inspiration**: Sawyer's 10 conditions for group flow + Pixar Braintrust + Stanford d.school Ideaflow daily quotas.

Add "Yes-and" rule + equal airtime enforcement + daily idea quota (each AI must propose 3 wild extensions per regeneration). Random blanking becomes "improv pass."

**How to run**: 3 rounds max. Start each with a shared goal prompt ("We are the 2027 DeepMind strategy team in the kitchen"). Every response must praise + extend at least one prior idea.

**Best for**: Surfacing surprising Vedas–physics–agency analogies that feel genuinely novel.

---

### Recipe 4 — Ideaflow + Flash-Team Protocol
**Inspiration**: Jeremy Utley's "innovation as daily practice, not event" + "flash teams" from TSM research.

Treat each round as a 24-hour hackathon sprint. Measure output by idea volume first, then quality. After round 2, force scrappy experiments ("Code a 10-line simulation" or search one paper). Add "input obsession" (force one new cross-domain source per AI per round). Converge with ranked prioritization + owner assignment.

**Best for**: Turning synthesis into concrete next actions.

---

### Recipe 5 — Hybrid Quarterly DeepMind Review
**Inspiration**: Real Google/DeepMind quarterly off-sites + McKinsey bottom-up hackathon + top-down synthesis + Anthropic/OpenAI internal safety reviews.

Two phases: bottom-up (full blanking rounds) then top-down critique by a "Leadership AI" (one model prompted as Jeff Dean + safety reviewer). Final adversarial round ("Stress-test every claim as if you are a skeptical VC or regulator"). Final output: polished whitepaper template.

**Best for**: Producing something you could actually share or turn into a research proposal.

---

> **Personal recommendation from the analysis**: Start with Recipe 1 (TSM-CI Kitchen Table) — it is the closest mathematical match to what the actual DeepMind leaders described doing, supercharged with the blanking genius. It will feel like cloning the four of them into an infinite, tireless, cross-domain version.
