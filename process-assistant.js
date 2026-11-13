/* Fictional process skill. Static retrieval only; no network or model calls. */
(() => {
'use strict';
const guides = [
  {
    "id": "planning",
    "title": "Plan a quarter",
    "source": "Lumenfern quarterly planning playbook",
    "owner": "Rowan Vale · Planning steward",
    "keywords": [
      "plan",
      "planning",
      "quarter",
      "roadmap",
      "scope",
      "outcome",
      "milestone",
      "rank",
      "prioritize",
      "prioritization",
      "ready"
    ],
    "steps": [
      "Rank each workstream against its annual goal in PlanNest, the fictional planning workspace.",
      "For every quarter-scoped demo, record an owner, measurable outcome, bounded scope, and milestone. All four fields are needed for planning completeness.",
      "Submit cross-team dependencies and link the demo to its BuildBoard delivery epic. Confirm receiving-team decisions before committing.",
      "Use the scorecard to review gaps with the product and delivery leads. A score is a readiness signal, not approval to release."
    ],
    "date": "2027-03-26"
  },
  {
    "id": "dates",
    "title": "Check planning dates",
    "source": "Lumenfern Q2 checkpoint calendar",
    "owner": "Rowan Vale · Planning steward",
    "keywords": [
      "date",
      "dates",
      "deadline",
      "deadlines",
      "when",
      "checkpoint",
      "calendar",
      "due"
    ],
    "steps": [
      "March 19, 2027: rank workstreams and complete Q2 demo planning detail. At the March 26 snapshot, this checkpoint is seven days past.",
      "March 29, 2027: record dependency decisions and link delivery epics. This is three days after the snapshot.",
      "March 31, 2027: close Q1 demos or record an explicit carry-forward review. This is five days after the snapshot.",
      "If a checkpoint is missed, record the gap, owner, recovery date, and delivery impact, then raise it in the planning review. Dates are fictional and are not live deadlines."
    ],
    "date": "2027-03-26"
  },
  {
    "id": "dependencies",
    "title": "Submit and decide dependencies",
    "source": "Lumenfern dependency decision guide",
    "owner": "Sage Alder · Dependency coordinator",
    "keywords": [
      "dependency",
      "dependencies",
      "receiving",
      "accept",
      "accepted",
      "decline",
      "declined",
      "decision",
      "submit",
      "submitted",
      "draft",
      "cross-team"
    ],
    "steps": [
      "The requesting demo owner records the receiving team, deliverable, needed-by date, and impact in the fictional Dependency register.",
      "Move the request from Draft to Submitted and ask the receiving team lead to review it. Submission alone is not a decision.",
      "The receiving team lead records Accepted or Declined with a rationale and an accountable contact. Accepted and Declined both count as recorded decisions.",
      "If declined, the requesting owner revises scope, timing, or sequencing. Escalate unresolved impact to the planning steward. A declined request is not a delivery commitment."
    ],
    "date": "2027-03-26"
  },
  {
    "id": "ownership",
    "title": "Find the accountable role",
    "source": "Lumenfern roles and ownership roster",
    "owner": "Rowan Vale · Planning steward",
    "keywords": [
      "owner",
      "ownership",
      "who",
      "role",
      "roles",
      "responsible",
      "accountable",
      "contact",
      "lead",
      "leads"
    ],
    "steps": [
      "Demo owner: maintain the outcome, scope, milestone, status, and delivery link. Product lead: rank workstreams and resolve priority tradeoffs.",
      "Engineering lead: confirm delivery feasibility and epic linkage. Receiving team lead: accept or decline dependencies.",
      "Planning steward Rowan Vale: resolve process questions and route unresolved cross-team decisions. Pilot partner Casey Elm: collect demonstration feedback.",
      "Mock contacts use the local role roster only. There are no real email addresses, company directories, or messaging integrations."
    ],
    "date": "2027-03-26"
  },
  {
    "id": "health",
    "title": "Understand readiness and health",
    "source": "Lumenfern readiness definitions",
    "owner": "Finley Brook · Delivery practice lead",
    "keywords": [
      "health",
      "status",
      "score",
      "scores",
      "readiness",
      "threshold",
      "percent",
      "percentage",
      "green",
      "amber",
      "red",
      "risk",
      "definition",
      "definitions"
    ],
    "steps": [
      "Planning measures show 80% or above as On track, 50–79% as Needs attention, and below 50% as At risk. These labels describe readiness, not overall delivery health.",
      "Workstream readiness counts six checks per demo: owner, outcome, scope, milestone, recorded dependency decision, and delivery epic.",
      "Combined scores divide all completed checks or records by all applicable checks or records. They are not an average of goal percentages.",
      "Dependency decisions use submitted requests as the denominator. A declined dependency is counted as decisioned and separately flagged for replanning. Lifecycle status does not override missing readiness fields."
    ],
    "date": "2027-03-26"
  },
  {
    "id": "traceability",
    "title": "Connect goals to delivery",
    "source": "Lumenfern planning and delivery handbook",
    "owner": "Finley Brook · Delivery practice lead",
    "keywords": [
      "epic",
      "epics",
      "link",
      "linked",
      "traceability",
      "golden",
      "thread",
      "goal",
      "goals",
      "tool",
      "tools",
      "plannest",
      "buildboard"
    ],
    "steps": [
      "Keep the chain visible: annual goal → multi-quarter workstream → quarter-scoped demo → delivery epic.",
      "In fictional PlanNest, assign the demo to its goal, workstream, and quarter. In fictional BuildBoard, create or locate the delivery epic.",
      "Copy the mock epic identifier into the demo’s delivery link field and have the engineering lead verify the relationship.",
      "The scorecard flags missing links. The demo stores identifiers only; it does not connect to external planning or delivery systems."
    ],
    "date": "2027-03-26"
  },
  {
    "id": "closeout",
    "title": "Close or carry forward work",
    "source": "Lumenfern quarter close-out checklist",
    "owner": "Robin Ash · Operations coordinator",
    "keywords": [
      "close",
      "closed",
      "closeout",
      "close-out",
      "carry",
      "carried",
      "forward",
      "previous",
      "prior",
      "q1",
      "complete",
      "completed"
    ],
    "steps": [
      "Review every Q1 demo with its owner and record whether the outcome was completed. Only Complete counts toward the previous-quarter close-out measure.",
      "For unfinished work, document remaining scope, rationale, delivery impact, and a proposed next-quarter milestone.",
      "Record Carried forward and obtain product and engineering review; retain the previous-quarter record for traceability.",
      "Carried-forward and Open records remain visible gaps. Moving work into Q2 does not make the Q1 demo complete."
    ],
    "date": "2027-03-26"
  },
  {
    "id": "access",
    "title": "Get access and training",
    "source": "Lumenfern workspace onboarding guide",
    "owner": "Taylor Cove · Enablement coordinator",
    "keywords": [
      "access",
      "permission",
      "permissions",
      "training",
      "login",
      "log",
      "sign",
      "onboard",
      "support",
      "help"
    ],
    "steps": [
      "Ask your fictional team lead for PlanNest and BuildBoard access using the mock workspace request form. Specify team, role, and the minimum access needed.",
      "The workspace administrator reviews the request. Never paste passwords, tokens, or confidential records into a process question.",
      "Complete the mock planning walkthrough: create a demo, submit a dependency, and link a delivery epic.",
      "For support, route a question to Taylor Cove in the fictional Enablement desk. This demonstration does not submit access requests or send messages."
    ],
    "date": "2027-03-26"
  },
  {
    "id": "escalation",
    "title": "Escalate a blocked decision",
    "source": "Lumenfern decision and escalation playbook",
    "owner": "Rowan Vale · Planning steward",
    "keywords": [
      "escalate",
      "escalation",
      "blocked",
      "blocker",
      "blockers",
      "conflict",
      "disagree",
      "governance",
      "unresolved"
    ],
    "steps": [
      "Capture the blocked decision, requesting and receiving owners, needed-by date, options, and impact in the mock decision log.",
      "Ask the receiving team lead and product lead to resolve the issue in the next planning review.",
      "If the needed-by date or committed scope is threatened, route it to planning steward Rowan Vale for a cross-team decision.",
      "Record the decision, rationale, accountable owner, and follow-up date. The skill explains the route; it cannot approve changes or contact anyone."
    ],
    "date": "2027-03-26"
  },
  {
    "id": "refresh",
    "title": "Understand source freshness and the pilot",
    "source": "Lumenfern process skill pilot notes",
    "owner": "Rowan Vale · Mock skill owner",
    "keywords": [
      "refresh",
      "freshness",
      "source",
      "sources",
      "verified",
      "current",
      "latest",
      "pilot",
      "release",
      "automation",
      "schedule",
      "change",
      "changes"
    ],
    "steps": [
      "The public demo uses fixed fictional sources last verified March 26, 2027. It does not read company systems or refresh live policy.",
      "The illustrative pilot runs March 26–April 9, 2027 with the Growth and Operations teams. Rowan Vale is mock skill owner; Casey Elm is mock pilot partner.",
      "A proposed weekly comparison would flag changed dates, roles, and rules for owner review. It is a design concept; no scheduled task is running.",
      "If sources conflict or information is absent, show the uncertainty and route it to the mock skill owner. Never invent a policy or quietly overwrite approved guidance."
    ],
    "date": "2027-03-26"
  }
];
const $ = id => document.getElementById(id);
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const prompts = ['How do I submit a dependency?', 'What are the planning deadlines?', 'Who owns planning decisions?', 'How is readiness calculated?', 'How do I escalate a blocker?', 'How do I carry work forward?'];
function find(question) {
 const words=question.toLowerCase().match(/[a-z0-9]+(?:-[a-z]+)*/g)||[];
 return guides.map(g=>({guide:g,score:g.keywords.reduce((n,k)=>n+(words.includes(k)?(["planning","quarter","plan","who","how","help"].includes(k)?0.25:1):0),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.guide);
}
function answer(question) {
 const selected = find(question);
 const opening = `<p class="eyebrow">Fictional process guidance / fixed snapshot</p><h3>${escape(question)}</h3>`;
 if(!selected.length) return opening+'<p>No supported guidance was found in the fictional source library. Try asking about planning steps, dates, dependencies, ownership, readiness, delivery links, close-out, access, escalation, or source freshness.</p><p><strong>Next step:</strong> Ask mock skill owner Rowan Vale to clarify the missing topic. No answer has been inferred from outside the source library.</p>';
 return opening+selected.map(g=>`<article><h4>${escape(g.title)}</h4><ol>${g.steps.map(s=>`<li>${escape(s)}</li>`).join('')}</ol><p class="note"><strong>Accountable role:</strong> ${escape(g.owner)}<br><strong>Fictional source:</strong> <a href="#process-source-${g.id}" data-process-source="${g.id}">${escape(g.source)}</a> · Last verified ${g.date}</p></article>`).join('')+'<p class="note">Matched from the local mock guides. This is general process guidance and does not inspect the current scorecard filters or approve any action.</p>';
}
function ask(question) { $('process-question').value=question; $('process-answer').innerHTML=answer(question); }
$('process-prompts').innerHTML=prompts.map((q,i)=>`<button type="button" data-process-prompt="${i}">${escape(q)}</button>`).join('');
$('process-sources').innerHTML=guides.map(g=>`<article id="process-source-${g.id}" tabindex="-1"><p class="eyebrow">Mock source / ${g.date}</p><h3>${escape(g.source)}</h3><p class="note">${escape(g.owner)} · Fictional Lumenfern guidance</p><ol>${g.steps.map(s=>`<li>${escape(s)}</li>`).join('')}</ol></article>`).join('');
$('process-form').addEventListener('submit',e=>{e.preventDefault();const q=$('process-question').value.trim();if(q)ask(q);});
$('process-clear').addEventListener('click',()=>{ $('process-question').value='';$('process-answer').innerHTML='<p class="muted">Choose a question or ask about planning, dependencies, owners, health, access, or escalation.</p>';$('process-question').focus(); });
document.addEventListener('click',e=>{
 const prompt=e.target.closest('[data-process-prompt]');if(prompt)ask(prompts[Number(prompt.dataset.processPrompt)]);
 const source=e.target.closest('[data-process-source]');if(source){e.preventDefault();const el=$('process-source-'+source.dataset.processSource);el.closest('details').open=true;el.scrollIntoView({block:'start',behavior:'instant'});el.focus({preventScroll:true});}
});
window.PROCESS_SKILL_DEMO={guides,find,answer};
})();
