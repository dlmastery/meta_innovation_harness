---
question: "How do we build truly self-learning / 'organic' continuously learning architectures?"
outer_round: "01"
inner_loop: "Q1"
focal: "Q1"
role: "Current Best — synthesized best answer for Q1 after inner-loop Q1 completes"
status: COMPLETE
created: "2026-05-30"
timestamp_selected: "2026-05-30T13:50-07:00"
source_distillation: "05-orchestrator-distillation.md"
selection_basis: "Light synthesis (per Workflow-1 step 6). The four answers converged on one architecture; the Current Best states that convergent skeleton and the four-fold capability frontier. Claude's derivation is the backbone (deepest 'why'); ChatGPT supplies the most complete blueprint; Gemini the minimal build; Grok the only quantitative criticality probe."
---

# Current Best — Round 1 · Q1

> The accumulating canonical answer for Q1. This is what later inner loops will **leak** to the
> other questions (Q2–Q6) as sibling context, and what a future Q1 blanking round must beat.

## Thesis

Don't build one transformer that rewrites all its weights. Build a **Regulated Organic Learner**:
a *protected, slow-changing identity core* surrounded by *fast plastic memory and modular skill
organs*, with **gated** plasticity, periodic **consolidation ("sleep")**, **immune-style
verification**, **generate-and-select structural growth**, and **active, uncertainty-reducing
exploration**. Continuous learning becomes feasible when the system does not *believe* experience
but *metabolizes* it: sense → filter (provenance/trust) → remember (multi-timescale) → test →
replay/consolidate → embody as skill → monitor for damage → and only then promote.

The load-bearing principle (Claude) is **separation of timescales**: catastrophic forgetting is
the failure to protect slow variables from fast updates, so the cure is *architectural* (slow and
fast parameters are physically distinct objects updated by distinct processes), not a bolted-on
regularizer.

## The convergent architecture (agreed by all four experts)

1. **Protected identity core** — frozen/slow base + invariants + eval suite + rollback. Identity
   is *organization*, not weights (autopoiesis; Upanishadic witness/*sākṣin*).
2. **Selective membrane** — every experience tagged with source/trust/permission/risk before it
   can teach anything.
3. **Multi-timescale memory** — working → episodic (vector log) → semantic (summaries/graph) →
   procedural (LoRA/tools) → core priors. Complementary Learning Systems; don't make one memory
   do all jobs.
4. **Plasticity gate** — learn only when `surprise × utility × trust − risk` is high; route to
   ignore / episodic / semantic-distill / skill-train / quarantine.
5. **Wake/sleep consolidation** — online capture during wake; offline interleaved generative
   replay (new + old anchors + hard negatives + edge cases + human corrections) during sleep;
   promote only on Δnew↑ with Δold-regression and Δsafety bounded.
6. **Modular skill organs + evolutionary growth** — spawn candidate adapters/tools when a region
   stays high-error, select Pareto-winners against tests, prune losers, keep cheap clonal memory.
7. **Immune system** — contradiction/poison detection, quarantine, rollback, epistemic-status
   labels; guard against both gullibility and rigidity.
8. **Active inference** — act to reduce uncertainty (ask, test, search, simulate) — this is what
   makes it self-*learning*, not self-*updating*.
9. **Criticality homeostat** *(Grok)* — hold the system near the edge of order/chaos; measurable
   via power-law activation statistics (α≈1.5–2.0).

## The open frontier (the four-fold missing capability)

Integration is **not** solved. The four experts each named a distinct, complementary gap; a real
organic learner needs all four:

| Gap | Owner-insight | What it unlocks |
|---|---|---|
| **Stable meta-learned gating controller** | Claude | a controller that *decides* plasticity/consolidation/structure without drifting or being captured |
| **Non-destructive continuous (online) distillation** | Gemini | merging many dynamic adapters into the slow store without halting/degrading |
| **Scalable, domain-general verifier** | ChatGPT | gating promotion by truth/usefulness/safety under distribution shift (= Q3) |
| **Hardware-native local learning at scale** | Grok | cheap local updates at trillion-parameter scale (neuromorphic; sim suffices for prototypes) |

> **Open problem = {controller} × {online distillation} × {general verifier} × {local-learning substrate}.**

## Strongest falsifiable experiments (selected across the four)

1. **Memory-ladder vs RAG-only vs fine-tuning under concept drift** (ChatGPT) — metric: Plasticity-Stability Score `PSS = new-acc − λ·forgetting − μ·false-memory`; target ≥15–25% new-task gain at <3–5% forgetting, matched memory budget.
2. **Meta-learned plasticity gate vs fixed/scheduled/heuristic learning rates on a non-stationary stream** (Claude) — metric: cumulative online regret + post-shift recovery time; must beat a "raise LR when surprised" thermostat to justify a learned controller.
3. **Identity-core protection vs fast-core ablation under self-modification** (Claude) — metric: drift on a frozen values-probe vs capability gain; arm A holds values while gaining, arm B drifts.
4. **Dynamic-criticality MoE** (Grok) — metric: backward+forward transfer plus KS-fit of activations to a power law (R²>0.92) — the only *quantitative* "is it organic yet?" probe.

## Leak-forward notes (for when sibling questions run)

- **→ Q3 (evaluation):** the verifier gap *is* Q3; self-learning is bottlenecked by evaluation.
- **→ Q2 (reliable long-horizon agents):** identity-under-perturbation = the witness/core invariant; reliability = bounded self-modification under the protected core.
- **→ Q4 (efficiency):** active inference + surprise-gating is the sample-efficiency lever.
