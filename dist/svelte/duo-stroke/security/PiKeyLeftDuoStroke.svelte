<script>
  /**
   * PiKeyLeftDuoStroke icon from the duo-stroke style in security category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'key-left icon';
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
  <path d="M22 12C22 14.2091 20.2091 16 18 16C15.7909 16 14 14.2091 14 12C14 9.79086 15.7909 8 18 8C20.2091 8 22 9.79086 22 12Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M6 12H2V15M6 12H14M6 12V14" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
