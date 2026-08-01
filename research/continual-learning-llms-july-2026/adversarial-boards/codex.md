# Phase-2 Leadership + Adversarial Board Report

**Publication status:** This report is an adversarial input preserved for audit traceability. Its claims, quantitative examples, recommendations, and risk judgments are not controller-endorsed evidence or final package conclusions. Controller conclusions are stated in the executive whitepaper, six-question synthesis, Go/No-Go recommendation, method matrix, roadmap, risk register, and final board adjudication. The byte-identical accepted artifact is preserved at [`raw-accepted/codex.md`](raw-accepted/codex.md).

**Board lens:** experimental design and systems economics—controls, resource matching, lifecycle-cost accounting, testability, and hidden implementation coupling.  
**Evidence cutoff:** 2026-07-31 23:59 UTC.  
**Corpus rule:** accepted artifacts and the canonical ledger govern. Rejected attempts, unsupported quantitative tables, misidentified sources, and post-cutoff observations carry no evidentiary weight. Five contenders sharing one packet provide synthesis consistency, not independent replication.

## Executive verdict

**Conditional Go** for:

- trajectory-native measurement and complete-system manifests;
- governed experience admission, lineage, qualified deletion receipts, and whole-bundle rollback;
- one cheap, preregistered single-site subtractive architecture test.

**No-Go** for:

- committing to the proposed heterogeneous hierarchy;
- autonomous shared-base-weight mutation;
- production consolidation infrastructure;
- any deployment claim based primarily on fresh, unreplicated 2026 preprints.

The strongest evidence concerns measurement failure: optimization loss, free-form recall, accuracy, grounding, calibration, recoverability, and actual retention can diverge. The weakest evidence concerns mechanism rankings and the incremental value of architectural tiers.

Every funded comparison must use common ceilings for optimization FLOPs, inference tokens/tool calls, and peak plus cumulative persistent bytes; report actual utilization; and separately price screening, human review, routing, storage, evaluation, retirement, rebuild, deletion, incident response, downtime, latency, energy, and operator effort. Safety, privacy, tenant isolation, poison persistence, deletion coverage, and rollback coherence are non-compensable gates.

---

## Q1 — Operational scope, taxonomy, and demonstrated evidence

### 1. Strongest version of the current answer

Use two labels:

- **Parametric continual learning:** durable mutation of weights or adapters.
- **System-level continual adaptation:** durable mutation anywhere in the deployable system, including retrieval indexes, episodic memory, prompts, skills, routers, tools, or policy.

A publishable learning claim requires an authorized and attributable state change caused by an ordered experience stream, persistence beyond the current request, and reproducible held-out improvement over matched reset/stateless and frozen full-context controls.

### 2. Claim dispositions

**Retain**

- The two-label taxonomy.
- Complete signed system manifests and explicit stream/protocol tuples.
- Reset/stateless, frozen full-context, temporal-RAG, and periodic-rebuild controls.
- Separation of acquisition, accessibility, retention, recoverability, and erasure.
- The conclusion that the public corpus does not demonstrate an integrated, indefinitely learning frontier system satisfying bounded resources, privacy, provenance, deletion, safety retention, and coherent rollback.

**Narrow**

- Single-study results to their tested model, stream, metric, and checkpoint.
- “No demonstrated system” to publicly documented systems in the reviewed corpus.
- Persistent external state as system-level adaptation only when it is experience-caused and improves later held-out behavior.

**Downgrade**

- Same-team second-family or second-harness runs to robustness checks, not independent reproduction.
- Recent 2026 preprints to provisional evidence that cannot determine architecture funding alone.

**Delete**

- Weights-only definitions.
- Treating request-local context or static retrieval as durable learning.
- Any claim that persistence alone establishes learning.
- Any claim that five-contender agreement is replication.

### 3. Hidden assumptions and category errors

