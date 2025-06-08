<script>
  /**
   * PiLeafDuoStroke icon from the duo-stroke style in weather category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'leaf icon';
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
  <path d="M13 10.5C13 10.5 5 14 5 20.5" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M5.33932 18.2119C0.33921 2.71194 15.5002 7 19.0002 3C22.0816 14.5 17.8393 22.7119 5.33932 18.2119Z" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
