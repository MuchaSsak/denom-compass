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
  catholic: `<g ${S}><g transform="rotate(-38 24 24)">${key}</g><g transform="rotate(38 24 24)">${key}</g></g>`,

  orthodox: `<g ${S} stroke-width="3.6"><path d="M24 5v38M18.5 11h11M12 18.5h24M17 34.5l14-5"/></g>`,

  oriental: `<g ${S} stroke-width="3.4"><path d="M24 11v26M11 24h26"/><circle cx="24" cy="24" r="5.2" fill="var(--icon-bg)"/></g>
    <g fill="currentColor">
      <circle cx="24" cy="7" r="2.8"/><circle cx="20.6" cy="10.6" r="2.4"/><circle cx="27.4" cy="10.6" r="2.4"/>
      <circle cx="24" cy="41" r="2.8"/><circle cx="20.6" cy="37.4" r="2.4"/><circle cx="27.4" cy="37.4" r="2.4"/>
      <circle cx="7" cy="24" r="2.8"/><circle cx="10.6" cy="20.6" r="2.4"/><circle cx="10.6" cy="27.4" r="2.4"/>
      <circle cx="41" cy="24" r="2.8"/><circle cx="37.4" cy="20.6" r="2.4"/><circle cx="37.4" cy="27.4" r="2.4"/>
    </g>`,

  assyrian: `${patteeCross(24, 19, 12, 5, 1.6)}
    <g fill="currentColor"><circle cx="24" cy="5.5" r="1.8"/><circle cx="37.5" cy="19" r="1.8"/><circle cx="10.5" cy="19" r="1.8"/></g>
    <g ${S} stroke-width="2.8"><path d="M12 35c4 6 20 6 24 0"/><path d="M24 41c-3-3-3-7 0-9 3 2 3 6 0 9z"/><path d="M17 38c-3-1-5-4-5-7 4 0 7 2 8 5M31 38c3-1 5-4 5-7-4 0-7 2-8 5"/></g>`,

  anglican: `<path fill="currentColor" d="M24 3l3.2 17.8L45 24l-17.8 3.2L24 45l-3.2-17.8L3 24l17.8-3.2z"/>
    <path fill="currentColor" opacity=".55" d="M24 24l9.5-9.5-6.1 9.5zM24 24l9.5 9.5-9.5-6.1zM24 24l-9.5 9.5 6.1-9.5zM24 24l-9.5-9.5 9.5 6.1z"/>
    <circle cx="24" cy="24" r="10" ${S} stroke-width="2.4"/>
    <path d="M22 24h4M24 22v4" stroke="var(--icon-bg)" stroke-width="2" stroke-linecap="round"/>`,

  lutheran: `<g fill="currentColor" opacity=".5">
      <circle cx="24" cy="11" r="8"/><circle cx="36.4" cy="20" r="8"/><circle cx="31.6" cy="34.5" r="8"/><circle cx="16.4" cy="34.5" r="8"/><circle cx="11.6" cy="20" r="8"/>
    </g>
    <path fill="currentColor" d="M24 35.5c-6.5-4.6-10-8.4-10-12.6 0-3.1 2.4-5.4 5.2-5.4 2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 2.8 0 5.2 2.3 5.2 5.4 0 4.2-3.5 8-10 12.6z"/>
    <path d="M24 19.5v12M20 23.5h8" stroke="var(--icon-bg)" stroke-width="2.6" stroke-linecap="round"/>`,

  reformed: `<path fill="currentColor" d="M24 26c-5.6-3.9-8.6-7.2-8.6-10.8 0-2.7 2-4.7 4.5-4.7 1.7 0 3.1 1 4.1 2.4 1-1.4 2.4-2.4 4.1-2.4 2.5 0 4.5 2 4.5 4.7 0 3.6-3 6.9-8.6 10.8z"/>
    <g ${S} stroke-width="3"><path d="M7 31h7l6 3h9a3 3 0 0 1 0 6H19"/><path d="M14 31l8-3.5c1.6-.7 3.3.2 3.6 1.9"/><path d="M29 37l8.6-4.2a3 3 0 0 1 3 5.2L30 44H7"/></g>`,

  methodist: `<g ${S} stroke-width="3.6"><path d="M18 7v36M10 16h16"/></g>
    <path fill="currentColor" d="M31 43c-6-1-8.5-6-7-11 1.2-4 4.5-6 4.5-11 3 2 4 5 3.5 8 2.5-2 3-5 2.6-8 4.6 4 6.4 9.5 5.4 14-1 4.6-4.3 7.4-9 8z"/>
    <path fill="var(--icon-bg)" d="M31.2 40c-2.6-.6-3.6-2.8-2.9-5 .5-1.6 1.8-2.6 2-4.6 1.6 1 2.3 3 2 4.6 1-.7 1.4-1.8 1.3-3 1.8 1.8 2.2 3.8 1.6 5.4-.6 1.6-2 2.6-4 2.6z"/>`,

  baptist: `<path fill="currentColor" d="M24 4.5S11 20.5 11 30a13 13 0 0 0 26 0C37 20.5 24 4.5 24 4.5z"/>
    <path d="M16 30c2.6-2 5.4-2 8 0s5.4 2 8 0M18 36c2-1.5 4-1.5 6 0s4 1.5 6 0" stroke="var(--icon-bg)" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,

  pentecostal: `<path fill="currentColor" d="M24 44c-2.4-1.5-3.6-4-3.2-7.2l.8-5.6c-5 .6-10.8-1.2-15.6-6.2 4.2.6 8.4 0 11.4-1.8-3.2-1-6-3.6-7.4-7.6 4 2 8.6 2.6 12.2 1.6L24 21l1.8-3.8c3.6 1 8.2.4 12.2-1.6-1.4 4-4.2 6.6-7.4 7.6 3 1.8 7.2 2.4 11.4 1.8-4.8 5-10.6 6.8-15.6 6.2l.8 5.6c.4 3.2-.8 5.7-3.2 7.2z"/>
    <g fill="currentColor"><path d="M24 4c2.6 2.4 3 5 1.4 7.6-.5.8-2.3.8-2.8 0C21 9 21.4 6.4 24 4z"/><path d="M14 7c2 1.6 2.4 3.6 1.4 5.6-.4.6-1.8.6-2.2 0-.8-2 -.6-4 .8-5.6z"/><path d="M34 7c1.4 1.6 1.6 3.6.8 5.6-.4.6-1.8.6-2.2 0-1-2-.6-4 1.4-5.6z"/></g>`,

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
