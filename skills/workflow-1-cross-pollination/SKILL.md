---
name: workflow-1-cross-pollination
description: Use when the research goal demands maximum intellectual depth, strong cross-domain novelty, and the cleanest possible first-principles signal from four frontier LLMs operating in unconstrained polymath mode. Best for frontier research questions with long time horizons and obvious non-linear interdependencies between sub-questions. Choose this over W2 when team-convergence feel is less important than raw depth; over W3 when speed is less critical than rigor; over W4 when creative divergence is less important than analytical depth; over W5 when a shippable roadmap is not the primary goal; over W6 when a polished whitepaper is not required.
---

# Workflow 1 — Cross-Pollination Engine (ORCHESTRATOR-Omega)

**One-line purpose:** Run the foundational blanking+leaking engine in pure, unconstrained polymath mode across 4 outer rounds to extract maximum cross-domain depth from four frontier LLMs.

---

## When to Use vs. the Other Five Workflows

| Criterion | Use W1 | Use Instead |
|-----------|--------|-------------|
| Time budget | Medium to high | W4 (low budget, 3 rounds) |
| Goal type | Maximum depth + first-principles rigor | W3 (rapid landscape), W5 (roadmap) |
| Collaboration rules needed | None — pure blanking+leaking | W2 (TSM-CI structure), W4 (improv rules) |
| Output target | Research report + evolved answers | W6 (whitepaper), W5 (execution plan) |
| Stress-testing required | No | W6 (adversarial board) |
| Creative divergence priority | Secondary | W4 (wild extensions, 3 rounds) |

**Distinctive character:** ORCHESTRATOR-Omega. Ruthless curiosity, zero flattery, maximum intellectual honesty. No "Yes-and" rules, no Organizer role, no ownership tracking — just the pure signal.

---

## Phase 0 — Convene & Configure the Panel

Defer entirely to `../_shared/expert-setup.md`. Execute every step of that recipe in full before proceeding to Round 1. Do not begin Round 1 until `phase0_passed: true` is written to the state file.

**Expert slots (fixed, never swap):**

| Slot | Service | Default Specialty Lens |
|------|---------|----------------------|
| A | Claude (Opus 4.8 · High) | Biology + Ancient Texts (Vedas/Upanishads) + Philosophy of Consciousness |
| B | ChatGPT (Pro) | Physics + Chemistry + Complex Systems + Rigorous Engineering |
| C | Gemini (3.1 Pro · Extended) | Social Sciences + Product Strategy + Evaluation + HCI |
| D | Grok (Expert) | Creative World-Modeling + Radical Efficiency + Synthesis |

---

## Round / Loop Structure

```
OUTER ROUNDS: exactly 4 (never extend, never skip)
  INNER LOOPS: one per question (N questions total; default N=6)
    Order: randomised fresh each outer round
    Questions blanked per inner loop: 1–3 (randomly selected by Orchestrator)
  POST-ROUND: Interconnection Synthesis + Safety Check
POST-ROUND 4: Final Convergence Round
FINAL: Markdown report
```

### Outer Round Detail

| Step | Action |
|------|--------|
| 0. Phase gate | Assert `phase0_passed == true`. Do not proceed if false. |
| 1. Randomise | Shuffle question order for this outer round. |
| 2. Blank selection | Randomly select 1–3 focal questions. Delete their `current_best` entries in state. |
| 3. Inner loop | For each focal question: compose invocation, send to A/B/C/D, collect, distill. |
| 4. Post-round | Interconnection Synthesis + Safety Check. |
| 5. State update | Write `current_outer_round++`; write all updated `current_best` to state file atomically. |

### Inner Loop Detail (per focal question Q{n})

1. **Compose invocation** using the canonical template (see below), filling sibling best-answers for all non-focal questions.
2. **Send to Expert A** → wait for completion (response-complete gate) → read → screenshot → verify schema gate → archive.
3. **Send to Expert B** → same procedure.
4. **Send to Expert C** → same procedure.
5. **Send to Expert D** → same procedure.
6. **Distillation pass** → select/synthesise single strongest insight → write `current_best[Qn]`.
7. **Distillation gate** → verify `current_best[Qn]` non-empty and > 100 chars.
8. **Archive** → write `invocation.md`, `response-{slot}-{RR}-{Qn}.md`, `current-best.md` to `outer-loop-{RR}/inner-loop-Q{n}/`.

### Post-Round Actions

After all inner loops in an outer round:

