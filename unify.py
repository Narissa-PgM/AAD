#!/usr/bin/env python3
"""Unify every live page on one operating model: One Harvard -> Impact Circle -> SMARTER -> VERITAS.

Idempotent: safe to run again after any page is rebuilt.
  * loads the shared model module (assets/aad-model.css + aad-model.js)
  * rewrites model-order phrases to the canonical order
  * normalizes SMARTER letter names to: Specific, Measurable, Attainable, Relevant,
    Time-bound, Evaluate, Review (labels only; prose sentences are left alone)
  * uses the canonical six Release Gate checks
  * repoints retired pages (bridge-builder.html, profile.html) to their merged pages
Usage: python3 tools/unify.py [page.html ...]   (default: every live page)
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
LIVE = ['operating-suite.html', 'career-profile.html', 'fas-stewardship.html', 'workframe.html', 'impact-circle.html',
        'strategic-leadership.html', 'donor-impact-reporting.html', 'team-leadership.html', 'campaign-initiatives.html',
        'playbook.html', 'program-office.html', 'operations.html', 'communications.html', 'donor-profile.html']
CANON = 'One Harvard · Impact Circle · SMARTER · VERITAS'
ARROW = 'One Harvard → Impact Circle → SMARTER → VERITAS'

PHRASES = [
    ('<b>One Harvard</b> · SMARTER · Release Gate · VERITAS', '<b>One Harvard</b> · Impact Circle · SMARTER · VERITAS'),
    ('<b>One Harvard:</b> consensus and coordination · <b>SMARTER:</b> execution · <b>VERITAS:</b> narrative · <b>Release Gate:</b> human authorization',
     '<b>One Harvard:</b> who works together · <b>Impact Circle:</b> when · <b>SMARTER:</b> a gate at every stage, with the Release Gate for human authorization · <b>VERITAS:</b> what every report says'),
    ('<b>ONE HARVARD · OPERATING MODEL</b> — SMARTER manages delivery ·',
     '<b>ONE HARVARD · OPERATING MODEL</b> — the Impact Circle sets the yearly lap · SMARTER gates every stage ·'),
    ('<div class="logo">BB</div>', '<div class="logo">IC</div>'),
    ('One Harvard → Veritas → SMARTER', ARROW),
    ('One Harvard → SMARTER → Release Gate → VERITAS', ARROW),
    ('One Harvard · Veritas · SMARTER', CANON),
    ('One Harvard · VERITAS · SMARTER', CANON),
    ('One Harvard · SMARTER · Release Gate · VERITAS', CANON),
    ('One Harvard, Veritas and SMARTER', 'One Harvard, the Impact Circle, SMARTER and VERITAS'),
    ('One Harvard, SMARTER, the release gate and VERITAS', 'One Harvard, the Impact Circle, SMARTER (with its Release Gate) and VERITAS'),
    ('One Harvard, SMARTER, the Release Gate and VERITAS', 'One Harvard, the Impact Circle, SMARTER (with its Release Gate) and VERITAS'),
    ("navSub:'One Harvard · Veritas'", "navSub:'One Harvard · Impact Circle'"),
    ('Six checks: intent, totals, dates, consent, plain language, accessibility.',
     'Six checks: intent, reconciliation, consent, traceability, attribution, authorization.'),
    ('Specifically · Measurably · Achievably · Relevantly · Time-bound · Evaluated · Reviewed',
     'Specific · Measurable · Attainable · Relevant · Time-bound · Evaluate · Review'),
    ('Specific, Measurable, Achievable, Relevant, Time-bound, Evaluate, Re-evaluate',
     'Specific, Measurable, Attainable, Relevant, Time-bound, Evaluate, Review'),
    ('If Achievable or Time-bound fails', 'If Attainable or Time-bound fails'),
    ("E: 'Evaluated' }", "E: 'Evaluate' }"),
    ('bridge-builder.html', 'impact-circle.html'),
    ('career-profile.html#experience', 'career-profile.html#summary'),
]
WORD = {'Specifically': 'Specific', 'Measurably': 'Measurable', 'Achievable': 'Attainable', 'Achievably': 'Attainable',
        'Relevantly': 'Relevant', 'Evaluable': 'Evaluate', 'Evaluated': 'Evaluate', 'Reviewable': 'Review', 'Reviewed': 'Review'}
ALT = '|'.join(WORD)
LABEL_RES = [
    # name: "Achievable"   w: 'Achievable'
    re.compile(r"""(\b(?:name|w)\s*:\s*)(['"])(%s)\2""" % ALT),
    # ['A','Achievably'   ['A', 'A', 'Achievably'   ['S', 'Specifically', 's1']
    re.compile(r"""(\[\s*'[SMARTEV]'\s*,\s*(?:'[SMARTE]'\s*,\s*)?)(')(%s)'""" % ALT),
    # head('A · Achievably · ...')
    re.compile(r"""((?:\(|`|')\s*'?[SMARTE] · )()(%s)(?= · )""" % ALT),
]
PROFILE_LINK = re.compile(r'''(?<![\w-])(\.?/?)profile\.html''')


WF_HINT_OLD = '<span class="wf-hint"><b>One Harvard</b> · Impact Circle · SMARTER · VERITAS</span>'
WF_HINT_NEW = ('<button type="button" class="wf-hint wf-model" data-aad-open="ic-1" title="Open the operating model">'
               '<b>One Harvard</b> → Impact Circle → SMARTER → VERITAS <span aria-hidden="true">↗</span></button>')
DUTY_FOCUS = {'strategic-leadership.html': 'ic-1', 'donor-impact-reporting.html': 'ic-3',
              'team-leadership.html': 'ic-4', 'campaign-initiatives.html': 'ic-5'}
RIBBON = '<div data-aad-model="ribbon"></div>'


def place(name, s):
    """Put the shared model graphics on each page (idempotent)."""
    s = s.replace(WF_HINT_OLD, WF_HINT_NEW)
    if name in DUTY_FOCUS and 'data-aad-model="wheel"' not in s:
        head = 'id="tour-northstar" tabindex="-1">\n        <div class="card-head"><div><h3>' + ARROW + '</h3>'
        s = s.replace(head, head.replace(ARROW, 'From mission to the reporting system'), 1)
        i = s.find("U.chartSummary('align-sum'")
        j = s.find('</div>\n', i) + len('</div>\n')
        card = ('\n      <div class="card" style="margin-top:14px">\n'
                '        <div class="card-head"><div><h3>' + ARROW + '</h3><div class="ch-sub">One operating model on every page: who works together, when, how each stage is tested, and what every report carries.</div></div>${U.prov(\'PROPOSED\')}</div>\n'
                '        <div data-aad-model="wheel" data-focus="' + DUTY_FOCUS[name] + '"></div>\n      </div>\n')
        if i > -1:
            s = s[:j] + card + s[j:]
    if name == 'workframe.html' and 'id="coverage"' not in s:
        sec = ('<section class="section" id="model"><div class="section-head"><div><div class="eyebrow">One operating model · every page</div>'
               '<h2>' + ARROW + '</h2><p>Who works together, when each step happens, how each step is tested, and what every report carries. Click any ring, or walk the lap.</p></div>'
               '<span class="pill proposed">PROPOSED OPERATING MODEL</span></div><div data-aad-model="wheel" data-focus="ic-1"></div></section>\n'
               '<section class="section" id="coverage"><div class="section-head"><div><div class="eyebrow">Director of Stewardship Reporting · posting coverage</div>'
               '<h2>Every responsibility, mapped to its proof</h2><p>Each duty in the posting links to the page that demonstrates it, with its Impact Circle stage and SMARTER gate.</p></div></div>'
               '<div data-aad-model="coverage"></div></section>\n')
        s = s.replace('<section class="section" id="journey">', sec + '<section class="section" id="journey">', 1)
        s = s.replace('<a class="navlink" href="#programs">Impact Circle</a>',
                      '<a class="navlink" href="#programs">Impact Circle</a><a class="navlink" href="#model">Operating model</a><a class="navlink" href="#coverage">Role coverage</a>', 1)
        s = s.replace('<h2>' + CANON + '</h2><p>Four different functions with one shared purpose: credible, timely, donor-centered stewardship.</p>',
                      '<h2>' + CANON + '</h2><p>Four models, one purpose: credible, timely, donor-centered stewardship.</p>', 1)
        s = s.replace(' <article class="contract-card"><b>Evidence & authorization control</b><h3>Six-Check Release Gate</h3><p>Intent · Reconciliation · Consent · Traceability · Attribution · Authorization.</p></article>\n', '', 1)
        s = s.replace(' <article class="contract-card"><b>Execution model</b><h3>SMARTER</h3><p>Specific · Measurable · Attainable · Relevant · Time-bound · Evaluate · Review.</p></article>',
                      ' <article class="contract-card"><b>Yearly cycle</b><h3>Impact Circle</h3><p>Plan &amp; Prioritize · Prepare &amp; Gather · Produce &amp; Personalize · Review &amp; Certify · Deliver &amp; Engage · Evaluate &amp; Learn · Improve &amp; Scale.</p></article>\n'
                      ' <article class="contract-card"><b>Gate at every stage</b><h3>SMARTER</h3><p>Specific · Measurable · Attainable · Relevant · Time-bound · Evaluate · Review. Its control at Review &amp; Certify is the Six-Check Release Gate.</p></article>', 1)
        s = s.replace('<strong>Operating rule:</strong> SMARTER governs execution; the Six-Check Release Gate certifies evidence and authorization; VERITAS structures the donor narrative.',
                      '<strong>Operating rule:</strong> One Harvard sets who works together; the Impact Circle sets when; SMARTER gates every stage, with the Six-Check Release Gate at Review &amp; Certify; VERITAS structures what every report says.', 1)
    if name in ('career-profile.html', 'fas-stewardship.html', 'impact-circle.html') and RIBBON not in s:
        anchors = {'career-profile.html': '<section class="part" id="summary"',
                   'fas-stewardship.html': '<main id="main" class="wrap">',
                   'impact-circle.html': '<main class="wrap">'}
        a = anchors[name]
        if a in s:
            if a.startswith('<main'):
                s = s.replace(a, a + '\n<div class="aadm-host-pad">' + RIBBON + '</div>', 1)
            else:
                s = s.replace(a, '<div class="aadm-host-pad">' + RIBBON + '</div>\n' + a, 1)
    return s


def fix_labels(s):
    for rx in LABEL_RES:
        s = rx.sub(lambda m: m.group(1) + m.group(2) + WORD[m.group(3)] + (m.group(2) if m.group(2) else ''), s)
    return s


def include(s):
    if 'aad-model.js' in s:
        return s
    css = '<link rel="stylesheet" href="./assets/aad-model.css">\n'
    js = '<script src="./assets/aad-model.js" defer></script>\n'
    s = s.replace('</head>', css + '</head>', 1)
    i = s.rfind('</body>')
    return s[:i] + js + s[i:] if i > -1 else s + js


def unify(text, name=''):
    for a, b in PHRASES:
        text = text.replace(a, b)
    text = fix_labels(text)
    text = PROFILE_LINK.sub(lambda m: m.group(1) + 'career-profile.html', text)
    text = place(name, text)
    return include(text)


def main(files):
    changed = []
    for f in files:
        p = ROOT / f
        old = p.read_text(encoding='utf-8')
        new = unify(old, f)
        if new != old:
            p.write_text(new, encoding='utf-8')
            changed.append(f)
    for js in ['assets/wayfinder.js', 'assets/visual-explorer.js', 'assets/suite.js']:
        p = ROOT / js
        old = p.read_text(encoding='utf-8')
        new = PROFILE_LINK.sub(lambda m: m.group(1) + 'career-profile.html', old.replace('bridge-builder.html', 'impact-circle.html'))
        for a, b in PHRASES[:1]:
            new = new.replace(a, b)
        if new != old:
            p.write_text(new, encoding='utf-8')
            changed.append(js)
    print('updated:', ', '.join(changed) or 'nothing')


if __name__ == '__main__':
    main(sys.argv[1:] or LIVE)
