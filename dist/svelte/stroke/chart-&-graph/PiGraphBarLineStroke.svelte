<script>
  /**
   * PiGraphBarLineStroke icon from the stroke style in chart-&-graph category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'graph-bar-line icon';
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
  <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3M8 17V13M13 17V6M18 17V9" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
