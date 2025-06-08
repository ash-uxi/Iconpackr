<script>
  /**
   * PiQuestionMarkCircleContrast icon from the contrast style in alerts category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'question-mark-circle icon';
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
  <path fill="currentColor" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" opacity=".28"/>
  <path d="M9.281 9.719A2.719 2.719 0 1 1 13.478 12c-.724.47-1.478 1.137-1.478 2m0 3zM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/>
</svg>
