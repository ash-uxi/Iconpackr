<script>
  /**
   * PiMouseDefaultDuoSolid icon from the duo-solid style in devices category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'mouse-default icon';
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
  <path d="M12 10.05v-2.1" /> <path fill={color || "currentColor"} d="M12 2a8 8 0 0 0-8 8v4a8 8 0 1 0 16 0v-4a8 8 0 0 0-8-8" opacity=".28" />
</svg>
