<script>
  /**
   * PiEqualsCancelDuoStroke icon from the duo-stroke style in maths category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'equals-cancel icon';
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
  <path d="M5 21L19 3" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M5 9H14.3333M15 15L19 15M18.9805 9H19M5 15H9.66667" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
