# Why Was the Meta-Innovation Harness Built?

## The Core Problem

No single mind — human or artificial — is sufficient for frontier research.

This is not a deficiency to be overcome with a better model. It is a
structural feature of how knowledge is organised. Deep expertise in one
domain necessarily comes at the cost of breadth across others. The
physicist who can model quantum decoherence from first principles is
unlikely to simultaneously hold the anthropologist's understanding of
how cognitive biases emerge from social structure, the biologist's sense
of how evolution optimises under constraint, and the science-fiction
writer's trained capacity to imagine radically alternative physical regimes.

The same limitation applies to frontier LLMs. Despite their breadth,
each model carries training biases, stylistic priors, and epistemic
defaults that constrain the solution space it will explore. Claude tends
toward philosophical nuance and biological analogy. GPT-4 tends toward
quantitative mechanism and engineering concreteness. Gemini tends toward
empirical validation and social context. Grok tends toward contrarianism
and radical constraint-stripping. These are not bugs; they are
irreducible features of how these systems were trained. The insight is
to *exploit* these differences rather than try to eliminate them.

## The Theoretical Case

### Group Genius (Sawyer, 2007)

Keith Sawyer's research on collaborative creativity demonstrates that
the highest-quality creative work — in science, art, and innovation —
emerges from structured improvisation between diverse experts who are
genuinely listening to and building on each other's contributions.
Genius is not individual; it is interactional.

The harness encodes this finding as an algorithmic protocol: structured
constraints (fixed lenses, blanking discipline, rotation rules) that
force genuine cross-pollination rather than polite sequential monologue.

### Transactive Systems Model of Collective Intelligence (Woolley et al., 2010)

The TSM-CI establishes that group intelligence — measured as ability to
solve diverse, novel problems — significantly exceeds individual intelligence
when:
1. Group members hold genuinely complementary knowledge structures.
2. There is an efficient transactive memory system (each member knows
   what the others know and can route questions appropriately).
3. There is structured communication that preserves diversity while
   enabling integration.

The four fixed lenses (Biology/Philosophy, Physics/Engineering,
Social/HCI, World-Modeling) are designed to maximise criterion (1).
The Orchestrator's state management fulfills criterion (2). The
blanking + leaking protocol fulfills criterion (3).

### The Anchoring Problem in Sequential LLM Reasoning

Amos Tversky and Daniel Kahneman's anchoring bias research (1974)
shows that first impressions dominate subsequent reasoning, even when
subjects are explicitly told the initial value is random. This applies
with full force to LLM chains: when you ask the same model to iterate
on its own prior answer, it anchors heavily to that answer. The space
of alternatives it explores shrinks with each iteration.

The **blanking** step is the technical solution: by deleting each
expert's prior answer to the focal question before each round, the
harness structurally eliminates the anchoring mechanism. The expert
literally cannot anchor to what no longer exists in the context window.

### The Leaking Insight

The complementary move to blanking is **leaking**: exposing each expert
to the evolving best answers of all *other* questions in the set.
This serves two functions:

1. **Cross-domain seeding**: A biologist re-deriving the answer to
   a quantum physics question — after having just read how the physics
   expert approached a biology question — will generate radically
   different combinatorial ideas than if they worked in isolation.

2. **Productive constraint**: Knowing what the other experts have already
   concluded sets a quality floor and a diversity ceiling. The expert
   must do better than the existing answers (quality floor) while
   bringing something genuinely different (diversity ceiling enforced
   by the fixed lens constraint).

## Why Six Workflows?

A single protocol cannot be optimal across all research scenarios. The
six workflows represent a designed portfolio of cognitive-pressure profiles:

- **Speed vs. depth** axis: Flash-Team (fast, broad) vs. Quarterly Review (slow, deep)
- **Convergence vs. divergence** axis: Delphi Hackathon (converge) vs. Improv Lab (diverge)
- **Structure vs. emergence** axis: TSM-CI Kitchen Table (structured) vs. Group Flow (emergent)
- **Pure method vs. application**: Cross-Pollination Engine (pure protocol) vs. others (augmented variants)

The meta-skill's job is to diagnose which axis matters most for the user's
specific goal and time budget, then select accordingly.

## Why This, Now?

Three conditions have recently converged to make this harness feasible and
timely:

1. **Four credible frontier LLMs now exist simultaneously** — Claude, GPT,
   Gemini, and Grok — each with genuinely distinct training lineages and
   epistemic profiles. This was not true two years ago.

2. **Claude-in-Chrome** enables programmatic orchestration of all four through
   their public browser interfaces, removing the API-cost and rate-limit
   barriers that would otherwise make four-model coordination prohibitively
   expensive for research use.

3. **Claude Code** provides the skill infrastructure to encode complex,
   multi-step orchestration protocols as reusable, composable skills —
   making the harness as easy to invoke as a single slash-command.

## Why the Triple-PhD MIT Genius Persona?

The persona is not vanity. It is an epistemic contract.

When an Orchestrator operates under a carefully specified high-standard
persona, it:
- Sets the quality floor for every prompt it generates
- Increases the breadth of disciplinary reference it draws on
- Increases the courage to pursue genuinely radical ideas rather than
  consensus-safe answers
- Increases the ruthlessness of self-critique before synthesis

Empirically, across LLM research, persona specification is one of the
highest-leverage prompt engineering techniques for improving output quality
on complex, multi-domain tasks. The Triple-PhD MIT Genius persona is
designed to maximise all four of the above dimensions simultaneously.

---

*See also: [what.md](what.md) · [how.md](how.md) · [who.md](who.md)*
