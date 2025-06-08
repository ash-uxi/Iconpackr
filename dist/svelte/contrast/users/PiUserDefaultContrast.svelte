<script>
  /**
   * PiUserDefaultContrast icon from the contrast style in users category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'user-default icon';
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
  <g fill="currentColor" opacity=".28">
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M16 15H8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 4 4 0 0 0-4-4"/>
  </g>
  <path d="M16 15H8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 4 4 0 0 0-4-4M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
</svg>
