# Final Five-Contender Round-3 Controller Synthesis

**Corpus:** Claude Round 3 attempt 2, Codex Round 3 attempt 1, Grok Round 3 attempt 1, Antigravity Round 3 attempt 2, and controller-normalized OpenCode Round 3 accepted.  
**Evidence cutoff:** 2026-07-31 23:59 UTC.  
**Status:** Five usable Round-3 outputs have been integrated. Their shared-pack agreement is synthesis consistency, **not independent replication**.  
**OpenCode validation:** The accepted normalization passed the Round-3 validator at 3,674 words with all structural checks satisfied.

## Provenance correction governing the OpenCode contribution

The raw OpenCode source-delta table attached incorrect canonical IDs to four source identities: it labeled *Learning on the Job* as E057, the knowledge-base poisoning study as E058, the calibration study as E059, and *MemDelta* as E060. The canonical ledger instead records factual writes as E051, *MemDelta* as E057, the MLLM benchmark audit as E058, plasticity-loss scaling as E059, *Learning on the Job* as E063, knowledge-base poisoning as E067, and TFGN as E073.

The accepted `final/opencode.round3.accepted.md` replaces only that source-delta table with canonical IDs, titles, locators, scope notes, and status copied from `synthesis/evidence-ledger.md`. The raw model response remains preserved separately. This is a **provenance and source-identity correction**, not an empirical disagreement among contenders, and it does not alter OpenCode's recommendations.

---

## Q1 — Operational scope, taxonomy, and demonstrated evidence

### Hardened answer

Use two explicit labels:

1. **Parametric continual learning:** durable mutation of model weights or adapters.
2. **System-level continual adaptation:** durable mutation anywhere in the deployed system, including retrieval indexes, episodic memory, persistent prompt state, skills, routers, tools, or policy.

Under either label, a publishable learning claim requires an authorized, attributable state change caused by an ordered experience stream that persists beyond the current request and produces reproducible held-out improvement over matched reset/stateless and frozen full-context controls. Re-supplied request context is request-local adaptation, not durable learning. Persistent retrieval, prompt summaries, or memory may count as system-level continual adaptation, but must not be represented as equivalent to weight learning.

Every claim must declare:

- substrate and complete signed system manifest;
- stream regime, order, boundaries, and identity assumptions;
- experience trust and admission status;
- valid-time and transaction-time semantics;
- retention, transfer, recovery, and reversibility class;
- training compute, inference budget, and persistent-state budget;
- safety, privacy, deletion, and rollback obligations.

The reviewed public corpus supports bounded successes and diagnostic failures. Replay and scheduling can improve continual web pretraining; some behavioral decline remains recoverable; lower update loss can coexist with zero free-form recall; sequential factual weight writes can show poor unprompted retention in a single-family protocol; and persistent memory can help in limited domains while failing to dominate simple context or retrieval controls elsewhere. These 80 reviewed records do **not** document an indefinitely learning frontier system that jointly provides bounded resources, durable acquisition, safety retention, provenance, privacy, derivative-aware deletion, and coherent whole-bundle rollback. This is not a claim about all private systems or an exhaustive literature search.

### Strongest exact primary titles and direct URLs

- **“TiC-LM: A Web-Scale Benchmark for Time-Continual LLM Pretraining”**  
  https://aclanthology.org/2025.acl-long.1551/
- **“Spurious Forgetting in Continual Learning of Language Models”**  
  https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf
- **“Beyond Perplexity: A Behavioral Evaluation Framework for Deployment-Memory Claims in LLM Test-Time Training”**  
  https://arxiv.org/abs/2607.00368
- **“Can a Language Model Learn Facts Continually in Its Weights?”**  
  https://arxiv.org/abs/2607.11020
- **“Continual Learning Bench”**  
  https://arxiv.org/abs/2606.05661

TiC-LM is an ACL 2025 proceedings paper using a 1B/3B web-pretraining protocol. Spurious Forgetting is an ICLR 2025 paper whose principal diagnostic is controlled and synthetic. The last three are recent 2026 preprints: Beyond Perplexity uses a controlled nonce-fact diagnostic; the factual-write paper is single-author and covers invented facts in one tested family; Continual Learning Bench is a young, configuration-specific benchmark. Their findings remain protocol-scoped and generally unreplicated.

### Contradictions

**Resolved**

- Whether external memory “counts” is principally definitional. Durable external state can qualify as system-level continual adaptation, while parametric continual learning remains reserved for weights and adapters.
- Falling loss versus absent recall is not contradictory: optimization progress does not establish behavioral acquisition.
- Rapidly recoverable decline versus poor bare-statement retention is not a common measurement. Access failure, prompt sensitivity, and destructive erasure must be diagnosed separately.
- Memory underperforming naive RAG in one setting and persistent feedback memory improving behavior in another reflects differences in task recurrence, feedback quality, controls, and domain scope.

