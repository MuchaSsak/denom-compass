<script lang="ts">
  import { icons } from '../data/icons';
  let { id, color, fg = '#fff', size = 48, ring = false }: { id: string; color: string; fg?: string; size?: number; ring?: boolean } = $props();
</script>

<span
  class="badge"
  class:ring-2={ring}
  style="width:{size}px;height:{size}px;background:{color};color:{fg};--icon-bg:{color};"
>
  <svg viewBox="0 0 48 48" style="width:{size * 0.62}px;height:{size * 0.62}px" aria-hidden="true">
    {@html icons[id] ?? ''}
  </svg>
</span>
