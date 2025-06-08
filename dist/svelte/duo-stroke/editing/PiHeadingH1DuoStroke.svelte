<script>
  /**
   * PiHeadingH1DuoStroke icon from the duo-stroke style in editing category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'heading-h1 icon';
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
  <path d="M19 18V10C18.0376 10.2357 17.3021 10.8984 16.8657 11.7713M19 18H16.5M19 18H21.5" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M4 12H12M4 18V6M12 18V6" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
