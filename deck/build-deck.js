/* ============================================================================
   Meta-Innovation Harness — 100-slide pitch deck generator (pptxgenjs)
   Theme mirrors docs/styles.css: void #080b10, amber #f5a623, cyan #00d4ff.
   Run:  NODE_PATH=$(npm root -g) node build-deck.js
   ============================================================================ */
const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.defineLayout({ name: "W", width: 13.333, height: 7.5 });
pptx.layout = "W";
pptx.author = "Triple-PhD MIT Genius (Orchestrator)";
pptx.company = "dlmastery · Meta-Innovation Harness";
pptx.title = "Meta-Innovation Harness — Pitch Deck";

/* ---- palette --------------------------------------------------------------- */
const C = {
  void:   "080B10",
  void2:  "0D1117",
  void3:  "111820",
  panel:  "131B25",
  panel2: "16202C",
  border: "1E2D3D",
  borderHi:"2A4060",
  amber:  "F5A623",
  amberDim:"C07F10",
  cyan:   "00D4FF",
  cyanDim:"0099BB",
  ice:    "E8F4F8",
  bone:   "C8BFAA",
  mist:   "7A8FA0",
  text:   "D4DDE6",
  textDim:"8899AA",
  success:"22C55E",
  white:  "FFFFFF",
};
const FD = "Syne";          // display (falls back gracefully)
const FM = "IBM Plex Mono"; // mono / body
const W = 13.333, H = 7.5;

/* expert accent colors */
const EX = {
  claude:  C.amber,
  chatgpt: C.cyan,
  gemini:  "8B9CFF",
  grok:    "FF6B9D",
};

/* ---- low-level helpers ----------------------------------------------------- */
function bg(s, color = C.void) { s.background = { color }; }

// subtle deep-space backdrop: void + faint corner glows + grid ticks
function backdrop(s, opts = {}) {
  bg(s, opts.color || C.void);
  // corner glow blocks (very low opacity via transparency)
  s.addShape("rect", { x: -1.5, y: -1.5, w: 5, h: 5, fill: { color: opts.glow1 || C.cyanDim, transparency: 93 }, line: { type: "none" }, rotate: 12 });
  s.addShape("rect", { x: W - 3.2, y: H - 3.4, w: 5, h: 5, fill: { color: opts.glow2 || C.amberDim, transparency: 94 }, line: { type: "none" }, rotate: 12 });
}

// top hairline + slide number + running footer
function chrome(s, n, act) {
  s.addShape("rect", { x: 0, y: 0, w: W, h: 0.06, fill: { color: C.amber }, line: { type: "none" } });
  s.addShape("rect", { x: 0, y: 0.06, w: W * 0.5, h: 0.02, fill: { color: C.cyan }, line: { type: "none" } });
  s.addText("META-INNOVATION HARNESS", {
    x: 0.55, y: 7.04, w: 6, h: 0.3, fontFace: FM, fontSize: 8, color: C.textDim,
    charSpacing: 2, align: "left", valign: "middle",
  });
  s.addText(act || "", {
    x: 5.5, y: 7.04, w: 5.5, h: 0.3, fontFace: FM, fontSize: 8, color: C.mist,
    charSpacing: 2, align: "center", valign: "middle",
  });
  s.addText(`${String(n).padStart(3, "0")} / 100`, {
    x: W - 2.05, y: 7.04, w: 1.5, h: 0.3, fontFace: FM, fontSize: 8, color: C.amber,
    charSpacing: 1, align: "right", valign: "middle",
  });
}

// eyebrow label (mono, spaced, amber) + title
function header(s, eyebrow, title, opts = {}) {
  const tx = opts.x || 0.7;
  const tw = opts.w || (W - 2 * (opts.x || 0.7));
  if (eyebrow) {
    s.addText(eyebrow.toUpperCase(), {
      x: tx, y: 0.5, w: tw, h: 0.32, fontFace: FM, fontSize: 11, color: C.cyan,
      charSpacing: 3, bold: false, align: "left", valign: "middle",
    });
  }
  s.addText(title, {
    x: tx, y: 0.84, w: tw, h: opts.th || 1.0, fontFace: FD, fontSize: opts.ts || 32,
    color: opts.tc || C.ice, bold: true, align: "left", valign: "top",
    lineSpacingMultiple: 0.98,
  });
}

// a soft card / panel
function card(s, x, y, w, h, opts = {}) {
  s.addShape("roundRect", {
    x, y, w, h, rectRadius: opts.r ?? 0.08,
    fill: { color: opts.fill || C.panel },
    line: { color: opts.line || C.border, width: opts.lw ?? 1 },
  });
  if (opts.accent) {
    s.addShape("rect", { x, y, w: 0.07, h, fill: { color: opts.accent }, line: { type: "none" } });
  }
}

// large stat callout
function stat(s, x, y, w, value, label, color = C.amber) {
  s.addText(value, {
    x, y, w, h: 1.0, fontFace: FD, fontSize: 54, bold: true, color,
    align: "center", valign: "middle",
  });
  s.addText(label.toUpperCase(), {
    x, y: y + 0.95, w, h: 0.4, fontFace: FM, fontSize: 10, color: C.textDim,
    charSpacing: 2, align: "center", valign: "top",
  });
}

// bullet list inside a region (left aligned, mono)
function bullets(s, items, x, y, w, opts = {}) {
  s.addText(
    items.map((t) => ({
      text: t,
      options: {
        bullet: { code: "2022", indent: 18 },
        color: opts.color || C.text, fontFace: FM, fontSize: opts.fs || 13,
        paraSpaceAfter: opts.gap ?? 9, breakLine: true,
      },
    })),
    { x, y, w, h: opts.h || 4.0, valign: "top", align: "left", lineSpacingMultiple: 1.04 }
  );
}

// section divider slide
function divider(n, act, title, sub) {
  const s = pptx.addSlide();
  bg(s, C.void);
  // big tinted band
  s.addShape("rect", { x: 0, y: 0, w: W, h: H, fill: { color: C.void }, line: { type: "none" } });
  s.addShape("rect", { x: 0, y: 2.55, w: W, h: 2.4, fill: { color: C.void2 }, line: { type: "none" } });
  s.addShape("rect", { x: 0, y: 2.55, w: W, h: 0.04, fill: { color: C.amber }, line: { type: "none" } });
  s.addShape("rect", { x: 0, y: 4.91, w: W, h: 0.04, fill: { color: C.cyan }, line: { type: "none" } });
  // oversize act number watermark
  s.addText(act.replace("ACT ", ""), {
    x: 8.7, y: 0.2, w: 4.4, h: 7, fontFace: FD, fontSize: 200, bold: true,
    color: C.void3, align: "right", valign: "middle",
  });
  s.addText(act, {
    x: 0.8, y: 2.78, w: 11, h: 0.4, fontFace: FM, fontSize: 13, color: C.cyan,
    charSpacing: 4, align: "left", valign: "middle",
  });
  s.addText(title, {
    x: 0.8, y: 3.15, w: 11.5, h: 1.4, fontFace: FD, fontSize: 52, bold: true,
    color: C.ice, align: "left", valign: "middle",
  });
  if (sub) s.addText(sub, {
    x: 0.82, y: 5.15, w: 10.5, h: 1.2, fontFace: FM, fontSize: 14, color: C.textDim,
    align: "left", valign: "top", lineSpacingMultiple: 1.15,
  });
  chrome(s, n, act);
  return s;
}

// standard content slide scaffold
function content(n, eyebrow, title, act, opts = {}) {
  const s = pptx.addSlide();
  backdrop(s, opts);
  chrome(s, n, act);
  header(s, eyebrow, title, opts);
  return s;
}

function notes(s, t) { if (t) s.addNotes(t); }

/* small icon-in-circle */
function iconCircle(s, x, y, d, glyph, color) {
  s.addShape("ellipse", { x, y, w: d, h: d, fill: { color: C.void3 }, line: { color, width: 1.5 } });
  s.addText(glyph, { x, y, w: d, h: d, fontFace: FD, fontSize: 18, bold: true, color, align: "center", valign: "middle" });
}

/* ============================================================================
   ACT 0 — TITLE & PERSONA (1–3)
   ============================================================================ */

// 1 — TITLE
(() => {
  const s = pptx.addSlide();
  bg(s, C.void);
  s.addShape("rect", { x: -1.5, y: -1, w: 6, h: 6, fill: { color: C.cyanDim, transparency: 90 }, line: { type: "none" }, rotate: 14 });
  s.addShape("rect", { x: W - 4, y: H - 4, w: 6, h: 6, fill: { color: C.amberDim, transparency: 91 }, line: { type: "none" }, rotate: 14 });
  s.addShape("rect", { x: 0, y: 0, w: W, h: 0.08, fill: { color: C.amber }, line: { type: "none" } });
  s.addShape("rect", { x: 0, y: 0.08, w: W * 0.55, h: 0.025, fill: { color: C.cyan }, line: { type: "none" } });

  s.addText("v1.0  ·  MIT LICENSE  ·  dlmastery  ·  CLAUDE CODE SKILL SUITE", {
    x: 0.8, y: 1.35, w: 11.7, h: 0.4, fontFace: FM, fontSize: 12, color: C.cyan,
    charSpacing: 3, align: "left",
  });
  s.addText([
    { text: "Meta-Innovation\n", options: { color: C.ice } },
    { text: "Harness", options: { color: C.amber, italic: false } },
  ], {
    x: 0.78, y: 1.85, w: 12, h: 2.7, fontFace: FD, fontSize: 88, bold: true,
    align: "left", valign: "top", lineSpacingMultiple: 0.92,
  });
  s.addText("Four frontier AIs.  Six innovation workflows.  One orchestrating mind.", {
    x: 0.82, y: 4.55, w: 11.6, h: 0.5, fontFace: FD, fontSize: 21, bold: true, color: C.text,
    align: "left",
  });
  s.addText("A novel blanking + leaking cross-pollination method that engineers Group Genius on any research goal.", {
    x: 0.82, y: 5.12, w: 11.4, h: 0.7, fontFace: FM, fontSize: 13.5, color: C.textDim,
    align: "left", lineSpacingMultiple: 1.2,
  });
  // mini stat strip
  const strip = [["4", "FRONTIER AIs"], ["6", "WORKFLOWS"], ["8", "SKILLS"], ["∞", "RESEARCH GOALS"]];
  strip.forEach((d, i) => {
    const x = 0.82 + i * 2.05;
    s.addText(d[0], { x, y: 5.95, w: 1.0, h: 0.55, fontFace: FD, fontSize: 30, bold: true, color: C.amber, align: "left", valign: "middle" });
    s.addText(d[1], { x: x + 0.95, y: 5.95, w: 1.1, h: 0.55, fontFace: FM, fontSize: 8.5, color: C.textDim, charSpacing: 1, align: "left", valign: "middle" });
  });
  chrome(s, 1, "TITLE");
  notes(s, "Meta-Innovation Harness. Four frontier AIs, six innovation workflows, one orchestrating mind. The core method is blanking + leaking cross-pollination, engineering Group Genius on any research goal. Source: README.md.");
})();

// 2 — PERSONA
(() => {
  const s = content(2, "Operating Stance · P0", "The Persona", "ACT 0 · TITLE");
  card(s, 0.7, 2.0, 7.4, 4.5, { accent: C.amber, fill: C.void2 });
  s.addText("“Triple-PhD MIT Genius — Elite of the Elite Researcher,\nBest of the Best on Planet Earth.”", {
    x: 1.0, y: 2.3, w: 6.8, h: 1.4, fontFace: FD, fontSize: 22, bold: true, color: C.ice,
    italic: true, align: "left", valign: "top", lineSpacingMultiple: 1.0,
  });
  s.addText("Drawing wisdom from ALL fields known to mankind — fusing them into breakthroughs no single-discipline mind could reach.", {
    x: 1.0, y: 3.75, w: 6.8, h: 0.9, fontFace: FM, fontSize: 13, color: C.text, lineSpacingMultiple: 1.2,
  });
  s.addText("NOT VANITY — AN EPISTEMIC CONTRACT", {
    x: 1.0, y: 4.75, w: 6.8, h: 0.35, fontFace: FM, fontSize: 11, color: C.cyan, charSpacing: 2,
  });
  bullets(s, [
    "Sets the quality floor for every prompt",
    "Widens the breadth of disciplinary reference",
    "Gives courage to pursue genuinely radical ideas",
    "Sharpens the ruthlessness of self-critique",
  ], 1.0, 5.15, 6.8, { fs: 12.5, gap: 5 });
  // right rail
  card(s, 8.4, 2.0, 4.2, 4.5, { fill: C.panel, line: C.borderHi });
  s.addText("APPLIES TO", { x: 8.7, y: 2.3, w: 3.6, h: 0.3, fontFace: FM, fontSize: 10, color: C.amber, charSpacing: 2 });
  ["The Orchestrator (Claude Code)", "Claude · expert", "ChatGPT · expert", "Gemini · expert", "Grok · expert"].forEach((t, i) => {
    s.addText(t, { x: 8.7, y: 2.7 + i * 0.62, w: 3.6, h: 0.5, fontFace: FM, fontSize: 12.5, color: i === 0 ? C.ice : C.text, bold: i === 0, valign: "middle", bullet: { code: "203A", indent: 14 } });
  });
  s.addText("Stated verbatim atop every expert invocation.", { x: 8.7, y: 5.9, w: 3.6, h: 0.5, fontFace: FM, fontSize: 10.5, italic: true, color: C.textDim });
  notes(s, "P0 persona is the standing operating stance for the Orchestrator and all four experts. It is an epistemic contract, not motivation. Source: _shared/prompt-principles.md, about/why.md.");
})();

// 3 — THESIS
(() => {
  const s = content(3, "The One-Line Thesis", "Breakthroughs live at the\nintersections.", "ACT 0 · TITLE", { ts: 30, th: 1.3 });
  s.addText("Real breakthroughs emerge at disciplinary intersections. No single LLM — however capable — can simultaneously hold a biologist's intuition, a physicist's rigor, a social scientist's measurement discipline, and a world-modeler's constraint-stripping creativity.", {
    x: 0.75, y: 2.5, w: 11.8, h: 1.5, fontFace: FM, fontSize: 16, color: C.text, lineSpacingMultiple: 1.3,
  });
  card(s, 0.75, 4.3, 11.8, 1.7, { accent: C.cyan, fill: C.void2 });
  s.addText("The TSM-CI and Group Genius literature prove that structured cross-pollination among diverse experts outperforms any individual.  This harness encodes that proof as an algorithm.", {
    x: 1.1, y: 4.55, w: 11.1, h: 1.2, fontFace: FD, fontSize: 18, bold: true, color: C.ice, lineSpacingMultiple: 1.15,
  });
  notes(s, "Thesis from README.md: cross-pollination among diverse experts beats any individual; the harness encodes that proof as an algorithm.");
})();

/* ============================================================================
   ACT I — THE PROBLEM (4–17)
   ============================================================================ */
const ACT1 = "ACT I · THE PROBLEM";

divider(4, "ACT I", "The Problem", "Why single-LLM and single-genius research stalls — and the six coupled frontier questions the field cannot yet answer.");

