<script>
  /**
   * PiAwardMedalDuoStroke icon from the duo-stroke style in general category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'award-medal icon';
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
  <path d="M16.3653 14.4727L18 22.0002C13.7136 19.336 10.2864 19.336 6 22.0002L7.63465 14.4727" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
