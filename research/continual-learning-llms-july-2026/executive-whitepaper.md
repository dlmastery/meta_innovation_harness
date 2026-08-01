# Continual Learning in Large Language Models  
## An Executive Decision Framework Through 31 July 2026

**Evidence cutoff:** 31 July 2026, 23:59 UTC  
**Decision status:** Conditional Go for measurement, governance infrastructure, and a bounded falsification experiment; No-Go for production commitment to autonomous shared-weight mutation or an unvalidated multi-tier learning architecture.

---

## Executive decision

Continual learning in large language models should be treated first as a **measurement and governed-state problem**, second as a **falsifiable state-placement problem**, and only then as an optimization problem.

The recommended executive decision is:

> **Authorize a Conditional Go for trajectory-native evaluation, governed experience admission, derivative-state lineage, deletion and rollback drills, and one preregistered single-site architecture-ablation experiment. Do not authorize open-ended shared-weight updating, a permanent heterogeneous learning hierarchy, or large-scale consolidation infrastructure.**

This decision is deliberately narrower than a general endorsement of continual learning. The public evidence available through the cutoff supports bounded successes, important diagnostic failures, and several promising mechanisms. It does not establish a production-ready system that learns indefinitely while jointly satisfying durable acquisition, bounded resource use, safety retention, privacy, provenance, derivative-aware deletion, tenant isolation, and coherent whole-system rollback.

The immediate investment should test one killable hypothesis:

> A governed state-placement controller can outperform strong fixed-substrate controls on trajectory utility and assurance under a common resource envelope and fully disclosed lifecycle cost.

The controls must include:

1. reset or stateless operation;
2. a frozen model supplied with all lawful relevant context;
3. strong, versioned temporal retrieval;
4. governed periodic retraining or rebuilding.

The experiment should remove proposed state tiers one at a time and require each surviving tier to demonstrate reproducible marginal value. If temporal retrieval, periodic rebuilding, or another simpler fixed substrate repeatedly matches the controller on utility, calibration, grounding, safety, deletion coverage, rollback, reversibility, and total lifecycle cost, investment in the hierarchy and consolidation should stop.

Five Round-3 contenders reached the same Conditional Go disposition using a shared evidence packet. That agreement improves synthesis consistency, but it is **not independent empirical consensus, convergence, or replication**. The contenders should therefore be treated as five analyses of one shared corpus, not five reproductions of the underlying studies.

---

## 1. Definitions and decision boundaries

### 1.1 Parametric continual learning

**Parametric continual learning** is durable mutation of model weights or adapters caused by an ordered stream of experience. Its state persists beyond the current request and can affect future behavior without the original experience being re-supplied in full.

This category includes dense fine-tuning, sparse weight updates, low-rank adapters, expert modules, knowledge editing, and offline consolidation. It does not imply that every parameter-changing method learns successfully or retains previous capabilities.

### 1.2 System-level continual adaptation

**System-level continual adaptation** is durable mutation anywhere in the deployed system, including retrieval indexes, episodic memory, persistent prompt summaries, skills, routers, tools, or policies.

Persistent prompt summaries have supported class-incremental learning in a small classification regime, but that COLING 2025 proceedings result does not establish equivalence to weight learning or general deployment readiness: https://aclanthology.org/2025.coling-main.402/ **[Primary proceedings paper; small classification scope.]**

External memory can support durable adaptation, but evidence is mixed and protocol-dependent. In the OAKS continuous-fact setting, evaluated agent memory performed below naive retrieval-augmented generation; this was an inference-time adaptation study rather than a production-wide architecture test: https://arxiv.org/abs/2603.07392 **[Primary preprint; continuous-fact benchmark and tested memory designs only.]** A separate single-author study reported benefits from feedback-distilled persistent memory in one recurring domain over four repeated trials, including advantages over its static-RAG control; it does not establish general memory superiority: https://arxiv.org/abs/2607.22157 **[Primary preprint; one domain, one author, scoped control comparison.]**

### 1.3 Request-local adaptation

Context supplied only for the current request is **request-local adaptation**, not durable learning. A long context may change behavior and can be computationally interpreted as an input-conditioned implicit low-rank update, but that theoretical equivalence does not confer persistence, provenance, attribution, deletion semantics, or governance equivalence: https://arxiv.org/abs/2507.16003 **[Primary theory preprint; computational equivalence, not persistent learning.]**