**Unresolved**

- Whether any substrate family dominates facts, procedures, preferences, agent experience, and policy evolution after matched lifecycle costing.
- Whether plasticity-loss results from evaluated 5M–314M non-embedding-parameter models extrapolate to frontier systems.
- How to reconstruct a reliable reset/stateless counterfactual for a production system whose environment and dependencies change over time.

### Confidence

**8/10** on the operational definition and evidence boundary; lower on production reconstruction of reset counterfactuals.

### Decisive falsifier

Across long randomized streams, systems labeled continual fail to produce durable held-out gains over matched reset/stateless, frozen full-context, temporal-RAG, and periodic-retraining controls.

### Final recommendation

Adopt the two-label taxonomy. Require complete manifests, protocol tuples, durable held-out gains, access-versus-erasure diagnostics, and non-compensable assurance gates before publishing a continual-learning claim.

### Preserve / narrow / reject lineage

- **Preserve:** trajectory-native scope; substrate-neutral durable state; complete-system manifests; explicit stream and reversibility tags; reset and full-context controls.
- **Narrow:** “demonstrated” single-study findings remain admissible as provisional evidence, but independent-team or independent-site reproduction is required before they determine architecture or funding; same-team second-family or second-harness runs are robustness checks.
- **Reject:** weights-only definitions; treating request-local context as durable learning; any single benchmark as deployment proof; any claim that the reviewed-literature absence proves no private system exists.

---

## Q2 — Plasticity, forgetting, and interference control

### Hardened answer

No validated universal ordering exists among replay, importance regularization, orthogonal or sparse adapters, expansion, editing, dense tuning, and continual policy optimization. A **constraint-keyed, governed update service** is retained only as an unvalidated policy hypothesis and explicit F4 comparison arm, not as a cross-paper leaderboard or validated selector.

The service should include an immutable base checkpoint, quarantined candidate data, provenance-bearing replay where lawful, revocable adapters or sparse regions, a capacity and routing registry, and a release controller. It selects among no update, external state, modular update, sparse protected update, or offline dense consolidation according to:

- stream and knowledge type;
- expected reuse and acquisition difficulty;
- lawful retention and deletion obligations;
- interference and safety drift;
- capacity, routing, latency, and serving cost;
- required attribution and reversibility;
- total assurance and incident cost.

Replay is the mandatory **lawful-retention reference arm**, not a universal winner. Replay rate is not retained-corpus size. Orthogonal and sparse approaches show bounded benefits on finite protocols but do not establish indefinite capacity. Expansion exchanges interference for module growth, routing, retirement, and serving costs. Editing is a candidate mechanism for bounded correctable facts, but the editors evaluated in WikiBigEdit and related finite protocols degrade over long edit sequences; this does not establish that every present or future editing method must do so. Importance regularization has one narrow positive LLM adaptation result, not a general ordering. Plasticity loss is demonstrated only in evaluated 5M–314M non-embedding-parameter GPT-style models; frontier extrapolation is unresolved.

As a release policy, every parameter update suspends reliance on inherited safety and assurance claims until affected utility, calibration, grounding, privacy, tool-policy, tenant-isolation, and deletion behaviors are re-qualified. The scope of requalification must follow the update's dependency and risk analysis rather than being represented as a source-proven universal law. Dense base-weight consolidation should be offline, rebuildable, lineage-complete, and covered by atomic whole-system rollback.

### Strongest exact primary titles and direct URLs

- **“Revisiting Replay and Gradient Alignment for Continual Pre-Training of Large Language Models”**  
  https://arxiv.org/abs/2508.01908
- **“Orthogonal Subspace Learning for Language Model Continual Learning”**  
  https://aclanthology.org/2023.findings-emnlp.715/
- **“Can Scale Save Us From Plasticity Loss in Large Language Models?”**  
  https://arxiv.org/abs/2606.24752
- **“WikiBigEdit: Understanding the Limits of Lifelong Knowledge Editing in LLMs”**  
  https://arxiv.org/abs/2503.05683

The plasticity-loss paper is a recent 2026 preprint scoped to tested 5M–314M non-embedding-parameter models. It does not establish frontier behavior.
The replay paper is a 2025 preprint with no replay-buffer-size bound; the orthogonal-subspace paper is a Findings of EMNLP 2023 proceedings paper on finite academic sequences; WikiBigEdit is a 2025 preprint about evaluated editors and finite protocols.

### Contradictions

**Resolved**

