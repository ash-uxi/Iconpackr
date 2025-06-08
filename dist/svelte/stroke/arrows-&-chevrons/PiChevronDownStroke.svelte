<script>
  /**
   * PiChevronDownStroke icon from the stroke style in arrows-&-chevrons category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'chevron-down icon';
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
  <path d="M8 10.1392C9.06206 11.601 10.3071 12.9104 11.7021 14.0334C11.8774 14.1744 12.1226 14.1744 12.2979 14.0334C13.6929 12.9104 14.9379 11.601 16 10.1392" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
