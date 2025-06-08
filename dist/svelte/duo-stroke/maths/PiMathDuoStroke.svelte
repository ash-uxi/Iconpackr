<script>
  /**
   * PiMathDuoStroke icon from the duo-stroke style in maths category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'math icon';
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
  <path d="M17 11V7M17 7V3M17 7L13 7M17 7H21M3 21L6 18M6 18L9 15M6 18L3 15M6 18L9 21" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M3 7H9M14 16H21M14 20H21" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