// 5 — lone genius myth
(() => {
  const s = content(5, "First Premise", "The lone-genius myth is false.", ACT1);
  s.addText("“Creativity is almost always emergent from interaction.”", {
    x: 0.75, y: 2.3, w: 11.8, h: 0.9, fontFace: FD, fontSize: 26, bold: true, color: C.amber, italic: true,
  });
  s.addText("Keith Sawyer studied jazz ensembles, improv theater, and innovation labs. The finding is consistent: breakthroughs come from a series of sparks — never a single flash.", {
    x: 0.75, y: 3.35, w: 11.0, h: 1.2, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.3,
  });
  card(s, 0.75, 4.7, 11.8, 1.3, { accent: C.cyan, fill: C.void2 });
  s.addText("If genius is interactional, then the way to amplify it is to engineer the interaction — not to wait for a bigger lone mind.", {
    x: 1.1, y: 4.95, w: 11.1, h: 0.85, fontFace: FM, fontSize: 14, color: C.ice, italic: true, valign: "middle",
  });
  notes(s, "Sawyer: lone-genius myth is false; creativity emerges from interaction — a series of sparks, never a single flash. Source: research/02.");
})();

// 6 — single LLM stalls
(() => {
  const s = content(6, "The Single-Model Ceiling", "One model averages.", ACT1);
  s.addText("Each frontier model carries training biases, stylistic priors, and epistemic defaults that constrain the solution space it will explore. These are not bugs — they are irreducible features of how the systems were trained.", {
    x: 0.75, y: 2.25, w: 11.8, h: 1.2, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25,
  });
  const tiles = [
    ["Claude", "philosophical nuance · biological analogy", EX.claude],
    ["GPT", "quantitative mechanism · engineering concreteness", EX.chatgpt],
    ["Gemini", "empirical validation · social context", EX.gemini],
    ["Grok", "contrarianism · radical constraint-stripping", EX.grok],
  ];
  tiles.forEach((t, i) => {
    const x = 0.75 + i * 3.0;
    card(s, x, 3.7, 2.8, 2.1, { accent: t[2], fill: C.panel });
    s.addText(t[0], { x: x + 0.25, y: 3.95, w: 2.4, h: 0.5, fontFace: FD, fontSize: 19, bold: true, color: t[2] });
    s.addText(t[1], { x: x + 0.25, y: 4.5, w: 2.4, h: 1.1, fontFace: FM, fontSize: 11.5, color: C.text, lineSpacingMultiple: 1.2 });
  });
  s.addText("The insight: EXPLOIT these differences rather than try to eliminate them.", {
    x: 0.75, y: 6.05, w: 11.8, h: 0.4, fontFace: FM, fontSize: 13, color: C.amber, charSpacing: 1 });
  notes(s, "Each model has irreducible epistemic defaults; exploit the diversity rather than eliminate it. Source: about/why.md.");
})();

// 7 — anchoring trap
(() => {
  const s = content(7, "The Anchoring Trap", "Iterating on your own answer\nshrinks the search.", ACT1, { ts: 28, th: 1.3 });
  s.addText("Tversky & Kahneman (1974): first impressions dominate later reasoning — even when subjects are told the initial value is random.", {
    x: 0.75, y: 2.55, w: 11.5, h: 0.9, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25,
  });
  // simple shrinking funnel of boxes
  const rounds = ["Round 1", "Round 2", "Round 3", "Round 4"];
  rounds.forEach((r, i) => {
    const w = 5.2 - i * 1.0;
    const x = 0.9;
    card(s, x, 3.6 + i * 0.62, w, 0.5, { fill: C.void3, line: C.border, r: 0.05 });
    s.addText(`${r} — alternatives explored ▾`, { x: x + 0.2, y: 3.6 + i * 0.62, w: w - 0.3, h: 0.5, fontFace: FM, fontSize: 11.5, color: i === 3 ? C.mist : C.text, valign: "middle" });
  });
  card(s, 6.7, 3.6, 5.9, 2.4, { accent: C.amber, fill: C.void2 });
  s.addText("When you ask one model to iterate on its own prior answer, it anchors heavily — the space of alternatives it explores collapses round by round.", {
    x: 7.0, y: 3.85, w: 5.3, h: 1.9, fontFace: FM, fontSize: 14, color: C.ice, valign: "top", lineSpacingMultiple: 1.3 });
  notes(s, "Anchoring bias collapses the alternative space across iterations; this motivates blanking. Source: about/why.md.");
})();

// 8 — no single mind suffices
(() => {
  const s = content(8, "Structural, Not Fixable", "No single mind suffices for\nfrontier research.", ACT1, { ts: 28, th: 1.3 });
  s.addText("Deep expertise in one domain necessarily comes at the cost of breadth across others. This is a structural feature of how knowledge is organised — not a deficiency a bigger model removes.", {
    x: 0.75, y: 2.6, w: 11.8, h: 1.2, fontFace: FM, fontSize: 15.5, color: C.text, lineSpacingMultiple: 1.3,
  });
  const ex = ["Quantum decoherence from first principles", "How biases emerge from social structure", "How evolution optimises under constraint", "Imagining radically alternative physics"];
  ex.forEach((t, i) => {
    const x = 0.75 + (i % 2) * 6.0;
    const y = 4.05 + Math.floor(i / 2) * 1.05;
    card(s, x, y, 5.7, 0.85, { fill: C.panel, line: C.border, r: 0.06 });
    s.addText(t, { x: x + 0.3, y, w: 5.2, h: 0.85, fontFace: FM, fontSize: 12.5, color: C.text, valign: "middle" });
  });
  s.addText("…rarely live inside one head.  Or one model.", { x: 0.75, y: 6.25, w: 11, h: 0.4, fontFace: FM, fontSize: 13, italic: true, color: C.amber });
  notes(s, "Breadth/depth tradeoff is structural; one mind cannot hold all the frontier lenses. Source: about/why.md.");
})();

// 9 — DeepMind talk
(() => {
  const s = content(9, "The Source Material", "The DeepMind / Gemini talk.", ACT1);
  s.addText("A sit-down with four leaders on Gemini's origin, unified models, distillation, evaluation, and the 2027 research horizon.", {
    x: 0.75, y: 2.25, w: 11.8, h: 0.8, fontFace: FM, fontSize: 14.5, color: C.text, lineSpacingMultiple: 1.25 });
  const ppl = [
    ["Jeff Dean", "Computing infrastructure & scale"],
    ["Koray Kavukcuoglu", "Research direction & architecture"],
    ["Noam Shazeer", "Model architecture · Transformer co-inventor"],
    ["Oriol Vinyals", "Agents & multimodal systems"],
  ];
  ppl.forEach((p, i) => {
    const x = 0.75 + (i % 2) * 6.0;
    const y = 3.35 + Math.floor(i / 2) * 1.45;
    card(s, x, y, 5.7, 1.25, { accent: C.cyan, fill: C.panel });
    s.addText(p[0], { x: x + 0.3, y: y + 0.18, w: 5.2, h: 0.5, fontFace: FD, fontSize: 18, bold: true, color: C.ice });
    s.addText(p[1], { x: x + 0.3, y: y + 0.68, w: 5.2, h: 0.45, fontFace: FM, fontSize: 11.5, color: C.textDim });
  });
  s.addText("Long shared history was named the secret ingredient to collaborative innovation — analogous to transactive memory.", {
    x: 0.75, y: 6.35, w: 11.8, h: 0.5, fontFace: FM, fontSize: 12.5, italic: true, color: C.amber });
  notes(s, "The four DeepMind leaders and the talk's scope; long shared history = transactive memory. Source: research/00.");
})();

// 10 — solved vs open
(() => {
  const s = content(10, "Where the Frontier Is", "Solved engineering vs. the\nlive research agenda.", ACT1, { ts: 27, th: 1.3 });
  card(s, 0.75, 2.7, 5.7, 3.5, { accent: C.success, fill: C.void2 });
  s.addText("FRAMED AS SOLVED", { x: 1.05, y: 2.95, w: 5.1, h: 0.35, fontFace: FM, fontSize: 12, color: C.success, charSpacing: 2 });
  bullets(s, [
    "Unification — the “twins” merger of research streams",
    "Distillation — Flash now beats prior Pro generations",
    "Product feedback loops as the real-world test",
    "Long-term team trust & transactive memory",
  ], 1.05, 3.4, 5.1, { fs: 12.5, gap: 9, color: C.text });
  card(s, 6.85, 2.7, 5.7, 3.5, { accent: C.amber, fill: C.void2 });
  s.addText("FRAMED AS OPEN — 2027 AGENDA", { x: 7.15, y: 2.95, w: 5.1, h: 0.35, fontFace: FM, fontSize: 12, color: C.amber, charSpacing: 2 });
  bullets(s, [
    "Self-improvement loops",
    "Long-horizon agency",
    "Proper evaluation",
    "Human-like efficiency",
    "Deep world modeling",
    "One-model → many-products scaling",
  ], 7.15, 3.4, 5.1, { fs: 12.5, gap: 7, color: C.ice });
  notes(s, "Talk synthesis: unification/distillation solved; six items are the open agenda. Source: research/00.");
})();

// 11 — six questions overview
(() => {
  const s = content(11, "The Open Agenda", "Six frontier questions.", ACT1);
  const qs = [
    ["Q1", "Self-learning / organic continuous learning", EX.claude],
    ["Q2", "Reliable long-duration autonomous agents", EX.chatgpt],
    ["Q3", "Evaluation beyond benchmarks", EX.gemini],
    ["Q4", "Closing the human-AI efficiency gap", EX.grok],
    ["Q5", "World modeling / physical dynamics (Omni)", C.cyan],
    ["Q6", "One model → thousands of products", C.amber],
  ];
  qs.forEach((q, i) => {
    const x = 0.75 + (i % 3) * 4.0;
    const y = 2.55 + Math.floor(i / 3) * 1.95;
    card(s, x, y, 3.75, 1.7, { accent: q[2], fill: C.panel });
    s.addText(q[0], { x: x + 0.25, y: y + 0.2, w: 3.3, h: 0.55, fontFace: FD, fontSize: 24, bold: true, color: q[2] });
    s.addText(q[1], { x: x + 0.25, y: y + 0.78, w: 3.3, h: 0.85, fontFace: FM, fontSize: 12, color: C.text, lineSpacingMultiple: 1.15 });
  });
  s.addText("Not minor tweaks — foundational, coupled open challenges betting the 2027 trajectory.", {
    x: 0.75, y: 6.5, w: 11.8, h: 0.4, fontFace: FM, fontSize: 12.5, italic: true, color: C.amber });
  notes(s, "The six outstanding research questions, ranked by centrality. Source: research/00.");
})();

// Q-deep-dive helper (12–17)
function qSlide(n, qid, qtitle, body, why, color) {
  const s = content(n, `Frontier Question · ${qid}`, qtitle, ACT1, { ts: 28, th: 1.2 });
  card(s, 0.75, 2.5, 7.5, 3.6, { accent: color, fill: C.void2 });
  s.addText(body, { x: 1.05, y: 2.78, w: 6.9, h: 3.1, fontFace: FM, fontSize: 14.5, color: C.text, valign: "top", lineSpacingMultiple: 1.3 });
  card(s, 8.5, 2.5, 4.1, 3.6, { fill: C.panel, line: C.borderHi });
  s.addText("WHY IT MATTERS", { x: 8.8, y: 2.78, w: 3.5, h: 0.35, fontFace: FM, fontSize: 11, color: color, charSpacing: 2 });
  s.addText(why, { x: 8.8, y: 3.2, w: 3.5, h: 2.7, fontFace: FM, fontSize: 12.5, color: C.ice, valign: "top", lineSpacingMultiple: 1.3 });
  return s;
}

qSlide(12, "Q1", "Self-learning / organic\ncontinuous learning.",
  "“We haven't achieved a truly organic or continuously learning architecture yet.”  The vision: models that use their own agentic capabilities as research assistants — proposing architectural improvements, running experiments on themselves, helping design their own successor.",
  "The big 2027 leap — the path to unlocking vast remaining capacity without simply adding scale.", EX.claude);

qSlide(13, "Q2", "Reliable long-duration\nautonomous agents.",
  "Directly named an ongoing challenge. They want agentic persistence — agents that stay coherent and useful over days, not minutes. Tied to infrastructure and flagged as essential before agents can meaningfully contribute to self-research.",
  "The reliability gap is what currently blocks the self-learning vision from being realized.", EX.chatgpt);

qSlide(14, "Q3", "Evaluation beyond\nbenchmarks.",
  "Repeatedly emphasized as a critical hurdle. Internal benchmarks no longer suffice; the ultimate test must be real-world user feedback and product usage.",
  "Open problem: turn messy, high-dimensional, live signal into a rigorous, scalable evaluation system — especially for agentic and world-modeling capabilities.", EX.gemini);

qSlide(15, "Q4", "Closing the human-AI\nefficiency gap.",
  "Humans learn with far less data and compute. Algorithmic breakthroughs in sample efficiency — and perhaps more “organic” architectures — may represent gains larger than raw scaling.",
  "One of the clearest paths to unlocking more intelligence from today's hardware.", EX.grok);

qSlide(16, "Q5", "World modeling /\nphysical dynamics.",
  "The shift from text/image/video to models that natively understand physics, causality, and “moving atoms” (robotics, real-world construction) — the Gemini Omni direction.",
  "Necessary for agents that can act reliably in the physical or long-horizon digital world. No solution path is claimed solved.", C.cyan);

// 17 — Q6 + coupling
(() => {
  const s = content(17, "Frontier Question · Q6", "One model →\nthousands of products.", ACT1, { ts: 28, th: 1.2 });
  card(s, 0.75, 2.5, 7.5, 1.85, { accent: C.amber, fill: C.void2 });
  s.addText("Consensus on “one model — countless specialized outlets,” raising the practical question of how to design interfaces, distillation/specialization layers, and interaction paradigms so the single model feels excellent in every context — without fragmentation creeping back in.", {
    x: 1.05, y: 2.72, w: 6.9, h: 1.5, fontFace: FM, fontSize: 13, color: C.text, valign: "top", lineSpacingMultiple: 1.25 });
  card(s, 0.75, 4.5, 11.85, 1.7, { accent: C.cyan, fill: C.panel });
  s.addText("WHY THE SIX ARE COUPLED", { x: 1.05, y: 4.72, w: 11, h: 0.35, fontFace: FM, fontSize: 11, color: C.cyan, charSpacing: 2 });
  s.addText("Self-learning needs reliable agents (Q1↔Q2); both need new evaluation (Q3); efficiency reshapes all three (Q4); world models ground agency (Q5); productization is how it ships (Q6). Answering one gives context for the others — exactly the interdependence the harness exploits.", {
    x: 1.05, y: 5.1, w: 11.3, h: 1.0, fontFace: FM, fontSize: 13, color: C.ice, lineSpacingMultiple: 1.25 });
  card(s, 8.5, 2.5, 4.1, 1.85, { fill: C.panel, line: C.borderHi });
  s.addText("WHY IT MATTERS", { x: 8.8, y: 2.72, w: 3.5, h: 0.3, fontFace: FM, fontSize: 11, color: C.amber, charSpacing: 2 });
  s.addText("Without it, the unification advantage fragments back into many disconnected systems.", { x: 8.8, y: 3.08, w: 3.5, h: 1.2, fontFace: FM, fontSize: 12.5, color: C.text, lineSpacingMultiple: 1.25 });
  notes(s, "Q6 + the coupling rationale across all six questions. Source: research/00.");
})();

/* ============================================================================
   ACT II — THE INSIGHT (18–27)
   ============================================================================ */
