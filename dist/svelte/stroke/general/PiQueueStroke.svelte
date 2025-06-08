<script>
  /**
   * PiQueueStroke icon from the stroke style in general category.
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
  <path d="M3 15H21M3 20H21M6 10H18C19.6569 10 21 8.65685 21 7C21 5.34315 19.6569 4 18 4H6C4.34315 4 3 5.34315 3 7C3 8.65685 4.34315 10 6 10Z" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
