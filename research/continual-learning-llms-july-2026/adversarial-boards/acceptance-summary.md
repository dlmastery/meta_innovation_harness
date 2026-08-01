# Phase-2 Board Acceptance Summary

**Acceptance scope:** Acceptance certifies structural completeness, provenance preservation, and audit eligibility only. Board-level claims and recommendations remain adversarial inputs and are not controller-endorsed evidence or final conclusions. Byte-identical accepted artifacts are preserved under [`raw-accepted/`](raw-accepted/).

All five heterogeneous adversarial-board reports pass binding structural validation: Q1–Q6 coverage, direct locators, six confidence scores, six recommendations, six decisive experiments and stop conditions, exactly 18 consolidated risks with exactly three per question, unsupported-claim review, unacceptable pathways, reversal evidence, and privacy/poisoning/provenance/deletion/rollback/safety coverage.

| Board | Words | Risks | Accepted artifact | SHA-256 |
|---|---:|---:|---|---|
| Claude | 10118 | 18 | `final/claude.board.attempt3.md` | `9bf9f7fa52e2dfe9590c83c1861375fdcbdbc01329655aac789c6a60ad05c525` |
| Codex | 6165 | 18 | `final/codex.board.accepted.md` | `0ec0ea3ce00c610258ec9a817f2ed16b4184635e5c5a7fc51d420c67836d946b` |
| Grok | 5717 | 18 | `final/grok.board.md` | `88fdbc109619e2ae80f397431d6410c3714af2ba331d26d62b7b11eac5e26bad` |
| OpenCode | 5073 | 18 | `final/opencode.board.md` | `2e96fc9d39ae815d06eae7427038b0f080c75f78b085b5470d80682fe242c8bd` |
| Antigravity | 5521 | 18 | `final/antigravity.board.md` | `b6f36a43dbe682c8fd84db6ad08b37fde44edbd46e894228c63cf272abbe1840` |

Normalization disclosures: Codex preserved its six question-local risk tables and received a controller-generated consolidated 18-row table with no semantic changes. Antigravity received one controller correction changing consolidated row R2 from Q2 to Q1 to match its Q1-local risk placement and restore the required three-per-question mapping. Claude attempts 1–2 were retained; attempt 3 is the accepted compressed report. OpenCode attempts 1–2 were killed after zero/substantively absent output; attempt 3 used a compact controller packet and is accepted. Raw outputs remain preserved.