const ACT2 = "ACT II · THE INSIGHT";
divider(18, "ACT II", "The Insight", "Group Genius, Group Flow, and the Transactive Systems Model of Collective Intelligence — the science of why diverse teams out-think any individual.");

// 19 — Group Genius
(() => {
  const s = content(19, "Keith Sawyer · 2007", "Group Genius.", ACT2);
  s.addText("The highest-quality creative work — in science, art, and innovation — emerges from structured improvisation between diverse experts genuinely listening to and building on one another.", {
    x: 0.75, y: 2.3, w: 11.8, h: 1.2, fontFace: FM, fontSize: 16, color: C.text, lineSpacingMultiple: 1.3 });
  card(s, 0.75, 3.8, 11.8, 1.0, { accent: C.amber, fill: C.void2 });
  s.addText("Genius is not individual.  It is interactional.", {
    x: 1.1, y: 3.8, w: 11.1, h: 1.0, fontFace: FD, fontSize: 24, bold: true, color: C.amber, valign: "middle" });
  s.addText("The harness encodes this as a protocol: fixed lenses, blanking discipline, and rotation rules that force genuine cross-pollination — not polite sequential monologue.", {
    x: 0.75, y: 5.05, w: 11.8, h: 1.0, fontFace: FM, fontSize: 14, color: C.textDim, lineSpacingMultiple: 1.25 });
  notes(s, "Group Genius (Sawyer): creativity is interactional; encoded as a protocol. Source: research/02, about/why.md.");
})();

// 20 — Group Flow
(() => {
  const s = content(20, "The Peak Collective State", "Group Flow.", ACT2);
  s.addText("When a team feels “in sync,” time distorts and ideas flow improvisationally. Sawyer identifies ten conditions for group flow:", {
    x: 0.75, y: 2.25, w: 11.8, h: 0.8, fontFace: FM, fontSize: 14.5, color: C.text, lineSpacingMultiple: 1.25 });
  const cond = ["Clear but open goals", "Autonomy", "Potential for failure", "Constant spontaneous communication", "Close listening", "Equal participation", "Blending of egos", "Familiarity & trust"];
  cond.forEach((c, i) => {
    const x = 0.75 + (i % 4) * 3.0;
    const y = 3.3 + Math.floor(i / 4) * 1.35;
    card(s, x, y, 2.8, 1.15, { fill: C.panel, line: C.border, r: 0.06 });
    s.addText(c, { x: x + 0.2, y, w: 2.45, h: 1.15, fontFace: FM, fontSize: 12, color: C.ice, valign: "middle", lineSpacingMultiple: 1.1 });
  });
  s.addText("Each workflow re-creates a different subset of these conditions on purpose.", {
    x: 0.75, y: 6.2, w: 11.8, h: 0.4, fontFace: FM, fontSize: 12.5, italic: true, color: C.amber });
  notes(s, "Group Flow and Sawyer's 10 conditions. Source: research/02.");
})();

// 21 — four mechanisms
(() => {
  const s = content(21, "Literature-Backed", "Four deep mechanisms.", ACT2);
  const m = [
    ["01", "Idea sparks + recombination", "“Yes-and.” One remark suggests another; meaning clarifies in retrospect. Bell Labs met “almost on the spur of the moment” daily.", EX.claude],
    ["02", "Attention & focus dynamics", "Complete concentration + close listening + equal participation produce shared joint attention that filters noise.", EX.chatgpt],
    ["03", "Added context / cross-pollination", "Each genius brings a unique lens; others instantly reframe the problem — exactly how blanking+leaking works.", EX.gemini],
    ["04", "Familiarity + trust + controlled risk", "Long shared history supplies tacit knowledge — rapid sync without groupthink.", EX.grok],
  ];
  m.forEach((t, i) => {
    const x = 0.75 + (i % 2) * 6.0;
    const y = 2.5 + Math.floor(i / 2) * 1.95;
    card(s, x, y, 5.7, 1.75, { accent: t[3], fill: C.panel });
    s.addText(t[0], { x: x + 0.25, y: y + 0.15, w: 1.0, h: 0.6, fontFace: FD, fontSize: 26, bold: true, color: t[3] });
    s.addText(t[1], { x: x + 1.2, y: y + 0.18, w: 4.3, h: 0.5, fontFace: FD, fontSize: 15, bold: true, color: C.ice });
    s.addText(t[2], { x: x + 1.2, y: y + 0.68, w: 4.35, h: 1.0, fontFace: FM, fontSize: 10.8, color: C.text, lineSpacingMultiple: 1.15 });
  });
  notes(s, "The four deep mechanisms of group flow. Source: research/02.");
})();

// 22 — TSM-CI
(() => {
  const s = content(22, "Woolley · Gupta et al.", "TSM-CI — the modern\nframework.", ACT2, { ts: 28, th: 1.3 });
  s.addText("The Transactive Systems Model of Collective Intelligence — the most precise modern account of group IQ, tested on 476 open-source software teams. Collective intelligence emerges from three interlocking transactive systems groups develop and mutually adapt.", {
    x: 0.75, y: 2.55, w: 11.8, h: 1.2, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.3 });
  const sys = [["TMS", "Transactive\nMemory", "who knows what", EX.claude], ["TAS", "Transactive\nAttention", "where focus goes", C.cyan], ["TRS", "Transactive\nReasoning", "joint sense-making", C.amber]];
  sys.forEach((t, i) => {
    const x = 0.95 + i * 3.95;
    card(s, x, 4.0, 3.6, 2.0, { accent: t[3], fill: C.void2 });
    s.addText(t[0], { x: x + 0.25, y: 4.2, w: 3.1, h: 0.6, fontFace: FD, fontSize: 30, bold: true, color: t[3] });
    s.addText(t[1], { x: x + 0.25, y: 4.85, w: 3.1, h: 0.7, fontFace: FD, fontSize: 14, bold: true, color: C.ice, lineSpacingMultiple: 0.95 });
    s.addText(t[2], { x: x + 0.25, y: 5.55, w: 3.1, h: 0.4, fontFace: FM, fontSize: 11, italic: true, color: C.textDim });
  });
  notes(s, "TSM-CI: three transactive systems, validated on 476 OSS teams. Source: research/02.");
})();

// 23–25 TMS/TAS/TRS mapped
function tsSlide(n, code, full, human, mech, color) {
  const s = content(n, `Transactive System · ${code}`, full, ACT2, { ts: 30, th: 1.1 });
  card(s, 0.75, 2.55, 5.7, 3.5, { accent: color, fill: C.void2 });
  s.addText("IN HUMAN GROUPS", { x: 1.05, y: 2.8, w: 5.1, h: 0.35, fontFace: FM, fontSize: 11, color: color, charSpacing: 2 });
  s.addText(human, { x: 1.05, y: 3.2, w: 5.1, h: 2.7, fontFace: FM, fontSize: 14, color: C.text, valign: "top", lineSpacingMultiple: 1.3 });
  card(s, 6.85, 2.55, 5.75, 3.5, { accent: C.amber, fill: C.panel });
  s.addText("IN THE AI PROTOCOL", { x: 7.15, y: 2.8, w: 5.1, h: 0.35, fontFace: FM, fontSize: 11, color: C.amber, charSpacing: 2 });
  s.addText(mech, { x: 7.15, y: 3.2, w: 5.15, h: 2.7, fontFace: FM, fontSize: 14, color: C.ice, valign: "top", lineSpacingMultiple: 1.3 });
  notes(s, `${code} mapped to the protocol. Source: research/02.`);
}
tsSlide(23, "TMS", "Transactive Memory.", "Everyone knows “who knows what.” The DeepMind team's long shared history was a perfect TMS.", "LEAKING builds it — every AI sees the evolving group knowledge across all other questions.", EX.claude);
tsSlide(24, "TAS", "Transactive Attention.", "The group collectively directs and sustains focus on the most promising threads.", "RANDOM BLANKING forces re-allocation of attention — the AI must re-engage the focal question entirely fresh.", C.cyan);
tsSlide(25, "TRS", "Transactive Reasoning.", "Joint sense-making and error-correction, where one idea is immediately reframed and extended by others.", "The CLEAN-SLATE RE-ASK + polymath prompt enforces fresh reasoning informed by the collective.", C.amber);

// 26 — DeepMind was a TMS
(() => {
  const s = content(26, "The Magic Was a System", "The DeepMind team WAS\na transactive system.", ACT2, { ts: 27, th: 1.3 });
  s.addText("Their “finish-each-other's-sentences” dynamic, born of years of shared history, is precisely transactive memory. The breakthrough engine was never four lone geniuses — it was the system between them.", {
    x: 0.75, y: 2.65, w: 11.8, h: 1.3, fontFace: FM, fontSize: 16, color: C.text, lineSpacingMultiple: 1.3 });
  card(s, 0.75, 4.3, 11.8, 1.7, { accent: C.cyan, fill: C.void2 });
  s.addText("In high-uncertainty environments — exactly like the Gemini frontier questions — strong TAS + TRS buffer overload and sustain commitment far better than raw expertise alone.", {
    x: 1.1, y: 4.55, w: 11.1, h: 1.2, fontFace: FD, fontSize: 17, bold: true, color: C.ice, lineSpacingMultiple: 1.2 });
  notes(s, "DeepMind team as a TMS; TAS+TRS buffer overload under uncertainty. Source: research/00, research/02.");
})();

// 27 — precedents
(() => {
  const s = content(27, "Where Group Genius Shipped", "Precedents.", ACT2);
  const p = [["Bell Labs", "Shockley's team met spur-of-the-moment, daily"], ["Xerox PARC", "informal collisions over formal process"], ["MIT Building 20", "radical adjacency, mixed disciplines"], ["Pixar Braintrust", "candid peer critique loops"], ["IDEO · d.school", "Ideaflow & daily idea quotas"], ["DeepMind merger", "consolidating trust into one engine"]];
  p.forEach((t, i) => {
    const x = 0.75 + (i % 3) * 4.0;
    const y = 2.55 + Math.floor(i / 3) * 1.75;
    card(s, x, y, 3.75, 1.5, { accent: i % 2 ? C.cyan : C.amber, fill: C.panel });
    s.addText(t[0], { x: x + 0.25, y: y + 0.18, w: 3.3, h: 0.5, fontFace: FD, fontSize: 16, bold: true, color: C.ice });
    s.addText(t[1], { x: x + 0.25, y: y + 0.68, w: 3.3, h: 0.75, fontFace: FM, fontSize: 11, color: C.text, lineSpacingMultiple: 1.15 });
  });
  s.addText("Formal meetings kill it; spontaneous collisions create it.", { x: 0.75, y: 6.25, w: 11.8, h: 0.4, fontFace: FM, fontSize: 13, italic: true, color: C.amber });
  notes(s, "Historical precedents for Group Genius. Source: research/02.");
})();

/* ============================================================================
   ACT III — THE CORE INVENTION (28–37)
   ============================================================================ */
const ACT3 = "ACT III · THE INVENTION";
divider(28, "ACT III", "The Core Invention", "Blanking + Leaking cross-pollination — a dialectical engine with forced amnesia on the focal question.");

// 29 — one sentence
(() => {
  const s = content(29, "In One Sentence", "Blanking + Leaking.", ACT3);
  card(s, 0.75, 2.5, 11.8, 1.7, { accent: C.amber, fill: C.void2 });
  s.addText("A dialectical cross-pollination engine with forced amnesia on the focal question.", {
    x: 1.1, y: 2.5, w: 11.1, h: 1.7, fontFace: FD, fontSize: 26, bold: true, color: C.amber, valign: "middle", lineSpacingMultiple: 1.05 });
  const two = [["BLANK", "Delete the focal question's own prior answers — clean slate.", C.amber], ["LEAK", "Show the current-best answers of every OTHER question.", C.cyan]];
  two.forEach((t, i) => {
    const x = 0.75 + i * 6.0;
    card(s, x, 4.5, 5.7, 1.6, { accent: t[2], fill: C.panel });
    s.addText(t[0], { x: x + 0.3, y: 4.7, w: 5.1, h: 0.6, fontFace: FD, fontSize: 24, bold: true, color: t[2] });
    s.addText(t[1], { x: x + 0.3, y: 5.32, w: 5.1, h: 0.75, fontFace: FM, fontSize: 13, color: C.text, lineSpacingMultiple: 1.2 });
  });
  notes(s, "Core mechanic in one sentence. Source: research/02.");
})();

// 30 — BLANK detail
(() => {
  const s = content(30, "Mechanic · 1 of 2", "BLANK — forced amnesia.", ACT3);
  s.addText("For focal question Qᵢ, completely delete each expert's prior answer to Qᵢ before the next round. The expert literally cannot anchor to what no longer exists in the context window.", {
    x: 0.75, y: 2.3, w: 11.8, h: 1.1, fontFace: FM, fontSize: 15.5, color: C.text, lineSpacingMultiple: 1.3 });
  card(s, 0.75, 3.7, 11.8, 2.3, { accent: C.amber, fill: C.void2 });
  s.addText("[CONTEXT — DO NOT USE]  Your previous answer to Q3 was: “…”\nSet it aside entirely. Do not build on it, reference it, or defend it.\nBegin from first principles as if you had never answered Q3.", {
    x: 1.05, y: 3.95, w: 11.2, h: 1.0, fontFace: FM, fontSize: 13, color: C.bone, lineSpacingMultiple: 1.3 });
  s.addText("EFFECT  ·  eliminates anchoring bias  ·  forces genuine first-principles re-derivation  ·  prevents self-echo-chamber", {
    x: 1.05, y: 5.25, w: 11.2, h: 0.6, fontFace: FM, fontSize: 12.5, color: C.amber, charSpacing: 1, lineSpacingMultiple: 1.2 });
  notes(s, "Blanking detail and the in-context deletion. Source: about/what.md, about/how.md, research/02.");
})();

// 31 — LEAK detail
(() => {
  const s = content(31, "Mechanic · 2 of 2", "LEAK — cross-domain signal.", ACT3);
  s.addText("While the focal answer is blanked, inject the current-best answers of all OTHER questions. This preserves cross-domain signal without contaminating the focal thread with prior thinking.", {
    x: 0.75, y: 2.3, w: 11.8, h: 1.1, fontFace: FM, fontSize: 15.5, color: C.text, lineSpacingMultiple: 1.3 });
  card(s, 0.75, 3.7, 5.7, 2.3, { accent: C.cyan, fill: C.void2 });
  s.addText("CROSS-DOMAIN SEEDING", { x: 1.05, y: 3.95, w: 5.1, h: 0.35, fontFace: FM, fontSize: 11, color: C.cyan, charSpacing: 2 });
  s.addText("A biologist re-deriving a physics question — after reading the physics lens applied to biology — generates combinations invisible in isolation.", {
    x: 1.05, y: 4.35, w: 5.1, h: 1.6, fontFace: FM, fontSize: 12.5, color: C.text, lineSpacingMultiple: 1.25 });
  card(s, 6.85, 3.7, 5.75, 2.3, { accent: C.amber, fill: C.void2 });
  s.addText("PRODUCTIVE CONSTRAINT", { x: 7.15, y: 3.95, w: 5.1, h: 0.35, fontFace: FM, fontSize: 11, color: C.amber, charSpacing: 2 });
  s.addText("The leaked answers set a quality floor (beat them) and — with the fixed-lens rule — a diversity ceiling (bring something genuinely different).", {
    x: 7.15, y: 4.35, w: 5.15, h: 1.6, fontFace: FM, fontSize: 12.5, color: C.ice, lineSpacingMultiple: 1.25 });
  notes(s, "Leaking: cross-domain seeding + productive constraint. Source: about/why.md, about/how.md.");
})();

