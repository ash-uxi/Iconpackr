<script>
  /**
   * PiStopCircleContrast icon from the contrast style in media category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'stop-circle icon';
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
  <path fill="currentColor" d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3" opacity=".28"/>
  <path d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3"/>
  <path d="M9 10.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 9 10.04 9 10.6 9h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 9.76 15 10.04 15 10.6v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C14.24 15 13.96 15 13.4 15h-2.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C9 14.24 9 13.96 9 13.4z"/>
</svg>
