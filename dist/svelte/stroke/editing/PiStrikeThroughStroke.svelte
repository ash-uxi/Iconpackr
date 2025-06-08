<script>
  /**
   * PiStrikeThroughStroke icon from the stroke style in editing category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'strike-through icon';
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
  <path d="M12 12C14.2712 12 17 12.4351 17 15.8679C17 20.9381 8.33063 21.3742 7.14564 17M12 12L21 12M12 12L3 12M7 8.13207C7 3.06192 15.6694 2.62579 16.8544 7" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
