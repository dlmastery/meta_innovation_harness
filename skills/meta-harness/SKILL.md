---
name: meta-harness
description: Use when the user has any research goal, strategic challenge, or creative problem and wants the full Meta-Innovation Harness run end-to-end without needing to know which workflow to use or how to decompose the goal. Accepts an arbitrary GOAL string, decomposes it into N tightly-coupled sub-questions, assigns expert lenses, selects the best-fit workflow using an explicit decision matrix, and runs the selected workflow in its entirety with full state management and archival. This is the primary entry point for new users and for goals that do not obviously map to a single workflow.
---

# Meta-Harness — Universal Goal Orchestrator

**One-line purpose:** Accept any GOAL, decompose it into N tightly-coupled sub-questions, assign expert lenses, select the best-fit workflow (W1–W6) using an explicit decision matrix, and run the full end-to-end session with state management, verification gates, and archival — requiring zero workflow knowledge from the user.

---

## When to Use

Use the meta-harness when:
- The user has a high-level GOAL but has not specified which workflow to use.
- The goal has not yet been decomposed into sub-questions.
- The user wants automatic workflow selection with justification.
- A fully orchestrated, managed run is preferred over manually invoking a workflow skill.

The meta-harness **delegates** all execution to one of W1–W6. It does not define a new loop structure; it wraps the chosen workflow.

---

## Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `goal` | String | Yes | The user's high-level research goal or question |
| `n_questions` | Integer | No | Sub-questions to decompose to (default: 6; range: 3–12) |
| `time_budget` | Enum | No | `low` / `medium` / `high` (default: `medium`) |
| `workflow_override` | String | No | Force a specific workflow (W1–W6); skips auto-selection |
| `custom_lenses` | Array | No | Override expert lens assignments |

---

## Phase 0 — Convene & Configure the Panel

Defer entirely to `../_shared/expert-setup.md`. Execute every step before goal decomposition begins. Write `phase0_passed: true` to the state file when complete.

**Expert slots (fixed; lens adjustment applied in Step 2 below):**

| Slot | Service | Default Specialty Lens |
|------|---------|----------------------|
| A | Claude (Opus 4.8 · High) | Biology + Ancient Texts (Vedas/Upanishads) + Philosophy of Consciousness |
| B | ChatGPT (Pro) | Physics + Chemistry + Complex Systems + Rigorous Engineering |
| C | Gemini (3.1 Pro · Extended) | Social Sciences + Product Strategy + Evaluation + HCI |
| D | Grok (Expert) | Creative World-Modeling + Radical Efficiency + Synthesis |

---

## Meta-Harness Procedure

### Step 1 — Goal Decomposition

The Orchestrator (this Claude Code session) generates an initial draft decomposition of N sub-questions, ensuring:

1. All sub-questions are **necessary** to fully address the GOAL.
2. They are **genuinely interdependent** — answering one constrains or enriches the others.
3. They are **non-overlapping** — each covers distinct conceptual ground.
4. Each is phrased as an **open research question** starting with: How / What / Why / Under what conditions.

**Decomposition gate (pre-user-approval):** All 4 criteria must be met before presenting to the user.

Present the decomposition to the user:
```
GOAL DECOMPOSITION PROPOSAL

Goal: {goal}
Proposed sub-questions ({N} total):
  Q1: {text}
  Q2: {text}
  ...

Coupling map (how pairs are interdependent):
  Q1–Q2: {one-sentence dependency}
  Q1–Q3: {one-sentence dependency}
  ... (all pairs)

Please confirm or suggest modifications. Type "OK" to proceed or suggest changes.
```

**Approval gate:** Do not open expert tabs or write state until the user confirms. After approval, write `questions[]` and `coupling_map` to state. These are frozen for the run.

### Step 2 — Expert Lens Assignment

Adjust the four expert lens assignments based on goal domain signals:

| Goal Domain Signal | Lens Adjustment |
|-------------------|-----------------|
| Strong biology / medicine component | Upgrade Slot A emphasis to mechanistic biology |
| Strong engineering / software component | Upgrade Slot B emphasis to systems architecture |
| Strong social / organisational component | Upgrade Slot C emphasis to sociology + economics |
| Strong creative / speculative component | Upgrade Slot D emphasis to scenario planning |

Default assignments (Phase 0) used when no signal is strong. `custom_lenses` input overrides all defaults. Write adjusted lenses to state as `expert_lenses`.

### Step 3 — Workflow Selection

**Selection decision matrix (FR-M5):**

| Condition | Recommended Workflow |
|-----------|---------------------|
| `time_budget == low` | W4 (3 rounds; fastest) — unless deliverable is grant abstract → W3 |
| `time_budget == medium` AND depth prioritised | W1 or W2 |
| `time_budget == medium` AND breadth prioritised | W3 |
| `time_budget == medium` AND actionability prioritised | W5 |
| `time_budget == high` | W6 (whitepaper output) |
| Creative impasse / local minima suspected (user signal) | W4 |
| Adversarial stress-testing required (user signal) | W6 |
| Team convergence / interconnected programme feel | W2 |
| Concrete prototyping deliverables required | W3 |
| `workflow_override` provided | Use that workflow unconditionally |

