#!/usr/bin/env python3
"""Fail if any live page drifts from the shared operating model.

Checks every live page for:
  * the shared model module (assets/aad-model.css + aad-model.js) being loaded
  * old model orders (e.g. "One Harvard → Veritas → SMARTER")
  * non-canonical SMARTER letter labels (Achievable, Evaluable, Reviewable, Evaluated, Reviewed ...)
  * links to retired pages (bridge-builder.html, profile.html) or deleted copies
Run: python3 tools/check_models.py      (exit code 1 on any problem)
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'tools'))
from unify import LIVE, WORD  # noqa: E402

OLD_ORDERS = ['Veritas → SMARTER', 'Veritas · SMARTER', 'VERITAS · SMARTER', 'SMARTER → Release Gate → VERITAS',
              'One Harvard · SMARTER · Release Gate · VERITAS', 'One Harvard, Veritas and SMARTER']
LABEL = re.compile(r"""(?:\b(?:name|w)\s*:\s*['"]|\[\s*'[SMARTEV]'\s*,\s*(?:'[SMARTE]'\s*,\s*)?'|'[SMARTE] · )(%s)\b""" % '|'.join(WORD))
RETIRED = re.compile(r'''(?<![\w-])(?:bridge-builder|profile|Impact_Circle|Program_Playbook|Strategic_Leadership_Platform|Team_Leadership_Operations|Campaign_Institutional_Initiatives|Donor_Impact_Reporting_Stewardship|Workframe_FrontDoor_Sample)\.html''')


def check():
    problems = []
    for f in LIVE:
        s = (ROOT / f).read_text(encoding='utf-8')
        if 'assets/aad-model.js' not in s or 'assets/aad-model.css' not in s:
            problems.append(f'{f}: shared model module not loaded')
        for o in OLD_ORDERS:
            if o in s:
                problems.append(f'{f}: old model order "{o}"')
        for m in LABEL.finditer(s):
            problems.append(f'{f}: SMARTER label "{m.group(1)}" (use {WORD[m.group(1)]})')
        for m in RETIRED.finditer(s):
            problems.append(f'{f}: link to retired page {m.group(0)}')
    for js in ['assets/wayfinder.js', 'assets/visual-explorer.js', 'assets/suite.js']:
        s = (ROOT / js).read_text(encoding='utf-8')
        for m in RETIRED.finditer(s):
            problems.append(f'{js}: link to retired page {m.group(0)}')
    return problems


if __name__ == '__main__':
    p = check()
    print('\n'.join(p) if p else f'OK · {len(LIVE)} live pages share one operating model')
    sys.exit(1 if p else 0)
