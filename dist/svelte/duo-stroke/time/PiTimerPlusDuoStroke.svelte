<script>
  /**
   * PiTimerPlusDuoStroke icon from the duo-stroke style in time category.
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
  fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M12 16.9999V13.9999M12 13.9999V10.9999M12 13.9999H9M12 13.9999H15M19.3662 5.32178L20.4269 6.38244" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M12 2V6M12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6ZM10 2H14" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