Static retrieval is likewise not automatically continual adaptation. It becomes system-level adaptation only when the deployed system durably changes the retrieved state, indexing policy, routing, or other persistent substrate in response to experience.

### 1.4 Minimum standard for a learning claim

A publishable continual-learning claim should require all of the following:

- an authorized and attributable state change;
- an ordered experience stream;
- persistence beyond the current request;
- reproducible held-out improvement;
- comparison with matched reset or stateless operation;
- comparison with a frozen full-context control;
- disclosure of the complete system manifest;
- disclosure of training compute, inference budget, and persistent-state use;
- retention, transfer, recovery, safety, privacy, deletion, and rollback evaluation.

Lower optimization loss is not sufficient. A controlled nonce-fact study found that lower training loss could coexist with exactly zero free-form recall, showing that optimization progress need not establish behavioral acquisition: https://arxiv.org/abs/2607.00368 **[Primary 2026 preprint; controlled synthetic diagnostic, not a population rate for test-time learning.]**

A final score is also insufficient. Performance decline can remain rapidly recoverable rather than reflecting destructive erasure, as shown in an ICLR 2025 study whose principal diagnostic was controlled and synthetic: https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf **[Primary peer-reviewed conference paper; controlled diagnostic scope.]**

---

## 2. State of the evidence

### 2.1 What has been demonstrated

Continual web pretraining can benefit from replay and scheduling under bounded protocols. TiC-LM evaluated 114 web snapshots with 1B- and 3B-parameter models and reported comparable general-Common-Crawl held-out loss to retraining at approximately 2.6 times lower computation in its protocol: https://aclanthology.org/2025.acl-long.1551/ **[Primary ACL 2025 proceedings paper; web pretraining at 1B/3B scale. The result is held-out-loss and protocol specific, not general capability or safety parity.]**

Several modular and sparse methods reduce interference on finite academic sequences. Orthogonal low-rank subspaces were evaluated in language-model continual learning, but the finite sequence and capacity analysis do not support an indefinite no-forgetting guarantee: https://aclanthology.org/2023.findings-emnlp.715/ **[Primary Findings of EMNLP 2023 paper; finite academic streams.]** Progressive LoRA adds a block for each task, protecting earlier blocks while incurring linear capacity growth: https://aclanthology.org/2025.findings-acl.143/ **[Primary Findings ACL 2025 paper; evaluated task sequences and growing adapter capacity.]** PaRSP reserves sparse task regions and capacity on conventional benchmarks, but it does not establish unbounded capacity or production economics: https://aclanthology.org/2026.acl-long.1244/ **[Primary ACL 2026 paper; conventional benchmark scope.]**

Temporal retrieval has direct comparative support in one trusted-knowledge-base setting. Chronos, a temporal event-graph approach, outperformed several tested editors under continuous knowledge drift; the result depends on access to a trusted temporal knowledge base and does not prove that retrieval universally dominates learning: https://aclanthology.org/2026.findings-acl.546/ **[Primary Findings ACL 2026 paper; trusted temporal-KB setting and evaluated editors.]**

Knowledge editing can make bounded factual changes, but long sequences remain problematic for evaluated editors. WikiBigEdit reports degradation across long knowledge-edit sequences; the result applies to the tested editors and models, not every present or future editing method: https://arxiv.org/abs/2503.05683 **[Primary 2025 preprint; finite large-scale editing benchmark.]**

Sequential weight writes can also fail behaviorally despite apparent acquisition. A single-author study using invented facts and tested Qwen3 procedures reported 1% bare-statement retention versus 46% retention with diverse restatements after 20 subsequent writes, while also using intrusion and prompt-recovery diagnostics to distinguish access from erasure: https://arxiv.org/abs/2607.11020 **[Primary 2026 preprint; single family, invented facts, specific procedures. The percentages are not general base rates.]**

### 2.2 What has not been demonstrated

The reviewed public corpus does not demonstrate an indefinitely learning frontier system that simultaneously offers:

- durable acquisition across facts, procedures, preferences, agent experience, and policies;
- bounded compute and persistent-state growth;
- retained safety and calibration;
- robust provenance and tenant isolation;
- poisoning resistance;
- derivative-aware deletion;
- coherent rollback of the whole deployable system;
- superiority over temporal retrieval or periodic rebuilding after matched lifecycle costing.

