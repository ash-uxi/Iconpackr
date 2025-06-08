<script>
  /**
   * PiGitPullRequestContrast icon from the contrast style in development category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'git-pull-request icon';
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
  <g fill="currentColor" opacity=".28">
    <path d="M21 18a3 3 0 1 0-6 0 3 3 0 0 0 6 0M9 6a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>
  </g>
  <path d="M6 9v12M6 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6m12 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 0v-4a5 5 0 0 0-5-5"/>
</svg>
