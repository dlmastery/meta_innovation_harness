# Shared Recipe: Trace Capture & Sanitization (PRE-PUBLISH GATE)

Because the harness drives the operator's **personal, logged-in** accounts in a real browser, raw
captures routinely contain private data (the operator's name/email, location, and — in page-text
dumps — unrelated private chat titles, history sidebars, account menus). **Nothing is committed to a
public repo until it passes this gate.** This recipe is invoked at every archival step of every
workflow, right before `git add`.

## A. Gather ALL traces (completeness)

For each expert interaction, capture, in order of priority:

1. **Final answer** — verbatim (the substance). *(Always.)*
2. **Visible reasoning / thinking trace** — if the UI exposes it (e.g. a "Thoughts"/"Show thinking"
   panel). Capture it into a `*-thinking.md` sibling, or a `## Reasoning trace` section, clearly
   labelled as model-exposed thinking. If it is *not* exposed (hidden chain-of-thought), record the
   metadata only: e.g. `thinking: "hidden; reported 'Thought for 6m 30s'"`.
3. **Sources / citations** — if the model lists them (e.g. Grok "183 sources", ChatGPT inline
   cites). Capture the list (or count + the ones shown) into the answer file's front-matter/footer.
4. **Provenance metadata** — model, mode, tabId, timestamps sent/received, latency.
5. **Optional visual** — a screenshot of the rendered answer (`assets/…png`), sanitized of any
   surrounding sidebar/account chrome before saving.

> A capture is "complete" when the final answer + reasoning-availability + sources + provenance are
> all recorded. Don't silently drop the thinking/sources just because they're awkward to extract.

## B. Sanitize (redaction) — the hard gate

Before publishing, scrub every file destined for the public repo. Replace, never expose:

| Class | Examples seen in this project | Replacement |
|---|---|---|
| Operator identity | first/last name, username, handle | `[operator]` / `[redacted]` |
| Contact | email, phone | `[redacted]` |
| Location | city/region inferred by a model (e.g. an auto-titled chat) | drop it |
| Account chrome | history-sidebar chat titles, project names, billing/plan, menus from `get_page_text` dumps | **never transcribe** — copy only the answer body |
| Secrets | tokens, cookies, API keys, URLs with creds | `[redacted]` (and rotate if real) |
| Third-party PII | names/emails of other people surfaced in any pane | `[redacted]` |

**Procedure**
1. Maintain a redaction list for the run (the operator's known identifiers).
2. Run an automated scan over all staged files (grep the identifier list + regexes for email,
   phone, common token prefixes).
3. Replace matches with the placeholders above; re-scan until the scan is clean.
4. Only then `git add` / commit / push.

**Verification scan (must return zero before publish):**
```bash
grep -rIinE '<operator-name>|<username>|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}|sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|gho_[A-Za-z0-9]{20,}' \
  --exclude-dir=.git .
```

## C. Important limitation — git history

Sanitizing a file in a new commit does **not** remove the identifier from earlier commits; it is
still recoverable from history on a public repo. If true erasure is required, either (a) rewrite
history (`git filter-repo` / BFG) and force-push, or (b) for a brand-new repo with few collaborators,
recreate the repo from a squashed, already-sanitized snapshot. Always flag this to the operator —
redaction-going-forward ≠ erasure-from-history.

## D. Where this plugs in
- Referenced by [`expert-setup.md`](expert-setup.md) (capture) and by every workflow's **archival
  gate** in its verification harness.
- The meta-harness and meta-meta-harness MUST run section B's scan as a blocking gate before any
  push to a public remote.
