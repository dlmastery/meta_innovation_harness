# Meta-Innovation Harness — Pitch Deck Outline & Script

**Deck:** `deck/Meta-Innovation-Harness-Pitch.pptx` · **100 slides** · 16:9
**Theme:** Deep near-black void (`#080b10`) · amber (`#f5a623`) + cyan (`#00d4ff`) accents · Syne / IBM Plex Mono typography
**Mirror:** `docs/slideshow.html` (reveal.js, auto-advance ~6s, loop) embedded on `docs/index.html`.

> Every claim traces to the repo: `README.md`, `documentation/PRD.md`,
> `documentation/architecture.md`, `documentation/about/*.md`,
> `research/00–04`, `skills/README.md`, `skills/_shared/*.md`,
> `examples/question1/`. Nothing invented.

---

## ACT STRUCTURE

| Act | Slides | Title |
|-----|--------|-------|
| — | 1–3 | Title & Persona |
| I | 4–17 | The Problem — Why single-genius research stalls; the six frontier questions |
| II | 18–27 | The Insight — Group Genius, Group Flow, TSM-CI, precedents |
| III | 28–37 | The Core Invention — Blanking + Leaking cross-pollination |
| IV | 38–46 | The Cast — Four super-experts, the Orchestrator, Claude-in-Chrome |
| V | 47–64 | The Six Workflows |
| VI | 65–72 | The Layers — workflow ⊂ meta ⊂ meta-meta + Tsaheylu |
| VII | 73–82 | Principles & Guardrails — P0–P5, verification, transparency |
| VIII | 83–89 | Proof — Question-1 live run + archive structure |
| IX | 90–96 | Impact, Roadmap, Vision |
| X | 97–100 | Close + Appendix of references |

---

## SLIDE-BY-SLIDE SCRIPT

### Act 0 — Title & Persona (1–3)

1. **TITLE.** "Meta-Innovation Harness." Tagline: *Four frontier AIs. Six innovation workflows. One orchestrating mind.* Subline: a novel blanking + leaking cross-pollination method that engineers Group Genius on any research goal. v1.0 · MIT.
2. **THE PERSONA (P0).** "Triple-PhD MIT Genius — Elite of the Elite Researcher, Best of the Best on Planet Earth." Not vanity — an *epistemic contract*: sets quality floor, breadth of reference, courage for radical ideas, ruthlessness of self-critique. (`skills/_shared/prompt-principles.md`, `about/why.md`)
3. **THE ONE-LINE THESIS.** Real breakthroughs emerge at disciplinary intersections; no single mind holds them all. This harness encodes the proof — that structured cross-pollination among diverse experts beats any individual — as an algorithm. (`README.md`)

### Act I — The Problem (4–17)

4. **DIVIDER · ACT I — THE PROBLEM.**
5. **The lone-genius myth is false.** Creativity is almost always emergent from interaction; breakthroughs come from "a series of sparks — never a single flash" (Sawyer). (`research/02`)
6. **Single-LLM research stalls.** Each model carries training biases, stylistic priors, epistemic defaults that shrink the solution space. Not bugs — irreducible features. (`about/why.md`)
7. **The anchoring trap.** Ask one model to iterate on its own answer and it anchors; the space of alternatives shrinks each round (Tversky & Kahneman, 1974). (`about/why.md`)
8. **No single mind suffices for frontier research.** Deep expertise in one domain costs breadth across others — a structural feature of knowledge, not a fixable deficiency. (`about/why.md`)
9. **The DeepMind / Gemini talk.** Four leaders — Jeff Dean, Koray Kavukcuoglu, Noam Shazeer, Oriol Vinyals — on Gemini's origin, unified models, distillation, evaluation, and the 2027 horizon. (`research/00`)
10. **What they framed as SOLVED vs. OPEN.** Solved: unification ("twins" merger), distillation, product loops. Open: the live research agenda toward 2027. (`research/00`)
11. **SIX FRONTIER QUESTIONS — the open agenda.** Six coupled, high-stakes questions the leaders are betting the 2027 trajectory on. (`research/00`)
12. **Q1 — Self-learning / organic continuous learning.** Architectures that act as their own research assistants and help design their successor. (`research/00`)
13. **Q2 — Reliable long-duration autonomous agents.** Agentic persistence: coherent and useful over days, not minutes. (`research/00`)
14. **Q3 — Evaluation beyond benchmarks.** Turn messy, live, real-world signal into a rigorous, scalable evaluation system. (`research/00`)
15. **Q4 — The human-AI efficiency gap.** Humans learn with far less data; algorithmic sample-efficiency may beat raw scaling. (`research/00`)
16. **Q5 — World modeling / physical dynamics (Gemini Omni).** Native understanding of physics, causality, "moving atoms" for true agentic reasoning. (`research/00`)
17. **Q6 — One model → thousands of products.** One foundational model powering countless specialized interfaces without fragmentation. + **Why they're coupled.** (`research/00`)

