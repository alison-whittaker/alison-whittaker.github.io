1. Save these requirements as an artifact.
2. Can you build this an publish this on my github? https://alison-whittaker.github.io/

Decision Intelligence for PMO Prototypes — Requirements
Oct 9, 2026 · @Alison Whittaker
Overview
This prototype shows how a PMO moves from reporting what happened to deciding what to do next: one live view that connects strategy, execution and cost, AI that recommends the next move, and a human approval that pushes the decision into the tools teams already use.
Prototype disclaimer: every portfolio, program, person, budget and metric in this prototype is synthetic. No real company, employer or client data is used.
Audience: hiring managers and peers reviewing the GitHub portfolio of a PMO, TPM or AI enablement leader.
Goals
1. Demonstrate a decision loop end to end: sense, predict, recommend, approve, act, measure.
2. Serve three audiences from one data model: tactical, stakeholder and leadership views.
3. Show AI that is governed: explainable, secure, cost-aware and measured against business value.
4. Be runnable by a reviewer in under 5 minutes with no accounts or real integrations.
AI trends this design follows
Portfolio management is shifting from static status reports to decision intelligence, where AI predicts outcomes and proposes actions while people stay accountable for the call. The prototype reflects six directions in the field:
Trend
What it means for a PMO
Where it shows up here
Decision intelligence
Data, models and judgment combined around a specific decision, not a dashboard alone
Recommendation and approval flow (R3, R4)
Agentic AI with human approval
AI agents draft, analyze and stage actions; a person approves before anything changes
Approve the next move (R4), write-back (R5)
Predictive portfolio analytics
Forecasting slips, overruns, scope creep and burnout before they show in status
Forecasting engine (AI-3)
Conversational analytics
Asking the portfolio questions in plain language, with answers grounded in data and cited
Conversational analytics (AI-4), assistant (AI-5)
Tool connectivity through standard protocols
Model Context Protocol (MCP) and APIs let AI read from and write to Jira, Smartsheet, Dragonboat, Slack and others
Integration layer (R5)
AI governance and FinOps for AI
Evaluations, guardrails, audit trails and token cost management as first-class features
AI governance (G1–G6)
These are framed as design directions, not market statistics; no vendor figures are claimed.
Views and personas
One data model feeds three views; each answers a different question at a different level of detail.
View
Primary user
Question it answers
Time horizon
Must show
Tactical
Program and project managers, workstream leads
What needs my attention this week?
Days to weeks
Milestones, blockers, dependencies, team capacity, RAID items, AI status drafts
Stakeholder
Business owners, functional leads, partner teams
Is my initiative on track, and what do you need from me?
Weeks to a quarter
Status by initiative, decisions needed, cross-team dependencies, upcoming changes
Leadership
Executives, portfolio and investment owners
Are we investing in the right things, and what should we change?
Quarter to year
Strategic value vs. cost, portfolio health, top risks, AI recommendations awaiting approval, forecast vs. plan
Requirements
• V1. A user can switch views in one click; all views read the same data, so numbers match across views.
• V2. Every metric drills down from leadership to stakeholder to tactical detail.
• V3. Each view opens with a one-sentence AI summary of what changed since the last visit.
• V4. Role-based visibility: sensitive fields such as cost and individual workload can be hidden by view.
Functional requirements
The prototype runs one closed loop: see the portfolio, get a recommendation, approve it, push it into team tools, and measure whether it worked.
R1. One live view of strategy, execution and cost
• R1.1 Link every initiative to a strategic objective (OKR or pillar), its execution status and its budget and actual spend.
• R1.2 Roll up from task to project to program to portfolio, with health shown at each level.
• R1.3 Refresh on a simulated schedule (for example, every 15 minutes) to demonstrate a live feed.
• R1.4 Show the timestamp and source of every number.
R2. Multiple views: tactical, stakeholder and leadership, as defined in Views and personas.
R3. Clear recommendations
• R3.1 Each recommendation states the problem, the proposed action, the expected impact (schedule, cost, value) and a confidence level.
• R3.2 Show the evidence: the data points and signals that drove it.
• R3.3 Offer at least two alternatives, including "do nothing", with their trade-offs.
• R3.4 Rank recommendations by impact on strategic value and urgency.
R4. Approve the next move
• R4.1 Approve, modify or reject each recommendation, with a required note on reject.
• R4.2 Route approvals by threshold: for example, budget moves over a set amount go to the leadership view.
• R4.3 Log every decision with who, when, what changed and the AI version and inputs used.
R5. Turn decisions into measurable results in existing tools
• R5.1 On approval, stage the change in the systems teams already use: tickets in Jira, roadmap updates in Dragonboat or Smartsheet, a summary in Slack or Teams, a calendar hold for a decision review.
• R5.2 In the prototype, these are mock connectors with realistic payloads; no real systems are touched.
• R5.3 Attach a success metric and check-in date to every approved decision, and track outcome vs. expectation.
• R5.4 Show a decision log with results, so the PMO can see which kinds of recommendations pay off.
R6. Smart dashboards
• R6.1 Follow data visualization best practices: lead with the finding, one message per chart, the right chart for the data shape, consistent color meaning (status colors only for status), direct labels over legends, and accessible contrast in light and dark modes.
• R6.2 Combine views on one screen: portfolio heat map, value vs. cost matrix, burn-up or burn-down with forecast band, dependency map and risk trend.
• R6.3 Cross-filter: selecting a program filters every chart on the page.
• R6.4 Plain-language annotations on charts explain notable changes.
AI capabilities
Five AI capabilities share one data model and one governance layer; each produces outputs a person can inspect before acting.
ID
Capability
Tracks
Inputs
Outputs
Technique
AI-1
Predictive analytics
Status, risk, resource constraints
Milestone history, velocity, capacity and allocation, budget burn
Predicted health per initiative, probability of slip, over-allocated people and teams
Time-series and classification models on synthetic history
AI-2
AI Risk Analyzer and Status Reporter
Status, dependencies, risk flags
Tickets, RAID log, meeting notes, dependency links
Drafted weekly status by audience, new or escalated risk flags with reasons, blocked-dependency alerts
Large language model (LLM) with retrieval over portfolio data
AI-3
Predictive Forecasting Engine
Scope creep, team burnout, cross-team dependencies
Scope change history, hours and after-hours activity signals, dependency graph
Forecast date and cost with a confidence band, scope creep trend, burnout risk by team (not individual), dependency chains at risk
Monte Carlo simulation plus trend models
AI-4
Conversational Analytics
Dependencies, budget, strategic value
Natural-language questions
Answers with cited data, generated charts, interactive dependency node maps
LLM tool use over a semantic layer; answers grounded in queried data
AI-5
AI Assistant
Decisions and next steps
The user's view, the question or task, approved tools
Drafted recommendations, meeting prep briefs, executive summaries, staged tool actions awaiting approval
Agent with tool access through MCP-style connectors, human approval required
Requirements
• AI-R1. Every AI output shows its sources, confidence and the model and prompt version that produced it.
• AI-R2. Forecasts show ranges, not single points, and are back-tested against synthetic history.
• AI-R3. Burnout signals are reported at team level only, never ranked by individual.
• AI-R4. Conversational answers that can't be grounded in data say so instead of guessing.
• AI-R5. The assistant can stage actions but never executes a write without a human approval (R4).
• AI-R6. Example prompts are built in, such as "Which dependencies put the Q2 launch at risk?", "Where are we over budget against strategic value?" and "Draft the leadership update for this week."
AI governance
Governance is a visible part of the product, with its own AI Governance view, so reviewers can see that the AI is reliable, secure, cost-aware and worth what it costs.
ID
Area
Requirement
What the prototype shows
G1
Reliability
Evaluate AI outputs against a test set before release and on every model or prompt change
Eval scorecard: accuracy of status drafts, forecast error, grounding rate of answers
G2
Security and privacy
Least-privilege tool access, no sensitive data in prompts beyond what the task needs, role-based visibility
Access matrix per AI capability; redaction of cost and people data by role
G3
Business value
Tie each AI capability to a measurable outcome
Value ledger: hours saved on reporting, decisions made faster, forecast accuracy vs. plan
G4
Full-stack observability
Trace every AI request from user question to retrieval, model call, tool call and result
Request trace view with latency, sources and outcome
G5
Token cost optimization
Route simple tasks to smaller models, cache repeated context, cap tokens per request, and budget by capability
Token spend by capability and view, cost per decision, budget alerts
G6
Runtime guardrails
Input and output filters, grounding checks, rate limits, approval gates on writes, and a kill switch per capability
Guardrail events log: blocked, flagged and approved actions
Requirements
• G-R1. Every AI action is auditable: who asked, what data was used, what the model returned, who approved and what changed.
• G-R2. Guardrails scale by policy, not code changes: thresholds and approval rules live in configuration.
• G-R3. The AI Governance view is visible to the leadership role, with a monthly summary of value delivered vs. token cost.
Data model and synthetic data
All data is generated by a seeded script, so every reviewer sees the same fictional portfolio and the demo is repeatable.
Entity
Key fields
Links to
Strategic objective
Name, owner role, target metric, weight
Initiatives
Initiative (program or project)
Status, phase, start and end dates, budget, actual spend, strategic value score
Objective, milestones, teams, risks
Milestone
Planned and forecast dates, completion
Initiative, dependencies
Dependency
From, to, type, due date, status
Milestones across teams
Team
Capacity, allocation, after-hours activity index (aggregate)
Initiatives
RAID item
Type (risk, assumption, issue, decision), severity, probability, owner role
Initiative
Recommendation
Problem, action, alternatives, impact, confidence, evidence
Initiative, decision
Decision
Approver role, outcome, timestamp, success metric, check-in date, result
Recommendation, tool actions
AI event
Capability, model, tokens, latency, guardrail result, cost
Recommendation or answer
Synthetic portfolio: a fictional company with 4 strategic objectives, 12 programs, about 40 projects, 8 teams and 18 months of history. The history includes planted patterns for the AI to find, such as a program with creeping scope, a team trending toward burnout and a dependency chain that threatens a launch.
Names are clearly fictional, and the README and app footer state that no real company, employer or client data is used.
Non-functional requirements, success metrics and scope
Non-functional requirements
• N1. Runs in a browser from GitHub Pages or a single command locally, with no sign-in.
• N2. Works without an AI API key using recorded AI responses; a key enables live AI calls.
• N3. Each view loads in under 2 seconds on the synthetic data set.
• N4. Meets WCAG 2.2 AA contrast and keyboard navigation, with light and dark modes.
• N5. Responsive down to tablet width; leadership view readable on a phone.
• N6. No secrets in the repository; API keys are read from local environment settings only.
Success metrics for the prototype
Metric
Target
Time for a reviewer to complete the full decision loop
Under 5 minutes
Recommendations with evidence and alternatives shown
100%
AI answers grounded in cited data
95% or more on the eval set
Forecast error on back-tested synthetic history
Shown and explained, not hidden
Every write action preceded by human approval
100%
Out of scope: real customer or employer data, production authentication, real write access to Jira, Dragonboat, Smartsheet or Slack, and model training on personal data.
GitHub portfolio section
Ready-to-paste copy for the portfolio site:
## Decision Intelligence for PMO Prototypes

A working prototype of an AI-powered PMO that connects strategy, execution and cost in one live view, recommends the next move, and turns approved decisions into measurable results in the tools teams already use.

**What it does**
- Three views from one data model: tactical, stakeholder and leadership
- Predictive analytics for status, risk and resource constraints
- AI Risk Analyzer and Status Reporter for status, dependencies and risk flags
- Forecasting for scope creep, team burnout and cross-team dependencies
- Conversational analytics with dependency node maps, budget and strategic value
- Human-in-the-loop approvals with an auditable decision log
- Built-in AI governance: evals, guardrails, observability and token cost tracking

**Prototype data notice:** This is a prototype built for demonstration purposes. All portfolios, programs, people, budgets and metrics are synthetic. No real company, employer or client data is used.
Open questions
[ ] Your item 6.5 ended at "AI Assistant for": what should the assistant focus on? This draft assumes recommendations, meeting prep, executive summaries and staged tool actions.
[ ] Tech stack: a static front end on GitHub Pages, or a small app with a back end for live AI calls?
[ ] Which tool integrations to mock first: Jira, Dragonboat, Smartsheet, Slack or others?
[ ] Should the prototype use Claude for live AI calls, given your current work with Claude Code and MCP?