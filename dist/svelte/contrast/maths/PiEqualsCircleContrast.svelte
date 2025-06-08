<script>
  /**
   * PiEqualsCircleContrast icon from the contrast style in maths category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'equals-circle icon';
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
  <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" opacity=".28"/>
  <path d="M9 10h6m-6 4h6m6.15-2a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0"/>
</svg>
