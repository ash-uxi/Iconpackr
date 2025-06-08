<script>
  /**
   * PiAcDefaultDuoSolid icon from the duo-solid style in appliances category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'ac-default icon';
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
  <path d="M18 12h-2" /> <path fill={color || "currentColor"} d="M4 7a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-6a3 3 0 0 0-3-3z" opacity=".28" />
</svg>