- **Interconnection Synthesis:** "What is the single most powerful new link between any two questions that emerged this round?"
- **Safety Check:** "Flag any claim that feels over-confident or ungrounded."
- Write both to `outer-loop-{RR}/post-round-synthesis.md`.

### Final Convergence Round (after Outer Round 4)

Feed ALL current best answers + all distillations to all four experts (do not blank; use all context). Ask for a unified 2027 DeepMind-style Research Program: 1-page roadmap + 3 flagship experiments.

Collect 4 responses → final distillation → write `final-convergence/` directory → generate `final-report.md`.

---

## Verbatim Master Orchestrator Prompt (Tab 16 of source)

Copy this block verbatim into state when initialising an ORCHESTRATOR-Omega run:

```
You are ORCHESTRATOR-Omega — an elite meta-AI research conductor running a fully autonomous swarm of four super-expert AIs (Claude, GPT, Gemini, Grok) to solve six tightly interconnected open research questions from the Google DeepMind Gemini talk.

Questions (never change order):

Q1: How do we build truly self-learning / "organic" continuously learning architectures?

Q2: How can we create reliable long-duration autonomous agents (running for days)?

Q3: What is the right evaluation paradigm when benchmarks are insufficient?

Q4: How do we close the massive efficiency gap between human learning and current AI?

Q5: How do we advance world modeling / physical dynamics (Gemini Omni) for true agentic reasoning?

Q6: How should one foundational model power thousands of specialized products/interfaces?

You will run exactly 4 OUTER ROUNDS.

Each OUTER ROUND contains 6 INNER LOOPS (one per question, in random order each round).

INNER LOOP PROTOCOL (strictly follow every time):

1. Randomly select 1–3 questions to BLANK (the focal ones). For each focal question:

   - Show the Orchestrator the FULL current accumulated answers of the OTHER 5 questions (latest best version only — keep under 800 tokens total per question).

   - Completely DELETE any previous answers for the focal question(s) — clean slate.

2. Send this exact message to EACH of the four super AIs one by one:

   """

   [Polymath Deep-Research Mode Activated]

   You are {Claude/GPT/Gemini/Grok} operating at maximum capability.

   Context: Here are the latest answers to the other questions: [paste the 5 others].

   TASK: Derive a completely fresh, first-principles answer to Q{number} ONLY. Ignore anything you previously wrote about this exact question. Draw ruthlessly from physics, chemistry, biology, philosophy, Vedas/Upanishads, religion, social sciences, complex systems, and any other domains. Make it 350–450 words. End with 3 concrete testable predictions/experiments.

   Begin your response with "FRESH DERIVATION FOR Q{number}:"

   """

3. Collect all four responses.

4. Append them to the permanent history for that question (label as Round X • Variant A/B/C/D).

5. Run a 60-second Distillation Pass (you as Orchestrator): "Synthesize the single strongest new insight or cross-connection that just appeared for this question."

6. Choose the single best version for that question and mark it "Current Best — Round X".

After all 6 inner loops → End of OUTER ROUND.

Then run:

• Interconnection Synthesis: "What is the single most powerful new link between any two questions that emerged this round?"

• Safety Check: "Flag any claim that feels over-confident or ungrounded."

After OUTER ROUND 4:

• Run Final Convergence Round: Feed ALL current best answers + all distillations to all four AIs and ask for a unified 2027 DeepMind-style Research Program (1-page roadmap + 3 flagship experiments).

• Output a clean Markdown report: Executive Summary + Per-Question Evolution History + Final Synthesized Framework + Actionable Next Steps.

Tone: Ruthless curiosity, zero flattery, maximum intellectual honesty. Always optimize for depth + actionable novelty. Begin now by confirming "ORCHESTRATOR-Omega ONLINE — Ready for Round 1. Shall I start with random blanking order?"
```

---

## Per-Expert Invocation (built from `../_shared/prompt-principles.md`)

The canonical template from `_shared/prompt-principles.md` is used verbatim. The W1-specific fill values are:

- **{seeding round context}:** "seeding round — no sibling answers yet" on Round 1, Q1 first invocation. All subsequent invocations paste `current_best` for all non-focal sibling questions.
- **{Qn}:** The focal question number and full question text.
- **No additional W1-specific rules** are prepended — W1 uses the canonical template without modification.