This is an absence claim about publicly documented systems in the reviewed literature. It is not evidence that no private system exists.

No universal ordering has been validated among replay, regularization, adapters, sparse updates, expansion, editing, policy optimization, or dense tuning. Cross-paper rankings are especially unsafe because studies differ in model family, stream type, task identity, replay legality, compute, persistent storage, evaluation checkpoint, and lifecycle accounting.

Plasticity-loss evidence should also remain scoped. A 2026 study observed plasticity loss in stationary and continual multilingual GPT-style training and reported sublinear onset scaling, but tested only models with 5 million to 314 million non-embedding parameters and a narrow probe: https://arxiv.org/abs/2606.24752 **[Primary preprint; 5M–314M non-embedding-parameter scope. Frontier extrapolation is unverified.]**

### 2.3 Why measurement is currently stronger than mechanism ranking

The most reliable cross-study conclusion is not that one substrate wins. It is that common metrics can diverge:

- loss can improve while free-form recall remains absent: https://arxiv.org/abs/2607.00368 **[Primary preprint; controlled nonce-fact diagnostic];**
- apparent forgetting can remain recoverable: https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf **[Primary ICLR 2025 paper; controlled and partly synthetic diagnostic];**
- answer accuracy can remain stable while grounding changes during continual multimodal adaptation: https://arxiv.org/abs/2607.02020 **[Primary 2026 preprint; multimodal benchmark scope];**
- calibration coverage can deteriorate more sharply than accuracy in classification- and multiple-choice-heavy lifelong fine-tuning protocols: https://arxiv.org/abs/2604.23987 **[Primary 2026 preprint; classification/MCQ-heavy scope];**
- memory-system rankings can reverse when controls and hidden confounds change: https://arxiv.org/abs/2606.29914 **[Primary single-author preprint; LongMemEval-S, 500-example benchmark-specific analysis.]**

These findings justify trajectory-native evaluation. They do not justify pooling their numerical results into a universal threshold or composite score.

---

## 3. Six-question synthesis

### Question 1: What should count as continual learning?

The operational answer is substrate-neutral but persistence-sensitive.

A system qualifies as continually adapting when an authorized state mutation caused by an ordered experience stream persists beyond the request and yields reproducible held-out benefit over matched controls. The state may be parametric or external, but the claim must name which. Request-local context is not durable learning. Persistent memory may count as system-level adaptation, but it must not be represented as weight learning.

Every claim should disclose:

- the changed substrate and complete signed manifest;
- stream order, boundaries, and task-identity assumptions;
- experience trust and admission status;
- valid-time and transaction-time semantics;
- retention, transfer, recovery, and reversibility;
- training, inference, and persistent-state budgets;
- safety, privacy, deletion, and rollback obligations.

**Decision:** Adopt the two-label taxonomy. Reject weights-only definitions and reject any definition broad enough to count ordinary request context as durable learning.

### Question 2: How should plasticity, forgetting, and interference be controlled?

Plasticity should be tested through a **constraint-keyed update service**, not presented as a mechanism leaderboard. This selector is an unvalidated policy hypothesis: no accepted study compares it with the strong fixed policies in the matrix, so it enters F4 as an explicit auditable arm rather than a recommended winner.

The service should begin with an immutable base checkpoint, quarantined candidate experience, lawful provenance-bearing replay, revocable adapters or protected sparse regions where appropriate, a capacity and routing registry, and a release controller. It should be able to select among:

- no durable update;
- external versioned state;
- modular or adapter update;
- sparse protected update;
- offline dense consolidation.

Replay should be retained as the lawful-retention reference arm, not declared the universal winner. A replay sampling rate does not disclose or bound the retained corpus. A 2025 replay study evaluated five-language continual pretraining with Llama-family models and 100 billion tokens per language, but did not establish a replay-buffer-size bound: https://arxiv.org/abs/2508.01908 **[Primary preprint; five-language continual-pretraining protocol, storage bound absent.]**

Regularization should likewise remain scoped. EWC has a narrow positive result in full-parameter Gemma 2 English-to-Lithuanian adaptation, but that technical report covers one language pair and one Fisher-estimation protocol: https://arxiv.org/abs/2505.05946 **[Primary technical report/preprint; bounded language-adaptation scope.]**

