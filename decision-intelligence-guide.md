# Decision Intelligence for PMO Prototypes

By Alison Whittaker · October 9, 2026

A working browser prototype connecting strategy, execution and cost to recommendations, human decisions, staged tool actions and measurable outcomes.

**Data notice:** Every portfolio, program, person, budget and metric is synthetic. No real company, employer or client data is used. No connector sends a real request.

## Run in under five minutes

Open the published GitHub Pages page. No sign-in, dependencies or API key required.

Locally, from this directory run `python3 -m http.server 8765` and open `http://localhost:8765/decision-intelligence.html`.

1. Click **Start 5-minute walkthrough**.
2. Inspect Aurora's problem, evidence, confidence and two alternatives.
3. Approve the recommendation (or modify with a note; rejection requires a note).
4. Inspect staged Jira, Smartsheet, Slack and calendar JSON in the Decision log.
5. Run the synthetic check-in to compare outcome with the success metric.
6. Explore Stakeholder, Tactical and AI Governance; change the program filter or switch themes.

Decisions, policy configuration, traces and theme are stored in this browser's localStorage. Reset demo clears them. Nothing is sent to external services.

## Implementation

Buildless HTML/CSS/JavaScript. `data.js` generates a fixed seed-42 portfolio: 4 objectives, 12 programs, 40 projects, 200 tasks, 8 teams, 24 milestones and 216 monthly observations over 18 months. The fictional execution scenario concerns a Q2 2027 launch; real wall-clock timestamps identify reviewer actions and simulated refreshes.

The forecast runs 800 seeded Monte Carlo draws per program and exposes P10–P90 duration and cost ranges. The cost baseline is back-tested over 72 rolling one-step monthly holdouts after month 12. The almost-zero synthetic MAPE reflects a deliberately linear burn pattern, **not** validated business forecasting accuracy. Program status probabilities, chart risk trend, expected intervention benefits, token prices and monthly value targets are synthetic scenario inputs. Weekly risk trend is explicitly illustrative. The dependency graph is a planted Atlas → Echo → Aurora chain with a second Beacon dependency.

AI-1 and AI-3 demonstrate seeded signals and numerical simulation. AI-2, AI-4 and AI-5 use recorded, inspectable responses and keyword routing. Answers outside the recorded topic set abstain. This is not a trained classifier, retrieval-based LLM or production agent.

## Governance and access

Approval threshold and request budget are editable configuration. Requests create browser-local traces with recorded sources, model/prompt labels, estimated tokens, modeled latency, cost and guardrail outcome. AI-4 and AI-5 kill switches gate answers and staging; AI-1–3 switches retain visible cached outputs. View switching demonstrates financial redaction; **static data is public and this is not production authentication**. Burnout indicators are always team aggregates.

## Scope and remaining requirements

This release delivers the runnable recorded-response decision loop and portfolio demonstration. The following remain future work:

- N2 optional live AI via a local, environment-key-backed server. No API key entry or provider call is shipped in this static release.
- Production forecasting/classification and independent, larger AI evaluation sets. The five built-in grounding fixtures are a small demonstration.
- Real scheduling, connector execution, authentication, rate limiting, input/output filtering and secure redaction. Mock staging is the terminal action here.
- Full per-metric hierarchical drill-down and all-chart semantic cross-filtering: portfolio tables, health tiles, forecasts, recommendations and dependency evidence follow scope; conversational answers intentionally describe the entire planted portfolio chain.
- Per-view summaries based on a persistent prior-visit snapshot. Current summaries are recorded scenario summaries; simulated refresh updates provenance timestamps without mutating seed-42 values.
- Formal WCAG 2.2 AA audit. Semantic controls, skip link, focus rings, direct chart labels, text equivalents and responsive light/dark themes are implemented, but certification is not claimed.
- Dragonboat and Teams connector payloads (the first four mocks are Jira, Smartsheet, Slack and calendar).

No secrets are required or included. Requirements that imply a backend cannot be safely fulfilled by putting an AI key into public GitHub Pages JavaScript.