- Replay-supported results and replay-free positive reports involve different streams, budgets, task separability, and retention assumptions. The replay-free near-zero-backward-transfer report remains an unreplicated bounded technical report, not a refutation of replay evidence.
- **Not a direct contradiction:** adaptive-consolidation benefits and harms from forced consolidation were reported under different methods and task distributions. Trigger and admission quality are plausible explanatory hypotheses requiring matched ablation, not established explanations.
- EWC being historically weak in broad LLM evidence and helping in one bounded Gemma 2 language-adaptation protocol are compatible.
- Reduced parameter drift does not necessarily mean better final utility; a method can protect old representations while under-acquiring new tasks or exhausting capacity.

**Unresolved**

- Whether modular isolation prevents or merely postpones saturation.
- Whether expansion is cheaper than shared-parameter interference control after routing and retirement costs.
- Whether replay-supported dense updating or reversible modularity wins after equal lifecycle costing.
- Whether continual policy-optimization improvements generalize beyond the named Qwen3-VL-8B protocol.

### Confidence

**7/10** that a constraint-keyed decision procedure is testable and operationally useful as a policy hypothesis; **4/10** on any global mechanism ordering. No accepted study validates the selector against the strong fixed policies.

### Decisive falsifier

A preregistered, independently reproduced, matched-resource tournament yields one stable mechanism ordering across model families, stream types, replay-lawful and replay-prohibited regimes, randomized orders, and independent harnesses.

### Final recommendation

Operate every update as a governed transaction. Prefer the least irreversible adequate mechanism, retain replay as a lawful-reference arm, require matched budgets and revocation paths, and prohibit rankings assembled from incompatible studies.

### Preserve / narrow / reject lineage

- **Preserve:** refusal to crown a mechanism; replay as reference; constraint-keyed selection; post-update re-qualification; complete rollback.
- **Narrow:** least-irreversible-first and weight-mutation-last are safety-motivated policies, not experimentally proven universal orderings. Adapter, sparse, and consolidation benefits remain finite-protocol findings.
- **Reject:** replay as universally mandatory or universally best; fixed replay percentages; replay rate as storage size; orthogonality or scale as no-forgetting guarantees; editing as either an indefinite solution or categorically useless; CIFAR/MNIST or linear-model results as LLM guarantees.

---

## Q3 — Memory, retrieval, adapters, experts, editing, and consolidation

### Hardened answer

Heterogeneous state placement is a **falsifiable risk-control hypothesis**, not an established architecture:

- transient evidence in request or session context;
- mutable facts in versioned temporal retrieval;
- tenant experience in isolated episodic memory;
- recurring procedures in signed skills or revocable adapters;
- repeatedly validated capabilities in sparse modular state;
- broad base-weight consolidation rarely and offline.

Placement should be determined by mutability, attribution, reuse, latency, lifecycle cost, and required reversibility. Direct comparative evidence in this corpus covers request context as a control, trusted versioned temporal retrieval against several tested editors, and one specific single-domain persistent-feedback memory system. The last result does not validate episodic memory as a general architectural tier. General episodic memory, signed skills or adapters, sparse modules, and broad consolidation remain **unpriced tiers** because no accepted study compares each general tier with its own absence under matched resources and lifecycle costs.

External memory relocates interference rather than eliminating it. Retrieval misses, stale or conflicting records, poisoning, tenant leakage, context competition, routing failure, and derivative proliferation become primary risks. Deleting a source row does not establish closure when embeddings, summaries, caches, traces, replay data, adapters, router policies, or consolidated weights derive from it.

Promotion requires repeated validated reuse, shadow-evaluation benefit, complete lineage, lifecycle savings over continued retrieval, and a passed revocation drill. Contradiction, poison, declining reuse, routing failure, or assurance regression triggers quarantine, demotion, or retirement. Rollback covers the entire deployable bundle.

### Strongest exact primary titles and direct URLs

- **“RAG or Learning? Understanding the Limits of LLM Adaptation under Continuous Knowledge Drift in the Real World”**  
  https://aclanthology.org/2026.findings-acl.546/
- **“When Continual Learning Moves to Memory”**  
  https://arxiv.org/abs/2604.27003
- **“Continual Learning Bench”**  
  https://arxiv.org/abs/2606.05661
- **“Learning on the Job: Continual Learning from Deployment Feedback for Frozen-Weights Agents”**  
  https://arxiv.org/abs/2607.22157
- **“ChronoMem: Version Control and Semantic Rollback for Large Language Model Agent Memory”**  
  https://arxiv.org/abs/2607.27773

All except the Findings ACL paper are recent or work-in-progress 2026 artifacts; the two July preprints are especially recent and unreplicated. ChronoMem demonstrates rollback machinery, not exhaustive derivative deletion.

### Contradictions

**Resolved**

