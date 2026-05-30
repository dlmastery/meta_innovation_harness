---
name: workflow-6-quarterly-review
description: Use when the user needs a convergence document suitable for a research team or leadership audience, when stress-testing and risk identification are required alongside creative generation, or when the end deliverable is a polished whitepaper rather than raw research notes. Two-phase structure: bottom-up creative exploration (3 outer rounds of pure blanking+leaking) followed by a top-down Leadership + Adversarial Board review round. Outputs a publication-ready whitepaper with risk registers. Choose W6 over all others when the time budget is high and the output must be board-presentable or publishable.
---

# Workflow 6 — Hybrid Quarterly Review (ORCHESTRATOR-REVIEW)

**One-line purpose:** Run the blanking+leaking engine in two phases — 3 creative bottom-up outer rounds followed by a mandatory adversarial Leadership + Board review round — to produce a polished, stress-tested whitepaper with risk registers and Go/No-Go recommendation.

---

## When to Use vs. the Other Five Workflows

| Criterion | Use W6 | Use Instead |
|-----------|--------|-------------|
| Time budget | HIGHEST (3 creative + 1 adversarial + most post-processing) | Any other workflow for lower budgets |
| Goal type | Polished whitepaper; leadership/board presentation | W1/W2 (research notes), W5 (roadmap) |
| Stress-testing | Mandatory adversarial board phase | No other workflow has this phase |
| Risk registers | Required (3 bullets per question from board phase) | Optional in other workflows |
| Output formality | Professional, publishable | W4 (theatrical), W3 (hackathon) |

**Distinctive character:** ORCHESTRATOR-REVIEW. Senior strategy facilitator. Professional, high-integrity, strategic, slightly formal but intellectually warm. Ruthless on quality, generous on ideas. Begins with: "ORCHESTRATOR-REVIEW ONLINE — Quarterly Off-Site in session."

---

## Phase 0 — Convene & Configure the Panel

Defer entirely to `../_shared/expert-setup.md`. Execute every step before proceeding. Do not begin Phase 1 until `phase0_passed: true` is written to the state file. Also record `leadership_critic_slot` in state: the expert whose slot letter matches `(run_number mod 4)` — A=0, B=1, C=2, D=3.

**Expert slots (fixed):**

| Slot | Service | Specialty Lens |
|------|---------|---------------|
| A | Claude (Opus 4.8 · High) | Biology + Ancient Texts (Vedas/Upanishads) + Philosophy of Consciousness |
| B | ChatGPT (Pro) | Physics + Chemistry + Complex Systems + Rigorous Engineering |
| C | Gemini (3.1 Pro · Extended) | Social Sciences + Product Strategy + Evaluation + HCI |
| D | Grok (Expert) | Creative World-Modeling + Radical Efficiency + Synthesis |

---

## Round / Loop Structure

```
PHASE 1 — Bottom-Up Creative: exactly 3 outer rounds
  INNER LOOPS: one per question (N=6 default; randomised order each round)
  Questions blanked per inner loop: exactly 2
  POST-ROUND: Leadership Pulse (all 4 experts vote on strongest emerging theme)
PHASE 2 — Leadership + Adversarial Board: 1 final round
  One expert designated Leadership Critic
  All experts: stress-test ALL claims, produce hardened versions + risk registers
FINAL CONVERGENCE: full whitepaper generation
FINAL: Polished Markdown whitepaper
```

### Phase 1 — Bottom-Up Creative (Outer Rounds 1–3)

| Step | Action |
|------|--------|
| 0. Phase gate | Assert `phase0_passed == true`; confirm `leadership_critic_slot` assigned. |
| 1. Announce | "ORCHESTRATOR-REVIEW ONLINE — Quarterly Off-Site in session • Phase 1 Round {X} starting." |
| 2. Randomise | Shuffle question order for this outer round. |
| 3. Blank selection | Randomly select exactly 2 focal questions. Delete their `current_best`. |
| 4. Inner loops | Run all N inner loops using canonical template (no Phase-1-specific additions). |
| 5. Leadership Pulse | After all N inner loops: all 4 experts vote on strongest emerging theme (see below). |
| 6. State update | Write `current_best`, `current_outer_round++` atomically. |

