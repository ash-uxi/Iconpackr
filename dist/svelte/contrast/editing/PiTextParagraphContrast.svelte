<script>
  /**
   * PiTextParagraphContrast icon from the contrast style in editing category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'text-paragraph icon';
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
  <path d="M13 3h5m-5 0H9.03a6.03 6.03 0 0 0 0 12.058H13M13 3v12.058M18 3v18m0-18h3m-8 18v-5.942"/>
  <path fill="currentColor" d="M9.03 3H13v12.058H9.03A6.03 6.03 0 0 1 9.03 3" opacity=".28"/>
</svg>
