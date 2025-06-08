<script>
  /**
   * PiInformationCircleContrast icon from the contrast style in alerts category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'information-circle icon';
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
  <path d="M12 12v4m0-7.375v-.001M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/>
  <path fill="currentColor" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" opacity=".28"/>
</svg>
