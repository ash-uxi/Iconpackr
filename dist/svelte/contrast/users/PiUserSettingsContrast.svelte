<script>
  /**
   * PiUserSettingsContrast icon from the contrast style in users category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'user-settings icon';
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
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4 19a4 4 0 0 1 4-4h4.176l-.004.14-.005.444-.31.317a3 3 0 0 0 0 4.198l.31.317.005.444q0 .07.004.14H6a2 2 0 0 1-2-2"/>
  </g>
  <path d="M11.176 15H8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h5.176M18 18h.01M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m2 7 1.179 1.155 1.65.017.017 1.65L22 18l-1.154 1.179-.018 1.65-1.65.017L18 22l-1.179-1.154-1.65-.018-.016-1.65L14 18l1.155-1.179.017-1.65 1.65-.016z"/>
</svg>
