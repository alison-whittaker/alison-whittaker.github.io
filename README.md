# Alison Whittaker — Portfolio

Personal portfolio and interactive program-management prototypes, published with GitHub Pages.

## Quarterly Planning Readiness Mockup

**This is an independent mockup using entirely fictional data.** No actual company information, customer records, employee names, internal goals, workstreams, demos, screenshots, videos, credentials, or live source connections are included in this prototype.

[Open the mockup](https://alison-whittaker.github.io/decision-intelligence.html) · [Portfolio](https://alison-whittaker.github.io/#prototypes)

### Purpose

Establish quarterly planning readiness for that quarter’s execution. Bring planning signals into one view so leaders and teams can see what is ready, what is missing, and where action is needed before committing to delivery.

### What it provides

- **One view of readiness:** slice by annual goal or team, with completion counts, weighted combined percentages, and explicit gaps.
- **Annual goal continuity:** goals run throughout the year, connecting strategy to execution across quarters.
- **Multi-quarter workstreams:** compare current- and previous-quarter workstream readiness, with business priority ranks, product leads, engineering leads, and quarter spans.
- **Quarter-scoped demos:** drill from a workstream into its demos, planning completeness, dependency status, delivery-epic traceability, and prior-quarter close-out status.
- **Actionable gaps:** identify missing ranks, owners, outcomes, scope, milestones, dependency submissions or decisions, delivery links, and unfinished previous-quarter work.
- **Daily refresh design:** the intended production workflow refreshes data daily and displays an as-of date on every source. This public mockup is a fixed, fictional snapshot dated March 26, 2027; no scheduled refresh or production ingestion is implemented.
- **Source transparency:** every source has an explicit as-of date, and each measure identifies the source and date behind it. Delivery data deliberately has a different date to demonstrate source freshness visibility.

### What it replaces

Spreadsheets, PowerPoint status slides, manual rollups, and separate views scattered across the systems where planning and execution data originates.

### Interactions

Filter by goal or team; select a readiness score to inspect its definition and gaps; expand readiness measures; compare current and previous quarters; select a workstream to drill into quarter-scoped demos; search or show gaps only; and open an demo for detailed checks and source dates. Reset restores the complete view.

### Scoring and source behavior

Planning measures use 80%+ on track, 50–79% needs attention, and below 50% at risk. Combined scores use completed records divided by applicable records, not an unweighted average. Workstream readiness is the proportion of six demo checks met: owner, outcome, scope, milestone, dependency decision, and delivery epic. A declined dependency counts as a recorded decision and is separately flagged for replanning. A carried-forward demo is not counted as completed.

All source names, dates, owners, identifiers, statuses, and figures are synthetic local fixtures. Links inside the prototype navigate within the mockup; no links point to internal company systems.

### Files

- `index.html`: portfolio; the prototype section links to the replacement mockup.
- `decision-intelligence.html`: replacement prototype, retaining the existing URL.
- `readiness-demo.css`: responsive presentation.
- `readiness-demo-data.js`: entirely fictional demo dataset.
- `readiness-demo.js`: filtering, aggregation, drilldowns, and accessible detail dialogs.

Run locally with `python3 -m http.server 8000` and open `http://localhost:8000/decision-intelligence.html`. No build step or external services are required.

---

# GitHub Profile Assets

Use these files for Alison Whittaker's GitHub profile and GitHub Pages site.

## Files

- `github-avatar-white-bg.jpg` - Recommended for uploading as the GitHub account profile photo. JPEG avoids transparency artifacts that can appear as black around circular masks.
- `alison-whittaker-profile.png` - Recommended for the GitHub Pages repository/site image asset. It is square and ready for CSS circular cropping.

## Upload Targets

- GitHub profile avatar: GitHub profile settings > Change avatar > upload `github-avatar-white-bg.jpg`
- GitHub Pages site: replace the site image asset with `alison-whittaker-profile.png`
