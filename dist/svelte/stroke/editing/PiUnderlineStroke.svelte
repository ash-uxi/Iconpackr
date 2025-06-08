<script>
  /**
   * PiUnderlineStroke icon from the stroke style in editing category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'underline icon';
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
  <path d="M17 20H7M17 4V10.6667C17 13.4281 14.7614 15.6667 12 15.6667C9.23858 15.6667 7 13.4281 7 10.6667V4" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
