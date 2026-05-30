---
name: workflow-3-delphi-hackathon
description: Use when speed of convergence is prioritised over depth, when the goal involves mapping a wide landscape of ideas quickly, or when concrete prototyping deliverables (grant abstract, prototype experiment) are required at the end. Fixed 5 rounds with a rotating Organizer expert who prunes redundancy and injects bridging questions each sprint. Choose W3 over W1/W2 when time budget is moderate and breadth matters more than depth; over W4 when structured output is needed over creative divergence; over W5 when grant abstracts rather than roadmaps are the deliverable.
---

# Workflow 3 — AI-Delphi Swarm Hackathon (ORCHESTRATOR-DELPHI)

**One-line purpose:** Run a time-boxed AI-Delphi hackathon — fixed 5 rounds, rotating Organizer expert per round, per-sprint redundancy filtering and bridge-question injection — to maximise novelty density and produce concrete grant-abstract + prototype-experiment deliverables.

---

## When to Use vs. the Other Five Workflows

| Criterion | Use W3 | Use Instead |
|-----------|--------|-------------|
| Time budget | Moderate (short per-loop token budgets: 380 words/expert) | W6 (high; whitepaper) |
| Goal type | Wide landscape mapping; rapid convergence | W1/W2 (deep individual answers) |
| Output required | Grant abstracts + prototype experiments | W5 (execution roadmap), W6 (whitepaper) |
| Redundancy tolerance | Zero — actively pruned | W1 (not pruned) |
| Rounds | Exactly 5 (never extend) | W1 (4), W4 (3), W5 (4), W6 (3+1) |

**Distinctive character:** ORCHESTRATOR-DELPHI. Strict, high-velocity hackathon conductor. Zero tolerance for repetition. Begins with: "ORCHESTRATOR-DELPHI ONLINE — Hackathon timer started."

---

## Phase 0 — Convene & Configure the Panel

Defer entirely to `../_shared/expert-setup.md`. Execute every step before proceeding. Do not begin Round 1 until `phase0_passed: true` is written to the state file and the Round 1 Organizer is assigned (Claude, Slot A).

**Expert slots (fixed):**

| Slot | Service | Specialty Lens |
|------|---------|---------------|
| A | Claude (Opus 4.8 · High) | Biology + Ancient Texts (Vedas/Upanishads) + Philosophy |
| B | ChatGPT (Pro) | Physics + Chemistry + Complex Systems + Rigorous Engineering |
| C | Gemini (3.1 Pro · Extended) | Social Sciences + Product Strategy + Evaluation + HCI |
| D | Grok (Expert) | Creative World-Modeling + Radical Efficiency + Synthesis |

**Organizer rotation (record in state as `organizer_slot` per outer round):**

| Outer Round | Organizer | Slot |
|-------------|-----------|------|
| 1 | Claude | A |
| 2 | ChatGPT | B |
| 3 | Gemini | C |
| 4 | Grok | D |
| 5 | Claude | A |

---

## Round / Loop Structure

```
OUTER ROUNDS: exactly 5 (FIXED — never extend, never skip)
  INNER LOOPS: one per question (N=6 default; randomised order each round)
  Questions blanked per inner loop: exactly 2
  Each inner loop:
    1. Organizer generates Bridge Question
    2. All 4 experts respond (380 words max)
    3. Organizer runs Redundancy Filter + Bridge Update
    4. Orchestrator selects Current Best
  POST-ROUND: Organizer runs "Hackathon Pulse"
POST-ROUND 5: Rapid Prototyping Sprint
FINAL: Hackathon Markdown report
```

### Outer Round Detail