### Act II — The Insight (18–27)

18. **DIVIDER · ACT II — THE INSIGHT.**
19. **Group Genius (Keith Sawyer, 2007).** Highest-quality creative work emerges from structured improvisation among diverse experts genuinely building on each other. Genius is interactional. (`research/02`, `about/why.md`)
20. **Group Flow.** The peak collective state: "in sync," time distorts, ideas flow. Sawyer's 10 conditions — clear-but-open goals, equal participation, blending of egos, familiarity & trust. (`research/02`)
21. **The four deep mechanisms.** Idea sparks + recombination ("Yes-and"); shared attention; added context / cross-pollination; familiarity + trust + controlled risk. (`research/02`)
22. **TSM-CI — the modern framework.** Transactive Systems Model of Collective Intelligence (Woolley, Gupta et al.), tested on 476 open-source teams. Three interlocking systems. (`research/02`)
23. **TMS — Transactive Memory.** Everyone knows "who knows what." In the protocol, **leaking** builds it — all AIs see the evolving group knowledge. (`research/02`)
24. **TAS — Transactive Attention.** The group directs and sustains focus. In the protocol, **random blanking** forces re-allocation of attention. (`research/02`)
25. **TRS — Transactive Reasoning.** Joint sense-making and error-correction. In the protocol, the **clean-slate re-ask + polymath prompt** enforces fresh reasoning informed by the collective. (`research/02`)
26. **The DeepMind team WAS a TMS.** Long shared history = "finish each other's sentences" — exactly transactive memory. The magic was a system, not four lone geniuses. (`research/00`, `research/02`)
27. **Precedents: where Group Genius shipped.** Bell Labs (Shockley team, spur-of-the-moment daily), Xerox PARC, MIT Building 20, Pixar Braintrust, IDEO/d.school, the DeepMind merger. Formal meetings kill it; spontaneous collisions create it. (`research/02`)

### Act III — The Core Invention (28–37)

28. **DIVIDER · ACT III — THE CORE INVENTION.**
29. **Blanking + Leaking, in one sentence.** A dialectical cross-pollination engine with *forced amnesia* on the focal question. (`research/02`)
30. **BLANK.** For focal question Q_i, completely delete each expert's prior answer to Q_i — clean slate. Eliminates anchoring; forces first-principles re-derivation. (`about/what.md`, `research/02`)
31. **LEAK.** While blanking the focal answer, show the current-best answers of all *other* questions. Preserves cross-domain signal without contaminating the focal thread. (`about/what.md`)
32. **Why it's not self-priming.** Every output for Q1 is born fresh — never copied from a prior version of itself. Materially different from iterate-on-your-own-answer. (`research/02`)
33. **THE INNER LOOP.** Rotate the blank+leak protocol across all focal questions in one pass; 1–3 questions blanked per loop, rotated randomly each round. (`README.md`, `research/03`)
34. **THE OUTER LOOP.** Orchestrator synthesises, scores, updates "current best," re-broadcasts for the next pass — Delphi-style multi-round elicitation. (`about/how.md`)
35. **VISUAL — the loop.** User → Orchestrator → 4 experts → blank+leak → distillation (Current Best) → synthesis → archive → repeat. (`README.md` architecture diagram)
36. **Human-practice analogies.** Iterative partial solving in physics; Hegelian dialectic; theory-club sessions; grant-revision cycles; the blank-page test; Delphi. (`research/02`)
37. **Why it produces novelty.** Structured *productive interference*: a biologist re-deriving a physics question after reading the physics lens on a biology question generates combinations invisible in isolation. (`about/how.md`)

