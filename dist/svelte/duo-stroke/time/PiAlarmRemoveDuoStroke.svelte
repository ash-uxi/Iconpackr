<script>
  /**
   * PiAlarmRemoveDuoStroke icon from the duo-stroke style in time category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'alarm-remove icon';
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
  <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M5 3L2 6M19 3L22 6M9 13H15" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
