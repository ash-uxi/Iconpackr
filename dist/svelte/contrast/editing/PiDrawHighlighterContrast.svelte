<script>
  /**
   * PiDrawHighlighterContrast icon from the contrast style in editing category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'draw-highlighter icon';
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
  <path d="M14 13h-4m4 0a2 2 0 0 1 2 2v5.231M14 13V9.125L12.667 8 10 10.25V13m0 0a2 2 0 0 0-2 2v5.231m8 0a9.15 9.15 0 1 0-8 0m8 0a9.1 9.1 0 0 1-4 .919 9.1 9.1 0 0 1-4-.919"/>
  <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0" opacity=".28"/>
</svg>
