<script>
  /**
   * PiPlaylistDefaultDuoStroke icon from the duo-stroke style in media category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'playlist-default icon';
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
  <path d="M3 14C3 12.5999 3 11.8998 3.27248 11.365C3.51217 10.8946 3.89462 10.5122 4.36502 10.2725C4.8998 10 5.59987 10 7 10H17C18.4001 10 19.1002 10 19.635 10.2725C20.1054 10.5122 20.4878 10.8946 20.7275 11.365C21 11.8998 21 12.5999 21 14V18C21 19.4001 21 20.1002 20.7275 20.635C20.4878 21.1054 20.1054 21.4878 19.635 21.7275C19.1002 22 18.4001 22 17 22H7C5.59987 22 4.8998 22 4.36502 21.7275C3.89462 21.4878 3.51217 21.1054 3.27248 20.635C3 20.1002 3 19.4001 3 18V14Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M5 6H19M7 2.00127L17 2" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