- **Compatible but not jointly dispositive:** in its trusted temporal-KB setting, Chronos outperformed several tested editors; in OAKS, evaluated agent memory underperformed naive RAG. Together they reject automatic superiority of editing or dedicated memory, but only Chronos directly supports temporally versioned retrieval. They do not establish a universal retrieval winner.
- Persistent feedback memory beating static RAG in one recurring domain does not establish general memory superiority; it shows that admitted feedback can have value under one narrow protocol.
- Semantic rollback and poison surviving unlearning address different scopes. Rollback of an addressable store is not derivative deletion or causal erasure.
- Computational similarity between context and an implicit low-rank update does not imply equal persistence, attribution, deletion, or governance.

**Unresolved**

- Whether any tier beyond temporal retrieval earns its routing, retention, deletion, and lifecycle cost.
- Whether temporal-RAG-only or governed periodic rebuilding matches the hierarchy with less operational complexity.
- Whether learned placement improves on explicit policy without introducing opaque routing failures.

### Reconciliation of the Q2/Q3 weakest-link dispute

The controller records a four-to-one Round-2 weakness judgment: four contenders identify **Q2**, while Claude dissents in favor of **Q3**. These are not mutually exclusive:

- **Q2 is the weakest empirical ordering.** Existing studies cannot rank plasticity mechanisms under common protocols and lifecycle budgets.
- **Q3 is the weakest architectural commitment.** The proposed hierarchy risks exporting several unvalidated tiers into standing architecture.

Refusing to rank makes Q2 publication-safe: its conclusion is a decision procedure, not a winner. Q3 remains exposed because even a carefully qualified hierarchy can create architectural lock-in. Therefore:

1. retain Q2 as the weakest empirical evidence base;
2. retain Claude’s Q3 dissent as the sharper near-term funding objection;
3. require a single-site subtractive Q3 ablation before a multi-site architecture programme;
4. reserve the later multi-site tournament for surviving tiers and Q2 mechanism comparisons.

This reconciliation preserves the four-way vote without discarding Claude’s higher-information dissent.

### Confidence

**6/10** on placement logic; **4/10** on the integrated hierarchy.

### Decisive falsifier

A temporal-RAG-only or governed periodic-rebuild arm matches the hierarchy on trajectory utility, assurance, reversibility, and lifecycle cost—or removal of a proposed tier causes no reproducible loss.

### Final recommendation

Fund one preregistered single-site subtractive ablation before any multi-site architecture pilot. Delete every tier that cannot demonstrate marginal value against temporal RAG and periodic rebuilding.

### Preserve / narrow / reject lineage

- **Preserve:** placement axes; two-sided promotion and demotion; derivative lineage; whole-bundle rollback; external-memory interference relocation.
- **Narrow:** the six-tier stack is a minimum testable hypothesis, not standing architecture. Only context, trusted temporal retrieval, and one scoped feedback-memory result have direct comparative support.
- **Reject:** hierarchy-as-winner; external memory as intrinsically safe or fully reversible; ChronoMem as deletion closure; author-asserted “first” priority; treating Continual Learning Bench as support for the hierarchy when its result challenges automatic memory benefit.

---

## Q4 — Experience admission, governance, privacy, provenance, deletion, and rollback

### Hardened answer

Deployment experience is untrusted evidence, not training data by default. Every durable mutation must pass a liability-controlled admission and release pipeline:

1. capture event, outcome, actors, tools, source hashes, subject identity, valid time, consent scope, and legal basis;
2. classify tenant, purpose, sensitivity, volatility, retention, and sharing restrictions;
3. quarantine and screen for poison, conflict, duplication, privacy exposure, and unverifiable feedback;
4. require corroboration or executable verification before shared promotion;
5. shadow-test utility, calibration, grounding, safety, privacy, and tenant isolation;
6. select the least irreversible adequate substrate;
7. release a signed complete-system manifest through staged deployment;
8. preserve dependency lineage, monitoring, rollback, and qualified deletion receipts.

Provenance attests asserted origin and history. It does not establish truth, consent, authorization, or harmlessness. Prevention at intake is a preferred risk-control hypothesis, not a demonstrated universal winner over repair or rebuilding.

Deletion closure is a **testable coverage gate under a documented residual-risk standard**, not an achieved or universally certifiable property. Its scope includes source records, embeddings, indexes, summaries, caches, logs, replay corpora, adapters, router policies, and consolidated weights. Receipts must state what was removed, rebuilt, disabled, made inaccessible, or retained as residual risk. Behavioral unavailability is not causal erasure, and legal erasure cannot be reduced to one technical probe.

Rollback means coherent restoration of the complete deployable bundle. Registry aliases and semantic-memory rollback are components only.

### Strongest exact primary or official titles and direct URLs

