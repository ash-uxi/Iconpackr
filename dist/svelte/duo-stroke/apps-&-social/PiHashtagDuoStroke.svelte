<script>
  /**
   * PiHashtagDuoStroke icon from the duo-stroke style in apps-&-social category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'hashtag icon';
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
  <path d="M19.5 15H3.5M20.5 9H4.5" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M7 20L10 4M14 20L17 4" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
