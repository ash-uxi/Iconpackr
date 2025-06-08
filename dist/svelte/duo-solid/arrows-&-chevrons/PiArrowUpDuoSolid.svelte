<script>
  /**
   * PiArrowUpDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'arrow-up icon';
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
  <path fill={color || "currentColor"} d="M12 4c-.432 0-.864.144-1.22.429a31.2 31.2 0 0 0-5.584 5.807A1 1 0 0 0 6 11.83h12a1 1 0 0 0 .804-1.594 31.2 31.2 0 0 0-5.584-5.807A1.95 1.95 0 0 0 12 4" /> <path d="M12 5v16" opacity=".28" />
</svg>
