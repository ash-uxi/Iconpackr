<script>
  /**
   * PiTrackpadStroke icon from the stroke style in devices category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'trackpad icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M2 13H12M22 13H12M12 13V21" stroke="currentColor" stroke-width="2" fill="none"/>
  <rect x="2" y="3" width="20" height="18" rx="4" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
