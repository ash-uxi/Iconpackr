<script>
  /**
   * PiThermometerDuoStroke icon from the duo-stroke style in general category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'thermometer icon';
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
  <path d="M12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17ZM12 17V10" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V15.3542C8.37764 16.0593 8 16.9856 8 18C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18C16 16.9856 15.6224 16.0593 15 15.3542V5Z" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
