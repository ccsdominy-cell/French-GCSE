#!/usr/bin/env python3
"""
French GCSE Flashcard App — Patch Script
Run this in the same folder as your index.html:
    python3 apply_patches.py

It will create index_updated.html with all 6 changes applied.
"""

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

log = []

def patch(label, old, new, count=1):
    global html
    if old in html:
        html = html.replace(old, new, count)
        log.append(f"✓ {label}")
    else:
        log.append(f"✗ {label} — string not found, check manually")

# ═══════════════════════════════════════
# CHANGE 1 — Funny Expressions + Flip Card
# ═══════════════════════════════════════

patch("1a menu card title",
    '<div class="mode-title">Expressions</div>',
    '<div class="mode-title">Funny Expressions</div>')

patch("1b menu card description",
    '<div class="mode-desc">Funny French phrases that make no sense word-for-word. Browse or read them all.</div>',
    '<div class="mode-desc">Hilarious French phrases that make no sense word-for-word. Can you guess what they mean?</div>')

patch("1c screen header title",
    '>🐓 Expressions</span>',
    '>🐓 Funny Expressions</span>')

patch("1d browse tab → flashcard",
    '<button class="expr-mode-btn active" id="exprModeBrowse">🃏 Browse</button>',
    '<button class="expr-mode-btn active" id="exprModeBrowse">🃏 Flashcard</button>')

patch("1e expr card → flip card HTML",
    '''      <div class="expr-card" id="exprCard">
        <div class="expr-french" id="exprFrench"></div>
        <div class="expr-literal-label">Literally…</div>
        <div class="expr-literal" id="exprLiteral"></div>
        <div class="expr-divider"></div>
        <div class="expr-meaning-label">Actually means:</div>
        <div class="expr-meaning" id="exprMeaning"></div>
        <div class="expr-tag" id="exprTag"></div>
      </div>''',
    '''      <div class="expr-card-wrap" id="exprCardWrap" onclick="flipExprCard()" style="cursor:pointer;perspective:1200px;width:100%">
        <div class="expr-card-inner" id="exprCardInner" style="position:relative;width:100%;transform-style:preserve-3d;transition:transform 0.5s cubic-bezier(0.4,0,0.2,1);min-height:200px">
          <div class="expr-card" id="exprCard" style="backface-visibility:hidden;-webkit-backface-visibility:hidden;min-height:200px;justify-content:center">
            <div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text3);margin-bottom:6px;text-align:center">🐓 tap to reveal the meaning</div>
            <div class="expr-french" id="exprFrench"></div>
            <div class="expr-literal-label">Literally…</div>
            <div class="expr-literal" id="exprLiteral"></div>
          </div>
          <div style="position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg);background:linear-gradient(145deg,#0d2016,#112b1c);border:1px solid rgba(63,185,80,0.18);border-radius:var(--radius);padding:24px 20px;display:flex;flex-direction:column;gap:10px;justify-content:center">
            <div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.1em;color:rgba(63,185,80,0.7);margin-bottom:4px">✅ Actually means:</div>
            <div class="expr-meaning" id="exprMeaning" style="color:var(--green);font-weight:600;font-size:0.95rem;line-height:1.5"></div>
            <div class="expr-tag" id="exprTag"></div>
          </div>
        </div>
      </div>''')

patch("1f add flip card CSS",
    '.expr-card{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:24px 20px;display:flex;flex-direction:column;gap:10px}',
    '.expr-card{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:24px 20px;display:flex;flex-direction:column;gap:10px}\n.expr-card-inner.flipped{transform:rotateY(180deg)}')

patch("1g openExprScreen — shuffle + flip",
    '''function openExprScreen(){
  exprIndex = 0;
  renderExprBrowse();
  renderExprList();
  // Reset to browse tab
  document.getElementById('exprBrowsePanel').style.display = '';
  document.getElementById('exprListPanel').style.display = 'none';
  document.getElementById('exprModeBrowse').classList.add('active');
  document.getElementById('exprModeList').classList.remove('active');
  showScreen('exprScreen');
}''',
    '''let EXPRESSIONS_SHUFFLED = [];
let exprFlipped = false;

function flipExprCard(){
  exprFlipped = !exprFlipped;
  const inner = document.getElementById('exprCardInner');
  if(inner) inner.classList.toggle('flipped', exprFlipped);
}

function openExprScreen(){
  EXPRESSIONS_SHUFFLED = [...EXPRESSIONS].sort(()=>Math.random()-0.5);
  exprIndex = 0;
  exprFlipped = false;
  renderExprBrowse();
  renderExprList();
  // Reset to flashcard tab
  document.getElementById('exprBrowsePanel').style.display = '';
  document.getElementById('exprListPanel').style.display = 'none';
  document.getElementById('exprModeBrowse').classList.add('active');
  document.getElementById('exprModeList').classList.remove('active');
  showScreen('exprScreen');
}''')

