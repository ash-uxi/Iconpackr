<script>
  /**
   * PiChevronDownContrast icon from the contrast style in arrows-&-chevrons category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'chevron-down icon';
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
  <path fill="currentColor" d="M11.702 13.894A20.4 20.4 0 0 1 8 10l4 .304L16 10a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0" opacity=".28"/>
  <path d="M11.702 13.894A20.4 20.4 0 0 1 8 10l4 .304L16 10a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0"/>
</svg>
