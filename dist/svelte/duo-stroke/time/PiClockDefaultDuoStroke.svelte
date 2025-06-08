<script>
  /**
   * PiClockDefaultDuoStroke icon from the duo-stroke style in time category.
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
  fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M11.9996 21.1501C17.053 21.1501 21.1496 17.0535 21.1496 12.0001C21.1496 6.94669 17.053 2.8501 11.9996 2.8501C6.9462 2.8501 2.84961 6.94669 2.84961 12.0001C2.84961 17.0535 6.9462 21.1501 11.9996 21.1501Z" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M12 8V12.8164C12 12.9874 12.0873 13.1465 12.2316 13.2383L15 15" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