### Act IV — The Cast (38–46)

38. **DIVIDER · ACT IV — THE CAST.**
39. **Four frontier minds, four fixed lenses.** Each LLM gets a permanent, non-negotiable disciplinary lens — the tension between lenses is the engine of novelty. (`README.md`)
40. **Claude — Biological Philosopher.** Evolutionary & systems biology, ancient texts (Vedas/Stoic/Taoist/Greek), continental philosophy, ethics. Finds the living-system analogy. (`README.md`, `about/who.md`)
41. **ChatGPT / GPT — Physical Engineer.** Theoretical & applied physics, chemistry, materials, systems engineering, quantitative first-principles modeling. (`README.md`)
42. **Gemini — Human-System Evaluator.** Social science, behavioral economics, product strategy, HCI/UX, evaluation methodology. (`README.md`)
43. **Grok — Radical World-Modeler.** Creative world-modeling, radical efficiency, constraint-stripping, contrarian hypotheses, sci-fi as method. (`README.md`)
44. **The Orchestrator — Claude Code.** The conductor: decomposes the goal, selects the workflow, briefs experts, runs the loop state machine, synthesises, self-critiques, archives. (`about/who.md`)
45. **Why fixed slots.** Permanent roles build session memory and a consistent "voice" — the foundation of the TMS. Rotating roles would yield generic, indistinguishable polymaths. (`architecture.md` §14.2)
46. **The transport — Claude-in-Chrome.** Drives four real browser tabs at the highest reasoning modes (Opus 4.8 High · ChatGPT Pro · Gemini 3.1 Pro Extended · Grok Expert). No APIs, no lock-in, total visibility. (`architecture.md` §14.1, `_shared/expert-setup.md`)

### Act V — The Six Workflows (47–64)

47. **DIVIDER · ACT V — THE SIX WORKFLOWS.**
48. **The suite at a glance.** Six Innovation Harnesses + meta + meta-meta = eight skills. A portfolio of cognitive-pressure profiles. (`skills/README.md`)
49. **W1 — Cross-Pollination Engine · what.** ORCHESTRATOR-Ω. The pure blanking+leaking protocol; no collaboration constraints. (`research/03`)
50. **W1 · structure & output.** 4 outer × 6 inner; blank 1–3 random; 4 responses/focal; distill Current Best; final convergence → 1-page roadmap + 3 flagship experiments. (`research/03`)
51. **W2 — Kitchen Table · what.** ORCHESTRATOR-KITCHEN. TSM-CI made literal; closest to the real DeepMind "kitchen at 11pm." (`research/03`)
52. **W2 · structure & output.** 4 rounds; permanent specialty roles; Yes-and rule; TAS Attention Burst + TRS Synthesis; shared TMS tracker → co-written "2027 Gemini Research Program." (`research/03`)
53. **W3 — Delphi Hackathon · what.** ORCHESTRATOR-DELPHI. Fixed-round AI-Delphi with a rotating Organizer + ruthless redundancy filtering. (`research/03`)
54. **W3 · structure & output.** 5 rounds; Organizer rotates Claude→GPT→Gemini→Grok; bridge questions; rapid prototyping sprint → grant abstracts + 1 cheap experiment each; "Ship It" verdict. (`research/03`)
55. **W4 — Improv Lab · what.** ORCHESTRATOR-IMPROV. Sawyer Group Flow + improv theater; theatrical energy throughout. (`research/03`)
56. **W4 · structure & output.** 3 short intense rounds; every response opens "Yes-and building on…"; 3 mandatory Wild extensions (Wild1/2/3); Grand Finale scripted dialogue; "Curtain Call." (`research/03`)
57. **W5 — Flash-Team · what.** ORCHESTRATOR-FLASH. Utley Ideaflow + TSM flash-team; every round a 24-hour sprint. (`research/03`)
58. **W5 · structure & output.** 4 rounds; Input-Obsession rule; grounding checks after rounds 2 & 4; sprint retrospectives → ranked roadmap + owner assignments + "Minimum Lovable Research Program." (`research/03`)
59. **W6 — Quarterly Review · what.** ORCHESTRATOR-REVIEW. DeepMind quarterly off-site: bottom-up creative + top-down adversarial board. (`research/03`)
60. **W6 · structure & output.** Phase 1: 3 bottom-up rounds + Leadership Pulse; Phase 2: 1 adversarial round ("Jeff Dean + Safety Board / VC / Regulator") → publication-ready whitepaper, risk register, go/no-go. (`research/03`)
61. **Shared DNA across all six.** Clean-slate blanking; leaking; 4 responses/focal; Orchestrator selection; distillation; final convergence. (`research/03`)
62. **One state machine, six configs.** Outer rounds, blanked-per-loop, organizer role, collaboration rules, word budget, schema prefix — parameters, not new code. (`architecture.md` §8)
63. **How to choose.** Low time → W4/W3; actionable roadmap → W5; whitepaper → W6; stuck → W4; depth+interdependency → W1/W2; don't know → meta-harness. (`skills/README.md`)
64. **Recommended first run.** W2 Kitchen Table — closest match to what the DeepMind leaders actually did, with all three transactive systems live. (`research/03`)

