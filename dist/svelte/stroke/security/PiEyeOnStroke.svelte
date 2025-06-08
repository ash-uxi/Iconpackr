<script>
  /**
   * PiEyeOnStroke icon from the stroke style in security category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'eye-on icon';
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
  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M21 12C21 14 17.5 19 12 19C6.5 19 3 14 3 12C3 10 6.5 5 12 5C17.5 5 21 10 21 12Z" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
