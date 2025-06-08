<script>
  /**
   * PiGitCommitContrast icon from the contrast style in development category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'git-commit icon';
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
  <path fill="currentColor" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0" opacity=".28"/>
  <path d="M15 12a3 3 0 1 1-6 0m6 0a3 3 0 1 0-6 0m6 0h6M9 12H3"/>
</svg>
