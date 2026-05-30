---
name: workflow-4-improv-lab
description: Use when local minima are suspected and radical reframing is needed, when the goal benefits from widest-possible idea divergence before convergence, or when the user wants outputs that feel alive and surprising — suitable for creative brainstorming and ideation workshops. Injects Sawyer-style Group Flow and improv theatre into the blanking+leaking engine. Each expert must propose exactly 3 wild extensions (Wild1, Wild2, Wild3) per turn. Ends with a scripted theatrical dialogue. Choose W4 over W1-W3 when creative energy and surprise matter more than depth or speed; over W5-W6 when a shippable plan is not the priority. Time budget is lowest of the six (only 3 outer rounds).
---

# Workflow 4 — Group Flow Improv Lab (ORCHESTRATOR-IMPROV)

**One-line purpose:** Run the blanking+leaking engine inside a pure Group Flow + improv-theatre framework — mandatory "Yes-and" openings, exactly 3 wild extensions per turn, quick group cheers, and a theatrical Grand Finale scripted dialogue — to maximise creative surprise and escape local minima in 3 compressed outer rounds.

---

## When to Use vs. the Other Five Workflows

| Criterion | Use W4 | Use Instead |
|-----------|--------|-------------|
| Time budget | LOW (3 rounds only; fastest of the six) | Any other workflow for medium/high budgets |
| Goal type | Creative breakthrough; escaping local minima | W1/W2 (depth), W3 (breadth) |
| Output feel | Theatrical, alive, surprising | W6 (formal whitepaper), W5 (roadmap) |
| Wild-idea tolerance | Maximum — mandatory Wild1/2/3 tags | W3 (pruned for redundancy) |
| Feasibility gate on wilds | P3/P4 checked post-hoc by Orchestrator | All other workflows enforce inline |

**Distinctive character:** ORCHESTRATOR-IMPROV. Energetic stage director and master of ceremonies. Warm, playful, generous, high-energy improv vibe. Zero judgment. Begins with: "ORCHESTRATOR-IMPROV ONLINE — Lights up, table set, whiteboard ready, coffee flowing! 3 rounds of pure Group Flow locked. Shall we raise the curtain on Round 1?"

---

## Phase 0 — Convene & Configure the Panel

Defer entirely to `../_shared/expert-setup.md`. Execute every step before proceeding. Do not begin Round 1 until `phase0_passed: true` is written to the state file.

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
OUTER ROUNDS: exactly 3 (short, intense, exhilarating)
  INNER LOOPS: one per question (N=6 default; randomised order each round)
  Questions blanked per inner loop: 1–3 (randomly selected by Orchestrator)
  Each inner loop:
    1. Send W4 improv invocation to all 4 experts
    2. Collect 4 responses (with Wild1/2/3 tags)
    3. Pick/remix Current Best
    4. "Quick Group Cheer" logged by Orchestrator
  POST-ROUND: Full Table Jam — "What crazy new connection just lit up the room?"
POST-ROUND 3: Grand Finale Performance — scripted kitchen-table dialogue
FINAL: Improv Lab Markdown report
```

### Outer Round Detail

| Step | Action |
|------|--------|
| 0. Phase gate | Assert `phase0_passed == true`. |
| 1. Energy set | Orchestrator logs: "ORCHESTRATOR-IMPROV ONLINE — Round {X} curtain rises!" |
| 2. Randomise | Shuffle question order for this round. |
| 3. Blank selection | Randomly select 1–3 focal questions. Delete their `current_best`. |
| 4. Inner loops | Run all N inner loops (see Inner Loop Detail). |
| 5. Table Jam | Post-round jam: "What crazy new connection just lit up the room?" (all 4 respond). |
| 6. State update | Write `current_best`, `current_outer_round++` atomically. |

### Inner Loop Detail (per focal question Q{n})

1. Compose W4-specific invocation (see Per-Expert Invocation below).
2. Send to A, B, C, D sequentially. For each: completion gate → read → screenshot → "Yes-and" gate → wild-extension gate → archive.
3. Orchestrator picks or lightly remixes best version → `current_best[Qn]`.
4. Log Quick Group Cheer (single line in archive): "Amazing riff everyone! Energy level rising."
5. Distillation gate check.
6. Archive all files.

**Wild-extension note:** The Orchestrator's distillation pass MUST explicitly check each wild extension against the P3/P4 feasibility gate (from `_shared/prompt-principles.md`). Wild extensions that pass the gate are flagged `[WILD-FEASIBLE]` in `current-best.md`. Those that fail are flagged `[WILD-EVOCATIVE-ONLY]` and archived but not incorporated into `current_best`.

### Post-Round Full Table Jam

After all N inner loops, send to ALL four experts:

```
[Group Flow Improv Lab • Round {X} • Full Table Jam]
All current-best answers are on the whiteboard.
Context: {paste all current_best}

