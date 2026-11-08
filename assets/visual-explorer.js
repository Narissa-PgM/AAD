/* AAD Unified Visual Explorer v3: transparent hotspots, legends outside artwork, accessible dialog, deep links */
(()=>{'use strict';
const DATA={
 cycle:[{"id":"cycle-plan","label":"01 · Plan & Prioritize","x":31.9,"y":37.0,"description":"Set priorities, calendar commitments and accountable ownership across gift types.","owner":"Stewardship / FAS Development","evidence":"Report inventory, donor preference, agreement terms, report class and deadline.","gate":"Every required report assigned an accountable owner.","url":"team-leadership.html#team"},{"id":"cycle-gather","label":"02 · Prepare & Gather","x":43.7,"y":37.0,"description":"Collect verified financial and academic evidence from authorized sources.","owner":"Finance / academic partners / UDAS","evidence":"Source extract date, fund restriction, distribution, spend, outcome record and validation status.","gate":"Unreconciled source or missing purpose record goes on HOLD.","url":"team-leadership.html#team"},{"id":"cycle-produce","label":"03 · Produce & Personalize","x":48.1,"y":55.6,"description":"Tailor seven-part VERITAS donor narratives to relationship history and measurable outcomes.","owner":"Stewardship / gift officers / ACEDR","evidence":"Donor preferences, consent status, impact proof, draft redlines and documented source links.","gate":"No personal story without appropriate consent and supported claims.","url":"donor-impact-reporting.html#reports"},{"id":"cycle-certify","label":"04 · Review & Certify","x":40.5,"y":78.3,"description":"Run the Six-Check Release Gate before anything is approved for distribution.","owner":"Finance / program review / designated approver","evidence":"Intent, Reconciliation, Consent, Traceability, Attribution, Authorization.","gate":"Release only with all six verified by authorized owners.","url":"donor-impact-reporting.html#reports"},{"id":"cycle-deliver","label":"05 · Deliver & Engage","x":24.4,"y":78.8,"description":"Coordinate donor outreach, accessibility, delivery channels and follow-up.","owner":"Stewardship / advancement communications / gift officer","evidence":"Approved recipient list, delivery preference, queue status and contact log.","gate":"No actual send without authorization and contact validation.","url":"campaign-initiatives.html#campaign"},{"id":"cycle-evaluate","label":"06 · Evaluate & Learn","x":16.4,"y":55.6,"description":"Measure on-time delivery, defect rate, traceability and donor response.","owner":"Stewardship reporting / decision owners","evidence":"Scorecard with denominators, measured baselines and causes of deviations.","gate":"Monthly review identifies owners and corrective actions.","url":"team-leadership.html#team"},{"id":"cycle-improve","label":"07 · Improve & Scale","x":19.9,"y":34.7,"description":"Retire duplicative reports, standardize successful templates and reassess capacity.","owner":"Reporting team / Program Office","evidence":"Change log, SOP revision, benefit measures and post-cycle decisions.","gate":"Changes approved before being generalized across units.","url":"team-leadership.html#team"}],
 network:[{"id":"partner-fas","label":"FAS Development","x":27.5,"y":23.7,"description":"Translate fundraising strategy and donor intent into appropriate school-facing reports.","owner":"FAS Development / stewardship","evidence":"Restricted gift agreement and gift-officer meeting brief.","gate":"Purpose wording confirmed by gift officers.","url":"team-leadership.html#team"},{"id":"partner-acedr","label":"ACEDR","x":36,"y":23.7,"description":"Coordinate advancement communications, events and donor relations for consistent outreach.","owner":"ACEDR / Communications","evidence":"Narrative redline, recognition requirements and event run-of-show.","gate":"Approved content and recipient/channel checks.","url":"campaign-initiatives.html#campaign"},{"id":"partner-udas","label":"UDAS","x":45,"y":23.7,"description":"Provide supported advancement systems, analytics and reporting infrastructure.","owner":"UDAS / reporting / technology","evidence":"Data dictionary, access-authorized source mapping and refresh status.","gate":"Source lineage and permissions documented.","url":"workframe.html#programs"},{"id":"partner-haa","label":"HAA","x":53.6,"y":23.7,"description":"Coordinate relevant alumni/volunteer engagement and stewardship communications.","owner":"HAA / gift officers","evidence":"Alumni outreach brief, engagement calendar and feedback signals.","gate":"Use approved message and audience preferences.","url":"campaign-initiatives.html#campaign"},{"id":"partner-otap","label":"OTAP","x":62.2,"y":23.7,"description":"Support talent development, inclusive ways of working and operational guidance.","owner":"OTAP / team leaders","evidence":"Coaching plan, escalation guide and training calendar.","gate":"Responsibilities and staff support are clear.","url":"team-leadership.html#team"},{"id":"service-fundraising","label":"Front-line fundraising","x":23,"y":40,"description":"Give fundraisers decision-ready stewardship evidence before donor conversations.","owner":"Gift officers / stewardship","evidence":"Five-sentence meeting brief and linked approved impact report.","gate":"Claims can be traced to certified source records.","url":"donor-impact-reporting.html#reports"},{"id":"service-alumni","label":"Alumni & volunteers","x":23,"y":49,"description":"Deliver consistent alumni participation and volunteer-support stories.","owner":"HAA / advancement communications","evidence":"Segmented engagement brief and communications tracker.","gate":"Privacy and audience restrictions reviewed.","url":"campaign-initiatives.html#campaign"},{"id":"service-technology","label":"Technology","x":23,"y":58,"description":"Provide governed sources, report templates and automation-assisted QA.","owner":"UDAS / IT / data governance","evidence":"Data lineage, system status and exception register.","gate":"Authorized access and reviewer acceptance.","url":"team-leadership.html#team"},{"id":"service-prospect","label":"Prospect management","x":23,"y":67,"description":"Use appropriate relationship context without exposing nonpublic CRM information.","owner":"Prospect research / gift officers","evidence":"Fictional contact and giving-history review before narrative personalization.","gate":"Need-to-know access and data minimization.","url":"donor-impact-reporting.html#reports"},{"id":"service-process","label":"Business process","x":32,"y":74,"description":"Reduce duplicate approvals and standardize intake, production and release stages.","owner":"Stewardship / Program Office","evidence":"SOP with process owner, bottleneck metrics and escalation path.","gate":"Workflow meets Six-Check Release Gate.","url":"team-leadership.html#team"},{"id":"service-events","label":"Events","x":39,"y":74,"description":"Align approved impact stories with event and reunion delivery windows.","owner":"ACEDR / HAA / gift officers","evidence":"Event-calendar brief and prerelease deadline checklist.","gate":"Avoid unsupported or outdated event dates.","url":"program-office.html#start"},{"id":"service-comms","label":"Communications","x":46,"y":74,"description":"Translate accurate outcomes into accessible, donor-centered stories.","owner":"ACEDR / academic units","evidence":"Seven-part VERITAS draft, editorial revision and approved visuals.","gate":"Consent, factual accuracy and accessibility.","url":"campaign-initiatives.html#campaign"},{"id":"service-support","label":"Additional functions","x":55,"y":74,"description":"Connect Finance, Academic Affairs and Institutional Research to a common evidence workflow.","owner":"Finance / Academic Affairs / Institutional Research","evidence":"Verified result records, budget bridges and sign-off matrix.","gate":"Named accountable reviewer for each evidence type.","url":"workframe.html#programs"},{"id":"outcome-scholarships","label":"Scholarships","x":68,"y":43,"description":"Show student support, continued enrollment and approved lived-experience evidence.","owner":"Financial Aid / Academic Affairs / stewardship","evidence":"Synthetic report: $55K distributed, $46K spent, $9K carried.","gate":"Purpose, consent and reconciliation checked.","url":"donor-impact-reporting.html#reports"},{"id":"outcome-faculty","label":"Faculty support","x":82,"y":43,"description":"Connect endowed or current-use faculty funding to documented academic work.","owner":"Academic Affairs / Finance / development","evidence":"Synthetic faculty-impact narrative and signed outcome review.","gate":"Role and award claims independently reviewed.","url":"donor-impact-reporting.html#reports"},{"id":"outcome-research","label":"Research","x":63,"y":57,"description":"Connect restricted funding to documented research activity and milestones.","owner":"Research Administration / academic PI / Finance","evidence":"Synthetic grant: $300K budget, $211K expense, $89K available.","gate":"Contract terms and sponsor attribution checked.","url":"donor-impact-reporting.html#reports"},{"id":"outcome-capital","label":"Capital projects","x":76,"y":57,"description":"Show capital funding, milestones, and current project status without overstating impact.","owner":"Capital Projects / Finance / Communications","evidence":"Synthetic project: $1.96M received and $1.72M spent.","gate":"Project claims and completion stage verified.","url":"donor-impact-reporting.html#reports"},{"id":"outcome-students","label":"Student success","x":88,"y":57,"description":"Present support, retention and outcomes with transparent denominators.","owner":"Institutional Research / student programs","evidence":"Synthetic 16 continuing out of 18 awards; two cases pending.","gate":"No causal claims beyond verified data.","url":"donor-impact-reporting.html#reports"}]
};
const TITLES={cycle:'Seven-stage continuous stewardship cycle',network:'One Harvard stewardship partnership network'};
const GROUPS={cycle:[['Stewardship cycle',DATA.cycle]],network:[['AA&D partners',DATA.network.slice(0,5)],['Enterprise services',DATA.network.slice(5,13)],['Donor-impact categories',DATA.network.slice(13)]]};
function $create(tag,cl,text){const el=document.createElement(tag);if(cl)el.className=cl;if(text!==undefined)el.textContent=text;return el}
function rel(file){return file.startsWith('#')?file:'./'+file}
function currentLocation(){return location.pathname.split('/').pop()||'index.html'}
const currentTitle=()=>({"index.html":"Stewardship Operations Suite","profile.html":"Executive Profile","career-profile.html":"Career Experience","playbook.html":"Executive Playbook","workframe.html":"Four-Program Workframe","impact-circle.html":"Impact Circle","bridge-builder.html":"Bridge Builder","donor-impact-reporting.html":"Donor Impact Reporting","strategic-leadership.html":"Strategic Leadership","Team_Leadership_Operations_v2.html":"Team Leadership","Campaign_Institutional_Initiatives_v2.html":"Campaign Initiatives","program-office.html":"Program Office","operations.html":"Operations Board","Campaign_Institutional_Initiatives_v2.html":"Communications Studio","Donor_Impact_Reporting_Stewardship_v2.html":"Donor Workspace"})[currentLocation()]||'Portfolio';

/* One source of truth for clickable shapes: exact image-space geometry (1672 × 941).
   No text is rendered over the artwork. The legend remains the accessible alternative. */
const ART_W=1672, ART_H=941;
const HIT_AREAS={
 cycle:Array.from({length:7},(_,i)=>({type:'sector',index:i})),
 network:[
  {type:'rect',x:389,y:174,w:132,h:125},      // FAS
  {type:'rect',x:518,y:161,w:151,h:135},      // ACEDR
  {type:'rect',x:675,y:160,w:148,h:135},      // UDAS
  {type:'rect',x:828,y:158,w:128,h:138},      // HAA
  {type:'rect',x:966,y:178,w:140,h:124},      // OTAP
  {type:'rect',x:326,y:331,w:184,h:83},       // fundraising
  {type:'rect',x:319,y:412,w:193,h:89},       // alumni & volunteer
  {type:'rect',x:319,y:499,w:198,h:78},       // technology
  {type:'rect',x:320,y:575,w:200,h:81},       // prospect
  {type:'rect',x:488,y:641,w:115,h:110},      // business processes
  {type:'rect',x:605,y:641,w:111,h:110},      // events
  {type:'rect',x:718,y:641,w:128,h:110},      // communications
  {type:'rect',x:846,y:638,w:144,h:112},      // additional support
  {type:'rect',x:1029,y:361,w:216,h:129},     // scholarships
  {type:'rect',x:1251,y:361,w:261,h:129},     // faculty
  {type:'rect',x:954,y:496,w:201,h:141},      // research
  {type:'rect',x:1164,y:495,w:223,h:142},     // capital
  {type:'rect',x:1394,y:495,w:194,h:142}      // student success
 ]
};
const SVG_NS='http://www.w3.org/2000/svg';
function sectorD(i){
 const cx=526,cy=517,inner=128,outer=307,delta=360/7;
 const a0=(-90-delta/2+i*delta)*Math.PI/180;
 const a1=(-90+delta/2+i*delta)*Math.PI/180;
 const pt=(r,a)=>[(cx+r*Math.cos(a)).toFixed(2),(cy+r*Math.sin(a)).toFixed(2)].join(' ');
 return `M ${pt(inner,a0)} L ${pt(outer,a0)} A ${outer} ${outer} 0 0 1 ${pt(outer,a1)} L ${pt(inner,a1)} A ${inner} ${inner} 0 0 0 ${pt(inner,a0)} Z`;
}
function buildHitLayer(visual,items,activate){
 const svg=document.createElementNS(SVG_NS,'svg');
 svg.setAttribute('class','aad-vx-hitlayer');
 svg.setAttribute('viewBox',`0 0 ${ART_W} ${ART_H}`);
 svg.setAttribute('preserveAspectRatio','xMidYMid meet');
 svg.setAttribute('role','group');
 svg.setAttribute('aria-label',`Clickable regions in ${TITLES[visual]}`);
 items.forEach((item,i)=>{
  const r=HIT_AREAS[visual][i]; if(!r)return;
  const el=document.createElementNS(SVG_NS,r.type==='sector'?'path':'rect');
  if(r.type==='sector')el.setAttribute('d',sectorD(r.index));
  else {['x','y','w','h'].forEach((k)=>el.setAttribute(({w:'width',h:'height'})[k]||k,String(r[k])));el.setAttribute('rx','9');}
  el.classList.add('aad-vx-hitshape');
  el.setAttribute('role','button');el.setAttribute('tabindex','0');
  el.setAttribute('aria-label','Open '+item.label+' details');
  el.setAttribute('aria-pressed','false');
  el.setAttribute('data-vx-id',item.id);
  el.addEventListener('click',()=>activate(item,i));
  el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate(item,i)}});
  svg.appendChild(el);
 });
 return svg;
}

