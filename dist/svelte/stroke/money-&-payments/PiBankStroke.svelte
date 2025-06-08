<script>
  /**
   * PiBankStroke icon from the stroke style in money-&-payments category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'bank icon';
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
  <path d="M2 21H22M4 13L4 18M9 13L9 18M15 13L15 18M20 13V18M22 10H2V9L10.08 2.94C10.7685 2.42361 11.1128 2.16542 11.4909 2.06589C11.8246 1.97804 12.1754 1.97804 12.5091 2.06589C12.8872 2.16542 13.2315 2.42361 13.92 2.94L22 9V10Z" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