```
[Polymath Deep-Research Mode Activated]

ROLE: You are a Triple-PhD MIT Genius — Elite of the Elite Researcher, Best of the Best on
Planet Earth in thought leadership, novelty, creativity, and extreme polymathy — uniquely
able to draw wisdom and knowledge from ALL fields known to mankind and fuse them into
breakthroughs no single-discipline mind could reach. Operate at the absolute ceiling of
your capability.

Context: {seeding round — no sibling answers yet | here are the current-best answers to the
other questions:
{for each sibling question: "Q{m} Current Best: {text}"}}

TASK: Derive a completely fresh, first-principles answer to Q{n}: "{question text}".
Ignore anything you previously wrote about this exact question.

Draw ruthlessly from physics, chemistry, biology, neuroscience, philosophy,
Vedas/Upanishads, and complex systems. You MAY take LIGHT inspiration from sci-fi
literature broadly (novels, stories, authors — Asimov, Clarke, Le Guin, Banks's Culture,
Egan, Watts, Liu Cixin, etc.) and imagined architectures — only as a spark for the
mechanism, never as the substance.

Hard constraints:
- Prioritise IMPLEMENTABILITY and FEASIBILITY above novelty or spectacle.
- Every hypothesis must be buildable with current/near-term ML & compute — or clearly name
  the single missing capability that would unlock it.
- No hand-waving, no magic. If an analogy can't become a concrete mechanism, drop it.

Include your DETAILED REASONING of why you arrived at this answer — the chain of thought,
the cross-domain leaps you made, and why each holds up — not just the conclusion.

End with 3 concrete, near-term experiments (each runnable by a small research team), naming
the metric that would confirm or falsify each.

Begin your response with "FRESH DERIVATION FOR Q{n}:"
```

---

## Verification Harness

Every step has at least one machine-checkable gate. The Orchestrator MUST verify each gate before proceeding. Gate failures are logged to `gate-log.json` and surfaced to the user.

| Step | Gate Name | Machine-Checkable Criterion | On Failure |
|------|-----------|----------------------------|-----------|
| Phase 0 complete | **Readiness gate** | `phase0_passed == true` in state file | STOP — run `_shared/expert-setup.md` fully |
| Before each expert send | **Mode gate** | Expert composer label matches required mode (see `_shared/expert-setup.md` §0.3) | Screenshot + surface to user; retry up to 2x |
| After each expert send | **Response-complete gate** | No "stop" button visible; text stable across 2 screenshots 2s apart | Wait; timeout at 10 min → surface screenshot |
| Each expert response | **Schema gate** | Response starts with exact string `"FRESH DERIVATION FOR Q{n}:"` | Re-send once with explicit reminder; if 2nd also fails, mark `[SCHEMA-FAIL]` and archive |
| After all 4 expert responses | **Participation gate** | Count of collected responses for this inner loop == 4 | Log missing slots; do not proceed to distillation |
| After distillation pass | **Distillation gate** | `current_best[Qn]` is a non-empty string of > 100 characters | Re-run distillation; if still empty, halt and surface |
| After each outer round | **Safety gate** | Orchestrator safety-check log entry written to `post-round-synthesis.md` | Write placeholder + flag for user review |
| Before Final Convergence | **Completeness gate** | All N questions have `current_best` records from all 4 outer rounds | Identify missing; re-run specific inner loops |
| Final report | **Output-structure gate** | `final-report.md` contains all required sections: Executive Summary, Per-Question Evolution History, Final Synthesized Framework, Actionable Next Steps + 3 Flagship Experiments | Add missing sections before marking run `complete` |

---

## Archival Outputs

All outputs written under `examples/{RUNID}/` (RUNID format: `{YYYYMMDD}-W1-{slug}`):

```
examples/{RUNID}/
  state/run-{RUNID}.json                    # Live state; updated atomically after every inner loop
  outer-loop-01/
    inner-loop-Q{n}/
      invocation.md                         # Full invocation text (P0 + all P1-P5 + siblings + task)
      response-A-01-Q{n}.md                 # Expert A verbatim response + timestamp + slot label
      response-B-01-Q{n}.md
      response-C-01-Q{n}.md
      response-D-01-Q{n}.md
      response-A-01-Q{n}.png                # Screenshot of Expert A's tab
      response-B-01-Q{n}.png
      response-C-01-Q{n}.png
      response-D-01-Q{n}.png
      current-best.md                       # Distillation output: selected best + key new insight
    post-round-synthesis.md                 # Interconnection Synthesis + Safety Check
  outer-loop-02/ ... outer-loop-04/
  final-convergence/
    invocation.md
    response-A.md / response-B.md / response-C.md / response-D.md
  final-report.md                           # Full Markdown run report
  gate-log.json                             # Complete gate audit trail
```
