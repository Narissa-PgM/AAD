/* AA&D operating model — single source of truth.
   One Harvard → Impact Circle → SMARTER → VERITAS, the Release Gate, and the
   Director of Stewardship Reporting responsibilities. Every page renders its model
   graphics from this file, so wording and order stay the same everywhere.
   Placeholders:  <div data-aad-model="wheel|ribbon|coverage" [data-focus="ic-1"]></div>
   Works in static pages and in chapter-rendered apps (watches the DOM). No donor data. */
(function () {
  'use strict';
  if (window.AADModel) return;

  /* ------------------------------------------------------------------ data */
  var OH = {
    name: 'One Harvard', role: 'Who · how we work together',
    def: 'Leading across offices without formal authority. Each office keeps its own decisions; everyone shares the automation, the standards and one evidence log.',
    partners: [
      { id: 'p1', short: 'Development & gift officers', name: 'FAS Development & gift officers', c: '#A51C30', own: 'The donor relationship and donor strategy.', ask: 'A review window for major-donor drafts and a say in custom reports.', give: 'Reports on time, with a follow-up suggestion for the next conversation.' },
      { id: 'p2', short: 'FAS Finance', name: 'FAS Finance', c: '#2F5D8A', own: 'Fund balances, distributions, spending and the ledger.', ask: 'Fund figures on a calendar keyed to close, and one variance list per batch.', give: 'Fewer ad hoc requests; every donor figure tied to their ledger.' },
      { id: 'p3', short: 'Financial Aid & GSAS', name: 'Financial Aid & GSAS', c: '#2D6E73', own: 'Scholarship and fellowship recipients; student records under FERPA.', ask: 'Minimum fields once per term, with consent handled at the source.', give: 'One predictable request, and no student data outside the approved environment.' },
      { id: 'p4', short: 'Faculty Affairs & units', name: 'Faculty Affairs & academic units', c: '#2F6B4F', own: 'Professorship holders, faculty and program outcomes, and their stories.', ask: 'Chair-holder updates and outcome notes at set points in the year.', give: 'Donor reports that represent their faculty and programs accurately.' },
      { id: 'p5', short: 'Institutional Research', name: 'Institutional Research', c: '#5B4A8A', own: 'Official outcome and benchmark figures.', ask: 'Approved outcome measures that reports may cite.', give: 'Consistent use of official numbers in donor materials.' },
      { id: 'p6', short: 'Communications', name: 'Advancement Communications', c: '#8A651F', own: 'Voice, design, accessibility and the story library.', ask: 'Template design, tone review and consent-tagged stories.', give: 'Templates that keep Harvard’s voice at scale.' },
      { id: 'p7', short: 'Advancement Solutions', name: 'Advancement Solutions', c: '#3B4754', own: 'The advancement CRM, data security and the approved AI environment.', ask: 'Read-only access, a security review, and regression tests when tools change.', give: 'Governed AI use with logged access and no writes to source systems.' },
      { id: 'p8', short: 'Prospect Research', name: 'Prospect Management & Research', c: '#7A5B12', own: 'Donor engagement data and strategy signals.', ask: 'Help reading donor response after delivery.', give: 'Stewardship response linked to the donor record for the next strategy review.' }
    ]
  };
  var IC = {
    name: 'Impact Circle', role: 'When · the yearly lap',
    def: 'Seven stages run with FAS partners every reporting year. The circle never closes: what one lap learns becomes the next lap’s plan, so support for each donor grows instead of restarting.',
    stages: [
      { id: 'ic-1', n: 1, name: 'Plan & Prioritize', what: 'Align donor intent, the reporting calendar and institutional priorities.', auto: 'Builds the reporting calendar from fund records.', done: 'Every fund has an owner, a tier and a due date.', p: ['p1'], gate: 0, v: [0] },
      { id: 'ic-2', n: 2, name: 'Prepare & Gather', what: 'Collect fund, outcome and story inputs from the offices that own them.', auto: 'Scheduled read-only pulls and ledger matches into one fact sheet per fund.', done: 'Every source is confirmed by its owner.', p: ['p2', 'p3', 'p4', 'p5'], gate: 1, v: [2, 3] },
      { id: 'ic-3', n: 3, name: 'Produce & Personalize', what: 'Build reports for each audience and tier.', auto: 'Drafts from approved templates using tagged facts only.', done: 'The draft answers all seven VERITAS questions.', p: ['p6'], gate: 2, v: [1, 5] },
      { id: 'ic-4', n: 4, name: 'Review & Certify', what: 'Verify accuracy, traceability and approvals.', auto: 'Routes the draft and checks that every figure has a source.', done: 'All six Release Gate checks clear and a named approver signs.', p: ['p2', 'p4'], gate: 3, v: [4], release: true },
      { id: 'ic-5', n: 5, name: 'Deliver & Engage', what: 'Share the report and support the donor conversation.', auto: 'Merges, uploads to the digital platform and logs delivery in the CRM.', done: 'Delivery and the gift officer follow-up are logged.', p: ['p1'], gate: 4, v: [6] },
      { id: 'ic-6', n: 6, name: 'Evaluate & Learn', what: 'Measure usefulness, timeliness, response and stewardship quality.', auto: 'Collects opens, follow-ups and reason codes into the scorecard.', done: 'Results are reviewed with leadership and recorded.', p: ['p8'], gate: 5, v: [] },
      { id: 'ic-7', n: 7, name: 'Improve & Scale', what: 'Refine templates, workflows and practices, then start the next lap.', auto: 'Tests template and prompt changes on last season’s reports before use.', done: 'The next lap is planned with the changes.', p: ['p7'], gate: 6, v: [] }
    ]
  };
  var SM = {
    name: 'SMARTER', role: 'How · a gate at every stage',
    def: 'Each Impact Circle stage is planned and passed through one SMARTER test, in order around the lap: plan, measure, execute, evaluate, then review and improve.',
    letters: [
      { k: 'S', w: 'Specific', d: 'Purpose, audience, owner and scope.', c: '#A51C30' },
      { k: 'M', w: 'Measurable', d: 'Baseline, KPIs, evidence and quality.', c: '#2F5D8A' },
      { k: 'A', w: 'Attainable', d: 'Capacity, budget, data and approvals.', c: '#2F6B4F' },
      { k: 'R', w: 'Relevant', d: 'Mission, donor intent, stewardship and risk.', c: '#8A651F' },
      { k: 'T', w: 'Time-bound', d: 'Milestones, dates and review cadence.', c: '#2D6E73' },
      { k: 'E', w: 'Evaluate', d: 'Usefulness, quality, timeliness and response.', c: '#5B4A8A' },
      { k: 'R', w: 'Review', d: 'Continue, adapt, scale or stop.', c: '#3B4754' }
    ]
  };
  var VE = {
    name: 'VERITAS', role: 'What · every report carries',
    def: 'One seven-part standard for every report family: endowed, current-use, capital and restricted.',
    letters: [
      { k: 'V', w: 'Vision', q: 'Why does this gift matter?', d: 'One sentence tying the gift to the purpose the donor chose.', src: 'Gift agreement and unit mission.' },
      { k: 'E', w: 'Experience', q: 'Who felt it?', d: 'A student, faculty or program story, used with consent.', src: 'Academic unit, with a consent record.' },
      { k: 'R', w: 'Results', q: 'What changed, and how do we know?', d: 'Specific, verifiable outcomes.', src: 'Unit records and Institutional Research.' },
      { k: 'I', w: 'Investment', q: 'Where did the money go?', d: 'Balances, distributions and spending, reconciled.', src: 'The ledger, through FAS Finance.' },
      { k: 'T', w: 'Truth', q: 'Can we trace every claim?', d: 'Each claim has a source, a reviewer and a date.', src: 'The Release Gate evidence log.' },
      { k: 'A', w: 'Advancement', q: 'What comes next for the mission?', d: 'Where the work goes next.', src: 'Unit plans and priorities.' },
      { k: 'S', w: 'Stewardship', q: 'What do we say back?', d: 'Personal thanks and a clear next touchpoint.', src: 'Gift officer and stewardship plan.' }
    ]
  };
  var GATE = {
    name: 'Release Gate', at: 'ic-4',
    def: 'Six checks at Review & Certify. Nothing is released until all six clear and a named approver signs.',
    checks: [
      ['Intent', 'Purpose, restrictions and naming match the gift agreement.'],
      ['Reconciliation', 'Every figure ties to the ledger.'],
      ['Consent', 'No name or story without a consent record; anonymity honored.'],
      ['Traceability', 'Every claim has a source, a reviewer and a date.'],
      ['Attribution', 'Outcomes are credited fairly, not over-claimed.'],
      ['Authorization', 'A named approver signs before release.']
    ]
  };
  var PAGES = {
    cp: ['career-profile.html', 'Career profile'],
    fs: ['fas-stewardship.html', 'FAS pilot brief'],
    op: ['operations.html', 'Operations'],
    dp: ['donor-profile.html', 'Donor record'],
    ar: ['archive.html', 'Detail (archive)'],
    sl: ['strategic-leadership.html', 'Strategic leadership'],
    dr: ['donor-impact-reporting.html', 'Donor impact reporting'],
    tl: ['team-leadership.html', 'Team leadership'],
    ci: ['campaign-initiatives.html', 'Campaign initiatives'],
    su: ['operating-suite.html', 'Operating Suite'],
    pb: ['playbook.html', 'Playbook'],
    po: ['program-office.html', 'Program office'],
    co: ['communications.html', 'Communications'],
    ic: ['impact-circle.html', 'Impact Circle'],
    wf: ['workframe.html', 'Workframe']
  };
  var ARCHIVE = ['sl', 'dr', 'tl', 'ci', 'su', 'pb', 'po', 'co', 'ic', 'wf'];
  /* posting: Director of Stewardship Reporting (paraphrased). e = [page, hash, 'P' primary | 'S' supporting | 'D' archived detail] */
  var ROLE = [
    { area: 'Strategic Leadership', c: '#A51C30', duties: [
      { t: 'Impact reporting strategy tied to institutional priorities and campaign goals', st: 'ic-1', e: [['fs', '#specific', 'P'], ['cp', '#impact-circle', 'S'], ['sl', '#northstar', 'D']] },
      { t: 'Reporting standards, frameworks and templates for every gift type', st: 'ic-3', e: [['fs', '#specific', 'P'], ['op', '#weekly-loop', 'S'], ['dr', '#reports', 'D']] },
      { t: 'Advise leadership on impact storytelling, transparency and stewardship', st: 'ic-6', e: [['fs', '#review', 'P'], ['cp', '#impact-circle', 'S'], ['sl', '#comms', 'D']] },
      { t: 'Campaign and board-level impact communications', st: 'ic-5', e: [['fs', '#fellowship', 'P'], ['ci', '#campaign', 'D']] }
    ] },
    { area: 'Donor Impact Reporting & Stewardship', c: '#2F5D8A', duties: [
      { t: 'Annual endowed fund, scholarship, research and capital reports', st: 'ic-3', e: [['dp', '', 'P'], ['fs', '#season', 'S'], ['su', '?report=endowed#reportgallery', 'D']] },
      { t: 'Reporting cadence, complexity and customization, including the digital platform', st: 'ic-1', e: [['fs', '#season', 'P'], ['op', '#weekly-loop', 'S'], ['dr', '#cadence', 'D']] },
      { t: 'Alignment with gift agreements, donor intent and compliance', st: 'ic-4', e: [['dp', '', 'P'], ['op', '#weekly-loop', 'S'], ['dr', '#trust', 'D']] },
      { t: 'Custom reports for major donors, foundations and corporate partners', st: 'ic-3', e: [['fs', '#fellowship', 'P'], ['dp', '', 'S'], ['dr', '#special', 'D']] },
      { t: 'Stories, outcome data and financials combined into donor-centered materials', st: 'ic-2', e: [['dp', '', 'P'], ['fs', '#fellowship', 'S'], ['co', '', 'D']] },
      { t: 'Stewardship materials for gift officers’ cultivation, renewal and upgrade', st: 'ic-5', e: [['fs', '#fellowship', 'P'], ['dp', '', 'S'], ['dr', '#special', 'D']] }
    ] },
    { area: 'Team Leadership & Operations', c: '#2F6B4F', duties: [
      { t: 'High-level donor strategy with managing directors and the Executive Director', st: 'ic-1', e: [['fs', '#specific', 'P'], ['sl', '#team', 'D']] },
      { t: 'Lead, mentor and develop the reporting team', st: 'ic-7', e: [['cp', '#summary', 'P'], ['op', '#weekly-loop', 'S'], ['tl', '#team', 'D']] },
      { t: 'Allocate staff time by report complexity', st: 'ic-1', e: [['fs', '#measurable', 'P'], ['op', '#weekly-loop', 'S'], ['tl', '#capacity', 'D']] },
      { t: 'Quality assurance processes and timelines', st: 'ic-4', e: [['op', '#weekly-loop', 'P'], ['fs', '#evaluate', 'S'], ['tl', '#quality', 'D']] },
      { t: 'Collaboration across advancement teams and better workflows', st: 'ic-7', e: [['fs', '#fellowship', 'P'], ['cp', '#impact-circle', 'S'], ['tl', '#collaboration', 'D']] }
    ] },
    { area: 'Campaign & Institutional Initiatives', c: '#8A651F', duties: [
      { t: 'Campaign impact summaries, milestone reports and public narratives', st: 'ic-5', e: [['fs', '#fellowship', 'P'], ['ci', '#products', 'D']] },
      { t: 'Capture stories and outcomes with deans and program directors', st: 'ic-2', e: [['dp', '', 'P'], ['fs', '#fellowship', 'S'], ['ci', '#partnerships', 'D']] },
      { t: 'Donor recognition publications and annual impact reports', st: 'ic-5', e: [['fs', '#season', 'P'], ['ci', '#recognition', 'D']] }
    ] }
  ];
  var LAYERS = [
    { k: 'oh', n: 1, name: OH.name, role: OH.role, c: '#2F6B4F' },
    { k: 'ic', n: 2, name: IC.name, role: IC.role, c: '#A51C30' },
    { k: 'sm', n: 3, name: SM.name, role: SM.role, c: '#2F5D8A' },
    { k: 've', n: 4, name: VE.name, role: VE.role, c: '#8A651F' }
  ];

  /* --------------------------------------------------------------- helpers */
  var NS = 'http://www.w3.org/2000/svg', uid = 0;
  function el(tag, attrs, kids) {
    var e = tag.indexOf('svg:') === 0 ? document.createElementNS(NS, tag.slice(4)) : document.createElement(tag);
    if (attrs) for (var k in attrs) { if (attrs[k] == null) continue; if (k === 'text') e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function s(tag, attrs, kids) { return el('svg:' + tag, attrs, kids); }
  function pol(r, a) { return [r * Math.cos(a), r * Math.sin(a)]; }
  function arcPath(r0, r1, a0, a1) {
    var big = a1 - a0 > Math.PI ? 1 : 0, p0 = pol(r1, a0), p1 = pol(r1, a1), p2 = pol(r0, a1), p3 = pol(r0, a0);
    return 'M' + p0 + 'A' + r1 + ',' + r1 + ' 0 ' + big + ' 1 ' + p1 + 'L' + p2 + 'A' + r0 + ',' + r0 + ' 0 ' + big + ' 0 ' + p3 + 'Z';
  }
  function textArc(r, a0, a1) { // returns path that reads left-to-right (flips on the lower half)
    var mid = (a0 + a1) / 2, low = Math.sin(mid) > 0.05;
    if (!low) { var p0 = pol(r, a0), p1 = pol(r, a1); return 'M' + p0 + 'A' + r + ',' + r + ' 0 0 1 ' + p1; }
    var q0 = pol(r, a1), q1 = pol(r, a0); return 'M' + q0 + 'A' + r + ',' + r + ' 0 0 0 ' + q1;
  }
  function stageById(id) { for (var i = 0; i < IC.stages.length; i++) if (IC.stages[i].id === id) return IC.stages[i]; return null; }
  function partnerById(id) { for (var i = 0; i < OH.partners.length; i++) if (OH.partners[i].id === id) return OH.partners[i]; return null; }
  function rmo() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function href(key, hash) { return './' + PAGES[key][0] + (hash || ''); }

  /* ----------------------------------------------------------------- wheel */
  var A0 = -Math.PI / 2, ST = 2 * Math.PI / 7, PT = 2 * Math.PI / 8;
  function buildWheel(host) {
    var id = 'aadw' + (++uid), focus = host.getAttribute('data-focus') || 'ic-1';
    host.classList.add('aadm', 'aadm-wheel'); host.textContent = '';
    var svg = s('svg', { viewBox: '-380 -380 760 760', class: 'aadm-svg', role: 'group', 'aria-label': 'Operating model wheel: One Harvard partners on the outer ring, the seven Impact Circle stages, a SMARTER gate at each stage, and VERITAS at the center' });
    var defs = s('defs');
    defs.appendChild(s('radialGradient', { id: id + 'g' }, [s('stop', { offset: '0', 'stop-color': '#fff' }), s('stop', { offset: '1', 'stop-color': '#F4EFE6' })]));
    defs.appendChild(s('filter', { id: id + 'sh', x: '-20%', y: '-20%', width: '140%', height: '140%' }, [s('feDropShadow', { dx: '0', dy: '2', stdDeviation: '3', 'flood-color': '#13171C', 'flood-opacity': '.18' })]));
    svg.appendChild(defs);
    var gP = s('g', { class: 'aadm-ring-p' }), gI = s('g', { class: 'aadm-ring-i' }), gS = s('g', { class: 'aadm-ring-s' }), gV = s('g', { class: 'aadm-core' });

    /* layer guide rings */
    svg.appendChild(s('circle', { r: '366', fill: 'none', stroke: '#E1E5EA', 'stroke-dasharray': '2 6' }));
    /* outer: One Harvard partners */
    OH.partners.forEach(function (p, i) {
      var a0 = A0 + i * PT + 0.012, a1 = A0 + (i + 1) * PT - 0.012, pid = id + 'pt' + i;
      defs.appendChild(s('path', { id: pid, d: textArc(326, a0, a1) }));
      var g = s('g', { class: 'aadm-seg aadm-p', tabindex: '0', role: 'button', 'data-k': p.id, 'aria-label': 'One Harvard partner: ' + p.name });
      g.appendChild(s('path', { d: arcPath(302, 352, a0, a1), fill: p.c, 'fill-opacity': '.13', stroke: p.c, 'stroke-opacity': '.45' }));
      var t = s('text', { class: 'aadm-pt', dy: '4' }); t.appendChild(s('textPath', { href: '#' + pid, startOffset: '50%', 'text-anchor': 'middle', text: p.short }));
      g.appendChild(t); gP.appendChild(g);
    });
    /* Impact Circle stages */
    IC.stages.forEach(function (st, i) {
      var a0 = A0 + i * ST + 0.01, a1 = A0 + (i + 1) * ST - 0.01, tid = id + 'st' + i, mid = (a0 + a1) / 2;
      defs.appendChild(s('path', { id: tid, d: textArc(258, a0, a1) }));
      defs.appendChild(s('path', { id: tid + 'b', d: textArc(232, a0, a1) }));
      var g = s('g', { class: 'aadm-seg aadm-i', tabindex: '0', role: 'button', 'data-k': st.id, 'aria-label': 'Impact Circle stage ' + st.n + ': ' + st.name });
      g.appendChild(s('path', { d: arcPath(204, 294, a0, a1), fill: 'hsl(352,' + (52 + i * 3) + '%,' + (32 + i * 3.2) + '%)' }));
      var t = s('text', { class: 'aadm-st', dy: '5' }); t.appendChild(s('textPath', { href: '#' + tid, startOffset: '50%', 'text-anchor': 'middle', text: st.name }));
      var t2 = s('text', { class: 'aadm-st2', dy: '4' }); t2.appendChild(s('textPath', { href: '#' + tid + 'b', startOffset: '50%', 'text-anchor': 'middle', text: 'Stage ' + st.n }));
      g.appendChild(t); g.appendChild(t2);
      /* direction chevron at the end of each stage */
      var c = pol(282, a1 - 0.035), ang = (a1 - 0.035) * 180 / Math.PI + 90;
      g.appendChild(s('path', { d: 'M-5,-5 L3,0 L-5,5', transform: 'translate(' + c + ') rotate(' + (ang - 90) + ')', fill: 'none', stroke: '#fff', 'stroke-width': '2', opacity: '.75' }));
      gI.appendChild(g);
      /* SMARTER gate for this stage */
      var L = SM.letters[st.gate], gc = pol(172, mid);
      var gg = s('g', { class: 'aadm-seg aadm-s', tabindex: '0', role: 'button', 'data-k': 'sm-' + st.gate, 'aria-label': 'SMARTER ' + L.w + ', the gate at ' + st.name });
      gg.appendChild(s('path', { d: arcPath(146, 198, a0, a1), fill: L.c, 'fill-opacity': '.10', stroke: '#fff', 'stroke-width': '2' }));
      gg.appendChild(s('circle', { cx: gc[0], cy: gc[1] - 6, r: '17', fill: L.c, filter: 'url(#' + id + 'sh)' }));
      gg.appendChild(s('text', { x: gc[0], y: gc[1] - 0.5, class: 'aadm-sl', 'text-anchor': 'middle', text: L.k }));
      gg.appendChild(s('text', { x: gc[0], y: gc[1] + 25, class: 'aadm-sw', 'text-anchor': 'middle', text: L.w }));
      gS.appendChild(gg);
    });
    /* Release Gate marker between stage 4 and 5 */
    var ra = A0 + 4 * ST, rp = pol(214, ra), rq = pol(130, ra);
    var rg = s('g', { class: 'aadm-seg aadm-rg', tabindex: '0', role: 'button', 'data-k': 'gate', 'aria-label': 'Release Gate: six checks before delivery' });
    rg.appendChild(s('line', { x1: rq[0], y1: rq[1], x2: pol(300, ra)[0], y2: pol(300, ra)[1], stroke: '#13171C', 'stroke-width': '3', 'stroke-dasharray': '5 4' }));
    rg.appendChild(s('rect', { x: rp[0] - 46, y: rp[1] - 13, width: '92', height: '26', rx: '13', fill: '#13171C' }));
    rg.appendChild(s('text', { x: rp[0], y: rp[1] + 4.5, class: 'aadm-rgt', 'text-anchor': 'middle', text: 'Release Gate ▸' }));
    /* VERITAS core */
    gV.appendChild(s('circle', { r: '136', fill: 'url(#' + id + 'g)', stroke: '#E9DCC4' }));
    gV.appendChild(s('text', { y: '-8', class: 'aadm-cv', 'text-anchor': 'middle', text: 'VERITAS' }));
    gV.appendChild(s('text', { y: '14', class: 'aadm-cv2', 'text-anchor': 'middle', text: 'what every report carries' }));
    var hex = [];
    VE.letters.forEach(function (v, i) {
      var a = A0 + i * ST, p = pol(98, a); hex.push(p);
      var g = s('g', { class: 'aadm-seg aadm-v', tabindex: '0', role: 'button', 'data-k': 've-' + i, 'aria-label': 'VERITAS ' + v.w });
      g.appendChild(s('circle', { cx: p[0], cy: p[1], r: '19', fill: '#fff', stroke: '#8A651F', 'stroke-width': '2' }));
      g.appendChild(s('text', { x: p[0], y: p[1] + 6, class: 'aadm-vl', 'text-anchor': 'middle', text: v.k }));
      gV.appendChild(g);
    });
    gV.insertBefore(s('polygon', { points: hex.map(String).join(' '), fill: 'none', stroke: '#D9C59C', 'stroke-dasharray': '3 4' }), gV.childNodes[3]);
    svg.appendChild(gP); svg.appendChild(gI); svg.appendChild(gS); svg.appendChild(rg); svg.appendChild(gV);
    /* moving lap token */
    var orbit = s('path', { id: id + 'orb', d: 'M0,-249 A249,249 0 1 1 -0.01,-249', fill: 'none' }); defs.appendChild(orbit);
    var tok = s('g', { class: 'aadm-tok', 'aria-hidden': 'true' });
    tok.appendChild(s('circle', { r: '8', fill: '#F3D9A0', stroke: '#8A651F', 'stroke-width': '1.5' }));
    tok.appendChild(s('animateMotion', { dur: '28s', repeatCount: 'indefinite', rotate: 'auto' }, [s('mpath', { href: '#' + id + 'orb' })]));
    svg.appendChild(tok);

    /* legend + panel */
    var legend = el('ol', { class: 'aadm-legend', 'aria-label': 'Model layers, outside in' });
    LAYERS.forEach(function (L) {
      var b = el('button', { type: 'button', 'data-k': L.k === 'oh' ? 'p1' : L.k === 'ic' ? 'ic-1' : L.k === 'sm' ? 'sm-0' : 've-0', style: '--c:' + L.c },
        [el('i', { text: String(L.n) }), el('b', { text: L.name }), el('span', { text: L.role })]);
      legend.appendChild(el('li', null, [b]));
    });
    var panel = el('div', { class: 'aadm-panel', 'aria-live': 'polite' });
    var ctl = el('div', { class: 'aadm-ctl' });
    var play = el('button', { type: 'button', class: 'aadm-btn', 'aria-pressed': 'false', text: '▶ Walk the lap' });
    var mot = el('button', { type: 'button', class: 'aadm-btn', 'aria-pressed': 'false', text: 'Pause motion' });
    ctl.appendChild(play); ctl.appendChild(mot);
    var fig = el('div', { class: 'aadm-fig' }, [svg, ctl]);
    var side = el('div', { class: 'aadm-side' }, [legend, panel]);
    host.appendChild(el('div', { class: 'aadm-grid' }, [fig, side]));

    function chips(title, items) {
      if (!items.length) return null;
      var w = el('div', { class: 'aadm-chips' }, [el('h5', { text: title })]);
      items.forEach(function (x) { w.appendChild(el('button', { type: 'button', 'data-k': x[0], style: '--c:' + (x[2] || '#3B4754'), text: x[1] })); });
      return w;
    }
    function sec(h, p) { return el('div', { class: 'aadm-sec' }, [el('h5', { text: h }), el('p', { text: p })]); }
    function show(k) {
      var on = {}, layer = '', title = '', kids = [];
      if (/^ic-/.test(k)) {
        var st = stageById(k); layer = 'Impact Circle · stage ' + st.n + ' of 7'; title = st.name;
        on[k] = 1; st.p.forEach(function (p) { on[p] = 1; }); on['sm-' + st.gate] = 1; st.v.forEach(function (v) { on['ve-' + v] = 1; }); if (st.release) on.gate = 1;
        kids.push(sec('What happens', st.what), sec('Automation’s part', st.auto), sec('Done when', st.done));
        kids.push(chips('One Harvard partners', st.p.map(function (p) { var x = partnerById(p); return [p, x.name, x.c]; })));
        var L = SM.letters[st.gate]; kids.push(chips('SMARTER gate', [['sm-' + st.gate, L.k + ' · ' + L.w + ': ' + L.d, L.c]]));
        if (st.v.length) kids.push(chips('VERITAS it produces', st.v.map(function (v) { return ['ve-' + v, VE.letters[v].k + ' · ' + VE.letters[v].w, '#8A651F']; })));
        else kids.push(sec('VERITAS', 'No new report content here: this stage turns what was learned into the next lap’s plan.'));
        if (st.release) kids.push(chips('Then', [['gate', 'Release Gate · six checks', '#13171C']]));
      } else if (/^p\d/.test(k)) {
        var p = partnerById(k); layer = 'One Harvard · partner'; title = p.name; on[k] = 1;
        var sts = IC.stages.filter(function (x) { return x.p.indexOf(k) > -1; }); sts.forEach(function (x) { on[x.id] = 1; });
        kids.push(sec('They own', p.own), sec('We ask', p.ask), sec('They get back', p.give));
        kids.push(chips('Joins these stages', sts.map(function (x) { return [x.id, x.n + ' · ' + x.name, '#A51C30']; })));
        kids.unshift(el('p', { class: 'aadm-def', text: OH.def }));
      } else if (/^sm-/.test(k)) {
        var i = +k.slice(3), L2 = SM.letters[i], st2 = IC.stages.filter(function (x) { return x.gate === i; })[0];
        layer = 'SMARTER · ' + (i + 1) + ' of 7'; title = L2.k + ' · ' + L2.w; on[k] = 1; if (st2) on[st2.id] = 1;
        kids.push(el('p', { class: 'aadm-def', text: SM.def }), sec('The test', L2.d));
        if (st2) kids.push(chips('Applied at', [[st2.id, st2.n + ' · ' + st2.name, '#A51C30']]));
      } else if (/^ve-/.test(k)) {
        var j = +k.slice(3), v = VE.letters[j]; layer = 'VERITAS · ' + (j + 1) + ' of 7'; title = v.k + ' · ' + v.w; on[k] = 1;
        var st3 = IC.stages.filter(function (x) { return x.v.indexOf(j) > -1; }); st3.forEach(function (x) { on[x.id] = 1; });
        kids.push(sec('The question', v.q), sec('In the report', v.d), sec('Source', v.src));
        kids.push(chips('Produced at', st3.map(function (x) { return [x.id, x.n + ' · ' + x.name, '#A51C30']; })));
      } else if (k === 'gate') {
        layer = 'Release Gate · at stage 4'; title = 'Six checks before delivery'; on.gate = 1; on['ic-4'] = 1; on['ic-5'] = 1;
        kids.push(el('p', { class: 'aadm-def', text: GATE.def }));
        var ol = el('ol', { class: 'aadm-checks' }); GATE.checks.forEach(function (c) { ol.appendChild(el('li', null, [el('b', { text: c[0] }), ' ' + c[1]])); }); kids.push(ol);
      } else return;
      [].forEach.call(svg.querySelectorAll('.aadm-seg'), function (g) { var kk = g.getAttribute('data-k'); g.classList.toggle('on', !!on[kk]); });
      svg.classList.add('focus');
      panel.textContent = '';
      panel.appendChild(el('p', { class: 'aadm-k', text: layer })); panel.appendChild(el('h4', { text: title }));
      kids.forEach(function (x) { if (x) panel.appendChild(x); });
      host.setAttribute('data-current', k);
    }
    host.addEventListener('click', function (e) {
      var t = e.target.closest('[data-k]'); if (!t || !host.contains(t)) return;
      if (t.closest('.aadm-ctl')) return; stop(); show(t.getAttribute('data-k'));
    });
    host.addEventListener('keydown', function (e) {
      var t = e.target; if ((e.key === 'Enter' || e.key === ' ') && t.matches && t.matches('g[data-k]')) { e.preventDefault(); stop(); show(t.getAttribute('data-k')); }
    });
    var timer = null, step = 0;
    function stop() { if (timer) { clearInterval(timer); timer = null; } play.setAttribute('aria-pressed', 'false'); play.textContent = '▶ Walk the lap'; }
    play.addEventListener('click', function () {
      if (timer) { stop(); return; }
      var cur = host.getAttribute('data-current'); step = /^ic-/.test(cur || '') ? +cur.slice(3) % 7 : 0;
      show(IC.stages[step].id); play.setAttribute('aria-pressed', 'true'); play.textContent = '❚❚ Stop the walk';
      timer = setInterval(function () { step = (step + 1) % 7; show(IC.stages[step].id); }, 3200);
    });
    function setMotion(paused) { if (!svg.pauseAnimations) return; if (paused) svg.pauseAnimations(); else svg.unpauseAnimations(); mot.setAttribute('aria-pressed', String(paused)); mot.textContent = paused ? 'Play motion' : 'Pause motion'; }
    mot.addEventListener('click', function () { setMotion(mot.getAttribute('aria-pressed') !== 'true'); });
    if (rmo()) { mot.hidden = true; tok.style.display = 'none'; }
    show(focus);
    return { show: show };
  }

  /* ---------------------------------------------------------------- ribbon */
  var GLYPH = {
    oh: '<circle cx="12" cy="7" r="3"/><circle cx="5" cy="16" r="2.6"/><circle cx="19" cy="16" r="2.6"/><path d="M12 10v3M7.5 15l2.5-2M16.5 15l-2.5-2"/>',
    ic: '<path d="M19 12a7 7 0 1 1-2.1-5"/><path d="M19 4v4h-4"/>',
    sm: '<path d="M4 6h16M4 12h10M4 18h6"/><path d="m15 17 2 2 4-4"/>',
    ve: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>'
  };
  function buildRibbon(host) {
    host.classList.add('aadm', 'aadm-ribbon'); host.textContent = '';
    var ol = el('ol', { class: 'aadm-rb', 'aria-label': 'Operating model: One Harvard, Impact Circle, SMARTER, VERITAS' });
    var first = { oh: 'p1', ic: 'ic-1', sm: 'sm-0', ve: 've-0' };
    var sub = { oh: OH.partners.length + ' partner offices', ic: '7-stage yearly lap', sm: 'a gate at every stage', ve: '7 parts in every report' };
    LAYERS.forEach(function (L) {
      var b = el('button', { type: 'button', style: '--c:' + L.c, 'data-open': first[L.k] });
      var ic = s('svg', { viewBox: '0 0 24 24', class: 'aadm-g', 'aria-hidden': 'true' }); ic.innerHTML = GLYPH[L.k];
      b.appendChild(ic); b.appendChild(el('span', null, [el('small', { text: L.n + ' · ' + L.role.split(' · ')[0] }), el('b', { text: L.name }), el('em', { text: sub[L.k] })]));
      ol.appendChild(el('li', null, [b]));
    });
    var open = el('button', { type: 'button', class: 'aadm-rb-open', 'data-open': 'ic-1', text: 'Open the model ↗' });
    host.appendChild(el('div', { class: 'aadm-rb-wrap' }, [ol, open]));
    host.addEventListener('click', function (e) { var t = e.target.closest('[data-open]'); if (t) openDialog(t.getAttribute('data-open'), t); });
  }
  var dlg = null, dlgWheel = null, dlgOpener = null;
  function openDialog(k, from) {
    if (!dlg) {
      dlg = el('dialog', { class: 'aadm-dlg', 'aria-label': 'Operating model' });
      var head = el('div', { class: 'aadm-dh' }, [el('div', null, [el('p', { class: 'aadm-k', text: 'Operating model' }), el('h3', { text: 'One Harvard → Impact Circle → SMARTER → VERITAS' })])]);
      var x = el('button', { type: 'button', class: 'aadm-x', 'aria-label': 'Close', text: '×' }); head.appendChild(x);
      var body = el('div', { class: 'aadm-db' }); var host = el('div', { 'data-focus': k }); body.appendChild(host);
      dlg.appendChild(head); dlg.appendChild(body); document.body.appendChild(dlg);
      dlgWheel = buildWheel(host); host.setAttribute('data-aad-done', '1');
      x.addEventListener('click', function () { dlg.close(); });
      dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
      dlg.addEventListener('close', function () { if (dlgOpener && document.contains(dlgOpener)) dlgOpener.focus({ preventScroll: true }); });
    }
    dlgOpener = from || null; dlgWheel.show(k);
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }

  /* -------------------------------------------------------------- coverage */
  function buildCoverage(host) {
    host.classList.add('aadm', 'aadm-cov'); host.textContent = '';
    var cols = ['cp', 'fs', 'op', 'dp', 'ar'];
    var total = 0, covered = 0;
    ROLE.forEach(function (a) { a.duties.forEach(function (d) { total++; if (d.e.some(function (x) { return x[2] === 'P'; })) covered++; }); });
    /* summary bars */
    var sum = el('div', { class: 'aadm-cs' });
    sum.appendChild(el('div', { class: 'aadm-cs-big' }, [el('b', { text: covered + '/' + total }), el('span', { text: 'posting duties with a primary work sample' })]));
    ROLE.forEach(function (a) {
      var n = a.duties.length, ev = a.duties.reduce(function (t, d) { return t + d.e.length; }, 0);
      var bar = el('div', { class: 'aadm-cs-row', style: '--c:' + a.c }, [el('span', { text: a.area }), el('i', null, [el('em', { style: 'width:100%' })]), el('small', { text: n + ' duties · ' + ev + ' evidence links' })]);
      sum.appendChild(bar);
    });
    host.appendChild(sum);
    /* heatmap */
    var wrap = el('div', { class: 'aadm-hm-wrap' });
    var tb = el('table', { class: 'aadm-hm' });
    var thead = el('thead'), hr = el('tr');
    hr.appendChild(el('th', { scope: 'col', class: 'aadm-hm-d', text: 'Posting duty' }));
    hr.appendChild(el('th', { scope: 'col', class: 'aadm-hm-m', text: 'Stage · gate' }));
    cols.forEach(function (c) { hr.appendChild(el('th', { scope: 'col', class: 'aadm-hm-c' }, [el('span', { text: PAGES[c][1] })])); });
    thead.appendChild(hr); tb.appendChild(thead);
    var tbody = el('tbody');
    ROLE.forEach(function (a) {
      var ar = el('tr', { class: 'aadm-hm-area', style: '--c:' + a.c }); ar.appendChild(el('th', { colspan: String(cols.length + 2), scope: 'colgroup', text: a.area })); tbody.appendChild(ar);
      a.duties.forEach(function (d) {
        var st = stageById(d.st), L = SM.letters[st.gate], tr = el('tr', { style: '--c:' + a.c });
        var prim = d.e.filter(function (x) { return x[2] === 'P'; })[0];
        tr.appendChild(el('th', { scope: 'row', class: 'aadm-hm-d' }, [el('a', { href: href(prim[0], prim[1]), text: d.t })]));
        var m = el('td', { class: 'aadm-hm-m' }, [el('button', { type: 'button', class: 'aadm-mini', 'data-open': st.id, title: 'Impact Circle stage ' + st.n + ': ' + st.name, text: String(st.n) }), el('button', { type: 'button', class: 'aadm-mini s', 'data-open': 'sm-' + st.gate, style: '--c:' + L.c, title: 'SMARTER gate: ' + L.w, text: L.k })]);
        tr.appendChild(m);
        cols.forEach(function (c) {
          var hit = d.e.filter(function (x) { return c === 'ar' ? ARCHIVE.indexOf(x[0]) >= 0 : x[0] === c; })[0], td = el('td', { class: 'aadm-hm-c' });
          if (hit) { var pg = c === 'ar' ? hit[0] : c, kind = hit[2] === 'P' ? 'p' : hit[2] === 'D' ? 'd' : 's', lab = { p: 'Primary evidence in ', s: 'Supporting evidence in ', d: 'More detail in ' }[kind] + PAGES[pg][1];
            td.appendChild(el('a', { href: href(pg, hit[1]), class: kind, title: lab, 'aria-label': lab })); }
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
    });
    tb.appendChild(tbody); wrap.appendChild(tb); host.appendChild(wrap);
    host.appendChild(el('p', { class: 'aadm-hm-key' }, [el('span', { class: 'p' }), ' Primary work sample   ', el('span', { class: 's' }), ' Supporting evidence   ', el('span', { class: 'd' }), ' Older detail, by section   · Numbers are Impact Circle stages; letters are the SMARTER gate. Click a duty to open its primary sample.']));
    host.addEventListener('click', function (e) { var t = e.target.closest('[data-open]'); if (t) openDialog(t.getAttribute('data-open'), t); });
  }

  /* ------------------------------------------------------------------ boot */
  var BUILD = { wheel: buildWheel, ribbon: buildRibbon, coverage: buildCoverage };
  function scan(root) {
    [].forEach.call((root || document).querySelectorAll('[data-aad-model]:not([data-aad-done])'), function (h) {
      var f = BUILD[h.getAttribute('data-aad-model')]; if (!f) return; h.setAttribute('data-aad-done', '1');
      try { f(h); } catch (err) { if (window.console) console.warn('aad-model', err); }
    });
  }
  function boot() {
    scan(document);
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-aad-open]'); if (!t) return;
      e.preventDefault(); openDialog(t.getAttribute('data-aad-open'), t);
    });
    if (window.MutationObserver) {
      var pend = false;
      new MutationObserver(function () { if (pend) return; pend = true; requestAnimationFrame(function () { pend = false; scan(document); }); })
        .observe(document.body, { childList: true, subtree: true });
    }
  }
  window.AADModel = { OH: OH, IC: IC, SM: SM, VE: VE, GATE: GATE, ROLE: ROLE, PAGES: PAGES, LAYERS: LAYERS, open: openDialog, scan: scan };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
