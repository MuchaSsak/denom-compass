<script lang="ts">
  /** Small ⓘ button with a tooltip. Hover/focus on desktop, tap to toggle on touch. */
  let { text, label = 'More info', align = 'right', tone = 'default' }: {
    text: string; label?: string; align?: 'left' | 'right' | 'center'; tone?: 'default' | 'inverted';
  } = $props();
  let open = $state(false);
  let hover = $state(false);
  const id = `tip-${Math.random().toString(36).slice(2, 8)}`;
</script>

<span class="relative inline-flex" role="presentation" onmouseenter={() => (hover = true)} onmouseleave={() => (hover = false)}>
  <button
    type="button"
    class="grid size-7 place-items-center rounded-full transition
      {tone === 'inverted' ? 'text-bg/70 hover:bg-bg/15 hover:text-bg' : 'text-muted hover:bg-surface-2 hover:text-ink'}"
    aria-label={label}
    aria-describedby={open || hover ? id : undefined}
    onclick={(e) => { e.stopPropagation(); open = !open; }}
    onfocus={() => (hover = true)}
    onblur={() => { hover = false; open = false; }}
  >
    <svg viewBox="0 0 20 20" class="size-[17px]" fill="none" stroke="currentColor" stroke-width="1.7">
      <circle cx="10" cy="10" r="7.6" /><path d="M10 9v4.5" stroke-linecap="round" /><circle cx="10" cy="6.4" r=".9" fill="currentColor" stroke="none" />
    </svg>
  </button>
  {#if open || hover}
    <span
      {id}
      role="tooltip"
      class="pointer-events-none absolute bottom-full z-40 mb-2 w-64 rounded-xl bg-ink px-3 py-2 text-left text-[0.8rem] leading-snug font-medium text-bg shadow-xl
        {align === 'right' ? 'right-0' : align === 'left' ? 'left-0' : 'left-1/2 -translate-x-1/2'}"
    >{text}</span>
  {/if}
</span>
