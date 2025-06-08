<script>
  /**
   * PiGitCompareDuoStroke icon from the duo-stroke style in development category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'git-compare icon';
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
  <path d="M18 15V11C18 8.23858 15.7614 6 13 6M6 9V13C6 15.7614 8.23858 18 11 18" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M3 6C3 7.65685 4.34315 9 6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
