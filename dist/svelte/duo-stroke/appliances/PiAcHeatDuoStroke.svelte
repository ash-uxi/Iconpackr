<script>
  /**
   * PiAcHeatDuoStroke icon from the duo-stroke style in appliances category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'ac-heat icon';
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
  <path d="M18 8H16M17.2367 15C18.9126 16.5325 19.8156 17.6013 19.8156 19.4211C19.8156 20.8108 18.6399 22 17.2367 22C15.8334 22 14.6577 20.8108 14.6577 19.4211C14.6577 18.9963 14.8172 18.5759 15.0261 18.3158C16.9332 19.6308 18.5055 17.1874 17.2367 15Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M20 4H4C2.89543 4 2 4.89543 2 6V12H22V6C22 4.89543 21.1046 4 20 4Z" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