**Tie-breaking rule:** If multiple conditions apply equally, prefer W1 (cleanest signal) unless the user has expressed a preference for collaboration structure (→ W2) or speed (→ W3/W4).

Present selection to user:
```
WORKFLOW SELECTION

Selected: {Workflow Name} ({WN})
Justification: {one sentence}

You may override with: /meta-harness workflow=W{N}
Type "OK" to proceed or specify a different workflow.
```

**Selection gate:** Do not proceed until user confirms. Write `workflow` to state.

### Step 4 — End-to-End Orchestration

Execute the selected workflow skill (W1–W6) **in its entirety**, including:
- Phase 0 (already done — assert `phase0_passed: true`)
- All outer rounds and inner loops as specified in the selected workflow's SKILL.md
- All verification gates (the meta-harness inherits ALL gates from the selected workflow)
- Final convergence round
- Full archival

The meta-harness adds no additional loop structure — it delegates fully to the selected workflow.

### Step 5 — Meta-Level Final Report

After the workflow completes its own `final-report.md`, the meta-harness appends a `meta-section.md` to the run archive:

```markdown
# Meta-Harness Analysis

## Goal Achievement Assessment
{How well did the outputs address the original GOAL? 
Rate each sub-question coverage: Q1: ✓/✗/Partial, ...
Overall: Excellent / Good / Partial / Insufficient}

## Coupling Map Analysis
{Which sub-question pairs showed the strongest emergent cross-links?
List top 3 activated couplings with evidence from the archive.}

## Recommended Next Run
{Which workflow variant would most productively continue this research, and why?
Options: same workflow with fresh questions / upgrade to W6 / run meta-meta-harness 
         for new variant generation}
```

---

## Per-Expert Invocation

The meta-harness does not define its own invocation template. It uses the canonical template from `../_shared/prompt-principles.md` as required by the delegated workflow. The only meta-harness-specific addition is that sub-questions are phrased per the decomposition gate (open research questions starting with How/What/Why/Under what conditions).

---

## Verification Harness

The meta-harness enforces its own pre-execution gates PLUS all gates from the selected workflow.

### Meta-Harness-Specific Gates

| Step | Gate Name | Machine-Checkable Criterion | On Failure |
|------|-----------|----------------------------|-----------|
| After decomposition draft | **Decomposition quality gate** | All N questions start with How/What/Why/Under; all are non-overlapping; coupling map covers all pairs | Regenerate failing questions; do not present to user until gate passes |
| After user approval | **Approval gate** | User has explicitly confirmed "OK" or equivalent | Do not write state; do not open tabs |
| After state write | **Coupling map gate** | `coupling_map` in state has entries for all N*(N-1)/2 pairs | Fill missing pairs before proceeding |
| After workflow selection | **Selection gate** | `workflow` field in state is one of W1/W2/W3/W4/W5/W6 | Surface options to user; await choice |
| After workflow execution | **Meta-completeness gate** | `final-report.md` exists in run directory AND `meta-section.md` written | Complete missing files |

### Inherited Gates

All gates from the selected workflow (W1–W6) apply in full. The meta-harness does not relax any gate.

---

## Archival Outputs

All outputs written under `examples/{RUNID}/` (RUNID format: `{YYYYMMDD}-meta-{slug}`):

```
examples/{RUNID}/
  state/run-{RUNID}.json                    # Includes goal, questions, coupling_map, workflow,
                                            # expert_lenses, and all workflow-specific fields
  decomposition-proposal.md                 # Shown to user; includes Q list + coupling map
  workflow-selection.md                     # Selected workflow + justification shown to user
  {all workflow-specific directories}        # Delegated to selected workflow (outer-loop-01/ etc.)
  final-report.md                           # Selected workflow's final report
  meta-section.md                           # Goal achievement + coupling analysis + next-run rec
  gate-log.json                             # All gates: meta-harness gates + workflow gates
```

---

## State File Extensions

The meta-harness adds these fields to the standard state schema (PRD Section 12.3):

```json
{
  "goal": "string — the original high-level GOAL",
  "n_questions": "integer",
  "time_budget": "low|medium|high",
  "workflow": "W1|W2|W3|W4|W5|W6",
  "workflow_selection_justification": "string",
  "expert_lenses": {
    "A": "adjusted lens string",
    "B": "adjusted lens string",
    "C": "adjusted lens string",
    "D": "adjusted lens string"
  },
  "coupling_map": {
    "Q1-Q2": "string",
    "Q1-Q3": "string",
    ...
  },
  "meta_analysis": {
    "goal_achievement": "string",
    "top_activated_couplings": ["Q{i}-Q{j}", ...],
    "recommended_next_run": "string"
  }
}
```

---

## Reference: PRD Sections 9.3–9.6

This skill implements PRD Sections 9.3 (Goal Decomposition, FR-M1–FR-M3), 9.4 (Expert Lens Assignment, FR-M4), 9.5 (Workflow Selection, FR-M5–FR-M6), and 9.6 (End-to-End Orchestration, FR-M7–FR-M9) in full.
