<script>
  /**
   * PiArrowDownDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'arrow-down icon';
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
  <path d="M12 20V4" opacity=".28" /> <path fill={color || "currentColor"} d="M12 21c-.432 0-.864-.144-1.22-.43a31.2 31.2 0 0 1-5.584-5.806A1 1 0 0 1 6 13.17h12a1 1 0 0 1 .804 1.594 31.2 31.2 0 0 1-5.584 5.807c-.356.285-.788.429-1.22.429" />
</svg>
