<script>
  /**
   * PiToggleOffContrast icon from the contrast style in general category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'toggle-off icon';
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
  <path d="M5 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0"/>
  <path fill="currentColor" d="M9 5h6a7 7 0 1 1 0 14H9A7 7 0 1 1 9 5" opacity=".28"/>
  <path d="M9 5h6a7 7 0 1 1 0 14H9A7 7 0 1 1 9 5"/>
</svg>
