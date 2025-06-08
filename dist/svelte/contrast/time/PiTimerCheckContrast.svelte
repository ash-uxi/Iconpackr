<script>
  /**
   * PiTimerCheckContrast icon from the contrast style in time category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'timer-check icon';
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
  <path d="M12 2v4m0 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-2-4h4m5.366 3.322 1.06 1.06M9 14.286l2.007 2.005A13.06 13.06 0 0 1 15 12"/>
  <path fill="currentColor" d="M20 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0" opacity=".28"/>
</svg>
