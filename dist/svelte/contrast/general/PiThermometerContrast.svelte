<script>
  /**
   * PiThermometerContrast icon from the contrast style in general category.
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
  <path d="M12 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 0v-7"/>
  <path fill="currentColor" d="M15 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0z" opacity=".28"/>
  <path d="M15 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0z"/>
</svg>
