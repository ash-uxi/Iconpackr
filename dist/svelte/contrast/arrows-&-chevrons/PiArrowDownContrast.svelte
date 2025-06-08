<script>
  /**
   * PiArrowDownContrast icon from the contrast style in arrows-&-chevrons category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'arrow-down icon';
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
  <path fill="currentColor" d="M11.406 19.79A30.2 30.2 0 0 1 6 14.17l6 .3 6-.3a30.2 30.2 0 0 1-5.406 5.62.95.95 0 0 1-1.188 0" opacity=".28"/>
  <path d="m12 14.47-6-.3a30.2 30.2 0 0 0 5.406 5.62.95.95 0 0 0 1.188 0A30.2 30.2 0 0 0 18 14.17zm0 0V4"/>
</svg>
