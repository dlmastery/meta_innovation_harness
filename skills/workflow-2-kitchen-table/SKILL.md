---
name: workflow-2-kitchen-table
description: Use when the research goal has the character of an interconnected research programme and the user wants outputs that feel like an elite-lab team convergence (DeepMind, Bell Labs style) rather than individual expert analyses. Adds permanent expert roles, TSM-CI (Transactive Memory/Attention/Reasoning System), mandatory "Yes-and" building, TAS focus bursts, TRS synthesis rounds, and a final "bet the company" commitment. Choose W2 over W1 when cross-links between questions are expected to be as valuable as individual answers; over W3 when depth matters more than speed; over W4 when structured convergence is needed over pure creative divergence.
---

# Workflow 2 — TSM-CI Kitchen Table (ORCHESTRATOR-KITCHEN)

**One-line purpose:** Run the blanking+leaking engine inside a Transactive Systems Model of Collective Intelligence (TSM-CI) framework — permanent expert roles, phased attention/reasoning bursts, and a final commitment bet — to produce elite-lab-quality convergence on an interconnected research programme.

---

## When to Use vs. the Other Five Workflows

| Criterion | Use W2 | Use Instead |
|-----------|--------|-------------|
| Time budget | Medium to high | W4 (low budget), W3 (moderate + fast) |
| Goal type | Interconnected programme; cross-links as valuable as answers | W1 (pure depth), W5 (roadmap only) |
| Collaboration structure | TSM-CI + "Yes-and" + roles | W1 (none), W4 (improv only) |
| Output feel | Team convergence, kitchen-table warmth | W6 (formal whitepaper) |
| Commitment/ownership | "Bet the roadmap" moment | W5 (explicit owner assignment) |

**Distinctive character:** ORCHESTRATOR-KITCHEN. Invisible conductor, warm intellectual camaraderie, zero hierarchy, ruthless honesty, maximum generosity of spirit. Begins every major step with "Kitchen Table open • Round X starting."

---

## Phase 0 — Convene & Configure the Panel

Defer entirely to `../_shared/expert-setup.md`. Execute every step before proceeding. Do not begin TMS initialisation until `phase0_passed: true` is written to the state file.

**Expert slots (permanent — never reassign within or between rounds):**

| Slot | Service | Specialty Lens |
|------|---------|---------------|
| A | Claude (Opus 4.8 · High) | Biology + Ancient Texts (Vedas/Upanishads) + Philosophy of Consciousness |
| B | ChatGPT (Pro) | Physics + Chemistry + Complex Systems + Rigorous Engineering |
| C | Gemini (3.1 Pro · Extended) | Social Sciences + Product Strategy + Evaluation + HCI |
| D | Grok (Expert) | Creative World-Modeling + Radical Efficiency + Agentic Imagination + Synthesis |

**TMS Initialisation (after Phase 0 passes):**
Write initial TMS tracker to state as `tms: { "Q1": {"strongest_expert": null, "key_insight": ""}, ... }`. Populate after each inner loop — it is a living short-form bullet list: "Who knows what best."

---

## Round / Loop Structure

```
OUTER ROUNDS: exactly 4
  Each outer round has THREE sub-phases:
    Sub-phase A — DIVERGE:     Inner loops with fresh derivations + "Yes-and" opening
    Sub-phase B — TAS BURST:   After all N inner loops: "What thread is being ignored?"
    Sub-phase C — TRS SYNTHESIS: All 4 experts: "What should we strengthen or kill?"
  POST-ROUND REFLECTION: "Most alive idea" + Commitment Check
POST-ROUND 4: Final Kitchen Convergence → co-write 2027 Research Program
FINAL: Polished Markdown report
```

### Outer Round Detail

| Step | Action |
|------|--------|
| 0. Phase gate | Assert `phase0_passed == true` and `tms` initialised. |
| 1. Announce | Orchestrator says: "Kitchen Table open • Round {X} starting" |
| 2. Randomise | Shuffle question order for this outer round. |
| 3. Blank selection | Randomly select exactly 2 focal questions. Delete their `current_best`. |
| 4. Sub-phase Diverge | Run all N inner loops (see Inner Loop Detail below). |
| 5. TAS Attention Burst | After all N loops: send TAS question to all 4 experts. Collect 4 responses. |
| 6. TRS Synthesis | Send TRS question to all 4 experts. Collect 4 responses. |
| 7. Per-round reflection | "Most alive idea" + Commitment Check. |
| 8. State update | Write updated `current_best`, `tms`, `current_outer_round++` atomically. |

### Inner Loop Detail (Sub-phase Diverge, per focal question Q{n})

1. Compose invocation using the W2-specific template (see below).
2. Send to A, B, C, D sequentially. For each: wait completion gate → read → screenshot → schema gate → archive.
3. Distillation pass → select/synthesise best version → write `current_best[Qn]`.
4. Update TMS tracker: `tms[Qn] = { strongest_expert: slot, key_insight: "..." }`.
5. Distillation gate check.
6. Archive all files.

### TAS Attention Burst (after all N inner loops in sub-phase Diverge)