patch("1h renderExprBrowse — use shuffled + reset flip",
    '''function renderExprBrowse(){
  const e = EXPRESSIONS[exprIndex];
  document.getElementById('exprFrench').textContent = e.f;
  document.getElementById('exprLiteral').textContent = '"' + e.lit + '"';
  document.getElementById('exprMeaning').textContent = e.mean;
  document.getElementById('exprTag').textContent = e.tag;
  document.getElementById('exprCounter').textContent = (exprIndex+1) + ' / ' + EXPRESSIONS.length;
  document.getElementById('exprPrev').style.opacity = exprIndex === 0 ? '0.3' : '1';
  document.getElementById('exprNext').textContent = exprIndex === EXPRESSIONS.length-1 ? '← Back to start' : 'Next →';
}''',
    '''function renderExprBrowse(){
  const src = (EXPRESSIONS_SHUFFLED && EXPRESSIONS_SHUFFLED.length) ? EXPRESSIONS_SHUFFLED : EXPRESSIONS;
  const e = src[exprIndex];
  exprFlipped = false;
  const inner = document.getElementById('exprCardInner');
  if(inner) inner.classList.remove('flipped');
  document.getElementById('exprFrench').textContent = e.f;
  document.getElementById('exprLiteral').textContent = '"' + e.lit + '"';
  document.getElementById('exprMeaning').textContent = e.mean;
  document.getElementById('exprTag').textContent = e.tag;
  document.getElementById('exprCounter').textContent = (exprIndex+1) + ' / ' + src.length;
  document.getElementById('exprPrev').style.opacity = exprIndex === 0 ? '0.3' : '1';
  document.getElementById('exprNext').textContent = exprIndex === src.length-1 ? '← Back to start' : 'Next →';
}''')

patch("1i prev/next use shuffled array",
    '''document.getElementById('exprPrev').onclick = () => {
  if(exprIndex > 0){ exprIndex--; renderExprBrowse(); }
};
document.getElementById('exprNext').onclick = () => {
  exprIndex = exprIndex === EXPRESSIONS.length-1 ? 0 : exprIndex+1;
  renderExprBrowse();
};''',
    '''document.getElementById('exprPrev').onclick = () => {
  if(exprIndex > 0){ exprIndex--; renderExprBrowse(); }
};
document.getElementById('exprNext').onclick = () => {
  const src = (EXPRESSIONS_SHUFFLED && EXPRESSIONS_SHUFFLED.length) ? EXPRESSIONS_SHUFFLED : EXPRESSIONS;
  exprIndex = exprIndex === src.length-1 ? 0 : exprIndex+1;
  renderExprBrowse();
};''')

# ═══════════════════════════════════════
# CHANGE 2 — Irregular English plurals
# ═══════════════════════════════════════

patch("2 irregular English plurals",
    "    nounEn = 'some '+noun.e+'s';",
    """    const IRREG_EN_PL = {'man':'men','woman':'women','child':'children','person':'people','fish':'fish','pupil':'pupils','teacher':'teachers','cousin':'cousins','brother':'brothers','sister':'sisters','father':'fathers','mother':'mothers','rabbit':'rabbits','dog':'dogs','cat':'cats','bird':'birds','friend':'friends'};
    nounEn = 'some '+(IRREG_EN_PL[noun.e]||noun.e+'s');""")

# ═══════════════════════════════════════
# CHANGE 3 — animaux fix
# ═══════════════════════════════════════

patch("3 animal → lapin",
    '  {f:"animal",     e:"animal",        g:"m"},',
    '  {f:"lapin",      e:"rabbit",        g:"m"},')

# ═══════════════════════════════════════
# CHANGE 4 — Phone spacing
# ═══════════════════════════════════════

patch("4a card-face min-height + padding",
    'min-height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px 24px;',
    'min-height:170px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px 24px;')

patch("4b answer-area padding",
    '.answer-area{padding:10px 18px 28px;',
    '.answer-area{padding:8px 18px 16px;')

patch("4c card-area padding",
    '.card-area{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px 18px;',
    '.card-area{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 18px;')

patch("4d safe-area answer-area",
    '.answer-area{padding-bottom:calc(28px + env(safe-area-inset-bottom))}',
    '.answer-area{padding-bottom:calc(16px + env(safe-area-inset-bottom))}')

# ═══════════════════════════════════════
# CHANGE 5 — Mastered threshold 3→2
# ═══════════════════════════════════════

patch("5 mastered threshold 3→2",
    '  return total >= 3;',
    '  return total >= 2;')

# ═══════════════════════════════════════
# CHANGE 6 — Milestone toasts
# ═══════════════════════════════════════

patch("6 milestone toasts",
    '''  saveProgress(currentProfile.id,prog);
  // Update last-active metadata
  const meta=getProfileMeta(currentProfile.id);''',
    '''  saveProgress(currentProfile.id,prog);
  // Milestone toasts — celebrate progress!
  if(correct){
    const _mp=getProgress(currentProfile.id);
    const _seen=new Set(); let _mc=0;
    Object.keys(_mp).forEach(k=>{const w=k.includes('|')?k.split('|')[0]:k;if(!_seen.has(w)){_seen.add(w);if(isWordMastered(_mp,w))_mc++;}});
    const _miles={5:'⭐ 5 words mastered — great start!',10:'🌟 10 words mastered!',25:'🔥 25 mastered — you\'re on fire!',50:'🏅 50 words — keep going!',100:'🏆 100 words mastered!',150:'💎 150 mastered — incredible!',200:'🚀 200 words — you\'re flying!',250:'👑 250 mastered — champion!',300:'🌟 300 words — outstanding!',400:'💫 400 mastered — nearly there!',500:'🎓 500 words — GCSE ready!'};
    if(_miles[_mc]) setTimeout(()=>showToast(_miles[_mc]),500);
  }
  // Update last-active metadata
  const meta=getProfileMeta(currentProfile.id);''')

# ═══════════════════════════════════════
# Write output
# ═══════════════════════════════════════

with open('index_updated.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("=" * 50)
print("PATCH RESULTS:")
print("=" * 50)
for l in log:
    print(l)

failed = [l for l in log if '✗' in l]
print(f"\n{'=' * 50}")
print(f"✓ {len(log)-len(failed)} patches applied successfully")
if failed:
    print(f"✗ {len(failed)} patches failed — check manually")
print(f"Output: index_updated.html ({len(html):,} chars)")
print("=" * 50)
