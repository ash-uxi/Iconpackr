<script>
  /**
   * PiQueueDuoSolid icon from the duo-solid style in general category.
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
  
   style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M3 15h18M3 20h18" opacity=".28" /> <path fill={color || "currentColor"} d="M6 3a4 4 0 1 0 0 8h12a4 4 0 0 0 0-8z" />
</svg>
