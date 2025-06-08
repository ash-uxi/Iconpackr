<script>
  /**
   * PiMapLocationDuoStroke icon from the duo-stroke style in navigation category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'map-location icon';
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
  <path d="M12 7H12.01M16.2101 7.44444C16.2101 10.7778 13.0522 13 11.9996 13C10.947 13 7.78906 10.7778 7.78906 7.44444C7.78906 4.11111 10.4206 3 11.9996 3C13.5785 3 16.2101 4.11111 16.2101 7.44444Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
  <path d="M19.4521 5.28784C19.942 5.4015 20.3738 5.69648 20.6578 6.11731C21 6.62437 21 7.45779 21 9.12463V15.0223C21 15.7402 21 16.0992 20.8907 16.4161C20.794 16.6963 20.6363 16.9516 20.4288 17.1634C20.1943 17.4029 19.8732 17.5634 19.2311 17.8845L16.4311 19.2845C15.9064 19.5468 15.644 19.678 15.3688 19.7297C15.1251 19.7754 14.8749 19.7754 14.6312 19.7297C14.356 19.678 14.0936 19.5468 13.5689 19.2845L10.4164 17.7082C9.9061 17.4531 9.65092 17.3255 9.38374 17.2732C9.13031 17.2237 8.86969 17.2237 8.61626 17.2732C8.34908 17.3255 8.09388 17.4531 7.58359 17.7082C6.09273 18.4537 5.34729 18.8264 4.74074 18.7471C4.17221 18.6727 3.66292 18.358 3.34218 17.8827C3 17.3757 3 16.5422 3 14.8754V8.97772C3 8.25981 3 7.90085 3.10931 7.58394C3.20597 7.30369 3.36373 7.04843 3.57116 6.83664C3.74896 6.65511 3.97646 6.51894 4.35579 6.32385" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
</svg>
