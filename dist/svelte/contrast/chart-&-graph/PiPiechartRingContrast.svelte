<script>
  /**
   * PiPiechartRingContrast icon from the contrast style in chart-&-graph category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'piechart-ring icon';
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
  <path d="M12 21.15a9.15 9.15 0 0 0 6.698-15.384M12 21.15V15m0 6.15A9.15 9.15 0 0 1 2.85 12m0 0a9.15 9.15 0 0 1 15.848-6.234M2.85 12H9m3 3a3 3 0 0 0 2.34-4.876M12 15a3 3 0 0 1-3-3m0 0a3 3 0 0 1 5.34-1.876m0 0 4.358-4.358"/>
  <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" opacity=".28"/>
</svg>