### Act VI — The Layers (65–72)

65. **DIVIDER · ACT VI — THE LAYERS.**
66. **Three nested layers.** Workflows ⊂ meta-harness ⊂ meta-meta-harness. Each operates one level of abstraction higher. (`skills/README.md`, `research/04`)
67. **Layer 1 — Workflows (W1–W6).** Six collaborative-intelligence patterns over the shared blanking+leaking engine. (`skills/README.md`)
68. **Layer 2 — Meta-Harness.** Goal → decompose → assign lenses → select workflow → run end-to-end. Auto-decompose + auto-select. (`skills/README.md`, `architecture.md` §9)
69. **Decomposition discipline.** N ∈ [3,12] sub-questions; necessity, interdependence, non-overlap, open phrasing; a coupling map drives the leaking. (`architecture.md` §9.2, §14.6)
70. **Layer 3 — Meta-Meta-Harness.** Harnesses that generate, critique, and self-improve other harnesses — a self-breeding innovation organism. (`research/04`, `architecture.md` §10)
71. **Sci-fi + myth is operational, not decoration.** Bisociation (Koestler): slam two matrices together until sparks fly. Verne→submarine, Wells→rocket/chain-reaction, Clarke→WWW. (`research/04`)
72. **Tsaheylu — the creative-infusion behind the gate.** Avatar's Tree of Souls as transactive collective intelligence made literal; an opt-in mythic layer kept behind the P3/P4 feasibility gate. (`research/04`, `architecture.md` §14.4)

### Act VII — Principles & Guardrails (73–82)

73. **DIVIDER · ACT VII — PRINCIPLES & GUARDRAILS.**
74. **P0 — The Persona.** Triple-PhD MIT Genius, applied to Orchestrator AND every expert. The epistemic contract. (`_shared/prompt-principles.md`)
75. **P1 — Fresh first-principles derivation.** Focal question answered from a clean slate, never paraphrased from a prior answer. (`_shared/prompt-principles.md`)
76. **P2 — Cross-domain ruthlessness.** Draw from physics, chemistry, biology, neuroscience, philosophy, Vedas. Analogies must be *mechanistic*, not decorative. (`_shared/prompt-principles.md`)
77. **P3 — Sci-fi as SPARK, not SUBSTANCE.** Light inspiration from sci-fi to escape local minima — but if an analogy can't become a buildable mechanism, drop it. (`_shared/prompt-principles.md`)
78. **P4 — Implementability & feasibility first.** Buildable with current/near-term ML & compute — or name the single missing capability. No hand-waving, no magic. (`_shared/prompt-principles.md`)
79. **P5 — Falsifiable close + no length cap.** End with concrete near-term experiments naming confirm/falsify metrics; remove length caps; include detailed chain-of-thought. (`_shared/prompt-principles.md`)
80. **The verification harness.** A pure gate function at every step: readiness, response-complete, schema, domain-coverage, distillation, safety, participation, completeness, word-count. (`architecture.md` §11)
81. **Gate-failure escalation.** Fail → log → retry once → surface to user with observed vs. expected → continue / retry / abort. Failure domains isolated; no cascade. (`architecture.md` §11.3, §12)
82. **Absolute transparency & lineage.** Every invocation, response, screenshot, current-best, and synthesis archived as Markdown; blank in-context, preserve in-archive; full reconstructable lineage. (`architecture.md` §7, §14.3)

