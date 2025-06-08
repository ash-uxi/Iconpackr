<script>
  /**
   * PiMartiniGlassContrast icon from the contrast style in food category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'martini-glass icon';
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
  <path d="M12 13v8m0-8L6 7m6 6 6-6m-6 14h5.5M12 21H7M6 7 3 4h18l-3 3M6 7c3.993.333 8.007.333 12 0"/>
  <path fill="currentColor" d="m6 7 6 6 6-6A72 72 0 0 1 6 7" opacity=".28"/>
</svg>
