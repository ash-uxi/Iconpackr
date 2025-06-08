<script>
  /**
   * PiSpinnerDuoStroke icon from the duo-stroke style in general category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'spinner icon';
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
  <path d="M19.0782 19.0785L16.2498 16.2501M19.0782 5L16.2498 7.82843M4.92139 19.0785L7.74981 16.2501M4.92139 5L7.74981 7.82843" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M6 12H2M22 12H18M12 2V6M12 18V22" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
