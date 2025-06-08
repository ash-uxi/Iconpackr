<script>
  /**
   * PiMicOnStroke icon from the stroke style in media category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'mic-on icon';
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
  <path d="M12 20C7.58172 20 4 16.4183 4 12M12 20C16.4183 20 20 16.4183 20 12M12 20V22M12 16C9.79086 16 8 14.2091 8 12V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V12C16 14.2091 14.2091 16 12 16Z" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
