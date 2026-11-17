<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fly } from 'svelte/transition';

  /** Click-to-open popover. `icon` renders a round ⓘ trigger; label becomes its aria-label. */
  let { label, children, title, icon = false, align = 'left' }: {
    label: string; title?: string; children: Snippet; icon?: boolean; align?: 'left' | 'right';
  } = $props();
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

<span class="relative inline-block flex-none" bind:this={root}>
  {#if icon}
    <button
      type="button"
      class="grid size-9 place-items-center rounded-full border transition
        {open ? 'border-ink bg-ink text-bg' : 'border-line bg-surface text-muted hover:border-ink/30 hover:text-ink'}"
      aria-label={label}
      aria-expanded={open}
      onclick={() => (open = !open)}
    >
      <svg viewBox="0 0 20 20" class="size-[18px]" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10" cy="10" r="7.6" /><path d="M10 9v4.5" stroke-linecap="round" /><circle cx="10" cy="6.4" r=".9" fill="currentColor" stroke="none" /></svg>
    </button>
  {:else}
    <button
      type="button"
      class="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-[0.8rem] font-semibold text-muted transition hover:border-ink/30 hover:text-ink"
      aria-expanded={open}
      onclick={() => (open = !open)}
    >{label}</button>
  {/if}
  {#if open}
    <div
      class="absolute top-full z-40 mt-2 w-[min(24rem,calc(100vw-2rem))] rounded-2xl border border-line bg-surface p-5 text-left shadow-2xl {align === 'right' ? 'right-0' : 'left-0'}"
      role="dialog"
      aria-label={title ?? label}
      transition:fly={{ y: -6, duration: 160 }}
    >
      {#if title}<p class="eyebrow mb-2">{title}</p>{/if}
      {@render children()}
    </div>
  {/if}
</span>
