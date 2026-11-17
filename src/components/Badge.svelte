<script lang="ts">
  import { icons, boldIcons } from '../data/icons';
  let { id, color, fg = '#fff', size = 48, ring = false }: { id: string; color: string; fg?: string; size?: number; ring?: boolean } = $props();
  const bold = $derived(boldIcons[id]);
</script>

<span class="badge" class:ring-2={ring} style="width:{size}px;height:{size}px;color:{fg};--icon-bg:{color};">
  <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
    <circle cx="24" cy="24" r="22.6" fill={color} stroke="#1c1712" stroke-width="2.6" />
    {#if bold}
      <g transform="translate(3.84 3.84) scale(.84)">{@html bold}</g>
    {:else}
      <g transform="translate(9.6 9.6) scale(.6)">{@html icons[id] ?? ''}</g>
    {/if}
  </svg>
</span>
