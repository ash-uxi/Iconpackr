<script>
  /**
   * PiAlarmDefaultDuoSolid icon from the duo-solid style in time category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'alarm-default icon';
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
  <path fill={color || "currentColor"} d="M12 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18" opacity=".28" /> <path d="M5 3 2 6m17-3 3 3m-10 4v3.717a.5.5 0 0 0 .243.429L14.5 15.5" />
</svg>