- **“Machine Unlearning Fails to Remove Data Poisoning Attacks”**  
  https://proceedings.iclr.cc/paper_files/paper/2025/hash/7e810b2c75d69be186cadd2fe3febeab-Abstract-Conference.html
- **“AgentPoison: Red-teaming LLM Agents via Poisoning Memory or Knowledge Bases”**  
  https://arxiv.org/abs/2407.12784
- **“Making AI Forget You: Data Deletion in Machine Learning”**  
  https://arxiv.org/abs/1907.05012
- **C2PA Technical Specification 2.2**  
  https://spec.c2pa.org/specifications/specifications/2.2/index.html
- **GDPR Article 17 — Right to erasure**  
  https://eur-lex.europa.eu/eli/reg/2016/679/art_17/oj/eng

Machine Unlearning Fails to Remove Data Poisoning Attacks is an ICLR 2025 paper scoped to tested methods and attacks. AgentPoison is a 2024 arXiv primary study with a targeted threat model. The canonical `1907.05012` locator is a 2019 preprint providing linear/statistical-model background, not a direct LLM deletion guarantee. C2PA 2.2 is an official technical specification whose assertions do not establish truth. GDPR Article 17 is official law whose application and exceptions require context-specific legal analysis.

### Contradictions

**Resolved**

- **Not a direct contradiction:** positive behavioral-unlearning results and poison survival were obtained with different objectives, methods, and probes. A positive behavioral-removal result under standard probes does not by itself establish removal of backdoor triggers, derivatives, or causal influence.
- Legal erasure, source-record deletion, semantic rollback, behavioral suppression, full-bundle rollback, and causal influence removal are distinct claims.
- Provenance bindings and signatures can support auditability without establishing truth or permission.
- Intake prevention can be preferred under uncertainty without being presented as an empirically proven winner over repair or rebuild.

**Unresolved**

- Acceptable residual influence and corresponding legal standards.
- Production-scale deletion-coverage economics.
- Whether screening withstands adaptive attackers.
- Whether governed admission produces enough utility to justify review, storage, and incident-response overhead.

### Confidence

**7/10** on governance requirements; **4/10** on scalable deletion-closure certification.

### Decisive falsifier

A completed deletion receipt is issued while the target remains reliably recoverable or activatable through a known derivative.

### Final recommendation

Make admission the governance atom. Require derivative lineage and qualified receipts, and halt releases on quarantine escape, tenant crossing, untraceable derivatives, poison persistence, or incoherent rollback.

### Preserve / narrow / reject lineage

- **Preserve:** pre-mutation admission; least-irreversible placement; signed manifests; dependency lineage; qualified receipts; atomic bundle rollback.
- **Narrow:** deletion closure to measured coverage with explicit residual risk; intake prevention to a preferred hypothesis; C2PA to one provenance input.
- **Reject:** perfect deletion; technical unlearning as automatic GDPR satisfaction; provenance as truth; semantic rollback or registry aliasing as full-system rollback; scale-independent poison percentages; unsupported exact episode, latency, or compute thresholds.

---

## Q5 — Longitudinal evaluation, safety retention, and assurance

### Hardened answer

Evaluate a **trajectory of complete system manifests**, not a final checkpoint. Test prequentially before each event is learned and retrospectively after every stage. Endpoint accuracy cannot distinguish acquisition failure, destructive interference, recoverable access loss, retrieval failure, grounding drift, calibration collapse, policy refusal, or plasticity loss.

The candidate protocol should measure:

- acquisition, forward/backward transfer, maximum degradation, recoverability, and recovery cost;
- fixed-budget plasticity and future learning speed;
- calibration, coverage, abstention, grounding, and score drift;
- temporal consistency and stale-answer rates;
- safety, privacy, tool-policy, and tenant-isolation regressions;
- routing, route-conditioned failure, memory conflict, age, provenance, and poison persistence;
- state growth, training and inference compute, latency, energy, and human review;
- deletion and whole-bundle rollback drills;
- rejected releases, incidents, and recovery cost.

This list is governed by a preregistered **metric-retention rule**: retain a metric only when it reproducibly detects a distinct seeded failure or changes a decision that a simpler protocol misses. Publish negative metric-ablation results. Use Pareto comparisons, not an unsupported composite score.

Reset/stateless, frozen full-context, strong temporal RAG, and periodic retraining are mandatory controls or substitutes. Match compute, inference budget, and persistent bytes where feasible; report routing, retirement, evaluation, deletion, and incident costs separately. Safety, privacy, tenant isolation, and deletion are non-compensable gates. Evaluation logs are themselves governed retained state.

### Strongest exact primary titles and direct URLs

- **“Spurious Forgetting in Continual Learning of Language Models”**  
  https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf
