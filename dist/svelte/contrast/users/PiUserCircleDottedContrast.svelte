<script>
  /**
   * PiUserCircleDottedContrast icon from the contrast style in users category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'user-circle-dotted icon';
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
    <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6M8.5 16h7c1.867 0 3.393 1.393 3.495 3.147A9.97 9.97 0 0 1 12 22a9.97 9.97 0 0 1-6.995-2.853C5.107 17.393 6.633 16 8.5 16"/>
  </g>
  <path d="M12 2h.01M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0M15.5 16h-7c-1.867 0-3.393 1.393-3.495 3.147A9.97 9.97 0 0 0 12 22a9.97 9.97 0 0 0 6.995-2.853C18.893 17.393 17.367 16 15.5 16M15.826 2.761h.01M19.065 4.924h.01M2 12h.01M2.757 8.154h.01M2.767 15.872h.01M21.22 15.872h.01M21.226 8.154h.01M22 12h.01M4.929 4.924h.01M8.17 2.761h.01"/>
</svg>
