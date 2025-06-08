<script>
  /**
   * PiMicOffDuoStroke icon from the duo-stroke style in media category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'mic-off icon';
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
  <path d="M20 12C20 16.4183 16.4183 20 12 20M12 20V22M12 20C11.2765 20 10.5755 19.904 9.90897 19.724M6.34315 17.6569C4.89543 16.2091 4 14.2091 4 12M9.17157 14.8284C8.44772 14.1046 8 13.1046 8 12V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V8M15.7092 13.5C15.3034 14.5027 14.5027 15.3034 13.5 15.7092" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M22 2L2 22" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