- **“Beyond Perplexity: A Behavioral Evaluation Framework for Deployment-Memory Claims in LLM Test-Time Training”**  
  https://arxiv.org/abs/2607.00368
- **“Continual Calibration: Coverage Can Collapse Before Accuracy in Lifelong LLM Fine-Tuning”**  
  https://arxiv.org/abs/2604.23987
- **“Hidden Forgetting in Continual Multimodal Learning: When Accuracy Survives but Grounding Fails”**  
  https://arxiv.org/abs/2607.02020
- **“MemDelta: Controlled Baselines and Hidden Confounds in Agent Memory Evaluation”**  
  https://arxiv.org/abs/2606.29914

The four 2026 works are recent preprints. Continual Calibration is classification/MCQ-heavy; Hidden Forgetting is multimodal; MemDelta is a single-author, benchmark-specific study; Beyond Perplexity uses a controlled synthetic diagnostic. None supplies a universal production threshold.

### Contradictions

**Resolved**

- Recoverable decline and destructive forgetting can coexist. Accuracy decline alone cannot determine access failure versus erasure.
- Answer accuracy can remain stable while grounding changes, and coverage can deteriorate earlier or more sharply than accuracy. Accuracy alone therefore does not establish retained grounding or calibration.
- Benchmark rank reversals establish harness sensitivity, not a universal ordering.
- Standardized streams and deployment-shaped streams serve different purposes: attribution versus external validity. Both are required and must remain separately reported.

**Unresolved**

- The minimal sufficient metric set.
- Defensible deployment thresholds.
- External validity of recent benchmarks.
- How to retain contamination resistance over long-lived evaluation.
- How much cross-site rank disagreement is acceptable without inventing unsupported numerical thresholds.

### Confidence

**8/10** on trajectory-native evaluation; **5/10** on any minimal metric set or universal threshold.

### Decisive falsifier

Across long randomized and fault-seeded streams, final-score-only evaluation reproduces the same rankings and detects the same deployment-relevant incidents as the complete-manifest protocol.

### Final recommendation

Build a reconstructible multi-harness protocol, enforce the metric-retention rule, require complete protocol tuples and mandatory controls, and prohibit utility from compensating for assurance-gate failure.

### Preserve / narrow / reject lineage

- **Preserve:** trajectory manifests; prequential and retrospective testing; protocol tuples; mandatory controls; independent-harness audit; governed evaluation logs.
- **Narrow:** the expanded metric catalogue to an empirically retained set; multi-site reproduction to load-bearing claims rather than arbitrary point-estimate matching.
- **Reject:** final-score sufficiency; universal correlation or pass thresholds; pooling numeric ranges across continual pretraining, editing, memory, agent experience, multimodal learning, and unlearning; composite scores without justified normalization.

---

## Q6 — Integrated 2026–2030 research programme

### Hardened answer

Fund **commensuration before architectural commitment** around one killable hypothesis:

> A governed substrate-placement controller can outperform a preregistered set of strong fixed-substrate controls on trajectory utility and assurance under a common resource envelope and fully disclosed lifecycle cost.

Sequence investment conditionally:

1. **2026 H2 — Single-site subtractive gate.** Build only the minimum instrumented hierarchy required for testing. Remove episodic memory, signed skills or adapters, sparse modules, and consolidation one at a time. Compare with temporal RAG and governed periodic rebuilding at matched inference budget and persistent state. Predeclare the predicted load-bearing tier.
2. **2026–27 — Reference infrastructure and robustness checks.** Build open mixed streams, randomized orders, reset and full-context controls, complete manifests, versioned-memory interfaces, derivative/deletion ledgers, cost instrumentation, hidden evaluation, and preregistration. Run same-team second-family or second-harness robustness checks, then require an independent team or site to reproduce every load-bearing recent claim before it determines architecture or funding.
3. **2027–28 — Mechanism and placement tournaments.** Compare temporal RAG, persistent feedback memory, replay, regularization, protected adapters, sparse updates, expansion, editing, dense tuning, periodic retraining, and placement controllers. Price routing, retirement, evaluation, incidents, and deletion separately.
4. **2028–29 — Reversible consolidation.** Test rebuildable epochs, revocable sparse consolidation, module retirement, poison recovery, rollback, and deletion-coverage claims.
5. **2029–30 — Governed autonomy research.** Permit agents to propose durable writes only through authorization, abstention, review, canaries, rollback, and independent safety gates. This is a research objective, not a production forecast.

No stage advances on utility alone. Shared infrastructure is a high-information investment, but standardization is not proven to be the sole bottleneck; compute, methodology, governance, legal standards, ownership, and adoption may also bind.

### Strongest exact primary titles and direct URLs

- **“When Does Continual Learning Require Learning?”**  
  https://arxiv.org/abs/2607.07847
