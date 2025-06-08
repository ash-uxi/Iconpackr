<script>
  /**
   * PiMouseDefaultContrast icon from the contrast style in devices category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'mouse-default icon';
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
  <path d="M12 10V8m0 13a7 7 0 0 1-7-7v-4a7 7 0 0 1 14 0v4a7 7 0 0 1-7 7"/>
  <path fill="currentColor" d="M19 14v-4a7 7 0 1 0-14 0v4a7 7 0 1 0 14 0" opacity=".28"/>
</svg>