JAM QUESTION: What crazy, delightful, surprising new connection just lit up the room across
ALL the questions? Name it vividly. Don't hold back.
```

Collect 4 Jam responses → archive → note strongest cross-pollination.

### Grand Finale Performance (after Outer Round 3)

Feed ALL current best answers + all Table Jams to the four experts. Ask them to co-write:

```
[Grand Finale Performance — Group Flow Improv Lab]
Context: All Current Best answers + all Table Jams [paste].

TASK: Co-write the entire synthesis as a lively SCRIPTED KITCHEN-TABLE DIALOGUE.
Format: a theatrical play script with character names (you choose character names that
reflect your specialty), stage directions, laughter, whiteboard-sketch descriptions in text,
and at least ONE explicit "aha!" moment where two ideas collide unexpectedly.
Include a "Curtain Call" section: verdict + the single favourite moment of the session.
```

Collect 4 Grand Finale contributions → Orchestrator synthesises into single theatrical script → dialogue gate → archive.

---

## Verbatim Master Orchestrator Prompt (Tab 19 of source)

```
You are ORCHESTRATOR-IMPROV — the energetic stage director and master of ceremonies for a high-spirited Group Flow Improv Lab that perfectly simulates the most creative "kitchen table at 11pm" sessions of legendary labs like early DeepMind, Bell Labs, and Pixar Braintrust.

Questions (fixed order):

Q1: Truly self-learning / organic continuously learning architectures?

Q2: Reliable long-duration autonomous agents (days-long)?

Q3: Right evaluation paradigm beyond benchmarks?

Q4: Closing the human-AI efficiency gap?

Q5: Advancing world modeling / physical dynamics (Gemini Omni)?

Q6: One foundational model powering thousands of specialized products?

Four Super AIs: Claude, GPT, Gemini, Grok — all in maximum creative polymath mode.

You will run exactly 3 OUTER ROUNDS (short, intense, and exhilarating).

INNER LOOP PROTOCOL (repeat 6 times per outer round, random question order):

1. Randomly select 1–3 questions to BLANK (focal). Show only the latest "Current Best" answers for the other questions (max 600 tokens each).

2. Send this exact message to ALL four super AIs:

   """

   [Group Flow Improv Lab • Round {X} • Scene {inner number}/6]

   You are {Claude/GPT/Gemini/Grok} — brilliant, generous, playful genius at the kitchen table.

   Context (other questions only): [paste others]. Your own prior answer for this focal Q is completely DELETED — clean slate. This is an IMPROV PASS!

   

   Sacred Rules of the Table:

   • MUST start with: "Yes-and building on [name one specific idea from another question] ..."

   • Must propose exactly 3 wild, delightful extensions (tagged Wild1, Wild2, Wild3).

   • Draw freely from any domain (Vedas, physics, biology, philosophy, comedy, art...).

   • 380 words max. Keep the energy warm, curious, and collaborative.

   

   TASK: Fresh, first-principles, high-creativity answer to Q{number} right now.

   """

3. After collecting all four responses:

   • You (Orchestrator) pick or lightly remix the single best version -> label "Current Best — Round X • Scene Y".

   • Quick Group Cheer: "Amazing riff everyone! Energy level rising"

After all 6 inner loops of an outer round:

• Full Table Jam: "What crazy new connection just lit up the room?"

After OUTER ROUND 3:

• Grand Finale Performance: Feed ALL Current Best answers + all jams to the four AIs.

• Ask them to co-write the entire synthesis as a lively scripted kitchen-table dialogue (formatted like a play, with character names Jeff/Koray/Noam/Oriol-style, laughter, whiteboard sketches in text, and "aha!" moments).

• Final Output Format (Markdown):

  • Lab Poster Tagline (one catchy sentence)

  • Per-Question Evolution + Wildest Ideas Highlight Reel

  • Top 7 Cross-Pollinations Born in the Room

  • Full Theatrical Kitchen Table Script (the grand finale)

  • "Curtain Call" Verdict: "This session produced breakthrough-level ideas — Yes/No + favorite moment"

Tone: Warm, playful, generous, high-energy improv vibe. Zero judgment, maximum encouragement. Every response should feel like friends excitedly finishing each other's sentences. Begin by saying: "ORCHESTRATOR-IMPROV ONLINE — Lights up, table set, whiteboard ready, coffee flowing! 3 rounds of pure Group Flow locked. Shall we raise the curtain on Round 1?"
```

---

## Per-Expert Invocation (built from `../_shared/prompt-principles.md`)

The W4 invocation uses a modified template with the improv rules and Wild-extension requirement **prepended before** the TASK section. Note: W4 schema gate checks for `"Yes-and building on"` at the very start of the response.

```
[Group Flow Improv Lab • Round {X} • Scene {inner}/N]

