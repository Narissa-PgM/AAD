"""Mark archived and supporting pages with a slim banner that points back to the four core pages.
Idempotent: replaces any existing banner. Run: python3 tools/archive_banner.py"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARCHIVED = ['operating-suite.html', 'strategic-leadership.html', 'donor-impact-reporting.html', 'team-leadership.html',
            'campaign-initiatives.html', 'program-office.html', 'playbook.html', 'workframe.html', 'communications.html']
SUPPORTING = ['impact-circle.html']
CORE = [('career-profile.html', 'Career profile'), ('fas-stewardship.html', 'FAS pilot brief'),
        ('operations.html', 'Operations'), ('donor-profile.html', 'Donor record')]


def banner(kind):
    label = 'Archived detail · kept for depth' if kind == 'a' else 'Supporting page · team tools'
    links = ' · '.join(f'<a href="./{h}" style="color:#7A1526;font-weight:700">{t}</a>' for h, t in CORE)
    return (f'<div id="aad-archive-note" role="note" style="position:relative;z-index:5;background:#FFF9EE;border-bottom:1px solid #EADFC7;'
            f'font:13px/1.45 system-ui,-apple-system,\'Segoe UI\',sans-serif;color:#3B4754;padding:7px 16px;text-align:center">'
            f'<b style="color:#8A651F">{label}.</b> Start with the core: {links} · '
            f'<a href="./archive.html" style="color:#3B4754">all detail by section</a></div>')


for kind, pages in (('a', ARCHIVED), ('s', SUPPORTING)):
    for name in pages:
        p = ROOT / name
        s = p.read_text(encoding='utf-8')
        s = re.sub(r'<div id="aad-archive-note".*?</div>', '', s, count=1, flags=re.S)
        m = re.search(r'<body[^>]*>', s)
        s = s[:m.end()] + banner(kind) + s[m.end():]
        p.write_text(s, encoding='utf-8')
        print('banner:', name)
