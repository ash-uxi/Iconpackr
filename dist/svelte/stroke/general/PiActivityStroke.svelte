<script>
  /**
   * PiActivityStroke icon from the stroke style in general category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'activity icon';
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
  <path d="M2 12H5.27924C5.70967 12 6.09181 11.7246 6.22792 11.3162L9 3L15 21L17.7721 12.6838C17.9082 12.2754 18.2903 12 18.7208 12H22" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