let dialog, launcher, tabrow, fig, overlay, legend, detail, source, onOpen, lastTarget;
let selected='cycle',chosen=null;
function selectVisual(k){selected=k;chosen=null;render()}
function render(){
 if(!dialog)return;
 tabrow.querySelectorAll('[data-vx-tab]').forEach(b=>{const active=b.dataset.vxTab===selected;b.setAttribute('aria-selected',String(active));b.classList.toggle('active',active)});
 fig.querySelector('img').src=rel(selected==='cycle'?'assets/visual_stewardship_cycle.webp':'assets/visual_partnership_network.webp');
 fig.querySelector('img').alt=selected==='cycle'?'Seven-stage stewardship reporting cycle infographic. Transparent click regions and an accessible legend are provided outside the image.':'Partnership network infographic showing AA&D units, enterprise support and five donor reporting types. Transparent targets and full external legend are available.';
 overlay.replaceChildren(buildHitLayer(selected,DATA[selected],item=>selectNode(item.id)));
 legend.replaceChildren();GROUPS[selected].forEach(g=>{
  const group=$create('div','aad-vx-legendgroup');const heading=$create('div','aad-vx-legend-label',g[0]);group.appendChild(heading);
  const grid=$create('div','aad-vx-legends');g[1].forEach(x=>{const b=$create('button','aad-vx-legend-btn',x.label);b.type='button';b.dataset.vxId=x.id;b.setAttribute('aria-pressed',String(chosen===x.id));b.addEventListener('click',()=>selectNode(x.id));grid.appendChild(b)});
  group.appendChild(grid);legend.appendChild(group);
 });
 if(!chosen){detail.replaceChildren();const intro=$create('p','aad-vx-context',`Select an item from ${TITLES[selected]} to see a practical sample, accountable partner, evidence, and destination.`);detail.appendChild(intro)}
}
function selectNode(id){
 const item=DATA[selected].find(x=>x.id===id);if(!item)return;
 chosen=id;
 dialog.querySelectorAll('[data-vx-id]').forEach(el=>{const active=el.dataset.vxId===id;el.setAttribute('aria-pressed',String(active));el.classList.toggle('active',active)});
 detail.replaceChildren();
 const eyebrow=$create('small','', 'ILLUSTRATIVE WORK SAMPLE · '+TITLES[selected]);const title=$create('h3','',item.label);const desc=$create('p','',item.description);
 const boxes=$create('div','aad-vx-detail-grid');
 [['Accountable partners',item.owner],['Evidence / artifact',item.evidence],['Acceptance decision',item.gate]].forEach(([label,value])=>{const cell=$create('div');cell.appendChild($create('b','',label));cell.appendChild($create('span','',value));boxes.appendChild(cell)});
 const foot=$create('div','aad-vx-detail-foot');const a=$create('a','aad-vx-btn primary','Open working section →');a.href=rel(item.url);a.addEventListener('click',()=>{try{sessionStorage.setItem('aadVisualReturn',location.pathname+location.search+location.hash)}catch(e){}closeExplorer();});
 foot.appendChild(a);foot.appendChild($create('span','aad-vx-breadcrumb','Return to the Visual Explorer from any workspace.'));
 detail.append(eyebrow,title,desc,boxes,foot);
}
function openExplorer(k='cycle'){
 if(!dialog)return;lastTarget=document.activeElement;
 selected=k;chosen=null;render();
 if(!dialog.open)dialog.showModal();
 // native dialog handles focus trapping and Escape; explicitly focus close button.
 dialog.querySelector('[data-vx-close]').focus();
}
function closeExplorer(){if(dialog?.open)dialog.close();if(lastTarget&&typeof lastTarget.focus==='function')lastTarget.focus({preventScroll:true})}
function setupDialog(){
 launcher=$create('button','aad-vx-launch');launcher.type='button';launcher.setAttribute('aria-label','Open Impact Circle stewardship explorer and partnership network');launcher.appendChild($create('span','', '◎')); launcher.appendChild($create('span','aad-vx-label','Impact Circle'));launcher.addEventListener('click',()=>openExplorer());
 // Keep the Explorer control in the page toolbar, never floating over infographic artwork.
 const inlineHost=document.querySelector('.atlas-tabs') || document.querySelector('.toplinks') || document.querySelector('.hbtn') || document.querySelector('header nav');
 launcher.classList.add('aad-vx-launch--inline');
 if(inlineHost)inlineHost.appendChild(launcher);
 else {
  const main=document.querySelector('main') || document.body;
  const bar=$create('div','aad-vx-quickbar');bar.appendChild(launcher);main.insertAdjacentElement('afterbegin',bar);
 }
 dialog=$create('dialog','aad-vx-dialog');dialog.setAttribute('aria-labelledby','aad-vx-title');dialog.innerHTML='<div class="aad-vx-head"><div><h2 id="aad-vx-title">Impact Circle: A One Harvard Stewardship Model</h2><p class="aad-vx-subtitle">One Harvard · reporting cycle, partner network and evidence-backed work samples</p></div><div class="aad-vx-header-actions"><button type="button" class="aad-vx-btn aad-vx-back" data-vx-back hidden>← Previous workspace</button><button type="button" class="aad-vx-btn" data-vx-close>Close ✕</button></div></div><div class="aad-vx-tabrow" role="tablist" aria-label="Visual infographic views"><button type="button" class="aad-vx-btn aad-vx-tab" role="tab" data-vx-tab="cycle" aria-selected="true">Seven-stage cycle</button><button type="button" class="aad-vx-btn aad-vx-tab" role="tab" data-vx-tab="network" aria-selected="false">Partnership network</button></div><div class="aad-vx-body"><p class="aad-vx-context" id="aad-vx-context"></p><figure class="aad-vx-figure"><img alt="" loading="lazy"><div class="aad-vx-overlay"></div><figcaption class="aad-vx-figcap">Click any region in the infographic or choose its name in the legend below. All labels stay outside the image.</figcaption></figure><div class="aad-vx-legend"></div><section class="aad-vx-detail" aria-live="polite" aria-label="Selected sample details"></section></div>';
 document.body.appendChild(dialog);
 dialog.querySelector('[data-vx-close]').addEventListener('click',closeExplorer);dialog.addEventListener('click',e=>{if(e.target===dialog)closeExplorer()});
 dialog.querySelectorAll('[data-vx-tab]').forEach(b=>b.addEventListener('click',()=>selectVisual(b.dataset.vxTab)));
 tabrow=dialog.querySelector('.aad-vx-tabrow');fig=dialog.querySelector('.aad-vx-figure');overlay=dialog.querySelector('.aad-vx-overlay');legend=dialog.querySelector('.aad-vx-legend');detail=dialog.querySelector('.aad-vx-detail');
 dialog.querySelector('#aad-vx-context').textContent=`You are here: ${currentTitle()} · Select a visual to find the corresponding operating workspace.`;
 try{const last=sessionStorage.getItem('aadVisualReturn');const back=dialog.querySelector('[data-vx-back]');if(last&&last!==location.pathname+location.search+location.hash){back.hidden=false;back.addEventListener('click',()=>{location.assign(last)})}}catch(e){}
}
function wireImpactCircle(){
 // Do not duplicate existing popups: link to their actual data-map handlers.
 document.querySelectorAll('.atlas-panel[data-atlas-panel]').forEach(panel=>{
   const pins=[...panel.querySelectorAll('.map-overlays .map-pin[data-map]')];if(!pins.length||panel.querySelector('.aad-map-legend'))return;
   const outer=$create('div','aad-map-legend');const labels=$create('div','aad-vx-legend-label','Choose a sample · labels are outside the infographic');const grid=$create('div','aad-vx-legends');
   const visual=panel.dataset.atlasPanel;
   const items=pins.map(pin=>({id:pin.dataset.map,label:(pin.getAttribute('title')||pin.getAttribute('aria-label')||'Open sample').replace(/\s*[·—]\s*click for sample\s*$/i,'').replace(/^Open /,'').replace(/ worked sample$/,'')}));
   const hitLayer=buildHitLayer(visual,items,(_,i)=>activatePin(i));
   function activatePin(i){
      const pin=pins[i];if(!pin)return;pin.click();
      const id=pin.dataset.map;
      grid.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.vxMirror===id)));
      hitLayer.querySelectorAll('.aad-vx-hitshape').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.vxId===id)));
   }
   pins.forEach((pin,i)=>{
     const b=$create('button','aad-vx-legend-btn',items[i].label);b.type='button';b.setAttribute('aria-label',pin.getAttribute('aria-label')||items[i].label);b.dataset.vxMirror=pin.dataset.map;
     b.addEventListener('click',()=>activatePin(i));grid.appendChild(b);
   });
   panel.querySelector('.map-overlays')?.appendChild(hitLayer);
   outer.append(labels,grid);const figure=panel.querySelector('.map-frame');figure?.insertAdjacentElement('afterend',outer);
   const caption=panel.querySelector('.map-caption');if(caption)caption.textContent='The artwork stays unobstructed. Click directly on a stage or select its name below to open the full worked sample.';
 });
}
function init(){if(document.getElementById('aad-vx-title'))return;setupDialog();wireImpactCircle();document.body.classList.add('aad-vx-ready');render();window.AADVisualExplorer={open:openExplorer,close:closeExplorer};}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