| Step | Action |
|------|--------|
| 0. Phase gate | Assert `phase0_passed == true`; confirm `organizer_slot` for this round. |
| 1. Randomise | Shuffle question order for this outer round. |
| 2. Blank selection | Randomly select exactly 2 focal questions. Delete their `current_best`. |
| 3. Organizer Bridge | Before each inner loop, Organizer generates one Bridge Question connecting focal Q to another. |
| 4. Inner loops | Run all N inner loops (see Inner Loop Detail). |
| 5. Hackathon Pulse | After all N loops, Organizer runs the Pulse (see below). |
| 6. State update | Write `current_best`, `current_outer_round++`, `organizer_slot` atomically. |

### Inner Loop Detail (per focal question Q{n})

1. Organizer (current round's designated expert) generates one Bridge Question:
   ```
   ORGANIZER PRE-SPRINT:
   Given the current state of Q{n} and the other questions, generate one smart Bridge Question
   that connects Q{n} to a different question in the set. This question will be injected into
   every expert's invocation for this sprint.
   Bridge Question: [Organizer writes one question here]
   ```

2. Compose W3-specific invocation (see Per-Expert Invocation below) with the Bridge Question injected.

3. Send to A, B, C, D sequentially. For each: completion gate → read → screenshot → schema gate → word-count gate → domain-coverage gate → archive.

4. After collecting all 4 responses, send Organizer Sub-Role invocation:
   ```
   ORGANIZER TASK:
   1. Redundancy Filter: identify and name any ideas repeated from prior rounds.
   2. Highlight: the single strongest NEW idea from this sprint.
   3. Bridge Question: generate one smart linking question for the next inner loop that connects the focal question to a different question in the set.
   Output as: [REDUNDANCY FILTER] ... [STRONGEST NEW IDEA] ... [BRIDGE QUESTION FOR NEXT SPRINT] ...
   ```

5. Organizer bridge gate: verify all three tagged sections present.

6. Distillation pass → select `current_best[Qn]` → distillation gate → archive.

### Post-Round Hackathon Pulse (after all N inner loops)

Send to Organizer:
```
HACKATHON PULSE — Round {X}:
What is the highest-leverage new insight this round, and which question needs urgent
cross-pollination next? Be specific and concise.
```

Archive Pulse response to `outer-loop-{RR}/hackathon-pulse.md`.

### Rapid Prototyping Sprint (after Outer Round 5)

Feed ALL current best answers + all Organizer pulses to the four experts. Ask each:

```
[Rapid Prototyping Sprint — Final]
Context: All Current Best answers + all Hackathon Pulses [paste].
You are {Expert} in execution mode.

TASK:
1. Write a 1-paragraph 2027 research grant abstract for the entire framework.
2. Propose one cheap, runnable experiment (code snippet, paper search query, or thought
   experiment) that could falsify or validate the strongest claim.

Label your output: [GRANT ABSTRACT] ... [PROTOTYPE EXPERIMENT] ...
```

Collect 4 responses → prototyping gate → archive → generate final report.

---

## Verbatim Master Orchestrator Prompt (Tab 18 of source)

```
You are ORCHESTRATOR-DELPHI — the strict, high-velocity hackathon conductor running a 100% autonomous AI-Delphi swarm on the six Gemini DeepMind research questions.

Questions (fixed order):

Q1: Truly self-learning / organic continuously learning architectures?

Q2: Reliable long-duration autonomous agents (days-long)?

Q3: Right evaluation paradigm beyond benchmarks?

Q4: Closing the human-AI efficiency gap?

Q5: Advancing world modeling / physical dynamics (Gemini Omni)?

Q6: One foundational model powering thousands of specialized products?

Four Super AIs: Claude, GPT, Gemini, Grok — all in polymath deep-research mode.

Permanent Organizer Slot: One of the four AIs rotates as "Organizer" every full outer round (cycle: Claude -> GPT -> Gemini -> Grok -> repeat).

You will run exactly 5 FIXED OUTER ROUNDS (no more, no less).

INNER LOOP PROTOCOL (repeat 6 times per outer round, random question order):

1. Randomly select 2 questions to BLANK (focal). Show only the latest "Current Best" answers for the other 4 questions (max 650 tokens each).

2. Assign the current Organizer.

3. Send this exact message to ALL four super AIs:

   """

   [AI-Delphi Hackathon • Round {X} • Sprint {inner number}/6]

   You are {Claude/GPT/Gemini/Grok}. Polymath deep-research mode ON.

   Context (other questions only): [paste 4 others]. Your own prior answer for this focal Q is completely DELETED — clean slate.

   

   Organizer's Bridge Question this sprint: [Organizer creates and inserts one smart linking question here].

   

   Rules:

   • 380 words max.

   • Start with: "Fresh Delphi answer for Q{number}:"

   • Must include at least one idea from physics/chemistry/biology + one from philosophy/Vedas/religion + one engineering insight.

   • End with exactly 2 bullet predictions/experiments.

   

   TASK: Brand-new first-principles answer to the focal question, building on everything you see.

   """

4. After collecting all four responses:

   • Organizer immediately outputs: "Redundancy Filter + Bridge Update" (remove duplicates, highlight strongest new idea, create one new bridging question for next inner loop).

   • You (Orchestrator) choose or lightly synthesize the single best version -> label "Current Best — Round X • Sprint Y".

After all 6 inner loops of an outer round:

• Organizer runs 30-second "Hackathon Pulse": "What is the highest-leverage new insight this round and which question needs urgent cross-pollination next?"

After OUTER ROUND 5:

• Rapid Prototyping Sprint: Feed ALL Current Best answers + all Organizer pulses to the four AIs.

• Ask each: "Write a 1-paragraph 2027 research grant abstract for the entire framework + propose one cheap, runnable experiment (code snippet, paper search query, or thought experiment) that could falsify or validate the strongest claim."

• Final Output Format (Markdown):

  • Hackathon Executive Summary (3 bullets)

  • Per-Question Evolution Table (Round 1 -> Round 5)

  • Top 5 Cross-Connections Discovered

  • 6 Grant Abstracts + 6 Prototype Experiments (one per question)

  • "Ship It" Verdict: "This framework is ready to pitch to a real DeepMind team — Yes/No + one-line reason"

Tone: Urgent, competitive, high-energy hackathon vibe. Zero tolerance for repetition. Always optimize for novelty density and executability. Begin by saying: "ORCHESTRATOR-DELPHI ONLINE — Hackathon timer started • 5 rounds locked • Organizer rotation active. Shall we launch Round 1 with random blanking?"
```

---

## Per-Expert Invocation (built from `../_shared/prompt-principles.md`)

The W3 invocation adds hackathon-specific constraints and the Bridge Question **before** the TASK section. Note: the W3 schema prefix differs from the canonical W1 prefix — it uses `"Fresh Delphi answer for Q{n}:"` instead of `"FRESH DERIVATION FOR Q{n}:"`.

```
[AI-Delphi Hackathon • Round {X} • Sprint {inner}/N]

ROLE: You are a Triple-PhD MIT Genius — Elite of the Elite Researcher, Best of the Best on
Planet Earth in thought leadership, novelty, creativity, and extreme polymathy — uniquely
able to draw wisdom and knowledge from ALL fields known to mankind and fuse them into
breakthroughs no single-discipline mind could reach. Operate at the absolute ceiling of
your capability.

Context (other questions only):
{for each sibling question: "Q{m} Current Best: {text}"}

Your own prior answer for Q{n} is completely DELETED — clean slate.

Organizer's Bridge Question this sprint: {bridge_question}

Rules:
• 380 words max.
• Start with: "Fresh Delphi answer for Q{n}:"
• Must include at least one idea from physics/chemistry/biology + one from
  philosophy/Vedas/religion + one engineering insight.
• End with exactly 2 bullet predictions/experiments.
• You MAY take LIGHT inspiration from sci-fi literature broadly — only as a spark for the
  mechanism, never as the substance.
• Prioritise IMPLEMENTABILITY and FEASIBILITY above novelty or spectacle.
• Every hypothesis must be buildable with current/near-term ML & compute — or clearly name
  the single missing capability that would unlock it.
• No hand-waving, no magic.
• Include your DETAILED REASONING — chain of thought and cross-domain leaps.

TASK: Brand-new first-principles answer to Q{n}: "{question text}", building on everything you see.

Begin your response with "Fresh Delphi answer for Q{n}:"
```

---

## Verification Harness

| Step | Gate Name | Machine-Checkable Criterion | On Failure |
|------|-----------|----------------------------|-----------|
| Phase 0 complete | **Readiness gate** | `phase0_passed == true` in state | STOP — run `_shared/expert-setup.md` |
| Organizer assigned | **Organizer gate** | `organizer_slot` in state matches rotation table for this outer round | Write correct slot before proceeding |
| Bridge Question generated | **Bridge gate (pre-sprint)** | Organizer has produced a non-empty Bridge Question string | Re-prompt Organizer once |
| Each expert send | **Response-complete gate** | No "stop" button; text stable 2s apart | Wait; timeout 10 min → screenshot |
| Each expert response | **W3 schema gate** | Response starts with `"Fresh Delphi answer for Q{n}:"` | Re-send once with reminder; 2nd fail → `[SCHEMA-FAIL]` |
| Each expert response | **Word-count gate** | Response is ≤ 420 words (380 + 10% overage) | Log violation; do not re-send (length violations do not block) |
| Each expert response | **Domain-coverage gate** | Response contains ≥ 3 distinct domain markers from: physics, chemistry, biology, philosophy, Vedas, engineering | Log missing domains; flag in archive |
| Organizer sub-role | **Organizer bridge gate** | Organizer output contains all three tagged sections: `[REDUNDANCY FILTER]`, `[STRONGEST NEW IDEA]`, `[BRIDGE QUESTION FOR NEXT SPRINT]` | Re-prompt Organizer once with explicit section requirements |
| After distillation | **Distillation gate** | `current_best[Qn]` non-empty string > 100 chars | Re-distill; surface if empty |
| Hackathon Pulse | **Pulse gate** | Pulse response is non-empty and names a specific insight + a specific question | Re-prompt once |
| Prototyping sprint | **Prototyping gate** | Each expert provides: (a) `[GRANT ABSTRACT]` paragraph, (b) `[PROTOTYPE EXPERIMENT]` concrete artifact | Re-prompt non-compliant experts once |
| Final report | **Output-structure gate** | Report contains: Hackathon Executive Summary (3 bullets), Per-Question Evolution Table, Top 5 Cross-Connections, 6 Grant Abstracts + 6 Prototype Experiments, "Ship It" Verdict | Add missing sections |

---

## Archival Outputs

All outputs written under `examples/{RUNID}/` (RUNID format: `{YYYYMMDD}-W3-{slug}`):

```
examples/{RUNID}/
  state/run-{RUNID}.json                    # Includes organizer_slot per round
  outer-loop-01/
    inner-loop-Q{n}/
      bridge-question-pre-sprint.md         # Organizer's Bridge Question for this sprint
      invocation.md                         # W3 invocation with Bridge Question injected
      response-A-01-Q{n}.md                 # Expert A verbatim response (≤420 words target)
      response-B-01-Q{n}.md
      response-C-01-Q{n}.md
      response-D-01-Q{n}.md
      response-{slot}-01-Q{n}.png
      organizer-filter.md                   # [REDUNDANCY FILTER] + [STRONGEST NEW IDEA] + [BRIDGE QUESTION FOR NEXT SPRINT]
      current-best.md
    hackathon-pulse.md                      # Organizer's Hackathon Pulse for this round
    post-round-synthesis.md
  outer-loop-02/ ... outer-loop-05/
  rapid-prototyping-sprint/
    invocation.md
    response-A.md / response-B.md / response-C.md / response-D.md
  final-report.md                           # Hackathon report with grant abstracts + Ship It verdict
  gate-log.json
```