Every parameter update should suspend reliance on inherited assurance claims until affected utility, calibration, grounding, privacy, tool policy, tenant isolation, and deletion behavior are re-qualified. This is a risk-control policy derived from dependency analysis, not a universal empirical law.

**Decision:** Prefer the least irreversible adequate mechanism, while acknowledging that this is a safety policy rather than a proven global ordering.

### Question 3: Where should new knowledge and experience live?

A heterogeneous architecture is plausible but unproven. It should be framed as a subtractive hypothesis:

- transient evidence in request or session context;
- mutable facts in versioned temporal retrieval;
- tenant-specific experience in isolated episodic memory;
- recurring procedures in signed skills or revocable adapters;
- repeatedly validated capabilities in sparse modular state;
- broad base-weight consolidation rarely and offline.

Placement should depend on mutability, attribution, reuse, latency, legal retention, deletion obligations, lifecycle cost, and reversibility.

Only some tiers have direct comparative support. Request context is a necessary control. Trusted temporal retrieval has scoped evidence against several tested editors: https://aclanthology.org/2026.findings-acl.546/ **[Primary Findings ACL 2026 paper; trusted temporal-KB scope.]** Persistent feedback memory has one narrow positive result: https://arxiv.org/abs/2607.22157 **[Primary 2026 preprint; single-domain, single-author study.]** General episodic memory, signed skills, sparse modules, and broad consolidation have not each been shown to provide marginal value over their own absence under matched lifecycle costs.

External memory relocates rather than eliminates interference. Retrieval misses, stale or conflicting records, poisoning, tenant leakage, context competition, routing errors, and derivative proliferation become central risks. A work-in-progress study explicitly frames external memory as moving continual-learning interference into the memory system, but its experiments use small environments: https://arxiv.org/abs/2604.27003 **[Primary work in progress; small-environment scope.]**

**Decision:** Do not adopt the hierarchy as standing architecture. Fund a single-site subtractive ablation and delete every tier that cannot justify itself against temporal retrieval and periodic rebuilding.

### Question 4: How should experience be admitted, governed, deleted, and rolled back?

Deployment experience is untrusted evidence, not training data by default. Admission should be the governance atom.

A durable write should pass the following pipeline:

1. capture the event, outcome, actors, tools, source hashes, subject identity, valid time, consent scope, and legal basis;
2. classify tenant, purpose, sensitivity, volatility, retention, and sharing restrictions;
3. quarantine and screen for poisoning, conflict, duplication, privacy exposure, and unverifiable feedback;
4. require corroboration or executable verification before shared promotion;
5. shadow-test utility, calibration, grounding, safety, privacy, and tenant isolation;
6. select the least irreversible adequate substrate;
7. release a signed complete-system manifest through staged deployment;
8. preserve dependency lineage, monitoring, rollback, and qualified deletion receipts.

Provenance supports attribution, not truth. C2PA Technical Specification 2.2 defines provenance assertions and cryptographic bindings but does not establish that asserted content is truthful, consensual, authorized, or harmless: https://spec.c2pa.org/specifications/specifications/2.2/index.html **[Official technical specification; provenance-binding scope.]**

Deletion should be treated as a measured coverage gate under an explicit residual-risk standard. It must consider source records, indexes, embeddings, summaries, caches, traces, replay corpora, adapters, router policies, and consolidated weights. GDPR Article 17 supplies legal erasure grounds and obligations, but its exceptions and application depend on legal role and context: https://eur-lex.europa.eu/eli/reg/2016/679/art_17/oj/eng **[Official consolidated law; context-specific legal application.]**

Behavioral suppression is not causal erasure. In tested methods and attacks, poisoning effects survived machine unlearning: https://proceedings.iclr.cc/paper_files/paper/2025/hash/7e810b2c75d69be186cadd2fe3febeab-Abstract-Conference.html **[Primary ICLR 2025 paper; tested attacks and unlearning methods, not all possible designs.]**

Semantic rollback is valuable but incomplete. ChronoMem implements semantic global rollback and post-exposure recovery with ADK integration; it does not prove exhaustive derivative deletion or whole-system restoration: https://arxiv.org/abs/2607.27773 **[Primary 2026 preprint; implementation evidence, not deletion closure.]**