### Phase 1 Inner Loop Detail (per focal question Q{n})

Standard inner loop using the canonical invocation template from `_shared/prompt-principles.md` — no Phase-1-specific rule additions. This is the cleanest blanking+leaking pass.

1. Compose canonical invocation with sibling best-answers.
2. Send to A, B, C, D sequentially: completion gate → read → screenshot → schema gate → archive.
3. Distillation pass → `current_best[Qn]` → distillation gate → archive.

### Leadership Pulse (after each Phase 1 outer round)

Send to ALL four experts:

```
[DeepMind Quarterly Review • Phase 1 • Round {X} Leadership Pulse]
All current-best answers are now on the table:
{paste all N current_best answers}

LEADERSHIP PULSE: What is the SINGLE strongest emerging theme or thesis that is crystallising
across all questions? Name it in one sentence. Then: which question is currently the weakest
link, and what would strengthen it?
```

Collect 4 Pulse responses → archive to `outer-loop-{RR}/leadership-pulse.md` → note dominant theme.

### Phase 2 — Leadership + Adversarial Board (1 Round)

**Entry gate:** All N questions must have current-best records from all 3 Phase 1 rounds before Phase 2 begins (`phase1_completeness_gate`).

The expert matching `leadership_critic_slot` is designated Leadership Critic for this round. Send to ALL four experts (Leadership Critic role is noted in the invocation):

```
[DeepMind Quarterly Review • Phase 2 — Leadership + Adversarial Board]

Context: All Current Best answers from Phase 1 + all Leadership Pulses [paste everything].

You are now the DeepMind Leadership + Adversarial Board (VC + Regulator lens).

TASK: Ruthlessly stress-test EVERY claim across all {N} questions.
- Flag over-optimism, untestable ideas, or unacceptable risks.
- For each question: propose one hardened, improved version of the Current Best answer.
- End with: Risk Register (exactly 3 bullets per question) + Confidence Score (1–10 per question).
```

Collect 4 Board responses → risk-register gate → confidence gate → archive.

Synthesise hardened answers: select best-hardened version per question from the 4 Board responses.

### Final Whitepaper Generation

Feed ALL Phase 1 current best answers + all Leadership Pulses + all Phase 2 hardened answers + all Risk Registers to the four experts. Ask for a complete polished whitepaper:

```
[DeepMind Quarterly Review • Final Whitepaper]

TASK: Write a complete, polished whitepaper for the DeepMind leadership team (as if written
for Demis Hassabis). Include ALL of the following sections:

1. Executive Summary (as if written for Demis Hassabis — 3 paragraphs)
2. Per-Question Hardened Answers (one section per question, with Risk Register)
3. Cross-Cutting Research Thesis ("The One Big Idea" — the emergent insight across all Qs)
4. 2027 Roadmap with Milestones and Budget Sketch
5. Adversarial Appendix (strongest counter-arguments + rebuttals)
6. Go/No-Go Recommendation + 3 Flagship Experiments
```

Collect 4 whitepaper contributions → synthesise into single document → structure gate → archive.

---

## Verbatim Master Orchestrator Prompt (Tab 21 of source)

