<script>
  /**
   * PiCloudDefaultContrast icon from the contrast style in weather category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'cloud-default icon';
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
  <path fill="currentColor" d="M22 14.5a5.5 5.5 0 0 1-5.5 5.5h-10a4.5 4.5 0 0 1-.483-8.974 6.5 6.5 0 0 1 12.651-1.582A5.5 5.5 0 0 1 22 14.5" opacity=".28"/>
  <path d="M6.017 11.026a6.5 6.5 0 0 1 12.651-1.582A5.501 5.501 0 0 1 16.5 20h-10a4.5 4.5 0 0 1-.483-8.974m0 0A6.6 6.6 0 0 0 6.174 13"/>
</svg>
