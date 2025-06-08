<script>
  /**
   * PiToggleOnContrast icon from the contrast style in general category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'toggle-on icon';
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
  <path fill="currentColor" d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 1 0 0-14" opacity=".28"/>
  <path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 1 0 0-14"/>
  <path d="M19 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0"/>
</svg>
