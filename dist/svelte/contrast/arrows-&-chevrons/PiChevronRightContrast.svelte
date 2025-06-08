<script>
  /**
   * PiChevronRightContrast icon from the contrast style in arrows-&-chevrons category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'chevron-right icon';
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
  <path d="M13.894 11.702A20.4 20.4 0 0 0 10 8a53 53 0 0 1 0 8 20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596"/>
  <path fill="currentColor" d="M13.894 11.702A20.4 20.4 0 0 0 10 8l.304 4L10 16a20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596" opacity=".28"/>
</svg>
