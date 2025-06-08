<script>
  /**
   * PiWhistleDuoStroke icon from the duo-stroke style in sports category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'whistle icon';
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
  <path d="M11 10H20C20.5523 10 21 10.4477 21 11V12.6869C21 13.1605 20.6677 13.5692 20.204 13.6658L13.9742 14.9637C13.9913 15.1402 14 15.3191 14 15.5C14 18.5376 11.5376 21 8.5 21C5.46243 21 3 18.5376 3 15.5C3 12.4624 5.46243 10 8.5 10H11ZM11 10V12" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M11 3V6M16 5L15 6M6 5L7 6" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
