<script lang="ts">
  import { onMount } from 'svelte';
  let { percent, color, size = 72, stroke = 7, label = true, animate = true }: {
    percent: number; color: string; size?: number; stroke?: number; label?: boolean; animate?: boolean;
  } = $props();

  let shown = $state(animate ? 0 : percent);
  onMount(() => {
    if (!animate) return;
    requestAnimationFrame(() => (shown = percent));
  });
  $effect(() => { if (!animate) shown = percent; });

  const r = $derived((size - stroke) / 2);
  const c = $derived(2 * Math.PI * r);
</script>

<div class="relative flex-none" style="width:{size}px;height:{size}px">
  <svg viewBox="0 0 {size} {size}" class="-rotate-90" width={size} height={size}>
    <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-2)" stroke-width={stroke} />
    <circle
      cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} stroke-width={stroke} stroke-linecap="round"
      stroke-dasharray={c} stroke-dashoffset={c * (1 - shown / 100)}
      style="transition: stroke-dashoffset 1.1s cubic-bezier(.2,.8,.2,1)"
    />
  </svg>
  {#if label}
    <span class="absolute inset-0 grid place-items-center font-semibold tabular-nums" style="font-size:{Math.max(11, size * 0.24)}px">
      <span class="inline-flex items-baseline leading-none whitespace-nowrap">{percent}<span class="text-[0.55em] opacity-60">%</span></span>
    </span>
  {/if}
</div>
