<script>
  /**
   * PiAcOnSlowStroke icon from the stroke style in appliances category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'ac-on-slow icon';
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
  <path d="M18 8H16M12 16V20M17 16V18.8M7 16V18.8M22 12V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V12H22Z" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
