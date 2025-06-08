<script>
  /**
   * PiGraphTrendLineDuoStroke icon from the duo-stroke style in chart-&-graph category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'graph-trend-line icon';
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
  <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M7 14L7.61026 12.1692C8.35529 9.93413 11.5295 9.97104 12.2224 12.2228C12.8649 14.311 15.7261 14.5478 16.7032 12.5937L19 8" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
