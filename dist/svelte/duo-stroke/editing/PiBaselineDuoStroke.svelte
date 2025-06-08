<script>
  /**
   * PiBaselineDuoStroke icon from the duo-stroke style in editing category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'baseline icon';
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
  <path d="M17 20L7 20" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M6 16L8.98243 7.54967C9.90866 4.92532 10.3718 3.61315 11.0542 3.24688C11.6449 2.92983 12.3551 2.92983 12.9458 3.24688C13.6282 3.61315 14.0913 4.92532 15.0176 7.54967L18 16M8 11H16" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