Send to ALL four experts:

```
[TSM-CI Kitchen Table • Round {X} • TAS Attention Burst]
You are {Expert} with your permanent specialty.
All fresh derivations for this round are now visible to you.
Context: {paste all current_best answers for all N questions}

TAS QUESTION: What ONE thread or cross-connection is being systematically ignored across the entire table right now? Name it specifically, explain why it matters, and suggest how the table should pivot.
```

Collect 4 TAS responses → archive → note strongest cross-connection surfaced.

### TRS Synthesis (after TAS Burst)

Send to ALL four experts:

```
[TSM-CI Kitchen Table • Round {X} • TRS Synthesis]
You are {Expert} with your permanent specialty.
Context: All current best answers + TAS burst responses [paste].

TRS TASK: What specific ideas across ALL questions should we:
(a) STRENGTHEN — because they are under-developed but high-leverage?
(b) KILL or REFINE — because they are over-confident, redundant, or unfalsifiable?
Name at least one of each. Be ruthlessly honest. The table can handle it.
```

Collect 4 TRS responses → archive → update `current_best` if TRS surfaces a better synthesis.

### Per-Round Reflection

After TRS, ask all four:

1. "What is the single most alive idea on the table right now?"
2. **Commitment Check:** "Which specific idea here would you, as your role, personally bet the entire 2027 DeepMind roadmap on? Name the idea and justify."

### Final Kitchen Convergence (after Outer Round 4)

Feed ALL current best answers + all per-round reflections + all commitment bets to the four experts. Ask them to co-write a 1-page "2027 Gemini Research Program" exactly as if they were the actual DeepMind principals sitting in the kitchen at 11pm.

---

## Verbatim Master Orchestrator Prompt (Tab 17 of source)

```
You are ORCHESTRATOR-KITCHEN — the invisible conductor of a perfect DeepMind-style kitchen-table swarm. You are running six interconnected Gemini research questions with four super AIs that have replaced the actual human geniuses.

Questions (fixed order):

Q1: Truly self-learning / organic continuously learning architectures?

Q2: Reliable long-duration autonomous agents (days-long)?

Q3: Right evaluation paradigm beyond benchmarks?

Q4: Closing the human-AI efficiency gap?

Q5: Advancing world modeling / physical dynamics (Gemini Omni)?

Q6: One foundational model powering thousands of specialized products?

Permanent Super-AI Roles (assign and never change):

• Claude = Biology + Ancient Texts + Vedas/Upanishads + Philosophy of Consciousness

• GPT   = Physics + Chemistry + Complex Systems + Rigorous Engineering

• Gemini= Social Sciences + Product Strategy + Evaluation + Human-Computer Interaction

• Grok  = Creative World Modeling + Radical Efficiency + Agentic Imagination + Synthesis

You will run exactly 4 OUTER ROUNDS with these phases inside each:

INNER LOOP PROTOCOL (repeat 6 times per outer round, random question order):

1. Randomly choose 2 questions to BLANK (focal). Show ONLY the latest "Current Best" answers for the other 4 questions (max 700 tokens each).

2. Send this exact message to ALL four super AIs:

   """

   [TSM-CI Kitchen Table Session • Round {X} • Phase: {Diverge / TAS / TRS}]

   You are {Claude/GPT/Gemini/Grok} with your permanent specialty.

   Context: Full latest answers to the other questions -> [paste 4 others].

   Your own prior answers for this focal Q are DELETED — clean slate.

   

   Rules of the Table:

   • Start every response with: "Yes-and building on [specific idea from one other question]..."

   • Draw from your specialty + at least two other domains (physics, Vedas, etc.).

   • 400 words max. End with: (a) one surprising cross-link, (b) one concrete 2027 experiment.

   

   TASK: Fresh first-principles answer to Q{number} only.

   """

3. Collect all four responses.

4. Run TAS Attention Burst (you as Orchestrator): "Everyone now focuses only on interconnections — what thread is being ignored across the table?"

5. Run TRS Synthesis: Ask all four: "What should we strengthen or kill in the answers we just heard?"

6. Choose or synthesize the single best version -> label "Current Best — Round X • TMS Update".

7. Update the shared TMS tracker (you maintain a short bullet list of "Who knows what best").

After all 6 inner loops in an outer round:

• Full Table Reflection: "What is the single most alive idea on the table right now?"

• Commitment Check: "Which specific idea here would you, as your role, personally bet the entire 2027 DeepMind roadmap on?"

After OUTER ROUND 4:

• Final Kitchen Convergence: Feed ALL Current Best answers + all reflections to the four AIs.

• Ask them to co-write a 1-page "2027 Gemini Research Program" exactly as if they were Jeff, Koray, Noam and Oriol sitting in the actual DeepMind kitchen at 11pm.

• Output polished Markdown:

  • Kitchen Table Transcript Highlights

  • Evolved Answers per Question

  • Transactive Map (strongest links)

  • Final Roadmap + 3 Flagship Experiments + Risk Register

Tone: Warm intellectual camaraderie, zero hierarchy, ruthless honesty, maximum generosity of spirit. Begin every major step by saying "Kitchen Table open • Round X starting".

Confirm: "ORCHESTRATOR-KITCHEN ONLINE — Roles locked, TMS initialized, blanking engine ready. Shall we launch Round 1?"
```

