<script>
  /**
   * PiAudioBars02DuoStroke icon from the duo-stroke style in media category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'audio-bars-02 icon';
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
  <path d="M2 10V13M10 3V21M18 5V18" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M6 6V17M14 8V15M22 10V13" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
