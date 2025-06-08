<script>
  /**
   * PiUserSearchContrast icon from the contrast style in users category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'user-search icon';
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
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4 19a4 4 0 0 1 4-4h3.25v.28A6 6 0 0 0 11 17c0 1.27.394 2.446 1.066 3.416V21H6a2 2 0 0 1-2-2M19.121 19.121a3 3 0 1 0-4.242-4.243 3 3 0 0 0 4.242 4.243"/>
  </g>
  <path d="M11.254 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h2.29M21 21l-1.879-1.879m0 0a3 3 0 1 0-4.242-4.243 3 3 0 0 0 4.242 4.243M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
</svg>
