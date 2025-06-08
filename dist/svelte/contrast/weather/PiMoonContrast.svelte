<script>
  /**
   * PiMoonContrast icon from the contrast style in weather category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'moon icon';
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
  <path fill="currentColor" d="M21 11.966A6.5 6.5 0 1 1 12.035 3H12a9 9 0 1 0 9 9z" opacity=".28"/>
  <path d="M21 11.966A6.5 6.5 0 1 1 12.035 3H12a9 9 0 1 0 9 9z"/>
</svg>