- **“Continual Learning Bench”**  
  https://arxiv.org/abs/2606.05661
- **“MemDelta: Controlled Baselines and Hidden Confounds in Agent Memory Evaluation”**  
  https://arxiv.org/abs/2606.29914
- **“Learning on the Job: Continual Learning from Deployment Feedback for Frozen-Weights Agents”**  
  https://arxiv.org/abs/2607.22157

All four are 2026 preprints. They support mechanism-agnostic protocols, simple controls, benchmark-specific confound detection, and one scoped feedback-memory result—not programme-wide architecture validation.

### Contradictions

**Resolved**

- Shared infrastructure has high information value, but standardization is not established as the sole field bottleneck.
- Build only enough hierarchy for subtraction before funding multi-site architecture work.
- Independent reproduction is an assurance and funding threshold for load-bearing claims, not the only definition of admissible evidence.
- The absence of a complete public system is a synthesis across the reviewed literature, not a finding attributable to MemDelta.

**Unresolved**

- Ownership, adoption, compute access, legal residual-risk standards, and programme economics.
- Whether the single-site ablation generalizes to multi-tenant production.
- Whether autonomous durable writes are economically preferable to governed rebuilding.
- Whether post-2028 consolidation offers a Pareto advantage over simpler fixed substrates.

### Confidence

**6/10** on sequencing; lower on post-2028 economics, adoption, and autonomous-write viability.

### Decisive falsifier

Temporal RAG, governed periodic rebuilding, or another fixed substrate repeatedly matches the controller on utility, calibration, grounding, safety, deletion coverage, rollback, and lifecycle cost—or no independent laboratory reproduces the load-bearing results.

### Final recommendation

Authorize the harness and single-site ablation first. Make every later phase conditional on reproduced marginal value and passed assurance gates. Cancel placement and consolidation investment if simpler systems match it.

### Preserve / narrow / reject lineage

- **Preserve:** commensuration first; open evidence operations; staged gates; negative-result publication; fixed-substrate kill condition.
- **Narrow:** multi-site work to tiers surviving subtraction; standardization to one enabling investment; autonomous adaptation to a gated research prototype.
- **Reject:** standardization as the sole bottleneck; fixed cost envelopes or unsupported numeric success thresholds; open components as an integrated mature system; certified CIFAR/MNIST unlearning as LLM evidence; production readiness by a fixed 2030 date.

---

# Cross-Question Thesis

> **Continual learning is first a measurement and governed-state problem, then a falsifiable substrate-placement problem, and only then an optimization problem.**

Q1 defines durable learning and separates parametric learning from system-level adaptation. Q2 refuses unsupported mechanism rankings and turns updates into governed transactions. Q3 treats heterogeneous placement as an ablatable hypothesis rather than doctrine. Q4 governs admission, derivatives, deletion, and rollback. Q5 makes trajectory failures and lifecycle costs observable. Q6 funds the experiment capable of rejecting the proposed architecture.

OpenCode strengthens the synthesis in four places: complete system manifests, replay-rate versus storage discipline, admission as the governance atom, and independent-harness scrutiny of load-bearing rankings. It does not change the evidence boundary. Its accepted normalization is a fifth usable synthesis contribution, not a fifth independent experimental reproduction.

The core trade-off remains unresolved:

- replay supports retention but creates storage, privacy, poisoning, and deletion obligations;
- external memory improves addressability and record-level reversibility but creates retrieval, leakage, staleness, routing, and derivative-state failures;
- parametric consolidation may reduce recurring retrieval cost but increases irreversibility and re-qualification burden.

No primary study in the accepted evidence ledger demonstrates that the complete hierarchy beats temporal RAG or periodic rebuilding after matched full-lifecycle costing. Repetition across the five Round-3 contenders adds synthesis consistency, not evidentiary independence.

---

# Final Prohibited-Claims List

