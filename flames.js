// Flame SVG — grows at milestones 3, 6, 10, 15, 30.
// Exposed globally as window.flameSvg(streak) — called from app.js.
function flameSvg(streak){
  const colors=streak===0
    ?{outer:'#d1d5db',inner:'#e5e7eb',core:'#f3f4f6'}
    :streak>=30
    ?{outer:'#93c5fd',inner:'#dbeafe',core:'#eff6ff'}
    :streak>=20
    ?{outer:'#f0abfc',inner:'#fae8ff',core:'#fdf4ff'}
    :streak>=15
    ?{outer:'#7c3aed',inner:'#a78bfa',core:'#ede9fe'}
    :streak>=10
    ?{outer:'#dc2626',inner:'#f87171',core:'#fecaca'}
    :streak>=6
    ?{outer:'#ea580c',inner:'#fb923c',core:'#fed7aa'}
    :streak>=3
    ?{outer:'#d97706',inner:'#fbbf24',core:'#fef3c7'}
    :{outer:'#f59e0b',inner:'#fcd34d',core:'#fffbeb'};
  const scale=streak>=30?1.15:streak>=20?1.12:streak>=15?1.1:streak>=10?1.05:streak>=6?1.0:streak>=3?.95:.88;
  const o=colors.outer,i=colors.inner,c=colors.core;
  const body=`
    <path d="M20 2 C20 2 30 10 32 20 C34 28 30 34 28 36 C26 30 24 26 20 24 C22 20 22 14 18 10 C16 16 16 22 14 26 C10 30 8 34 8 38 C8 44 13 48 20 48 C27 48 34 44 34 38 C34 28 28 18 20 2Z" fill="${o}"/>
    <path d="M20 16 C20 16 26 22 27 28 C28 33 25 37 23 39 C22 35 21 32 18 30 C19 27 19 23 17 20 C15 24 15 28 13 31 C11 34 11 38 11 40 C11 44 15 47 20 47 C25 47 29 44 29 40 C29 33 24 24 20 16Z" fill="${i}"/>
    <path d="M20 30 C20 30 23 33 23 37 C23 40 21 42 20 43 C19 42 17 40 17 37 C17 33 20 30 20 30Z" fill="${c}"/>`;
  const svg=streak>=30
    ?`<ellipse cx="7" cy="14" rx="3" ry="4.5" fill="${o}" opacity="0.8"/>
      <ellipse cx="33" cy="10" rx="2.5" ry="3.5" fill="${i}" opacity="0.9"/>
      <circle cx="8" cy="7" r="2" fill="${o}" opacity="0.6"/>
      <ellipse cx="32" cy="18" rx="2" ry="3" fill="${o}" opacity="0.7"/>
      <circle cx="20" cy="3" r="2.5" fill="${i}" opacity="0.7"/>
      ${body}`
    :streak>=20
    ?`<ellipse cx="7" cy="14" rx="3" ry="4.5" fill="${o}" opacity="0.7"/>
      <ellipse cx="33" cy="10" rx="2.5" ry="3.5" fill="${i}" opacity="0.8"/>
      <circle cx="8" cy="7" r="2" fill="${o}" opacity="0.5"/>
      <ellipse cx="32" cy="18" rx="2" ry="3" fill="${o}" opacity="0.6"/>
      <circle cx="20" cy="3" r="2.5" fill="${i}" opacity="0.6"/>
      ${body}`
    :streak>=15
    ?`<ellipse cx="7" cy="14" rx="3" ry="4.5" fill="${o}" opacity="0.7"/>
      <ellipse cx="33" cy="11" rx="2.5" ry="3.5" fill="${i}" opacity="0.8"/>
      <circle cx="9" cy="7" r="2" fill="${o}" opacity="0.5"/>
      <ellipse cx="31" cy="20" rx="2" ry="3" fill="${o}" opacity="0.6"/>
      ${body}`
    :streak>=10
    ?`<ellipse cx="7" cy="15" rx="3" ry="4.5" fill="${o}" opacity="0.7"/>
      <ellipse cx="33" cy="11" rx="2.5" ry="3.5" fill="${i}" opacity="0.8"/>
      <circle cx="9" cy="8" r="2.5" fill="${o}" opacity="0.5"/>
      ${body}`
    :streak>=3
    ?`<ellipse cx="7" cy="16" rx="3" ry="4" fill="${o}" opacity="0.7"/>
      <ellipse cx="33" cy="13" rx="2.5" ry="3.5" fill="${i}" opacity="0.8"/>
      ${body}`
    :body;
  return`<svg width="34" height="44" viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg" style="transform:scale(${scale});transform-origin:center">${svg}</svg>`;
}
