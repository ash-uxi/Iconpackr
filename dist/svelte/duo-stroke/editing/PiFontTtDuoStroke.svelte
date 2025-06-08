<script>
  /**
   * PiFontTtDuoStroke icon from the duo-stroke style in editing category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'font-tt icon';
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
  <path d="M10 19V5M4 5H16" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M17 19V13M14 13H20" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