**Decision:** Halt release on quarantine escape, tenant crossing, untraceable derivatives, persistent poisoning, or incoherent whole-bundle rollback.

### Question 5: How should longitudinal performance and safety be evaluated?

Evaluate a trajectory of complete deployable manifests, not a final checkpoint.

Before each event is learned, test the system prequentially. After each stage, test retrospectively. Measure:

- acquisition and future learning speed;
- forward and backward transfer;
- maximum degradation;
- recoverability and recovery cost;
- calibration, coverage, and abstention;
- grounding and source use;
- temporal consistency and stale-answer rates;
- safety, privacy, tool-policy, and tenant-isolation regressions;
- routing and route-conditioned failures;
- memory conflicts, age, provenance, and poison persistence;
- state growth, compute, latency, energy, and human review;
- deletion and full-bundle rollback drills;
- rejected releases, incidents, and remediation cost.

A metric should be retained only when it reproducibly detects a distinct seeded failure or changes a decision that a simpler protocol misses. Negative metric-ablation results should be published. Comparisons should be Pareto-based; utility must not compensate for failure of safety, privacy, tenant-isolation, or deletion gates.

Standardized and deployment-shaped streams should remain separately reported. Standardized streams support attribution; deployment-shaped streams test external validity. The evidence does not establish a universal pass threshold.

**Decision:** Build a reconstructible multi-harness protocol with hidden evaluation, randomized orders, complete protocol tuples, and governed evaluation logs.

### Question 6: What programme should run from 2026 to 2030?

The programme should fund commensuration before architectural commitment and advance only through conditional gates.

The central research question is not “Which continual-learning method wins?” It is:

> Can a governed placement controller generate reproducible marginal value over strong fixed substrates without creating unacceptable assurance, reversibility, or lifecycle costs?

The mechanism-agnostic protocol proposed in *When Does Continual Learning Require Learning?* evaluates eight methods, but remains a recent preprint rather than a production standard: https://arxiv.org/abs/2607.07847 **[Primary 2026 preprint; mechanism-agnostic protocol and eight evaluated methods.]**

Continual Learning Bench reports that memory does not reliably exceed in-context learning across its stateful domains; it is a young, configuration-specific benchmark and therefore supports skepticism about automatic memory benefit rather than a universal anti-memory conclusion: https://arxiv.org/abs/2606.05661 **[Primary 2026 preprint/benchmark; configuration-specific scope.]**

**Decision:** Build the harness first, run the cheapest decisive ablation next, and condition every later phase on reproduced marginal value and passed assurance gates.

---

## 4. Architecture posture

The recommended near-term architecture posture is conservative:

1. **Keep the base checkpoint immutable during online operation.**
2. **Use versioned temporal retrieval as the provisional engineering default for mutable facts.**
3. **Isolate tenant-specific state.**
4. **Require all durable writes to pass governed admission.**
5. **Use revocable adapters or sparse modules only after demonstrated recurring value.**
6. **Perform dense consolidation rarely, offline, and from reconstructible lineage.**
7. **Roll back the complete deployable bundle, not only one registry alias or memory store.**

Temporal retrieval is the provisional default because it offers correction, attribution, and scoped comparative evidence. It must not be presented as universally superior to periodic rebuilding or every other substrate. Retrieval introduces its own attack surface: AgentPoison demonstrated poisoning of agent memory or knowledge bases under a targeted threat model: https://arxiv.org/abs/2407.12784 **[Primary 2024 preprint; targeted memory/RAG poisoning scope.]** PoisonedRAG likewise evaluated targeted retrieval poisoning at scale, but its findings depend on the specified attacker and retrieval assumptions: https://arxiv.org/abs/2402.07867 **[Primary 2024 preprint; targeted threat model.]**

Promotion into a more persistent substrate should require:

- repeated validated reuse;
- shadow-evaluation benefit;
- complete provenance and derivative lineage;
- lifecycle savings over continued retrieval;
- a passed revocation drill;
- no material assurance regression.

Contradiction, poisoning, declining reuse, routing failure, or policy regression should trigger quarantine, demotion, retirement, or rebuild.

---

## 5. Governance and safety posture

Continual adaptation converts every durable update into a release-management event. Governance must therefore attach to state transitions rather than only to model versions.

