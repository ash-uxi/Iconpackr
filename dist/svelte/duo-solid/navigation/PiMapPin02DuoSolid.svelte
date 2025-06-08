<script>
  /**
   * PiMapPin02DuoSolid icon from the duo-solid style in navigation category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'map-pin-02 icon';
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
  <path d="M12 21v-8" opacity=".28" /> <path fill={color || "currentColor"} d="M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12" />
</svg>