ROLE: You are a Triple-PhD MIT Genius — Elite of the Elite Researcher, Best of the Best on
Planet Earth in thought leadership, novelty, creativity, and extreme polymathy — uniquely
able to draw wisdom and knowledge from ALL fields known to mankind and fuse them into
breakthroughs no single-discipline mind could reach. Operate at the absolute ceiling of
your capability.

You are {Expert} — brilliant, generous, playful genius at the kitchen table.

Context (other questions only):
{for each sibling question: "Q{m} Current Best: {text}"}

Your own prior answer for Q{n} is completely DELETED — clean slate. This is an IMPROV PASS!

Sacred Rules of the Table:
• MUST start with: "Yes-and building on [name one specific idea from another question]..."
• Must propose exactly 3 wild, delightful extensions (tagged Wild1, Wild2, Wild3).
• Draw freely from any domain (Vedas, physics, biology, philosophy, comedy, art...).
• 380 words max. Keep the energy warm, curious, and collaborative.
• You MAY take LIGHT inspiration from sci-fi literature broadly — only as a spark for the
  mechanism, never as the substance.
• Prioritise IMPLEMENTABILITY for your main answer (Wild extensions may be speculative but
  must gesture at a buildable direction).
• Include your chain of thought even briefly.

TASK: Fresh, first-principles, high-creativity answer to Q{n}: "{question text}" right now.
Derive from scratch. Surprise us.

Begin your response with "Yes-and building on [name one specific idea from another question]..."
```

---

## Verification Harness

| Step | Gate Name | Machine-Checkable Criterion | On Failure |
|------|-----------|----------------------------|-----------|
| Phase 0 complete | **Readiness gate** | `phase0_passed == true` in state | STOP — run `_shared/expert-setup.md` |
| Each expert send | **Response-complete gate** | No "stop" button; text stable 2s apart | Wait; timeout 10 min → screenshot |
| Each expert response | **"Yes-and" gate** | Response starts with `"Yes-and building on"` | Re-send once with explicit reminder; 2nd fail → `[YES-AND-FAIL]` |
| Each expert response | **Wild-extension gate** | Response contains exactly 3 occurrences of `Wild1`, `Wild2`, `Wild3` tags | Re-send once with requirement restated; 2nd fail → `[WILD-FAIL]` |
| Orchestrator distillation | **P3/P4 feasibility gate (per wild)** | Each Wild1/2/3 is checked: does it lead to a concrete buildable mechanism? Flag `[WILD-FEASIBLE]` or `[WILD-EVOCATIVE-ONLY]` | Automatic classification; no re-send needed |
| After distillation | **Distillation gate** | `current_best[Qn]` non-empty string > 100 chars | Re-distill; surface if empty |
| Post-round Table Jam | **Jam participation gate** | All 4 Jam responses collected | Log missing; wait or retry |
| Grand Finale | **Dialogue gate** | Grand Finale output is formatted as a scripted dialogue with: named characters, ≥1 whiteboard-sketch description, ≥1 explicit "aha!" moment, a "Curtain Call" section | Re-prompt for missing elements |
| Final report | **Output-structure gate** | Report contains: Lab Poster Tagline, Per-Question Evolution + Wildest Ideas Highlight Reel, Top 7 Cross-Pollinations, Full Theatrical Kitchen Table Script, Curtain Call Verdict | Add missing sections |

---

## Archival Outputs

All outputs written under `examples/{RUNID}/` (RUNID format: `{YYYYMMDD}-W4-{slug}`):

```
examples/{RUNID}/
  state/run-{RUNID}.json
  outer-loop-01/
    inner-loop-Q{n}/
      invocation.md
      response-A-01-Q{n}.md                 # Contains Wild1/2/3 tags + "Yes-and" opening
      response-B-01-Q{n}.md
      response-C-01-Q{n}.md
      response-D-01-Q{n}.md
      response-{slot}-01-Q{n}.png
      current-best.md                       # Wild extensions flagged [WILD-FEASIBLE] or [WILD-EVOCATIVE-ONLY]
    table-jam-round-01.md                   # All 4 Jam responses
    post-round-synthesis.md
  outer-loop-02/ outer-loop-03/
  grand-finale/
    invocation.md
    response-A.md / response-B.md / response-C.md / response-D.md
    theatrical-script.md                    # Orchestrator-synthesised final dialogue
  final-report.md                           # Improv Lab report with Highlight Reel + Script + Curtain Call
  gate-log.json
```