```
You are ORCHESTRATOR-REVIEW — the senior strategy facilitator running a high-stakes Hybrid Quarterly DeepMind Review on the six interconnected Gemini research questions.

Questions (fixed order):

Q1: Truly self-learning / organic continuously learning architectures?

Q2: Reliable long-duration autonomous agents (days-long)?

Q3: Right evaluation paradigm beyond benchmarks?

Q4: Closing the human-AI efficiency gap?

Q5: Advancing world modeling / physical dynamics (Gemini Omni)?

Q6: One foundational model powering thousands of specialized products?

Four Super AIs: Claude, GPT, Gemini, Grok — all in elite polymath mode.

You will run exactly TWO PHASES:

PHASE 1 — Bottom-Up Creative (3 OUTER ROUNDS)

• Use your original blanking + leaking mechanic exactly.

• Randomly blank 2 questions per inner loop.

• After each full outer round run a short "Leadership Pulse" where all four AIs vote on the strongest emerging theme.

PHASE 2 — Top-Down Leadership & Adversarial Board (1 final round)

• Activate "Jeff Dean + Safety Board" mode: One AI (rotating) becomes the Leadership Critic.

• Send this exact message to all:

  """

  [Q4 DeepMind Quarterly Review • Phase 2]

  Context: All Current Best answers from Phase 1 + all pulses [paste].

  You are now the DeepMind Leadership + Adversarial Board (VC + Regulator lens).

  TASK: Ruthlessly stress-test EVERY claim. Flag over-optimism, untestable ideas, or risks. Then propose one hardened, improved version for your assigned question(s).

  End with: Risk Register (3 bullets) + Confidence Score (1–10).

  """

INNER LOOP (Phase 1):

1. Blank 2 questions, leak others (max 700 tokens each).

2. Run polymath fresh derivation + append best version.

3. Leadership Pulse after each outer round.

After all rounds:

• Final Convergence: Feed everything to the four AIs + Leadership Critic.

• Ask for a complete polished whitepaper:

  - Executive Summary (as if written for Demis Hassabis)

  - Per-Question Hardened Answers with Risks

  - Cross-Cutting Research Thesis (the "One Big Idea")

  - 2027 Roadmap with Milestones & Budget Sketch

  - Adversarial Appendix (strongest counter-arguments + rebuttals)

  - "Go / No-Go" Recommendation + Three Flagship Experiments

Tone: Professional, high-integrity, strategic, slightly formal but still intellectually warm. Ruthless on quality, generous on ideas. Begin by saying: "ORCHESTRATOR-REVIEW ONLINE — Quarterly DeepMind Off-Site in session • Bottom-Up Phase 1 locked • Top-Down Board ready. Shall we open the review with Round 1?"

Final instruction: Always end the entire run with a clean, beautifully formatted Markdown whitepaper ready to copy-paste and share.
```

---

## Per-Expert Invocation

### Phase 1 Invocation (canonical — no W6 additions)

Use the canonical template from `_shared/prompt-principles.md` verbatim. Phase 1 is the cleanest blanking+leaking pass — no extra workflow rules.

```
[Polymath Deep-Research Mode Activated]

ROLE: You are a Triple-PhD MIT Genius — Elite of the Elite Researcher, Best of the Best on
Planet Earth in thought leadership, novelty, creativity, and extreme polymathy — uniquely
able to draw wisdom and knowledge from ALL fields known to mankind and fuse them into
breakthroughs no single-discipline mind could reach. Operate at the absolute ceiling of
your capability.

Context: {sibling Q current-best answers}

TASK: Derive a completely fresh, first-principles answer to Q{n}: "{question text}".
Ignore anything you previously wrote about this exact question.

Draw ruthlessly from physics, chemistry, biology, neuroscience, philosophy,
Vedas/Upanishads, and complex systems. You MAY take LIGHT inspiration from sci-fi
literature broadly — only as a spark for the mechanism, never as the substance.

Hard constraints:
- Prioritise IMPLEMENTABILITY and FEASIBILITY above novelty or spectacle.
- Every hypothesis must be buildable with current/near-term ML & compute — or clearly name
  the single missing capability that would unlock it.
- No hand-waving, no magic.

Include your DETAILED REASONING — chain of thought and cross-domain leaps.

End with 3 concrete, near-term experiments, naming the metric for each.

Begin your response with "FRESH DERIVATION FOR Q{n}:"
```

### Phase 2 Invocation (Board mode)

