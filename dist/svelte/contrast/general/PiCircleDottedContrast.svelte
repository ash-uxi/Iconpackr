<script>
  /**
   * PiCircleDottedContrast icon from the contrast style in general category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'circle-dotted icon';
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
  <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 0 18.3 0 9.15 9.15 0 0 0-18.3 0" opacity=".28"/>
  <path d="M7.425 4.08v.01M4.08 7.421v.01m-1.23 4.563v.01m1.23 4.562v.01m3.345 3.333v.01M12 21.14v.01m4.575-1.24v.01m3.345-3.353v.01m1.23-4.583v.01m-1.23-4.582v.01M16.575 4.08v.01M12 2.85v.01"/>
</svg>
