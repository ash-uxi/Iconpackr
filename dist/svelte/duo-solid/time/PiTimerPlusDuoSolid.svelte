<script>
  /**
   * PiTimerPlusDuoSolid icon from the duo-solid style in time category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'timer-plus icon';
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
  <path fill={color || "currentColor"} d="M10 1a1 1 0 0 0 0 2h1v2.055A9.001 9.001 0 0 0 12 23a9 9 0 0 0 1-17.945V3h1a1 1 0 1 0 0-2z" opacity=".28" /> <path d="M12 17v-3m0 0v-3m0 3H9m3 0h3m4.366-8.678 1.06 1.06" />
</svg>
