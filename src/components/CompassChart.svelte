<script lang="ts">
  import Badge from './Badge.svelte';
  import { useT, href, type Lang } from '../i18n';

  interface Point { id: string; name: string; color: string; x: number; y: number }
  let { points, you, highlight = [], lang }: { points: Point[]; you: { x: number; y: number } | null; highlight?: string[]; lang: Lang } = $props();
  const t = useT(lang);

  let hover = $state<string | null>(null);
  // x: -1 symbolic → +1 sacramental ; y: -1 sovereign grace (top) → +1 free will (bottom)
  const pos = (p: { x: number; y: number }) => ({
    left: 6 + ((p.x + 1) / 2) * 88,
    top: 6 + ((p.y + 1) / 2) * 88,
  });

  /** Nudge overlapping badges apart (simple pairwise repulsion in % space). */
  const placed = $derived.by(() => {
    const pts = points.map((p) => ({ ...p, ...pos(p) }));
    const min = 7.4;
    for (let iter = 0; iter < 60; iter++) {
      let moved = false;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          let dx = b.left - a.left, dy = b.top - a.top;
          let dist = Math.hypot(dx, dy);
          if (dist >= min) continue;
          if (dist < 0.01) { dx = 0.5 - ((i * 7 + j * 3) % 10) / 10; dy = 0.5; dist = Math.hypot(dx, dy); }
          const push = (min - dist) / 2;
          const ux = dx / dist, uy = dy / dist;
          a.left -= ux * push; a.top -= uy * push;
          b.left += ux * push; b.top += uy * push;
          moved = true;
        }
      }
      for (const p of pts) { p.left = Math.min(95, Math.max(5, p.left)); p.top = Math.min(95, Math.max(5, p.top)); }
      if (!moved) break;
    }
    return pts;
  });
</script>

<div class="w-full">
  <div class="relative mx-auto aspect-square w-full max-w-[560px] select-none">
    <!-- quadrants -->
    <div class="absolute inset-0 grid grid-cols-2 grid-rows-2 overflow-hidden rounded-3xl border border-line">
      <div class="bg-[color-mix(in_oklab,#2f6f9f_10%,var(--surface))]"></div>
      <div class="bg-[color-mix(in_oklab,#7d2a26_10%,var(--surface))]"></div>
      <div class="bg-[color-mix(in_oklab,#c58b2b_10%,var(--surface))]"></div>
      <div class="bg-[color-mix(in_oklab,#5b7f3a_10%,var(--surface))]"></div>
    </div>
    <div class="absolute top-1/2 right-4 left-4 h-px bg-line"></div>
    <div class="absolute top-4 bottom-4 left-1/2 w-px bg-line"></div>

    <span class="absolute top-2 left-1/2 -translate-x-1/2 rounded-full bg-surface px-2 py-0.5 text-[10px] font-bold tracking-widest text-muted uppercase">{t('Sovereign grace')}</span>
    <span class="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-surface px-2 py-0.5 text-[10px] font-bold tracking-widest text-muted uppercase">{t('Free will')}</span>
    <span class="absolute top-1/2 left-1.5 -translate-y-1/2 rotate-180 rounded-full bg-surface px-0.5 py-2 text-[10px] font-bold tracking-widest text-muted uppercase [writing-mode:vertical-rl]">{t('Symbolic')}</span>
    <span class="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full bg-surface px-0.5 py-2 text-[10px] font-bold tracking-widest text-muted uppercase [writing-mode:vertical-rl]">{t('Sacramental')}</span>

    {#each placed as p (p.id)}
      {@const at = p}
      {@const hl = highlight.includes(p.id) || hover === p.id}
      <a
        href={href(lang, `/denominations/${p.id}`)}
        class="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 hover:scale-125"
        style="left:{at.left}%;top:{at.top}%;z-index:{hover === p.id ? 40 : hl ? 15 : 5}"
        onmouseenter={() => (hover = p.id)}
        onmouseleave={() => (hover = null)}
        onfocus={() => (hover = p.id)}
        onblur={() => (hover = null)}
        aria-label={p.name}
      >
        <span class="block" style="opacity:{highlight.length && !hl ? 0.55 : 1}">
          <Badge id={p.id} color={p.color} size={hl ? 34 : 28} />
        </span>
        {#if hl}
          <span class="pointer-events-none absolute top-full left-1/2 mt-1 -translate-x-1/2 rounded-md bg-ink px-1.5 py-0.5 text-[10px] font-semibold whitespace-nowrap text-bg">{p.name}</span>
        {/if}
      </a>
    {/each}

    {#if you}
      {@const at = pos(you)}
      <!-- Never blocks the badges underneath; a hovered badge rises above it. -->
      <div class="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2" style="left:{at.left}%;top:{at.top}%">
        <span class="absolute inset-0 -m-3 animate-ping rounded-full bg-gold/30"></span>
        <span class="relative grid size-9 place-items-center rounded-full border-[3px] border-surface bg-gold text-[10px] font-extrabold text-white shadow-lg">{t('YOU')}</span>
      </div>
    {/if}
  </div>
</div>
