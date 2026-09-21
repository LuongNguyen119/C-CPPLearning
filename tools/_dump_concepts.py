import json, re, unicodedata, sys, io
from pathlib import Path

JS = Path('CPP/cpp_lessons.js')
MD = Path('w3schools_cpp_tutorial_vi.md')

js_src = JS.read_text(encoding='utf-8')
i = js_src.index('const lessons'); j = js_src.index('[', i)
lessons, _ = json.JSONDecoder().raw_decode(js_src[j:])

# ---------- MD: concept blocks per lesson, from '> ' blockquotes (skip <BRK>) ----------
md_src = MD.read_text(encoding='utf-8')
md_st = {}
cur = None; buf = []
for ln in md_src.splitlines():
    m = re.match(r'^## (\d+)\. ', ln)
    if m:
        if cur is not None: md_st[cur] = buf
        cur = int(m.group(1)); buf = []; continue
    if cur is None: continue
    t = ln.strip()
    if t.startswith('>'):
        v = t[1:].strip()
        if v == '<BRK>': continue
        buf.append(v)
md_st[cur] = buf

# ---------- JS concepts ----------
def js_blocks(num):
    l = next(x for x in lessons if x['num'] == num)
    c = (l['concept'] or {}).get('content') or ''
    c = c.replace('\r\n', '\n')
    return [b for b in re.split(r'\n{2,}', c)]

def norm(s):
    s = unicodedata.normalize('NFC', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def tokens(s):
    s = norm(s).lower()
    return re.findall(r'[a-z0-9_àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]+', s)

def overlap(a, b):
    ta, tb = set(tokens(a)), set(tokens(b))
    if not ta or not tb: return 0
    return len(ta & tb) / min(len(ta), len(tb))

# report each lesson: MD blocks vs JS blocks, per-block overlap, and flags
print('LESSON | MD blocks | JS blocks')
for n in (1,2,3,4,5,6,7,8,9,10):
    md = md_st.get(n, [])
    js = js_blocks(n)
    print('-'*60)
    print(f'BAI {n} | MD={len(md)} | JS={len(js)}')
    # match by position if counts equal; else align greedily
    matched = 0
    for k, (a, b) in enumerate(zip(md, js)):
        ov = overlap(a, b)
        flag = 'OK' if ov >= 0.7 else 'XX' if ov < 0.5 else '??'
        if ov >= 0.5: matched += 1
        print(f'   [{flag}/{ov:.2f}] MD: {a[:70]!r}')
        print(f'      JS: {b[:70]!r}')
    print(f'   => matched {matched}/{len(md)} (MD blocks alignment)')