// 32 — not self-priming
(() => {
  const s = content(32, "The Crucial Distinction", "This is NOT self-priming.", ACT3);
  card(s, 0.75, 2.6, 5.7, 3.0, { accent: "FF6B6B", fill: C.void2 });
  s.addText("NAIVE ITERATION", { x: 1.05, y: 2.85, w: 5.1, h: 0.35, fontFace: FM, fontSize: 11, color: "FF6B6B", charSpacing: 2 });
  s.addText("Show the model its own prior answer and ask it to “improve.” It paraphrases, defends, anchors. Each output is a copy of the last.", {
    x: 1.05, y: 3.25, w: 5.1, h: 2.2, fontFace: FM, fontSize: 14, color: C.text, lineSpacingMultiple: 1.3 });
  card(s, 6.85, 2.6, 5.75, 3.0, { accent: C.success, fill: C.void2 });
  s.addText("BLANKING + LEAKING", { x: 7.15, y: 2.85, w: 5.1, h: 0.35, fontFace: FM, fontSize: 11, color: C.success, charSpacing: 2 });
  s.addText("Every output for Q1 is born fresh — never copied from a prior version of itself. Errors don't inherit on the same question; weak ideas get out-competed across random neighborhoods.", {
    x: 7.15, y: 3.25, w: 5.15, h: 2.2, fontFace: FM, fontSize: 14, color: C.ice, lineSpacingMultiple: 1.3 });
  s.addText("Simulated collaborative refinement under controlled information asymmetry.", {
    x: 0.75, y: 5.85, w: 11.8, h: 0.5, fontFace: FD, fontSize: 17, bold: true, color: C.amber, align: "center" });
  notes(s, "Why blanking+leaking is materially different from self-priming. Source: research/02.");
})();

