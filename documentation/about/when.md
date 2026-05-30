# When Should You Deploy the Meta-Innovation Harness?

## The Fundamental Criterion

Deploy the Meta-Innovation Harness when your question is **genuinely
multi-dimensional** — when no single disciplinary lens can provide a
satisfactory answer, and when the quality of the insight matters enough
to justify structured, multi-expert collaboration.

This is a higher bar than "hard question." It is: *a question where the
full answer requires simultaneously holding biology, physics, social science,
and radical creative thinking — and where stitching these perspectives
together by asking each expert sequentially would produce a lesser result
than having them actively inform each other's re-derivation.*

## When to Use Each Workflow

The meta-skill handles this diagnosis automatically. But understanding
the selection logic helps you frame your goal effectively.

### Use the Cross-Pollination Engine (Workflow 01) when:
- You have 2–6 well-defined research questions
- You want the purest application of the blanking + leaking method
- You need deep multi-domain exploration without time pressure
- This is your first run and you want to see the core method clearly

**Time investment**: 60–180 minutes depending on question depth

### Use the TSM-CI Kitchen Table (Workflow 02) when:
- You need to build a coherent, integrated theory rather than just collect perspectives
- The question requires experts to acknowledge each other's prior statements explicitly
- You want to simulate a structured academic seminar or design review

**Time investment**: 90–240 minutes

### Use the AI-Delphi Swarm Hackathon (Workflow 03) when:
- You need convergence on a specific, testable hypothesis or decision
- You have a concrete proposal to stress-test
- You want to identify the strongest objections and most robust responses
- You are making a high-stakes decision with a time deadline

**Time investment**: 45–90 minutes (compressed Delphi rounds)

### Use the Group Flow Improv Lab (Workflow 04) when:
- You are stuck in safe-answer territory and need creative shock therapy
- The problem has a design or creative dimension (product, system, policy)
- You want to break out of consensus thinking deliberately
- You are open to genuinely surprising, potentially uncomfortable insights

**Time investment**: 30–60 minutes

### Use the Ideaflow Flash-Team (Workflow 05) when:
- You have a hard time budget (30–60 minutes maximum)
- You want maximum surface area of ideas, not deep exploration of any one
- You are at the beginning of a project and need to map the possibility space
- You are running ideation for a workshop, sprint, or pitch preparation

**Time investment**: 30–60 minutes (strictly time-boxed)

### Use the Hybrid Quarterly Review (Workflow 06) when:
- You have prior session outputs to re-evaluate against new evidence
- You are at a strategic inflection point (funding decision, pivot, annual review)
- You want to close the feedback loop between sprint thinking and long-horizon strategy
- It has been weeks or months since your last deep session on this topic

**Time investment**: 120–360 minutes (long-horizon review)

### Use the Meta-Skill Selector (Workflow 07) when:
- You are not sure which workflow is right (use this by default)
- Your goal is complex and multi-part

### Use the Harness Generator (Workflow 08) when:
- None of the six workflows fits your use case
- You want to design a new harness for a novel research context
- You want to critique and improve an existing harness design

---

## When NOT to Deploy

The harness is over-engineered for:

- **Simple factual questions** — a single LLM query is sufficient.
- **Single-domain questions** — if the answer is purely within physics,
  use a physics expert directly.
- **Time-sensitive operational decisions** — the harness is optimised for
  insight quality, not speed. For real-time decisions, use simpler tools.
- **Confidential research** — since all four LLMs receive prompts through
  their public browser interfaces, the harness is not appropriate for
  proprietary or classified research without careful information hygiene.

---

## Temporal Structure of a Session

### Inner Loop (minutes to tens of minutes per rotation)

```
For each question Q_i in the question set:
  For each expert E_j in {Claude, GPT, Gemini, Grok}:
    1. Blank E_j's prior answer to Q_i from their context
    2. Inject current-best answers for all Q_k ≠ i into E_j's context
    3. Request fresh first-principles derivation from E_j's fixed lens
    4. Record E_j's new answer to Q_i
  End for
  Orchestrator synthesises E_j responses → new "current-best" for Q_i
End for
```

### Outer Loop (one to several passes)

```
While convergence criterion not met AND time budget not exhausted:
  Run inner loop
  Orchestrator evaluates: has the quality of insight improved materially?
  If yes: continue to next outer loop pass
  If no, or time exhausted: finalise and archive
End while
```

### Post-Session (minutes)

- Orchestrator writes full Markdown transcript to `examples/`
- Orchestrator generates summary: key insights, open questions, next steps
- User reviews and optionally initiates a follow-up session

---

## Scale of Ambition

The harness has been designed to scale from:

- **30-minute flash sprint** (Ideaflow Flash-Team): a single question, one
  inner loop pass, rapid synthesis
- **Half-day deep dive** (Cross-Pollination Engine, 3+ outer loops): a full
  question set, multiple synthesis iterations, rich archives
- **Quarterly strategic review** (Hybrid Quarterly Review): multi-hour
  structured review incorporating historical session outputs

The meta-skill automatically calibrates the number of inner loop rotations
and outer loop passes to the available time budget.

---

*See also: [what.md](what.md) · [how.md](how.md) · [where.md](where.md)*
