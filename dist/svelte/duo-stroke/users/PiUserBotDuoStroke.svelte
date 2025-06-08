<script>
  /**
   * PiUserBotDuoStroke icon from the duo-stroke style in users category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'user-bot icon';
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
  <path d="M12 5H10C8.89543 5 8 5.89543 8 7V9C8 10.1046 8.89543 11 10 11H14C15.1046 11 16 10.1046 16 9V7C16 5.89543 15.1046 5 14 5H12ZM12 5V3" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M8 15C5.79086 15 4 16.7909 4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19C20 16.7909 18.2091 15 16 15H8Z" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