Each transition should have:

- an owner and authorization basis;
- source and subject lineage;
- tenant and purpose constraints;
- an admission decision;
- candidate and released manifests;
- affected-dependency analysis;
- evaluation evidence;
- rollback instructions;
- deletion coverage;
- residual-risk disclosure.

Safety, privacy, tenant isolation, poisoning resistance, deletion coverage, and coherent rollback are **non-compensable gates**. Higher task utility cannot offset failure in these areas.

This posture aligns with the NIST AI Risk Management Framework Generative AI Profile’s emphasis on provenance, testing, and incident management, while recognizing that the profile is voluntary guidance rather than a certification of a particular system: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence **[Official NIST guidance; voluntary risk-management framework.]**

European Union general-purpose AI obligations include documentation, copyright-policy, training-content-summary, and systemic-risk provisions, but their applicability and implementation are context-specific: https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act **[Official European Commission guidance; legal applicability requires contextual analysis.]**

An issued deletion receipt should state what was:

- removed;
- rebuilt;
- disabled;
- made inaccessible;
- retained as residual risk.

A receipt must fail if a known derivative can still reliably recover or activate the target. No technical probe should be represented as automatic proof of legal erasure.

---

## 6. The 2026–2030 programme

### 2026 H2: Single-site subtractive gate

Build only the minimum instrumented hierarchy required for testing. Predeclare the tier expected to be load-bearing. Remove episodic memory, signed skills or adapters, sparse modules, and consolidation one at a time. Compare every variant with temporal retrieval and governed periodic rebuilding under common ceilings for inference budget and persistent state, while reporting actual utilization.

Deliverables:

- complete manifests;
- randomized stream orders;
- reset and frozen full-context controls;
- cost and incident instrumentation;
- deletion and rollback drills;
- preregistered kill conditions.

### 2026–2027: Reference infrastructure and robustness

Develop open mixed streams, hidden evaluation, versioned-memory interfaces, derivative graphs, deletion ledgers, and metric-retention rules.

Same-team runs on a second model family or second harness should count as robustness checks. Any recent claim that becomes load-bearing for architecture or funding should be reproduced by an independent team or site.

### 2027–2028: Mechanism and placement tournaments

Compare temporal retrieval, feedback memory, lawful replay, regularization, protected adapters, sparse updates, expansion, editing, dense tuning, periodic retraining, and placement controllers.

Match resources where feasible and disclose separately:

- training compute;
- inference compute;
- persistent bytes;
- routing and serving costs;
- retirement and rebuild costs;
- evaluation and human-review costs;
- deletion and incident costs.

No universal winner should be inferred from incompatible protocols.

### 2028–2029: Reversible consolidation

Only if prior stages show marginal value, test rebuildable consolidation epochs, revocable sparse consolidation, module retirement, poison recovery, whole-bundle rollback, and measured deletion coverage.

The decisive comparison remains simpler fixed substrates. Consolidation should stop if its recurring retrieval savings do not exceed its assurance and irreversibility costs.

### 2029–2030: Governed autonomy research

Permit agents to **propose**, but not unilaterally release, durable writes. Require authorization, abstention, review, canaries, rollback, and independent safety gates.

This phase is a research objective, not a prediction that governed autonomous continual learning will be production-mature by 2030.

---

## 7. Conditional Go/No-Go framework

### Go conditions

Advance a tier or mechanism only when it demonstrates:

- reproducible held-out trajectory benefit;
- marginal value over its own absence;
- advantage over strong fixed-substrate controls;
- matched or transparently normalized resources;
- acceptable calibration and grounding;
- retained safety and tenant isolation;
- complete lineage;
- passed poison, deletion, and rollback drills;
- acceptable total lifecycle cost;
- independent reproduction when the claim becomes load-bearing.

### No-Go conditions

Stop or hold investment when:

- a simpler fixed substrate repeatedly matches performance and assurance;
- removing a proposed tier causes no reproducible loss;
- benefit disappears under randomized stream order;
- rankings reverse across credible harnesses without an explained scope difference;
- state growth or routing cost is unbounded;
- poisoning survives the declared repair path;
- deletion receipts omit known derivatives;
- rollback restores only part of the deployable bundle;
- safety, privacy, or tenant-isolation gates fail;
- independent teams cannot reproduce load-bearing recent results.