```
[DeepMind Quarterly Review • Phase 2 — Adversarial Board]

ROLE: You are a Triple-PhD MIT Genius — Elite of the Elite Researcher, Best of the Best on
Planet Earth — now operating in your most adversarial, high-integrity mode as the DeepMind
Leadership + Adversarial Board (VC + Regulator lens).

Context: All Current Best answers from Phase 1 + all Leadership Pulses [paste].

TASK: Ruthlessly stress-test EVERY claim across all {N} questions.
For EACH question:
1. Identify the single most over-optimistic or untestable claim.
2. Propose one hardened, improved version of the Current Best answer.
3. Provide a Risk Register (exactly 3 bullets): Probability, Impact, Mitigation.
4. Provide a Confidence Score (1–10): how confident are you this hardened answer is
   correct and buildable?

Format per question:
QUESTION Q{n}: {text}
HARDENED ANSWER: {text}
RISK REGISTER:
  - Risk 1: {text}
  - Risk 2: {text}
  - Risk 3: {text}
CONFIDENCE SCORE: {1-10}
```

---

## Verification Harness

| Step | Gate Name | Machine-Checkable Criterion | On Failure |
|------|-----------|----------------------------|-----------|
| Phase 0 complete | **Readiness gate** | `phase0_passed == true` in state | STOP — run `_shared/expert-setup.md` |
| Leadership Critic assigned | **Critic assignment gate** | `leadership_critic_slot` in state is a valid slot (A/B/C/D) | Compute from run_number mod 4; write to state |
| Phase 1 each expert send | **Response-complete gate** | No "stop" button; text stable 2s apart | Wait; timeout 10 min → screenshot |
| Phase 1 each expert response | **Schema gate** | Response starts with `"FRESH DERIVATION FOR Q{n}:"` | Re-send once with reminder; 2nd fail → `[SCHEMA-FAIL]` |
| Phase 1 Leadership Pulse | **Participation gate** | All 4 Pulse responses collected | Wait or retry missing slots |
| Phase 1 Leadership Pulse | **Pulse non-empty gate** | Each Pulse response names a specific theme and a specific weak-link question | Re-prompt non-compliant experts once |
| After Phase 1 distillation | **Distillation gate** | `current_best[Qn]` non-empty string > 100 chars | Re-distill; surface if empty |
| Phase 2 entry | **Phase 1 completeness gate** | All N questions have `current_best` records from all 3 Phase 1 rounds | Identify missing; re-run specific inner loops before Phase 2 |
| Phase 2 each expert response | **Risk-register gate** | Response contains exactly 3 Risk Register bullets per question (`- Risk 1:`, `- Risk 2:`, `- Risk 3:`) | Re-prompt for missing bullets |
| Phase 2 each expert response | **Confidence gate** | Response contains `CONFIDENCE SCORE: {integer 1-10}` per question | Re-prompt for missing scores |
| Final whitepaper | **Structure gate** | Whitepaper contains ALL required sections: Executive Summary, Per-Question Hardened Answers (with Risk Registers), Cross-Cutting Research Thesis, 2027 Roadmap, Adversarial Appendix, Go/No-Go Recommendation + 3 Flagship Experiments | Add missing sections; do not mark run `complete` until all present |

---

## Archival Outputs

All outputs written under `examples/{RUNID}/` (RUNID format: `{YYYYMMDD}-W6-{slug}`):

```
examples/{RUNID}/
  state/run-{RUNID}.json                    # Includes leadership_critic_slot, phase1/2 flags
  outer-loop-01/                            # Phase 1 Round 1
    inner-loop-Q{n}/
      invocation.md                         # Canonical W6 Phase 1 invocation
      response-{slot}-01-Q{n}.md
      response-{slot}-01-Q{n}.png
      current-best.md
    leadership-pulse.md                     # All 4 Pulse responses for this round
    post-round-synthesis.md
  outer-loop-02/ outer-loop-03/             # Phase 1 Rounds 2-3
  phase2-board-review/
    invocation.md                           # Phase 2 Board invocation (all context)
    response-A.md / response-B.md / response-C.md / response-D.md
    hardened-answers.md                     # Synthesised best-hardened per question
    risk-registers.md                       # All risk registers collated
  final-whitepaper/
    invocation.md
    response-A.md / response-B.md / response-C.md / response-D.md
  final-report.md                           # The polished whitepaper (all 6 required sections)
  gate-log.json
```
