/* Independent, offline mockup. All inputs are synthetic local fixtures. */
(() => {
'use strict';
const D=window.READINESS_DEMO, $=id=>document.getElementById(id);
const state={goal:'all',team:'all',quarter:'Q2 2027',gaps:false,search:'',workstream:null,metric:null};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const goal=id=>D.goals.find(g=>g.id===id), work=id=>D.workstreams.find(w=>w.id===id);
const eligibleGoals=()=>D.goals.filter(g=>(state.goal==='all'||g.id===state.goal)&&(state.team==='all'||g.team===state.team));
const eligibleWork=(gid=null)=>D.workstreams.filter(w=>eligibleGoals().some(g=>g.id===w.goal)&&(!gid||w.goal===gid));
const records=(q='Q2 2027',gid=null)=>D.demos.filter(i=>i.quarter===q&&eligibleGoals().some(g=>g.id===i.goal)&&(!gid||i.goal===gid));
const complete=i=>Object.values(i.fields).every(Boolean), submitted=i=>i.dependency!=='Draft', decided=i=>['Accepted','Declined'].includes(i.dependency);
const checks=i=>[...Object.values(i.fields),decided(i),Boolean(i.epic)];
const readiness=(wid,q)=>{const a=D.demos.filter(i=>i.workstream===wid&&i.quarter===q);return {done:a.reduce((n,i)=>n+checks(i).filter(Boolean).length,0),total:a.length*6};};
const pct=v=>v.total?Math.round(1000*v.done/v.total)/10:null;
const tone=p=>p===null?'blue':p>=80?'green':p>=50?'amber':'red';
const status=p=>p===null?'Not applicable':p>=80?'On track':p>=50?'Needs attention':'At risk';
const metrics=[
 {id:'priority',name:'Business prioritization',short:'Workstreams ranked',description:'Every current-quarter workstream has a business priority rank.',definition:'Ranked Q2 workstreams / all Q2 workstreams. Rank belongs to the multi-quarter workstream.',source:'Workstream register',date:'2027-03-26',gap:'Missing priority rank',test:i=>Boolean(work(i.workstream).rank)},
 {id:'planning',name:'Demo planning detail',short:'Planning detail complete',description:'Demos carry the detail needed to execute.',definition:'Q2 demos with owner, outcome, scope and milestone / all Q2 demos. All four fields are required.',source:'Demo register',date:'2027-03-26',gap:'Missing required planning fields',test:complete},
 {id:'submitted',name:'Dependencies submitted',short:'Dependencies submitted',description:'Dependency requests have reached the receiving team.',definition:'Non-draft dependency requests / all current-quarter requests. Each demo demo has one request.',source:'Dependency register',date:'2027-03-26',gap:'Dependency still in draft',test:submitted},
 {id:'decided',name:'Dependencies decisioned',short:'Decisions recorded',description:'Receiving teams have recorded a dependency decision.',definition:'Accepted or declined requests / submitted requests. Declined is a decision, not a delivery commitment.',source:'Dependency register',date:'2027-03-26',gap:'Receiving-team decision not recorded',test:decided},
 {id:'epics',name:'Delivery epics linked',short:'Delivery traceability',description:'Demos trace to delivery epics in the execution tracker.',definition:'Q2 demos with a delivery epic link / all Q2 demos.',source:'Delivery tracker',date:'2027-03-25',gap:'Delivery epic link missing',test:i=>Boolean(i.epic)},
 {id:'closeout',name:'Previous-quarter close-out',short:'Q1 demos closed',description:'Previous-quarter demos are completed or explicitly reviewed.',definition:'Completed Q1 demos / all Q1 demos. Carried-forward and open work remains a visible gap.',source:'Demo register',date:'2027-03-26',gap:'Prior-quarter demo not closed',test:i=>i.status==='Complete'},
 {id:'readiness',name:'Workstream readiness',short:'Execution checks met',description:'Planning and delivery checks across current-quarter workstreams.',definition:'Completed checks / six checks per Q2 demo: owner, outcome, scope, milestone, dependency decision and delivery epic.',source:'Demo + dependency + delivery registers',date:'Demos / dependencies: 2027-03-26 · Delivery: 2027-03-25',gap:'Execution checks missing',test:i=>checks(i).every(Boolean)}
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
 $('scope-line').textContent=`${gs.length} annual goal${gs.length===1?'':'s'} · ${eligibleWork().length} multi-quarter workstreams · ${records().length} current-quarter demos · Source dates shown below`;
 $('matrix').innerHTML=gs.length?`<table class="matrix"><caption class="sr-only" hidden>Q2 2027 readiness scores, grouped by annual goal</caption><thead><tr><th scope="col">Readiness activity</th>${gs.map(g=>`<th scope="col">${g.id}<span>${esc(g.name)}</span></th>`).join('')}<th scope="col">Combined<span>Selected goals</span></th></tr></thead><tbody>${metrics.map(m=>`<tr><td><button class="metric-name" data-measure="${m.id}">${m.name}</button><small>${m.description}</small></td>${[...gs.map(g=>g.id),null].map(gid=>`<td>${score(measure(m,gid),`data-measure="${m.id}" data-goal="${gid||'all'}" aria-label="${m.name}: ${gid?esc(goal(gid).name):'selected goals'}; inspect gaps"`)}</td>`).join('')}</tr>`).join('')}</tbody></table>`:'<p class="empty">No goals match these filters. Reset filters to see all goals.</p>';
}
function metricGaps(m){
 if(m.id==='priority')return eligibleWork().filter(w=>!w.rank).map(w=>`<li><button class="text-link" data-work="${w.id}" data-quarter="Q2 2027">${esc(w.name)}</button> · ${w.goal} · missing priority rank</li>`);
 let a=records(m.id==='closeout'?'Q1 2027':'Q2 2027');if(m.id==='decided')a=a.filter(submitted);
 return a.filter(i=>!m.test(i)).map(i=>`<li><button class="text-link" data-demo="${i.id}">${i.id} · ${esc(i.name)}</button> · ${i.goal} · ${m.id==='planning'?Object.entries(i.fields).filter(([,v])=>!v).map(([k])=>k).join(', '):m.id==='closeout'?i.status:m.gap}</li>`);
}
function renderMeasures(){
 const gs=eligibleGoals();
 $('measure-list').innerHTML=metrics.map(m=>{const v=measure(m),p=pct(v),gaps=metricGaps(m);return `<details class="measure" id="measure-${m.id}"><summary><div class="measure-title"><h3>${m.name}</h3><p>${m.description}</p></div><div class="measure-total"><strong style="color:var(--${tone(p)})">${p===null?'N/A':p+'%'}</strong>${badge(p)}<small>${v.done} / ${v.total}</small></div></summary><div class="measure-body"><p class="definition">${m.definition}</p><div class="measure-table"><table><thead><tr><th scope="col">Annual goal</th><th scope="col">Complete</th><th scope="col">Applicable</th><th scope="col">Gap</th><th scope="col">Readiness</th></tr></thead><tbody>${gs.map(g=>{const n=measure(m,g.id);return `<tr><td>${g.id} · ${esc(g.name)}</td><td>${n.done}</td><td>${n.total}</td><td>${n.total-n.done}</td><td>${badge(pct(n))} ${pct(n)===null?'':pct(n)+'%'}</td></tr>`;}).join('')}</tbody></table></div><div class="gap-box"><h4>${gaps.length?'Gaps to resolve ('+gaps.length+')':'No gaps for this measure'}</h4>${gaps.length?`<ul>${gaps.join('')}</ul>`:'<p class="note">Every applicable record meets this check.</p>'}</div><p class="measure-source">Fictional source: ${m.source} · As of ${m.date}</p></div></details>`;}).join('');
}
function renderWorkstreams(){
 const q=$('work-quarter').value,qs=q==='both'?['Q2 2027','Q1 2027']:[q];
 $('workstream-list').innerHTML=eligibleGoals().map(g=>`<article class="goal-group"><h3>${g.id} · ${esc(g.name)}<small>Annual goal · Jan–Dec 2027</small></h3>${qs.map(quarter=>{
 const w=eligibleWork(g.id),groups=['red','amber','green'];
 return `<div class="quarter-panel"><div class="quarter-heading"><span>${quarter} <small>${quarter==='Q2 2027'?'Current-quarter planning':'Previous-quarter snapshot'} · ${w.length} workstreams</small></span><span>Multi-quarter programs</span></div>${groups.map(t=>{const a=w.filter(x=>tone(pct(readiness(x.id,quarter)))===t);if(!a.length)return '';return `<div class="status-heading ${t}">${t==='red'?'At risk':t==='amber'?'Needs attention':'On track'} (${a.length})</div><div class="workstream-scroll"><table class="workstream-table"><thead><tr><th scope="col">Rank</th><th scope="col">Workstream / quarter span</th><th scope="col">Product lead</th><th scope="col">Engineering lead</th><th scope="col">Readiness</th></tr></thead><tbody>${a.map(x=>`<tr><td>${x.rank||'<span class="badge amber">Unranked</span>'}</td><td><button class="text-link" data-work="${x.id}" data-quarter="${quarter}">${x.id} · ${esc(x.name)}</button><small>${x.span} · ${D.demos.filter(i=>i.workstream===x.id&&i.quarter===quarter).length} quarter-scoped demos</small></td><td>${x.product}</td><td>${x.engineering}</td><td>${score(readiness(x.id,quarter),`data-work="${x.id}" data-quarter="${quarter}" aria-label="Inspect ${esc(x.name)}, ${quarter}"`)}</td></tr>`).join('')}</tbody></table></div>`;}).join('')}<p class="note" style="padding:0 13px 10px">Fictional workstream / demo / dependency sources as of 2027-03-26; delivery source as of 2027-03-25.</p></div>`;
 }).join('')}</article>`).join('')||'<p class="empty">No workstreams match these filters.</p>';
}
function renderDemos(){
 const a=records(state.quarter).filter(i=>(!state.workstream||i.workstream===state.workstream)&&(!state.gaps||missing(i).length)&&(!state.metric||metrics.find(m=>m.id===state.metric).test(i)===false)&&(i.id+' '+i.name+' '+work(i.workstream).name).toLowerCase().includes(state.search.toLowerCase()));
 $('drill-context').textContent=`${a.length} demos · ${state.quarter}${state.workstream?' · '+work(state.workstream).name:''}${state.gaps?' · showing readiness gaps':''}${state.metric?' · '+metrics.find(m=>m.id===state.metric).name:''}`;
 $('clear-drill').hidden=!state.workstream&&!state.metric;
 $('demo-list').innerHTML=a.length?`<table class="demo-table"><thead><tr><th scope="col">Demo</th><th scope="col">Workstream / goal</th><th scope="col">Status</th><th scope="col">Planning detail</th><th scope="col">Gaps / action needed</th><th scope="col">Source as of</th></tr></thead><tbody>${a.map(i=>`<tr><td><button class="text-link" data-demo="${i.id}">${esc(i.name)}</button><small>${i.id} · ${i.owner}</small></td><td>${esc(work(i.workstream).name)}<small>${i.goal} · ${esc(goal(i.goal).name)}</small></td><td><span class="badge ${i.status==='Complete'?'green':i.status==='Open'?'red':'blue'}">${i.status}</span></td><td>${complete(i)?'<span class="badge green">Complete</span>':'<span class="badge amber">Incomplete</span>'}<small>${Object.values(i.fields).filter(Boolean).length} / 4 fields</small></td><td class="gap-text">${missing(i).length?missing(i).map(esc).join(' · '):'<span class="muted">No gaps recorded</span>'}</td><td><small>Demo: ${i.asOf}<br>Dependency: 2027-03-26<br>Delivery: 2027-03-25</small></td></tr>`).join('')}</tbody></table>`:'<p class="empty">No demos match this view. Try clearing the drilldown, search, or filters.</p>';
}
let focusReturn=null;
function showDemo(id){const i=D.demos.find(i=>i.id===id);if(!i)return;focusReturn=document.activeElement;const w=work(i.workstream);$('dialog-body').innerHTML=`<h2 id="dialog-title">${esc(i.name)}</h2><p class="muted">${i.id} · ${i.quarter}</p><dl class="detail-grid"><div><dt>Annual goal</dt><dd>${i.goal} · ${esc(goal(i.goal).name)}</dd></div><div><dt>Multi-quarter workstream</dt><dd>${esc(w.name)} · ${w.span}</dd></div><div><dt>Owner</dt><dd>${i.owner}</dd></div><div><dt>Lifecycle status</dt><dd>${i.status}</dd></div><div><dt>Quarter milestone</dt><dd>${i.fields.Milestone?i.due:'Missing — confirm date'}</dd></div><div><dt>Delivery epic</dt><dd>${i.epic||'Missing — link delivery epic'}</dd></div></dl><h3>Planning & execution checks</h3><ul class="check-list">${Object.entries(i.fields).map(([k,v])=>`<li><span>${k}</span><span class="badge ${v?'green':'amber'}">${v?'Present':'Missing'}</span></li>`).join('')}<li><span>Dependency</span><span class="badge ${decided(i)?'green':'amber'}">${i.dependency}</span></li><li><span>Delivery traceability</span><span class="badge ${i.epic?'green':'amber'}">${i.epic?'Linked':'Missing'}</span></li></ul><p class="dialog-gap"><strong>Action:</strong> ${missing(i).length?missing(i).map(esc).join('; '):'No readiness gaps recorded for this demo.'}</p><p class="detail-source">Fictional sources · Demo register: ${i.asOf} · Dependency register: 2027-03-26 · Delivery tracker: 2027-03-25. No live source links.</p>`;$('demo-dialog').showModal();}
function render(){
 document.querySelectorAll('[data-filter-goal]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filterGoal===state.goal)));
 renderMatrix();renderMeasures();renderWorkstreams();renderDemos();
}
$('goal-filters').innerHTML=[{id:'all',name:'All goals'},...D.goals].map(g=>`<button type="button" data-filter-goal="${g.id}" aria-pressed="${g.id==='all'}" title="${esc(g.name)}">${g.id==='all'?'All goals':g.id+' · '+esc(g.name)}</button>`).join('');
$('team').innerHTML+=[...new Set(D.goals.map(g=>g.team))].map(t=>`<option>${t}</option>`).join('');
$('source-list').innerHTML=D.sources.map(s=>`<article class="source-card"><strong>${s.name}</strong><time datetime="${s.asOf}">As of ${s.asOf}</time><span class="muted">${s.provides}</span></article>`).join('');
$('team').addEventListener('change',e=>{state.team=e.target.value;state.workstream=null;state.metric=null;render();});
$('reset').addEventListener('click',()=>{Object.assign(state,{goal:'all',team:'all',quarter:'Q2 2027',gaps:false,search:'',workstream:null,metric:null});$('team').value='all';$('work-quarter').value='both';$('demo-quarter').value='Q2 2027';$('gap-filter').value='all';$('search').value='';render();});
$('work-quarter').addEventListener('change',renderWorkstreams);
$('demo-quarter').addEventListener('change',e=>{state.quarter=e.target.value;state.metric=null;renderDemos();});
$('gap-filter').addEventListener('change',e=>{state.gaps=e.target.value==='gaps';renderDemos();});
$('search').addEventListener('input',e=>{state.search=e.target.value;renderDemos();});
$('clear-drill').addEventListener('click',()=>{state.workstream=null;state.metric=null;renderDemos();});
$('close-dialog').addEventListener('click',()=>$('demo-dialog').close());
$('demo-dialog').addEventListener('close',()=>focusReturn?.focus());
$('demo-dialog').addEventListener('click',e=>{if(e.target===$('demo-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
function scrollToEl(el){el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 if(b.dataset.filterGoal){state.goal=b.dataset.filterGoal;state.team='all';$('team').value='all';state.workstream=null;state.metric=null;render();}
 if(b.dataset.measure){const id=b.dataset.measure;if(b.dataset.goal&&b.dataset.goal!=='all'){state.goal=b.dataset.goal;state.team='all';$('team').value='all';state.workstream=null;render();}const el=$('measure-'+id);el.open=true;scrollToEl(el);}
 if(b.dataset.work){state.workstream=b.dataset.work;state.metric=null;state.quarter=b.dataset.quarter||'Q2 2027';state.search='';state.gaps=false;$('search').value='';$('gap-filter').value='all';$('demo-quarter').value=state.quarter;renderDemos();scrollToEl($('demos'));}
 if(b.dataset.demo)showDemo(b.dataset.demo);
});
// Pure calculations are exposed for fixture consistency checks, never for data mutation.
window.READINESS_DEMO_API={measure: id=>measure(metrics.find(m=>m.id===id)),readiness,pct,missing};
render();
})();
