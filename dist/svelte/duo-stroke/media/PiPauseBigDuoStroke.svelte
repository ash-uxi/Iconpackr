<script>
  /**
   * PiPauseBigDuoStroke icon from the duo-stroke style in media category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'pause-big icon';
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
  <path d="M15 6V18" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9 6V18" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
