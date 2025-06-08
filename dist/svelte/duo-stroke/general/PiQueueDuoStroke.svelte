<script>
  /**
   * PiQueueDuoStroke icon from the duo-stroke style in general category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'queue icon';
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
  <path d="M3 15H21M3 20H21" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M3 7C3 5.34315 4.34315 4 6 4H18C19.6569 4 21 5.34315 21 7C21 8.65685 19.6569 10 18 10H6C4.34315 10 3 8.65685 3 7Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
