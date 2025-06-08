<script>
  /**
   * PiRiveStroke icon from the stroke style in apps-&-social category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'rive icon';
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
  <path d="M4 3H14C16.7614 3 19 5.23858 19 8C19 10.4376 17.2557 12.4678 14.9472 12.9104M9 13H14C14.3238 13 14.6405 12.9692 14.9472 12.9104M14.9472 12.9104L20 21" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