### Act VIII — Proof (83–89)

83. **DIVIDER · ACT VIII — PROOF.**
84. **The canonical worked example.** The six DeepMind questions, run live and fully archived — starting with Question 1. (`examples/question1/`)
85. **Question 1 — the live run.** "How do we build truly self-learning / organic continuously learning architectures?" Workflow W1. (`examples/question1/README.md`)
86. **Phase 0 — convene the panel.** Four tabs, four verified modes: Claude Opus 4.8 High · ChatGPT Pro · Gemini 3.1 Pro Extended · Grok Expert. Sanity hello confirmed. (`examples/question1/README.md`)
87. **The pipeline, step by step.** Convene → mode config → sanity ping → invocation staged → 4 expert outputs → distillation → Current Best. (`examples/question1/README.md`)
88. **The transparent archive tree.** `examples/{RUNID}/` → outer-loop/inner-loop/ → invocation.md, response-{A–D}.md + .png, current-best.md, post-round-synthesis.md, final-report.md, gate-log.json. (`architecture.md` §7.1)
89. **Lineage you can replay.** Every current-best records its source slot + round; the run reconstructs from the archive even without the state file. (`architecture.md` §7.3, §6.4)

### Act IX — Impact, Roadmap, Vision (90–96)

90. **DIVIDER · ACT IX — IMPACT & VISION.**
91. **What it IS — and ISN'T.** Not a chat aggregator, not API chaining, not majority-vote. IS a theory-grounded, iterative cross-pollination protocol producing emergent insight. (`about/what.md`)
92. **Why this, now.** Four credible frontier LLMs exist simultaneously; Claude-in-Chrome removes API cost/limits; Claude Code encodes it all as one slash-command. (`about/why.md`)
93. **Honest limits.** Strong on divergence/recombination; weaker on convergence to high-confidence, taste, empirical validation. A turbocharged idea workshop, not the full discovery pipeline. (`research/02` §7)
94. **The roadmap.** Role randomization; dedicated Critic/Organizer; cap-rounds + falsification; per-round distillation; grounding with real tool use. (`research/02` §9)
95. **The self-breeding horizon.** Infuse workflows with generator/Dreamer roles, recurse three times → an architecture that spins up new research programs for 2030 problems. (`research/04` §3)
96. **The vision.** Consciousness scales not by bigger models alone, but by richer, stranger, more myth-drenched connections between minds — biological or synthetic. (`research/04`)

### Act X — Close + Appendix (97–100)

97. **DIVIDER · ACT X — CLOSE.**
98. **The closing thesis.** Four frontier AIs. Six innovation workflows. One orchestrating mind. Collective intelligence, engineered — and fully archived. (`README.md`)
99. **Get started.** Run `meta-harness` with a GOAL, or invoke W1–W6 directly; generate new harnesses with `meta-meta-harness`. MIT-licensed; full archives in `examples/`. (`skills/README.md`)
100. **APPENDIX — references & named systems.** Group Genius (Sawyer) · TSM-CI (Woolley/Gupta) · Delphi (Dalkey & Helmer) · Ideaflow (Utley) · Anchoring (Tversky & Kahneman) · Bisociation (Koestler) · SEAL · AlphaEvolve · Darwin-Gödel · Meta-Agent · KernelEvolve · CollabEval · MacNet · Iteration-of-Thought · Tsaheylu/Vitraya Ramunong. (`README.md`, `research/02`, `research/04`)

---

*Speaker notes are embedded per slide in the .pptx. The reveal.js mirror at
`docs/slideshow.html` auto-advances every ~6s and loops; the home page embeds an
autoplaying preview plus links to the full slideshow and the downloadable .pptx.*