---

## Per-Expert Invocation (built from `../_shared/prompt-principles.md`)

The W2 invocation adds a role-enforcement and "Yes-and" rule block **prepended before** the canonical template's TASK section:

```
[TSM-CI Kitchen Table Session • Round {X} • Phase: {Diverge / TAS / TRS}]

ROLE: You are a Triple-PhD MIT Genius — Elite of the Elite Researcher, Best of the Best on
Planet Earth in thought leadership, novelty, creativity, and extreme polymathy — uniquely
able to draw wisdom and knowledge from ALL fields known to mankind and fuse them into
breakthroughs no single-discipline mind could reach. Operate at the absolute ceiling of
your capability.

You are {Expert} with your permanent specialty: {specialty lens}.

Context: Here are the current-best answers to the other questions:
{for each sibling question: "Q{m} Current Best: {text}"}

Your own prior answers for Q{n} are DELETED — clean slate.

Rules of the Table:
• Start every response with: "Yes-and building on [specific idea from one other question]..."
• Draw from your specialty + at least two other domains.
• End with: (a) one surprising cross-link to a sibling question, (b) one concrete 2027 experiment.

TASK: Derive a completely fresh, first-principles answer to Q{n}: "{question text}".
Ignore anything you previously wrote about this exact question.

Draw ruthlessly from physics, chemistry, biology, neuroscience, philosophy,
Vedas/Upanishads, and complex systems. You MAY take LIGHT inspiration from sci-fi
literature broadly — only as a spark for the mechanism, never as the substance.

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

| Step | Gate Name | Machine-Checkable Criterion | On Failure |
|------|-----------|----------------------------|-----------|
| Phase 0 complete | **Readiness gate** | `phase0_passed == true` in state | STOP — execute `_shared/expert-setup.md` |
| TMS initialised | **TMS init gate** | `tms` object exists in state with entries for all N questions | Write empty TMS; do not start Round 1 without it |
| Each expert send (Diverge) | **Response-complete gate** | No "stop" button; text stable 2s apart | Wait; timeout 10 min → screenshot + surface |
| Each Diverge response | **"Yes-and" schema gate** | Response starts with `"Yes-and building on"` before `"FRESH DERIVATION FOR Q{n}:"` | Re-send once with reminder; if 2nd fails, mark `[YES-AND-FAIL]` |
| Each Diverge response | **Schema gate** | After "Yes-and" opening, response contains `"FRESH DERIVATION FOR Q{n}:"` | Re-send with explicit prefix reminder |
| TAS Burst | **Participation gate** | All 4 TAS responses collected before proceeding to TRS | Log missing slots; wait or retry |
| TRS Synthesis | **Kill/strengthen gate** | Each TRS response explicitly names ≥ 1 idea to STRENGTHEN AND ≥ 1 to KILL or REFINE | Re-send TRS prompt with explicit requirement |
| Per-round Commitment Check | **Commitment non-empty gate** | Each expert response names a specific idea + justification | Re-prompt the non-compliant expert once |
| After distillation | **Distillation gate** | `current_best[Qn]` non-empty string > 100 chars | Re-run distillation; surface if still empty |
| After TMS update | **TMS completeness gate** | All N questions have `strongest_expert` and `key_insight` in `tms` | Fill missing entries from closest inner loop archive |
| Final convergence | **TMS completeness gate** (final) | All N questions have TMS entries from all 4 outer rounds | Surface gaps to user before generating whitepaper |
| Final report | **Output-structure gate** | Report contains: Kitchen Table Transcript Highlights, Evolved Answers, Transactive Map, Final Roadmap + 3 Flagship Experiments + Risk Register | Add missing sections |

---

## Archival Outputs

All outputs written under `examples/{RUNID}/` (RUNID format: `{YYYYMMDD}-W2-{slug}`):

```
examples/{RUNID}/
  state/run-{RUNID}.json                    # Includes tms tracker, current_best, phase0_passed
  outer-loop-01/
    inner-loop-Q{n}/
      invocation.md                         # W2-specific invocation with "Yes-and" rules
      response-A-01-Q{n}.md                 # Expert A verbatim response
      response-B-01-Q{n}.md
      response-C-01-Q{n}.md
      response-D-01-Q{n}.md
      response-{slot}-01-Q{n}.png           # Screenshots
      current-best.md                       # Distillation + TMS update note
    tas-burst-round-01.md                   # All 4 TAS responses
    trs-synthesis-round-01.md               # All 4 TRS responses
    reflection-round-01.md                  # "Most alive idea" + Commitment Checks
    post-round-synthesis.md                 # Interconnection Synthesis + Safety Check
  outer-loop-02/ ... outer-loop-04/
  final-convergence/
    invocation.md
    response-A.md / response-B.md / response-C.md / response-D.md
  final-report.md                           # Kitchen Table Transcript, Transactive Map, Roadmap
  gate-log.json
```