1. Five-contender shared-pack agreement constitutes independent convergence, consensus, or replication.
2. Any universal ranking of replay, regularization, adapters, sparse updates, expansion, editing, policy optimization, or dense tuning.
3. Any ranking without matched protocol tuples, compute, inference budget, persistent state, and lifecycle-cost disclosure.
4. Continual learning necessarily requires online base-weight mutation.
5. Request-local ICL or static RAG automatically constitutes durable learning.
6. Computational equivalence between context and an implicit weight update implies equal persistence, provenance, deletion, or governance.
7. Replay sampling rate implies a bounded replay corpus or buffer.
8. Replay, orthogonality, modularity, scale, routing, or expansion guarantees no forgetting.
9. Plasticity-loss findings at 5M–314M establish frontier-model behavior.
10. Editing is either an indefinite factual-update solution or categorically useless.
11. The heterogeneous hierarchy is empirically established, optimal, or superior to temporal RAG or periodic rebuilding.
12. Continual Learning Bench supports the hierarchy as an established architecture.
13. External memory eliminates interference, is intrinsically safe, or is fully reversible.
14. Deleting a source row establishes derivative-aware deletion closure.
15. “Complete,” “perfect,” “guaranteed,” “certified,” or production-proven deletion closure.
16. Behavioral unavailability proves causal erasure from weights.
17. Semantic-memory rollback or registry alias reassignment guarantees whole-system rollback.
18. Provenance signatures establish truth, consent, authorization, or harmlessness.
19. Legal erasure and technical residual-influence testing are interchangeable.
20. Stable accuracy proves retained grounding, calibration, safety, or representation integrity.
21. Recent single-study quantitative results are universal rates, thresholds, or production expectations.
22. TiC-LM establishes general capability, safety, or production parity with retraining; its support is comparable general-Common-Crawl held-out loss in its protocol at approximately 2.6× lower computation.
23. CIFAR/MNIST, linear-model, small-image, or classification-era findings are direct LLM guarantees.
24. TFGN’s near-zero backward transfer or any other fresh, first-party, unreplicated report is settled evidence.
25. MemDelta proves standardization is the sole binding constraint or proves that no integrated system exists.
26. Open-source components constitute an integrated production continual-learning system.
27. Governed autonomous continual learning will be production-mature by a fixed 2030 date.
28. No private system exists; the supportable absence claim is limited to publicly documented systems in the reviewed literature.
29. OpenCode's raw Round-3 source-delta ID assignments may override the canonical evidence ledger or be represented as empirical disputes.
30. Author-asserted “first” claims, including ChronoMem priority language, are established historical priority.
31. Poisoning, calibration, retention, or memory-gain percentages may be quoted without their model, stream, store, benchmark, attack, and source-status scope.
32. ACL proceedings papers, workshop papers, technical reports, and arXiv preprints have interchangeable evidence status.

---

# Leadership Pulse 3 — Sealed Controller Summary

- **Status:** Final five-contender Round-3 controller synthesis completed through the 2026-07-31 cutoff.
- **Evidence posture:** Five shared-pack outputs increase synthesis robustness but do not constitute independent replication.
- **Strongest conclusion:** Measurement failures are better established than substrate rankings: loss, recall, accuracy, grounding, calibration, and recoverability can diverge.
- **Decision now:** Fund matched-resource, trajectory-native evaluation and governed admission before authorizing open-ended shared-weight updates.
- **Architecture posture:** Use versioned temporal retrieval as a provisional control and engineering default for mutable facts because it has scoped comparative evidence and supports correction and attribution; do not treat this posture as evidence of universal superiority over periodic rebuilding or other substrates. Each additional state tier remains an ablatable and lifecycle-priced hypothesis.
- **Weakest-link reconciliation:** Q2 is weakest as empirical mechanism ordering; Q3 is weakest as architectural commitment. Refusing to rank makes Q2 publication-safe, while Q3 must pass subtraction before becoming policy.
- **Immediate experiment:** Run a preregistered single-site hierarchy-ablation ladder against temporal RAG and governed periodic rebuilding. Replicate only the tiers that survive.
- **Mandatory controls:** Reset/stateless, frozen full-context, strong temporal RAG, and periodic retraining.
- **Mandatory gates:** Safety, privacy, tenant isolation, poison persistence, deletion coverage, and coherent whole-bundle rollback.
- **Programme rule:** No stage advances on utility alone. Recent 2026 preprints cannot determine architecture funding without reproduction by an independent team or site; same-team second-family or second-harness runs count only as robustness checks.
- **Kill condition:** Stop hierarchy and consolidation investment if a simpler fixed substrate repeatedly matches it on utility, assurance, reversibility, and total lifecycle cost.
- **Leadership confidence:** High on trajectory measurement and governed releases; moderate on placement logic and programme sequencing; low-to-moderate on mechanism ordering, scalable deletion certification, and post-2028 economics.
- **Provenance note:** OpenCode’s raw source-delta identity errors were corrected in the accepted normalization under the canonical ledger; these are provenance corrections, not empirical contradictions.

## Completion summary

- Integrated OpenCode as the fifth usable Round-3 contribution and produced final Q1–Q6 adjudications, lineage dispositions, prohibited claims, cross-question thesis, and Leadership Pulse 3.
- Explicitly recorded the OpenCode source-delta ID normalization as provenance.
- Reconciled the controller’s four-way Q2 weakness judgment with Claude’s Q3 dissent.
- **Files created or modified:** None.
- **Issues encountered:** No blocking issue. The source materials contain contender-level overclaims and inconsistent shorthand, all resolved under the canonical ledger and controller audits.