The present decision is therefore:

- **Go:** measurement infrastructure, governed admission, complete manifests, lineage, rollback drills, and the single-site subtraction gate.
- **Conditional Go:** independent reproduction and matched-resource tournaments for tiers surviving subtraction.
- **No-Go:** production autonomous shared-weight mutation, permanent heterogeneous architecture, and consolidation infrastructure before evidence of marginal value.

---

## 8. Limitations

This whitepaper is bounded by the public evidence available through 31 July 2026. Recent 2026 preprints are young, generally unreplicated, and often configuration-specific. Proceedings papers, workshop papers, technical reports, preprints, official standards, and official legal guidance do not have interchangeable evidentiary status.

The evidence spans continual pretraining, factual editing, memory systems, agents, multimodal adaptation, policy optimization, calibration, safety alignment, and unlearning. Their numerical results are not directly commensurable without matching model, stream, task identity, metric, budget, baseline, checkpoint, and source status.

The proposed architecture is a falsifiable risk-control hypothesis, not an established design. The programme sequence is more defensible than any post-2028 economic forecast. Production-scale deletion economics, acceptable residual influence, adaptive-attack resilience, ownership, adoption, and legal interpretation remain unresolved.

Finally, the five-contender synthesis reflects repeated reasoning over a shared evidence pack. It provides robustness against individual analytical error but no additional experimental independence.

---

## 9. Prohibited claims

The following claims must not appear in executive, technical, regulatory, or marketing materials:

1. Five shared-pack analyses constitute independent consensus, convergence, or replication.
2. Any universal ranking of replay, regularization, adapters, sparse updates, expansion, editing, policy optimization, or dense tuning.
3. Continual learning necessarily requires online base-weight mutation.
4. Request-local context or static retrieval automatically constitutes durable learning.
5. Computational similarity between context and an implicit update implies equal persistence, provenance, deletion, or governance.
6. Replay rate establishes a bounded replay corpus.
7. Replay, orthogonality, modularity, scale, routing, or expansion guarantees no forgetting.
8. Plasticity-loss findings in 5M–314M non-embedding-parameter models establish frontier-model behavior.
9. Editing is either an indefinite factual-update solution or categorically useless.
10. The heterogeneous hierarchy is established, optimal, or superior to temporal retrieval or periodic rebuilding.
11. External memory eliminates interference, is intrinsically safe, or is fully reversible.
12. Deleting a source record proves derivative-aware deletion closure.
13. Deletion is complete, perfect, guaranteed, certified, or production-proven.
14. Behavioral unavailability proves causal erasure from weights.
15. Semantic-memory rollback or registry reassignment guarantees whole-system rollback.
16. Provenance signatures establish truth, consent, authorization, or harmlessness.
17. Legal erasure and technical residual-influence testing are interchangeable.
18. Stable accuracy proves retained grounding, calibration, safety, or representation integrity.
19. A recent single-study percentage is a universal rate, threshold, or production expectation.
20. TiC-LM establishes general capability, safety, or production parity with retraining.
21. Classification-era, image, linear-model, CIFAR, or MNIST findings directly guarantee LLM behavior.
22. Open-source components constitute an integrated production continual-learning system.
23. Governed autonomous continual learning will be production-ready by a fixed date.
24. No private continual-learning system exists.
25. Author-asserted historical “first” claims establish priority.
26. Preprints, workshops, proceedings papers, technical reports, official standards, and laws have interchangeable evidence status.

---

## Conclusion

Continual learning is strategically important, but the evidence does not support architectural commitment or autonomous production mutation. The defensible opportunity is to build the measurement and governance machinery that can determine whether a more complex learning system is actually needed.

Leadership should fund the harness, admission pipeline, lineage system, and cheapest decisive subtraction experiment. It should require every proposed state tier to earn its place against temporal retrieval and periodic rebuilding. It should treat all updates as governed transactions, all experience as untrusted until admitted, and all safety, privacy, tenant-isolation, deletion, and rollback requirements as non-compensable.

The programme succeeds even if the hierarchy fails. A negative result would prevent expensive lock-in and establish that simpler, more reversible systems are sufficient. A positive result would provide the first disciplined basis for advancing from state management to architecture and, only then, to optimization.