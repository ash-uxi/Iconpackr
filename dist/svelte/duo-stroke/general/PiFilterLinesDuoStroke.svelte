<script>
  /**
   * PiFilterLinesDuoStroke icon from the duo-stroke style in general category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'filter-lines icon';
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
  <path d="M4 6H20" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M8 12H16M11 18H13" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
