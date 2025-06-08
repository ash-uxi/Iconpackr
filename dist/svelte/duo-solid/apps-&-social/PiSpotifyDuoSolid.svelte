<script>
  /**
   * PiSpotifyDuoSolid icon from the duo-solid style in apps-&-social category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'spotify icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  
   style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path fill={color || "currentColor"} d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15 22.15 17.606 22.15 12 17.606 1.85 12 1.85" opacity=".28" /> <path d="M15.05 15.876A10 10 0 0 0 10.95 15 10 10 0 0 0 8 15.443m8.246-2.32A12.95 12.95 0 0 0 10.951 12c-1.195 0-2.352.161-3.451.463m10-2.066A15.9 15.9 0 0 0 10.951 9C9.588 9 8.264 9.17 7 9.492" />
</svg>