// 33 — inner loop
(() => {
  const s = content(33, "Loop Structure · Inner", "The inner loop.", ACT3);
  s.addText("Rotate the blank+leak protocol across all focal questions in one pass. 1–3 questions are blanked per loop, rotated randomly each round; all four experts respond to each focal question.", {
    x: 0.75, y: 2.25, w: 11.8, h: 1.0, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
  const steps = ["Select focal Q (randomised order)", "Blank its prior answers", "Leak all siblings' current-best", "4 experts re-derive from scratch", "Distill → new Current Best", "Rotate to next question"];
  steps.forEach((t, i) => {
    const x = 0.75 + (i % 3) * 4.0;
    const y = 3.5 + Math.floor(i / 3) * 1.4;
    card(s, x, y, 3.75, 1.2, { accent: C.cyan, fill: C.panel });
    s.addText(`${i + 1}`, { x: x + 0.2, y: y + 0.15, w: 0.6, h: 0.5, fontFace: FD, fontSize: 22, bold: true, color: C.cyan });
    s.addText(t, { x: x + 0.85, y: y + 0.1, w: 2.75, h: 1.0, fontFace: FM, fontSize: 11.5, color: C.text, valign: "middle", lineSpacingMultiple: 1.15 });
  });
  notes(s, "Inner loop: rotate blank+leak across questions. Source: README.md, research/03.");
})();

// 34 — outer loop
(() => {
  const s = content(34, "Loop Structure · Outer", "The outer loop.", ACT3);
  s.addText("After a full inner pass, the Orchestrator synthesises, scores, updates each Current Best, and re-broadcasts for the next pass — Delphi-style multi-round elicitation that compounds quality.", {
    x: 0.75, y: 2.25, w: 11.8, h: 1.0, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
  const chk = [["Quality delta", "Did each Current Best improve materially?"], ["Diminishing returns", "Is marginal gain per pass dropping below threshold?"], ["Convergence", "Robust consensus — or productive divergence?"], ["Time budget", "Has the session budget been consumed?"]];
  chk.forEach((t, i) => {
    const y = 3.5 + i * 0.72;
    card(s, 0.75, y, 11.8, 0.62, { fill: C.panel, line: C.border, r: 0.05 });
    s.addText(t[0], { x: 1.05, y, w: 3.2, h: 0.62, fontFace: FD, fontSize: 14, bold: true, color: C.amber, valign: "middle" });
    s.addText(t[1], { x: 4.4, y, w: 8.0, h: 0.62, fontFace: FM, fontSize: 12.5, color: C.text, valign: "middle" });
  });
  s.addText("Above threshold + time remains → next pass.  Converged or time out → final synthesis.", {
    x: 0.75, y: 6.5, w: 11.8, h: 0.4, fontFace: FM, fontSize: 12.5, italic: true, color: C.cyan });
  notes(s, "Outer loop evaluation criteria. Source: about/how.md.");
})();

// 35 — VISUAL loop diagram
(() => {
  const s = content(35, "The Engine, Drawn", "User → Orchestrator →\nExperts → Archive.", ACT3, { ts: 25, th: 1.3 });
  const node = (x, y, w, h, label, sub, color) => {
    card(s, x, y, w, h, { accent: color, fill: C.panel });
    s.addText(label, { x: x + 0.15, y: y + 0.12, w: w - 0.3, h: 0.5, fontFace: FD, fontSize: 13.5, bold: true, color: C.ice, align: "center", valign: "middle" });
    if (sub) s.addText(sub, { x: x + 0.12, y: y + 0.62, w: w - 0.24, h: h - 0.7, fontFace: FM, fontSize: 9.5, color: C.textDim, align: "center", valign: "top", lineSpacingMultiple: 1.05 });
  };
  const arrow = (x, y, w) => s.addShape("rightTriangle", { x, y, w, h: 0.18, fill: { color: C.amber }, line: { type: "none" }, rotate: 0 });
  // top row
  node(0.7, 2.7, 2.3, 1.1, "USER", "research goal", C.cyan);
  s.addShape("line", { x: 3.0, y: 3.25, w: 0.55, h: 0, line: { color: C.amber, width: 2, endArrowType: "triangle" } });
  node(3.6, 2.7, 2.6, 1.1, "ORCHESTRATOR", "Triple-PhD persona · selector", C.amber);
  s.addShape("line", { x: 6.2, y: 3.25, w: 0.55, h: 0, line: { color: C.amber, width: 2, endArrowType: "triangle" } });
  node(6.8, 2.7, 2.6, 1.1, "CLAUDE-IN-CHROME", "browser transport", C.cyan);
  s.addShape("line", { x: 9.4, y: 3.25, w: 0.55, h: 0, line: { color: C.amber, width: 2, endArrowType: "triangle" } });
  node(10.0, 2.7, 2.6, 1.1, "4 EXPERTS", "fixed-lens tabs", EX.grok);
  // blank+leak box
  card(s, 3.6, 4.2, 9.0, 1.15, { accent: C.amber, fill: C.void2 });
  s.addText("BLANK focal Q  ·  LEAK siblings' current-best  ·  re-derive from first principles  ·  rotate  [inner loop]", {
    x: 3.85, y: 4.2, w: 8.6, h: 1.15, fontFace: FM, fontSize: 12.5, color: C.amber, valign: "middle", align: "center", lineSpacingMultiple: 1.2 });
  // synth + archive
  node(3.6, 5.65, 4.3, 1.05, "DISTILLATION → SYNTHESIS", "score · select Current Best [outer loop]", C.cyan);
  node(8.3, 5.65, 4.3, 1.05, "examples/ ARCHIVE", "full Markdown transcript + lineage", C.success);
  s.addShape("line", { x: 7.9, y: 6.17, w: 0.4, h: 0, line: { color: C.success, width: 2, endArrowType: "triangle" } });
  // feedback arrow synth -> orchestrator
  s.addShape("line", { x: 4.9, y: 5.65, w: 0, h: -1.4, line: { color: C.cyanDim, width: 1.5, dashType: "dash", endArrowType: "triangle" } });
  notes(s, "The end-to-end engine diagram, mirroring README.md architecture. Inner loop blank+leak; outer loop synthesis; archive.");
})();

// 36 — human analogies
(() => {
  const s = content(36, "Not New to Science", "Elite research already\nworks this way.", ACT3, { ts: 27, th: 1.3 });
  const a = [["Theoretical physics", "Solve easy equations, hold fixed, re-solve the hard one; rotate which you hold."], ["Hegelian dialectic", "Thesis, then clean-slate antithesis informed by adjacent domains."], ["Theory-club sessions", "Re-explain Problem A from scratch in light of what you just heard on B–F."], ["Grant-revision cycles", "Rewrite only the attacked section with the improved others in full context."], ["The blank-page test", "Delete Chapter 3; read the polished 1–2 & 4–6; rewrite 3."], ["Delphi method", "Anonymous iterative rounds with aggregated prior responses."]];
  a.forEach((t, i) => {
    const x = 0.75 + (i % 2) * 6.0;
    const y = 2.6 + Math.floor(i / 2) * 1.18;
    card(s, x, y, 5.7, 1.02, { accent: i % 2 ? C.cyan : C.amber, fill: C.panel });
    s.addText(t[0], { x: x + 0.25, y: y + 0.1, w: 5.2, h: 0.4, fontFace: FD, fontSize: 13.5, bold: true, color: C.ice });
    s.addText(t[1], { x: x + 0.25, y: y + 0.48, w: 5.25, h: 0.52, fontFace: FM, fontSize: 10.3, color: C.text, lineSpacingMultiple: 1.05 });
  });
  notes(s, "Human-practice analogies for blanking+leaking. Source: research/02.");
})();

// 37 — why novelty
(() => {
  const s = content(37, "The Payoff", "Why it produces novelty.", ACT3);
  card(s, 0.75, 2.4, 11.8, 1.5, { accent: C.amber, fill: C.void2 });
  s.addText("Structured productive interference.", { x: 1.1, y: 2.55, w: 11, h: 0.6, fontFace: FD, fontSize: 24, bold: true, color: C.amber });
  s.addText("Ideas that no individual could generate alone become possible through structured cross-pollination of diverse lenses.", {
    x: 1.1, y: 3.15, w: 11.2, h: 0.7, fontFace: FM, fontSize: 14, color: C.ice, lineSpacingMultiple: 1.2 });
  bullets(s, [
    "Biology lens re-derives Q3 after reading the physics lens on Q1 & Q4 — a physical-substrate concept (e.g. dissipative structures) transfers across.",
    "Social-science lens re-derives Q2 after Grok's constraint-stripping of Q5 & Q6 — freed from an implicit assumption.",
    "Random neighborhoods + multiple regenerations dilute weak ideas and amplify fertile ones.",
  ], 0.85, 4.15, 11.6, { fs: 13.5, gap: 11 });
  notes(s, "Productive interference is the source of novelty. Source: about/how.md.");
})();

/* ============================================================================
   ACT IV — THE CAST (38–46)
   ============================================================================ */
const ACT4 = "ACT IV · THE CAST";
divider(38, "ACT IV", "The Cast", "Four browser-driven super-experts, each in a fixed disciplinary lens, conducted by one Orchestrator over the Claude-in-Chrome transport.");

// 39 — four lenses overview
(() => {
  const s = content(39, "Fixed-Lens Ensemble", "Four minds, four lenses.", ACT4);
  s.addText("Each frontier LLM receives a permanent, non-negotiable disciplinary lens. The tension between lenses is the engine of novelty.", {
    x: 0.75, y: 2.25, w: 11.8, h: 0.8, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
  const four = [["🧬", "Claude", "Biological Philosopher", EX.claude], ["⚛", "ChatGPT", "Physical Engineer", EX.chatgpt], ["📊", "Gemini", "Human-System Evaluator", EX.gemini], ["🌀", "Grok", "Radical World-Modeler", EX.grok]];
  four.forEach((t, i) => {
    const x = 0.75 + i * 3.0;
    card(s, x, 3.3, 2.8, 2.7, { accent: t[3], fill: C.panel });
    s.addShape("ellipse", { x: x + 0.95, y: 3.55, w: 0.9, h: 0.9, fill: { color: C.void3 }, line: { color: t[3], width: 1.5 } });
    s.addText(t[0], { x: x + 0.95, y: 3.55, w: 0.9, h: 0.9, fontSize: 24, align: "center", valign: "middle" });
    s.addText(t[1], { x: x + 0.15, y: 4.55, w: 2.5, h: 0.5, fontFace: FD, fontSize: 19, bold: true, color: t[3], align: "center" });
    s.addText(t[2], { x: x + 0.15, y: 5.05, w: 2.5, h: 0.8, fontFace: FM, fontSize: 11, color: C.text, align: "center", lineSpacingMultiple: 1.1 });
  });
  notes(s, "The four fixed-lens experts. Source: README.md.");
})();

// expert deep dive helper
function expertSlide(n, glyph, model, vendor, role, lenses, style, color) {
  const s = content(n, `Expert · ${vendor}`, `${model} — ${role}.`, ACT4, { ts: 26, th: 1.2 });
  s.addShape("ellipse", { x: 0.85, y: 2.6, w: 1.4, h: 1.4, fill: { color: C.void3 }, line: { color, width: 2 } });
  s.addText(glyph, { x: 0.85, y: 2.6, w: 1.4, h: 1.4, fontSize: 40, align: "center", valign: "middle" });
  s.addText(model, { x: 0.7, y: 4.05, w: 1.75, h: 0.5, fontFace: FD, fontSize: 18, bold: true, color, align: "center" });
  card(s, 2.7, 2.5, 5.3, 3.6, { accent: color, fill: C.void2 });
  s.addText("FIXED LENS", { x: 3.0, y: 2.75, w: 4.7, h: 0.35, fontFace: FM, fontSize: 11, color, charSpacing: 2 });
  bullets(s, lenses, 3.0, 3.15, 4.7, { fs: 13, gap: 8, color: C.text });
  card(s, 8.3, 2.5, 4.3, 3.6, { fill: C.panel, line: C.borderHi });
  s.addText("EPISTEMIC STYLE", { x: 8.6, y: 2.75, w: 3.7, h: 0.35, fontFace: FM, fontSize: 11, color: C.amber, charSpacing: 2 });
  s.addText(style, { x: 8.6, y: 3.2, w: 3.7, h: 2.7, fontFace: FM, fontSize: 13, color: C.ice, valign: "top", lineSpacingMultiple: 1.3 });
  notes(s, `${model} fixed lens and style. Source: README.md, about/who.md, _shared/expert-setup.md.`);
}

expertSlide(40, "🧬", "Claude", "Anthropic", "Biological Philosopher",
  ["Evolutionary & systems biology", "Ancient texts — Vedas, Stoic, Taoist, Greek", "Continental philosophy & ethics", "Pattern languages of living systems"],
  "Finds the living-system analogy. Looks for what evolution has already solved. Brings philosophical nuance to mechanistic questions.", EX.claude);

expertSlide(41, "⚛", "ChatGPT", "OpenAI", "Physical Engineer",
  ["Theoretical & applied physics", "Chemistry & materials science", "Systems engineering & mechanism", "Quantitative first-principles modeling"],
  "Demands quantitative mechanism and engineering concreteness. Converts intuition into buildable, testable structure.", EX.chatgpt);

expertSlide(42, "📊", "Gemini", "Google DeepMind", "Human-System Evaluator",
  ["Social science & behavioral economics", "Product strategy & market dynamics", "HCI & UX research", "Evaluation methodology & measurement"],
  "Grounds ideas in real users and measurement. Asks how it would be evaluated, adopted, and felt in context.", EX.gemini);

expertSlide(43, "🌀", "Grok", "xAI", "Radical World-Modeler",
  ["Creative world-modeling & scenario design", "Radical efficiency & constraint-stripping", "Contrarian hypothesis generation", "Sci-fi as method"],
  "Strips constraints and models radical alternatives. The contrarian that frees the panel from shared assumptions.", EX.grok);

// 44 — Orchestrator
(() => {
  const s = content(44, "The Conductor", "The Orchestrator —\nClaude Code.", ACT4, { ts: 27, th: 1.3 });
  s.addText("Claude Code, under the Triple-PhD MIT Genius persona, conducts the ensemble end to end.", {
    x: 0.75, y: 2.6, w: 11.8, h: 0.6, fontFace: FM, fontSize: 15, color: C.text });
  const r = [["Decompose", "parse the goal into coupled sub-questions"], ["Select", "diagnose & pick the optimal workflow"], ["Brief", "deliver lens-specific prompts to each expert"], ["Run", "drive the inner/outer loop state machine"], ["Synthesise", "integrate, score, choose Current Best"], ["Archive", "write full transcripts + lineage to disk"]];
  r.forEach((t, i) => {
    const x = 0.75 + (i % 3) * 4.0;
    const y = 3.35 + Math.floor(i / 3) * 1.45;
    card(s, x, y, 3.75, 1.25, { accent: C.amber, fill: C.panel });
    s.addText(t[0], { x: x + 0.25, y: y + 0.15, w: 3.3, h: 0.45, fontFace: FD, fontSize: 15, bold: true, color: C.amber });
    s.addText(t[1], { x: x + 0.25, y: y + 0.6, w: 3.3, h: 0.6, fontFace: FM, fontSize: 11, color: C.text, lineSpacingMultiple: 1.15 });
  });
  notes(s, "Orchestrator responsibilities. Source: about/who.md, about/what.md.");
})();

// 45 — why fixed slots
(() => {
  const s = content(45, "Design Decision", "Why fixed expert slots?", ACT4);
  bullets(s, [
    "Permanent roles build implicit session memory — each expert develops a consistent voice and lens that deepens cross-pollination.",
    "Role permanence is the foundation of the TMS: each expert becomes the acknowledged owner of its domain.",
    "Rotating roles would yield generic polymath responses, indistinguishable from one another — losing the diversity that makes the ensemble valuable.",
  ], 0.8, 2.4, 11.7, { fs: 14.5, gap: 14 });
  card(s, 0.75, 5.35, 11.8, 1.1, { accent: C.cyan, fill: C.void2 });
  s.addText("EXCEPTION  ·  the W3 Organizer role rotates Claude → ChatGPT → Gemini → Grok, because it is a process role (redundancy filter, bridge questions) that benefits from fresh perspectives.", {
    x: 1.1, y: 5.35, w: 11.1, h: 1.1, fontFace: FM, fontSize: 12.5, color: C.ice, valign: "middle", lineSpacingMultiple: 1.2 });
  notes(s, "Fixed slots vs. the W3 rotating Organizer. Source: architecture.md §14.2.");
})();

// 46 — Claude-in-Chrome transport
(() => {
  const s = content(46, "The Transport", "Claude-in-Chrome.", ACT4);
  s.addText("Drives four real browser tabs at their highest reasoning modes — no APIs, no lock-in, total visibility.", {
    x: 0.75, y: 2.25, w: 11.8, h: 0.6, fontFace: FM, fontSize: 15, color: C.text });
  const tabs = [["Claude", "Opus 4.8 · High", EX.claude], ["ChatGPT", "Pro", EX.chatgpt], ["Gemini", "3.1 Pro · Extended", EX.gemini], ["Grok", "Expert", EX.grok]];
  tabs.forEach((t, i) => {
    const x = 0.75 + i * 3.0;
    card(s, x, 3.0, 2.8, 1.4, { accent: t[2], fill: C.panel });
    s.addText(t[0], { x: x + 0.2, y: 3.18, w: 2.4, h: 0.45, fontFace: FD, fontSize: 16, bold: true, color: C.ice });
    s.addText(t[1], { x: x + 0.2, y: 3.65, w: 2.4, h: 0.6, fontFace: FM, fontSize: 11.5, color: t[2] });
  });
  const why = [["Highest modes", "Top reasoning modes are browser-only or stronger than API equivalents."], ["Model-agnostic", "UI changes are absorbed via config in expert-setup.md — no code changes."], ["Transparent", "Every interaction is visible in the browser, reviewable in real time."]];
  why.forEach((t, i) => {
    const x = 0.75 + i * 4.0;
    card(s, x, 4.7, 3.75, 1.55, { accent: C.cyan, fill: C.void2 });
    s.addText(t[0], { x: x + 0.25, y: 4.85, w: 3.3, h: 0.45, fontFace: FD, fontSize: 14, bold: true, color: C.cyan });
    s.addText(t[1], { x: x + 0.25, y: 5.3, w: 3.3, h: 0.9, fontFace: FM, fontSize: 11, color: C.text, lineSpacingMultiple: 1.15 });
  });
  notes(s, "Claude-in-Chrome transport rationale. Source: architecture.md §14.1, _shared/expert-setup.md.");
})();

/* ============================================================================
   ACT V — THE SIX WORKFLOWS (47–64)
   ============================================================================ */
const ACT5 = "ACT V · THE WORKFLOWS";
divider(47, "ACT V", "The Six Workflows", "Six Innovation Harnesses — a designed portfolio of cognitive-pressure profiles over one shared blank+leak engine.");

// 48 — suite at a glance
(() => {
  const s = content(48, "Eight Skills Total", "The Innovation Harness suite.", ACT5);
  const rows = [
    ["W1", "Cross-Pollination", "ORCHESTRATOR-Ω", "pure blank+leak"],
    ["W2", "Kitchen Table", "ORCHESTRATOR-KITCHEN", "TSM-CI + Yes-and"],
    ["W3", "Delphi Hackathon", "ORCHESTRATOR-DELPHI", "rotating Organizer"],
    ["W4", "Improv Lab", "ORCHESTRATOR-IMPROV", "wild extensions"],
    ["W5", "Flash-Team", "ORCHESTRATOR-FLASH", "owner assignment"],
    ["W6", "Quarterly Review", "ORCHESTRATOR-REVIEW", "adversarial board"],
  ];
  rows.forEach((r, i) => {
    const y = 2.35 + i * 0.66;
    card(s, 0.75, y, 11.85, 0.58, { fill: i % 2 ? C.panel : C.void2, line: C.border, r: 0.04 });
    s.addText(r[0], { x: 1.0, y, w: 1.0, h: 0.58, fontFace: FD, fontSize: 16, bold: true, color: C.amber, valign: "middle" });
    s.addText(r[1], { x: 2.0, y, w: 3.4, h: 0.58, fontFace: FD, fontSize: 14, bold: true, color: C.ice, valign: "middle" });
    s.addText(r[2], { x: 5.5, y, w: 4.0, h: 0.58, fontFace: FM, fontSize: 11.5, color: C.cyan, valign: "middle" });
    s.addText(r[3], { x: 9.6, y, w: 2.9, h: 0.58, fontFace: FM, fontSize: 11, color: C.textDim, valign: "middle" });
  });
  s.addText("+  meta-harness (selector)   +   meta-meta-harness (generator / self-improver)", {
    x: 0.75, y: 6.5, w: 11.8, h: 0.4, fontFace: FM, fontSize: 12.5, color: C.amber, charSpacing: 1 });
  notes(s, "Six workflows + 2 meta-skills. Source: skills/README.md, research/03.");
})();

// workflow what + structure helper (2 slides each)
function wfWhat(n, wid, name, codename, dna, useCase, color) {
  const s = content(n, `Workflow ${wid} · ${codename}`, `${name}.`, ACT5, { ts: 28, th: 1.0 });
  card(s, 0.75, 2.4, 7.5, 3.7, { accent: color, fill: C.void2 });
  s.addText("CORE DNA", { x: 1.05, y: 2.65, w: 6.9, h: 0.35, fontFace: FM, fontSize: 11, color: color, charSpacing: 2 });
  s.addText(dna, { x: 1.05, y: 3.05, w: 6.9, h: 3.0, fontFace: FM, fontSize: 14.5, color: C.text, valign: "top", lineSpacingMultiple: 1.3 });
  card(s, 8.5, 2.4, 4.1, 3.7, { fill: C.panel, line: C.borderHi });
  s.addText("BEST FOR", { x: 8.8, y: 2.65, w: 3.5, h: 0.35, fontFace: FM, fontSize: 11, color: C.amber, charSpacing: 2 });
  s.addText(useCase, { x: 8.8, y: 3.05, w: 3.5, h: 3.0, fontFace: FM, fontSize: 13.5, color: C.ice, valign: "top", lineSpacingMultiple: 1.3 });
  notes(s, `${name} — what & when. Source: research/03, skills/README.md.`);
}
function wfStruct(n, wid, name, color, structItems, output) {
  const s = content(n, `Workflow ${wid} · structure`, `${name} — how it runs.`, ACT5, { ts: 26, th: 1.0 });
  bullets(s, structItems, 0.8, 2.4, 11.7, { fs: 14, gap: 12 });
  card(s, 0.75, 5.5, 11.8, 1.0, { accent: C.success, fill: C.void2 });
  s.addText("OUTPUT", { x: 1.05, y: 5.6, w: 1.6, h: 0.3, fontFace: FM, fontSize: 10.5, color: C.success, charSpacing: 2 });
  s.addText(output, { x: 1.05, y: 5.9, w: 11.3, h: 0.55, fontFace: FM, fontSize: 13, color: C.ice, valign: "middle" });
  notes(s, `${name} — structure & output. Source: research/03.`);
}

// W1 (49,50)
wfWhat(49, "1", "Cross-Pollination Engine", "ORCHESTRATOR-Ω",
  "Your exact original idea, formalized into a production-grade swarm with inner/outer loops. The purest blanking+leaking signal — no collaboration constraints layered on top.",
  "General purpose; the first run; when you want maximum control over the process and the strongest cross-domain interdependencies.", EX.claude);
wfStruct(50, "1", "Cross-Pollination Engine", EX.claude,
  ["4 outer rounds × 6 inner loops", "Randomly blank 1–3 questions per loop", "4 AI responses per focal question", "Orchestrator distillation → “Current Best” after each inner loop", "Interconnection Synthesis + Safety Check after each outer round"],
  "Unified 1-page roadmap + 3 flagship experiments.");

// W2 (51,52)
wfWhat(51, "2", "TSM-CI Kitchen Table", "ORCHESTRATOR-KITCHEN",
  "Transactive Systems Model of Collective Intelligence (TMS/TAS/TRS) + Group Flow. Closest to the real DeepMind “kitchen at 11pm” magic, with explicit role differentiation.",
  "The warmest, most human-feeling output; an interconnected research-programme feel; recommended first harness.", EX.chatgpt);
wfStruct(52, "2", "TSM-CI Kitchen Table", EX.chatgpt,
  ["4 outer rounds; permanent AI specialty roles", "“Yes-and” improvisation rule throughout", "TAS Attention Burst + TRS Synthesis inside each round", "Shared TMS tracker (who-knows-what)", "Final co-written program in the voice of Jeff / Koray / Noam / Oriol"],
  "A coherent “2027 Gemini Research Program” + transactive map.");

// W3 (53,54)
wfWhat(53, "3", "AI-Delphi Swarm Hackathon", "ORCHESTRATOR-DELPHI",
  "Fixed 5-round AI-Delphi with a rotating Organizer; ruthless redundancy filtering; a rapid prototyping sprint at the close.",
  "Maximum novelty plus a concrete deliverable in under two hours; rapid landscape mapping.", EX.gemini);
wfStruct(54, "3", "AI-Delphi Swarm Hackathon", EX.gemini,
  ["5 fixed outer rounds", "Organizer rotates Claude → GPT → Gemini → Grok", "Organizer creates bridge questions + runs a Redundancy Filter", "Rapid Prototyping Sprint at the end", "Grant abstract + 1 cheap experiment per question"],
  "Grant abstracts + prototype experiments + a “Ship It” verdict.");

// W4 (55,56)
wfWhat(55, "4", "Group Flow Improv Lab", "ORCHESTRATOR-IMPROV",
  "Sawyer Group Flow + improv theater. “Yes-and” rule plus three mandatory wild extensions per response, with theatrical energy throughout.",
  "Creative breakthrough; escaping local minima; surfacing surprising Vedas–physics–agency analogies.", EX.grok);
wfStruct(56, "4", "Group Flow Improv Lab", EX.grok,
  ["3 outer rounds — short and intense", "Every response opens “Yes-and building on [prior idea]”", "Each AI proposes exactly 3 wild extensions (Wild1/2/3)", "Grand Finale written as a scripted kitchen-table dialogue"],
  "A theatrical dialogue script + a “Curtain Call” verdict.");

// W5 (57,58)
wfWhat(57, "5", "Ideaflow + Flash-Team", "ORCHESTRATOR-FLASH",
  "Utley Ideaflow + TSM flash-team. Every round is a 24-hour sprint with “input obsession” — one brand-new cross-domain source per AI per response.",
  "Walking away with a ready-to-execute research plan with assigned owners.", C.cyan);
wfStruct(58, "5", "Ideaflow + Flash-Team", C.cyan,
  ["4 outer rounds; “Input Obsession” rule enforced", "Grounding Check (simulate code / paper-search) after rounds 2 & 4", "Sprint Retrospective after each outer round", "Final Flash Convergence: ranked priorities + owners"],
  "Ranked execution roadmap + a “Minimum Lovable Research Program.”");

// W6 (59,60)
wfWhat(59, "6", "Hybrid Quarterly Review", "ORCHESTRATOR-REVIEW",
  "The real DeepMind quarterly off-site: bottom-up creative exploration, then a top-down adversarial leadership review.",
  "Something shareable, publication-ready, or suitable for a research proposal; leadership audience.", C.amber);
wfStruct(60, "6", "Hybrid Quarterly Review", C.amber,
  ["Phase 1 — 3 bottom-up blank+leak rounds + “Leadership Pulse” vote", "Phase 2 — 1 adversarial round: one AI becomes “Jeff Dean + Safety Board / VC / Regulator”", "Stress-tests every claim"],
  "Publication-ready whitepaper, risk register, go/no-go + 3 flagship experiments.");

// 61 — shared DNA
(() => {
  const s = content(61, "Common Ground", "Shared DNA across all six.", ACT5);
  const d = ["Clean-slate blanking of the focal question", "Leaking of all other questions' current best", "Four AI responses per focal question per round", "Orchestrator selects the new Current Best", "Distillation identifies the strongest cross-connection", "A final convergence synthesis across all questions"];
  d.forEach((t, i) => {
    const x = 0.75 + (i % 2) * 6.0;
    const y = 2.5 + Math.floor(i / 2) * 1.18;
    card(s, x, y, 5.7, 1.02, { accent: i % 2 ? C.cyan : C.amber, fill: C.panel });
    s.addText(`${i + 1}`, { x: x + 0.2, y, w: 0.6, h: 1.02, fontFace: FD, fontSize: 22, bold: true, color: i % 2 ? C.cyan : C.amber, valign: "middle" });
    s.addText(t, { x: x + 0.85, y, w: 4.7, h: 1.02, fontFace: FM, fontSize: 12.5, color: C.text, valign: "middle", lineSpacingMultiple: 1.1 });
  });
  notes(s, "Shared design elements across all six workflows. Source: research/03.");
})();

// 62 — one state machine, six configs
(() => {
  const s = content(62, "Architecture", "One state machine,\nsix configs.", ACT5, { ts: 27, th: 1.3 });
  s.addText("All six workflows share the same Orchestrator state machine. They differ only in configuration parameters — adding a workflow is writing a new Skill file, not new engine code.", {
    x: 0.75, y: 2.6, w: 11.8, h: 0.95, fontFace: FM, fontSize: 14.5, color: C.text, lineSpacingMultiple: 1.25 });
  const hdr = ["Param", "W1", "W2", "W3", "W4", "W5", "W6"];
  const data = [
    ["Outer rounds", "4", "4", "5", "3", "4", "3+1"],
    ["Blanked / loop", "1–3", "2", "2", "1–3", "2", "2"],
    ["Organizer", "—", "—", "rot.", "—", "—", "critic"],
    ["Word budget", "—", "400", "380", "380", "390", "—"],
  ];
  const colX = [0.75, 4.4, 5.75, 7.1, 8.45, 9.8, 11.15];
  const colW = [3.6, 1.3, 1.3, 1.3, 1.3, 1.3, 1.45];
  // header
  hdr.forEach((h, i) => s.addText(h, { x: colX[i], y: 3.75, w: colW[i], h: 0.45, fontFace: FM, fontSize: 11.5, bold: true, color: C.amber, align: i ? "center" : "left", valign: "middle" }));
  s.addShape("line", { x: 0.75, y: 4.22, w: 11.85, h: 0, line: { color: C.borderHi, width: 1 } });
  data.forEach((row, r) => {
    const y = 4.32 + r * 0.55;
    row.forEach((c, i) => s.addText(c, { x: colX[i], y, w: colW[i], h: 0.5, fontFace: i ? FM : FD, fontSize: i ? 12 : 12.5, bold: i === 0, color: i === 0 ? C.ice : C.text, align: i ? "center" : "left", valign: "middle" }));
    if (r < data.length - 1) s.addShape("line", { x: 0.75, y: y + 0.5, w: 11.85, h: 0, line: { color: C.border, width: 0.5 } });
  });
  notes(s, "One state machine parameterised six ways. Source: architecture.md §8.");
})();

// 63 — how to choose
(() => {
  const s = content(63, "The Decision Heuristic", "How to choose.", ACT5);
  const rules = [["Low time budget", "W4 (3 rounds) or W3 (5 short rounds)"], ["Need an actionable roadmap", "W5"], ["Need a whitepaper / board deck", "W6"], ["Stuck in a local minimum", "W4"], ["Need stress-testing", "W6"], ["Depth + interdependency", "W1 or W2"], ["Team-convergence feel", "W2"], ["Don't know which", "meta-harness decides for you"]];
  rules.forEach((t, i) => {
    const y = 2.4 + i * 0.55;
    card(s, 0.75, y, 11.85, 0.48, { fill: i % 2 ? C.panel : C.void2, line: C.border, r: 0.04 });
    s.addText(t[0], { x: 1.05, y, w: 6.5, h: 0.48, fontFace: FM, fontSize: 12.5, color: C.text, valign: "middle" });
    s.addText("→  " + t[1], { x: 7.6, y, w: 4.9, h: 0.48, fontFace: FD, fontSize: 12.5, bold: true, color: C.amber, valign: "middle" });
  });
  notes(s, "Workflow selection heuristic. Source: skills/README.md.");
})();

// 64 — recommended first run
(() => {
  const s = content(64, "Recommended Start", "Begin with W2 — Kitchen Table.", ACT5);
  card(s, 0.75, 2.6, 11.8, 2.0, { accent: EX.chatgpt, fill: C.void2 });
  s.addText("It is the closest match to what the actual DeepMind leaders described doing — the long-shared-history, finish-each-other's-sentences dynamic — and explicitly maintains all three transactive systems (TMS / TAS / TRS).", {
    x: 1.1, y: 2.85, w: 11.1, h: 1.5, fontFace: FM, fontSize: 16, color: C.ice, valign: "top", lineSpacingMultiple: 1.3 });
  s.addText("It also serves as the base for the advanced Tsaheylu-infused evolution, Harness Omega-1.", {
    x: 0.75, y: 4.9, w: 11.8, h: 0.7, fontFace: FM, fontSize: 14, italic: true, color: C.amber, lineSpacingMultiple: 1.2 });
  notes(s, "W2 recommended first; base for Tsaheylu Omega-1. Source: research/03.");
})();

/* ============================================================================
   ACT VI — THE LAYERS (65–72)
   ============================================================================ */
const ACT6 = "ACT VI · THE LAYERS";
divider(65, "ACT VI", "The Layers", "Workflows ⊂ meta-harness ⊂ meta-meta-harness — and the Tsaheylu creative-infusion behind the feasibility gate.");

// 66 — three layers
(() => {
  const s = content(66, "Nested Abstraction", "Three nested layers.", ACT6);
  const layers = [["META-META-HARNESS", "generates · critiques · self-improves harnesses; hosts Tsaheylu", C.amber, 0.75, 9.0], ["META-HARNESS", "goal → decompose → assign → select → run", C.cyan, 1.8, 7.0], ["WORKFLOWS  W1–W6", "six collaborative-intelligence patterns over the blank+leak engine", C.ice, 2.85, 5.0]];
  layers.forEach((t, i) => {
    const y = 2.5 + i * 1.25;
    card(s, t[3], y, t[4], 1.05, { accent: t[2], fill: i === 0 ? C.void2 : C.panel });
    s.addText(t[0], { x: t[3] + 0.3, y: y + 0.12, w: t[4] - 0.5, h: 0.45, fontFace: FD, fontSize: 16, bold: true, color: t[2] });
    s.addText(t[1], { x: t[3] + 0.3, y: y + 0.55, w: t[4] - 0.5, h: 0.45, fontFace: FM, fontSize: 11, color: C.text });
  });
  s.addText("⊂", { x: 9.9, y: 2.5, w: 1, h: 3.75, fontFace: FD, fontSize: 40, bold: true, color: C.borderHi, align: "center", valign: "middle" });
  s.addText("Each layer operates one level of abstraction higher than the one it contains.", {
    x: 0.75, y: 6.4, w: 11.8, h: 0.4, fontFace: FM, fontSize: 13, italic: true, color: C.amber });
  notes(s, "Three nested layers. Source: skills/README.md, research/04.");
})();

// 67 — layer 1
(() => {
  const s = content(67, "Layer 1", "Workflows — the patterns.", ACT6);
  s.addText("Six workflow skills, each encoding a distinct collaborative-intelligence pattern, all sharing the same Phase-0 setup and the same P0–P5 prompt principles.", {
    x: 0.75, y: 2.3, w: 11.8, h: 0.9, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
  const w = ["W1 Cross-Pollination", "W2 Kitchen Table", "W3 Delphi Hackathon", "W4 Improv Lab", "W5 Flash-Team", "W6 Quarterly Review"];
  w.forEach((t, i) => {
    const x = 0.75 + (i % 3) * 4.0;
    const y = 3.5 + Math.floor(i / 3) * 1.1;
    card(s, x, y, 3.75, 0.9, { accent: C.cyan, fill: C.panel });
    s.addText(t, { x: x + 0.25, y, w: 3.3, h: 0.9, fontFace: FD, fontSize: 14, bold: true, color: C.ice, valign: "middle" });
  });
  s.addText("Shared foundations:  _shared/expert-setup.md  ·  _shared/prompt-principles.md", {
    x: 0.75, y: 6.1, w: 11.8, h: 0.4, fontFace: FM, fontSize: 12, color: C.amber });
  notes(s, "Layer 1 workflows + shared foundations. Source: skills/README.md.");
})();

// 68 — layer 2
(() => {
  const s = content(68, "Layer 2", "Meta-Harness — the selector.", ACT6);
  s.addText("Accepts an arbitrary GOAL, decomposes it into N tightly-coupled sub-questions, assigns expert lenses, selects the best-fit workflow, and runs the session end to end.", {
    x: 0.75, y: 2.3, w: 11.8, h: 0.9, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
  const flow = ["GOAL", "DECOMPOSE", "COUPLING MAP", "ASSIGN LENSES", "SELECT WORKFLOW", "RUN"];
  flow.forEach((t, i) => {
    const x = 0.75 + i * 2.05;
    card(s, x, 3.7, 1.85, 1.0, { accent: C.amber, fill: C.panel, r: 0.06 });
    s.addText(t, { x: x + 0.1, y: 3.7, w: 1.65, h: 1.0, fontFace: FD, fontSize: 12, bold: true, color: C.ice, align: "center", valign: "middle" });
    if (i < flow.length - 1) s.addShape("line", { x: x + 1.85, y: 4.2, w: 0.2, h: 0, line: { color: C.amber, width: 2, endArrowType: "triangle" } });
  });
  s.addText("Workflow selection keys on time budget × goal type (exploration · breadth-mapping · actionable plan · creative reframe · stress-testing).", {
    x: 0.75, y: 5.2, w: 11.8, h: 0.8, fontFace: FM, fontSize: 13, color: C.textDim, lineSpacingMultiple: 1.25 });
  notes(s, "Meta-harness goal pipeline. Source: skills/README.md, architecture.md §9.");
})();

// 69 — decomposition discipline
(() => {
  const s = content(69, "Decomposition Discipline", "Good sub-questions only.", ACT6);
  const d = [["Necessity", "removing it would leave a gap in the goal"], ["Interdependence", "every pair has at least a weak coupling"], ["Non-overlap", "no two ask the same thing differently"], ["Open phrasing", "How… / What… / Under what conditions…"], ["Size invariant", "N ∈ [3, 12] — below 3 no cross-pollination; above 12 the leak context bloats"]];
  d.forEach((t, i) => {
    const y = 2.5 + i * 0.78;
    card(s, 0.75, y, 11.85, 0.68, { fill: i % 2 ? C.panel : C.void2, line: C.border, r: 0.05 });
    s.addText(t[0], { x: 1.05, y, w: 3.0, h: 0.68, fontFace: FD, fontSize: 14, bold: true, color: C.amber, valign: "middle" });
    s.addText(t[1], { x: 4.2, y, w: 8.2, h: 0.68, fontFace: FM, fontSize: 12.5, color: C.text, valign: "middle" });
  });
  s.addText("A coupling map (interdependence per pair) is generated before the run — it drives the leaking and the final meta-analysis.", {
    x: 0.75, y: 6.55, w: 11.8, h: 0.4, fontFace: FM, fontSize: 12, italic: true, color: C.cyan });
  notes(s, "Decomposition constraints + coupling map. Source: architecture.md §9.2, §14.6.");
})();

// 70 — layer 3
(() => {
  const s = content(70, "Layer 3", "Meta-Meta-Harness —\nself-breeding.", ACT6, { ts: 27, th: 1.3 });
  s.addText("Harnesses that generate, critique, and self-improve other harnesses. Not hypothetical — by 2026, Meta-Agent, KernelEvolve, and Meta-Harness demonstrate the scaffolding is already viable.", {
    x: 0.75, y: 2.6, w: 11.8, h: 1.0, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
  const loop = [["GENERATE", "spin a new harness variant"], ["CRITIQUE", "structural gaps, missing gates, novelty score"], ["SELF-IMPROVE", "patch, version, changelog — up to 3 iterations"]];
  loop.forEach((t, i) => {
    const x = 0.75 + i * 4.0;
    card(s, x, 3.9, 3.75, 1.7, { accent: C.amber, fill: C.void2 });
    s.addText(t[0], { x: x + 0.25, y: 4.1, w: 3.3, h: 0.5, fontFace: FD, fontSize: 16, bold: true, color: C.amber });
    s.addText(t[1], { x: x + 0.25, y: 4.62, w: 3.3, h: 0.9, fontFace: FM, fontSize: 12, color: C.text, lineSpacingMultiple: 1.2 });
    if (i < 2) s.addText("→", { x: x + 3.78, y: 3.9, w: 0.25, h: 1.7, fontFace: FD, fontSize: 22, bold: true, color: C.borderHi, align: "center", valign: "middle" });
  });
  s.addText("Recurse three times → an architecture that spins up entirely new research programs for 2030 problems.", {
    x: 0.75, y: 5.85, w: 11.8, h: 0.5, fontFace: FM, fontSize: 13.5, italic: true, color: C.cyan });
  notes(s, "Meta-meta self-breeding loop. Source: research/04 §3, architecture.md §10.");
})();

// 71 — sci-fi operational
(() => {
  const s = content(71, "Operational, Not Decorative", "Sci-fi + myth as a\nbreakthrough mechanism.", ACT6, { ts: 26, th: 1.3 });
  s.addText("Koestler's bisociation: slam two unrelated matrices together until sparks fly. Analogical depth from distant domains doubles idea output in creative teams.", {
    x: 0.75, y: 2.6, w: 11.8, h: 0.9, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
  const h = [["Verne", "→ the submarine (Simon Lake)"], ["Wells", "→ liquid-fuel rocket (Goddard) & chain reaction (Szilard)"], ["Star Trek", "→ the cellphone"], ["Clarke", "→ the relay satellite / WWW"], ["Interstellar", "→ accurate black-hole rendering (Kip Thorne)"], ["Mythology", "→ Talos, Golem, Prometheus: every AI trope, pre-figured"]];
  h.forEach((t, i) => {
    const x = 0.75 + (i % 2) * 6.0;
    const y = 3.7 + Math.floor(i / 2) * 0.95;
    card(s, x, y, 5.7, 0.82, { accent: i % 2 ? C.cyan : C.amber, fill: C.panel });
    s.addText(t[0], { x: x + 0.25, y, w: 1.9, h: 0.82, fontFace: FD, fontSize: 13, bold: true, color: C.ice, valign: "middle" });
    s.addText(t[1], { x: x + 2.0, y, w: 3.55, h: 0.82, fontFace: FM, fontSize: 10.5, color: C.text, valign: "middle" });
  });
  notes(s, "Sci-fi/myth births real technology — bisociation. Source: research/04.");
})();

// 72 — Tsaheylu
(() => {
  const s = content(72, "The Creative Infusion", "Tsaheylu — behind the\nfeasibility gate.", ACT6, { ts: 26, th: 1.3 });
  s.addText("In Avatar, the Tree of Souls is transactive collective intelligence made literal: ancestors queue context through the neural bond while the focal singer receives fresh, uncontaminated insight from the whole forest.", {
    x: 0.75, y: 2.6, w: 11.8, h: 1.0, fontFace: FM, fontSize: 14.5, color: C.text, lineSpacingMultiple: 1.25 });
  const map = [["Tree of Souls", "the six-workflow swarm"], ["Four ancestors", "Claude · GPT · Gemini · Grok"], ["Tsahìk shaman", "the Orchestrator"], ["Tsaheylu bond", "the blank + leak mechanic"], ["Sacred disconnection", "deleting the focal answer"], ["Forest pouring wisdom", "siblings flooding the fresh derivation"]];
  map.forEach((t, i) => {
    const x = 0.75 + (i % 2) * 6.0;
    const y = 3.75 + Math.floor(i / 2) * 0.7;
    s.addText(t[0], { x, y, w: 2.7, h: 0.6, fontFace: FD, fontSize: 12, bold: true, color: C.amber, valign: "middle" });
    s.addText("→ " + t[1], { x: x + 2.7, y, w: 3.3, h: 0.6, fontFace: FM, fontSize: 11.5, color: C.text, valign: "middle" });
  });
  card(s, 0.75, 6.0, 11.8, 0.65, { accent: C.cyan, fill: C.void2 });
  s.addText("Opt-in only — kept behind the P3/P4 feasibility gate so outputs stay engineering-grade, not poetry.", {
    x: 1.05, y: 6.0, w: 11.2, h: 0.65, fontFace: FM, fontSize: 12.5, color: C.cyan, italic: true, valign: "middle" });
  notes(s, "Tsaheylu structural mapping + feasibility gate. Source: research/04, architecture.md §14.4.");
})();

/* ============================================================================
   ACT VII — PRINCIPLES & GUARDRAILS (73–82)
   ============================================================================ */
const ACT7 = "ACT VII · GUARDRAILS";
divider(73, "ACT VII", "Principles & Guardrails", "Persona P0; principles P1–P5; the per-step verification harness; and absolute transparency with full lineage.");

// principle helper
function principleSlide(n, pid, title, body, color) {
  const s = content(n, `Principle · ${pid}`, title, ACT7, { ts: 28, th: 1.1 });
  card(s, 0.75, 2.55, 11.8, 3.4, { accent: color, fill: C.void2 });
  s.addText(pid, { x: 1.1, y: 2.85, w: 2.2, h: 1.4, fontFace: FD, fontSize: 64, bold: true, color });
  s.addText(body, { x: 3.4, y: 2.95, w: 8.9, h: 2.8, fontFace: FM, fontSize: 16, color: C.ice, valign: "top", lineSpacingMultiple: 1.35 });
  notes(s, `${pid} — ${title}. Source: _shared/prompt-principles.md.`);
}
principleSlide(74, "P0", "The Persona.", "Triple-PhD MIT Genius — applied to the Orchestrator AND every expert. The epistemic contract that sets the quality floor, breadth of reference, courage, and self-critique for the whole run.", C.amber);
principleSlide(75, "P1", "Fresh first-principles\nderivation.", "The focal question is answered from a clean slate, re-derived from cross-domain fundamentals — never paraphrased from a prior answer.", EX.claude);
principleSlide(76, "P2", "Cross-domain ruthlessness.", "Draw from physics, chemistry, biology, neuroscience, philosophy, Vedas/Upanishads, complex systems. Analogies must be mechanistic, not decorative.", C.cyan);
principleSlide(77, "P3", "Sci-fi as SPARK,\nnot SUBSTANCE.", "Take light inspiration from sci-fi broadly — Asimov, Clarke, Le Guin, Banks's Culture Minds, Egan, Watts, Liu Cixin — to escape local minima. But if an evocative analogy can't become a buildable mechanism, drop it.", EX.grok);
principleSlide(78, "P4", "Implementability &\nfeasibility first.", "Prioritize buildability over novelty or spectacle. Every hypothesis must be implementable with current/near-term ML & compute — or explicitly name the single missing capability that would unlock it. No hand-waving, no magic.", EX.chatgpt);
principleSlide(79, "P5", "Falsifiable close —\nno length cap.", "End every answer with concrete, near-term experiments a small team could run, each naming the confirm/falsify metric. Length caps removed; detailed chain-of-thought required on every invocation.", C.success);

// 80 — verification harness
(() => {
  const s = content(80, "The Verification Harness", "A gate at every step.", ACT7);
  s.addText("A pure function the Orchestrator calls at each gate point:  verify(gate_type, context) → { passed, observed, expected }.", {
    x: 0.75, y: 2.25, w: 11.8, h: 0.7, fontFace: FM, fontSize: 14, color: C.text, lineSpacingMultiple: 1.2 });
  const gates = ["readiness", "response-complete", "schema", "domain-coverage", "distillation", "safety", "participation", "completeness", "word-count"];
  gates.forEach((g, i) => {
    const x = 0.75 + (i % 3) * 4.0;
    const y = 3.25 + Math.floor(i / 3) * 1.0;
    card(s, x, y, 3.75, 0.82, { accent: C.cyan, fill: C.panel, r: 0.06 });
    s.addText(g + "_gate", { x: x + 0.25, y, w: 3.3, h: 0.82, fontFace: FM, fontSize: 12.5, color: C.ice, valign: "middle" });
  });
  s.addText("Example  ·  schema_gate: response.startswith(“FRESH DERIVATION FOR Q{n}:”)", {
    x: 0.75, y: 6.4, w: 11.8, h: 0.4, fontFace: FM, fontSize: 11.5, color: C.amber });
  notes(s, "Verification harness gate types. Source: architecture.md §11.");
})();

// 81 — escalation + isolation
(() => {
  const s = content(81, "Failure Handling", "Escalation & isolation.", ACT7);
  card(s, 0.75, 2.5, 5.7, 3.5, { accent: C.amber, fill: C.void2 });
  s.addText("GATE-FAILURE ESCALATION", { x: 1.05, y: 2.75, w: 5.1, h: 0.35, fontFace: FM, fontSize: 11, color: C.amber, charSpacing: 2 });
  bullets(s, ["Fail → log → retry the step once", "Fail again → log attempt 2", "Surface observed vs. expected to user", "User: continue · retry · abort", "Overrides are logged, never silent"], 1.05, 3.2, 5.1, { fs: 12.5, gap: 9, color: C.text });
  card(s, 6.85, 2.5, 5.75, 3.5, { accent: C.cyan, fill: C.void2 });
  s.addText("FAILURE-DOMAIN ISOLATION", { x: 7.15, y: 2.75, w: 5.1, h: 0.35, fontFace: FM, fontSize: 11, color: C.cyan, charSpacing: 2 });
  bullets(s, ["One expert tab fails → others continue", "Wrong mode → Phase-0 gate blocks the run", "MCP error → 2 retries → escalate, state intact", "Login wall → pause, preserve, resume clean", "Tsaheylu feasibility fail → auto-revert to base"], 7.15, 3.2, 5.15, { fs: 12.5, gap: 9, color: C.ice });
  notes(s, "Escalation ladder + failure-domain isolation. Source: architecture.md §11.3, §12.");
})();

// 82 — transparency & lineage
(() => {
  const s = content(82, "Absolute Openness", "Transparency & lineage.", ACT7);
  s.addText("Every invocation, response, screenshot, current-best, and synthesis is archived as Markdown. The core asymmetry: blank in-context, preserve in-archive.", {
    x: 0.75, y: 2.25, w: 11.8, h: 0.9, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
  const items = [["Write-only during run", "the archive is the ground truth"], ["Full lineage chain", "each Current Best records source slot + round"], ["Reconstructable", "rebuild state from the archive alone"], ["Audit screenshots", "evidence, not parsed input"], ["gate-log.json", "complete pass/fail audit trail"], ["Sacrosanct history", "blanking never deletes the archive"]];
  items.forEach((t, i) => {
    const x = 0.75 + (i % 3) * 4.0;
    const y = 3.4 + Math.floor(i / 3) * 1.45;
    card(s, x, y, 3.75, 1.25, { accent: C.success, fill: C.panel });
    s.addText(t[0], { x: x + 0.25, y: y + 0.15, w: 3.3, h: 0.45, fontFace: FD, fontSize: 13.5, bold: true, color: C.ice });
    s.addText(t[1], { x: x + 0.25, y: y + 0.6, w: 3.3, h: 0.6, fontFace: FM, fontSize: 11, color: C.text, lineSpacingMultiple: 1.15 });
  });
  notes(s, "Transparency, lineage, blank-in-context/preserve-in-archive. Source: architecture.md §7, §14.3.");
})();

/* ============================================================================
   ACT VIII — PROOF (83–89)
   ============================================================================ */
const ACT8 = "ACT VIII · PROOF";
divider(83, "ACT VIII", "Proof", "The six DeepMind questions, run live and fully archived — starting with Question 1.");

// 84 — canonical example
(() => {
  const s = content(84, "The Worked Example", "Six questions, run live\nand fully archived.", ACT8, { ts: 27, th: 1.3 });
  s.addText("The canonical demonstration applies the harness to the six open research questions from the DeepMind/Gemini talk — at the genuine frontier of current AI research.", {
    x: 0.75, y: 2.6, w: 11.8, h: 1.0, fontFace: FM, fontSize: 15.5, color: C.text, lineSpacingMultiple: 1.3 });
  stat(s, 0.9, 4.0, 2.8, "6", "QUESTIONS", C.amber);
  stat(s, 3.9, 4.0, 2.8, "4", "EXPERTS / LOOP", C.cyan);
  stat(s, 6.9, 4.0, 2.8, "W1", "WORKFLOW", EX.claude);
  stat(s, 9.9, 4.0, 2.8, "100%", "ARCHIVED", C.success);
  notes(s, "Canonical worked example overview. Source: examples/question1/, about/what.md.");
})();

// 85 — Q1 live run
(() => {
  const s = content(85, "The Live Run", "Question 1.", ACT8);
  card(s, 0.75, 2.4, 11.8, 1.6, { accent: EX.claude, fill: C.void2 });
  s.addText("“How do we build truly self-learning / organic continuously learning architectures?”", {
    x: 1.1, y: 2.6, w: 11.1, h: 1.2, fontFace: FD, fontSize: 20, bold: true, color: C.ice, valign: "middle", lineSpacingMultiple: 1.1 });
  const meta = [["Workflow", "W1 Cross-Pollination Engine"], ["Outer round", "01"], ["Inner loop", "Q1 (seeding — no siblings yet)"], ["Invocation", "staged & verbatim-archived"]];
  meta.forEach((t, i) => {
    const x = 0.75 + (i % 2) * 6.0;
    const y = 4.3 + Math.floor(i / 2) * 0.95;
    card(s, x, y, 5.7, 0.8, { fill: C.panel, line: C.border, r: 0.05 });
    s.addText(t[0], { x: x + 0.25, y, w: 2.0, h: 0.8, fontFace: FM, fontSize: 11.5, color: C.amber, valign: "middle" });
    s.addText(t[1], { x: x + 2.2, y, w: 3.3, h: 0.8, fontFace: FM, fontSize: 12, color: C.text, valign: "middle" });
  });
  notes(s, "Q1 live run header. Source: examples/question1/README.md.");
})();

// 86 — phase 0
(() => {
  const s = content(86, "Phase 0 · Convene the Panel", "Four tabs, four verified modes.", ACT8);
  const tabs = [["Claude", "Opus 4.8 · High", EX.claude], ["ChatGPT", "Pro (Instant → Pro)", EX.chatgpt], ["Gemini", "3.1 Pro · Extended", EX.gemini], ["Grok", "Expert", EX.grok]];
  tabs.forEach((t, i) => {
    const x = 0.75 + i * 3.0;
    card(s, x, 2.6, 2.8, 2.0, { accent: t[2], fill: C.panel });
    s.addText(t[0], { x: x + 0.2, y: 2.8, w: 2.4, h: 0.5, fontFace: FD, fontSize: 17, bold: true, color: C.ice });
    s.addText(t[1], { x: x + 0.2, y: 3.3, w: 2.4, h: 0.7, fontFace: FM, fontSize: 11, color: t[2], lineSpacingMultiple: 1.15 });
    s.addText("✓ sanity hello", { x: x + 0.2, y: 4.05, w: 2.4, h: 0.4, fontFace: FM, fontSize: 10.5, color: C.success });
  });
  card(s, 0.75, 4.95, 11.8, 1.2, { accent: C.success, fill: C.void2 });
  s.addText("HARD GATE  ·  each composer label verified to match its target string before any round begins. No round runs with the wrong model.", {
    x: 1.1, y: 4.95, w: 11.2, h: 1.2, fontFace: FM, fontSize: 13, color: C.ice, valign: "middle", lineSpacingMultiple: 1.2 });
  notes(s, "Phase 0 convene + verified modes + sanity hello. Source: examples/question1/README.md, _shared/expert-setup.md.");
})();

// 87 — pipeline
(() => {
  const s = content(87, "The Pipeline", "Step by step.", ACT8);
  const steps = ["Convene tabs", "Configure modes", "Sanity ping", "Stage invocation", "4 expert outputs", "Distillation", "Current Best"];
  steps.forEach((t, i) => {
    const x = 0.75 + (i % 4) * 3.0;
    const y = 2.6 + Math.floor(i / 4) * 1.6;
    const done = i < 4;
    card(s, x, y, 2.8, 1.3, { accent: done ? C.success : C.amber, fill: C.panel });
    s.addText(`${i + 1}`, { x: x + 0.2, y: y + 0.15, w: 0.6, h: 0.5, fontFace: FD, fontSize: 20, bold: true, color: done ? C.success : C.amber });
    s.addText(t, { x: x + 0.2, y: y + 0.6, w: 2.4, h: 0.6, fontFace: FM, fontSize: 12, color: C.text, lineSpacingMultiple: 1.1 });
    s.addText(done ? "DONE" : "PENDING", { x: x + 1.5, y: y + 0.18, w: 1.1, h: 0.35, fontFace: FM, fontSize: 8, color: done ? C.success : C.mist, align: "right" });
  });
  s.addText("Setup complete and archived; invocation staged. The transparent ledger captures every step's status and timestamp.", {
    x: 0.75, y: 5.95, w: 11.8, h: 0.6, fontFace: FM, fontSize: 12.5, italic: true, color: C.textDim, lineSpacingMultiple: 1.2 });
  notes(s, "Pipeline + run ledger statuses. Source: examples/question1/README.md.");
})();

// 88 — archive tree
(() => {
  const s = content(88, "The Transparent Archive", "Everything, on disk.", ACT8);
  const tree = [
    "examples/{RUNID}/",
    "├── state/run-{RUNID}.json",
    "├── outer-loop-01/",
    "│   ├── inner-loop-Q1/",
    "│   │   ├── invocation.md",
    "│   │   ├── response-A/B/C/D.md  + .png",
    "│   │   └── current-best.md",
    "│   └── post-round-synthesis.md",
    "├── final-convergence/",
    "├── final-report.md",
    "└── gate-log.json",
  ];
  card(s, 0.75, 2.45, 7.6, 3.9, { fill: C.void2, line: C.border });
  s.addText(tree.map((t) => ({ text: t, options: { breakLine: true, color: t.includes("response") || t.includes("current-best") ? C.amber : (t.endsWith("/") ? C.cyan : C.text) } })), {
    x: 1.0, y: 2.65, w: 7.1, h: 3.5, fontFace: FM, fontSize: 12.5, valign: "top", lineSpacingMultiple: 1.25 });
  card(s, 8.5, 2.45, 4.1, 3.9, { accent: C.success, fill: C.panel });
  s.addText("INVARIANTS", { x: 8.8, y: 2.7, w: 3.5, h: 0.35, fontFace: FM, fontSize: 11, color: C.success, charSpacing: 2 });
  bullets(s, ["One-directional push to experts", "Siblings travel via the Orchestrator", "The archive is ground truth", "Screenshots are audit evidence"], 8.8, 3.15, 3.5, { fs: 11.5, gap: 11, color: C.ice });
  notes(s, "Archive directory tree + data-flow invariants. Source: architecture.md §7.1, §4.");
})();

// 89 — lineage replay
(() => {
  const s = content(89, "Reproducibility", "Lineage you can replay.", ACT8);
  s.addText("Every current-best.md records the slot that produced it and the round — a full lineage chain reconstructable from the archive even without the state file.", {
    x: 0.75, y: 2.3, w: 11.8, h: 0.9, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
  const chain = ["Q1 Round 4 Current Best", "← selected from Slot A (response-A-04-Q1.md)", "← generated with invocation embedding", "Q2…Q6 Round 3 Current Best (verbatim siblings)"];
  chain.forEach((t, i) => {
    const y = 3.5 + i * 0.72;
    card(s, 0.95 + i * 0.5, y, 11.0 - i * 0.5, 0.6, { accent: i === 0 ? C.amber : C.cyan, fill: C.panel, r: 0.05 });
    s.addText(t, { x: 1.2 + i * 0.5, y, w: 10.5 - i * 0.5, h: 0.6, fontFace: FM, fontSize: 12.5, color: i === 0 ? C.ice : C.text, valign: "middle" });
  });
  s.addText("Because every invocation.md contains the sibling best-answers verbatim, the run is fully replayable.", {
    x: 0.75, y: 6.5, w: 11.8, h: 0.4, fontFace: FM, fontSize: 12.5, italic: true, color: C.amber });
  notes(s, "Lineage chain + resume reconstruction. Source: architecture.md §7.3, §6.4.");
})();

/* ============================================================================
   ACT IX — IMPACT, ROADMAP, VISION (90–96)
   ============================================================================ */
const ACT9 = "ACT IX · IMPACT & VISION";
divider(90, "ACT IX", "Impact & Vision", "What it is and isn't, why now, the honest limits, the roadmap, and the self-breeding horizon.");

// 91 — is/isn't
(() => {
  const s = content(91, "Positioning", "What it IS — and ISN'T.", ACT9);
  card(s, 0.75, 2.55, 5.7, 3.5, { accent: "FF6B6B", fill: C.void2 });
  s.addText("IT IS NOT", { x: 1.05, y: 2.8, w: 5.1, h: 0.35, fontFace: FM, fontSize: 11, color: "FF6B6B", charSpacing: 2 });
  bullets(s, ["A simple chat aggregator or A/B tool", "A prompt-chaining library calling 4 APIs", "A voting system where the majority wins"], 1.05, 3.25, 5.1, { fs: 14, gap: 14, color: C.text });
  card(s, 6.85, 2.55, 5.75, 3.5, { accent: C.success, fill: C.void2 });
  s.addText("IT IS", { x: 7.15, y: 2.8, w: 5.1, h: 0.35, fontFace: FM, fontSize: 11, color: C.success, charSpacing: 2 });
  s.addText("A structured, theory-grounded, iterative cross-pollination protocol that produces emergent insight no individual expert would generate alone.", {
    x: 7.15, y: 3.25, w: 5.15, h: 2.5, fontFace: FM, fontSize: 15, color: C.ice, valign: "top", lineSpacingMultiple: 1.35 });
  notes(s, "What it is and isn't. Source: about/what.md.");
})();

// 92 — why now
(() => {
  const s = content(92, "Timing", "Why this, now.", ACT9);
  const w = [["01", "Four credible frontier LLMs exist simultaneously", "Claude, GPT, Gemini, Grok — distinct training lineages and epistemic profiles. Not true two years ago."], ["02", "Claude-in-Chrome removes the cost barrier", "Programmatic orchestration through public browser interfaces — no API cost or rate-limit wall for four-model coordination."], ["03", "Claude Code encodes it as one command", "Complex multi-step orchestration becomes a reusable, composable skill — as easy to invoke as a slash-command."]];
  w.forEach((t, i) => {
    const y = 2.5 + i * 1.25;
    card(s, 0.75, y, 11.85, 1.1, { accent: C.amber, fill: C.panel });
    s.addText(t[0], { x: 1.05, y: y + 0.12, w: 1.0, h: 0.85, fontFace: FD, fontSize: 30, bold: true, color: C.amber, valign: "middle" });
    s.addText(t[1], { x: 2.2, y: y + 0.13, w: 10.2, h: 0.45, fontFace: FD, fontSize: 15, bold: true, color: C.ice, valign: "middle" });
    s.addText(t[2], { x: 2.2, y: y + 0.56, w: 10.2, h: 0.5, fontFace: FM, fontSize: 11.5, color: C.text, valign: "middle" });
  });
  notes(s, "Three conditions making the harness timely. Source: about/why.md.");
})();

// 93 — honest limits
(() => {
  const s = content(93, "Intellectual Honesty", "The honest limits.", ACT9);
  s.addText("The method excels at divergence and recombination but is weaker on convergence to actionable, high-confidence insight. What it cannot fully replicate:", {
    x: 0.75, y: 2.25, w: 11.8, h: 0.9, fontFace: FM, fontSize: 15, color: C.text, lineSpacingMultiple: 1.25 });
  bullets(s, ["Ruthless self-critique and taste (humans prune; models flatter)", "Deep primary-source immersion + embodied intuition from failures", "Empirical/validation loop — running the experiment, falsifying", "Question reformulation — maybe the real open question is different", "Long incubation + serendipity"], 0.8, 3.3, 11.7, { fs: 13.5, gap: 9 });
  card(s, 0.75, 5.85, 11.8, 0.7, { accent: C.cyan, fill: C.void2 });
  s.addText("A turbocharged idea-generation workshop — not the full end-to-end discovery pipeline.", {
    x: 1.1, y: 5.85, w: 11.1, h: 0.7, fontFace: FD, fontSize: 16, bold: true, color: C.cyan, valign: "middle" });
  notes(s, "Honest assessment of limits. Source: research/02 §7.");
})();

// 94 — roadmap
(() => {
  const s = content(94, "Quick High-Impact Upgrades", "The roadmap.", ACT9);
  const r = [["Role randomization", "rotate AI sub-roles per round for fresh framing"], ["Critic / Organizer agent", "filter redundancy, generate linking questions"], ["Cap rounds + falsification", "4 rounds + one cheap counter-example round"], ["Per-round distillation", "name the single most fertile new cross-link"], ["Yes-and + build-on", "extend prior ideas ruthlessly but kindly"], ["Ground every other round", "real paper search / code simulation"]];
  r.forEach((t, i) => {
    const x = 0.75 + (i % 2) * 6.0;
    const y = 2.5 + Math.floor(i / 2) * 1.18;
    card(s, x, y, 5.7, 1.02, { accent: i % 2 ? C.cyan : C.amber, fill: C.panel });
    s.addText(t[0], { x: x + 0.25, y: y + 0.1, w: 5.2, h: 0.4, fontFace: FD, fontSize: 13.5, bold: true, color: C.ice });
    s.addText(t[1], { x: x + 0.25, y: y + 0.48, w: 5.25, h: 0.5, fontFace: FM, fontSize: 10.8, color: C.text });
  });
  notes(s, "High-impact roadmap upgrades. Source: research/02 §9.");
})();

// 95 — self-breeding horizon
(() => {
  const s = content(95, "The Horizon", "The self-breeding\narchitecture.", ACT9, { ts: 28, th: 1.3 });
  s.addText("Infuse each workflow with generator / Dreamer roles. Each becomes a self-breeding innovation organism.", {
    x: 0.75, y: 2.6, w: 11.8, h: 0.8, fontFace: FM, fontSize: 16, color: C.text, lineSpacingMultiple: 1.25 });
  const steps = ["Infuse a Dreamer role", "Recurse the meta-meta loop", "Three iterations deep"];
  steps.forEach((t, i) => {
    const x = 0.75 + i * 4.0;
    card(s, x, 3.7, 3.75, 1.3, { accent: C.amber, fill: C.panel });
    s.addText(`0${i + 1}`, { x: x + 0.25, y: 3.82, w: 1.0, h: 0.5, fontFace: FD, fontSize: 22, bold: true, color: C.amber });
    s.addText(t, { x: x + 0.25, y: 4.35, w: 3.3, h: 0.6, fontFace: FM, fontSize: 12.5, color: C.text, lineSpacingMultiple: 1.15 });
    if (i < 2) s.addText("→", { x: x + 3.78, y: 3.7, w: 0.25, h: 1.3, fontFace: FD, fontSize: 22, bold: true, color: C.borderHi, align: "center", valign: "middle" });
  });
  card(s, 0.75, 5.3, 11.8, 1.05, { accent: C.cyan, fill: C.void2 });
  s.addText("→ an architecture that can, without human prompting, spin up entirely new research programs for 2030 problems.", {
    x: 1.1, y: 5.3, w: 11.1, h: 1.05, fontFace: FD, fontSize: 17, bold: true, color: C.cyan, valign: "middle", lineSpacingMultiple: 1.15 });
  notes(s, "Self-breeding horizon. Source: research/04 §3.");
})();

// 96 — vision
(() => {
  const s = pptx.addSlide();
  bg(s, C.void);
  s.addShape("rect", { x: -1.5, y: -1, w: 6, h: 6, fill: { color: C.amberDim, transparency: 90 }, line: { type: "none" }, rotate: 14 });
  s.addShape("rect", { x: W - 4, y: H - 4, w: 6, h: 6, fill: { color: C.cyanDim, transparency: 91 }, line: { type: "none" }, rotate: 14 });
  s.addText("THE VISION", { x: 0.8, y: 2.0, w: 11.7, h: 0.4, fontFace: FM, fontSize: 13, color: C.cyan, charSpacing: 4, align: "center" });
  s.addText("Consciousness scales not by bigger models alone,\nbut by richer, stranger, more myth-drenched\nconnections between minds — biological or synthetic.", {
    x: 0.8, y: 2.7, w: 11.7, h: 2.5, fontFace: FD, fontSize: 28, bold: true, color: C.ice, align: "center", valign: "middle", lineSpacingMultiple: 1.2 });
  s.addText("research/04 · the closing note", { x: 0.8, y: 5.3, w: 11.7, h: 0.4, fontFace: FM, fontSize: 11, italic: true, color: C.textDim, align: "center" });
  chrome(s, 96, ACT9);
  notes(s, "Vision statement. Source: research/04.");
})();

/* ============================================================================
   ACT X — CLOSE + APPENDIX (97–100)
   ============================================================================ */
const ACT10 = "ACT X · CLOSE";
divider(97, "ACT X", "Close", "The thesis, how to start, and an appendix of the references and named systems behind the harness.");

// 98 — closing thesis
(() => {
  const s = pptx.addSlide();
  bg(s, C.void);
  s.addShape("rect", { x: 0, y: 0, w: W, h: 0.08, fill: { color: C.amber }, line: { type: "none" } });
  s.addShape("rect", { x: 0, y: 0.08, w: W * 0.55, h: 0.025, fill: { color: C.cyan }, line: { type: "none" } });
  s.addText("Four frontier AIs.\nSix innovation workflows.\nOne orchestrating mind.", {
    x: 0.8, y: 1.7, w: 11.7, h: 2.7, fontFace: FD, fontSize: 40, bold: true, color: C.ice, align: "left", valign: "middle", lineSpacingMultiple: 1.05 });
  s.addText("Collective intelligence, engineered — and fully archived.", {
    x: 0.82, y: 4.7, w: 11.6, h: 0.6, fontFace: FD, fontSize: 22, bold: true, color: C.amber });
  s.addText("blanking + leaking  ·  Group Genius  ·  TSM-CI  ·  transparent lineage", {
    x: 0.82, y: 5.5, w: 11.6, h: 0.4, fontFace: FM, fontSize: 13, color: C.textDim, charSpacing: 1 });
  chrome(s, 98, ACT10);
  notes(s, "Closing thesis. Source: README.md.");
})();

// 99 — get started
(() => {
  const s = content(99, "Get Started", "Run it.", ACT10);
  const cmds = [["meta-harness", "state a GOAL — it decomposes, selects, and runs end to end"], ["workflow W1–W6", "invoke a specific pattern directly if you know the fit"], ["meta-meta-harness", "generate a new harness variant or apply the Tsaheylu upgrade"]];
  cmds.forEach((t, i) => {
    const y = 2.5 + i * 1.15;
    card(s, 0.75, y, 11.85, 1.0, { accent: C.amber, fill: C.void2 });
    s.addText("/ " + t[0], { x: 1.05, y, w: 4.0, h: 1.0, fontFace: FM, fontSize: 16, bold: true, color: C.amber, valign: "middle" });
    s.addText(t[1], { x: 5.1, y, w: 7.3, h: 1.0, fontFace: FM, fontSize: 12.5, color: C.text, valign: "middle", lineSpacingMultiple: 1.15 });
  });
  s.addText("MIT-licensed  ·  full session archives in examples/  ·  GitHub Pages site in docs/", {
    x: 0.75, y: 6.2, w: 11.8, h: 0.4, fontFace: FM, fontSize: 12, color: C.cyan, charSpacing: 1 });
  notes(s, "Quickstart commands. Source: skills/README.md, README.md.");
})();

// 100 — appendix references
(() => {
  const s = content(100, "Appendix", "References & named systems.", ACT10);
  const refs = [
    ["Group Genius", "Keith Sawyer (2007)"],
    ["TSM-CI", "Woolley · Gupta et al. (2021–25)"],
    ["Delphi Method", "Dalkey & Helmer (1963)"],
    ["Ideaflow", "Jeremy Utley (2023)"],
    ["Anchoring Bias", "Tversky & Kahneman (1974)"],
    ["Bisociation", "Arthur Koestler"],
    ["SEAL · AlphaEvolve", "self-improving systems"],
    ["Darwin-Gödel", "self-modifying agents"],
    ["Meta-Agent · KernelEvolve", "auto-constructed multi-agent / inference"],
    ["CollabEval · MacNet", "multi-agent LLM frameworks"],
    ["Iteration-of-Thought", "iterative reasoning rounds"],
    ["Tsaheylu / Vitraya Ramunong", "Avatar mythic-infusion layer"],
  ];
  refs.forEach((t, i) => {
    const x = 0.75 + (i % 3) * 4.0;
    const y = 2.4 + Math.floor(i / 3) * 1.05;
    card(s, x, y, 3.75, 0.9, { accent: i % 2 ? C.cyan : C.amber, fill: C.panel, r: 0.06 });
    s.addText(t[0], { x: x + 0.22, y: y + 0.12, w: 3.35, h: 0.4, fontFace: FD, fontSize: 12.5, bold: true, color: C.ice });
    s.addText(t[1], { x: x + 0.22, y: y + 0.5, w: 3.35, h: 0.35, fontFace: FM, fontSize: 9.5, color: C.textDim });
  });
  s.addText("Sources: README.md · research/02 · research/04 · documentation/*", {
    x: 0.75, y: 6.65, w: 11.8, h: 0.3, fontFace: FM, fontSize: 10, italic: true, color: C.mist });
  notes(s, "Appendix of references and named systems. Source: README.md, research/02, research/04.");
})();

/* ---- write ----------------------------------------------------------------- */
const outFile = path.join(__dirname, "Meta-Innovation-Harness-Pitch.pptx");
pptx.writeFile({ fileName: outFile }).then((f) => {
  console.log("WROTE:", f);
}).catch((e) => { console.error("ERROR:", e); process.exit(1); });
