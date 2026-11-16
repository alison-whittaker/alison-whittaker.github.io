/* Independent, offline mockup. All inputs are synthetic local fixtures. */
(() => {
'use strict';
const D=window.READINESS_DEMO, $=id=>document.getElementById(id);
const state={goal:'all',team:'all',quarter:'Q2 2027',gaps:false,search:'',workstream:null,metric:null,leader:'all',view:'goal'};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const goal=id=>D.goals.find(g=>g.id===id), work=id=>D.workstreams.find(w=>w.id===id);
const eligibleGoals=()=>D.goals.filter(g=>(state.goal==='all'||g.id===state.goal)&&(state.team==='all'||g.team===state.team)&&(state.leader==='all'||D.workstreams.some(w=>w.goal===g.id&&w.product===state.leader)));
const eligibleWork=(gid=null)=>D.workstreams.filter(w=>eligibleGoals().some(g=>g.id===w.goal)&&(!gid||w.goal===gid)&&(state.leader==='all'||w.product===state.leader));
const records=(q='Q2 2027',gid=null)=>D.demos.filter(i=>i.quarter===q&&eligibleGoals().some(g=>g.id===i.goal)&&(!gid||i.goal===gid)&&(state.leader==='all'||work(i.workstream).product===state.leader));
const complete=i=>Object.values(i.fields).every(Boolean), submitted=i=>i.dependency!=='Draft', decided=i=>['Accepted','Declined'].includes(i.dependency);
const checks=i=>[...Object.values(i.fields),decided(i),Boolean(i.epic)];
const readiness=(wid,q)=>{const a=D.demos.filter(i=>i.workstream===wid&&i.quarter===q);return {done:a.reduce((n,i)=>n+checks(i).filter(Boolean).length,0),total:a.length*6};};
const pct=v=>v.total?Math.round(1000*v.done/v.total)/10:null;
const tone=p=>p===null?'blue':p>=80?'green':p>=50?'amber':'red';
const status=p=>p===null?'Not applicable':p>=80?'On track':p>=50?'Needs attention':'At risk';
const metrics=[
 {id:'priority',name:'Business prioritization',short:'Workstreams ranked',description:'Every current-quarter workstream has a business priority rank.',definition:'Ranked Q2 workstreams / all Q2 workstreams. Rank belongs to the multi-quarter workstream.',source:'Workstream register',date:'2027-03-26',gap:'Missing priority rank',test:i=>Boolean(work(i.workstream).rank)},
 {id:'planning',name:'Initiative hydration',short:'Initiatives hydrated',description:'Initiatives carry the detail needed to execute.',definition:'Q2 initiatives with owner, outcome, scope and milestone / all Q2 initiatives. All four fields are required.',source:'Initiative register',date:'2027-03-26',gap:'Missing required planning fields',test:complete},
 {id:'submitted',name:'Dependencies logged',short:'Out of draft',description:'Dependency requests have reached the receiving team.',definition:'Non-draft dependency requests / all current-quarter requests. Each initiative has one request.',source:'Dependency register',date:'2027-03-26',gap:'Dependency still in draft',test:submitted},
 {id:'decided',name:'Dependencies decisioned',short:'Decisions recorded',description:'Receiving teams have recorded a dependency decision.',definition:'Accepted or declined requests / submitted requests. Declined is a decision, not a delivery commitment.',source:'Dependency register',date:'2027-03-26',gap:'Receiving-team decision not recorded',test:decided},
 {id:'epics',name:'Epics linked to Jira',short:'Delivery traceability',description:'Demos trace to delivery epics in the Jira (fictional tracker).',definition:'Q2 initiatives with a Jira epic link / all Q2 initiatives.',source:'Jira snapshot',date:'2027-03-25',gap:'Delivery epic link missing',test:i=>Boolean(i.epic)},
 {id:'readiness',name:'Workstream readiness',short:'Execution checks met',description:'Planning and delivery checks across current-quarter workstreams.',definition:'Completed checks / six checks per Q2 initiative: owner, outcome, scope, milestone, dependency decision and delivery epic.',source:'Initiative + dependency + delivery registers',date:'Initiatives / dependencies: 2027-03-26 · Delivery: 2027-03-25',gap:'Execution checks missing',test:i=>checks(i).every(Boolean)}
];
function measure(m,gid=null){
 const a=records(m.id==='closeout'?'Q1 2027':'Q2 2027',gid);
 if(m.id==='priority'){const w=eligibleWork(gid);return{done:w.filter(w=>w.rank).length,total:w.length};}
 if(m.id==='readiness')return{done:a.reduce((s,i)=>s+checks(i).filter(Boolean).length,0),total:a.length*6};
 const applicable=m.id==='decided'?a.filter(submitted):a;
 return{done:applicable.filter(m.test).length,total:applicable.length};
}
function score(v,attrs=''){const p=pct(v),t=tone(p);return `<button type="button" class="score-button" ${attrs}><span class="score-number ${t}">${p===null?'N/A':p+'%'}</span><div class="track ${t}"><i style="width:${p||0}%"></i></div><span class="score-count">${v.done} of ${v.total}</span></button>`;}
function badge(p){return `<span class="badge ${tone(p)}">${status(p)}</span>`;}
function missing(i){const a=Object.entries(i.fields).filter(([,v])=>!v).map(([k])=>k.toLowerCase());if(!submitted(i))a.push('dependency submission');else if(!decided(i))a.push('dependency decision');if(!i.epic)a.push('delivery epic');if(i.dependency==='Declined')a.push('declined dependency: replan');if(i.quarter==='Q1 2027'&&i.status!=='Complete')a.push(i.status==='Carried forward'?'carry-forward review':'close-out');return a;}
function renderMatrix(){
 const gs=eligibleGoals();
 $('scope-line').textContent=`${gs.length} annual goal${gs.length===1?'':'s'} · ${eligibleWork().length} multi-quarter workstreams · ${records().length} current-quarter initiatives · Source dates shown below`;
 $('matrix').innerHTML=gs.length?`<table class="matrix"><caption class="sr-only" hidden>Q2 2027 readiness scores, grouped by annual goal</caption><thead><tr><th scope="col">Readiness activity</th>${gs.map(g=>`<th scope="col">${g.id}<span>${esc(g.name)}</span></th>`).join('')}<th scope="col">Combined<span>Selected goals</span></th></tr></thead><tbody>${metrics.map(m=>`<tr><td><button class="metric-name" data-measure="${m.id}">${m.name}</button><small>${m.description}</small></td>${[...gs.map(g=>g.id),null].map(gid=>`<td>${score(measure(m,gid),`data-measure="${m.id}" data-goal="${gid||'all'}" aria-label="${m.name}: ${gid?esc(goal(gid).name):'selected goals'}; inspect gaps"`)}</td>`).join('')}</tr>`).join('')}</tbody></table>`:'<p class="empty">No goals match these filters. Reset filters to see all goals.</p>';
}
function metricGaps(m){
 if(m.id==='priority')return eligibleWork().filter(w=>!w.rank).map(w=>`<li><strong>${esc(w.name)}</strong> · ${w.goal} · missing priority rank</li>`);
 let a=records(m.id==='closeout'?'Q1 2027':'Q2 2027');if(m.id==='decided')a=a.filter(submitted);
 return a.filter(i=>!m.test(i)).map(i=>`<li><button class="text-link" data-demo="${i.id}">${i.id} · ${esc(i.name)}</button> · ${i.goal} · ${m.id==='planning'?Object.entries(i.fields).filter(([,v])=>!v).map(([k])=>k).join(', '):m.id==='closeout'?i.status:m.gap}</li>`);
}
function renderMeasures(){
 const gs=eligibleGoals();
 $('measure-list').innerHTML=metrics.map(m=>{const v=measure(m),p=pct(v),gaps=metricGaps(m);return `<article class="measure" id="measure-${m.id}"><div class="measure-heading"><div class="measure-title"><h3>${m.name}</h3><p>${m.description}</p></div><div class="measure-total"><strong style="color:var(--${tone(p)})">${p===null?'N/A':p+'%'}</strong>${badge(p)}<small>${v.done} / ${v.total}</small></div></div><div class="measure-body"><p class="definition">${m.definition}</p><div class="measure-table"><table><thead><tr><th scope="col">Annual goal</th><th scope="col">Complete</th><th scope="col">Applicable</th><th scope="col">Gap</th><th scope="col">Readiness</th></tr></thead><tbody>${gs.map(g=>{const n=measure(m,g.id);return `<tr><td>${g.id} · ${esc(g.name)}</td><td>${n.done}</td><td>${n.total}</td><td>${n.total-n.done}</td><td>${badge(pct(n))} ${pct(n)===null?'':pct(n)+'%'}</td></tr>`;}).join('')}</tbody></table></div><div class="gap-box"><h4>${gaps.length?'Gaps to resolve ('+gaps.length+')':'No gaps for this measure'}</h4>${gaps.length?`<ul>${gaps.join('')}</ul>`:'<p class="note">Every applicable record meets this check.</p>'}</div><p class="measure-source">Fictional source: ${m.source} · As of ${m.date}</p></div></article>`;}).join('');
}
let focusReturn=null;
function showDemo(id){const i=D.demos.find(i=>i.id===id);if(!i)return;focusReturn=document.activeElement;const w=work(i.workstream);$('dialog-body').innerHTML=`<h2 id="dialog-title">${esc(i.name)}</h2><p class="muted">${i.id} · ${i.quarter}</p><dl class="detail-grid"><div><dt>Annual goal</dt><dd>${i.goal} · ${esc(goal(i.goal).name)}</dd></div><div><dt>Multi-quarter workstream</dt><dd>${esc(w.name)} · ${w.span}</dd></div><div><dt>Owner</dt><dd>${i.owner}</dd></div><div><dt>Lifecycle status</dt><dd>${i.status}</dd></div><div><dt>Quarter milestone</dt><dd>${i.fields.Milestone?i.due:'Missing — confirm date'}</dd></div><div><dt>Delivery epic</dt><dd>${i.epic||'Missing — link delivery epic'}</dd></div></dl><h3>Planning & execution checks</h3><ul class="check-list">${Object.entries(i.fields).map(([k,v])=>`<li><span>${k}</span><span class="badge ${v?'green':'amber'}">${v?'Present':'Missing'}</span></li>`).join('')}<li><span>Dependency</span><span class="badge ${decided(i)?'green':'amber'}">${i.dependency}</span></li><li><span>Delivery traceability</span><span class="badge ${i.epic?'green':'amber'}">${i.epic?'Linked':'Missing'}</span></li></ul><p class="dialog-gap"><strong>Action:</strong> ${missing(i).length?missing(i).map(esc).join('; '):'No readiness gaps recorded for this initiative.'}</p><p class="detail-source">Fictional sources · Initiative register: ${i.asOf} · Dependency register: 2027-03-26 · Jira snapshot: 2027-03-25. No live source links.</p>`;$('demo-dialog').showModal();}
function renderExecutive(){
 const groups=state.view==='leader'?[...new Set(eligibleWork().map(w=>w.product))].map(name=>({name,leader:name})):eligibleGoals().map(g=>({name:g.id+' · '+g.name,gid:g.id}));
 const previous=state.leader;
 $('executive-table').innerHTML=groups.length?`<table class="executive"><thead><tr><th scope="col">${state.view==='leader'?'Initiative leader':'Annual goal'}</th><th scope="col">Gaps / decisions needed</th><th scope="col">Wins / ready to proceed</th></tr></thead><tbody>${groups.map(g=>{
 if(g.leader)state.leader=g.leader;
 const values=metrics.map(m=>({m,v:measure(m,g.gid||null)}));
 const line=x=>`<button class="summary-signal ${tone(pct(x.v))}" data-measure="${x.m.id}" ${g.gid?'data-goal="'+g.gid+'"':''} ${g.leader?'data-leader="'+esc(g.leader)+'"':''}>${x.m.name}<strong>${pct(x.v)===null?'N/A':pct(x.v)+'%'}</strong><small>${x.v.done} / ${x.v.total}</small></button>`;
 const gaps=values.filter(x=>pct(x.v)!==null&&pct(x.v)<80),wins=values.filter(x=>pct(x.v)>=80);
 const total=measure(metrics.find(m=>m.id==='readiness'),g.gid||null);state.leader=previous;
 return `<tr><td><strong>${esc(g.name)}</strong><div>${badge(pct(total))}</div><small>Execution checks: ${pct(total)}%</small><small>${values.filter(x=>pct(x.v)>=80).length} of ${metrics.length} measures on track</small></td><td>${gaps.map(line).join('')||'<span class="muted">No gaps in this scope</span>'}</td><td>${wins.map(line).join('')||'<span class="muted">No measures at threshold yet</span>'}</td></tr>`;
 }).join('')}</tbody></table>`:'<p class="empty">No records match these filters.</p>';
 $('view-goal').setAttribute('aria-pressed',String(state.view==='goal'));$('view-leader').setAttribute('aria-pressed',String(state.view==='leader'));
}
$('leader-filter').innerHTML += [...new Set(D.workstreams.map(w=>w.product))].map(n=>`<option>${esc(n)}</option>`).join('');
$('leader-filter').addEventListener('change',e=>{state.leader=e.target.value;state.workstream=null;state.metric=null;render();});
$('view-goal').addEventListener('click',()=>{state.view='goal';render();});
$('view-leader').addEventListener('click',()=>{state.view='leader';render();});
function render(){
 document.querySelectorAll('[data-filter-goal]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filterGoal===state.goal)));
 renderMatrix();renderMeasures();renderExecutive();renderCritical();
}
$('goal-filters').innerHTML=[{id:'all',name:'All goals'},...D.goals].map(g=>`<button type="button" data-filter-goal="${g.id}" aria-pressed="${g.id==='all'}" title="${esc(g.name)}">${g.id==='all'?'All goals':g.id+' · '+esc(g.name)}</button>`).join('');
$('team').innerHTML+=[...new Set(D.goals.map(g=>g.team))].map(t=>`<option>${t}</option>`).join('');
$('source-list').innerHTML=D.sources.map(s=>`<article class="source-card"><strong>${s.name}</strong><time datetime="${s.asOf}">As of ${s.asOf}</time><span class="muted">${s.provides}</span></article>`).join('');
$('team').addEventListener('change',e=>{state.team=e.target.value;state.workstream=null;state.metric=null;render();});
$('reset').addEventListener('click',()=>{Object.assign(state,{goal:'all',team:'all',quarter:'Q2 2027',gaps:false,search:'',workstream:null,metric:null});$('team').value='all';state.leader='all';$('leader-filter').value='all';render();});
$('close-dialog').addEventListener('click',()=>$('demo-dialog').close());
$('demo-dialog').addEventListener('close',()=>focusReturn?.focus());
$('demo-dialog').addEventListener('click',e=>{if(e.target===$('demo-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
function scrollToEl(el){el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}
document.addEventListener('click',e=>{if(e.target.closest('a[href="#calculations"]'))$('calculations').open=true;const b=e.target.closest('button');if(!b)return;
 if(b.dataset.filterGoal){state.goal=b.dataset.filterGoal;state.team='all';$('team').value='all';state.workstream=null;state.metric=null;render();}
 if(b.dataset.measure){if(b.dataset.leader){state.leader=b.dataset.leader;$('leader-filter').value=state.leader;render();}const id=b.dataset.measure;if(b.dataset.goal&&b.dataset.goal!=='all'){state.goal=b.dataset.goal;state.team='all';$('team').value='all';state.workstream=null;render();}const el=$('measure-'+id);scrollToEl(el);}
 if(b.dataset.demo)showDemo(b.dataset.demo);
});
function renderCritical(){
 const candidates=records().filter(i=>!work(i.workstream).rank||missing(i).length);
 const gapCount=i=>missing(i).length+Number(!work(i.workstream).rank);
 const milestone=i=>i.fields.Milestone&&i.due?i.due:'9999-12-31';
 const a=candidates.sort((a,b)=>Number(b.dependency==='Declined')-Number(a.dependency==='Declined')||Number(!b.fields.Owner)-Number(!a.fields.Owner)||gapCount(b)-gapCount(a)||milestone(a).localeCompare(milestone(b))||a.id.localeCompare(b.id)).slice(0,4);
 $('critical-count').textContent=candidates.length?`Showing ${a.length} of ${candidates.length} open initiatives in this scope. Full gaps remain visible in Details.`:'';
 $('critical-list').innerHTML=a.length?`<table class="demo-table"><thead><tr><th>Initiative / workstream</th><th>Owner</th><th>Open actions</th><th>Milestone</th></tr></thead><tbody>${a.map(i=>`<tr><td><button class="text-link" data-demo="${i.id}">${esc(i.name)}</button><small>${esc(work(i.workstream).name)}</small></td><td>${i.fields.Owner?esc(i.owner):'Unassigned — confirm owner'}</td><td>${[...(!work(i.workstream).rank?['rank workstream']:[]),...missing(i)].map(esc).join(' · ')}</td><td>${i.fields.Milestone?esc(i.due):'Confirm date'}</td></tr>`).join('')}</tbody></table>`:'<p class="empty">No critical opens in the selected scope.</p>';
}
$('calculation-list').innerHTML=metrics.map(m=>`<article class="calculation"><h3>${m.name}</h3><p>${m.definition}</p></article>`).join('');

// Pure calculations are exposed for fixture consistency checks, never for data mutation.
window.READINESS_DEMO_API={measure: id=>measure(metrics.find(m=>m.id===id)),readiness,pct,missing};
render();
})();

