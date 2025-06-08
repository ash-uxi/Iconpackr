<script>
  /**
   * PiOfficeDeskStroke icon from the stroke style in building category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'office-desk icon';
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
  <path d="M16 13H18" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M16 9H18" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M21 5V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H16.2C15.0799 19 14.5198 19 14.092 18.782C13.7157 18.5903 13.4097 18.2843 13.218 17.908C13 17.4802 13 16.9201 13 15.8V9M21 5H13M21 5H22M3 5H13M3 5H2M3 5V9M13 5V9M3 19V9M3 9H13" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
