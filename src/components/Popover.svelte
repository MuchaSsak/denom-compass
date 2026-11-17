<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fly } from 'svelte/transition';

  /** Click-to-open popover anchored under its trigger. Closes on outside click / Escape. */
  let { label, children, title }: { label: string; title?: string; children: Snippet } = $props();
  let open = $state(false);
  let root: HTMLElement;

  function onDoc(e: MouseEvent) {
    if (open && root && !root.contains(e.target as Node)) open = false;
  }
  function onKey(e: KeyboardEvent) {
    if (open && e.key === 'Escape') { e.stopPropagation(); open = false; }
  }
</script>

<svelte:document onclick={onDoc} onkeydown={onKey} />

<span class="relative inline-block" bind:this={root}>
  <button
    type="button"
    class="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-[0.8rem] font-semibold text-muted transition hover:border-ink/30 hover:text-ink"
    aria-expanded={open}
    onclick={() => (open = !open)}
  >
    <svg viewBox="0 0 20 20" class="size-4" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10" cy="10" r="7.6" /><path d="M7.9 7.6a2.2 2.2 0 1 1 3.2 2c-.7.4-1.1.8-1.1 1.6v.4" stroke-linecap="round" /><circle cx="10" cy="14" r=".9" fill="currentColor" stroke="none" /></svg>
    {label}
  </button>
  {#if open}
    <div
      class="absolute top-full left-0 z-40 mt-2 w-[min(26rem,calc(100vw-2rem))] rounded-2xl border border-line bg-surface p-5 text-left shadow-2xl"
      role="dialog"
      aria-label={title ?? label}
      transition:fly={{ y: -6, duration: 160 }}
    >
      {#if title}<p class="eyebrow mb-2">{title}</p>{/if}
      {@render children()}
    </div>
  {/if}
</span>
