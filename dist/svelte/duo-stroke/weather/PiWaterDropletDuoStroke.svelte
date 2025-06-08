<script>
  /**
   * PiWaterDropletDuoStroke icon from the duo-stroke style in weather category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'water-droplet icon';
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
  <path d="M12.0001 3C25.0001 14 17.7121 21 12.0001 21C6.28813 21 -0.999873 14 12.0001 3Z" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M19.2569 14C19.4749 18.446 15.4499 21 11.9999 21C8.54986 21 4.52486 18.446 4.74286 14" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