- A reliable reset counterfactual can be reconstructed despite changing dependencies and environments.
- Held-out improvement is caused by the admitted state change rather than leakage, order effects, increased context, or extra inference spend.
- “Persistent state,” “stored information,” “behavioral access,” and “learning” are interchangeable. They are not.
- Loss reduction proves acquisition. Controlled evidence shows it need not: [Beyond Perplexity](https://arxiv.org/abs/2607.00368).
- Accuracy decline proves erasure. Recoverability work shows access failure can masquerade as forgetting: [Spurious Forgetting](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf).
- Protocol compatibility can be inferred from a common “continual learning” label.

### 4. Strongest counterargument and rebuttal

**Counterargument:** A substrate-neutral definition is so broad that an ordinary database update becomes continual learning.

**Rebuttal:** A database or prompt update qualifies only as system-level continual adaptation when an ordered experience causes an attributable durable state change that produces later held-out improvement over reset and full-context controls. Otherwise it is merely system maintenance or request-local conditioning. Parametric learning remains separately labeled.

### 5. Hardened publication answer

Continual learning should be claimed only when an ordered experience stream causes an authorized, attributable state change that persists across requests and produces reproducible held-out improvement over matched reset/stateless and frozen full-context controls. Weight or adapter mutation is **parametric continual learning**; durable changes to retrieval, memory, prompts, skills, routers, tools, or policy are **system-level continual adaptation**. Request-local context is not durable learning.

The evidence demonstrates bounded successes and diagnostic failures, not an integrated general-purpose solution. TiC-LM supports comparable general-Common-Crawl held-out loss under its 1B/3B protocol at approximately 2.6× lower computation, not general capability or safety parity: [TiC-LM](https://aclanthology.org/2025.acl-long.1551/). Sequential factual-write evidence remains single-family and synthetic: [Can a Language Model Learn Facts Continually in Its Weights?](https://arxiv.org/abs/2607.11020). Memory systems can also fail to beat simple controls in evaluated configurations: [Continual Learning Bench](https://arxiv.org/abs/2606.05661).

### 6. Q1 risks — risk-register rows R1–R3

| ID | Risk | Trigger | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|---|
| R1 | Scope inflation lets retrieval or prompting masquerade as learning. | Gain disappears under reset or matched frozen full-context control. | High | High | Require durable attributable state, cross-session held-out gain, substrate tags, and a revocation procedure. | Research Definition Lead |
| R2 | Strict release-grade reversibility excludes useful exploratory work. | A promising sandbox arm is rejected solely for missing production lineage tooling. | Medium | Medium | Separate exploratory admissibility from release eligibility; permit sandbox testing but prohibit durable serving release. | Scientific Programme Director |
| R3 | Shared-packet agreement is presented as empirical convergence. | Leadership material cites contender agreement as replication. | High | High | Label shared-context synthesis; require independent-team/site implementation before promotion. | Evidence Governance Lead |

### 7. Confidence

**8/10.** High confidence in the taxonomy and evidence boundary; lower confidence that production reset counterfactuals can be reconstructed cleanly.

### 8. Recommendation

**Go** for adopting the taxonomy and publication standard. **No-Go** for representing the reviewed literature as production proof.

### 9. Decisive experiment

Run long randomized streams against reset/stateless, frozen full-context, temporal-RAG, and periodic-rebuild controls under common resource ceilings.

**Falsifiable stop condition:** if a claimed continual system produces no durable held-out advantage over the controls, withdraw the learning claim for that protocol.

---

## Q2 — Plasticity, forgetting, and interference control

### 1. Strongest version of the current answer

There is no validated universal ranking among replay, regularization, protected adapters, sparse regions, expansion, editing, policy optimization, and dense tuning. Operate plasticity as a constraint-keyed update service that can choose no update, external state, modular mutation, sparse protected mutation, or offline dense rebuilding.

### 2. Claim dispositions

**Retain**

- Replay as a lawful-retention reference arm.
- Immutable base checkpoints, quarantined data, candidate releases, and complete rollback.
- Joint measurement of acquisition, retention, future plasticity, safety, and lifecycle cost.
- Post-update requalification based on dependency and risk analysis.

**Narrow**

- Least-irreversible-first to a safety policy, not a universally proven performance ordering.
- Orthogonal, sparse, regularized, and adaptive-consolidation benefits to finite tested protocols.
- Plasticity-loss findings to the tested 5M–314M non-embedding-parameter models: [Can Scale Save Us From Plasticity Loss?](https://arxiv.org/abs/2606.24752).

**Downgrade**

- Editing to a bounded-patch candidate, not an indefinite fact substrate.
- Replay-free near-zero forgetting to an unreplicated, finite technical-report result.
- EWC from “hopeless” or “winner” to a mechanism with one narrow positive LLM adaptation result.

**Delete**

- Universal mechanism rankings.
- Fixed replay percentages.
- Replay rate as evidence of bounded retained storage.
- Orthogonality, scale, modularity, or expansion as no-forgetting guarantees.

### 3. Hidden assumptions and category errors

- Equal FLOPs imply equal resources while storage, inference, routing, review, deletion, and incidents are omitted.
- Lower parameter drift means better retained utility.
- Replay sampling rate equals replay-corpus size.
- Expansion solves interference without creating capacity, routing, serving, and retirement liabilities.
- Adapter reversibility eliminates base-model, router, optimizer, or derivative coupling.
- A parameter update can inherit safety evidence from the prior bundle without requalification.

### 4. Strongest counterargument and rebuttal

**Counterargument:** Refusing to rank mechanisms is operationally evasive; teams need a default.

**Rebuttal:** The default should be a governed decision procedure, not a fabricated leaderboard. Use replay where lawful as a reference, temporal retrieval for mutable attributable facts, reversible modular changes when justified, and offline rebuilding as a control. Promote a winner only within a declared regime after matched-resource and lifecycle-cost comparison.

### 5. Hardened publication answer

No universal plasticity ordering is supported. Replay is the most defensible lawful-retention reference arm, but it creates privacy, poisoning, storage, provenance, and deletion obligations. Protected adapters and sparse regions can reduce interference in finite protocols but create capacity and routing liabilities. Expansion exchanges interference for growth. Evaluated editors degrade over long sequences but this does not prove all editing impossible: [WikiBigEdit](https://arxiv.org/abs/2503.05683). Orthogonal adaptation has bounded positive evidence, not indefinite capacity proof: [Orthogonal Subspace Learning](https://aclanthology.org/2023.findings-emnlp.715/).

Every mutation is a governed transaction. Dense consolidation should be offline, lineage-complete, rebuildable, and covered by complete-bundle rollback.

### 6. Q2 risks — risk-register rows R4–R6

| ID | Risk | Trigger | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|---|
| R4 | Replay retains poison, sensitive data, or legally restricted records. | A replay item fails consent, expiry, poison, tenant, or deletion audit. | High | High | Govern replay as retained state with purpose keys, expiry, access control, lineage, and a rebuild alternative. | Data Governance Owner |
| R5 | Protected modules postpone interference through unbounded growth. | Persistent bytes, router error, or retirement backlog breaches the frozen envelope. | Medium-High | High | Capacity registry, growth caps, retirement drills, and periodic-rebuild comparison. | Plasticity Engineering Lead |
| R6 | Weight updates improve task scores while eroding safety, calibration, or grounding. | Any assurance metric exceeds its preregistered regression boundary. | High | Critical | Requalify every affected control after mutation and restore the prior complete bundle on failure. | Independent Safety Lead |

### 7. Confidence

**6/10.** About 7/10 for the governed decision procedure, but only about 4/10 for any global mechanism ordering.

### 8. Recommendation

**Conditional Go** for matched-resource mechanism testing and tightly governed updates. **No-Go** for unrestricted online dense mutation or cross-paper leaderboards.

### 9. Decisive experiment

Run a preregistered tournament across replay-lawful and replay-prohibited regimes, multiple stream types, randomized orders, two model families, and independent harnesses.

**Falsifiable stop condition:** stop promoting the constraint-keyed policy if one simple mechanism stably dominates all regimes on utility, assurance, and lifecycle cost; stop any arm immediately on hard assurance failure or uncontrolled state growth.

---

## Q3 — Memory, retrieval, adapters, experts, editing, and consolidation

### 1. Strongest version of the current answer

Heterogeneous placement is a falsifiable risk-control hypothesis: transient evidence in context, mutable facts in versioned temporal retrieval, tenant experience in isolated memory, recurring procedures in signed skills or revocable adapters, validated capabilities in modular state, and rare offline consolidation.

### 2. Claim dispositions

**Retain**

- Placement criteria: mutability, attribution, reuse, latency, lifecycle cost, and reversibility.
- Promotion and demotion rules.
- Derivative lineage and whole-bundle rollback.
- Temporal RAG and periodic rebuilding as first-class controls.

**Narrow**

- The proposed hierarchy to a minimum testable hypothesis.
- Direct evidence to context, trusted temporal retrieval, and one narrow feedback-memory result.
- Temporal retrieval as a provisional engineering default for mutable facts, not a universal winner.

**Downgrade**

- General episodic memory, signed skills, sparse modules, and consolidation to unpriced tiers.
- ChronoMem to rollback machinery, not deletion closure: [ChronoMem](https://arxiv.org/abs/2607.27773).

**Delete**

- Hierarchy-as-established-architecture.
- External memory as intrinsically safe or fully reversible.
- Dedicated memory as automatically superior to context or RAG.
- Consolidation justified solely by repeated access.

### 3. Hidden assumptions and category errors

- Facts, procedures, preferences, and policy can be cleanly classified before placement.
- Routers remain calibrated under drift and cannot cross tenants.
- A tier’s local reversibility implies whole-system reversibility.
- Deleting a source record closes embeddings, summaries, caches, traces, adapters, routing policies, and weights.
- Additional tiers have negligible assurance and operator costs.
- A controller’s extra inference and review work is ignored while its utility is credited.

### 4. Strongest counterargument and rebuttal

**Counterargument:** The hierarchy is premature complexity; strong temporal RAG or periodic rebuilding will probably provide the same value more cheaply.

**Rebuttal:** That is the leading adversarial hypothesis and should be tested first. The hierarchy earns no standing architecture status. Only tiers whose removal causes reproducible loss under matched resources and full lifecycle costing should survive.

### 5. Hardened publication answer

Heterogeneous placement is not an established architecture. It is an ablation target. Temporal retrieval has scoped comparative support in trusted temporal-KB settings: [RAG or Learning?](https://aclanthology.org/2026.findings-acl.546/). Dedicated memory can fail to beat simpler controls: [Continual Learning Bench](https://arxiv.org/abs/2606.05661) and [Can Large Language Models Keep Up?](https://arxiv.org/abs/2603.07392). Persistent feedback memory has one narrow positive result: [Learning on the Job](https://arxiv.org/abs/2607.22157).

Before architectural investment, compare the full minimal stack, tier-by-tier subtraction, temporal-RAG-only, and periodic rebuild. Delete every tier without reproducible marginal utility or assurance value after routing, deletion, rollback, and operating costs.

### 6. Q3 risks — risk-register rows R7–R9

| ID | Risk | Trigger | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|---|
| R7 | The hierarchy becomes architecture lock-in before tiers are priced. | Multi-site or production infrastructure is funded before the subtractive gate. | Medium | High | Make the single-site subtraction test a binding first gate; require approval to reintroduce deleted tiers. | Portfolio Controller |
| R8 | Routing selects stale, poisoned, or wrong-tenant state. | Route-conditioned or silent unsafe failures exceed the frozen bound. | Medium-High | Critical | Enforce valid-time and tenant checks, calibrated abstention, explicit fallback, and independent stop authority. | Routing and Isolation Lead |
| R9 | Derivative proliferation defeats deletion, rollback, and economics. | Audit finds unmapped embeddings, summaries, caches, adapters, router state, or weights. | High | High | Use a content-addressed derivative graph, rebuildable epochs, garbage collection, and adversarial closure tests. | State Lifecycle Owner |

### 7. Confidence

**5/10.** Placement logic is plausible; the integrated hierarchy lacks direct matched-lifecycle evidence.

### 8. Recommendation

**Conditional Go** only for the cheap single-site subtraction test. **No-Go** for standing architecture, multi-site rollout, or consolidation infrastructure.

### 9. Decisive experiment

Run the F1-style full-stack-minus-one-tier ladder against temporal RAG and periodic rebuilding. Name the predicted load-bearing tier before results.

**Falsifiable stop condition:** cancel hierarchy and consolidation investment if removal of every unevidenced tier causes no reproducible loss, or if a fixed substrate matches the stack at lower lifecycle cost.

---

## Q4 — Experience admission, governance, privacy, provenance, deletion, and rollback

### 1. Strongest version of the current answer

Deployment experience is untrusted evidence, not training material by default. Every durable mutation must pass capture, classification, quarantine, poison/privacy screening, corroboration or executable verification, shadow evaluation, least-irreversible placement, signed release, lineage, monitoring, deletion, and rollback.

### 2. Claim dispositions

**Retain**

- Admission as the governance atom.
- Quarantine before durable mutation.
- Tenant, purpose, consent, valid-time, and legal-basis controls.
- Derivative lineage and qualified deletion receipts.
- Coherent restoration of the complete deployable bundle.

**Narrow**

- Deletion closure to measured coverage under an explicit residual-risk standard.
- Prevention-at-intake to a preferred hypothesis requiring comparison with repair and rebuild.
- C2PA to one provenance mechanism.

**Downgrade**

- Semantic rollback to addressable-store recovery.
- Behavioral suppression to one deletion probe.
- Legal interpretations to context-specific counsel, not technical conclusions.

**Delete**

- Provenance as truth, permission, consent, or harmlessness.
- Perfect, complete, guaranteed, or certified deletion.
- Technical unlearning as automatic GDPR compliance.
- Registry aliases or memory rollback as complete-system rollback.

### 3. Hidden assumptions and category errors

- Corroborated experience is necessarily true or authorized.
- Provenance signatures validate content rather than asserted origin.
- Known derivatives equal all derivatives.
- Behavioral unavailability equals causal erasure.
- Technical erasure tests determine legal compliance.
- Governance costs can be ignored when evaluating system value.
- Static admission thresholds remain effective against adaptive attackers.

### 4. Strongest counterargument and rebuttal

**Counterargument:** Admission governance is too slow and still cannot prove complete deletion; rebuilding from a governed corpus is simpler.

**Rebuttal:** Governance must earn its cost experimentally. Compare full admission with direct ingestion, post-hoc repair, and periodic rebuilding. Use risk-tiered temporary placement to reduce delay. Where derivative closure cannot meet the declared residual standard, rebuilding or non-retention should win.

### 5. Hardened publication answer

Durable experience writes require liability-controlled admission. Provenance supports attribution but not truth or authorization; see [C2PA 2.2](https://spec.c2pa.org/specifications/specifications/2.2/index.html). Poisoning is a standing system risk, and tested unlearning methods can leave poison effects: [AgentPoison](https://arxiv.org/abs/2407.12784) and [Machine Unlearning Fails to Remove Data Poisoning Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/hash/7e810b2c75d69be186cadd2fe3febeab-Abstract-Conference.html).

Deletion receipts must enumerate records removed, derivatives rebuilt or disabled, inaccessible components, probes performed, and residual risks. Legal erasure remains context-specific under [GDPR Article 17](https://eur-lex.europa.eu/eli/reg/2016/679/art_17/oj/eng). Rollback restores a coherent manifest spanning models, adapters, indexes, memories, prompts, routers, tools, policies, and caches.

### 6. Q4 risks — risk-register rows R10–R12

| ID | Risk | Trigger | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|---|
| R10 | Adaptive attackers learn admission thresholds and escape quarantine. | Quarantined data reaches serving or shared promotion occurs without authorization. | Medium-High | Critical | Global stop, rotating adaptive attacks, corroboration, executable verification, canaries, and independent quarantine authority. | Security Red-Team Lead |
| R11 | Governance latency and reviewer load suppress useful adaptation. | Queues breach service limits or useful-event rejection materially rises. | High | Medium-High | Risk-tiered review, auditable automation, temporary reversible placement, and comparison with periodic rebuild. | Experience Operations Lead |
| R12 | Deletion receipts overstate causal removal or legal compliance. | A completed receipt coexists with a known recoverable derivative or unsupported legal claim. | Medium | Critical | Qualified vocabulary; distinguish removed, rebuilt, inaccessible, and residual; require legal and technical sign-off. | Privacy Counsel and Deletion Lead |

### 7. Confidence

**6/10.** Governance requirements are well motivated; scalable deletion-coverage certification and its economics remain weakly established.

### 8. Recommendation

**Conditional Go** for governed external or revocable state under explicit residual-risk standards. **No-Go** for unrestricted direct ingestion or claims of certified deletion.

### 9. Decisive experiment

Compare direct ingestion, post-hoc repair, governed temporal admission, full lineage-controlled admission, and periodic rebuilding on the same multi-tenant poison/deletion stream.

**Falsifiable stop condition:** reject governed admission if direct ingestion plus periodic rebuild is non-inferior on utility and attack consequence, achieves equal or better deletion coverage, and costs less. Stop immediately on quarantine escape, tenant crossing, or a knowingly incomplete receipt.

---

## Q5 — Longitudinal evaluation, safety retention, and assurance

### 1. Strongest version of the current answer

Evaluate trajectories of complete system manifests, not final checkpoints. Test prequentially before each event and retrospectively after each stage. Measure acquisition, retention, transfer, recoverability, future plasticity, calibration, grounding, temporal consistency, routing, poison, safety, privacy, deletion, rollback, state growth, and lifecycle cost.

### 2. Claim dispositions

**Retain**

- Prequential plus retrospective evaluation.
- Complete protocol tuples and system manifests.
- Mandatory reset, full-context, temporal-RAG, and periodic-retraining controls.
- Fault-seeded evaluation and independent-harness review.
- Non-compensable assurance gates.

**Narrow**

- The large metric catalogue through an empirical metric-retention rule.
- Reproduction requirements to load-bearing claims.
- Multi-site comparisons to direction and protocol-tagged differences rather than arbitrary point equality.

**Downgrade**

- Recent calibration, grounding, and memory-benchmark findings to protocol-specific preprint evidence.
- Any proposed numerical threshold to a preregistered design choice derived from pilots.

**Delete**

- Final-score sufficiency.
- Unsupported composite scores.
- Universal correlations or deployment thresholds.
- Pooling numbers across pretraining, editing, memory, agents, multimodal learning, and unlearning.

### 3. Hidden assumptions and category errors

- Endpoint accuracy identifies why a system failed.
- Stable answers prove stable grounding or calibration.
- More metrics necessarily produce more assurance.
- Evaluation data are passive rather than a privacy, contamination, and poisoning substrate.
- Equal evaluation cadence means equal assurance cost.
- A benchmark ranking generalizes despite order, model, harness, and contamination differences.

### 4. Strongest counterargument and rebuttal

**Counterargument:** The complete-manifest protocol is too expensive and will slow every release.

**Rebuttal:** The protocol must prove its marginal value. Seed distinct failures and remove every metric that never independently detects an incident or changes a decision. Price evaluation explicitly. The result should be a minimal sufficient protocol, not permanent metric accumulation.

### 5. Hardened publication answer

Endpoint accuracy cannot distinguish acquisition failure, destructive interference, recoverable access loss, retrieval failure, grounding drift, calibration collapse, policy refusal, or plasticity loss. Recoverable degradation is demonstrated in [Spurious Forgetting](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf); loss can improve with zero recall in [Beyond Perplexity](https://arxiv.org/abs/2607.00368); grounding can change while answers remain stable in [Hidden Forgetting](https://arxiv.org/abs/2607.02020); and memory rankings can reverse under controlled confounds in [MemDelta](https://arxiv.org/abs/2606.29914).

Use Pareto comparisons, separately report lifecycle costs, and retain an expanded metric only when it reproducibly detects a distinct seeded failure or changes a decision missed by a simpler protocol.

### 6. Q5 risks — risk-register rows R13–R15

| ID | Risk | Trigger | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|---|
| R13 | Metric proliferation makes continuous evaluation uneconomic. | Evaluation exceeds its frozen budget or scheduled runs are skipped. | High | High | Apply the metric-retention rule and report marginal cost per independently detected failure. | Evaluation Science Lead |
| R14 | Contamination or fixed order creates false rankings. | Results correlate with exposure/order or reverse on hidden randomized streams. | Medium-High | High | Rolling hidden items, randomized orders, contamination checks, second harnesses, and full protocol tuples. | Benchmark Steward |
| R15 | Evaluation logs become a privacy or poisoning substrate. | Logs retain undeclared sensitive data, survive deletion, or enter future training/evaluation. | Medium | High | Govern logs as retained state; separate them from training and include them in access, retention, and closure controls. | Evaluation Data Custodian |

### 7. Confidence

**8/10.** Strong confidence that trajectory-native evaluation is necessary; only moderate confidence in any current minimal metric set or threshold.

### 8. Recommendation

**Go** for the trajectory protocol and metric-pruning challenge. **No-Go** for final-score-only release decisions.

### 9. Decisive experiment

Evaluate identical fault-seeded system trajectories using endpoint-only, conventional continual-learning, and complete-manifest protocols.

**Falsifiable stop condition:** prune the expanded protocol if endpoint-only evaluation detects the same consequential incidents and yields the same rankings within preregistered margins. Drop any metric that never fires independently across replicated seeded-failure runs.

---

## Q6 — Integrated 2026–2030 research programme

### 1. Strongest version of the current answer

Fund commensuration before architecture around one killable hypothesis:

> A governed substrate-placement controller can outperform strong fixed-substrate controls on trajectory utility and assurance under common resource ceilings and fully disclosed lifecycle cost.

Sequence: cheap single-site subtraction; protocol pruning and independent reproduction; matched tournament; capacity and consolidation testing; independent two-site replication; only then bounded autonomous-write research and deployment-shaped economics.

### 2. Claim dispositions

**Retain**

- Cheap subtraction before platform building.
- Conditional stage gates and negative-result publication.
- Fixed-substrate kill conditions.
- Independent-team/site reproduction for load-bearing claims.
- Periodic rebuilding as a first-class substitute.

**Narrow**

- Multi-site work to tiers surviving subtraction.
- Standardization to one enabling investment, not the sole bottleneck.
- Autonomous write proposals to shadow mode and revocable state.

**Downgrade**

- 2028–2030 architecture and economic forecasts to hypotheses.
- Open-source component availability to reduced implementation friction.
- Same-team replications to robustness checks.

**Delete**

- Production maturity by a fixed 2030 date.
- Open components as proof of an integrated system.
- Autonomous shared-weight updates.
- Infrastructure progress as a substitute for scientific decisions.

### 3. Hidden assumptions and category errors

- Infrastructure is the primary binding constraint rather than compute, law, adoption, ownership, or economics.
- A single-site result predicts multi-tenant production.
- Standardization prevents organizational gaming or benchmark capture.
- Controller complexity is free relative to fixed substrates.
- Research milestones imply deployment readiness.
- More reversible components compose into a reversible system without atomic dependency control.

### 4. Strongest counterargument and rebuttal

**Counterargument:** The programme risks spending years building governance infrastructure around a hierarchy that temporal RAG or periodic rebuilding will beat.

**Rebuttal:** The first investment must be a bounded disposable ablation, not a platform. Infrastructure funding is contingent on a surviving tier. Later work stops whenever a simpler fixed substrate matches utility and assurance at lower lifecycle cost.

### 5. Hardened publication answer

Authorize only trajectory infrastructure and a cheap single-site subtraction gate in 2026 H2. Reproduce load-bearing findings on a second model family before letting them determine architecture. Run a matched mechanism tournament only if a non-RAG tier survives subtraction. Permit consolidation only after replicated lifecycle advantage and adversarial deletion/rollback success. Permit autonomous durable-write proposals only in shadow mode, with no autonomous shared-base-weight mutation.

Recent mechanism-agnostic protocols and benchmarks motivate testing, not programme-wide architecture claims: [When Does Continual Learning Require Learning?](https://arxiv.org/abs/2607.07847), [Continual Learning Bench](https://arxiv.org/abs/2606.05661), and [MemDelta](https://arxiv.org/abs/2606.29914).

### 6. Q6 risks — risk-register rows R16–R18

| ID | Risk | Trigger | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|---|
| R16 | Infrastructure consumes the budget without producing decisions. | Platform spend rises while early falsifiers slip or yield no kill decisions. | Medium-High | High | Stage funding by falsifier completion, cap infrastructure, publish negatives, and terminate failed tracks. | Programme Executive |
| R17 | No independent laboratory adopts or reproduces the work. | No independent site begins a core reproduction within the frozen adoption window. | Medium | High | Portable manifests, open streams, compute grants, independent ownership, and low-friction reference runs. | Replication Consortium Lead |
| R18 | Governance and lifecycle costs make mutation inferior to curation and rebuilding. | Consolidation or final economics show no Pareto advantage after review, deletion, incidents, and rebuild. | Medium-High | Critical | Preserve periodic rebuild as a first-class substitute and enforce the programme kill condition. | Portfolio Controller and Finance Lead |

These six three-row tables constitute the required **18-row risk register: exactly three risks for each of Q1–Q6**.

### 7. Confidence

**6/10.** The gated sequence is rational; post-2028 economics, adoption, residual-risk standards, and autonomous-write value remain speculative.

### 8. Recommendation

**Conditional Go** for the 2026 H2 measurement and subtraction gates. **No-Go** for precommitting to the hierarchy, consolidation programme, or autonomous mutation track.

### 9. Decisive experiment

Run the single-site full-stack subtraction ladder against temporal RAG and periodic rebuild with common ceilings and complete lifecycle accounting.

**Falsifiable stop condition:** terminate hierarchy and consolidation investment if no additional tier is reproducibly load-bearing, a fixed substrate matches the stack more cheaply, lineage cannot cover known derivatives, or any hard assurance gate fails.

---

## Unsupported quantitative claims

The following are rejected or unsupported **as stated** and must not appear as factual findings:

1. O-LoRA preserves **94.2%** of history across five tasks.
2. OptiMer uses **0.01×** total compute or matches joint fine-tuning.
3. Unconstrained continual pretraining causes **35%–68%** degradation within 10B tokens.
4. Editors universally collapse after **500–1,000** edits.
5. A universal **5%–10%** replay rate prevents the stability gap.
6. GRACE provides **100% locality** or **0.0% drift**.
7. RippleEdits establishes universal **>90% target success** and **>70% implication failure**.
8. Cross-method BWT bands such as full tuning −35% to −68%, replay −5% to −12%, LoRA −20% to −40%, and O-LoRA −2% to −5%.
9. Normalized compute bands such as LoRA 0.05×, O-LoRA 0.06×, TFGN 0.2×, GRACE below 0.001×, or editing below 0.01×.
10. Generic latency bands such as test-time adaptation +10%–30%, RAG +50–300 ms, or fixed memory-tier latencies.
11. Progressive networks necessarily have quadratic parameter growth; the supported generic claim is architecture-dependent growth, commonly linear in added columns.
12. “Small replay rate” implies a small or bounded replay store in the 100B-token-per-language study.
13. A universal **5% real-data fraction** prevents model collapse; the cited theorem is conditional and supplies no universal operating threshold.
14. Repository star counts or “latest release” observations first inspected after the cutoff.
15. Any exact episode-count, pass-rate, cost, latency, deletion, or deployment threshold not tied to a primary table, model, stream, hardware, metric, and checkpoint.

Valid paper-specific values—including TiC-LM’s approximate 2.6× computation result, the factual-write 1%/46% result, and the 13.7%/7.0% policy-optimization result—must remain attached to their exact protocols and must not be converted into production rates or universal thresholds.

---

## Unacceptable deployment pathways

1. Directly ingesting user, tool, or agent experience into serving memory or training without quarantine and authorization.
2. Autonomous shared-base-weight mutation.
3. Cross-tenant memory, replay, adapters, summaries, or logs without enforceable namespace and access isolation.
4. Replay retention without consent, purpose, expiry, provenance, deletion, and poisoning controls.
5. Funding or deploying the multi-tier hierarchy before the subtractive gate.
6. Learned routing without calibrated abstention, tenant checks, valid-time checks, and a safe fallback.
7. Dense or modular updates that inherit the prior bundle’s safety approval without requalification.
8. Consolidation without a lineage-complete, rebuildable epoch and pre-consolidation manifest.
9. Issuing deletion receipts after source-row deletion alone.
10. Claiming complete, perfect, guaranteed, certified, or legally sufficient deletion from behavioral probes.
11. Treating semantic-memory rollback or registry alias reassignment as whole-system rollback.
12. Feeding evaluation logs back into adaptation without separate authorization and contamination controls.
13. Serving autonomous write proposals before shadow evaluation, dual authorization, canaries, and rollback drills.
14. Production commitment based on same-packet contender agreement, same-team robustness checks, or a single recent preprint.
15. Allowing average utility to compensate for safety, privacy, tenant-isolation, poison, deletion, or rollback failure.

---

## Evidence that would reverse the recommendations

The board would upgrade the hierarchy or mutation programme toward **Go** if:

- the subtractive test shows at least one non-RAG tier has reproducible marginal value under common ceilings and complete lifecycle costing;
- the result survives a second model family and independent-team/site implementation;
- a controller occupies a stable Pareto frontier against temporal RAG and periodic rebuilding across randomized streams;
- learned routing beats explicit rules without worsening abstention, safety, tenant isolation, or cost;
- consolidation reduces recurring cost while satisfying the declared residual-risk deletion standard and coherent rollback;
- adversarial testing demonstrates high derivative coverage with accurate qualified receipts;
- autonomous proposals in shadow mode improve validated reuse and incident-adjusted lifecycle value without additional hard-gate failures.

The board would downgrade the programme to **No-Go** if:

- temporal RAG or periodic rebuilding repeatedly matches utility and assurance at lower lifecycle cost;
- no proposed tier is load-bearing;
- independent harnesses reverse controller rankings without a defensible protocol explanation;
- governance overhead erases net value;
- deletion receipts repeatedly miss known derivatives;
- any substrate cannot restore a coherent pre-event bundle;
- safety regressions persist or autonomous proposals create unauthorized durable mutations.

A universal mechanism ordering reproduced across model families, stream regimes, lawful and prohibited replay settings, randomized orders, and independent sites would also reverse the Q2 conclusion that only constraint-keyed selection is defensible.

---

## Red-team control review

| Area | Adversarial finding | Required controls and test | Hard stop / residual position |
|---|---|---|---|
| **Privacy** | Raw experience, replay, summaries, embeddings, logs, adapters, and weights can expose sensitive or cross-tenant information. Deleting the source does not remove derivatives. | Purpose and tenant keys; consent/legal-basis capture; minimization; access controls; expiry; canaries; cross-tenant probes; membership and reconstruction tests; evaluation logs included in closure. Use [GDPR Article 17](https://eur-lex.europa.eu/eli/reg/2016/679/art_17/oj/eng) only with context-specific legal analysis and [NIST AI 600-1](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) as risk guidance. | Stop on prohibited real-PII use or cross-tenant disclosure. No claim of zero residual influence. |
| **Poisoning** | Persistent memory and RAG turn admitted poison into durable behavior; unlearning may leave attack effects. Static filters can be learned by adaptive attackers. | Quarantine; corroboration or executable verification; adaptive red-team corpora; provenance-aware anomaly detection; staged canaries; trigger and consequence tests; independent quarantine authority. Evidence: [AgentPoison](https://arxiv.org/abs/2407.12784), [Machine Unlearning Fails to Remove Data Poisoning Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/hash/7e810b2c75d69be186cadd2fe3febeab-Abstract-Conference.html). | Stop on quarantine escape, known poison reaching serving, or poison persistence after a completed receipt. Screening remains fallible. |
| **Provenance** | Signed provenance can bind an asserted origin while the content remains false, unauthorized, or harmful. Lineage may break at summaries, caches, routing, or consolidation. | Content hashes; actor/tool/time/purpose metadata; signed complete manifests; derivative graph; authorization separate from provenance; provenance-stripping and substitution tests. [C2PA 2.2](https://spec.c2pa.org/specifications/specifications/2.2/index.html) is one input, not a truth system. | Stop shared promotion when origin, authorization, tenant, or derivative lineage is unresolved. |
| **Deletion** | Record deletion, behavioral suppression, legal erasure, semantic rollback, and causal removal are different claims. Unknown derivatives prevent proof of completeness. | Enumerated receipts; graph traversal across records, embeddings, indexes, summaries, caches, logs, replay, adapters, routers, and weights; retrieval, trigger, membership, behavioral, and rebound probes; rebuild comparison. [Making AI Forget You](https://arxiv.org/abs/1907.05012) supports design-dependent deletion economics, not an LLM guarantee. | Never issue “complete” or “certified” receipts under current evidence. Stop a substrate when a known derivative survives above the declared residual standard. |
| **Rollback** | Registry aliases and semantic-memory rollback can restore one component while leaving models, adapters, indexes, prompts, tools, policies, and caches inconsistent. | Atomic manifest versions; dependency hashes; pre-event checkpoint; restore rehearsal; semantic and transactional consistency tests; routing and cache invalidation. [ChronoMem](https://arxiv.org/abs/2607.27773) is component evidence only. | Stop release if the complete pre-event bundle cannot be restored coherently. Rollback does not itself prove deletion. |
| **Safety retention** | Utility can improve while refusal behavior, calibration, grounding, tool policy, privacy, or tenant isolation deteriorates. Safety evidence does not automatically survive mutation. | Requalify affected controls after every update; fixed and adaptive safety suites; calibration/coverage and grounding tests; tool-policy and tenant probes; staged canaries; independent rollback authority. Relevant bounded evidence includes [SafeMERGE](https://aclanthology.org/2026.findings-acl.1761/) and [Continual Safety Alignment via Gradient-Based Sample Selection](https://aclanthology.org/2026.findings-acl.942/). | Any unrecoverable safety regression is an automatic stop. Utility cannot compensate for a hard-gate failure. |

## Final board decision

Fund the measurement harness, minimal manifests and lineage tooling, and the single-site subtractive gate. Freeze numerical margins after disjoint pilots; report actual resource use and every material lifecycle cost. Do not fund a production hierarchy, consolidation platform, or autonomous mutation path until a non-RAG tier survives subtraction, load-bearing evidence is independently reproduced, and all assurance gates pass.

The evidence-synthesis discipline materially narrows the decision: measurement and governance receive conditional funding; architecture and optimization claims remain hypotheses subject to cheap falsification. No files were edited.

---

## Controller-normalized consolidated 18-row risk register

This table duplicates the six semantically unchanged question-local risk tables in a canonical Q-labeled form for structural verification.

| ID | Q | Risk | Trigger | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|---|---|
| R1 | Q1 | Scope inflation lets retrieval or prompting masquerade as learning. | Gain disappears under reset or matched frozen full-context control. | High | High | Require durable attributable state, cross-session held-out gain, substrate tags, and a revocation procedure. | Research Definition Lead |
| R2 | Q1 | Strict release-grade reversibility excludes useful exploratory work. | A promising sandbox arm is rejected solely for missing production lineage tooling. | Medium | Medium | Separate exploratory admissibility from release eligibility; permit sandbox testing but prohibit durable serving release. | Scientific Programme Director |
| R3 | Q1 | Shared-packet agreement is presented as empirical convergence. | Leadership material cites contender agreement as replication. | High | High | Label shared-context synthesis; require independent-team/site implementation before promotion. | Evidence Governance Lead |
| R4 | Q2 | Replay retains poison, sensitive data, or legally restricted records. | A replay item fails consent, expiry, poison, tenant, or deletion audit. | High | High | Govern replay as retained state with purpose keys, expiry, access control, lineage, and a rebuild alternative. | Data Governance Owner |
| R5 | Q2 | Protected modules postpone interference through unbounded growth. | Persistent bytes, router error, or retirement backlog breaches the frozen envelope. | Medium-High | High | Capacity registry, growth caps, retirement drills, and periodic-rebuild comparison. | Plasticity Engineering Lead |
| R6 | Q2 | Weight updates improve task scores while eroding safety, calibration, or grounding. | Any assurance metric exceeds its preregistered regression boundary. | High | Critical | Requalify every affected control after mutation and restore the prior complete bundle on failure. | Independent Safety Lead |
| R7 | Q3 | The hierarchy becomes architecture lock-in before tiers are priced. | Multi-site or production infrastructure is funded before the subtractive gate. | Medium | High | Make the single-site subtraction test a binding first gate; require approval to reintroduce deleted tiers. | Portfolio Controller |
| R8 | Q3 | Routing selects stale, poisoned, or wrong-tenant state. | Route-conditioned or silent unsafe failures exceed the frozen bound. | Medium-High | Critical | Enforce valid-time and tenant checks, calibrated abstention, explicit fallback, and independent stop authority. | Routing and Isolation Lead |
| R9 | Q3 | Derivative proliferation defeats deletion, rollback, and economics. | Audit finds unmapped embeddings, summaries, caches, adapters, router state, or weights. | High | High | Use a content-addressed derivative graph, rebuildable epochs, garbage collection, and adversarial closure tests. | State Lifecycle Owner |
| R10 | Q4 | Adaptive attackers learn admission thresholds and escape quarantine. | Quarantined data reaches serving or shared promotion occurs without authorization. | Medium-High | Critical | Global stop, rotating adaptive attacks, corroboration, executable verification, canaries, and independent quarantine authority. | Security Red-Team Lead |
| R11 | Q4 | Governance latency and reviewer load suppress useful adaptation. | Queues breach service limits or useful-event rejection materially rises. | High | Medium-High | Risk-tiered review, auditable automation, temporary reversible placement, and comparison with periodic rebuild. | Experience Operations Lead |
| R12 | Q4 | Deletion receipts overstate causal removal or legal compliance. | A completed receipt coexists with a known recoverable derivative or unsupported legal claim. | Medium | Critical | Qualified vocabulary; distinguish removed, rebuilt, inaccessible, and residual; require legal and technical sign-off. | Privacy Counsel and Deletion Lead |
| R13 | Q5 | Metric proliferation makes continuous evaluation uneconomic. | Evaluation exceeds its frozen budget or scheduled runs are skipped. | High | High | Apply the metric-retention rule and report marginal cost per independently detected failure. | Evaluation Science Lead |
| R14 | Q5 | Contamination or fixed order creates false rankings. | Results correlate with exposure/order or reverse on hidden randomized streams. | Medium-High | High | Rolling hidden items, randomized orders, contamination checks, second harnesses, and full protocol tuples. | Benchmark Steward |
| R15 | Q5 | Evaluation logs become a privacy or poisoning substrate. | Logs retain undeclared sensitive data, survive deletion, or enter future training/evaluation. | Medium | High | Govern logs as retained state; separate them from training and include them in access, retention, and closure controls. | Evaluation Data Custodian |
| R16 | Q6 | Infrastructure consumes the budget without producing decisions. | Platform spend rises while early falsifiers slip or yield no kill decisions. | Medium-High | High | Stage funding by falsifier completion, cap infrastructure, publish negatives, and terminate failed tracks. | Programme Executive |
| R17 | Q6 | No independent laboratory adopts or reproduces the work. | No independent site begins a core reproduction within the frozen adoption window. | Medium | High | Portable manifests, open streams, compute grants, independent ownership, and low-friction reference runs. | Replication Consortium Lead |
| R18 | Q6 | Governance and lifecycle costs make mutation inferior to curation and rebuilding. | Consolidation or final economics show no Pareto advantage after review, deletion, incidents, and rebuild. | Medium-High | Critical | Preserve periodic rebuild as a first-class substitute and enforce the programme kill condition. | Portfolio Controller and Finance Lead |
