<script>
  /**
   * PiBurgerContrast icon from the contrast style in food category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'burger icon';
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
    <path d="M21 8.757c0-6.342-18-6.342-18 0C3 9.443 3.61 10 4.36 10h15.28c.75 0 1.36-.557 1.36-1.243M5.4 20A2.4 2.4 0 0 1 3 17.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6 2.4 2.4 0 0 1-2.4 2.4z"/>
  </g>
  <path d="M20.333 13.5c-.947.667-2.385.667-3.333 0-.947-.667-2.386-.667-3.333 0s-2.386.667-3.334 0c-.947-.667-2.385-.667-3.333 0-.947.667-2.386.667-3.333 0M4.36 10h15.278C20.391 10 21 9.443 21 8.757c0-6.342-18-6.342-18 0C3 9.443 3.61 10 4.36 10M3.6 17h16.8a.6.6 0 0 1 .6.6 2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 17.6a.6.6 0 0 1 .6-.6"/>
</svg>
