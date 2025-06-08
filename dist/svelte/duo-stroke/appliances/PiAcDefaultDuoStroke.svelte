<script>
  /**
   * PiAcDefaultDuoStroke icon from the duo-stroke style in appliances category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'ac-default icon';
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
  <path d="M18 12H16" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M20 8H4C2.89543 8 2 8.89543 2 10V16H22V10C22 8.89543 21.1046 8 20 8Z" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
