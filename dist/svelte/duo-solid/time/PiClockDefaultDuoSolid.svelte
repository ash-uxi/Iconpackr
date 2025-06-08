<script>
  /**
   * PiClockDefaultDuoSolid icon from the duo-solid style in time category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'clock-default icon';
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
  <path fill={color || "currentColor"} d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15c5.605 0 10.15-4.544 10.15-10.15S17.605 1.85 12 1.85" opacity=".28" /> <path d="M12 7.9v4.916a.5.5 0 0 0 .232.422l2.812 1.79" />
</svg>
