<script>
  /**
   * PiMergeDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'merge icon';
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
  <path fill={color || "currentColor"} d="M12 3c-.372 0-.739.13-1.035.376a21.6 21.6 0 0 0-3.78 4.074 1 1 0 0 0 .897 1.577l2.022-.167a23 23 0 0 1 3.792 0l2.022.167a1 1 0 0 0 .896-1.577 21.6 21.6 0 0 0-3.779-4.074A1.62 1.62 0 0 0 12 3" /> <path d="M12 7.782V13l-6 7m12 0-3.429-4" opacity=".28" />
</svg>
