<script>
  /**
   * PiMapPinDuoStroke icon from the duo-stroke style in navigation category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'map-pin icon';
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
  <path d="M12.0004 21.5C13.9478 21.5 19.7899 17.3889 19.7899 11.2222C19.7899 5.05556 14.9215 3 12.0004 3C9.07936 3 4.21094 5.05556 4.21094 11.2222C4.21094 17.3889 10.053 21.5 12.0004 21.5Z" stroke={color || "currentColor"} stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M12.0011 13.7105C13.6144 13.7105 14.9222 12.4027 14.9222 10.7895C14.9222 9.17621 13.6144 7.86841 12.0011 7.86841C10.3879 7.86841 9.08008 9.17621 9.08008 10.7895C9.08008 12.4027 10.3879 13.7105 12.0011 13.7105Z" stroke={color || "currentColor"} stroke-width="2" fill="none"/>
</svg>
