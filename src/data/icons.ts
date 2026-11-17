/**
 * Hand-drawn 48×48 symbols for each tradition.
 * `currentColor` = foreground, `var(--icon-bg)` = badge colour (for cut-outs).
 */
const S = 'stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"';

const patteeCross = (cx: number, cy: number, L: number, tip: number, base: number) => {
  const p = [
    [cx - tip, cy - L], [cx + tip, cy - L], [cx + base, cy - base],
    [cx + L, cy - tip], [cx + L, cy + tip], [cx + base, cy + base],
    [cx + tip, cy + L], [cx - tip, cy + L], [cx - base, cy + base],
    [cx - L, cy + tip], [cx - L, cy - tip], [cx - base, cy - base],
  ];
  return `<path fill="currentColor" d="M${p.map((x) => x.join(' ')).join(' L')}Z"/>`;
};

const key = `<circle cx="24" cy="10" r="5.5" stroke-width="3.2"/><path d="M24 15.5V41M24 33h6M24 38.5h5" stroke-width="3.2"/>`;

export const icons: Record<string, string> = {
  catholic: `<rect x="20.5" y="3" width="7" height="42" rx="1.4" fill="currentColor"/><rect x="10" y="11.5" width="28" height="7" rx="1.4" fill="currentColor"/>`,

  orthodox: `<g fill="currentColor"><rect x="20.6" y="2.5" width="6.8" height="43" rx="1.4"/><rect x="16.5" y="7.5" width="15" height="5" rx="1.2"/><rect x="8" y="16" width="32" height="6.6" rx="1.4"/><path d="M12.2 35.2l22.4-7.6 1.9 5.2-22.4 7.6z"/></g>`,

  oriental: `<g fill="currentColor"><rect x="20.5" y="9" width="7" height="30" rx="1"/><rect x="9" y="20.5" width="30" height="7" rx="1"/><circle cx="24" cy="24" r="5.6"/>
    <circle cx="19.6" cy="8.6" r="3.2"/><circle cx="24" cy="5.4" r="3.2"/><circle cx="28.4" cy="8.6" r="3.2"/>
    <circle cx="19.6" cy="39.4" r="3.2"/><circle cx="24" cy="42.6" r="3.2"/><circle cx="28.4" cy="39.4" r="3.2"/>
    <circle cx="8.6" cy="19.6" r="3.2"/><circle cx="5.4" cy="24" r="3.2"/><circle cx="8.6" cy="28.4" r="3.2"/>
    <circle cx="39.4" cy="19.6" r="3.2"/><circle cx="42.6" cy="24" r="3.2"/><circle cx="39.4" cy="28.4" r="3.2"/></g>`,

  assyrian: `${patteeCross(24, 24, 17.5, 7, 3.2)}<g fill="currentColor"><circle cx="24" cy="3.4" r="2.8"/><circle cx="24" cy="44.6" r="2.8"/><circle cx="3.4" cy="24" r="2.8"/><circle cx="44.6" cy="24" r="2.8"/></g><circle cx="24" cy="24" r="2.6" fill="var(--icon-bg)"/>`,

  anglican: `<g fill="currentColor"><path d="M21.2 19.5h5.6L32.5 4.5Q24 1.2 15.5 4.5z" transform="rotate(0 24 24)"/><path d="M21.2 19.5h5.6L32.5 4.5Q24 1.2 15.5 4.5z" transform="rotate(90 24 24)"/><path d="M21.2 19.5h5.6L32.5 4.5Q24 1.2 15.5 4.5z" transform="rotate(180 24 24)"/><path d="M21.2 19.5h5.6L32.5 4.5Q24 1.2 15.5 4.5z" transform="rotate(270 24 24)"/><circle cx="24" cy="24" r="6.4"/></g><rect x="21.6" y="21.6" width="4.8" height="4.8" fill="var(--icon-bg)"/>`,

  lutheran: `<rect x="20.3" y="3" width="7.4" height="42" rx="1.4" fill="#ffd43b"/><rect x="10" y="11.3" width="28" height="7.4" rx="1.4" fill="#ffd43b"/><path fill="#e5383b" d="M24 21.4c-3.6-2.6-5.4-4.6-5.4-6.9 0-1.7 1.3-3 2.9-3 1.1 0 2 .6 2.5 1.6.5-1 1.4-1.6 2.5-1.6 1.6 0 2.9 1.3 2.9 3 0 2.3-1.8 4.3-5.4 6.9z"/>`,

  reformed: `<circle cx="24" cy="16" r="9.6" fill="none" stroke="#ffd43b" stroke-width="3.4"/><rect x="20.9" y="2.5" width="6.2" height="43" rx="1.4" fill="#ffd43b"/><rect x="9" y="12.9" width="30" height="6.2" rx="1.4" fill="#ffd43b"/>`,

  methodist: `<rect x="15.7" y="3" width="6.6" height="42" rx="1.4" fill="currentColor"/><rect x="7" y="10.7" width="24" height="6.6" rx="1.4" fill="currentColor"/><g transform="translate(15 13) scale(.66)"><path fill="#ff5a36" d="M24 44c-8.4 0-13.4-6-13.4-12.4 0-6 4.2-9.6 6-14.4 1.4 3.6 3.1 5.3 4.9 6-.2-6.2 2.7-12.2 7.3-15.8-.2 6 3.6 8.7 6 12.7 2.4 4 2.7 7.1 2.7 9.1C37.5 37.8 32.4 44 24 44z"/><path fill="#ffd43b" d="M24 41c-4 0-6.5-2.9-6.5-6 0-3.1 2.2-4.9 3.1-7.4.7 1.8 1.6 2.7 2.5 3.1 0-3.1 1.3-6 3.6-7.8 0 3.1 1.8 4.2 2.9 6.2 1.1 2 1.3 3.6 1.3 4.7 0 4-2.9 7.2-6.9 7.2z"/></g>`,

  baptist: `<rect x="20.2" y="3" width="7.6" height="42" rx="1.4" fill="currentColor"/><rect x="11" y="12.2" width="26" height="7.6" rx="1.4" fill="currentColor"/>`,

  pentecostal: `<path fill="#ff5a36" d="M24 44c-8.4 0-13.4-6-13.4-12.4 0-6 4.2-9.6 6-14.4 1.4 3.6 3.1 5.3 4.9 6-.2-6.2 2.7-12.2 7.3-15.8-.2 6 3.6 8.7 6 12.7 2.4 4 2.7 7.1 2.7 9.1C37.5 37.8 32.4 44 24 44z"/><path fill="#ffd43b" d="M24 41c-4 0-6.5-2.9-6.5-6 0-3.1 2.2-4.9 3.1-7.4.7 1.8 1.6 2.7 2.5 3.1 0-3.1 1.3-6 3.6-7.8 0 3.1 1.8 4.2 2.9 6.2 1.1 2 1.3 3.6 1.3 4.7 0 4-2.9 7.2-6.9 7.2z"/>`,

  nondenom: `<path fill="currentColor" d="M5 12.5c7-1.6 13.4-.8 19 3 5.6-3.8 12-4.6 19-3v25c-7-1.6-13.4-.8-19 3-5.6-3.8-12-4.6-19-3z"/>
    <path d="M24 15.5v25" stroke="var(--icon-bg)" stroke-width="2.2"/>
    <path d="M14 20v9M10.5 23.5h7" stroke="var(--icon-bg)" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M28.5 21.5c3-.8 6-.8 9 0M28.5 26.5c3-.8 6-.8 9 0M28.5 31.5c3-.8 6-.8 9 0" stroke="var(--icon-bg)" stroke-width="1.8" stroke-linecap="round" opacity=".8"/>`,

  anabaptist: `<g ${S} stroke-width="2.6"><path d="M24 44V14M24 44c0-9-4-15-9-20M24 44c0-9 4-15 9-20"/></g>
    <g fill="currentColor">
      <ellipse cx="24" cy="9" rx="2.8" ry="5"/><ellipse cx="20.2" cy="16" rx="2.4" ry="4.4" transform="rotate(-25 20.2 16)"/><ellipse cx="27.8" cy="16" rx="2.4" ry="4.4" transform="rotate(25 27.8 16)"/>
      <ellipse cx="13" cy="19" rx="2.4" ry="4.4" transform="rotate(-40 13 19)"/><ellipse cx="11.5" cy="26" rx="2.2" ry="4" transform="rotate(-70 11.5 26)"/>
      <ellipse cx="35" cy="19" rx="2.4" ry="4.4" transform="rotate(40 35 19)"/><ellipse cx="36.5" cy="26" rx="2.2" ry="4" transform="rotate(70 36.5 26)"/>
    </g>`,

  quaker: `<path fill="currentColor" d="M24 3l4.6 9.9 10.2-3.7-3.7 10.2L45 24l-9.9 4.6 3.7 10.2-10.2-3.7L24 45l-4.6-9.9-10.2 3.7 3.7-10.2L3 24l9.9-4.6-3.7-10.2 10.2 3.7z"/>
    <circle cx="24" cy="24" r="6" fill="var(--icon-bg)"/>`,

  restorationist: `<path fill="currentColor" d="M11 7h26c0 10-4.6 16.6-11 18v9.5c4 .6 8 2.4 8 5.5H14c0-3.1 4-4.9 8-5.5V25C15.6 23.6 11 17 11 7z"/>
    <path d="M24 10v10M20 13.5h8" stroke="var(--icon-bg)" stroke-width="2.4" stroke-linecap="round"/>`,

  adventist: `<path fill="currentColor" d="M10 32a14 14 0 0 1 28 0z"/>
    <g ${S} stroke-width="3"><path d="M24 7v6M10.5 13.5l4 4.4M37.5 13.5l-4 4.4M4 24.5h5.5M38.5 24.5H44"/><path d="M4 37h40M11 42.5h26"/></g>`,

  lds: `<g fill="currentColor"><rect x="19" y="5" width="10" height="5" rx="2.5"/><rect x="14.5" y="11.5" width="19" height="6" rx="3"/><rect x="11" y="19" width="26" height="6.5" rx="3.25"/><rect x="9" y="27" width="30" height="7" rx="3.5"/><rect x="10.5" y="35.5" width="27" height="6.5" rx="3.25"/></g>
    <path fill="var(--icon-bg)" d="M20.5 42v-5a3.5 3.5 0 0 1 7 0v5z"/>`,

  jw: `<path fill="currentColor" d="M18 18h12l3 26H15z"/>
    <path fill="currentColor" d="M14 13h20v4.5H14zM17 6h14l2 7H15zM23 3h2v3h-2z"/>
    <path fill="var(--icon-bg)" d="M21.5 25a2.5 2.5 0 0 1 5 0v5h-5zM21 37a3 3 0 0 1 6 0v7h-6z"/>
    <path d="M16 9.5h16" stroke="var(--icon-bg)" stroke-width="1.4"/>`,

  oneness: `<path fill="currentColor" d="M24 45c-8.8 0-14-6.2-13-14 .8-6.6 6-10.4 6.4-18 4.6 3 6.8 7.6 6.4 12 2.6-2.2 3.6-6 3-9.6 6.8 5.4 10.6 12 10 18.4-.7 6.6-5.8 11.2-12.8 11.2z"/>
    <path d="M21 31l4-3v12" stroke="var(--icon-bg)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
};

/** small UI glyphs */
export const glyphs = {
  arrowLeft: '<path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  arrowRight: '<path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
};
