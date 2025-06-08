<script>
  /**
   * PiFloorLampOnDuoStroke icon from the duo-stroke style in appliances category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'floor-lamp-on icon';
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
  <path d="M12 21V10M9 21H15" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M8 13L7 15M16 13L17 15M18 10L16.0633 4.35135C15.7862 3.54297 15.026 3 14.1714 3H9.82857C8.974 3 8.21384 3.54297 7.93668 4.35135L6 10H18Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
